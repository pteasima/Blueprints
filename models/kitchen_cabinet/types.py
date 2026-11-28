"""Dataclasses for kitchen cabinet runs: frames, bays, parts, and grips."""
from __future__ import annotations

import math
from dataclasses import dataclass, field

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
    trimmed: float = 0.0  # mm taken off the box height to clear a hob (or a sink, a disposer) above
    kind: str = "drawer"  # "drawer" or "pullout" (a full-height front with a frame box)
    items: list = field(default_factory=list)  # run-frame boxes riding in the box (baskets, bins, baseplate)
    zone: int = 0  # Pset_Fronts zone, 1 = top
    inside: tuple = (0.0, 0.0, 0.0)  # drawer inside width, depth, side height above the floor (mm)
    floor_z: float = 0.0  # z of the box's inside floor
    grid: tuple | None = None  # Gridfinity (n, m) cells when the bay asks for a baseplate
    baseplate: list = field(default_factory=list)  # the baseplate's boxes (also in items); the viewer loads them on demand
    side: str = ""  # Blum MERIVOBOX drawer side letter (N, M, K, E)
    nl: float = 0.0  # Blum nominal length, mm
    load: int = 0  # Blum profile load class, kg (40 / 70)
    drop: float = 0.0  # mm the box sits below its band's own position (stacking, see _drawer)
    profile_z: float = 0.0  # bottom of the cabinet profile (Blum space requirement), mm
    frame: dict | None = None  # hanging-bin frame pull-out (``frame=u``): its sizes, see _frame_pullout
    twin: dict | None = None  # Blum SPACE TWIN (``twin=E``): the upper box and its profile, see _drawer
    # Top of a tall recycling back panel (``tall_back=rail``), mm. 0 = none.
    # The MERIVOBOX back itself is extended up to this z; the sides stay at
    # the side letter height. See kitchen-cabinets.md (t1017u).
    tall_back_z: float = 0.0


@dataclass
class Leaf:
    """A hinged door leaf, run frame mm."""

    zone: int
    hinge: str  # "L" or "R", as you face the front
    hinge_a: float  # run-frame a of the hinge edge
    face_c: float  # c of the leaf's outer face
    out: float  # +1 / -1: the c direction the leaf faces


@dataclass
class LiftJoint:
    """One joint of a lift front's linkage, run frame mm (the viewer's
    ``kind: "linkage"`` record, models/ground_floor/).

    The joint turns about a line along the run's a axis through
    (``pivot_c``, ``pivot_z``). ``angles`` are radians, relative to the
    ``parent`` joint (None: the carcass), sampled at even steps from shut
    (first) to open (last). A positive angle swings the part's lower edge
    out of the carcass, towards ``out`` (+1 / -1 in c).
    """

    group: str  # the linkage, one per lift front (``<bay>-LIFT``)
    index: int  # this joint's place in the linkage
    parent: int | None
    pivot_c: float
    pivot_z: float
    out: float
    angles: tuple
    # Optional, per sample: how much the part grows along the line straight
    # down from the pivot (a telescoping arm), 1 = as built.
    stretch: tuple | None = None


@dataclass
class Zone:
    """One horizontal band of a bay's front, top to bottom (Pset_Fronts)."""

    index: int  # 1 = top
    kind: str  # drawer | pullout | door | doors | niche | front | none
    nominal: float  # band height, mm (a niche: its clear height plus the board under it)
    slot_z0: float
    slot_z1: float
    opts: dict
    content: str = ""
    niche: tuple | None = None  # clear niche box (run frame) for a built-in appliance
    dock: tuple | None = None  # dock band: clear opening from the floor (run frame) for a floor appliance


