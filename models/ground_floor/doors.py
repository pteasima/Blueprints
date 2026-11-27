"""Door classification, glazed leaves, and viewer opening motions."""
from __future__ import annotations

import math

from build123d import Align, Box, Compound, Pos

from blueprints.scenes import cad_mm_to_gltf_m

from .constants import (
    DOOR_LEAF_MM,
    GLAZED_DOOR_FRAME_MM,
    GLAZED_DOOR_GLASS_MM,
    LABEL_DOOR,
    LABEL_GLAZING,
    MM,
)
from .paint import _color, _mm, _paint
from .walls import _place, _solids


# A single swing leaf. Wider panels are pocket or sliding leaves modelled as
# one slab (bedroom OP03, terrace D5/D6). They slide instead of swinging; see
# _sliding_panels for how the slab splits into panels.
HINGED_LEAF_MAX_M = 1.4
_SLIDING_OPS = frozenset(
    {
        "SLIDING_TO_LEFT",
        "SLIDING_TO_RIGHT",
        "DOUBLE_DOOR_SLIDING",
        "DOUBLE_DOOR_SINGLE_SWING",
        "DOUBLE_DOOR_DOUBLE_SWING",
        "FOLDING_TO_LEFT",
        "FOLDING_TO_RIGHT",
        "DOUBLE_DOOR_FOLDING",
        "REVOLVING",
        "ROLLINGUP",
    }
)
# Sectional overhead door (the garage doors D5/D6, Petr 2026-11-12). IFC4's
# IfcDoorTypeOperationEnum has no sectional value, so the door is
# ``OperationType: USERDEFINED`` with this name in a property set
# (``UserDefinedOperationType``, the IFC attribute yaml-ifc does not write).
SECTIONAL_OPERATION = "SECTIONAL_OVERHEAD"
# Simplified sectional door for the viewer (not product data): the leaf is
# cut into this many equal horizontal sections that run up a vertical track,
# round a quarter bend of this radius at the leaf head, and then run
# horizontally into the room under the ceiling. 4 sections of about 0.56 m
# for a 2.25 m opening is typical for residential garage doors.
SECTIONAL_SECTIONS = 4
SECTIONAL_BEND_MM = 300.0
# The sectional leaf hangs behind the opening, on the inner wall face, so its
# track does not cut through the lintel. Clearance from the face:
SECTIONAL_FACE_GAP_MM = 20.0
# Hinge side is along the host wall. Facing local +Y (looking toward −Y),
# start/L is the left jamb. Swing +1 opens toward local +Y.
# SINGLE_SWING_LEFT / RIGHT name that same pair; the file does not set them.
_SWING_OPS = {
    "SINGLE_SWING_LEFT": ("start", 1),
    "DOUBLE_SWING_LEFT": ("start", 1),
    "SINGLE_SWING_RIGHT": ("end", 1),
    "DOUBLE_SWING_RIGHT": ("end", 1),
}


def _door_field(filler: dict, name: str):
    if filler.get(name) is not None:
        return filler.get(name)
    for pset in filler.get("PropertySets") or []:
        props = pset.get("Properties") or {}
        if name in props and props[name] is not None:
            return props[name]
    return None


def _hinge_side(value) -> str:
    """``start``/``L`` or ``end``/``R`` along the wall axis. Default start."""
    if value is None:
        return "start"
    text = str(value).strip().lower()
    if text in {"end", "r", "right"}:
        return "end"
    return "start"


def _opens_toward_plus_y(value) -> int:
    """+1 opens toward local +Y, −1 toward local −Y. Default +1."""
    if value is None:
        return 1
    if isinstance(value, str):
        text = value.strip().lower()
        if text in {"-", "-1", "m", "-y", "minus"}:
            return -1
        return 1
    try:
        return 1 if float(value) >= 0 else -1
    except (TypeError, ValueError):
        return 1


