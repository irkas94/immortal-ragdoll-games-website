#!/bin/bash

# Immortal Ragdoll Games - Backup Script
# Creates backups of website and AWS configuration

set -e

# Configuration
S3_BUCKET="immortal-ragdoll-games-website"
CLOUDFRONT_ID="ETMGPIO632BKT"
REGION="us-east-1"
BACKUP_BASE_DIR="/home/irina/immortal-ragdoll-complete/backups"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
BACKUP_DIR="$BACKUP_BASE_DIR/backup-$TIMESTAMP"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Create backup directory
mkdir -p $BACKUP_DIR

log "🗄️ Starting backup process..."

# Backup S3 content
log "📦 Backing up S3 content..."
aws s3 sync s3://$S3_BUCKET/ $BACKUP_DIR/s3-content/ --region $REGION
success "S3 content backed up"

# Backup S3 configuration
log "⚙️ Backing up S3 configuration..."
aws s3api get-bucket-website --bucket $S3_BUCKET > $BACKUP_DIR/s3-website-config.json
aws s3api get-bucket-policy --bucket $S3_BUCKET > $BACKUP_DIR/s3-bucket-policy.json 2>/dev/null || echo "{}" > $BACKUP_DIR/s3-bucket-policy.json
success "S3 configuration backed up"

# Backup CloudFront configuration
log "🌐 Backing up CloudFront configuration..."
aws cloudfront get-distribution --id $CLOUDFRONT_ID > $BACKUP_DIR/cloudfront-distribution.json
success "CloudFront configuration backed up"

# Create backup metadata
cat > $BACKUP_DIR/backup-info.json << EOF
{
  "timestamp": "$TIMESTAMP",
  "s3_bucket": "$S3_BUCKET",
  "cloudfront_id": "$CLOUDFRONT_ID",
  "region": "$REGION",
  "backup_type": "full",
  "created_by": "$(whoami)",
  "aws_account": "$(aws sts get-caller-identity --query Account --output text)"
}
EOF

# Create restore script
cat > $BACKUP_DIR/restore.sh << 'EOF'
#!/bin/bash
# Restore script for this backup

BACKUP_DIR=$(dirname "$0")
source $BACKUP_DIR/backup-info.json

echo "🔄 Restoring from backup..."
echo "Timestamp: $timestamp"
echo "S3 Bucket: $s3_bucket"
echo "CloudFront ID: $cloudfront_id"

read -p "Are you sure you want to restore? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Restoring S3 content..."
    aws s3 sync $BACKUP_DIR/s3-content/ s3://$s3_bucket/ --delete
    
    echo "Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $cloudfront_id --paths "/*"
    
    echo "✅ Restore completed!"
else
    echo "Restore cancelled."
fi
EOF

chmod +x $BACKUP_DIR/restore.sh

# Compress backup (optional)
log "🗜️ Compressing backup..."
cd $BACKUP_BASE_DIR
tar -czf backup-$TIMESTAMP.tar.gz backup-$TIMESTAMP/
COMPRESSED_SIZE=$(du -sh backup-$TIMESTAMP.tar.gz | cut -f1)

success "✅ Backup completed!"
log "📊 Backup location: $BACKUP_DIR"
log "📊 Compressed size: $COMPRESSED_SIZE"
log "📊 Restore script: $BACKUP_DIR/restore.sh"

# Clean up old backups (keep last 10)
log "🧹 Cleaning up old backups..."
cd $BACKUP_BASE_DIR
ls -t backup-*.tar.gz | tail -n +11 | xargs -r rm
success "Old backups cleaned up"

exit 0
