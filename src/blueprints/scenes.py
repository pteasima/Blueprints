"""Viewer named scenes (camera / cuts / opacity recipes) for the WebGL shell.

build123d/OCCT writes GLBs with a root rotation that maps CAD Z-up → glTF Y-up:

  (x, y, z)_cad_mm  →  (x, z, −y)_gltf_m

So in the viewer: X = eave↔eave, Y = up, Z = −(kitchen↔living).
Scene JSON must use these glTF metres (same as mesh world space after load).
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Sequence


_CAD_MM_TO_M = 0.001


def cad_mm_to_gltf_m(point: Sequence[float]) -> list[float]:
    """CAD mm (x, y_length, z_up) → glTF metres (x, y_up, −y_length)."""
    x, y, z = point
    return [x * _CAD_MM_TO_M, z * _CAD_MM_TO_M, -y * _CAD_MM_TO_M]


# Back-compat alias used by early scene drafts.
cad_mm_to_m = cad_mm_to_gltf_m


def write_scenes_json(model_id: str, scenes: list[dict[str, Any]], dest: Path) -> Path:
    """Write `docs/models/<id>.scenes.json` (empty list clears custom scenes)."""
    dest = dest.resolve()
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(
        json.dumps(scenes, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    return dest


def write_parts_json(model_id: str, groups: list[dict[str, Any]], dest: Path) -> Path:
    """Write `docs/models/<id>.parts.json` (nested group tree; ids only)."""
    dest = dest.resolve()
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(
        json.dumps(groups, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    return dest
