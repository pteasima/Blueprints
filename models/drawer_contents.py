"""Low-poly items in kitchen drawers (docs/design/kitchen-cabinets.md).

Pilot (t1008u): ``SF-I600a-D1``, the island-west knife drawer (yaml
``Contents``: "nože"). Bins follow the Gridfinity 42 mm pitch and 7 mm
height units already used for the baseplates; they are hollow rectangular
trays (no fillets, magnet holes or lip profiles). Items are simple boxes
and 8-sided prisms, coloured so you can tell a knife from a steel or a
stone at a glance.

Meshes go in the on-demand ``contents`` layer (same pattern as the
Gridfinity baseplates, docs/viewer/Performance.md) and hang on their
drawer in the viewer. They are also an ``IfcGroup``
(``GRP-DRAWER-CONTENTS``, "Drawer contents") so the inspector can hide
them in one toggle. The exact bin arrangement is ``guess:`` / best
judgement from the plan note; only this one drawer is filled so far.
"""

from __future__ import annotations

from collections import defaultdict

from build123d import Align, Box, BuildSketch, Color, Pos, RegularPolygon, extrude

# Viewer / IFC names. The layer id is the Parts leaf; the group id is the
# inspector row. Content products are ``<drawer-id>-CONTENTS``.
LABEL = "contents"
GROUP_ID = "GRP-DRAWER-CONTENTS"
GROUP_NAME = "Drawer contents"
GROUP_TYPE = "DrawerContents"
SUFFIX = "-CONTENTS"

PITCH = 42.0
UNIT = 7.0
BIN_INSET = 0.5  # mm each side (outer = n × 42 − 1)
WALL = 2.0
FLOOR = 1.5
BIN_H = 6 * UNIT  # 42 mm; 70 mm is clear above the 5 mm baseplate in an M box

# Distinct, slightly muted colours so the drawer stays readable.
RGB_BIN = (70, 74, 80)
RGB_STEEL = (196, 200, 206)
RGB_HANDLE_DARK = (28, 24, 22)
RGB_HANDLE_WOOD = (92, 54, 28)
RGB_HANDLE_RED = (110, 36, 32)
RGB_SHEARS = (36, 36, 38)
RGB_STONE = (186, 166, 130)
RGB_OIL = (170, 110, 36)
RGB_CAP = (40, 40, 44)
RGB_CLOTH = (80, 92, 70)
RGB_YELLOW = (196, 164, 48)  # turmeric, mustard
RGB_CREAM = (228, 220, 200)  # salt, mayo, pale oil
RGB_OLIVE = (120, 124, 52)

# Pilot only. More drawers join this dict as later passes fill them.
PILOTS = {
    "SF-I600a-D1": {
        "bay": "SF-I600a",
        "name": "SF-I600a-D1 knives",
        "description": "Knife drawer (nože): Gridfinity bins and a basic knife set",
        "kind": "knives",
    },
    "SF-I500b-D1": {
        "bay": "SF-I500b",
        "name": "SF-I500b-D1 spices",
        "description": "Spice drawer (koření): short jars in 2×2 Gridfinity trays",
        "kind": "spices",
    },
    "SF-I500b-D2": {
        "bay": "SF-I500b",
        "name": "SF-I500b-D2 oils",
        "description": "Oils and condiments (oleje, octy, dochucovadla): standing bottles",
        "kind": "oils",
    },
    "SF-I600b-D1": {
        "bay": "SF-I600b",
        "name": "SF-I600b-D1 cutlery",
        "description": "Cutlery drawer (příbory): shallow Gridfinity trays under the hob",
        "kind": "cutlery",
    },
}

# SF-I500b-D2: E box sides are only 171 mm above the plate, but the drawer
# above (D1 box underside z 782) leaves 300 mm of clear item height above
# the plate (docs/design/kitchen-cabinets.md, "Island west drawer stacks").
# Bottles may stand proud of the E sides; they must stay under this cap.
OIL_CLEAR_ABOVE_PLATE = 300.0
OIL_MAX_H = OIL_CLEAR_ABOVE_PLATE - 20.0  # 280 mm, 20 mm air under D1


def contents_id(drawer_id: str) -> str:
    return f"{drawer_id}{SUFFIX}"


def host_drawer_id(element_id: str) -> str | None:
    """The drawer a ``*-CONTENTS`` product rides in, or None."""
    if element_id.endswith(SUFFIX):
        return element_id[: -len(SUFFIX)]
    return None


