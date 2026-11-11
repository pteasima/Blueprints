"""Drawer base cabinet, built from its parameters only.

Facts and their sources: docs/design/kitchen-cabinets.md. Numbers Petr did
not give are IKEA METOD / MAXIMERA defaults and are marked there.

Every size here comes from the element's box (Width, Depth, Height in
``furnishings.yaml``) and its ``Pset_KitchenCabinet`` / ``Pset_Drawers``.
Change the box or a parameter and the carcass, the fronts, the drawer boxes
and the slide records all follow. Nothing below is a placed coordinate.

Local frame, millimetres: X along the width (0..W), Y into the cabinet from
the front face (0 = front, W..D = back), Z up from the floor. The front is
at local Y = 0 for every RefDirection used in room 1.02.
"""

from __future__ import annotations

from dataclasses import dataclass

from build123d import Align, Box, Pos

PSET_CABINET = "Pset_KitchenCabinet"
PSET_DRAWERS = "Pset_Drawers"

# IKEA METOD / MAXIMERA defaults, millimetres. See kitchen-cabinets.md.
IKEA_DEFAULTS_MM = {
    "WorktopThickness": 38.0,  # IKEA worktops (e.g. EKBACKEN/KARLBY 38 mm)
    "PlinthHeight": 92.0,  # METOD legs 80–100; 92 keeps the carcass at 800
    "PlinthSetback": 50.0,  # plinth board behind the front face
    "BoardThickness": 18.0,  # METOD carcass sides, bottom, rails
    "FrontThickness": 18.0,  # METOD fronts
    "BackThickness": 8.0,  # carcass back panel
    "FrontGap": 3.0,  # 600×200 grid front is 597×197
    "RailDepth": 80.0,  # top front/back rails
    "SlideClearance": 13.0,  # per side, drawer box to carcass side
    "BoxBottomOffset": 25.0,  # slot bottom to drawer box bottom
    "BoxHeightReserve": 110.0,  # front height minus drawer box side height
    "BoxMinHeight": 60.0,
    "BoxWall": 16.0,  # MAXIMERA side / back
    "BoxRearClearance": 10.0,  # box back to carcass back
    "SlideStep": 50.0,  # slide lengths come in 50 mm steps
}


def _prop(element: dict, pset_name: str, key: str, default=None):
    for pset in element.get("PropertySets") or []:
        if pset.get("Name") != pset_name:
            continue
        props = pset.get("Properties") or {}
        if key in props:
            return props[key]
    return default


def has_drawers(element: dict | None) -> bool:
    return bool(element) and _prop(element, PSET_DRAWERS, "NominalHeights") is not None


def _box(x0, y0, z0, x1, y1, z1):
    return Pos(x0, y0, z0) * Box(x1 - x0, y1 - y0, z1 - z0, align=(Align.MIN,) * 3)


@dataclass(frozen=True)
class Drawer:
    index: int  # 1 = top
    content: str
    nominal: float  # grid slot height
    slot_z0: float
    front: tuple  # x0, y0, z0, x1, y1, z1
    box: tuple  # outer box, same order
    extension: float  # full-extension travel


@dataclass(frozen=True)
class Layout:
    width: float
    depth: float
    height: float
    params: dict
    carcass_height: float
    carcass_z0: float
    carcass_depth: float
    slide_length: float
    drawers: tuple


def _params(element: dict) -> dict:
    out = {}
    for key, default in IKEA_DEFAULTS_MM.items():
        value = _prop(element, PSET_CABINET, key)
        out[key] = default if value is None else float(value) * 1000.0
    return out


def _nominals(raw: str, carcass_height: float) -> list[float]:
    """Top to bottom. ``*`` is the remainder of the carcass height."""
    tokens = str(raw).split()
    fixed = [float(t) * 1000.0 for t in tokens if t != "*"]
    rest = carcass_height - sum(fixed)
    if tokens.count("*") > 1:
        raise ValueError("Pset_Drawers NominalHeights allows one '*'")
    if "*" in tokens and rest <= 0:
        raise ValueError(f"drawers {fixed} do not fit the {carcass_height} carcass")
    if "*" not in tokens and abs(rest) > 0.5:
        raise ValueError(f"drawers sum {sum(fixed)} != carcass {carcass_height}")
    return [rest if t == "*" else float(t) * 1000.0 for t in tokens]


