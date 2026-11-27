"""Run `python -m ground_floor` to export the model (same as the old script)."""
from pathlib import Path

from blueprints.export_utils import export_shape, summarize_params, write_lazy_layers
from blueprints.scenes import write_doors_json

from . import (
    MODEL_LABEL,
    MODEL_NAME,
    build,
    ifc_index,
    part_groups,
    scenes,
)

shape, meta = build()
paths = export_shape(
    shape,
    MODEL_NAME,
    scenes=scenes(),
    part_groups=part_groups(),
    label=MODEL_LABEL,
    ifc_index=ifc_index(),
)
motions = meta.get("door_motions") or []
repo = Path(__file__).resolve().parents[2]
write_doors_json(MODEL_NAME, motions, repo / "docs" / "models" / f"{MODEL_NAME}.doors.json")
write_doors_json(
    MODEL_NAME,
    meta.get("window_motions") or [],
    repo / "docs" / "models" / f"{MODEL_NAME}.windows.json",
)
write_lazy_layers(MODEL_NAME, meta.get("lazy_layers") or {}, repo / "docs" / "models")
print(f"Built {MODEL_NAME}: {summarize_params(meta['derived'])}")
if meta["openings_skipped"]:
    print("  not cut:", ", ".join(item["id"] for item in meta["openings_skipped"]))
if meta["openings_failed"]:
    print("  failed:", ", ".join(meta["openings_failed"]))
for fmt, path in paths.items():
    print(f"  {fmt}: {path}")