def is_pilot(drawer_id: str) -> bool:
    return drawer_id in PILOTS


def ifc_items_for_run(run) -> list[dict]:
    """One IFC product per filled drawer in ``run`` (yaml ids, bay, names)."""
    out = []
    seen = set()
    for part in run.parts:
        if part.drawer is None or part.id in seen or part.id not in PILOTS:
            continue
        seen.add(part.id)
        meta = PILOTS[part.id]
        out.append(
            {
                "id": contents_id(part.id),
                "drawer_id": part.id,
                "bay": meta["bay"],
                "name": meta["name"],
                "description": meta["description"],
            }
        )
    return out


def solids_for(part, drawer, plane, inward: float) -> list:
    """Painted compounds (one per colour) in the world frame, or []."""
    if part.id not in PILOTS or drawer is None or not drawer.grid or not drawer.baseplate:
        return []
    kind = PILOTS[part.id]["kind"]
    build = {
        "knives": _knife_drawer,
        "spices": _spice_drawer,
        "oils": _oil_drawer,
        "cutlery": _cutlery_drawer,
    }.get(kind)
    if build is None:
        return []
    buckets: dict[tuple[int, int, int], list] = defaultdict(list)
    build(drawer, buckets)
    if not buckets:
        return []
    eid = contents_id(part.id)
    children = []
    for rgb, shapes in buckets.items():
        if not shapes:
            continue
        # Fuse each colour into one solid so the GLB has one mesh node
        # per colour (a Compound of boxes would export every box as its
        # own node and blow the mesh-node budget).
        body = shapes[0]
        for piece in shapes[1:]:
            body = body + piece
        placed = plane * (Pos(0.0, inward, 0.0) * body)
        placed.label = LABEL
        placed.color = Color(rgb[0] / 255.0, rgb[1] / 255.0, rgb[2] / 255.0)
        placed.element_id = eid
        placed.furnishing_id = eid
        placed.furnishing_list = "systemFurniture"
        children.append(placed)
    return children


def _plate_origin(drawer) -> tuple[float, float, float]:
    """Front-left (min a, min c) of the Gridfinity plate and its top z."""
    a0 = min(b[0] for b in drawer.baseplate)
    c0 = min(b[2] for b in drawer.baseplate)
    z1 = max(b[5] for b in drawer.baseplate)
    return a0, c0, z1


def _cell(origin, i: int, j: int, ni: int, nj: int):
    a0, c0, _z = origin
    return (
        a0 + i * PITCH + BIN_INSET,
        a0 + (i + ni) * PITCH - BIN_INSET,
        c0 + j * PITCH + BIN_INSET,
        c0 + (j + nj) * PITCH - BIN_INSET,
    )


def _bin(buckets, origin, i, j, ni, nj, height: float = BIN_H) -> tuple[float, float, float, float, float]:
    a0, a1, c0, c1 = _cell(origin, i, j, ni, nj)
    z0 = origin[2]
    buckets[RGB_BIN].extend(_hollow_bin(a0, a1, c0, c1, z0, height))
    return a0, a1, c0, c1, z0



def _hollow_bin(a0, a1, c0, c1, z0, h) -> list:
    """Five boxes: floor + four walls. Not fused (keeps the mesh cheap)."""
    w, t = WALL, FLOOR
    return [
        Pos(a0, c0, z0) * Box(a1 - a0, c1 - c0, t, align=(Align.MIN,) * 3),
        Pos(a0, c0, z0) * Box(w, c1 - c0, h, align=(Align.MIN,) * 3),
        Pos(a1 - w, c0, z0) * Box(w, c1 - c0, h, align=(Align.MIN,) * 3),
        Pos(a0 + w, c0, z0) * Box(a1 - a0 - 2 * w, w, h, align=(Align.MIN,) * 3),
        Pos(a0 + w, c1 - w, z0) * Box(a1 - a0 - 2 * w, w, h, align=(Align.MIN,) * 3),
    ]


def _box(buckets, rgb, a0, a1, c0, c1, z0, z1):
    buckets[rgb].append(
        Pos(a0, c0, z0) * Box(a1 - a0, c1 - c0, z1 - z0, align=(Align.MIN,) * 3)
    )


