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

# Pilot only. More drawers join this dict as later passes fill them.
PILOTS = {
    "SF-I600a-D1": {
        "bay": "SF-I600a",
        "name": "SF-I600a-D1 knives",
        "description": "Knife drawer (nože): Gridfinity bins and a basic knife set",
        "kind": "knives",
    },
}


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
    if kind != "knives":
        return []
    buckets: dict[tuple[int, int, int], list] = defaultdict(list)
    _knife_drawer(drawer, buckets)
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
