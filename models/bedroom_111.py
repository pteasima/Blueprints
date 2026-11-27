"""Room 1.11 (Ložnice) field devices on the ground floor.

Source: ``inputs/ground_floor/bedroom-1.11.yaml``. The boxes are the
extrusions ``yaml_ifc`` writes. Faces of the room are measured from
``ground-floor.yaml`` (axis and thickness), not copied from the device file.

    python -m blueprints.export ground_floor
"""

from __future__ import annotations

from pathlib import Path

from yaml_ifc import validation_errors
from yaml_ifc.to_ifc import build_ifc
from yaml_ifc.yamlio import load as load_yaml_ifc

from blueprints.fixture_overrides import load_fixture_document
from blueprints.ifc_helpers import (
    _LIST_CLASS,
    _axis_box,
    _pset_props,
    _solid_from_product,
)
from blueprints.scenes import cad_mm_to_gltf_m


SOURCE_PATH = (
    Path(__file__).resolve().parents[1]
    / "inputs"
    / "ground_floor"
    / "bedroom-1.11.yaml"
)
WALLS_PATH = SOURCE_PATH.with_name("ground-floor.yaml")

MM = 1000.0

# Viewer label per YAML list. lightFixtures is a furnishing list; the rest
# are the electrical lists. Distribution boards and cables are not placed.
DEVICE_LISTS = (
    ("lightFixtures", "light"),
    ("switchingDevices", "switch"),
    ("sensors", "sensor"),
    ("outlets", "outlet"),
    ("actuators", "actuator"),
)


def load_document(path: Path | None = None) -> dict:
    """The device YAML with Petr's edit-mode overrides applied.

    Overrides: inputs/ground_floor/fixture_overrides.json, written from the
    viewer's edit mode (docs/electrical/EditMode.md).
    """
    source = path or SOURCE_PATH
    if not source.is_file():
        return {}
    return load_fixture_document(source)


def device_records(doc: dict | None = None) -> list[dict]:
    """Each placed device plus its list name. The space is not included."""
    data = doc if doc is not None else load_document()
    records = []
    for key, label in DEVICE_LISTS:
        for element in data.get(key) or []:
            records.append({**element, "list": key, "label": label})
    return records


def room_faces(walls_path: Path | None = None) -> dict[str, float]:
    """Inner faces of bay 1.11, metres, from the wall axes.

    North is the south face of W-013 extended across the bay. W-013 starts
    at W-031, so that face is not a wall solid on this bay.
    """
    doc = load_yaml_ifc(walls_path or WALLS_PATH)
    walls = {wall["id"]: wall for wall in doc["walls"]}

    def face(wall_id: str, side: str) -> float:
        wall = walls[wall_id]
        start = wall["Axis"]["Start"]
        thickness = float(wall["Thickness"])
        if side == "east":
            return float(start[0]) + thickness / 2.0
        if side == "west":
            return float(start[0]) - thickness / 2.0
        if side == "north":
            return float(start[1]) + thickness / 2.0
        if side == "south":
            return float(start[1]) - thickness / 2.0
        raise ValueError(side)

    return {
        "west": face("W-030", "east"),
        "east": face("W-031", "west"),
        "south": face("W-002", "north"),
        "north": face("W-013", "south"),
    }


def _under_bed_strip(doc: dict) -> list:
    """Cable 3 is a U: the foot and the two long sides, not the headboard.

    One yaml-ifc box cannot be that U, so the viewer gets three segments
    read from the bed outline. They sit under the mattress.
    """
    bed = next((item for item in doc.get("furniture") or [] if item.get("id") == "BED-1.11"), None)
    if bed is None:
        return []
    props = _pset_props(bed)
    x0, y0 = float(props["X0"]), float(props["Y0"])
    x1, y1 = float(props["X1"]), float(props["Y1"])
    # A move from the viewer edit mode (fixture_overrides.py, OffsetX/Y/Z).
    strip = next((item for item in doc.get("lightFixtures") or [] if item.get("id") == "C3-S"), None)
    shift = _pset_props(strip) if strip else {}
    dx, dy = float(shift.get("OffsetX") or 0.0), float(shift.get("OffsetY") or 0.0)
    x0, x1, y0, y1 = x0 + dx, x1 + dx, y0 + dy, y1 + dy
    inset = 0.02
    foot = (y1 - y0) - 2.0 * inset
    side = (x1 - x0) - inset
    elev = 0.02 + float(shift.get("OffsetZ") or 0.0)
    return [
        _axis_box((x0, y1 - inset, elev), (0.0, -1.0), (foot, inset, inset), "C3-S"),
        _axis_box((x0 + inset, y1 - inset, elev), (1.0, 0.0), (side, inset, inset), "C3-S"),
        _axis_box((x0 + inset, y0, elev), (1.0, 0.0), (side, inset, inset), "C3-S"),
    ]