def _prism(buckets, rgb, x, y, z0, radius, height, sides: int = 8):
    """Vertical n-gon prism (low-poly stand-in for a cylinder)."""
    with BuildSketch() as sketch:
        RegularPolygon(radius, sides)
    buckets[rgb].append(Pos(x, y, z0) * extrude(sketch.sketch, amount=height))


def _knife(buckets, a0, a1, c0, c1, z0, *, blade_len, blade_w, handle_len, handle_rgb, handle_h=22.0):
    """Handle at the front (low c), blade toward the back. Sizes in mm."""
    mid_a = (a0 + a1) / 2.0
    inner_c0, inner_c1 = c0 + WALL + 1.0, c1 - WALL - 1.0
    usable = inner_c1 - inner_c0
    blade_len = min(blade_len, usable - handle_len - 2.0)
    z_floor = z0 + FLOOR + 1.0
    # Handle
    ha0, ha1 = mid_a - 11.0, mid_a + 11.0
    hc0, hc1 = inner_c0, inner_c0 + handle_len
    _box(buckets, handle_rgb, ha0, ha1, hc0, hc1, z_floor, z_floor + handle_h)
    # Bolster
    _box(buckets, RGB_STEEL, mid_a - 9.0, mid_a + 9.0, hc1, hc1 + 6.0, z_floor, z_floor + handle_h - 2.0)
    # Blade, slightly narrower toward the tip
    bc0 = hc1 + 6.0
    bc1 = bc0 + blade_len
    _box(buckets, RGB_STEEL, mid_a - blade_w / 2.0, mid_a + blade_w / 2.0, bc0, bc1, z_floor + 6.0, z_floor + 8.5)


def _knife_drawer(drawer, buckets) -> None:
    """guess: a basic knife set that fills the 12 × 13 plate.

    Columns increase south (run axis a), rows increase east from the
    drawer front (axis c). Handles sit at the front so they are the
    first thing you reach.
    """
    origin = _plate_origin(drawer)
    # Front block, long knives (8 / 7 / 6 / 5 cells).
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 0, 0, 2, 8)
    _knife(buckets, a0, a1, c0, c1, z0, blade_len=210, blade_w=42, handle_len=110, handle_rgb=RGB_HANDLE_DARK, handle_h=24)
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 2, 0, 1, 8)
    _knife(buckets, a0, a1, c0, c1, z0, blade_len=230, blade_w=28, handle_len=105, handle_rgb=RGB_HANDLE_WOOD, handle_h=22)
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 3, 0, 1, 8)
    _knife(buckets, a0, a1, c0, c1, z0, blade_len=220, blade_w=26, handle_len=105, handle_rgb=RGB_HANDLE_DARK, handle_h=21)
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 4, 0, 1, 7)
    _knife(buckets, a0, a1, c0, c1, z0, blade_len=175, blade_w=36, handle_len=100, handle_rgb=RGB_HANDLE_WOOD, handle_h=22)
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 5, 0, 1, 6)
    _knife(buckets, a0, a1, c0, c1, z0, blade_len=140, blade_w=24, handle_len=95, handle_rgb=RGB_HANDLE_RED, handle_h=20)
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 6, 0, 1, 5)
    _knife(buckets, a0, a1, c0, c1, z0, blade_len=95, blade_w=18, handle_len=90, handle_rgb=RGB_HANDLE_WOOD, handle_h=18)
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 7, 0, 1, 5)
    _knife(buckets, a0, a1, c0, c1, z0, blade_len=90, blade_w=16, handle_len=85, handle_rgb=RGB_HANDLE_DARK, handle_h=17)
    # Two short steak knives in the leftover 1 × 3 cells of the paring columns.
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 6, 5, 1, 3)
    _knife(buckets, a0, a1, c0, c1, z0, blade_len=70, blade_w=16, handle_len=45, handle_rgb=RGB_HANDLE_DARK, handle_h=16)
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 7, 5, 1, 3)
    _knife(buckets, a0, a1, c0, c1, z0, blade_len=70, blade_w=16, handle_len=45, handle_rgb=RGB_HANDLE_WOOD, handle_h=16)
    # Honing steel, 2 × 8.
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 8, 0, 2, 8)
    _honing_steel(buckets, a0, a1, c0, c1, z0)
    # Kitchen shears, 2 × 5 at the front of the last two columns.
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 10, 0, 2, 5)
    _shears(buckets, a0, a1, c0, c1, z0)
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 10, 5, 2, 3)
    _box(buckets, RGB_HANDLE_DARK, a0 + 8, a1 - 8, c0 + 8, c1 - 8, z0 + FLOOR + 1, z0 + FLOOR + 14)
    # Back row: stone, oil + cloth, a small tray.
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 0, 8, 4, 5)
    _stone(buckets, a0, a1, c0, c1, z0)
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 4, 8, 4, 5)
    _oil_and_cloth(buckets, a0, a1, c0, c1, z0)
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 8, 8, 4, 5)
    # Empty-looking accessory tray: a couple of low blocks (guards / spare).
    _box(buckets, RGB_STEEL, a0 + 10, a0 + 70, c0 + 16, c0 + 70, z0 + FLOOR + 1, z0 + FLOOR + 8)
    _box(buckets, RGB_HANDLE_DARK, a0 + 80, a1 - 12, c0 + 16, c1 - 16, z0 + FLOOR + 1, z0 + FLOOR + 16)