def layout(element: dict, width: float, depth: float, height: float) -> Layout:
    """Every drawer dimension, from the box and the parameters (mm)."""
    p = _params(element)
    carcass_z0 = p["PlinthHeight"]
    carcass_h = height - p["WorktopThickness"] - p["PlinthHeight"]
    carcass_d = depth - p["FrontThickness"]
    t = p["BoardThickness"]
    usable = carcass_d - p["BackThickness"] - p["BoxRearClearance"]
    slide = p["SlideStep"] * int(usable // p["SlideStep"])
    nominals = _nominals(_prop(element, PSET_DRAWERS, "NominalHeights"), carcass_h)
    contents = [c.strip() for c in str(_prop(element, PSET_DRAWERS, "Contents", "")).split(";")]
    g = p["FrontGap"] / 2.0
    drawers = []
    top = carcass_z0 + carcass_h
    for index, nominal in enumerate(nominals, start=1):
        z0 = top - nominal
        front = (g, 0.0, z0 + g, width - g, p["FrontThickness"], top - g)
        box_h = max(p["BoxMinHeight"], nominal - p["BoxHeightReserve"])
        bz0 = z0 + p["BoxBottomOffset"]
        bx0 = t + p["SlideClearance"]
        box = (bx0, p["FrontThickness"], bz0, width - bx0, p["FrontThickness"] + slide, bz0 + box_h)
        content = contents[index - 1] if index - 1 < len(contents) else ""
        drawers.append(Drawer(index, content, nominal, z0, front, box, slide))
        top = z0
    return Layout(width, depth, height, p, carcass_h, carcass_z0, carcass_d, slide, tuple(drawers))


def carcass_solids(lay: Layout, gap: float) -> list:
    """Plinth, carcass and worktop: the parts that do not move."""
    p = lay.params
    w, d, h = lay.width, lay.depth, lay.height
    lo = gap / 2.0
    t, tf = p["BoardThickness"], p["FrontThickness"]
    z0, z1 = lay.carcass_z0, lay.carcass_z0 + lay.carcass_height
    sb = p["PlinthSetback"]
    parts = [
        _box(lo, sb, lo, w - lo, sb + t, z0),  # plinth board
        _box(lo, tf, z0, t, d - lo, z1),  # left side
        _box(w - t, tf, z0, w - lo, d - lo, z1),  # right side
        _box(t, tf, z0, w - t, d - lo, z0 + t),  # bottom
        _box(t, d - p["BackThickness"], z0 + t, w - t, d - lo, z1),  # back
        _box(t, tf, z1 - t, w - t, tf + p["RailDepth"], z1),  # front rail
        _box(t, d - p["BackThickness"] - p["RailDepth"], z1 - t, w - t, d - p["BackThickness"], z1),
        _box(lo, lo, z1, w - lo, d - lo, h - lo),  # worktop on this cabinet
    ]
    return parts


def drawer_solid(dr: Drawer, lay: Layout):
    """Front plus open box, fused so the viewer moves it as one mesh."""
    wall = lay.params["BoxWall"]
    fx0, fy0, fz0, fx1, fy1, fz1 = dr.front
    bx0, by0, bz0, bx1, by1, bz1 = dr.box
    pieces = [
        _box(fx0, fy0, fz0, fx1, fy1, fz1),
        _box(bx0, by0, bz0, bx1, by1, bz0 + wall),  # bottom
        _box(bx0, by0, bz0, bx0 + wall, by1, bz1),  # side
        _box(bx1 - wall, by0, bz0, bx1, by1, bz1),  # side
        _box(bx0, by1 - wall, bz0, bx1, by1, bz1),  # back
    ]
    solid = pieces[0]
    for piece in pieces[1:]:
        solid = solid + piece
    return solid


def drawer_center_local(dr: Drawer) -> tuple[float, float, float]:
    """Bounding-box centre of :func:`drawer_solid`, local mm."""
    xs = (min(dr.front[0], dr.box[0]), max(dr.front[3], dr.box[3]))
    ys = (min(dr.front[1], dr.box[1]), max(dr.front[4], dr.box[4]))
    zs = (min(dr.front[2], dr.box[2]), max(dr.front[5], dr.box[5]))
    return tuple((a + b) / 2.0 for a, b in (xs, ys, zs))
