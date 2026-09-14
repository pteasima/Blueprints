#!/usr/bin/env python3
"""Build docs/index.html from docs/models (stdlib only — used by Pages CI)."""

from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))

from blueprints.preview_hub import write_preview_hub  # noqa: E402


def main() -> int:
    path = write_preview_hub()
    print(f"wrote {path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
