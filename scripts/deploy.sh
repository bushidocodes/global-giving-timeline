#!/bin/bash
aws s3 rm s3://www.gg-t17.org --recursive
aws s3 sync ./dist/ s3://www.gg-t17.org --exclude "assets/*"
aws s3 sync ./dist/ s3://www.gg-t17.org --include "assets/*" --cache-control max-age=604800
aws cloudfront create-invalidation --distribution-id E3J7SMM5RNJ0CG --paths "/*"
