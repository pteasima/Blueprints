"""Kitchen cabinet runs as monoblocks: shared walls, drawers, worktop, cladding.

Facts and their sources: docs/design/kitchen-cabinets.md. Numbers Petr did
not give are IKEA METOD / MAXIMERA defaults or ``guess:`` values, marked there.

A *run* is one continuous cabinet body (Petr, 2026-11-12: "lets assume
cabinets are a monoblock. Neighboring walls are shared, including the back
wall in the island cabinets"). In ``furnishings.yaml`` a run is an
``IfcFurniture`` element with ``ObjectType: KitchenRun`` and no box; its
``Pset_KitchenRun`` holds the run parameters. A *bay* is one of the existing
cabinet boxes (``SF-I600a`` …) with ``Pset_KitchenBay.Run`` naming its run.
The bay box is the bay's slot: its Width, Depth, Height and placement drive
everything here. Nothing below is a typed-in coordinate.

Run frame, millimetres: ``a`` along the run (the first bay's RefDirection),
``c`` across it (that direction turned +90°), ``z`` up from the floor. Every
part is a list of axis-aligned boxes in that frame, so a part can be turned
into build123d solids (``ground_floor``) and into IFC extrusions
(``kitchen_ifc``) from the same numbers.

Who owns what (the IFC structure, docs/design/kitchen-cabinets.md):
every part belongs to the run. A bay's group lists its own parts (bottom,
rails or top, back, front or drawers) plus the shared parts it touches: the
dividers on both sides, the run's end sides, the island's central back, and
the stone cladding at its end. A divider is listed in both neighbouring bays,
never built twice.
"""

from __future__ import annotations

import math
from dataclasses import dataclass, field

PSET_CABINET = "Pset_KitchenCabinet"
PSET_DRAWERS = "Pset_Drawers"
PSET_RUN = "Pset_KitchenRun"
PSET_BAY = "Pset_KitchenBay"
PSET_SINK = "Pset_Sink"
RUN_OBJECT_TYPE = "KitchenRun"
KIND_NICHE = "Niche"

# Defaults, millimetres. Sources per row in kitchen-cabinets.md. A run's
# Pset_KitchenRun (metres) overrides any of them; a bay's Pset_KitchenCabinet
# overrides the drawer and front values for that bay only.
IKEA_DEFAULTS_MM = {
    "WorktopThickness": 38.0,  # IKEA worktops; the island run sets 20 (Silestone)
    "WorktopOverhang": 0.0,  # past the front faces; Petr gave 30 for Silestone
    "CladdingThickness": 0.0,  # 0 = same as the worktop
    "PlinthHeight": 92.0,  # METOD legs 80–100
    "PlinthSetback": 50.0,  # plinth board behind the front face (guess)
    "BoardThickness": 18.0,  # METOD carcass board; also every shared divider
    "FrontThickness": 18.0,  # METOD fronts
    "BackThickness": 8.0,  # single-row back panel (guess)
    "FrontGap": 3.0,  # 600×200 grid front is 597×197
    "RailDepth": 80.0,  # top front/back rails (guess)
    "SlideClearance": 13.0,  # per side, drawer box to carcass side
    "BoxBottomOffset": 25.0,  # slot bottom to drawer box bottom (guess)
    "BoxHeightReserve": 110.0,  # front height minus drawer box side height (guess)
    "BoxMinHeight": 60.0,
    "BoxWall": 16.0,  # MAXIMERA side / back (guess)
    "BoxRearClearance": 10.0,  # box back to carcass back
    "SlideStep": 50.0,  # slide lengths come in 50 mm steps
}
RUN_FLAGS = ("CladEnds",)
TOL = 0.5  # mm, for "these faces meet"


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


def run_of(element: dict | None) -> str | None:
    return _prop(element, PSET_BAY, "Run") if element else None


def is_run(element: dict | None) -> bool:
    return bool(element) and element.get("ObjectType") == RUN_OBJECT_TYPE


