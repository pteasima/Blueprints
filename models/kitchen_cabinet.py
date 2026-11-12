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

Sinks cut the worktop with their manufacturer's undermount cut-out
(``Pset_Sink``); a bay with ``Pset_Hob`` gets the hob's cut-out (stepped for
flush-fit), the hob itself (glass and housing, an appliance in IFC) and a
top drawer kept 8 mm under it; a run with ``Backsplash`` gets stone on the
wall from the worktop up to the boxes hanging over it.
"""

from __future__ import annotations

import math
from dataclasses import dataclass, field

PSET_CABINET = "Pset_KitchenCabinet"
PSET_DRAWERS = "Pset_Drawers"
PSET_RUN = "Pset_KitchenRun"
PSET_BAY = "Pset_KitchenBay"
PSET_SINK = "Pset_Sink"
PSET_HOB = "Pset_Hob"
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
    "LegDiameter": 40.0,  # adjustable leg, IKEA-like (guess)
    "LegInset": 50.0,  # leg centre behind the carcass front / before its back (guess)
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
    "BacksplashThickness": 12.0,  # Silestone backsplash (Petr, 2026-11-12, via Bob)
    "BacksplashTop": 0.0,  # 0 = up to the wall cabinets above; else a height above the floor
}
RUN_FLAGS = ("CladEnds", "Backsplash")
# Pset_KitchenRun.Carcass: "Monoblock" (default, the IKEA-style parts below)
# or "Box": each bay stays one solid body (the oak dining bases) cut down
# under the stone worktop; only the worktop and cladding are added.
CARCASS_BOX = "Box"
# A worktop cut-out with no manufacturer size: the bowl less 2 mm a side
# (the Teka RS15 pattern: bowl 710×400 → cut-out 706×396). guess:
SINK_CUTOUT_INSET_MM = 2.0
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
    trimmed: float = 0.0  # mm taken off the box height to clear a hob above


@dataclass(frozen=True)
class Void:
    """A worktop cut-out, run frame mm. ``depth`` None: through; else a
    pocket that deep from the top (a flush-fit hob's rebate)."""

    a0: float
    a1: float
    c0: float
    c1: float
    radius: float = 0.0
    depth: float | None = None
    name: str = ""


@dataclass
class Hob:
    """A hob in one bay, run frame mm. Numbers: the bay's Pset_Hob."""

    id: str
    name: str
    mounting: str  # FlushFit | SurfaceMounted
    cutout: Void
    rebate: Void | None
    glass: tuple  # box
    housing: tuple  # box
    underside: float  # z of the housing bottom
    back_edge: float  # cut-out to the worktop's far edge
    min_drawer_gap: float


@dataclass
class Part:
    id: str
    name: str
    role: str  # EndSide, Divider, CentralBack, Back, Bottom, Rail, Top, Front, Drawer, Plinth, Worktop, Cladding, Backsplash, Hob
    boxes: list  # run-frame boxes (a0, a1, c0, c1, z0, z1)
    label: str = "cabinet"
    voids: list = field(default_factory=list)  # Void cut-outs (worktop)
    drawer: Drawer | None = None
    material: str | None = None
    shape: str = "box"  # "cylinder": one vertical cylinder inscribed in boxes[0] (legs)


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
    hobs: dict = field(default_factory=dict)  # bay id -> Hob
    notes: list = field(default_factory=list)  # derived facts for docs ("open:" ones too)

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
    def __init__(self, run: Run, sinks: list[dict], above: list | None = None):
        self.run = run
        self.p = run.params
        self.sinks = sinks
        self.above = above or []  # (a0, a1, c0, c1, z0, id): boxes hanging over the run
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
        if str(_prop(run.element, PSET_RUN, "Carcass", "")) == CARCASS_BOX:
            self._box_run(cabinets, z_base, height, wt)
            return
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
        if wt > 0:
            for bay in cabinets:
                if _prop(bay.element, PSET_HOB, "Model") is not None:
                    run.hobs[bay.id] = self._hob_layout(bay, z_base + height)
        for bay in cabinets:
            self._bay_parts(bay, z0, z1, shared_back=any(bay in r for k, rs in blocks if k == "pair" for r in rs))
        if wt > 0:
            self._worktop(rows, z_base + height - wt, z_base + height)
        if _prop(run.element, PSET_RUN, "CladEnds"):
            self._cladding(rows, z_base, z_base + height - wt)
        if wt > 0 and _prop(run.element, PSET_RUN, "Backsplash"):
            self._backsplash(rows, pairs, z_base + height)
        for bay_id, hob in run.hobs.items():
            self.add(Part(hob.id, hob.name, "Hob", [hob.glass, hob.housing], label="hob"), run.bay(bay_id))
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

    def _box_run(self, bays, z_base, height, wt):
        """Bays as whole bodies under a stone worktop (``Carcass: Box``).

        The body keeps the bay's plan and stops at the worktop underside, so
        the 930 counter stays 930. The worktop is one part made of one slab
        per bay (bays of different depth step around the piers), each with
        the front overhang; clad ends add the cladding thickness.
        """
        run, p = self.run, self.p
        run.carcass_z0, run.carcass_z1 = z_base, z_base + height - wt
        material = _prop(run.element, PSET_RUN, "BodyMaterial")
        for bay in bays:
            self.add(Part(f"{bay.id}-BODY", bay.element.get("Name") or bay.id, "Body",
                          [(bay.a0, bay.a1, bay.c0, bay.c1, z_base, z_base + height - wt)], material=material), bay)
        if wt <= 0:
            return
        oh = p["WorktopOverhang"]
        clad = _prop(run.element, PSET_RUN, "CladEnds")
        ct = p["CladdingThickness"] or wt
        a_lo, a_hi = min(b.a0 for b in bays), max(b.a1 for b in bays)
        slabs = []
        for bay in sorted(bays, key=lambda b: b.a0):
            a0 = bay.a0 - (ct if clad and _near(bay.a0, a_lo) else 0.0)
            a1 = bay.a1 + (ct if clad and _near(bay.a1, a_hi) else 0.0)
            c0 = bay.c0 - (oh if bay.front_low else 0.0)
            c1 = bay.c1 + (0.0 if bay.front_low else oh)
            slabs.append((a0, a1, c0, c1, z_base + height - wt, z_base + height))
        run.worktop = (min(s[0] for s in slabs), max(s[1] for s in slabs),
                       min(s[2] for s in slabs), max(s[3] for s in slabs), slabs[0][4], slabs[0][5])
        self.add(Part(f"{run.id}-WORKTOP", "Pracovní deska", "Worktop", slabs, label="worktop",
                      material=_prop(run.element, PSET_RUN, "WorktopMaterial")))
        if clad:
            self._cladding(_rows(run.bays), z_base, z_base + height - wt)

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
                self._plinth(row, a_lo, a_hi, back_y=row[0].depth - t / 2)
            return
        (row,) = rows_in
        for end, a_range, bay in (("lo", (a_lo, a_lo + t), row[0]), ("hi", (a_hi - t, a_hi), row[-1])):
            name = self._end_name(-1 if end == "lo" else 1)
            c0, c1 = self.c_range(bay, tf, bay.depth)
            self.add(Part(f"{run.id}-END-{name}{tag}", f"Bok {name}", "EndSide",
                          [(*a_range, c0, c1, z0, z1)]), bay)
        self._dividers(row, z0, z1, back_y=row[0].depth, tag=tag)
        self._plinth(row, a_lo, a_hi, back_y=row[0].depth - p["BackThickness"])

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

    def _plinth(self, row, a_lo, a_hi, back_y):
        p = self.p
        if p["PlinthHeight"] <= 0:
            return
        if str(_prop(self.run.element, PSET_RUN, "PlinthKind", "Board")) == "Legs":
            self._legs(row, back_y)
            return
        bay = row[0]
        c0, c1 = self.c_range(bay, p["PlinthSetback"], p["PlinthSetback"] + p["BoardThickness"])
        face = self.run.frame.compass(0.0, -1.0 if bay.front_low else 1.0)
        self.add(Part(f"{self.run.id}-PLINTH-{face}", f"Sokl {face}", "Plinth",
                      [(a_lo, a_hi, c0, c1, bay.z_base, bay.z_base + p["PlinthHeight"])]))

    def _legs(self, row, back_y):
        """Open legs, no kick board (Petr, 2026-11-12: the robot vacuum
        drives under). One front and one back leg on every wall line of the
        row: under each end side and each shared divider, so a divider's
        legs are shared like the divider (guess: IKEA puts 4 per cabinet)."""
        p, run = self.p, self.run
        t, tf = p["BoardThickness"], p["FrontThickness"]
        d, inset = p["LegDiameter"], p["LegInset"]
        z0, z1 = row[0].z_base, row[0].z_base + p["PlinthHeight"]
        lines = [(row[0].a0 + t / 2, (row[0],), f"{row[0].id}-{run.frame.compass(-1.0, 0.0)}")]
        lines += [(l.a1, (l, r), f"{l.id}-{r.id}") for l, r in zip(row, row[1:])]
        lines.append((row[-1].a1 - t / 2, (row[-1],), f"{row[-1].id}-{run.frame.compass(1.0, 0.0)}"))
        for a, bays, tag in lines:
            for end, y in (("F", tf + inset), ("B", back_y - inset)):
                c = sum(self.c_range(row[0], y, y)) / 2.0
                self.add(Part(f"{run.id}-LEG-{tag}-{end}", "Nožka", "Leg",
                              [(a - d / 2, a + d / 2, c - d / 2, c + d / 2, z0, z1)], shape="cylinder"), *bays)

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
        hob = self.run.hobs.get(bay.id)
        if p["WorktopThickness"] > 0:
            if not self._has_sink(bay):
                rails = [("F", "Přední lišta", self.c_range(bay, tf, tf + p["RailDepth"]))]
                if not shared_back:
                    rails.append(("B", "Zadní lišta", self.c_range(bay, back_y - p["RailDepth"], back_y)))
                for tag, name, (c0, c1) in rails:
                    box = (lo, hi, c0, c1, z1 - t, z1)
                    if hob is not None and _boxes_meet(box, hob.housing):
                        # The hob housing drops into the rail: no rail (guess:).
                        self.run.notes.append(f"{bay.id}: rail {tag} left out, the hob housing sits there")
                        continue
                    self.add(Part(f"{bay.id}-RAIL-{tag}", name, "Rail", [box]), bay)
        else:
            self.add(Part(f"{bay.id}-TOP", "Strop", "Top", [(lo, hi, c_in0, c_in1, z1 - t, z1)]), bay)
        g = p["FrontGap"] / 2.0
        if has_drawers(bay.element):
            ceiling = None if hob is None else hob.underside - hob.min_drawer_gap
            for dr in drawer_layout(bay, p, z0, z1, back_y, ceiling=ceiling):
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
        c0, c1 = self._worktop_c(bays)
        if _prop(run.element, PSET_RUN, "CladEnds"):
            ct = p["CladdingThickness"] or p["WorktopThickness"]
            a0 -= ct
            a1 += ct
        voids = []
        for sink in self.sinks:
            hole = sink["cutout"]
            if not (hole.a0 >= a0 and hole.a1 <= a1 and hole.c0 >= c0 and hole.c1 <= c1):
                continue
            if sink["mounting"] != "Undermount":
                raise ValueError(f"{sink['yaml_id']}: only undermount sinks are modelled, got {sink['mounting']}")
            if not _near(sink["top"], zb):
                # An undermount rim is glued to the underside of the stone.
                raise ValueError(
                    f"{sink['yaml_id']}: undermount rim top {sink['top']} mm must be the worktop underside {zb} mm"
                )
            voids.append(hole)
        for hob in self.run.hobs.values():
            voids.append(hob.cutout)
            if hob.rebate is not None:
                voids.append(hob.rebate)
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

    def _hob_layout(self, bay: Bay, zt: float) -> Hob:
        """The hob of one bay from its Pset_Hob (metres), run frame mm.

        Centred on the bay along the run. The cut-out's front edge is
        ``FrontOffset`` behind the bay's front face (default: the cut-out
        centred on the bay depth, guess:). Flush-fit: the glass top is the
        worktop top and the rebate is cut around the hole; surface-mounted:
        the glass rests on the worktop.
        """

        def mm(key, default=None):
            v = _prop(bay.element, PSET_HOB, key)
            if v is None:
                if default is None:
                    raise ValueError(f"{bay.id}: Pset_Hob needs {key}")
                return default
            return float(v) * 1000.0

        mounting = str(_prop(bay.element, PSET_HOB, "Mounting", "SurfaceMounted"))
        if mounting not in ("FlushFit", "SurfaceMounted"):
            raise ValueError(f"{bay.id}: Pset_Hob Mounting is FlushFit or SurfaceMounted, got {mounting}")
        cw, cd = mm("CutoutWidth"), mm("CutoutDepth")
        gw, gd, gt = mm("GlassWidth"), mm("GlassDepth"), mm("GlassThickness")
        hw, hd, ih = mm("HousingWidth"), mm("HousingDepth"), mm("InstallationHeight")
        front = mm("FrontOffset", (bay.depth - cd) / 2.0)
        am = (bay.a0 + bay.a1) / 2.0
        c0, c1 = self.c_range(bay, front, front + cd)
        cm = (c0 + c1) / 2.0
        cutout = Void(am - cw / 2, am + cw / 2, c0, c1, name="hob")
        rebate = None
        if mounting == "FlushFit":
            rw, rd, rh = mm("RebateWidth"), mm("RebateDepth"), mm("RebateHeight")
            rebate = Void(am - rw / 2, am + rw / 2, cm - rd / 2, cm + rd / 2, depth=rh, name="hob rebate")
            glass_top = zt
        else:
            glass_top = zt + gt
        glass = (am - gw / 2, am + gw / 2, cm - gd / 2, cm + gd / 2, glass_top - gt, glass_top)
        underside = glass_top - ih
        housing = (am - hw / 2, am + hw / 2, cm - hd / 2, cm + hd / 2, underside, glass_top - gt)
        wt0, wt1 = self._worktop_c(self.run.bays)
        back_edge = (wt1 - c1) if bay.front_low else (c0 - wt0)
        need = mm("MinBackEdge", 50.0)
        if back_edge < need - TOL:
            raise ValueError(f"{bay.id}: hob cut-out {back_edge} mm from the worktop's back edge, needs {need}")
        hid = str(_prop(bay.element, PSET_HOB, "Id", f"{bay.id}-HOB"))
        name = str(_prop(bay.element, PSET_HOB, "Model"))
        return Hob(hid, name, mounting, cutout, rebate, glass, housing, underside, back_edge,
                   mm("MinDrawerGap", 8.0))

    def _worktop_c(self, bays) -> tuple[float, float]:
        c0 = min(b.c0 for b in bays)
        c1 = max(b.c1 for b in bays)
        oh = self.p["WorktopOverhang"]
        if any(b.front_low and _near(b.c0, c0) for b in bays):
            c0 -= oh
        if any((not b.front_low) and _near(b.c1, c1) for b in bays):
            c1 += oh
        return c0, c1

    def _backsplash(self, rows, pairs, zt):
        """Stone on the wall behind a single row: worktop top up to the
        lowest box hanging over that strip (the wall cabinets), else to
        ``BacksplashTop`` (an ``open:`` height)."""
        run, p = self.run, self.p
        bt = p["BacksplashThickness"]
        paired = {id(r) for pair in pairs for r in pair}
        # Wall to wall along the bays, not over the clad ends' extra 20
        # (those reach past the door jambs).
        a0, a1 = min(b.a0 for b in run.bays), max(b.a1 for b in run.bays)
        material = _prop(run.element, PSET_RUN, "BacksplashMaterial") or _prop(run.element, PSET_RUN, "WorktopMaterial")
        for row in rows:
            if id(row) in paired:
                continue
            c0, c1 = self.c_range(row[0], row[0].depth - bt, row[0].depth)
            over = [
                (z, oid) for (oa0, oa1, oc0, oc1, z, oid) in self.above
                if z > zt + TOL and oa0 < a1 - TOL and oa1 > a0 + TOL and oc0 < c1 - TOL and oc1 > c0 + TOL
            ]
            if over:
                top = min(z for z, _ in over)
                covered = sorted({oid for z, oid in over})
                run.notes.append(f"backsplash top {top:.0f}: underside of {', '.join(covered)}")
            elif p["BacksplashTop"] > 0:
                top = p["BacksplashTop"]
                run.notes.append(f"open: backsplash top {top:.0f} (BacksplashTop, nothing hangs above)")
            else:
                raise ValueError(f"{run.id}: nothing above the backsplash and no BacksplashTop")
            face = run.frame.compass(0.0, 1.0 if row[0].front_low else -1.0)
            self.add(Part(f"{run.id}-BACKSPLASH", f"Obklad stěny {face}", "Backsplash",
                          [(a0, a1, c0, c1, zt, top)], label="worktop", material=material), *row)


def _boxes_meet(a, b) -> bool:
    return all(a[2 * i] < b[2 * i + 1] - TOL and b[2 * i] < a[2 * i + 1] - TOL for i in range(3))


def drawer_layout(bay: Bay, p: dict, z0: float, z1: float, back_y: float, ceiling: float | None = None) -> list[Drawer]:
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
        trimmed = 0.0
        if ceiling is not None and box[5] > ceiling:
            # Miele: >= 8 mm from the hob underside to a drawer's top edge.
            trimmed = box[5] - ceiling
            if ceiling - bz0 < p["BoxMinHeight"]:
                raise ValueError(f"{bay.id}: drawer {index} under the hob would be under {p['BoxMinHeight']} mm")
            box = (*box[:5], ceiling)
        content = contents[index - 1] if index - 1 < len(contents) else ""
        drawers.append(Drawer(index, content, nominal, slot0, front, box, slide, out_dir, trimmed))
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


def _sink(ext: dict, frame: Frame, centre, ref, top: float) -> dict:
    """Worktop cut-out of a sink, centred on its box (run frame mm).

    Pset_Sink ``CutoutWidth``/``CutoutDepth``/``CutoutRadius`` are the
    manufacturer's (Width along the sink's own RefDirection). Without them
    the cut-out is the bowl less ``SINK_CUTOUT_INSET_MM`` a side (guess:).
    """
    ca, cc = centre
    rx, ry = ref

    def m(key):
        v = _prop(ext, PSET_SINK, key)
        return None if v is None else float(v) * 1000.0

    cw, cd = m("CutoutWidth"), m("CutoutDepth")
    if cw is None or cd is None:
        cw = m("BowlWidth") - 2 * SINK_CUTOUT_INSET_MM
        cd = m("BowlDepth") - 2 * SINK_CUTOUT_INSET_MM
    along_is_width = abs(rx * frame.ux + ry * frame.uy) > 0.5
    ha = (cw if along_is_width else cd) / 2.0
    hc = (cd if along_is_width else cw) / 2.0
    return {
        "yaml_id": ext["id"],
        "cutout": Void(ca - ha, ca + ha, cc - hc, cc + hc, radius=m("CutoutRadius") or 0.0, name=ext["id"]),
        "top": top,
        "mounting": str(_prop(ext, PSET_SINK, "Mounting", "Undermount")),
    }


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
                if ext.get("PredefinedType") == "SINK" and _prop(ext, PSET_SINK, "BowlWidth") is not None:
                    sinks.append(_sink(ext, frame, (ca, cc), (rx, ry), ez1))
        above = []
        for e in elements + [x for key in EXTERNAL_LISTS for x in (doc.get(key) or [])]:
            if e is run_el or run_of(e) == run_el["id"] or not float(e.get("Elevation") or 0.0) > 0:
                continue
            if not all(e.get(k) is not None for k in ("Origin", "Width", "Depth", "Height")):
                continue
            pts, (ez0, _ez1), _r, _wd = _box_plan(e)
            loc = [frame.local(x, y) for x, y in pts]
            above.append((min(q[0] for q in loc), max(q[0] for q in loc),
                          min(q[1] for q in loc), max(q[1] for q in loc), ez0, e["id"]))
        _Builder(run, sinks, above).build()
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
