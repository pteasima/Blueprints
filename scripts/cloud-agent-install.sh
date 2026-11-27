#!/usr/bin/env bash
# Idempotent Cloud Agent / local bootstrap.
# Default Cursor images often lack ensurepip, so `python3 -m venv` fails
# unless python3.12-venv is installed first.
set -euo pipefail

cd "$(dirname "$0")/.."

export DEBIAN_FRONTEND=noninteractive

if ! dpkg -s python3.12-venv >/dev/null 2>&1 || ! dpkg -s libcairo2 >/dev/null 2>&1 || ! dpkg -s git-lfs >/dev/null 2>&1 || ! dpkg -s libglu1-mesa >/dev/null 2>&1; then
  sudo apt-get update -qq
  sudo apt-get install -y --no-install-recommends python3.12-venv libcairo2 git-lfs libglu1-mesa
fi

git lfs install --local

if [[ ! -x .venv/bin/pip ]]; then
  rm -rf .venv
  python3 -m venv .venv
fi

# shellcheck disable=SC1091
source .venv/bin/activate
python -m pip install -U pip
python -m pip install -e ".[dev]"
python -c "import build123d, cairosvg, gmsh, matplotlib, ifcopenshell, shapely, yaml_ifc"

# Viewer bundles (src/blueprints/viewer/build.mjs) are built, not committed:
# the offline HTML export embeds viewer.iife.js and the Pages preview uses dist/.
if command -v npm >/dev/null 2>&1; then
  npm --prefix src/blueprints/viewer ci --no-audit --no-fund
  npm --prefix src/blueprints/viewer run build
else
  echo "npm not found: install Node 24 to build the viewer (npm run build in src/blueprints/viewer)" >&2
fi