def _params(*elements_and_psets) -> dict:
    """IKEA defaults, overridden in order by each (element, pset name)."""
    out = dict(IKEA_DEFAULTS_MM)
    for element, pset_name in elements_and_psets:
        for key in IKEA_DEFAULTS_MM:
            value = _prop(element, pset_name, key)
            if value is not None:
                out[key] = float(value) * 1000.0
    return out


# --- frame -------------------------------------------------------------------


@dataclass(frozen=True)
class Frame:
    """Run frame in world millimetres: origin and the unit ``a`` direction."""

    ox: float
    oy: float
    ux: float
    uy: float

    @property
    def v(self) -> tuple[float, float]:
        return (-self.uy, self.ux)

    def world(self, a: float, c: float, z: float) -> tuple[float, float, float]:
        vx, vy = self.v
        return (self.ox + self.ux * a + vx * c, self.oy + self.uy * a + vy * c, z)

    def local(self, x: float, y: float) -> tuple[float, float]:
        dx, dy = x - self.ox, y - self.oy
        vx, vy = self.v
        return (dx * self.ux + dy * self.uy, dx * vx + dy * vy)

    def compass(self, da: float, dc: float) -> str:
        """N/S/E/W of a run-frame direction (for readable part ids)."""
        vx, vy = self.v
        x, y = self.ux * da + vx * dc, self.uy * da + vy * dc
        if abs(x) >= abs(y):
            return "E" if x > 0 else "W"
        return "N" if y > 0 else "S"


def _unit(ref) -> tuple[float, float]:
    if ref is None:
        return (1.0, 0.0)
    x, y = float(ref[0]), float(ref[1])
    n = math.hypot(x, y)
    return (x / n, y / n)


# --- data --------------------------------------------------------------------


@dataclass
class Drawer:
    index: int  # 1 = top
    content: str
    nominal: float  # grid slot height
    slot_z0: float
    front: tuple  # run frame box a0, a1, c0, c1, z0, z1
    box: tuple  # outer drawer box, same order
    extension: float  # full-extension travel
    out: float  # +1 / -1: the c direction the drawer pulls out


@dataclass
class Part:
    id: str
    name: str
    role: str  # EndSide, Divider, CentralBack, Back, Bottom, Rail, Top, Front, Drawer, Plinth, Worktop, Cladding
    boxes: list  # run-frame boxes (a0, a1, c0, c1, z0, z1)
    label: str = "cabinet"
    voids: list = field(default_factory=list)  # (a0, a1, c0, c1) through-holes (worktop)
    drawer: Drawer | None = None
    material: str | None = None


@dataclass
class Bay:
    id: str
    element: dict
    a0: float
    a1: float
    c0: float
    c1: float
    front_low: bool  # front face at c0 (True) or c1
    z_base: float  # Elevation (wall cabinets), mm
    height: float
    niche: bool
    clear_lo: float = 0.0  # inner face of the lo-side wall, run frame a
    clear_hi: float = 0.0
    members: list = field(default_factory=list)  # part ids
    external: list = field(default_factory=list)  # yaml ids of other products inside the bay

    @property
    def width(self) -> float:
        return self.a1 - self.a0

    @property
    def depth(self) -> float:
        return self.c1 - self.c0

    @property
    def clear_width(self) -> float:
        return self.clear_hi - self.clear_lo


@dataclass
class Run:
    id: str
    element: dict
    frame: Frame
    params: dict
    bays: list
    parts: list = field(default_factory=list)
    carcass_z0: float = 0.0
    carcass_z1: float = 0.0
    worktop: tuple | None = None  # run-frame box

    def part(self, part_id: str) -> Part:
        return next(p for p in self.parts if p.id == part_id)

    def bay(self, bay_id: str) -> Bay:
        return next(b for b in self.bays if b.id == bay_id)


# --- layout ------------------------------------------------------------------


