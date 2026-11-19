"""Field devices of every ground-floor room except the bedroom 1.11.

Sources: ``inputs/ground_floor/electrical-<room>.yaml``, one yaml-ifc file per
room in the bedroom format (``bedroom-1.11.yaml``). Each file is loaded through
``blueprints.fixture_overrides.load_fixture_document`` so edit-mode overrides
(docs/electrical/EditMode.md) reach the export.

Boxed devices become the extrusions ``yaml_ifc`` writes, as in
``bedroom_111.parts``. LED strips have no box; ``Pset_YamlIfc.Path`` holds
their runs as ``x,y,z;x,y,z`` points, runs separated by ``|``, and the viewer
gets one thin box per leg.

    python -m blueprints.export ground_floor
"""

from __future__ import annotations

import math
from pathlib import Path

from yaml_ifc import validation_errors
from yaml_ifc.to_ifc import build_ifc

from blueprints.fixture_overrides import load_fixture_document
from blueprints.scenes import cad_mm_to_gltf_m

from bedroom_111 import _LIST_CLASS, _axis_box, _pset_props, _solid_from_product

INPUTS = Path(__file__).resolve().parents[1] / "inputs" / "ground_floor"
MM = 1000.0
STRIP_SIZE = 0.012

# Viewer label per YAML list. Gutter heating is an electric appliance; it is
# drawn in the actuator colour.
DEVICE_LISTS = (
    ("lightFixtures", "light"),
    ("switchingDevices", "switch"),
    ("sensors", "sensor"),
    ("outlets", "outlet"),
    ("actuators", "actuator"),
    ("electricAppliances", "actuator"),
)


def source_paths() -> list[Path]:
    """Every per-room device file, sorted by room number."""
    return sorted(INPUTS.glob("electrical-*.yaml"))


def room_of(path: Path) -> str:
    return path.stem.removeprefix("electrical-")


def load_document(path: Path) -> dict:
    """The room's device YAML with Petr's edit-mode overrides applied."""
    return load_fixture_document(path)


def device_records(doc: dict) -> list[dict]:
    records = []
    for key, label in DEVICE_LISTS:
        for element in doc.get(key) or []:
            records.append({**element, "list": key, "label": label})
    return records


def strip_runs(element: dict) -> list[list[tuple[float, float, float]]]:
    """Runs of a path strip, metres. Empty when the element has no ``Path``."""
    text = str(_pset_props(element).get("Path") or "").strip()
    runs = []
    for run in text.split("|"):
        points = []
        for point in run.split(";"):
            point = point.strip()
            if not point:
                continue
            x, y, z = (float(value) for value in point.split(","))
            points.append((x, y, z))
        if len(points) >= 2:
            runs.append(points)
    return runs


def _strip_parts(element: dict) -> list:
    """One thin box per leg, centred on the leg. Legs are level (one z)."""
    found = []
    half = STRIP_SIZE / 2.0
    for run in strip_runs(element):
        for (x0, y0, z0), (x1, y1, _z1) in zip(run, run[1:]):
            length = math.hypot(x1 - x0, y1 - y0)
            if length < 1e-6:
                continue
            ux, uy = (x1 - x0) / length, (y1 - y0) / length
            # Local +Y is +90° from +X; start half a profile to the right.
            origin = (x0 + uy * half, y0 - ux * half, z0)
            found.append(_axis_box(origin, (ux, uy), (length, STRIP_SIZE, STRIP_SIZE), element["id"]))
    return found


def room_parts(path: Path) -> list:
    doc = load_document(path)
    if not any(doc.get(key) for key, _label in DEVICE_LISTS):
        return []
    model = build_ifc(doc)
    errors = validation_errors(model)
    if errors:
        raise ValueError(f"{path.name} failed yaml-ifc validation: " + "; ".join(errors))
    found = []
    labels = {}
    for key, label in DEVICE_LISTS:
        ifc_class = _LIST_CLASS[key]
        if ifc_class in labels:
            continue
        labels[ifc_class] = label
        for product in model.by_type(ifc_class):
            part = _solid_from_product(product, label, key)
            if part is not None:
                found.append(part)
    for element in doc.get("lightFixtures") or []:
        found.extend(_strip_parts(element))
    return found


def parts() -> list:
    found = []
    for path in source_paths():
        found.extend(room_parts(path))
    return found


def _extent(doc: dict) -> tuple[float, float, float, float] | None:
    xs: list[float] = []
    ys: list[float] = []
    for record in device_records(doc):
        origin = record.get("Origin")
        if origin is not None:
            xs.append(float(origin[0]))
            ys.append(float(origin[1]))
        for run in strip_runs(record):
            for x, y, _z in run:
                xs.append(x)
                ys.append(y)
    if not xs:
        return None
    return min(xs), min(ys), max(xs), max(ys)


def _top(doc: dict) -> float:
    top = 0.0
    for record in device_records(doc):
        if record.get("Elevation") is not None:
            top = max(top, float(record["Elevation"]) + float(record.get("Height") or 0.0))
        for run in strip_runs(record):
            top = max(top, max(z for _x, _y, z in run) + STRIP_SIZE)
    return top


# Clear height per room, from the ground-floor.yaml header (heights-notes.txt,
# column s.v.). A plan cut above the ceiling shows the slab instead of the
# room, so the cut stops at the ceiling; gutter strips higher up are cut off
# there (the PNG preview in docs/previews/electrical shows them). 1.02 has a
# sloped ceiling and is cut above its highest device.
CEILING_M = {
    **{r: 2.50 for r in ("1.03", "1.04", "1.05", "1.06", "1.07", "1.08", "1.09", "1.10")},
    **{r: 2.55 for r in ("1.01", "1.19", "1.20", "1.21", "1.22", "1.23")},
    "1.16": 2.75,
    "1.17": 2.75,
    **{r: 3.00 for r in ("1.12", "1.13", "1.14", "1.15")},
}


def scenes() -> list[dict]:
    """A top view per room, framing its devices (exterior ones included)."""
    found = []
    for path in source_paths():
        doc = load_document(path)
        box = _extent(doc)
        if box is None:
            continue
        room = room_of(path)
        name = (doc.get("spaces") or [{}])[0].get("Name") or room
        x0, y0, x1, y1 = box
        cut_z = max(2.6, _top(doc) + 0.05)
        if room in CEILING_M:
            cut_z = min(cut_z, CEILING_M[room])
        cx, cy = (x0 + x1) / 2.0, (y0 + y1) / 2.0
        half_x = max((x1 - x0) / 2.0 + 0.8, 1.6)
        half_y = max((y1 - y0) / 2.0 + 0.8, 1.6)
        found.append(
            {
                "id": f"plan-{room}",
                "projection": "ortho",
                "title": {"en": f"{name}, top", "cs": f"{name}, půdorys"},
                "project": "RD Šíma 1.NP",
                "cuts": [{"normal": [0.0, -1.0, 0.0], "anchor": [cx * MM, cy * MM, cut_z * MM]}],
                "camera": {
                    "target": cad_mm_to_gltf_m((cx * MM, cy * MM, 0.0)),
                    "position": cad_mm_to_gltf_m((cx * MM, cy * MM, 30.0 * MM)),
                    "up": [0.0, 0.0, -1.0],
                    "orthoFit": [half_x, half_y],
                },
            }
        )
    return found
