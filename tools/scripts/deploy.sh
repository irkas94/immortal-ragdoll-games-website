#!/bin/bash

# Immortal Ragdoll Games - Automated Deployment Script
# Version: 1.0.0
# Usage: ./deploy.sh [environment] [--skip-build] [--no-cache-invalidation]

set -e

# Configuration
ENVIRONMENT=${1:-production}
S3_BUCKET="immortal-ragdoll-games-website"
CLOUDFRONT_ID="ETMGPIO632BKT"
REGION="us-east-1"
PROJECT_DIR="/home/irina/immortal-ragdoll-website"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging
LOG_FILE="deployment-$(date +%Y%m%d-%H%M%S).log"

log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a $LOG_FILE
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a $LOG_FILE
    exit 1
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" | tee -a $LOG_FILE
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a $LOG_FILE
}

# Parse arguments
SKIP_BUILD=false
NO_CACHE_INVALIDATION=false

for arg in "$@"; do
    case $arg in
        --skip-build)
            SKIP_BUILD=true
            shift
            ;;
        --no-cache-invalidation)
            NO_CACHE_INVALIDATION=true
            shift
            ;;
    esac
done

# Pre-flight checks
log "🔍 Running pre-flight checks..."

# Check if AWS CLI is installed and configured
if ! command -v aws &> /dev/null; then
    error "AWS CLI is not installed. Please install it first."
fi

# Check AWS credentials
if ! aws sts get-caller-identity &> /dev/null; then
    error "AWS credentials not configured or invalid."
fi

# Check if project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
    error "Project directory not found: $PROJECT_DIR"
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    error "Node.js is not installed."
fi

success "Pre-flight checks passed"

# Change to project directory
cd $PROJECT_DIR

# Build project (unless skipped)
if [ "$SKIP_BUILD" = false ]; then
    log "📦 Building project for $ENVIRONMENT..."
    
    # Install dependencies if node_modules doesn't exist
    if [ ! -d "node_modules" ]; then
        log "📥 Installing dependencies..."
        npm install
    fi
    
    # Build the project
    if npm run build; then
        success "Build completed successfully"
    else
        error "Build failed"
    fi
    
    # Verify build output
    if [ ! -f "out/index.html" ]; then
        error "Build output missing - index.html not found"
    fi
    
    # Check build size
    BUILD_SIZE=$(du -sh out/ | cut -f1)
    log "📊 Build size: $BUILD_SIZE"
else
    warning "Skipping build (--skip-build flag used)"
    
    # Verify existing build
    if [ ! -d "out" ] || [ ! -f "out/index.html" ]; then
        error "No existing build found. Remove --skip-build flag or run build first."
    fi
fi

# Create backup of current production (optional)
log "💾 Creating backup of current production..."
BACKUP_DIR="backups/backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p $BACKUP_DIR

if aws s3 sync s3://$S3_BUCKET/ $BACKUP_DIR/ --region $REGION --quiet; then
    success "Backup created: $BACKUP_DIR"
else
    warning "Backup failed - continuing with deployment"
fi

# Upload to S3
log "☁️ Uploading to S3 bucket: $S3_BUCKET..."

# Upload with optimized cache headers
if aws s3 sync out/ s3://$S3_BUCKET/ \
    --region $REGION \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "*.html" \
    --exclude "*.xml" \
    --exclude "*.txt" \
    --exclude "*.json"; then
    
    # Upload HTML files with shorter cache
    aws s3 sync out/ s3://$S3_BUCKET/ \
        --region $REGION \
        --cache-control "public, max-age=3600" \
        --include "*.html" \
        --include "*.xml" \
        --include "*.txt" \
        --include "*.json"
    
    success "Files uploaded to S3"
else
    error "S3 upload failed"
fi

# Verify S3 upload
S3_FILE_COUNT=$(aws s3 ls s3://$S3_BUCKET/ --recursive | wc -l)
LOCAL_FILE_COUNT=$(find out/ -type f | wc -l)

if [ $S3_FILE_COUNT -eq $LOCAL_FILE_COUNT ]; then
    success "S3 file count matches local build ($S3_FILE_COUNT files)"
else
    warning "File count mismatch - S3: $S3_FILE_COUNT, Local: $LOCAL_FILE_COUNT"
fi

# CloudFront cache invalidation
if [ "$NO_CACHE_INVALIDATION" = false ]; then
    log "🔄 Invalidating CloudFront cache..."
    
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_ID \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)
    
    if [ $? -eq 0 ]; then
        success "Cache invalidation created: $INVALIDATION_ID"
        log "⏱️ Invalidation may take 5-15 minutes to complete"
    else
        error "CloudFront invalidation failed"
    fi
else
    warning "Skipping cache invalidation (--no-cache-invalidation flag used)"
fi

# Post-deployment verification
log "🔍 Running post-deployment verification..."

# Check if website is accessible
SITE_URL="https://d2jntjhquosg39.cloudfront.net"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" $SITE_URL)

if [ $HTTP_CODE -eq 200 ]; then
    success "Website is accessible (HTTP $HTTP_CODE)"
else
    warning "Website returned HTTP $HTTP_CODE - may need time to propagate"
fi

# Check CloudFront distribution status
DISTRIBUTION_STATUS=$(aws cloudfront get-distribution \
    --id $CLOUDFRONT_ID \
    --query 'Distribution.Status' \
    --output text)

log "📊 CloudFront distribution status: $DISTRIBUTION_STATUS"

# Generate deployment summary
log "📋 Deployment Summary:"
log "   Environment: $ENVIRONMENT"
log "   S3 Bucket: $S3_BUCKET"
log "   CloudFront ID: $CLOUDFRONT_ID"
log "   Build Size: $BUILD_SIZE"
log "   Files Deployed: $S3_FILE_COUNT"
log "   Website URL: $SITE_URL"
log "   Log File: $LOG_FILE"

if [ "$NO_CACHE_INVALIDATION" = false ]; then
    log "   Invalidation ID: $INVALIDATION_ID"
fi

success "🚀 Deployment completed successfully!"

# Optional: Send notification (webhook, email, etc.)
# Uncomment and configure as needed
# curl -X POST "https://hooks.slack.com/your-webhook" \
#   -H 'Content-type: application/json' \
#   --data '{"text":"Immortal Ragdoll Games website deployed successfully!"}'

log "✅ All done! Website should be live at: $SITE_URL"

exit 0