def _bay(element: dict, frame: Frame) -> Bay:
    ox, oy = (float(v) * 1000.0 for v in element["Origin"])
    rx, ry = _unit(element.get("RefDirection"))
    nx, ny = -ry, rx
    w, d, h = (float(element[k]) * 1000.0 for k in ("Width", "Depth", "Height"))
    corners = [frame.local(ox + rx * x + nx * y, oy + ry * x + ny * y) for x in (0, w) for y in (0, d)]
    a_vals = [p[0] for p in corners]
    c_vals = [p[1] for p in corners]
    vx, vy = frame.v
    front_low = (nx * vx + ny * vy) > 0  # bay depth runs toward +c: front is the c0 face
    if abs(abs(rx * frame.ux + ry * frame.uy) - 1.0) > 1e-6:
        raise ValueError(f"{element['id']} is not parallel to its run")
    return Bay(
        id=element["id"],
        element=element,
        a0=min(a_vals),
        a1=max(a_vals),
        c0=min(c_vals),
        c1=max(c_vals),
        front_low=front_low,
        z_base=float(element.get("Elevation") or 0.0) * 1000.0,
        height=h,
        niche=_prop(element, PSET_BAY, "Kind") == KIND_NICHE,
    )


def _near(x: float, y: float) -> bool:
    return abs(x - y) <= TOL


def _rows(bays: list) -> list[list]:
    rows: dict[tuple, list] = {}
    for bay in bays:
        key = (round(bay.c0), round(bay.c1), bay.front_low)
        rows.setdefault(key, []).append(bay)
    out = []
    for key in sorted(rows):
        row = sorted(rows[key], key=lambda b: b.a0)
        for left, right in zip(row, row[1:]):
            if right.a0 < left.a1 - TOL:
                raise ValueError(f"{left.id} and {right.id} overlap")
        out.append(row)
    return out


def _segments(row: list) -> list[list]:
    """Contiguous carcass bays. A niche or a gap ends a segment."""
    segs, cur = [], []
    for bay in row:
        if bay.niche:
            if cur:
                segs.append(cur)
            cur = []
            continue
        if cur and not _near(cur[-1].a1, bay.a0):
            segs.append(cur)
            cur = []
        cur.append(bay)
    if cur:
        segs.append(cur)
    return segs