def flush_leaf_offset_m(
    flush_toward_plus_y: int,
    thickness_m: float,
    leaf_thickness_m: float,
    *,
    axis_is_face: bool = False,
) -> float:
    """Metres along local +Y that put the leaf flush with a wall face.

    ``flush_toward_plus_y`` is +1 to sit flush on the local +Y face of the
    wall, −1 on the −Y face. The leaf's face on that side is coplanar with
    the wall face, and the leaf occupies the wall (it does not stick out
    into the circulation side). When ``axis_is_face`` (a wall whose axis is
    the drawn silná line, not a centre-line — W-017), the axis itself is
    the face and the leaf sits entirely on the room side of it.

    Source: docs/OpeningsSpec.md, Reverse interior doors. Petr 2026-11-12.
    """
    sign = 1 if flush_toward_plus_y >= 0 else -1
    if axis_is_face:
        return -sign * leaf_thickness_m / 2.0
    return sign * (thickness_m - leaf_thickness_m) / 2.0


def _shift_door_leaf(leaf, filler: dict, thickness_m: float, *, axis_is_face: bool):
    """Apply LeafOffset or FlushFace to a wall-local leaf solid. Unchanged if neither is set."""
    offset = _door_field(filler, "LeafOffset")
    if offset is not None:
        return Pos(0.0, _mm(float(offset)), 0.0) * leaf
    flush = _door_field(filler, "FlushFace")
    if flush is None:
        return leaf
    bb = leaf.bounding_box()
    leaf_t_m = (float(bb.max.Y) - float(bb.min.Y)) / MM
    off = flush_leaf_offset_m(
        _opens_toward_plus_y(flush),
        thickness_m,
        leaf_t_m,
        axis_is_face=axis_is_face,
    )
    return Pos(0.0, _mm(off), 0.0) * leaf


def hinge_rotation_sign(side: str, opens_toward_plus_y: int) -> int:
    """Sign of a 90° rotation about local +Z (glTF +Y) that opens the leaf.

    The leaf runs +X from a start hinge and the opposite way from an end
    hinge. +90° about +Z carries +X toward +Y and −X toward −Y.
    """
    plus_rotation_opens_plus_y = side != "end"
    want_plus = opens_toward_plus_y > 0
    return 1 if plus_rotation_opens_plus_y == want_plus else -1


def is_sectional(filler: dict) -> bool:
    """True for a sectional overhead door (``SECTIONAL_OPERATION``)."""
    return (
        filler.get("OperationType") == "USERDEFINED"
        and _door_field(filler, "UserDefinedOperationType") == SECTIONAL_OPERATION
    )


def _classify_door(filler: dict) -> dict:
    """Hinged, sliding or sectional, from the operation, width and hinge/swing fields."""
    op = filler.get("OperationType")
    width = filler.get("OverallWidth")
    if is_sectional(filler):
        return {
            "id": filler.get("id"),
            "kind": "sectional",
            "side": "start",
            "opens": _opens_toward_plus_y(_door_field(filler, "Swing")),
            "sign": 1,
        }
    sliding = op in _SLIDING_OPS or (
        op not in _SWING_OPS and width is not None and float(width) > HINGED_LEAF_MAX_M
    )
    if op in _SWING_OPS and not sliding:
        side, opens = _SWING_OPS[op]
    else:
        side = _hinge_side(_door_field(filler, "HingeSide"))
        opens = _opens_toward_plus_y(_door_field(filler, "Swing"))
    return {
        "id": filler.get("id"),
        "kind": "sliding" if sliding else "hinged",
        "side": side,
        "opens": opens,
        "sign": hinge_rotation_sign(side, opens),
    }


def _point_cad(location, x: float, y: float, z: float) -> tuple[float, float, float]:
    moved = location * Pos(x, y, z)
    v = moved.position
    return (float(v.X), float(v.Y), float(v.Z))


