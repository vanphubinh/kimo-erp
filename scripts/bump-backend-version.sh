#!/usr/bin/env bash
# Update backend Cargo workspace.package.version (run from backend/).
set -euo pipefail

version="${1:?usage: bump-backend-version.sh <semver>}"

if [[ ! -f Cargo.toml ]]; then
  echo "error: Cargo.toml not found (cwd=$(pwd))" >&2
  exit 1
fi

perl -i -0pe 's/(\[workspace\.package\][^\[]*?^version\s*=\s*)"[^"]*"/${1}"'"${version}"'"/ms' Cargo.toml

grep -q "^version = \"${version}\"" Cargo.toml || {
  echo "error: failed to set workspace.package.version to ${version}" >&2
  exit 1
}

echo "backend workspace.package.version -> ${version}"