# Curtain-rail strips: size of the LED profile and its inset from the wall face.
RAIL_STRIP_SIZE = 0.012
# The downlight sits under the 20 mm rail, 4 mm off the wall; the uplight on
# the room side of the rail, its top flush with the rail top, because the bay
# is checked against a 2.50 m ceiling.
RAIL_STRIP_INSET = {"down": 0.004, "up": 0.020}
RAIL_STRIP_IDS = ("C7-S", "C8-S")


def rail_strip_path(element: dict) -> tuple[tuple[float, float], tuple[float, float], tuple[float, float], float, str]:
    """North end, corner, east end, bottom elevation, and ``up``/``down``."""
    props = _pset_props(element)
    return (
        (float(props["X0"]), float(props["Y0"])),
        (float(props["XC"]), float(props["YC"])),
        (float(props["X1"]), float(props["Y1"])),
        float(props["Z"]),
        str(props["Emits"]),
    )


def _rail_strips(doc: dict) -> list:
    """Cables 7 and 8 are each one L along the west and south walls.

    One yaml-ifc box cannot be an L, so the viewer gets two legs per strip,
    read from the path in Pset_YamlIfc. The uplight runs along the top edge
    of the garnýž and the downlight under it (Petr, 2026-11-12).
    """
    found = []
    size = RAIL_STRIP_SIZE
    for element in doc.get("lightFixtures") or []:
        if element.get("id") not in RAIL_STRIP_IDS:
            continue
        (nx, ny), (cx, cy), (ex, ey), z, emits = rail_strip_path(element)
        inset = RAIL_STRIP_INSET[emits]
        if abs(nx - cx) > 1e-6 or abs(cy - ey) > 1e-6:
            raise ValueError(f"{element['id']} is not a west-then-south L")
        west_len = ny - (cy + inset)
        south_len = ex - (cx + inset + size)
        found.append(_axis_box((cx + inset, ny, z), (0.0, -1.0), (west_len, size, size), element["id"]))
        found.append(_axis_box((cx + inset + size, cy + inset, z), (1.0, 0.0), (south_len, size, size), element["id"]))
    return found


def parts(path: Path | None = None) -> list:
    """One solid per boxed device, plus the bed, the rails, the under-bed U and the rail Ls."""
    doc = load_document(path)
    if not doc or not any(doc.get(key) for key, _label in DEVICE_LISTS):
        return []
    labels = {key: label for key, label in DEVICE_LISTS}
    if any(key not in _LIST_CLASS for key in labels):
        raise ValueError("a device list is not in the yaml-ifc schema")
    model = build_ifc(doc)
    errors = validation_errors(model)
    if errors:
        raise ValueError("yaml-ifc bedroom devices failed validation: " + "; ".join(errors))
    found = []
    for key, label in (*DEVICE_LISTS, ("furniture", "furniture")):
        ifc_class = _LIST_CLASS[key]
        for product in model.by_type(ifc_class):
            part = _solid_from_product(product, label, key)
            if part is not None:
                found.append(part)
    found.extend(_under_bed_strip(doc))
    found.extend(_rail_strips(doc))
    return found


def scenes() -> list[dict]:
    """A phone glance into 1.11, the bedroom's ground-floor scene."""
    # Inside the south-west corner, looking toward the bed, the lamp, and the pendant.
    eye = (1.05, 3.45, 1.65)
    target = (2.7, 6.15, 1.35)
    return [
        {
            "id": "bedroom-1.11",
            "hFovDeg": 58,
            "title": {"en": "1.11 bedroom", "cs": "1.11 ložnice"},
            "project": "RD Šíma 1.NP",
            "camera": {
                "target": cad_mm_to_gltf_m(tuple(value * MM for value in target)),
                "position": cad_mm_to_gltf_m(tuple(value * MM for value in eye)),
                "up": [0.0, 1.0, 0.0],
            },
        },
    ]