@dataclass(frozen=True)
class Void:
    """A worktop cut-out or pocket, run frame mm. ``depth`` None: through;
    else a pocket that deep, from the top (a flush-fit hob's rebate) or
    from the underside when ``underside`` is true (a drip groove)."""

    a0: float
    a1: float
    c0: float
    c1: float
    radius: float = 0.0
    depth: float | None = None
    name: str = ""
    underside: bool = False


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
class HobVent:
    """Hob ventilation in one bay (Miele KM 8665 FL, Petr t935u–t942u).
    Lengths in mm from the bay's front face (y). The moved-forward back
    sits at ``inner_y``–``outer_y``; the clear channel is ``channel`` mm
    to the inner face of the rear (or shared central) back. The air-intake
    panel is under the hob (no gap). Fillets, plinth duct, baffle and
    outlet grille are not modelled (open: to settle with the woodworker).
    """

    nl: float
    back_t: float
    channel: float
    inner_y: float
    outer_y: float
    back_y: float
    cutout_h: float
    cutout_w: float
    panel_t: float
    hole_d: float


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
    # Mitre cuts: each a triangle [(a, z), (a, z), (a, z)] in the run frame,
    # cut through the part's whole depth (c). The island top and its end
    # panels meet at 45 degrees (Petr, 2026-11-20 f, ``MitreEnds``).
    cuts: list = field(default_factory=list)
    door: Leaf | None = None
    props: dict = field(default_factory=dict)  # Pset_KitchenFront / Pset_BuiltIn values for IFC
    builtin: dict | None = None  # a yaml appliance laid out here (its own IFC product)
    lift: LiftJoint | None = None  # a lift front or its arm: how it moves open (viewer)
    # Routed grips (``FrontGrip``): ``Grip`` prisms subtracted from the front
    # (boxes[0] of a door, drawer.front of a drawer) in the 3D model and IFC.
    grips: list = field(default_factory=list)


@dataclass
class Grip:
    """A prism cut from a front, run frame mm: the closed outline extruded
    along ``axis`` ("a": along the run, points (c, z); "z": vertical, points
    (a, c)) from s0 to s1. ``segments`` is the exact outline: 2 points per
    straight line, 3 (start, middle, end) per circular arc; ``profile`` is
    the same outline as a polygon (arcs every 10 degrees)."""
    axis: str
    s0: float
    s1: float
    segments: list

    @property
    def profile(self) -> list:
        return _sample_segments(self.segments)

    def bounds(self) -> tuple:
        """(a0, a1, c0, c1, z0, z1) of the prism."""
        pts = self.profile
        xs = [q[0] for q in pts]
        ys = [q[1] for q in pts]
        if self.axis == "a":
            return (self.s0, self.s1, min(xs), max(xs), min(ys), max(ys))
        return (min(xs), max(xs), min(ys), max(ys), self.s0, self.s1)


def _sample_segments(segs: list, step_deg: float = 10.0) -> list:
    """Polygon through ``segs`` (each starts where the last ended)."""
    out = []
    for seg in segs:
        if len(seg) == 2:
            pts = [seg[0]]
        else:
            (x0, y0), (xm, ym), (x1, y1) = seg
            # circle through the three points
            d = 2.0 * (x0 * (ym - y1) + xm * (y1 - y0) + x1 * (y0 - ym))
            ux = ((x0**2 + y0**2) * (ym - y1) + (xm**2 + ym**2) * (y1 - y0) + (x1**2 + y1**2) * (y0 - ym)) / d
            uy = ((x0**2 + y0**2) * (x1 - xm) + (xm**2 + ym**2) * (x0 - x1) + (x1**2 + y1**2) * (xm - x0)) / d
            r = math.hypot(x0 - ux, y0 - uy)
            t0, tm, t1 = (math.atan2(y - uy, x - ux) for x, y in seg)
            sweep = (t1 - t0) % (2 * math.pi)
            if (tm - t0) % (2 * math.pi) > sweep:  # goes the other way round
                sweep -= 2 * math.pi
            n = max(2, math.ceil(abs(math.degrees(sweep)) / step_deg))
            pts = [(ux + r * math.cos(t0 + sweep * k / n), uy + r * math.sin(t0 + sweep * k / n)) for k in range(n)]
        for q in pts:
            if not out or math.hypot(q[0] - out[-1][0], q[1] - out[-1][1]) > 1e-9:
                out.append(q)
    return out


