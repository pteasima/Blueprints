#!/usr/bin/env bash
# Idempotent Cloud Agent / local bootstrap.
# Default Cursor images often lack ensurepip, so `python3 -m venv` fails
# unless python3.12-venv is installed first.
set -euo pipefail

cd "$(dirname "$0")/.."

export DEBIAN_FRONTEND=noninteractive

if ! dpkg -s python3.12-venv >/dev/null 2>&1 || ! dpkg -s libcairo2 >/dev/null 2>&1; then
  sudo apt-get update -qq
  sudo apt-get install -y --no-install-recommends python3.12-venv libcairo2
fi

if [[ ! -x .venv/bin/pip ]]; then
  rm -rf .venv
  python3 -m venv .venv
fi

# shellcheck disable=SC1091
source .venv/bin/activate
python -m pip install -U pip
python -m pip install -e ".[dev]"
python -c "import build123d, cairosvg; from pxr import Usd"
