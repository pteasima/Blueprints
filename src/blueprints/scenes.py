"""Viewer named scenes (camera / cuts / opacity recipes) for the WebGL shell.

Coordinates are CAD millimetres converted to metres on the same axes as the
build123d GLB (X eave↔eave, Y kitchen↔living, Z up). This differs from the
USDZ Y-up remapping used for Quick Look.
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Sequence


_CAD_MM_TO_M = 0.001


def cad_mm_to_m(point: Sequence[float]) -> list[float]:
    """CAD mm (x, y, z) → GLB metres (same axes)."""
    x, y, z = point
    return [x * _CAD_MM_TO_M, y * _CAD_MM_TO_M, z * _CAD_MM_TO_M]


def write_scenes_json(model_id: str, scenes: list[dict[str, Any]], dest: Path) -> Path:
    """Write `docs/models/<id>.scenes.json` (empty list clears custom scenes)."""
    dest = dest.resolve()
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(
        json.dumps(scenes, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    return dest
