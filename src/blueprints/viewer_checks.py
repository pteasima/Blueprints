"""Run a viewer script that does not need Three.js."""

from __future__ import annotations

import subprocess
from pathlib import Path

VIEWER_DIR = Path(__file__).resolve().parent / "viewer"


def run_viewer_script(name: str) -> None:
    script = VIEWER_DIR / name
    subprocess.run(["node", str(script)], cwd=VIEWER_DIR, check=True)