def _honing_steel(buckets, a0, a1, c0, c1, z0) -> None:
    mid_a = (a0 + a1) / 2.0
    z_floor = z0 + FLOOR + 1.0
    handle_len, rod_len, rod_r = 100.0, 210.0, 6.0
    hc0 = c0 + WALL + 2.0
    _prism(buckets, RGB_HANDLE_DARK, mid_a, hc0 + handle_len / 2.0, z_floor, 10.0, 22.0, 8)
    _prism(buckets, RGB_STEEL, mid_a, hc0 + handle_len + rod_len / 2.0, z_floor + 5.0, rod_r, 12.0, 8)
    # A thin rod along c, as a 8-gon extruded in c is awkward; use a box.
    _box(buckets, RGB_STEEL, mid_a - rod_r, mid_a + rod_r, hc0 + handle_len, hc0 + handle_len + rod_len,
         z_floor + 5.0, z_floor + 5.0 + 2 * rod_r)


def _shears(buckets, a0, a1, c0, c1, z0) -> None:
    z_floor = z0 + FLOOR + 2.0
    mid_a = (a0 + a1) / 2.0
    # Two blades, slightly offset, handles at the front.
    _box(buckets, RGB_STEEL, mid_a - 7, mid_a - 1, c0 + 70, c1 - 6, z_floor + 6, z_floor + 9)
    _box(buckets, RGB_STEEL, mid_a + 1, mid_a + 7, c0 + 70, c1 - 6, z_floor + 3, z_floor + 6)
    _box(buckets, RGB_SHEARS, mid_a - 18, mid_a - 2, c0 + 8, c0 + 70, z_floor, z_floor + 14)
    _box(buckets, RGB_SHEARS, mid_a + 2, mid_a + 18, c0 + 8, c0 + 70, z_floor, z_floor + 14)


def _stone(buckets, a0, a1, c0, c1, z0) -> None:
    _box(buckets, RGB_STONE, a0 + 14, a1 - 14, c0 + 16, c1 - 16, z0 + FLOOR + 1, z0 + FLOOR + 16)


def _oil_and_cloth(buckets, a0, a1, c0, c1, z0) -> None:
    # Amber bottle toward the front, a folded cloth behind it.
    cx, cy = a0 + 40.0, c0 + 55.0
    _prism(buckets, RGB_OIL, cx, cy, z0 + FLOOR + 1, 16.0, 36.0, 8)
    _prism(buckets, RGB_CAP, cx, cy, z0 + FLOOR + 37, 12.0, 8.0, 8)
    _box(buckets, RGB_CLOTH, a0 + 70, a1 - 12, c0 + 16, c1 - 16, z0 + FLOOR + 1, z0 + FLOOR + 8)


