#!/bin/bash

# AWS S3 + CloudFront Deployment Script for Immortal Ragdoll Website
# Make sure you have AWS CLI configured with appropriate credentials

# Configuration - UPDATE THESE VALUES
S3_BUCKET_NAME="immortal-ragdoll-games-website"  # Your S3 bucket name
CLOUDFRONT_DISTRIBUTION_ID="ETMGPIO632BKT"  # Your CloudFront distribution ID
REGION="us-east-1"  # Replace with your preferred region

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting deployment of Immortal Ragdoll Website...${NC}"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Check if out directory exists
if [ ! -d "out" ]; then
    echo -e "${RED}❌ 'out' directory not found. Please run 'npm run build' first.${NC}"
    exit 1
fi

# Validate configuration
if [ "$S3_BUCKET_NAME" = "your-bucket-name" ]; then
    echo -e "${RED}❌ Please update S3_BUCKET_NAME in the script with your actual bucket name.${NC}"
    exit 1
fi

if [ "$CLOUDFRONT_DISTRIBUTION_ID" = "your-distribution-id" ]; then
    echo -e "${YELLOW}⚠️  CloudFront distribution ID not set. Skipping CloudFront invalidation.${NC}"
    SKIP_CLOUDFRONT=true
fi

echo -e "${YELLOW}📦 Syncing files to S3 bucket: $S3_BUCKET_NAME${NC}"

# Sync files to S3 with proper content types and caching headers
aws s3 sync out/ s3://$S3_BUCKET_NAME/ \
    --region $REGION \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "*.html" \
    --exclude "*.txt"

# Upload HTML files with no-cache headers
aws s3 sync out/ s3://$S3_BUCKET_NAME/ \
    --region $REGION \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/html" \
    --include "*.html"

# Upload text files
aws s3 sync out/ s3://$S3_BUCKET_NAME/ \
    --region $REGION \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/plain" \
    --include "*.txt"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Files successfully uploaded to S3!${NC}"
else
    echo -e "${RED}❌ Failed to upload files to S3.${NC}"
    exit 1
fi

# Invalidate CloudFront cache if distribution ID is provided
if [ "$SKIP_CLOUDFRONT" != true ]; then
    echo -e "${YELLOW}🔄 Invalidating CloudFront cache...${NC}"
    
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
        --paths "/*"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ CloudFront cache invalidation initiated!${NC}"
    else
        echo -e "${RED}❌ Failed to invalidate CloudFront cache.${NC}"
    fi
fi

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${YELLOW}📝 Next steps:${NC}"
echo -e "   1. Verify your website at: https://$S3_BUCKET_NAME.s3-website-$REGION.amazonaws.com"
if [ "$SKIP_CLOUDFRONT" != true ]; then
    echo -e "   2. Or via CloudFront (may take a few minutes): https://d2jntjhquosg39.cloudfront.net"
fi
echo -e "   3. Check that all assets are loading correctly"