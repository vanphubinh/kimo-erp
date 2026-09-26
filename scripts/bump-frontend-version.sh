#!/usr/bin/env bash
# Update frontend ERP package version (run from frontend/).
set -euo pipefail

version="${1:?usage: bump-frontend-version.sh <semver>}"
pkg="apps/erp/package.json"

if [[ ! -f "$pkg" ]]; then
  echo "error: ${pkg} not found (cwd=$(pwd))" >&2
  exit 1
fi

pnpm --filter erp pkg set "version=${version}"

actual="$(node -p "require('./${pkg}').version")"
if [[ "$actual" != "$version" ]]; then
  echo "error: expected erp version ${version}, got ${actual}" >&2
  exit 1
fi

echo "frontend erp version -> ${version}"