def _spice_drawer(drawer, buckets) -> None:
    """guess: short spice jars in a few large 4u trays. Clear above the plate
    is 70 mm (M box); jars are 56 mm including the cap, well under that.
    11 × 13 plate: one 10×12 tray of 12 jars, a leftover 1-col tin tray,
    and a 10×1 back row of tins (20 items, sparse so the mesh stays small).
    """
    origin = _plate_origin(drawer)
    # Recurring colours, one per jar, so a glance reads “spice rack”.
    fills = [
        RGB_HANDLE_RED,  # paprika / chilli
        RGB_YELLOW,      # turmeric / curry
        RGB_CLOTH,       # oregano / basil
        RGB_HANDLE_DARK, # pepper
        RGB_HANDLE_WOOD, # cinnamon
        RGB_CREAM,       # salt
        RGB_OIL,         # cumin / mustard seed
        RGB_OLIVE,       # herbs de Provence
        RGB_STONE,       # garlic powder
        RGB_SHEARS,      # nigella / poppy
    ]
    h = 4 * UNIT
    # Sparse fill (12 jars + 8 tins) so the on-demand layer stays inside
    # the contents budget; one tray per zone, no per-cell bins or dividers.
    _bin(buckets, origin, 0, 0, 10, 12, height=h)
    n = 0
    for i in (0, 2, 6, 8):
        for j in (0, 4, 8):
            a0, a1, c0, c1 = _cell(origin, i, j, 2, 2)
            _spice_jar(buckets, (a0 + a1) / 2.0, (c0 + c1) / 2.0, origin[2], fills[n % len(fills)])
            n += 1
    _bin(buckets, origin, 10, 0, 1, 13, height=h)
    for k, j in enumerate((0, 3, 6, 9, 12)):
        a0, a1, c0, c1 = _cell(origin, 10, j, 1, 1)
        _spice_tin(buckets, (a0 + a1) / 2.0, (c0 + c1) / 2.0, origin[2], fills[(n + k) % len(fills)])
    _bin(buckets, origin, 0, 12, 10, 1, height=h)
    for k, i in enumerate((0, 4, 8)):
        a0, a1, c0, c1 = _cell(origin, i, 12, 2, 1)
        _spice_tin(buckets, (a0 + a1) / 2.0, (c0 + c1) / 2.0, origin[2], fills[(n + 5 + k) % len(fills)])


def _spice_jar(buckets, x, y, z0, fill_rgb) -> None:
    """Squat 8-gon jar, 48 mm body + 8 mm box cap = 56 mm (< 70 mm clear)."""
    z = z0 + FLOOR + 1.0
    _prism(buckets, fill_rgb, x, y, z, 18.0, 48.0, 8)
    _box(buckets, RGB_CAP, x - 12.0, x + 12.0, y - 12.0, y + 12.0, z + 48.0, z + 56.0)


def _spice_tin(buckets, x, y, z0, fill_rgb) -> None:
    """Flat square tin for the leftover 1-cell and 2×1 slots, 36 mm tall."""
    z = z0 + FLOOR + 1.0
    _box(buckets, fill_rgb, x - 12.0, x + 12.0, y - 12.0, y + 12.0, z, z + 28.0)
    _box(buckets, RGB_CAP, x - 12.0, x + 12.0, y - 12.0, y + 12.0, z + 28.0, z + 36.0)