def is_glazed_door(filler: dict) -> bool:
    """True when ``Pset_DoorCommon.GlazingAreaFraction`` is above zero."""
    value = _door_field(filler, "GlazingAreaFraction")
    try:
        return value is not None and float(value) > 0.0
    except (TypeError, ValueError):
        return False


def _glazed_leaf(leaf, origin, angle, element_id: str):
    """Frame (door label) plus glass pane (glazing label), as one door part.

    The two solids sit in one labelled compound, so the GLB has one
    ``door__<id>__`` node holding both meshes and the viewer swings them
    together. ``leaf`` is the plain slab in wall-local millimetres.
    """
    bb = leaf.bounding_box()
    w = float(bb.max.X - bb.min.X)
    t = float(bb.max.Y - bb.min.Y)
    h = float(bb.max.Z - bb.min.Z)
    f = min(GLAZED_DOOR_FRAME_MM, w / 4.0, h / 4.0)
    inner = Pos(float(bb.min.X) + f, float(bb.min.Y) - 1.0, float(bb.min.Z) + f) * Box(
        w - 2.0 * f, t + 2.0, h - 2.0 * f, align=(Align.MIN, Align.MIN, Align.MIN)
    )
    frame = leaf - inner
    gt = min(GLAZED_DOOR_GLASS_MM, t * 0.6)
    yc = (float(bb.min.Y) + float(bb.max.Y)) / 2.0
    glass = Pos(float(bb.min.X) + f, yc, float(bb.min.Z) + f) * Box(
        w - 2.0 * f, gt, h - 2.0 * f, align=(Align.MIN, Align.CENTER, Align.MIN)
    )
    frame_part = _place(frame, origin, angle, LABEL_DOOR)
    glass_part = _place(glass, origin, angle, LABEL_GLAZING)
    # Named ``glazing__<id>__`` so the viewer gives it the glass material
    # (identityOf stops at the first node with an element id).
    glass_part.element_id = element_id
    part = Compound(children=[frame_part, glass_part])
    part.label = LABEL_DOOR
    part.color = _color(LABEL_DOOR)
    part.element_id = element_id
    return part


def _door_motion(part, filler: dict) -> dict | None:
    """glTF-metre hinge for one placed leaf. None when the solid is not a panel.

    The leaf's local frame (its placement) has X along the wall, Y through the
    thickness, Z up. The pivot sits on the hinge edge, mid-thickness. ``sign``
    is the 90° rotation about glTF +Y.
    """
    spec = _classify_door(filler)
    local = part.moved(part.location.inverse())
    bb = local.bounding_box()
    w = float(bb.max.X - bb.min.X)
    t = float(bb.max.Y - bb.min.Y)
    h = float(bb.max.Z - bb.min.Z)
    if w < 20.0 or t < 1.0 or h < 20.0 or t > w or t > h:
        return None
    x0, y0, z0 = float(bb.min.X), float(bb.min.Y), float(bb.min.Z)
    center_local = (x0 + w / 2.0, y0 + t / 2.0, z0 + h / 2.0)
    hinge_x = x0 if spec["side"] == "start" else x0 + w
    hinge_local = (hinge_x, y0 + t / 2.0, z0 + h / 2.0)
    center = cad_mm_to_gltf_m(_point_cad(part.location, *center_local))
    record = {
        "id": spec["id"],
        "kind": spec["kind"],
        "center": [round(v, 6) for v in center],
    }
    if spec["kind"] == "sectional":
        record.update(_sectional_record(part, (x0, y0, z0, w, t, h), spec["opens"]))
        return record
    if spec["kind"] == "sliding":
        start = cad_mm_to_gltf_m(_point_cad(part.location, x0, y0 + t / 2.0, z0 + h / 2.0))
        end = cad_mm_to_gltf_m(_point_cad(part.location, x0 + w, y0 + t / 2.0, z0 + h / 2.0))
        record["start"] = [round(v, 6) for v in start]
        record["end"] = [round(v, 6) for v in end]
        record["panels"] = _sliding_panels(filler.get("OperationType"), start, end)
        return record
    if spec["kind"] != "hinged":
        return record
    hinge = cad_mm_to_gltf_m(_point_cad(part.location, *hinge_local))
    record["hinge"] = [round(v, 6) for v in hinge]
    record["axis"] = [0.0, 1.0, 0.0]
    record["sign"] = spec["sign"]
    return record


