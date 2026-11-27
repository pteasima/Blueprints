"""Repo and export path helpers."""

from __future__ import annotations

from pathlib import Path
from typing import Any

# This file lives at src/blueprints/export_utils/paths.py.
_PACKAGE_DIR = Path(__file__).resolve().parent
_BLUEPRINTS_DIR = _PACKAGE_DIR.parent
REPO_ROOT = _BLUEPRINTS_DIR.parent.parent
EXPORTS_DIR = REPO_ROOT / "exports"
VIEWER_DIR = _BLUEPRINTS_DIR / "viewer"
VIEWER_IIFE_PATH = VIEWER_DIR / "viewer.iife.js"


def ensure_export_dir(model_name: str) -> Path:
    # Look up EXPORTS_DIR on the package so tests can monkeypatch
    # blueprints.export_utils.EXPORTS_DIR.
    from blueprints.export_utils import EXPORTS_DIR

    out = EXPORTS_DIR / model_name
    out.mkdir(parents=True, exist_ok=True)
    return out


def summarize_params(params: dict[str, Any]) -> str:
    return ", ".join(f"{k}={v}" for k, v in params.items())