def _oil_drawer(drawer, buckets) -> None:
    """guess: standing oil, vinegar and condiment bottles in a few large trays.

    Clear to the D1 box underside is 300 mm above the plate; E sides are
    only 171 mm, so bottles may stand proud of the box. Every bottle is
    ≤ ``OIL_MAX_H`` (280 mm), leaving 20 mm of air under D1.
    """
    origin = _plate_origin(drawer)
    h = 3 * UNIT
    # (body_h, radius, body_rgb) — cap 12 mm on top, optional 10 mm neck.
    # One 10×8 tray: three rows of four bottles (cols 0–7, rows 0–5).
    # Heights drop toward the back, all ≤ 280. Leftover col 10 is a vial
    # tray; back rows 8–12 are a 10×5 tray of squat jars.
    rows = [
        # Tall cooking oils, 248–268 mm including neck+cap.
        [(246, 28, RGB_OLIVE), (236, 26, RGB_OIL), (226, 26, RGB_YELLOW),
         (216, 24, RGB_CREAM), (206, 22, RGB_HANDLE_WOOD)],
        # Vinegars and soy, 198–218 mm.
        [(196, 24, RGB_HANDLE_DARK), (186, 22, RGB_STONE), (186, 20, RGB_CREAM),
         (176, 16, RGB_SHEARS), (176, 16, RGB_HANDLE_WOOD)],
        # Condiments, 148–168 mm.
        [(146, 22, RGB_HANDLE_RED), (146, 20, RGB_YELLOW), (136, 20, RGB_CREAM),
         (136, 20, RGB_CLOTH), (126, 16, RGB_HANDLE_RED)],
        # More seasonings, 128–158 mm.
        [(136, 20, RGB_OIL), (126, 18, RGB_OLIVE), (126, 16, RGB_SHEARS),
         (116, 18, RGB_STONE), (116, 16, RGB_HANDLE_DARK)],
    ]
    # 3×4 bottles (not a full 5×4 grid) plus 4 vials and 6 squat jars,
    # so the 8-gon bottles stay recognizable without blowing the budget.
    _bin(buckets, origin, 0, 0, 10, 8, height=h)
    for r, specs in enumerate(rows[:3]):
        for k, (body_h, radius, rgb) in enumerate(specs[:4]):
            a0, a1, c0, c1 = _cell(origin, k * 2, r * 2, 2, 2)
            _oil_bottle(buckets, (a0 + a1) / 2.0, (c0 + c1) / 2.0, origin[2], radius, body_h, rgb)
    _bin(buckets, origin, 10, 0, 1, 13, height=h)
    vial = [(100, 10, RGB_HANDLE_RED), (90, 10, RGB_OLIVE), (90, 10, RGB_YELLOW),
            (80, 10, RGB_SHEARS)]
    for k, (body_h, radius, rgb) in enumerate(vial):
        a0, a1, c0, c1 = _cell(origin, 10, k * 3, 1, 3)
        _oil_bottle(buckets, (a0 + a1) / 2.0, (c0 + c1) / 2.0, origin[2], radius, body_h, rgb)
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 0, 8, 10, 5, height=h)
    squats = [RGB_CLOTH, RGB_OIL, RGB_HANDLE_RED, RGB_OLIVE, RGB_CREAM, RGB_YELLOW]
    for k, rgb in enumerate(squats):
        x = a0 + 70 + (k % 3) * 130
        y = c0 + 50 + (k // 3) * 90
        _box(buckets, rgb, x - 18.0, x + 18.0, y - 18.0, y + 18.0, z0 + FLOOR + 1.0, z0 + FLOOR + 71.0)
        _box(buckets, RGB_CAP, x - 14.0, x + 14.0, y - 14.0, y + 14.0, z0 + FLOOR + 71.0, z0 + FLOOR + 81.0)


def _oil_bottle(buckets, x, y, z0, radius, body_h, body_rgb, cap_h=12.0, neck_h=10.0) -> None:
    """8-gon bottle + neck + cap. Total height is checked against OIL_MAX_H."""
    total = body_h + neck_h + cap_h
    if total > OIL_MAX_H + 1e-6:
        raise ValueError(f"oil bottle {total:.0f} mm exceeds OIL_MAX_H {OIL_MAX_H:.0f}")
    z = z0 + FLOOR + 1.0
    _prism(buckets, body_rgb, x, y, z, radius, body_h, 8)
    neck_r = max(6.0, radius * 0.4)
    _prism(buckets, body_rgb, x, y, z + body_h, neck_r, neck_h, 8)
    _prism(buckets, RGB_CAP, x, y, z + body_h + neck_h, neck_r + 1.5, cap_h, 8)


def _cutlery_drawer(drawer, buckets) -> None:
    """guess: shallow 4-unit (28 mm) trays in the 13 × 10 hob-top drawer.

    Clear above the plate is 47.5 mm (N box under the intake). Flat
    cutlery in 28 mm trays stays well under that. Handles at the front.
    """
    origin = _plate_origin(drawer)
    h = 4 * UNIT  # 28 mm
    # 13 cols × 10 rows. Long 2×8 wells at the front; a 13×2 serving tray
    # at the back (rows 8–9).
    wells = [
        (0, 0, 2, 8, "knives"),
        (2, 0, 2, 8, "forks"),
        (4, 0, 2, 8, "spoons"),
        (6, 0, 2, 8, "tablespoons"),
        (8, 0, 2, 5, "teaspoons"),
        (8, 5, 2, 3, "dessert"),
        (10, 0, 3, 8, "steak"),
    ]
    for i, j, ni, nj, kind in wells:
        a0, a1, c0, c1, z0 = _bin(buckets, origin, i, j, ni, nj, height=h)
        _cutlery_set(buckets, a0, a1, c0, c1, z0, kind)
    a0, a1, c0, c1, z0 = _bin(buckets, origin, 0, 8, 13, 2, height=h)
    _cutlery_set(buckets, a0, a1, c0, c1, z0, "serving")


def _cutlery_set(buckets, a0, a1, c0, c1, z0, kind: str) -> None:
    """A short row of flat, recognizable pieces, handles at the front (low c)."""
    z = z0 + FLOOR + 2.0
    inner_a0, inner_a1 = a0 + WALL + 3.0, a1 - WALL - 3.0
    inner_c0, inner_c1 = c0 + WALL + 3.0, c1 - WALL - 3.0
    width = inner_a1 - inner_a0
    usable = inner_c1 - inner_c0
    n, head, handle_len, piece_w, handle_rgb, thick = {
        "knives": (5, 18.0, 95.0, 9.0, RGB_HANDLE_DARK, 3.0),
        "forks": (5, 22.0, 90.0, 11.0, RGB_HANDLE_WOOD, 3.0),
        "spoons": (5, 28.0, 90.0, 12.0, RGB_HANDLE_WOOD, 3.5),
        "tablespoons": (5, 32.0, 100.0, 13.0, RGB_HANDLE_DARK, 3.5),
        "teaspoons": (6, 22.0, 70.0, 10.0, RGB_HANDLE_WOOD, 3.0),
        "dessert": (4, 24.0, 55.0, 11.0, RGB_HANDLE_DARK, 3.0),
        "steak": (5, 16.0, 90.0, 10.0, RGB_HANDLE_RED, 3.0),
        "serving": (4, 36.0, 80.0, 16.0, RGB_HANDLE_DARK, 4.0),
    }[kind]
    if kind == "serving":
        # The back tray is 13 cells wide and only 2 deep, so the pieces
        # lie along a (handles toward the north / low a).
        n = 5
        slot = (inner_a1 - inner_a0) / n
        handle_len = min(90.0, slot * 0.5)
        blade_len = min(80.0, slot - handle_len - 8.0)
        mid_c = (inner_c0 + inner_c1) / 2.0
        for k in range(n):
            a_lo = inner_a0 + k * slot + 4.0
            a_mid = a_lo + handle_len
            a_hi = a_mid + blade_len
            _box(buckets, RGB_HANDLE_DARK, a_lo, a_mid, mid_c - 7.0, mid_c + 7.0, z, z + 8.0)
            _box(buckets, RGB_STEEL, a_mid, a_mid + 14.0, mid_c - 3.0, mid_c + 3.0, z + 2.0, z + 2.0 + 4.0)
            _box(buckets, RGB_STEEL, a_mid + 14.0, a_hi, mid_c - 16.0, mid_c + 16.0, z + 1.5, z + 5.5)
        return

    step = width / n
    blade_len = min(usable - handle_len - 4.0, usable * 0.55)
    if blade_len < 8.0:
        handle_len = max(20.0, usable * 0.45)
        blade_len = max(8.0, usable - handle_len - 4.0)
    for k in range(n):
        mid = inner_a0 + (k + 0.5) * step
        hc0 = inner_c0
        hc1 = hc0 + handle_len
        _box(buckets, handle_rgb, mid - piece_w / 2.0, mid + piece_w / 2.0, hc0, hc1, z, z + 8.0)
        bc0, bc1 = hc1, hc1 + blade_len
        if kind in ("forks",):
            # Neck plus one wide head (reads as a fork without three tine boxes).
            _box(buckets, RGB_STEEL, mid - 3.0, mid + 3.0, bc0, bc0 + 16.0, z + 2.0, z + 2.0 + thick)
            _box(buckets, RGB_STEEL, mid - 7.0, mid + 7.0, bc0 + 16.0, bc1, z + 2.0, z + 2.0 + thick)
        elif kind in ("spoons", "tablespoons", "teaspoons", "dessert"):
            neck_len = min(12.0, max(4.0, blade_len * 0.25))
            _box(buckets, RGB_STEEL, mid - 3.0, mid + 3.0, bc0, bc0 + neck_len, z + 2.0, z + 2.0 + thick)
            bowl = head / 2.0
            _box(buckets, RGB_STEEL, mid - bowl, mid + bowl, bc0 + neck_len, bc1, z + 1.5, z + 1.5 + thick + 1.0)
        else:
            # Table / steak knives: a slim blade.
            _box(buckets, RGB_STEEL, mid - piece_w / 2.5, mid + piece_w / 2.5, bc0, bc1, z + 2.0, z + 2.0 + thick)