class _Builder:
    def __init__(self, run: Run, sinks: list[dict]):
        self.run = run
        self.p = run.params
        self.sinks = sinks
        self.ids: set[str] = set()

    def add(self, part: Part, *bays: Bay) -> Part:
        if part.id in self.ids:
            raise ValueError(f"duplicate part id {part.id}")
        self.ids.add(part.id)
        self.run.parts.append(part)
        for bay in bays:
            if part.id not in bay.members:
                bay.members.append(part.id)
        return part

    # A row's depth axis: y from the front face (0) to the back plane.
    @staticmethod
    def c_range(row_bay: Bay, y0: float, y1: float) -> tuple[float, float]:
        if row_bay.front_low:
            return (row_bay.c0 + y0, row_bay.c0 + y1)
        return (row_bay.c1 - y1, row_bay.c1 - y0)

    def build(self):
        run, p = self.run, self.p
        t, tf = p["BoardThickness"], p["FrontThickness"]
        cabinets = [b for b in run.bays if not b.niche]
        if not cabinets:
            raise ValueError(f"{run.id} has no cabinet bays")
        bases = {(round(b.z_base), round(b.height)) for b in run.bays}
        if len(bases) != 1:
            raise ValueError(f"{run.id}: every bay needs the same Elevation and Height, got {sorted(bases)}")
        z_base, height = cabinets[0].z_base, cabinets[0].height
        wt = p["WorktopThickness"]
        z0 = z_base + p["PlinthHeight"]
        z1 = z_base + height - wt
        run.carcass_z0, run.carcass_z1 = z0, z1
        if z1 - z0 < 4 * t:
            raise ValueError(f"{run.id}: carcass {z1 - z0} mm is too low")
        rows = _rows(run.bays)
        pairs = self._pairs(rows)
        paired = {id(r) for pair in pairs for r in pair}
        blocks = [("pair", pair) for pair in pairs]
        for row in rows:
            if id(row) in paired:
                continue
            for seg in _segments(row):
                blocks.append(("single", (seg,)))
        for kind, rows_in in blocks:
            self._block(kind, rows_in, z0, z1)
        for bay in cabinets:
            self._bay_parts(bay, z0, z1, shared_back=any(bay in r for k, rs in blocks if k == "pair" for r in rs))
        if wt > 0:
            self._worktop(rows, z_base + height - wt, z_base + height)
        if _prop(run.element, PSET_RUN, "CladEnds"):
            self._cladding(rows, z_base, z_base + height - wt)
        # A niche (dishwasher slot) has no carcass of its own; its walls are
        # the end sides of the carcass next to it.
        for bay in run.bays:
            if not bay.niche:
                continue
            for part in run.parts:
                if part.role != "EndSide":
                    continue
                a0, a1 = part.boxes[0][0], part.boxes[0][1]
                if _near(a1, bay.a0) or _near(a0, bay.a1):
                    bay.members.append(part.id)

    def _pairs(self, rows):
        """Back-to-back rows: a row facing c0 whose back plane is another row's back plane."""
        pairs = []
        for a in rows:
            for b in rows:
                if a is b or not a[0].front_low or b[0].front_low:
                    continue
                if not _near(a[0].c1, b[0].c0):
                    continue
                sa, sb = _segments(a), _segments(b)
                if len(sa) != 1 or len(sb) != 1 or len(sa[0]) != len(a) or len(sb[0]) != len(b):
                    raise ValueError(f"{self.run.id}: back-to-back rows must be continuous (no niches)")
                if not (_near(a[0].a0, b[0].a0) and _near(a[-1].a1, b[-1].a1)):
                    raise ValueError(f"{self.run.id}: back-to-back rows must start and end together")
                pairs.append((a, b))
        return pairs

    def _end_name(self, da: float) -> str:
        return self.run.frame.compass(da, 0.0)

    def _block(self, kind, rows_in, z0, z1):
        run, p = self.run, self.p
        t, tf, bt = p["BoardThickness"], p["FrontThickness"], p["BackThickness"]
        a_lo = rows_in[0][0].a0
        a_hi = rows_in[0][-1].a1
        multi = len([1 for r in _rows(run.bays) for _ in _segments(r)]) > 1 and kind == "single"
        tag = ""
        if multi:
            first = rows_in[0][0].id
            tag = f"-{first}"
        if kind == "pair":
            west, east = rows_in  # names only: row facing c0, row facing c1
            c_lo = west[0].c0 + tf
            c_hi = east[0].c1 - tf
            plane = west[0].c1
            # End sides: one board across both rows (Petr: monoblock).
            for end, a_range, bays in (
                ("lo", (a_lo, a_lo + t), (west[0], east[0])),
                ("hi", (a_hi - t, a_hi), (west[-1], east[-1])),
            ):
                name = self._end_name(-1 if end == "lo" else 1)
                self.add(Part(f"{run.id}-END-{name}{tag}", f"Bok {name}", "EndSide",
                              [(*a_range, c_lo, c_hi, z0, z1)]), *bays)
            back = self.add(Part(f"{run.id}-BACK", "Společná záda", "CentralBack",
                                 [(a_lo + t, a_hi - t, plane - t / 2, plane + t / 2, z0, z1)]))
            for row in rows_in:
                for bay in row:
                    bay.members.append(back.id)
                self._dividers(row, z0, z1, back_y=row[0].depth - t / 2, tag=tag)
                self._plinth(row, a_lo, a_hi)
            return
        (row,) = rows_in
        for end, a_range, bay in (("lo", (a_lo, a_lo + t), row[0]), ("hi", (a_hi - t, a_hi), row[-1])):
            name = self._end_name(-1 if end == "lo" else 1)
            c0, c1 = self.c_range(bay, tf, bay.depth)
            self.add(Part(f"{run.id}-END-{name}{tag}", f"Bok {name}", "EndSide",
                          [(*a_range, c0, c1, z0, z1)]), bay)
        self._dividers(row, z0, z1, back_y=row[0].depth, tag=tag)
        self._plinth(row, a_lo, a_hi)

    def _dividers(self, row, z0, z1, back_y, tag):
        t, tf = self.p["BoardThickness"], self.p["FrontThickness"]
        for left, right in zip(row, row[1:]):
            a = left.a1
            c0, c1 = self.c_range(left, tf, back_y)
            self.add(Part(f"{self.run.id}-DIV-{left.id}-{right.id}", f"Přepážka {left.id} | {right.id}",
                          "Divider", [(a - t / 2, a + t / 2, c0, c1, z0, z1)]), left, right)
        # Clear widths: half a divider or a whole end side on each side.
        for i, bay in enumerate(row):
            bay.clear_lo = bay.a0 + (t if i == 0 else t / 2)
            bay.clear_hi = bay.a1 - (t if i == len(row) - 1 else t / 2)

    def _plinth(self, row, a_lo, a_hi):
        p = self.p
        if p["PlinthHeight"] <= 0:
            return
        bay = row[0]
        c0, c1 = self.c_range(bay, p["PlinthSetback"], p["PlinthSetback"] + p["BoardThickness"])
        face = self.run.frame.compass(0.0, -1.0 if bay.front_low else 1.0)
        self.add(Part(f"{self.run.id}-PLINTH-{face}", f"Sokl {face}", "Plinth",
                      [(a_lo, a_hi, c0, c1, bay.z_base, bay.z_base + p["PlinthHeight"])]))

    def _has_sink(self, bay: Bay) -> bool:
        return any(s["yaml_id"] in bay.external for s in self.sinks)

    def _bay_parts(self, bay: Bay, z0, z1, shared_back: bool):
        run = self.run
        p = _params((run.element, PSET_RUN), (bay.element, PSET_CABINET))
        t, tf, bt = p["BoardThickness"], p["FrontThickness"], p["BackThickness"]
        lo, hi = bay.clear_lo, bay.clear_hi
        back_y = bay.depth - (t / 2 if shared_back else bt)
        c_in0, c_in1 = self.c_range(bay, tf, back_y)
        self.add(Part(f"{bay.id}-BOTTOM", "Dno", "Bottom", [(lo, hi, c_in0, c_in1, z0, z0 + t)]), bay)
        if not shared_back:
            c0, c1 = self.c_range(bay, back_y, bay.depth)
            self.add(Part(f"{bay.id}-BACK", "Záda", "Back", [(lo, hi, c0, c1, z0 + t, z1)]), bay)
        if p["WorktopThickness"] > 0:
            if not self._has_sink(bay):
                c0, c1 = self.c_range(bay, tf, tf + p["RailDepth"])
                self.add(Part(f"{bay.id}-RAIL-F", "Přední lišta", "Rail", [(lo, hi, c0, c1, z1 - t, z1)]), bay)
                if not shared_back:
                    c0, c1 = self.c_range(bay, back_y - p["RailDepth"], back_y)
                    self.add(Part(f"{bay.id}-RAIL-B", "Zadní lišta", "Rail", [(lo, hi, c0, c1, z1 - t, z1)]), bay)
        else:
            self.add(Part(f"{bay.id}-TOP", "Strop", "Top", [(lo, hi, c_in0, c_in1, z1 - t, z1)]), bay)
        g = p["FrontGap"] / 2.0
        if has_drawers(bay.element):
            for dr in drawer_layout(bay, p, z0, z1, back_y):
                self.add(Part(f"{bay.id}-D{dr.index}", f"Šuplík {dr.index} {dr.content}".strip(), "Drawer",
                              drawer_boxes(dr, p), drawer=dr), bay)
        elif str(_prop(bay.element, PSET_BAY, "Front", "slab")).lower() != "none":
            c0, c1 = self.c_range(bay, 0.0, tf)
            self.add(Part(f"{bay.id}-FRONT", "Dvířka", "Front",
                          [(bay.a0 + g, bay.a1 - g, c0, c1, z0 + g, z1 - g)]), bay)

    def _worktop(self, rows, zb, zt):
        run, p = self.run, self.p
        bays = run.bays
        a0 = min(b.a0 for b in bays)
        a1 = max(b.a1 for b in bays)
        c0 = min(b.c0 for b in bays)
        c1 = max(b.c1 for b in bays)
        oh = p["WorktopOverhang"]
        if any(b.front_low and _near(b.c0, c0) for b in bays):
            c0 -= oh
        if any((not b.front_low) and _near(b.c1, c1) for b in bays):
            c1 += oh
        if _prop(run.element, PSET_RUN, "CladEnds"):
            ct = p["CladdingThickness"] or p["WorktopThickness"]
            a0 -= ct
            a1 += ct
        voids = []
        for sink in self.sinks:
            sa0, sa1, sc0, sc1 = sink["bowl"]
            if sa0 >= a0 and sa1 <= a1 and sc0 >= c0 and sc1 <= c1 and _near(sink["top"], zt):
                voids.append(sink["bowl"])
        run.worktop = (a0, a1, c0, c1, zb, zt)
        material = _prop(run.element, PSET_RUN, "WorktopMaterial")
        self.add(Part(f"{run.id}-WORKTOP", "Pracovní deska", "Worktop", [run.worktop],
                      label="worktop", voids=voids, material=material))

    def _cladding(self, rows, zb, zt):
        run, p = self.run, self.p
        ct = p["CladdingThickness"] or p["WorktopThickness"]
        if run.worktop is not None:
            c0, c1 = run.worktop[2], run.worktop[3]
        else:
            c0, c1 = min(b.c0 for b in run.bays), max(b.c1 for b in run.bays)
        a0 = min(b.a0 for b in run.bays)
        a1 = max(b.a1 for b in run.bays)
        material = _prop(run.element, PSET_RUN, "WorktopMaterial")
        for da, a_range, edge in ((-1, (a0 - ct, a0), a0), (1, (a1, a1 + ct), a1)):
            name = self._end_name(da)
            touching = [b for b in run.bays if _near(b.a0 if da < 0 else b.a1, edge)]
            self.add(Part(f"{run.id}-CLAD-{name}", f"Obklad boku {name}", "Cladding",
                          [(*a_range, c0, c1, zb, zt)], label="worktop", material=material), *touching)