def _sectional_record(part, box, opens: int) -> dict:
    """Viewer fields for a sectional door, glTF metres.

    ``bottom``/``top`` are the leaf's bottom and top edge centres (mid
    thickness) when shut; ``start``/``end`` its jamb ends at mid-height;
    ``inward`` the unit vector into the room the track runs into; and
    ``sections``/``bend`` the viewer's simplified track
    (``SECTIONAL_SECTIONS``, ``SECTIONAL_BEND_MM``).
    """
    x0, y0, z0, w, t, h = box
    yc, xc = y0 + t / 2.0, x0 + w / 2.0

    def at(x, y, z):
        return [round(v, 6) + 0.0 for v in cad_mm_to_gltf_m(_point_cad(part.location, x, y, z))]

    origin = cad_mm_to_gltf_m(_point_cad(part.location, xc, yc, z0))
    toward = cad_mm_to_gltf_m(_point_cad(part.location, xc, yc + 1000.0 * opens, z0))
    inward = [q - p for p, q in zip(origin, toward)]
    norm = math.sqrt(sum(v * v for v in inward)) or 1.0
    return {
        "start": at(x0, yc, z0 + h / 2.0),
        "end": at(x0 + w, yc, z0 + h / 2.0),
        "bottom": at(xc, yc, z0),
        "top": at(xc, yc, z0 + h),
        "inward": [round(v / norm, 6) + 0.0 for v in inward],
        "sections": SECTIONAL_SECTIONS,
        "bend": round(SECTIONAL_BEND_MM / MM, 6),
    }


def _sectional_leaf(leaf, opens: int, y0: float, y1: float):
    """Move a sectional leaf from the wall centre to just inside the wall face."""
    bb = leaf.bounding_box()
    t = float(bb.max.Y - bb.min.Y)
    face = y1 if opens > 0 else y0
    target = face + opens * (SECTIONAL_FACE_GAP_MM + t / 2.0)
    centre = float(bb.min.Y + bb.max.Y) / 2.0
    return Pos(0.0, target - centre, 0.0) * leaf


def _sliding_panels(operation, start, end) -> list[dict]:
    """Panels of a sliding slab for the viewer, glTF metres.

    The model keeps a sliding door as one slab from ``start`` to ``end`` (the
    jamb ends of the leaf, mid-height, mid-thickness). Each panel is a
    fraction ``span`` of that slab and ``slide`` is its full opening move.
    ``SLIDING_TO_LEFT`` / ``SLIDING_TO_RIGHT`` slide the whole slab its own
    width toward the start or end jamb (start is the left jamb, as for
    hinges). Anything else, including no ``OperationType``, is bi-parting:
    two halves, each sliding half the width over its own jamb. That is
    bedroom OP03's double pocket (docs/electrical/rooms/1.11-geometry.md).
    """
    along = [b - a for a, b in zip(start, end)]

    def scaled(factor: float) -> list[float]:
        return [round(v * factor, 6) + 0.0 for v in along]

    if operation == "SLIDING_TO_LEFT":
        return [{"span": [0.0, 1.0], "slide": scaled(-1.0)}]
    if operation == "SLIDING_TO_RIGHT":
        return [{"span": [0.0, 1.0], "slide": scaled(1.0)}]
    return [
        {"span": [0.0, 0.5], "slide": scaled(-0.5)},
        {"span": [0.5, 1.0], "slide": scaled(0.5)},
    ]
