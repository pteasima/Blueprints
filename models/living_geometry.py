"""Detail solids for living-room furnishings.

The YAML box is the overall size. A builder fills that box, inset by the
mesh gap, so the bounding box matches the plain box the kitchen uses.
``None`` means the caller keeps the plain box.

Assumed part sizes (millimetres), not on the plan:

* Gatta top 30, apron 60 high by 20 thick, set in 40; legs 50 square,
  set in 80. Catalog height is the box.
* Chair legs 40 square, seat board 36, back board 20. Seat top 450,
  back top is the box.
* Bookshelf sides and top 20, shelf boards 20, three shelves in four
  equal openings. Lamella slats 40 wide, 20 gap, 12 thick, on the back.
"""

from __future__ import annotations

from build123d import Align, Box, Compound, Pos

# Object types drawn as oak rather than upholstery.
OAK_TYPES = frozenset({"DiningTable", "DiningChair", "Bookshelf"})

_CHAIR_SEAT_MM = 450.0
_CHAIR_SEAT_T = 36.0
_CHAIR_LEG = 40.0
_CHAIR_BACK_T = 20.0

_TABLE_TOP_T = 30.0
_TABLE_APRON_H = 60.0
_TABLE_APRON_T = 20.0
_TABLE_APRON_INSET = 40.0
_TABLE_LEG = 50.0
_TABLE_LEG_INSET = 80.0

_CASE_T = 20.0
_LAMELLA_W = 40.0
_LAMELLA_GAP = 20.0
_LAMELLA_T = 12.0
_SHELVES = 3


def _box(x0: float, y0: float, z0: float, x1: float, y1: float, z1: float):
    if x1 - x0 < 0.2 or y1 - y0 < 0.2 or z1 - z0 < 0.2:
        return None
    return Pos(x0, y0, z0) * Box(
        x1 - x0,
        y1 - y0,
        z1 - z0,
        align=(Align.MIN, Align.MIN, Align.MIN),
    )


def _prop(element: dict, pset_name: str, key: str, default=None):
    for pset in element.get("PropertySets") or []:
        if pset.get("Name") != pset_name:
            continue
        props = pset.get("Properties") or {}
        if key in props:
            return props[key]
    return default


def _chair(width: float, depth: float, height: float, gap: float, facing: str):
    lo = gap / 2.0
    x1, y1, z1 = width - lo, depth - lo, height - lo
    seat_top = min(_CHAIR_SEAT_MM, z1 - _CHAIR_BACK_T)
    seat_bot = seat_top - _CHAIR_SEAT_T
    parts = [
        _box(lo, lo, seat_bot, x1, y1, seat_top),
        _box(lo, lo, lo, lo + _CHAIR_LEG, lo + _CHAIR_LEG, seat_bot),
        _box(x1 - _CHAIR_LEG, lo, lo, x1, lo + _CHAIR_LEG, seat_bot),
        _box(lo, y1 - _CHAIR_LEG, lo, lo + _CHAIR_LEG, y1, seat_bot),
        _box(x1 - _CHAIR_LEG, y1 - _CHAIR_LEG, lo, x1, y1, seat_bot),
    ]
    if facing == "E":
        parts.append(_box(x1 - _CHAIR_BACK_T, lo, seat_top, x1, y1, z1))
    else:
        parts.append(_box(lo, lo, seat_top, lo + _CHAIR_BACK_T, y1, z1))
    return [part for part in parts if part is not None]


def _table(width: float, depth: float, height: float, gap: float):
    lo = gap / 2.0
    x1, y1, z1 = width - lo, depth - lo, height - lo
    top0 = z1 - _TABLE_TOP_T
    apron0 = top0 - _TABLE_APRON_H
    ix0 = lo + _TABLE_APRON_INSET
    ix1 = x1 - _TABLE_APRON_INSET
    iy0 = lo + _TABLE_APRON_INSET
    iy1 = y1 - _TABLE_APRON_INSET
    parts = [
        _box(lo, lo, top0, x1, y1, z1),
        _box(ix0, iy0, apron0, ix1, iy0 + _TABLE_APRON_T, top0),
        _box(ix0, iy1 - _TABLE_APRON_T, apron0, ix1, iy1, top0),
        _box(ix0, iy0, apron0, ix0 + _TABLE_APRON_T, iy1, top0),
        _box(ix1 - _TABLE_APRON_T, iy0, apron0, ix1, iy1, top0),
    ]
    for x0, y0 in (
        (lo + _TABLE_LEG_INSET, lo + _TABLE_LEG_INSET),
        (x1 - _TABLE_LEG_INSET - _TABLE_LEG, lo + _TABLE_LEG_INSET),
        (lo + _TABLE_LEG_INSET, y1 - _TABLE_LEG_INSET - _TABLE_LEG),
        (x1 - _TABLE_LEG_INSET - _TABLE_LEG, y1 - _TABLE_LEG_INSET - _TABLE_LEG),
    ):
        parts.append(_box(x0, y0, lo, x0 + _TABLE_LEG, y0 + _TABLE_LEG, top0))
    return [part for part in parts if part is not None]


def _bookshelf(width: float, depth: float, height: float, gap: float, shelves: int):
    lo = gap / 2.0
    x1, y1, z1 = width - lo, depth - lo, height - lo
    side = _CASE_T
    top_t = _CASE_T
    board = _CASE_T
    count = shelves if shelves and shelves > 0 else _SHELVES
    parts = [
        _box(lo, lo, lo, lo + side, y1, z1),
        _box(x1 - side, lo, lo, x1, y1, z1),
        _box(lo, lo, z1 - top_t, x1, y1, z1),
    ]
    inner_h = (z1 - top_t) - lo - count * board
    opening = inner_h / (count + 1)
    z = lo
    for _index in range(count):
        z += opening
        parts.append(
            _box(lo + side + 0.5, lo, z, x1 - side - 0.5, y1 - _LAMELLA_T - 0.5, z + board)
        )
        z += board
    slat_pitch = _LAMELLA_W + _LAMELLA_GAP
    span0 = lo + side
    span1 = x1 - side
    count_slats = max(1, int(round((span1 - span0 + _LAMELLA_GAP) / slat_pitch)))
    used = count_slats * _LAMELLA_W + (count_slats - 1) * _LAMELLA_GAP
    cursor = span0 + max(0.0, (span1 - span0 - used) / 2.0)
    for _index in range(count_slats):
        parts.append(_box(cursor, y1 - _LAMELLA_T, lo, cursor + _LAMELLA_W, y1, z1 - top_t))
        cursor += slat_pitch
    return [part for part in parts if part is not None]


def living_detail(element: dict, width: float, depth: float, height: float, gap: float):
    """Local solids in millimetres, or None for a plain box.

    ``width``, ``depth`` and ``height`` are the converter's box, in
    millimetres. The placement origin is the local minimum corner.
    """
    kind = element.get("ObjectType")
    if kind == "DiningChair":
        parts = _chair(width, depth, height, gap, str(_prop(element, "Pset_Chair", "Facing", "W")))
    elif kind == "DiningTable":
        parts = _table(width, depth, height, gap)
    elif kind == "Bookshelf":
        raw = _prop(element, "Pset_Bookshelf", "ShelfCount", _SHELVES)
        parts = _bookshelf(width, depth, height, gap, int(raw))
    else:
        return None
    if not parts:
        return None
    if len(parts) == 1:
        return parts[0]
    return Compound(obj=parts)
