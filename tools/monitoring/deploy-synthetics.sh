#!/bin/bash

# Deploy CloudWatch Synthetics Canary for UI Monitoring

set -e

CANARY_NAME="immortal-ragdoll-ui-monitor"
REGION="us-east-1"
ROLE_NAME="CloudWatchSyntheticsRole-${CANARY_NAME}"

echo "🔍 Deploying CloudWatch Synthetics for UI monitoring..."

# Create IAM role for Synthetics
aws iam create-role \
    --role-name $ROLE_NAME \
    --assume-role-policy-document '{
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                    "Service": "lambda.amazonaws.com"
                },
                "Action": "sts:AssumeRole"
            }
        ]
    }' \
    --region $REGION || echo "Role may already exist"

# Attach required policies
aws iam attach-role-policy \
    --role-name $ROLE_NAME \
    --policy-arn arn:aws:iam::aws:policy/CloudWatchSyntheticsExecutionRolePolicy \
    --region $REGION

# Create S3 bucket for artifacts
BUCKET_NAME="immortal-ragdoll-synthetics-artifacts"
aws s3 mb s3://$BUCKET_NAME --region $REGION || echo "Bucket may already exist"

# Package canary code
cd tools/monitoring
zip -r synthetics-canary.zip synthetics-canary.js

# Upload to S3
aws s3 cp synthetics-canary.zip s3://$BUCKET_NAME/

# Create the canary
ROLE_ARN=$(aws iam get-role --role-name $ROLE_NAME --query 'Role.Arn' --output text)

aws synthetics create-canary \
    --name $CANARY_NAME \
    --code S3Bucket=$BUCKET_NAME,S3Key=synthetics-canary.zip,Handler=synthetics-canary.handler \
    --execution-role-arn $ROLE_ARN \
    --schedule Expression="rate(30 minutes)" \
    --runtime-version syn-nodejs-puppeteer-6.2 \
    --artifact-s3-location s3://$BUCKET_NAME/canary-artifacts/ \
    --region $REGION

echo "✅ Synthetics canary deployed successfully!"
echo "📊 Monitor at: https://console.aws.amazon.com/cloudwatch/home?region=$REGION#synthetics:canary/detail/$CANARY_NAME"