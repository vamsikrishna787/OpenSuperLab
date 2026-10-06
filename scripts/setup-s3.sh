#!/usr/bin/env bash
# One-time setup: creates an S3 bucket configured for static website hosting.
# Usage: S3_BUCKET=opensuperlab-site AWS_REGION=us-east-1 bash scripts/setup-s3.sh
set -euo pipefail

BUCKET="${S3_BUCKET:?Set S3_BUCKET to a globally unique bucket name}"
REGION="${AWS_REGION:-us-east-1}"

echo "Creating bucket s3://$BUCKET in $REGION ..."
if [ "$REGION" = "us-east-1" ]; then
  aws s3api create-bucket --bucket "$BUCKET" --region "$REGION"
else
  aws s3api create-bucket --bucket "$BUCKET" --region "$REGION" \
    --create-bucket-configuration LocationConstraint="$REGION"
fi

echo "Allowing public read via bucket policy ..."
aws s3api put-public-access-block --bucket "$BUCKET" --public-access-block-configuration \
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=false,RestrictPublicBuckets=false

POLICY=$(sed "s/BUCKET_NAME/$BUCKET/" "$(dirname "$0")/../aws/bucket-policy.json")
aws s3api put-bucket-policy --bucket "$BUCKET" --policy "$POLICY"

# index.html is also the error document so React Router handles deep links like /labs/agents.
echo "Enabling static website hosting ..."
aws s3 website "s3://$BUCKET" --index-document index.html --error-document index.html

echo
echo "Done. Website endpoint:"
echo "  http://$BUCKET.s3-website-$REGION.amazonaws.com"
echo "(some regions use s3-website.<region> instead of s3-website-<region>)"
