"""Wall axes, openings, leaves, and placement helpers."""
from __future__ import annotations

import math

from build123d import Align, Box, Face, Polygon, Pos, Rot, Solid, Vector, Wire

from .constants import (
    CUT_PAD_MM,
    DEFAULT_WALL_HEIGHT_M,
    DOOR_LEAF_MM,
    GLAZED_WALLS,
    LABEL_GLAZING,
    LABEL_MASONRY,
    LEAF_GAP_MM,
    MISSING_THICKNESS_M,
    MM,
    WINDOW_LEAF_MM,
)
from .paint import _mm, _paint


def _axis(wall: dict) -> tuple[tuple[float, float], tuple[float, float], float] | None:
    axis = wall.get("Axis") or {}
    start, end = axis.get("Start"), axis.get("End")
    if not start or not end:
        return None
    sx, sy = float(start[0]), float(start[1])
    ex, ey = float(end[0]), float(end[1])
    length = math.hypot(ex - sx, ey - sy)
    if length < 1e-9:
        raise ValueError(f"{wall.get('id')} has a zero-length axis")
    return (sx, sy), (ex, ey), length


def _thickness_m(wall: dict) -> tuple[float, bool]:
    """Return (thickness metres, True when the file omitted Thickness)."""
    if wall.get("Thickness") is not None:
        return float(wall["Thickness"]), False
    return MISSING_THICKNESS_M, True


def _height_m(wall: dict) -> float:
    if wall.get("Height") is not None:
        return float(wall["Height"])
    return DEFAULT_WALL_HEIGHT_M


def _base_z_m(wall: dict, storey_elevation: float) -> float:
    return storey_elevation + float(wall.get("Elevation") or 0.0)


def _void(opening: dict) -> tuple[float, float, float, float] | None:
    """Along, width, height, sill in metres. None when the void has no height."""
    if opening.get("Height") is None:
        return None
    height = float(opening["Height"])
    if opening.get("SillHeight") is not None:
        sill = float(opening["SillHeight"])
    elif opening.get("HeadHeight") is not None:
        sill = float(opening["HeadHeight"]) - height
    else:
        sill = 0.0
    return float(opening["AlongAxis"]), float(opening["Width"]), height, sill


def _overlap(a0: float, a1: float, b0: float, b1: float) -> float:
    return max(0.0, min(a1, b1) - max(a0, b0))


def _cutter(along, width, sill, oheight, length, y0, y1, wheight, pad: float):
    x0, w = along, width
    z0, h = sill, oheight
    if along <= pad:
        x0 -= pad
        w += pad
    if along + width >= length - pad:
        w += pad
    if sill <= pad:
        z0 -= pad
        h += pad
    if sill + oheight >= wheight - pad:
        h += pad
    depth = (y1 - y0) + 2.0 * pad
    return Pos(x0, (y0 + y1) / 2.0, z0) * Box(
        w, depth, h, align=(Align.MIN, Align.CENTER, Align.MIN)
    )


def _subtract_opening(wall, along, width, sill, oheight, length, y0, y1, wheight):
    for pad in (CUT_PAD_MM, 10.0):
        cutter = _cutter(along, width, sill, oheight, length, y0, y1, wheight, pad)
        try:
            cut = wall - cutter
        except Exception:
            continue
        if cut.volume < wall.volume - 1.0:
            return cut, True
    return wall, False


def _leaf(kind: str, along, width, sill, oheight, thickness, filler: dict):
    overall_w = filler.get("OverallWidth")
    overall_h = filler.get("OverallHeight")
    leaf_w = min(_mm(overall_w) if overall_w is not None else width, width)
    leaf_h = min(_mm(overall_h) if overall_h is not None else oheight, oheight)
    gap = min(LEAF_GAP_MM, leaf_w * 0.04, leaf_h * 0.02)
    if leaf_w > width - 2.0 * gap:
        leaf_w = width - 2.0 * gap
    if kind == "door":
        if leaf_h > oheight - gap:
            leaf_h = oheight - gap
        z = sill
    else:
        if leaf_h > oheight - 2.0 * gap:
            leaf_h = oheight - 2.0 * gap
        z = sill + (oheight - leaf_h) / 2.0
    if leaf_w < 20.0 or leaf_h < 20.0:
        return None
    leaf_t = DOOR_LEAF_MM if kind == "door" else WINDOW_LEAF_MM
    # Keep the nominal leaf on a thin placeholder wall (W-017's 50 mm band
    # is not a measured thickness). Only shrink when the leaf would not fit.
    if leaf_t >= thickness:
        leaf_t = thickness * 0.4
    x = along + (width - leaf_w) / 2.0
    return Pos(x, 0.0, z) * Box(
        leaf_w, leaf_t, leaf_h, align=(Align.MIN, Align.CENTER, Align.MIN)
    )

def _solids(shape):
    found = list(shape.solids())
    return found or [shape]


def _place(shape, origin, angle_deg, label: str):
    moved = Pos(origin[0], origin[1], origin[2]) * Rot(0, 0, angle_deg) * shape
    return _paint(moved, label)


def _wall_label(wall_id: str) -> str:
    return LABEL_GLAZING if wall_id in GLAZED_WALLS else LABEL_MASONRY


def _local_ring_mm(ring, sx: float, sy: float, ux: float, uy: float) -> list[tuple[float, float]]:
    """Plan metres in the Axis frame → millimetres in the wall's local XY."""
    points: list[tuple[float, float]] = []
    for x, y in ring:
        dx, dy = float(x) - sx, float(y) - sy
        local = ((dx * ux + dy * uy) * MM, (-dx * uy + dy * ux) * MM)
        if points and abs(points[-1][0] - local[0]) < 1e-4 and abs(points[-1][1] - local[1]) < 1e-4:
            continue
        points.append(local)
    if (
        len(points) > 1
        and abs(points[0][0] - points[-1][0]) < 1e-4
        and abs(points[0][1] - points[-1][1]) < 1e-4
    ):
        points.pop()
    if len(points) < 3:
        raise ValueError("footprint ring has fewer than 3 corners")
    return points


def _extrude_plan(points: list[tuple[float, float]], height: float):
    face = Face(Wire.make_polygon([Vector(x, y, 0.0) for x, y in points]))
    try:
        return Solid.extrude(face, (0.0, 0.0, height))
    except Exception:
        return Solid.extrude(face.reversed(), (0.0, 0.0, height))


def _span_y(body, thickness: float) -> tuple[float, float]:
    """Local Y extent the opening cutter has to cross."""
    bounds = body.bounding_box()
    half = thickness / 2.0
    return min(float(bounds.min.Y), -half), max(float(bounds.max.Y), half)
