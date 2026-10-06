#!/usr/bin/env bash
# Uploads the built site (dist/) to S3. Run `npm run build` first, or use `npm run deploy`.
# Usage: bash scripts/deploy.sh  (defaults target opensuperlab.com; override with S3_BUCKET / CLOUDFRONT_DISTRIBUTION_ID)
# The bucket is private and served only through CloudFront (opensuperlab.com, www.opensuperlab.com).
set -euo pipefail

BUCKET="${S3_BUCKET:-opensuperlab.com-site}"
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID-E1S8O86961PAHH}"
DIST_DIR="$(dirname "$0")/../dist"

[ -f "$DIST_DIR/index.html" ] || { echo "dist/ not found - run npm run build first"; exit 1; }

# Hashed assets can be cached forever.
aws s3 sync "$DIST_DIR" "s3://$BUCKET" --delete \
  --exclude "index.html" \
  --cache-control "public, max-age=31536000, immutable"

# index.html must always be revalidated so new deploys show up immediately.
aws s3 cp "$DIST_DIR/index.html" "s3://$BUCKET/index.html" \
  --cache-control "no-cache" --content-type "text/html"

if [ -n "${CLOUDFRONT_DISTRIBUTION_ID:-}" ]; then
  aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" --paths "/*"
fi

echo "Deployed to s3://$BUCKET -> https://opensuperlab.com"