def drawer_layout(bay: Bay, p: dict, z0: float, z1: float, back_y: float) -> list[Drawer]:
    """Drawers of one bay, from its clear opening and the parameters (mm)."""
    t, tf = p["BoardThickness"], p["FrontThickness"]
    carcass_h = z1 - z0
    usable = back_y - tf - p["BoxRearClearance"]
    slide = p["SlideStep"] * int(usable // p["SlideStep"])
    nominals = _nominals(_prop(bay.element, PSET_DRAWERS, "NominalHeights"), carcass_h)
    contents = [c.strip() for c in str(_prop(bay.element, PSET_DRAWERS, "Contents", "")).split(";")]
    g = p["FrontGap"] / 2.0
    out_dir = -1.0 if bay.front_low else 1.0
    drawers = []
    top = z1
    for index, nominal in enumerate(nominals, start=1):
        slot0 = top - nominal
        fc0, fc1 = _Builder.c_range(bay, 0.0, tf)
        front = (bay.a0 + g, bay.a1 - g, fc0, fc1, slot0 + g, top - g)
        box_h = max(p["BoxMinHeight"], nominal - p["BoxHeightReserve"])
        bz0 = slot0 + p["BoxBottomOffset"]
        clr = p["SlideClearance"]
        bc0, bc1 = _Builder.c_range(bay, tf, tf + slide)
        box = (bay.clear_lo + clr, bay.clear_hi - clr, bc0, bc1, bz0, bz0 + box_h)
        content = contents[index - 1] if index - 1 < len(contents) else ""
        drawers.append(Drawer(index, content, nominal, slot0, front, box, slide, out_dir))
        top = slot0
    if bay.clear_lo + p["SlideClearance"] < bay.clear_lo or t <= 0:
        raise ValueError("bad drawer parameters")
    return drawers


def drawer_boxes(dr: Drawer, p: dict) -> list:
    """Front plus open box (bottom, two sides, back), run frame."""
    wall = p["BoxWall"]
    a0, a1, c0, c1, z0, z1 = dr.box
    back_lo = dr.out > 0  # pulls toward +c, so its back is the c0 end
    back = (a0, a1, c0, c0 + wall, z0, z1) if back_lo else (a0, a1, c1 - wall, c1, z0, z1)
    return [
        dr.front,
        (a0, a1, c0, c1, z0, z0 + wall),
        (a0, a0 + wall, c0, c1, z0, z1),
        (a1 - wall, a1, c0, c1, z0, z1),
        back,
    ]


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


# --- document ------------------------------------------------------------------

BAY_LISTS = ("systemFurniture", "furniture")
EXTERNAL_LISTS = ("electricAppliances", "sanitaryTerminals")


def _box_plan(element: dict):
    """Plan rectangle (mm) and z range of a yaml box element."""
    ox, oy = (float(v) * 1000.0 for v in element["Origin"])
    rx, ry = _unit(element.get("RefDirection"))
    nx, ny = -ry, rx
    w, d, h = (float(element[k]) * 1000.0 for k in ("Width", "Depth", "Height"))
    pts = [(ox + rx * x + nx * y, oy + ry * x + ny * y) for x in (0, w) for y in (0, d)]
    z = float(element.get("Elevation") or 0.0) * 1000.0
    return pts, (z, z + h), (rx, ry), (w, d)


def runs(doc: dict) -> list[Run]:
    """Every kitchen run in a furnishings document, fully laid out."""
    elements = [e for key in BAY_LISTS for e in (doc.get(key) or [])]
    run_elements = [e for e in elements if is_run(e)]
    out = []
    for run_el in run_elements:
        bay_els = [e for e in elements if run_of(e) == run_el["id"]]
        if not bay_els:
            raise ValueError(f"{run_el['id']} has no bays")
        first = bay_els[0]
        ox, oy = (float(v) * 1000.0 for v in first["Origin"])
        ux, uy = _unit(first.get("RefDirection"))
        frame = Frame(ox, oy, ux, uy)
        params = _params((run_el, PSET_RUN))
        bays = [_bay(e, frame) for e in bay_els]
        run = Run(run_el["id"], run_el, frame, params, bays)
        sinks = []
        for key in EXTERNAL_LISTS:
            for ext in doc.get(key) or []:
                if not all(ext.get(k) is not None for k in ("Origin", "Width", "Depth", "Height")):
                    continue
                pts, (ez0, ez1), (rx, ry), (w, d) = _box_plan(ext)
                cx = sum(p[0] for p in pts) / 4.0
                cy = sum(p[1] for p in pts) / 4.0
                ca, cc = frame.local(cx, cy)
                for bay in bays:
                    inside = bay.a0 < ca < bay.a1 and bay.c0 < cc < bay.c1
                    overlaps = ez0 < bay.z_base + bay.height and ez1 > bay.z_base
                    if inside and overlaps:
                        bay.external.append(ext["id"])
                bw = _prop(ext, PSET_SINK, "BowlWidth")
                bd = _prop(ext, PSET_SINK, "BowlDepth")
                if ext.get("PredefinedType") == "SINK" and bw is not None and bd is not None:
                    # Undermount: the worktop hole is the bowl, centred on the sink.
                    loc = [frame.local(x, y) for x, y in pts]
                    along_is_width = abs(rx * ux + ry * uy) > 0.5
                    ha = (float(bw) if along_is_width else float(bd)) * 500.0
                    hc = (float(bd) if along_is_width else float(bw)) * 500.0
                    sinks.append({
                        "yaml_id": ext["id"],
                        "bowl": (ca - ha, ca + ha, cc - hc, cc + hc),
                        "top": ez1,
                        "plan": (min(p[0] for p in loc), max(p[0] for p in loc)),
                    })
        _Builder(run, sinks).build()
        out.append(run)
    return out


def bay_summary(run: Run) -> list[dict]:
    """Per-bay clear widths and member lists, for docs and previews."""
    return [
        {
            "id": b.id,
            "width": b.width,
            "clear": None if b.niche else b.clear_width,
            "members": list(b.members),
            "external": list(b.external),
        }
        for b in run.bays
    ]