def grip_profile(p: dict, *, kind: str = "j") -> list:
    """The VOXTORP J cup's cut-away region as segments in (d, u): d into the
    front from its visible face, u from the gripped edge toward the middle of
    the front. Overcut 1 past the face and the edge. See ``IKEA_DEFAULTS_MM``.

    ``kind="j"`` is the full J (face cut from the edge down to the crest,
    back wall back up to the edge). ``kind="u"`` is the same scooped bowl
    and crest, but without the J's straight stem: the visible face ends at
    the rounded lip, so the groove is an uneven U opening at the edge
    (Petr, 2026-11-27, t1013u / VoxtorpUGripPhoto.jpg).
    """
    hc, hb, tb = p["JGripLipTop"], p["JGripCupDepth"], p["JGripBackWall"]
    kind = (kind or "j").lower()
    if kind == "u":
        # Same bowl under the crest; the crest sits at the gripped edge
        # (no 21 mm straight face cut). Cup depth below the new edge is
        # the J's (bottom − lip) = 7 mm.
        hb = hb - hc
        hc = 0.0
    elif kind != "j":
        raise ValueError(f"grip_profile kind={kind!r}, expected 'j' or 'u'")
    R, rc, rk, re, e = p["JGripBowlRadius"], p["JGripCrestRadius"], p["JGripCornerRadius"], p["JGripEdgeRadius"], 1.0
    dw = p["FrontThickness"] - tb  # the back wall's inside
    dy = (hb - R) - (hc + rc)  # bowl centre to crest centre, along u
    if not (0.0 < tb < p["FrontThickness"] and 0.0 <= hc < hb and R > 0.0 and rc > 0.0 and (R + rc) ** 2 > dy * dy):
        raise ValueError("J grip: 0 <= JGripLipTop < JGripCupDepth, 0 < JGripBackWall < FrontThickness, "
                         "and the bowl must reach the crest")
    xb = rc + math.sqrt((R + rc) ** 2 - dy * dy)  # the bowl's centre (and bottom point), d
    if not (0.0 <= rk and xb <= dw - rk + 1e-9 and rk <= hb - re and 0.0 <= re <= tb):
        raise ValueError("J grip: JGripCornerRadius does not fit between the bowl and the back wall")
    tt = math.atan2(-dy, rc - xb)  # bowl centre -> crest centre, the tangent point's angle on the bowl

    def arc(cx, cy, r, t0, t1):
        tm = (t0 + t1) / 2.0
        return [(cx + r * math.cos(t), cy + r * math.sin(t)) for t in (t0, tm, t1)]

    pi = math.pi
    segs = [[(-e, -e), (dw + re, -e)]]
    if re > 0:
        segs += [[(dw + re, -e), (dw + re, 0.0)], arc(dw + re, re, re, 1.5 * pi, pi)]
    segs.append([(dw, re if re > 0 else -e), (dw, hb - rk)])  # the back wall's inside
    if rk > 0:
        segs.append(arc(dw - rk, hb - rk, rk, 0.0, pi / 2.0))  # into the bottom
    segs.append([(dw - rk, hb), (xb, hb)])  # the bottom
    segs.append(arc(xb, hb - R, R, pi / 2.0, tt))  # the lip's inside, one large arc up to the crest
    segs.append(arc(rc, hc + rc, rc, tt - pi, -pi))  # the crest, over onto the visible face
    segs += [[(0.0, hc + rc), (-e, hc + rc)], [(-e, hc + rc), (-e, -e)]]
    return [sg for sg in segs if len(sg) == 3 or math.hypot(sg[1][0] - sg[0][0], sg[1][1] - sg[0][1]) > 1e-9]


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
    zones: list = field(default_factory=list)  # Zone, top to bottom
    obstacles: list = field(default_factory=list)  # (box, id): sink bowls, disposers hanging in the bay
    docks: list = field(default_factory=list)  # (section id, zone, opening box): dock bands in this bay

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
    docks: list = field(default_factory=list)  # (section bay, zone) with a dock band
    door_bands: list = field(default_factory=list)  # (bay, zone, floor z, top z, back_y, racks): door bands
    lent_worktop: list = field(default_factory=list)  # (run id, bay id, run-frame slab) topped by another run
    carcass_z0: float = 0.0
    carcass_z1: float = 0.0
    worktop: tuple | None = None  # run-frame box
    hobs: dict = field(default_factory=dict)  # bay id -> Hob
    builtins: list = field(default_factory=list)  # yaml appliance elements placed in this run
    clearances: list = field(default_factory=list)  # (bay id, run-frame box): space a lift front needs open
    notes: list = field(default_factory=list)  # derived facts for docs ("open:" ones too)
    led_fields: list = field(default_factory=list)  # LedField per lit cabinet section

    def part(self, part_id: str) -> Part:
        return next(p for p in self.parts if p.id == part_id)

    def bay(self, bay_id: str) -> Bay:
        return next(b for b in self.bays if b.id == bay_id)


@dataclass
class LedField:
    """One LED panel field routed into a cabinet bottom's underside (run
    frame mm). Boxes are (a0, a1, c0, c1, z0, z1)."""
    bay_id: str
    index: int
    rebate: tuple  # the opening in the underside
    diffuser: tuple
    pocket: tuple
    plate: tuple
    modules: list  # LED sheet pieces, each a box
    hole: tuple  # (a, c) of the cable hole, through the web
    plates: list = field(default_factory=list)  # aluminium plate pieces, butted (boxes)
