# Deployment Guide - Immortal Ragdoll Games Website

## 🚀 Production Deployment

### Current Production Environment
- **Platform:** AWS S3 + CloudFront
- **Region:** us-east-1
- **S3 Bucket:** immortal-ragdoll-games-website
- **CloudFront Distribution:** ETMGPIO632BKT
- **Domain:** https://d2jntjhquosg39.cloudfront.net

## 📋 Prerequisites

### Required Tools
```bash
# AWS CLI
aws --version

# Node.js & npm
node --version
npm --version

# Git (for version control)
git --version
```

### AWS Credentials
Ensure AWS CLI is configured with appropriate permissions:
```bash
aws configure list
aws sts get-caller-identity
```

Required AWS permissions:
- S3: GetObject, PutObject, DeleteObject, ListBucket
- CloudFront: CreateInvalidation, GetDistribution
- IAM: Basic read permissions

## 🏗️ Build Process

### 1. Development Build
```bash
cd immortal-ragdoll-website

# Install dependencies
npm install

# Run development server (optional testing)
npm run dev

# Build for production
npm run build
```

### 2. Build Verification
```bash
# Check build output
ls -la out/

# Verify key files exist
ls out/index.html
ls out/_next/static/
```

### 3. Local Testing (Optional)
```bash
# Test built site locally
cd out
python3 -m http.server 8000

# Visit http://localhost:8000
```

## 🌐 AWS Deployment Steps

### Step 1: S3 Upload
```bash
# Sync files to S3 (from project root)
aws s3 sync out/ s3://immortal-ragdoll-games-website/ \
  --region us-east-1 \
  --delete \
  --cache-control "public, max-age=86400"

# Verify upload
aws s3 ls s3://immortal-ragdoll-games-website/ --recursive
```

### Step 2: CloudFront Cache Invalidation
```bash
# Invalidate CloudFront cache for immediate updates
aws cloudfront create-invalidation \
  --distribution-id ETMGPIO632BKT \
  --paths "/*"

# Check invalidation status
aws cloudfront list-invalidations \
  --distribution-id ETMGPIO632BKT
```

### Step 3: Verification
```bash
# Check CloudFront distribution status
aws cloudfront get-distribution \
  --id ETMGPIO632BKT \
  --query 'Distribution.Status'

# Test website
curl -I https://d2jntjhquosg39.cloudfront.net
```

## 🔄 Automated Deployment Script

### deployment-script.sh
```bash
#!/bin/bash

# Immortal Ragdoll Games - Deployment Script
# Usage: ./deploy.sh [environment]

set -e

ENVIRONMENT=${1:-production}
S3_BUCKET="immortal-ragdoll-games-website"
CLOUDFRONT_ID="ETMGPIO632BKT"
REGION="us-east-1"

echo "🚀 Starting deployment to $ENVIRONMENT..."

# Build the project
echo "📦 Building project..."
npm run build

# Upload to S3
echo "☁️ Uploading to S3..."
aws s3 sync out/ s3://$S3_BUCKET/ \
  --region $REGION \
  --delete \
  --cache-control "public, max-age=86400"

# Invalidate CloudFront
echo "🔄 Invalidating CloudFront cache..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id $CLOUDFRONT_ID \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)

echo "✅ Deployment complete!"
echo "📊 Invalidation ID: $INVALIDATION_ID"
echo "🌐 Website: https://d2jntjhquosg39.cloudfront.net"
echo "⏱️ Cache invalidation may take 5-15 minutes"
```

## 🔧 Environment Configuration

### Production Environment Variables
```bash
# .env.production
NEXT_PUBLIC_SITE_URL=https://d2jntjhquosg39.cloudfront.net
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Build Configuration
```javascript
// next.config.ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  }
};
```

## 📊 Deployment Checklist

### Pre-Deployment
- [ ] Code reviewed and approved
- [ ] Tests passing locally
- [ ] Build completes without errors
- [ ] Local testing completed
- [ ] AWS credentials configured
- [ ] Backup of current production (if needed)

### Deployment
- [ ] Build project (`npm run build`)
- [ ] Upload to S3 (`aws s3 sync`)
- [ ] Invalidate CloudFront cache
- [ ] Verify deployment status
- [ ] Test production URL

### Post-Deployment
- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Mobile responsiveness verified
- [ ] Performance check completed
- [ ] SEO tags verified
- [ ] Analytics tracking confirmed

## 🚨 Rollback Procedure

### Emergency Rollback
```bash
# If you have a backup of previous version
aws s3 sync backup/previous-version/ s3://immortal-ragdoll-games-website/ --delete

# Invalidate cache
aws cloudfront create-invalidation --distribution-id ETMGPIO632BKT --paths "/*"
```

### Version Control Rollback
```bash
# Revert to previous commit
git revert HEAD

# Rebuild and redeploy
npm run build
./deploy.sh
```

## 📈 Performance Optimization

### S3 Optimization
```bash
# Upload with optimized cache headers
aws s3 sync out/ s3://immortal-ragdoll-games-website/ \
  --cache-control "public, max-age=31536000" \
  --exclude "*.html" \
  --exclude "*.xml" \
  --exclude "*.txt"

# HTML files with shorter cache
aws s3 sync out/ s3://immortal-ragdoll-games-website/ \
  --cache-control "public, max-age=3600" \
  --include "*.html" \
  --include "*.xml" \
  --include "*.txt"
```

### CloudFront Optimization
- Enable Gzip compression
- Set appropriate TTL values
- Use HTTP/2 (enabled by default)
- Enable IPv6 (enabled by default)

## 🔍 Monitoring & Logging

### CloudWatch Metrics
Monitor these key metrics:
- CloudFront requests per minute
- S3 bucket size and requests
- Error rates (4xx, 5xx)
- Cache hit ratio

### Health Checks
```bash
# Simple health check script
#!/bin/bash
SITE_URL="https://d2jntjhquosg39.cloudfront.net"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" $SITE_URL)

if [ $HTTP_CODE -eq 200 ]; then
  echo "✅ Site is healthy (HTTP $HTTP_CODE)"
else
  echo "❌ Site issue detected (HTTP $HTTP_CODE)"
  exit 1
fi
```

## 🔒 Security Considerations

### S3 Security
- Bucket policy allows only public read access
- No write permissions for public
- Versioning disabled (static site)
- Server-side encryption optional

### CloudFront Security
- HTTPS enforced (redirect HTTP to HTTPS)
- Security headers can be added via Lambda@Edge
- WAF can be attached if needed
- Origin access identity for enhanced security

## 💰 Cost Monitoring

### Expected Monthly Costs
- S3 Storage: ~$0.10 (1MB)
- CloudFront: $1-3 (first 1TB free)
- Requests: Minimal for static site
- Total: $1-5/month

### Cost Alerts
Set up AWS billing alerts for:
- Monthly spend > $10
- Unusual traffic spikes
- S3 storage growth

## 📞 Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**S3 Upload Fails:**
```bash
# Check AWS credentials
aws sts get-caller-identity

# Check bucket permissions
aws s3api get-bucket-policy --bucket immortal-ragdoll-games-website
```

**CloudFront Not Updating:**
```bash
# Check invalidation status
aws cloudfront list-invalidations --distribution-id ETMGPIO632BKT

# Create new invalidation
aws cloudfront create-invalidation --distribution-id ETMGPIO632BKT --paths "/*"
```

### Support Contacts
- AWS Support: [AWS Console]
- Technical Lead: [Contact Info]
- Emergency: [Emergency Contact]

---

**Last Updated:** June 22, 2025  
**Version:** 1.0.0
