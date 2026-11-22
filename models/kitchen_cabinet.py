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
from dataclasses import dataclass, field, replace

PSET_CABINET = "Pset_KitchenCabinet"
PSET_DRAWERS = "Pset_Drawers"
PSET_RUN = "Pset_KitchenRun"
PSET_BAY = "Pset_KitchenBay"
PSET_SINK = "Pset_Sink"
PSET_HOB = "Pset_Hob"
PSET_FRONTS = "Pset_Fronts"
PSET_BUILTIN = "Pset_BuiltIn"
RUN_OBJECT_TYPE = "KitchenRun"
KIND_NICHE = "Niche"

# Defaults, millimetres. Sources per row in kitchen-cabinets.md. A run's
# Pset_KitchenRun (metres) overrides any of them; a bay's Pset_KitchenCabinet
# overrides the drawer and front values for that bay only.
IKEA_DEFAULTS_MM = {
    "WorktopThickness": 38.0,  # IKEA worktops; the island run sets 20 (Silestone)
    "WorktopOverhang": 0.0,  # past the front faces; Petr gave 20 for Silestone (2026-11-13)
    "CladdingThickness": 0.0,  # 0 = same as the worktop
    # A layer under the stone (box runs, ``UnderlayMaterial``): Petr,
    # 2026-11-20 f, the dining run is 20 Silestone on 20 oak.
    "UnderlayThickness": 0.0,
    # Cabinet bottom thickness; 0 = BoardThickness. The wall cabinets with
    # LED panels (``LedPanels``) take a 30 bottom with the panel routed into
    # its underside (2026-11-22 a, see kitchen-cabinets.md "LED panels").
    "BottomThickness": 0.0,
    # LED panel field under a cabinet bottom (``Pset_KitchenRun.LedPanels``),
    # from the underside up: a rebate for the opal diffuser (flush with the
    # underside, ``LedRebatePlay`` all round), then a pocket ``LedLedge``
    # smaller each side (the diffuser rests on that ledge) holding the air
    # gap, the LED sheet and its aluminium plate. All guess: except Petr's
    # 245 x 495 module ("I think") and the 3 mm opal acrylic.
    "LedPadding": 25.0,  # field edge to the bottom board's edges (and to section dividers)
    "LedRebatePlay": 1.5,  # diffuser to rebate, each side (1-2)
    "LedDiffuserThickness": 3.0,  # opal PMMA, e.g. Plexiglas LED WH14 / WH72
    "LedLedge": 8.0,  # diffuser seat, each side
    "LedAirGap": 8.0,  # LED dots to diffuser (5-10 for bare dots)
    "LedModuleThickness": 2.0,
    "LedPlateThickness": 2.0,  # aluminium backing plate
    "LedPlatePlay": 1.0,  # plate to pocket, each side
    "LedModuleWidth": 245.0,  # Petr: "245*495mm (I think)"
    "LedModuleLength": 495.0,
    "LedMinCut": 50.0,  # narrower leftovers are left off (the field is centred)
    "LedMinWeb": 10.0,  # board left over the pocket
    "LedCableHole": 10.0,  # through the web into the cabinet, at the pocket's back
    "LedPlateMaxLength": 1000.0,  # aluminium plates butted at module joints, each at most this long
    "PlinthHeight": 92.0,  # METOD legs 80–100
    "PlinthSetback": 50.0,  # plinth board behind the front face (guess)
    # Inner drawers (Pset_Fronts drawer ``inner=``), Blum MERIVOBOX / LEGRABOX
    # inner drawers behind one full-height front (2026-11-20 b). Side heights
    # by Blum letter: M 90, K 128 (Blum: M 90.5, K 128.5; Petr's brief says
    # M=90, K=128). The top inner drawer sits InnerTopGap under the band's
    # ceiling (guess:); the others spread evenly below it.
    "InnerSideM": 90.0,
    "InnerSideK": 128.0,
    # Blum MERIVOBOX system heights E and F (Blum MERIVOBOX instructions: N
    # 68.5, M 91, K 129, E 192, F 256; M and K as Petr gave them, above).
    "InnerSideE": 192.0,
    "InnerSideF": 256.0,
    # Blum MERIVOBOX (Pset_Drawers.System: MERIVOBOX, 2026-11-20 c): the
    # 16 mm chipboard base and back are LW − 51 wide, LW the cabinet's inside
    # width (Blum MERIVOBOX planning, TD-069 / installation sheet); the
    # inside width is taken as that base width (guess: the side profiles'
    # inner faces). Nominal lengths NL in 50 steps from 270; the cabinet
    # needs NL + 3 inside depth (Blum); the base is NL − 26 long with a
    # chipboard back, the inside depth that less the 16 back (guess:).
    "MerivoboxWidthDeduction": 51.0,
    "MerivoboxDepthClearance": 3.0,
    "MerivoboxBaseDeduction": 26.0,
    "MerivoboxBackThickness": 16.0,
    "InnerTopGap": 30.0,
    # Blum ZI7.0M07 driver set ("unašeč", LEGRABOX/MERIVOBOX inner drawers,
    # for 90 / 128 sides): the driver clips on the middle of the inner
    # drawer's front piece, its housing is drilled into the inside of the
    # front; press the housing to release (lignoshop.de, hafele.jafholz.cz).
    # The 25 x 13 size is guess:; drawn as two small boxes.
    "LatchDiameter": 25.0,
    "LatchDepth": 13.0,
    # A ``dock`` band (a robot-vacuum station under the cabinet): clearance
    # over the station to the board above it, and round it in the opening (guess:).
    "DockClearance": 10.0,
    "LegDiameter": 40.0,  # adjustable leg, IKEA-like (guess)
    "LegInset": 50.0,  # leg centre behind the carcass front / before its back (guess)
    "BoardThickness": 18.0,  # METOD carcass board; also every shared divider
    "FrontThickness": 18.0,  # METOD fronts
    "BackThickness": 8.0,  # single-row back panel (guess)
    "FrontGap": 3.0,  # 600×200 grid front is 597×197
    # Integrated J grip (``Pset_KitchenRun.FrontGrip: J``; Petr, 2026-11-22 c:
    # "voxtorp J style on drawers and hinged doors"): a routed band along one
    # edge of the front face, ``JGripHeight`` wide, ``JGripDepth`` deep into the
    # front. guess: 22 x 10, read off IKEA's VOXTORP product photos (the band
    # is about 20-25 of a 127/254 front); IKEA does not publish it. The J's
    # hook: below the band's floor (toward the front's middle), a slot
    # ``JGripUndercut`` long behind a ``JGripLip`` thick lip of the face, so
    # the fingertips pull on the lip's back. Square-cut boxes; the curve is
    # the router bit's. Which edge: ``_grip_edge``.
    "JGripHeight": 22.0,
    "JGripDepth": 10.0,
    "JGripLip": 4.0,
    "JGripUndercut": 8.0,
    # Wall (top) cabinets: the lowest front hangs this far below the carcass
    # bottom as the grip (Petr, 2026-11-22 c: "plain 1cm overhang on all top
    # cabinets"). The top edge does not move.
    "WallFrontOverhang": 0.0,
    "RailDepth": 80.0,  # top front/back rails (guess)
    # Drawers modelled after IKEA MAXIMERA in a METOD 60×60 frame (IKEA's own
    # pages, kitchen-cabinets.md "Drawers: MAXIMERA"): inside 480 × 504 in a
    # 564 clear (600 − 2 × 18) by 600 deep frame, the same deduction at 40, 60
    # and 80 wide. Our carcass loses the same from its own sides.
    "DrawerInnerWidthDeduction": 84.0,  # clear width between the sides − drawer inside width (IKEA)
    "DrawerInnerDepthDeduction": 96.0,  # side depth (front edge to the back) − drawer inside depth (IKEA)
    "BoxWall": 19.0,  # drawn box side / front / back: (542 − 504) / 2, MAXIMERA box 542 deep (IKEA)
    "BoxBottomThickness": 16.0,  # drawn box bottom (guess; MAXIMERA's is particleboard)
    "BoxBottomOffset": 3.0,  # band bottom (above the carcass bottom board for the lowest) to box bottom (guess)
    # MAXIMERA side heights by "system height" (the front band it is sold for):
    # low 78 in 100, medium 144 in 200, high 212 in 300 (IKEA). A taller band
    # than MaximeraTallBand gets front − BoxHeightReserve (a high box with side
    # extensions, guess:), as do pull-outs.
    "MaximeraLowBand": 100.0,
    "MaximeraLowHeight": 78.0,
    "MaximeraMediumBand": 200.0,
    "MaximeraMediumHeight": 144.0,
    "MaximeraHighBand": 300.0,
    "MaximeraHighHeight": 212.0,
    "MaximeraTallBand": 400.0,
    "BoxHeightReserve": 110.0,  # front height minus drawer box side height, tall bands (guess)
    "BoxMinHeight": 60.0,
    # Gridfinity (bays with Pset_Drawers.Gridfinity): 42 mm pitch, the drawer
    # inside is n × 42 + GridfinityPlay; the baseplate is drawn in the drawer.
    "GridfinityPitch": 42.0,
    "GridfinityPlay": 1.0,
    "GridfinityHeight": 5.0,  # baseplate height (guess: standard plates are about 5)
    "GridfinityFloor": 1.0,  # drawn floor under the cells (guess)
    "GridfinityRib": 2.5,  # drawn rib between cells (guess)
    "GridfinityUnit": 7.0,  # bin height unit
    "BacksplashThickness": 12.0,  # Silestone backsplash (Petr, 2026-11-12, via Bob)
    "BacksplashTop": 0.0,  # 0 = up to the wall cabinets above; else a height above the floor
    # Fronts and interiors (Pset_Fronts), all guess: unless kitchen-cabinets.md says otherwise.
    "ShelfSetback": 20.0,  # shelf front edge behind the carcass front edge
    "ObstacleClearance": 10.0,  # drawer box top to a sink bowl / disposer above it
    "RackDepth": 80.0,  # door rack (police na dveřích), out from the door's back face
    "RackHeight": 70.0,
    "RackInset": 40.0,  # each side, from the door edge
    "BinGap": 10.0,  # between bins in a pull-out
    "BinWall": 3.0,  # plastic bin wall
}
RUN_FLAGS = ("CladEnds", "Backsplash")

# Blum AVENTOS lift systems (``lift`` bands), from the Blum catalogue and
# technical manual 2024/2025 (publications.blum.com/2024/catalogue/en/):
# HF top p. 20–28, HS top p. 32–36, HL top p. 38–40, HK top p. 44–48, and the
# overview leaflet for HK-S / HK-XS. Sources and the photo reading:
# docs/design/kitchen-cabinets.md "Wall cabinets: lift-up fronts".
#   kh      cabinet height KH range, mm
#   kb      cabinet width KB, max mm
#   lt      internal cabinet depth LT, min mm (None: not given)
#   lf      power factor LF = KH x front weight FG (kg), min..max over the
#           lift mechanism sets (None: Blum selects by FG, not LF)
#   fg      front weight FG, max kg for two mechanisms (None: not given)
#   fronts  1 one-part front, 2 bi-fold (two fronts)
#   mech    lift mechanism box on each side panel, (width off the side
#           panel, depth from the carcass front, height down from the top),
#           mm. guess: read off Blum's planning drawings, not a data sheet.
AVENTOS = {
    "HF": {"name": "Blum AVENTOS HF top (bi-fold)", "kh": (480.0, 1200.0), "kb": 1800.0, "lt": 264.0,
           "lf": (2700.0, 19300.0), "fg": None, "fronts": 2, "mech": (30.0, 264.0, 195.0),
           # Opening-angle stop on the lift mechanism, degrees (116: no stop),
           # and Blum's space above for each, Y = FHo x k + c mm (catalogue
           # 2024/25 p. 22–24, planning sketch "Platzbedarf nach oben").
           "stops": {116.0: (0.44, 38.0), 107.0: (0.29, 35.0), 97.0: (0.12, 31.0), 88.0: (0.0, 28.0), 81.0: (0.0, 0.0)}},
    "HS": {"name": "Blum AVENTOS HS top (up and over)", "kh": (350.0, 800.0), "kb": 1800.0, "lt": 264.0,
           "lf": None, "fg": 18.5, "fronts": 1, "mech": (30.0, 264.0, 141.0)},
    "HL": {"name": "Blum AVENTOS HL top (lift up)", "kh": (300.0, 580.0), "kb": 1800.0, "lt": 264.0,
           "lf": None, "fg": None, "fronts": 1, "mech": (30.0, 264.0, 141.0)},
    "HK": {"name": "Blum AVENTOS HK top (stay lift)", "kh": (205.0, 600.0), "kb": 1800.0, "lt": None,
           "lf": (420.0, 9000.0), "fg": 18.0, "fronts": 1, "mech": (30.0, 235.0, 187.0)},
    "HK-S": {"name": "Blum AVENTOS HK-S (small stay lift)", "kh": (180.0, 400.0), "kb": 1800.0, "lt": None,
             "lf": None, "fg": None, "fronts": 1, "mech": (30.0, 200.0, 120.0)},
    "HK-XS": {"name": "Blum AVENTOS HK-XS (stay lift)", "kh": (240.0, 600.0), "kb": 1800.0, "lt": None,
              "lf": None, "fg": None, "fronts": 1, "mech": (30.0, 200.0, 120.0)},
}
# Opening angle each fitting is animated to in the viewer, degrees (Blum's
# largest setting; HF's 116 matches the clearance below). HS (up and over)
# and HL (lifts parallel) are drawn as a tilt about the top edge too: a
# simplification, their real fronts do not turn about one line.
LIFT_OPEN_DEG = {"HF": 116.0, "HS": 110.0, "HL": 107.0, "HK": 107.0, "HK-S": 104.0, "HK-XS": 105.0}
# Samples per linkage joint, shut to open (the viewer interpolates).
LIFT_STEPS = 24
# Lever arm drawn from each mechanism to the front: mm wide (a), deep (c),
# and for a one-part front how far under the mechanism it fixes to it.
# guess: read off Blum's drawings, not measured.
LIFT_ARM = (16.0, 16.0, 120.0)
# AVENTOS HF top, open: the lower front hangs from the centre hinge with its
# bottom edge this many degrees back towards the cabinet from vertical,
# read off Blum's planning sketch "Platzbedarf nach oben" (AVENTOS HF TOP
# Planungsskizzen). guess: measured on the drawing, not a published figure.
# The HF lever is fixed to the lower front and pivots at the mechanism's
# underside (same sketch, "Platzbedarf"); its fixing height is solved so
# the open pose comes out at this angle.
LIFT_HF_LOWER_OPEN_DEG = -15.0
# Blum HF: shelves at least 22 behind the fronts' back face (the lever runs
# there; "Platzbedarf", "min 22").
LIFT_HF_SHELF_SETBACK = 22.0

# Front weight for a lift: oak-veneered chipboard, kg/m3. Blum's reference
# chipboard is 680 (catalogue p. 716); veneer and glue add a little. guess:
LIFT_FRONT_DENSITY = 700.0
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
    """True when any band of the bay (or of any of its sections) is a drawer or a pull-out."""
    if not element:
        return False
    specs = [zone_spec(e) for e in section_elements(element)] or [zone_spec(element)]
    return any(kind in DRAWER_KINDS for spec in specs for kind, _h, _o in spec)


def has_fronts(element: dict | None) -> bool:
    """True when the bay describes its fronts (``Pset_Fronts`` or ``Pset_Drawers``)."""
    return bool(element) and (_prop(element, PSET_FRONTS, "Layout") is not None
                              or _prop(element, PSET_FRONTS, "Sections") is not None
                              or _prop(element, PSET_DRAWERS, "NominalHeights") is not None)


def section_widths(element: dict, width: float) -> list[float] | None:
    """``Pset_Fronts.Sections`` (mm, left to right as you face it): a count of
    equal sections (``"7"``) or widths in metres with at most one ``*``
    (``"0.6 0.6 0.3 0.6 *"``). The widths are the bay's outer width split at
    the section dividers' centres."""
    raw = _prop(element, PSET_FRONTS, "Sections")
    if raw is None:
        return None
    tokens = str(raw).split()
    if len(tokens) == 1 and tokens[0].isdigit():
        n = int(tokens[0])
        if n < 2:
            raise ValueError(f"{element['id']}: Sections {raw!r} needs at least 2")
        return [width / n] * n
    out = _nominals(" ".join(tokens), width)
    if len(out) < 2:
        raise ValueError(f"{element['id']}: Sections {raw!r} needs at least 2")
    return out


def section_element(element: dict, number: int) -> dict:
    """The yaml element one section reads its fronts from: ``Layout<N>``
    (else ``Layout``), ``Contents<N>`` (else none), ``Gridfinity``,
    ``BlumRangeOverride``, and the
    bay's ``Pset_Drawers``."""
    props = next((ps.get("Properties") or {} for ps in element.get("PropertySets") or []
                  if ps.get("Name") == PSET_FRONTS), {})
    layout = props.get(f"Layout{number}", props.get("Layout"))
    if layout is None:
        raise ValueError(f"{element['id']}: section {number} has no Layout{number} or Layout")
    sub = {"Layout": layout}
    for key in (f"Contents{number}",):
        if props.get(key) is not None:
            sub["Contents"] = props[key]
    if props.get("Gridfinity") is not None:
        sub["Gridfinity"] = props["Gridfinity"]
    # A bay's Blum override holds for each of its sections (2026-11-20 f).
    if props.get("BlumRangeOverride") is not None:
        sub["BlumRangeOverride"] = props["BlumRangeOverride"]
    psets = [{"Name": PSET_FRONTS, "Properties": sub}]
    # The bay's Pset_Drawers (Gridfinity, System) holds for every section.
    drawers = next((ps.get("Properties") for ps in element.get("PropertySets") or []
                    if ps.get("Name") == PSET_DRAWERS), None)
    if drawers:
        psets.append({"Name": PSET_DRAWERS, "Properties": dict(drawers)})
    return {"id": f"{element['id']}-S{number}", "Name": f"{element.get('Name', element['id'])} {number}",
            "PropertySets": psets}


def section_elements(element: dict) -> list[dict]:
    """The section elements of a bay with ``Pset_Fronts.Sections`` (else [])."""
    if _prop(element, PSET_FRONTS, "Sections") is None:
        return []
    widths = section_widths(element, float(element.get("Width") or 1.0) * 1000.0)
    return [section_element(element, k) for k in range(1, len(widths) + 1)]


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
    trimmed: float = 0.0  # mm taken off the box height to clear a hob (or a sink, a disposer) above
    kind: str = "drawer"  # "drawer" or "pullout" (a full-height front with a frame box)
    items: list = field(default_factory=list)  # run-frame boxes riding in the box (baskets, bins, baseplate)
    zone: int = 0  # Pset_Fronts zone, 1 = top
    inside: tuple = (0.0, 0.0, 0.0)  # drawer inside width, depth, side height above the floor (mm)
    floor_z: float = 0.0  # z of the box's inside floor
    grid: tuple | None = None  # Gridfinity (n, m) cells when the bay asks for a baseplate
    baseplate: list = field(default_factory=list)  # the baseplate's boxes (also in items); the viewer loads them on demand


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
    ``kind: "linkage"`` record, models/ground_floor.py).

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
    # Mitre cuts: each a triangle [(a, z), (a, z), (a, z)] in the run frame,
    # cut through the part's whole depth (c). The island top and its end
    # panels meet at 45 degrees (Petr, 2026-11-20 f, ``MitreEnds``).
    cuts: list = field(default_factory=list)
    door: Leaf | None = None
    props: dict = field(default_factory=dict)  # Pset_KitchenFront / Pset_BuiltIn values for IFC
    builtin: dict | None = None  # a yaml appliance laid out here (its own IFC product)
    lift: LiftJoint | None = None  # a lift front or its arm: how it moves open (viewer)
    # Routed grips (``FrontGrip``): run-frame boxes subtracted from the
    # front (boxes[0] of a door, drawer.front of a drawer) in the 3D model and IFC.
    grips: list = field(default_factory=list)


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


def _cuts(length: float, module: float, min_cut: float) -> list[float]:
    """Module pieces along one side: whole modules, then one cut piece; a
    leftover under ``min_cut`` is left off."""
    whole = int(length // module)
    out = [module] * whole
    rest = length - whole * module
    if rest >= min_cut - TOL:
        out.append(rest)
    if not out:
        out = [length]  # narrower than one module: one cut piece
    return out


def _ring(outer: tuple, holes: list, z0: float, z1: float) -> list:
    """``outer`` (a0, a1, c0, c1) less the ``holes`` (side by side along a,
    inside outer), as boxes from z0 to z1."""
    a0, a1, c0, c1 = outer
    out = []
    cursor = a0
    for h0, h1, k0, k1 in sorted(holes):
        if h0 > cursor + TOL:
            out.append((cursor, h0, c0, c1, z0, z1))
        if k0 > c0 + TOL:
            out.append((h0, h1, c0, k0, z0, z1))
        if c1 > k1 + TOL:
            out.append((h0, h1, k1, c1, z0, z1))
        cursor = h1
    if a1 > cursor + TOL:
        out.append((cursor, a1, c0, c1, z0, z1))
    return out


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
    def __init__(self, run: Run, sinks: list[dict], above: list | None = None, builtins: list | None = None,
                 sanitary: set | None = None):
        self.run = run
        self.p = run.params
        self.sinks = sinks
        self.builtins = builtins or []  # yaml elements with Pset_BuiltIn and no box
        self.sanitary = sanitary or set()  # of those, the sanitaryTerminals (taps)
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
        if p["UnderlayThickness"] > 0:
            raise ValueError(f"{run.id}: UnderlayThickness is only modelled for Carcass: Box runs")
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
        # The kickboard runs on across a niche (the dishwasher slot) in a
        # kickboard run, like IKEA's plinth across an integrated dishwasher
        # (2026-11-20 b, guess:). The appliance's own plinth is not modelled.
        if p["PlinthHeight"] > 0 and _prop(run.element, PSET_RUN, "Kickboard"):
            for bay in run.bays:
                if not bay.niche:
                    continue
                c0, c1 = self.c_range(bay, p["PlinthSetback"], p["PlinthSetback"] + p["BoardThickness"])
                face = run.frame.compass(0.0, -1.0 if bay.front_low else 1.0)
                self.add(Part(f"{bay.id}-PLINTH-{face}", f"Soklová lišta {face}", "Plinth",
                              [(bay.a0, bay.a1, c0, c1, bay.z_base, bay.z_base + p["PlinthHeight"])],
                              props={"Kind": "Kickboard", "Setback": round(p["PlinthSetback"] / 1000.0, 6)}), bay)
        if wt > 0:
            for bay in cabinets:
                if _prop(bay.element, PSET_HOB, "Model") is not None:
                    run.hobs[bay.id] = self._hob_layout(bay, z_base + height)
        self._sink_fittings(cabinets, z_base + height)
        for bay in cabinets:
            self._bay_parts(bay, z0, z1, shared_back=any(bay in r for k, rs in blocks if k == "pair" for r in rs))
        self._niche_appliances(cabinets)
        self._dock_appliances(cabinets)
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
        ul = p["UnderlayThickness"]
        run.carcass_z0, run.carcass_z1 = z_base, z_base + height - wt - ul
        material = _prop(run.element, PSET_RUN, "BodyMaterial")
        z0 = z_base + p["PlinthHeight"]

        def own_top(bay):
            return (_prop(bay.element, PSET_BAY, "WorktopRun") is not None
                    or _prop(bay.element, PSET_BAY, "WorktopMaterial") is not None)

        def bay_wt(bay):
            # A bay topped with its own piece may have its own thickness
            # (Pset_KitchenBay.WorktopThickness, metres): the column
            # cupboards' oak tops are 40 since 2026-11-20 f.
            own = _prop(bay.element, PSET_BAY, "WorktopThickness")
            return wt if own is None else float(own) * 1000.0

        def bay_stack(bay):
            # Everything over the carcass: the bay's own top, or the stone
            # plus the underlay (``UnderlayThickness``). The finished top
            # stays at the bay's height (930).
            return bay_wt(bay) if own_top(bay) else wt + ul

        for bay in bays:
            z1 = z_base + height - bay_stack(bay)
            if has_fronts(bay.element):
                # A bay with fronts is a carcass of its own (end sides,
                # bottom, back, rails) with its fronts, on the run's plinth.
                self._block("single", ([bay],), z0, z1)
                self._bay_parts(bay, z0, z1, shared_back=False)
                continue
            self.add(Part(f"{bay.id}-BODY", bay.element.get("Name") or bay.id, "Body",
                          [(bay.a0, bay.a1, bay.c0, bay.c1, z_base, z1)], material=material), bay)
        self._dock_appliances(bays)
        self._join_flush_kickboards(bays)
        if wt <= 0:
            return
        clad = _prop(run.element, PSET_RUN, "CladEnds")
        ct = p["CladdingThickness"] or wt
        a_lo, a_hi = min(b.a0 for b in bays), max(b.a1 for b in bays)
        slabs = []
        for bay in sorted(bays, key=lambda b: b.a0):
            a0 = bay.a0 - (ct if clad and _near(bay.a0, a_lo) else 0.0)
            a1 = bay.a1 + (ct if clad and _near(bay.a1, a_hi) else 0.0)
            c0 = bay.c0 - (self._overhang(True) if bay.front_low else 0.0)
            c1 = bay.c1 + (0.0 if bay.front_low else self._overhang(False))
            slabs.append((a0, a1, c0, c1, z_base + height - bay_wt(bay), z_base + height))
        run.worktop = (min(s[0] for s in slabs), max(s[1] for s in slabs),
                       min(s[2] for s in slabs), max(s[3] for s in slabs), z_base + height - wt, z_base + height)
        material = _prop(run.element, PSET_RUN, "WorktopMaterial")
        # A bay may top itself with its own piece (Pset_KitchenBay.WorktopMaterial)
        # or with another run's counter (WorktopRun: its slab joins that run's
        # worktop, see ``_join_worktops``). Petr, 2026-11-20 b: the shallow
        # column cupboards get oak, not Silestone.
        own = []
        for bay, slab in zip(sorted(bays, key=lambda b: b.a0), list(slabs)):
            other = _prop(bay.element, PSET_BAY, "WorktopRun")
            mat = _prop(bay.element, PSET_BAY, "WorktopMaterial")
            if other is None and mat is None:
                continue
            slabs.remove(slab)
            if other is not None:
                run.lent_worktop.append((str(other), bay.id, slab))
            else:
                own.append(self.add(Part(f"{bay.id}-WORKTOP", "Pracovní deska (vlastní)", "Worktop", [slab],
                                         label=_worktop_label(mat), material=mat,
                                         props={"Material": mat}), bay))
        if slabs:
            self.add(Part(f"{run.id}-WORKTOP", "Pracovní deska", "Worktop", slabs, label=_worktop_label(material),
                          material=material))
            if ul > 0:
                # The same footprint, under the stone (Petr, 2026-11-20 f:
                # "the dining part has 20 silestone and 20 oak below it").
                under = _prop(run.element, PSET_RUN, "UnderlayMaterial")
                if under is None:
                    raise ValueError(f"{run.id}: UnderlayThickness needs an UnderlayMaterial")
                self.add(Part(f"{run.id}-UNDERLAY", "Podložení pracovní desky", "Underlay",
                              [(s[0], s[1], s[2], s[3], s[4] - ul, s[4]) for s in slabs],
                              label=_worktop_label(under), material=under, props={"Material": under}))
        if clad:
            self._cladding(_rows(run.bays), z_base, z_base + height - wt - ul)

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
                self._plinth(row, a_lo, a_hi, back_y=row[0].depth - t / 2, tag=tag)
            return
        (row,) = rows_in
        for end, a_range, bay in (("lo", (a_lo, a_lo + t), row[0]), ("hi", (a_hi - t, a_hi), row[-1])):
            name = self._end_name(-1 if end == "lo" else 1)
            c0, c1 = self.c_range(bay, tf, bay.depth)
            self.add(Part(f"{run.id}-END-{name}{tag}", f"Bok {name}", "EndSide",
                          [(*a_range, c0, c1, z0, z1)]), bay)
        self._dividers(row, z0, z1, back_y=row[0].depth, tag=tag)
        self._plinth(row, a_lo, a_hi, back_y=row[0].depth - p["BackThickness"], tag=tag)

    def _dividers(self, row, z0, z1, back_y, tag):
        t, tf = self.p["BoardThickness"], self.p["FrontThickness"]
        # With one continuous LED bottom (``LedContinuous``) the dividers
        # stand on that bottom instead of running down past it.
        zd = z0 + ((self.p["BottomThickness"] or t) if self._led_continuous() else 0.0)
        for left, right in zip(row, row[1:]):
            a = left.a1
            c0, c1 = self.c_range(left, tf, back_y)
            self.add(Part(f"{self.run.id}-DIV-{left.id}-{right.id}", f"Přepážka {left.id} | {right.id}",
                          "Divider", [(a - t / 2, a + t / 2, c0, c1, zd, z1)]), left, right)
        # Clear widths: half a divider or a whole end side on each side.
        for i, bay in enumerate(row):
            bay.clear_lo = bay.a0 + (t if i == 0 else t / 2)
            bay.clear_hi = bay.a1 - (t if i == len(row) - 1 else t / 2)

    def _plinth(self, row, a_lo, a_hi, back_y, tag=""):
        """The toe-kick zone under a row (``PlinthHeight``), by
        ``Pset_KitchenRun.PlinthKind``: ``Board`` a kickboard ``PlinthSetback``
        behind the fronts; ``Legs`` open legs, plus that kickboard when
        ``Kickboard`` is true (Petr, 2026-11-20 b: "add kickboard (cover) to
        the existing plinth / toe-kick areas"); ``Flush`` a fixed kickboard
        in the fronts' plane, front-thick (the dining run: "there's no
        recessed toe-kick, but there still is a bottom fixed kickboard with
        the same 100mm height (flush with the cabinet fronts)")."""
        p = self.p
        if p["PlinthHeight"] <= 0:
            return
        kind = str(_prop(self.run.element, PSET_RUN, "PlinthKind", "Board"))
        if kind == "Legs":
            self._legs(row, back_y)
            if not _prop(self.run.element, PSET_RUN, "Kickboard"):
                return
        bay = row[0]
        if kind == "Flush":
            c0, c1 = self.c_range(bay, 0.0, p["FrontThickness"])
        else:
            c0, c1 = self.c_range(bay, p["PlinthSetback"], p["PlinthSetback"] + p["BoardThickness"])
        face = self.run.frame.compass(0.0, -1.0 if bay.front_low else 1.0)
        self.add(Part(f"{self.run.id}-PLINTH-{face}{tag}", f"Soklová lišta {face}", "Plinth",
                      [(a_lo, a_hi, c0, c1, bay.z_base, bay.z_base + p["PlinthHeight"])],
                      props={"Kind": "Kickboard", "Setback": round((0.0 if kind == "Flush" else p["PlinthSetback"]) / 1000.0, 6)}),
                 *row)
        # A run end left open to the room gets a return kickboard along
        # the depth, ``PlinthSetback`` in from that end face, from the
        # front kickboard to the back (``Pset_KitchenRun.SideKickboards``:
        # "W", "E" or "W E" by compass). Petr, 2026-11-20 d: "Please add a
        # bit of kickboard between the kitchen and dining areas in the
        # south-north direction (the side of the tall kitchen cabinet has a
        # hole with no kickboard)".
        sides = str(_prop(self.run.element, PSET_RUN, "SideKickboards", "") or "").split()
        # ``SideKickboardSetback`` (metres) sets how far in from the end face
        # the return sits; default ``PlinthSetback``. KR-TALL's is 0, flush
        # with the side panel's outer face (Petr, 2026-11-20 h: "Youve made
        # it recessed, which is clearly wrong. Needs to be flush with the
        # cabinet side.").
        if kind != "Flush" and sides:
            t, sb = p["BoardThickness"], p["PlinthSetback"]
            own = _prop(self.run.element, PSET_RUN, "SideKickboardSetback")
            se = sb if own is None else float(own) * 1000.0
            ends = {self._end_name(-1.0): (row[0], a_lo + se, a_lo + se + t),
                    self._end_name(1.0): (row[-1], a_hi - se - t, a_hi - se)}
            for name in sides:
                if name not in ends:
                    raise ValueError(f"{self.run.id}: SideKickboards {name!r} is not a run end ({', '.join(ends)})")
                end_bay, s0, s1 = ends[name]
                k0, k1 = self.c_range(end_bay, sb + t, back_y)
                self.add(Part(f"{self.run.id}-PLINTH-{name}{tag}", f"Soklová lišta {name}", "Plinth",
                              [(s0, s1, k0, k1, end_bay.z_base, end_bay.z_base + p["PlinthHeight"])],
                              props={"Kind": "Kickboard", "Side": name, "Setback": round(se / 1000.0, 6)}),
                         end_bay)

    def _join_flush_kickboards(self, bays):
        """One flush kickboard along a box run (Petr, 2026-11-20 d: "theres
        no reason there should be a split in the kickboard where each column
        meets the dining are, it can just be one continous kickboard"): the
        bays' boards in one front plane become one part, their touching
        pieces one piece; only a dock opening still splits it."""
        run = self.run
        kick = [q for q in run.parts if q.role == "Plinth" and q.props.get("Kind") == "Kickboard"
                and float(q.props.get("Setback") or 0.0) == 0.0]
        if len(kick) < 2:
            return
        planes = {(round(b[2], 3), round(b[3], 3), round(b[4], 3), round(b[5], 3)) for q in kick for b in q.boxes}
        if len(planes) != 1:
            return  # not one front plane: leave them
        boxes = sorted((b for q in kick for b in q.boxes), key=lambda b: b[0])
        merged = [list(boxes[0])]
        for b in boxes[1:]:
            if b[0] <= merged[-1][1] + TOL:
                merged[-1][1] = max(merged[-1][1], b[1])
            else:
                merged.append(list(b))
        face = run.frame.compass(0.0, -1.0 if bays[0].front_low else 1.0)
        ids = {q.id for q in kick}
        run.parts[:] = [q for q in run.parts if q.id not in ids]
        self.ids -= ids
        for bay in run.bays:
            bay.members[:] = [m for m in bay.members if m not in ids]
        self.add(Part(f"{run.id}-PLINTH-{face}", f"Soklová lišta {face}", "Plinth", [tuple(b) for b in merged],
                      props={**kick[0].props}), *bays)

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
        tb = p["BottomThickness"] or t
        if _prop(run.element, PSET_RUN, "LedPanels"):
            self._led_bottom(bay, p, lo, hi, c_in0, c_in1, z0, tb)
        else:
            self.add(Part(f"{bay.id}-BOTTOM", "Dno", "Bottom", [(lo, hi, c_in0, c_in1, z0, z0 + tb)],
                          props={"Thickness": round(tb / 1000.0, 6)} if tb != t else {}), bay)
        if not shared_back:
            c0, c1 = self.c_range(bay, back_y, bay.depth)
            self.add(Part(f"{bay.id}-BACK", "Záda", "Back", [(lo, hi, c0, c1, z0 + tb, z1)]), bay)
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
        ceiling = None if hob is None else hob.underside - hob.min_drawer_gap
        subs = self._sections(bay, p, z0, z1, back_y)
        for sub in subs or [bay]:
            self._fronts(sub, p, z0, z1, back_y, ceiling)

    def _led_continuous(self) -> bool:
        return bool(_prop(self.run.element, PSET_RUN, "LedPanels")) and bool(
            _prop(self.run.element, PSET_RUN, "LedContinuous"))

    def _led_bottom(self, bay: Bay, p: dict, lo: float, hi: float, c_in0: float, c_in1: float, z0: float, tb: float):
        """A cabinet bottom with LED panel fields routed into its underside
        (``Pset_KitchenRun.LedPanels``; Petr, 2026-11-22 a: "I want the
        underside of the cabinet to be a full led panel, with some
        reasonable padding"). One field per section (``Pset_Fronts.Sections``),
        ``LedPadding`` from the board's edges and from the section dividers,
        so each divider stands on solid board. Parts: the bottom (web over
        the pocket, the frame round the rebate, the ledge), per field the
        aluminium plate and the LED sheet pieces. The diffuser is the light
        fixture's (``Pset_YamlIfc.PanelRun`` in the room's electrical YAML)."""
        t = p["BoardThickness"]
        owners = [bay]
        bottom_id = f"{bay.id}-BOTTOM"
        if self._led_continuous():
            # Petr, 2026-11-22 a: "cant we make it a single panel even
            # accross where the cabinets meet?" One bottom board under the
            # whole run (between the end sides; the dividers stand on it) and
            # one field across it, sections ignored.
            if self.run.led_fields:
                return  # made with the run's first bay
            owners = list(self.run.bays)
            lo, hi = min(b.clear_lo for b in owners), max(b.clear_hi for b in owners)
            bottom_id = f"{self.run.id}-BOTTOM"
        pad, play, ledge = p["LedPadding"], p["LedRebatePlay"], p["LedLedge"]
        dt, gap, mt, pt = p["LedDiffuserThickness"], p["LedAirGap"], p["LedModuleThickness"], p["LedPlateThickness"]
        z_reb = z0 + dt
        z_pocket = z_reb + gap + mt + pt
        if z0 + tb - z_pocket < p["LedMinWeb"] - TOL:
            raise ValueError(f"{bay.id}: LED pocket {z_pocket - z0:.0f} deep leaves under {p['LedMinWeb']:.0f} "
                             f"of the {tb:.0f} bottom")
        # Section edges (the dividers stand on the bottom).
        spans = [(lo, hi)]
        widths = None if self._led_continuous() else section_widths(bay.element, bay.width)
        if widths is not None:
            if not bay.front_low:
                widths = widths[::-1]
            edges = [bay.a0]
            for w in widths:
                edges.append(edges[-1] + w)
            inner = edges[1:-1]
            cuts = [lo] + [x for e in inner for x in (e - t / 2, e + t / 2)] + [hi]
            spans = list(zip(cuts[0::2], cuts[1::2]))
        rebates, pockets = [], []
        for k, (s0, s1) in enumerate(spans, start=1):
            r = (s0 + pad, s1 - pad, c_in0 + pad, c_in1 - pad)
            if r[1] - r[0] < 100 or r[3] - r[2] < 100:
                raise ValueError(f"{bay.id}: LED field {k} under 100 mm")
            d = (r[0] + play, r[1] - play, r[2] + play, r[3] - play)
            pk = (r[0] + ledge, r[1] - ledge, r[2] + ledge, r[3] - ledge)
            pl = (pk[0] + p["LedPlatePlay"], pk[1] - p["LedPlatePlay"], pk[2] + p["LedPlatePlay"], pk[3] - p["LedPlatePlay"])
            # LED sheet: long side of the module along the run, cut pieces
            # at the far end and the back; centred on the plate.
            along = _cuts(pl[1] - pl[0], p["LedModuleLength"], p["LedMinCut"])
            across = _cuts(pl[3] - pl[2], p["LedModuleWidth"], p["LedMinCut"])
            a_start = (pl[0] + pl[1]) / 2 - sum(along) / 2
            c_start = (pl[2] + pl[3]) / 2 - sum(across) / 2
            z_led0 = z_reb + gap
            modules = []
            ca = a_start
            for la in along:
                cc = c_start
                for lc in across:
                    modules.append((ca, ca + la, cc, cc + lc, z_led0, z_led0 + mt))
                    cc += lc
                ca += la
            # Aluminium plates in practical lengths, butted where two
            # module columns meet (so no LED piece crosses a plate joint).
            plates = []
            start = pl[0]
            cursor = a_start
            for la in along:
                if cursor + la - start > p["LedPlateMaxLength"] + TOL and cursor > start + TOL:
                    plates.append((start, cursor))
                    start = cursor
                cursor += la
            plates.append((start, pl[1]))
            back_c = pk[3] if bay.front_low else pk[2]
            inward = -1.0 if bay.front_low else 1.0
            hole = ((pk[0] + pk[1]) / 2, back_c + inward * (p["LedCableHole"] / 2 + 10.0))
            zp0, zp1 = z_led0 + mt, z_led0 + mt + pt
            f = LedField(owners[0].id if len(owners) == 1 else self.run.id, k, (*r, z0, z_reb), (*d, z0, z0 + dt),
                         (*pk, z_reb, z_pocket), (*pl, zp0, zp1), modules, hole,
                         [(a0_, a1_, pl[2], pl[3], zp0, zp1) for a0_, a1_ in plates])
            self.run.led_fields.append(f)
            rebates.append(r)
            pockets.append(pk)
            tag = f"{f.bay_id}-LED{k}"
            self.add(Part(f"{tag}-PLATE", f"Hliníková deska LED {k}", "LedPlate", f.plates, label="appliance",
                          props={"Kind": "LedBackingPlate",
                                 "Pieces": ", ".join(f"{b[1] - b[0]:.0f} x {b[3] - b[2]:.0f} x {pt:.0f}" for b in f.plates)}),
                     *owners)
            self.add(Part(f"{tag}-SHEET", f"LED panel {k}", "LedModule", modules, label="appliance",
                          props={"Kind": "LedSheet", "Pieces": ", ".join(f"{m[1] - m[0]:.0f} x {m[3] - m[2]:.0f}" for m in modules),
                                 "ModuleSize": f"{p['LedModuleWidth']:.0f} x {p['LedModuleLength']:.0f} (guess:)"}), *owners)
        board = (lo, hi, c_in0, c_in1)
        boxes = [(lo, hi, c_in0, c_in1, z_pocket, z0 + tb)]  # the web over the pockets
        boxes += _ring(board, rebates, z0, z_pocket)  # the frame round the rebates
        for r, pk in zip(rebates, pockets):
            boxes += _ring(r, [pk], z_reb, z_pocket)  # the ledge the diffuser sits on
        self.add(Part(bottom_id, "Dno s frézovanou kapsou pro LED panel", "Bottom", boxes,
                      props={"Thickness": round(tb / 1000.0, 6), "LedFields": len(rebates),
                             "RebateDepth": round(dt / 1000.0, 6), "PocketDepth": round((z_pocket - z0) / 1000.0, 6)}), *owners)

    def _sections(self, bay: Bay, p: dict, z0: float, z1: float, back_y: float) -> list | None:
        """A wide bay split into side-by-side sections (``Pset_Fronts.Sections``):
        an 18 mm divider between two sections, each section its own fronts
        (``Layout<N>`` or the shared ``Layout``). The sections are bays of
        their own for the fronts only (``<bay>-S<N>``); every part they make
        joins the bay's group. None when the bay has no sections."""
        widths = section_widths(bay.element, bay.width)
        if widths is None:
            return None
        t, tf = p["BoardThickness"], p["FrontThickness"]
        tb = p["BottomThickness"] or t
        # Left to right as you face the front: low a first when the front is the c0 face.
        if not bay.front_low:
            widths = widths[::-1]
        order = list(range(1, len(widths) + 1))
        if not bay.front_low:
            order = order[::-1]
        edges = [bay.a0]
        for w in widths:
            edges.append(edges[-1] + w)
        dc0, dc1 = self.c_range(bay, tf, back_y)
        subs = []
        for k, (number, a0, a1) in enumerate(zip(order, edges, edges[1:])):
            first, last = k == 0, k == len(widths) - 1
            if not last:
                self.add(Part(f"{bay.id}-SDIV{k + 1}", f"Přepážka sekcí {k + 1}", "Divider",
                              [(a1 - t / 2, a1 + t / 2, dc0, dc1, z0 + tb, z1 - t)]), bay)
            sub = replace(bay, id=f"{bay.id}-S{number}", element=section_element(bay.element, number),
                          a0=a0, a1=a1, clear_lo=bay.clear_lo if first else a0 + t / 2,
                          clear_hi=bay.clear_hi if last else a1 - t / 2, zones=[])
            sub.members = bay.members  # the section's parts are the bay's
            subs.append(sub)
        subs.sort(key=lambda b: b.id)
        return subs

    # --- fronts and interiors (Pset_Fronts) ---------------------------------

    def _fronts(self, bay: Bay, p: dict, z0: float, z1: float, back_y: float, ceiling: float | None):
        """Every front, drawer, door, shelf and niche of one bay, from its
        zones (``Pset_Fronts.Layout``, see ``zones``) and the parameters.

        Nothing here is a typed-in coordinate: each piece comes from the bay's
        clear opening (dividers), its carcass height and the zone heights.
        """
        t, tf = p["BoardThickness"], p["FrontThickness"]
        g = p["FrontGap"] / 2.0
        bay.zones = zones(bay.element, z1 - z0, t, z0)
        fc0, fc1 = self.c_range(bay, 0.0, tf)
        out = -1.0 if bay.front_low else 1.0
        single = len(bay.zones) == 1
        drawer_no = 0
        leaf_no = 0
        front_no = 0
        lo, hi = bay.clear_lo, bay.clear_hi
        for i, zone in enumerate(bay.zones):
            below = bay.zones[i + 1] if i + 1 < len(bay.zones) else None
            top_zone = i == 0
            # A fixed board between two bands, except between drawers.
            board_below = below is not None and not (zone.kind in DRAWER_KINDS and below.kind in DRAWER_KINDS)
            if board_below:
                bc0, bc1 = self.c_range(bay, tf, back_y)
                self.add(Part(f"{bay.id}-BOARD{zone.index}", f"Mezidno {zone.index}", "Board",
                              [(lo, hi, bc0, bc1, zone.slot_z0, zone.slot_z0 + t)],
                              props={"Zone": zone.index}), bay)
            # Clear interior of the band: above the board under it (or the
            # carcass bottom), below the board over it (or the top/rails).
            # The lowest band stands on the carcass bottom (``BottomThickness``).
            in_z0 = zone.slot_z0 + ((p["BottomThickness"] or t) if below is None else t)
            in_z1 = zone.slot_z1 - (t if top_zone else 0.0)
            front_box = (bay.a0 + g, bay.a1 - g, fc0, fc1, zone.slot_z0 + g, zone.slot_z1 - g)
            base = {"Zone": zone.index, "Kind": zone.kind, "NominalHeight": round(zone.nominal / 1000.0, 6),
                    "Contents": zone.content or None}
            if zone.kind in DRAWER_KINDS:
                drawer_no += 1
                dr = _drawer(bay, p, zone, drawer_no, back_y, ceiling, self._obstacle_ceiling(bay, p),
                             carcass_z0=z0, top_limit=(z1 - t) if top_zone else None,
                             on_board=board_below)
                name = ("Výsuv" if zone.kind == "pullout" else "Šuplík") + f" {drawer_no} {dr.content}"
                system = drawer_system(bay.element)
                props = dict(base, System=("Blum MERIVOBOX" if system == "MERIVOBOX" else "MAXIMERA-like"),
                             NominalLength=(round(merivobox_nl(p, back_y - tf) / 1000.0, 6) if system == "MERIVOBOX" else None),
                             Extension=round(dr.extension / 1000.0, 6),
                             BoxWidth=round((dr.box[1] - dr.box[0]) / 1000.0, 6),
                             BoxDepth=round(abs(dr.box[3] - dr.box[2]) / 1000.0, 6),
                             BoxHeight=round((dr.box[5] - dr.box[4]) / 1000.0, 6),
                             Trimmed=round(dr.trimmed / 1000.0, 6) if dr.trimmed else None,
                             Items=(len(dr.items) if dr.grid is None else None) or None,
                             ItemKind=zone.opts.get("items"),
                             InsideWidth=round(dr.inside[0] / 1000.0, 6),
                             InsideDepth=round(dr.inside[1] / 1000.0, 6),
                             InsideHeight=round(dr.inside[2] / 1000.0, 6),
                             Gridfinity=f"{dr.grid[0]}x{dr.grid[1]}" if dr.grid else None,
                             GridfinitySlackWidth=round(gridfinity_cells(p, dr.inside[0])[1] / 1000.0, 6) if dr.grid else None,
                             GridfinitySlackDepth=round(gridfinity_cells(p, dr.inside[1])[1] / 1000.0, 6) if dr.grid else None)
                if dr.grid:
                    sw = gridfinity_cells(p, dr.inside[0])[1]
                    sd = gridfinity_cells(p, dr.inside[1])[1]
                    if abs(sw) > TOL or abs(sd) > TOL:
                        self.run.notes.append(f"open: {bay.id}-D{drawer_no} inside {dr.inside[0]:g} x {dr.inside[1]:g} is "
                                              f"{sw:+g} / {sd:+g} off the Gridfinity {dr.grid[0]}x{dr.grid[1]} size "
                                              f"(scripts/gridfinity_fit.py)")
                inner = [x for x in str(zone.opts.get("inner", "")).split(",") if x.strip()]
                boxes = drawer_boxes(dr, p)
                inner_boxes = inner_drawers(p, dr, in_z1, inner) if inner else []
                latch = str(zone.opts.get("latch", "top")) if inner else None
                if inner:
                    props.update(InnerDrawers=",".join(x.strip().upper() for x in inner), InnerSystem="Blum MERIVOBOX",
                                 Latch="Blum ZI7.0M07" if latch == "top" else None,
                                 OuterBoxSide=round((dr.box[5] - dr.box[4]) / 1000.0, 6))
                if latch == "top":
                    # Blum ZI7.0M07: its housing is drilled into the back of
                    # the front (rides with the front); the driver clips on the
                    # top inner drawer (rides with that drawer, below).
                    boxes += latch_boxes(p, dr, inner_boxes[0])[:1]
                grips, edge = self._grips(bay, p, zone, "Drawer" if zone.kind == "drawer" else "PullOut", dr.front)
                if edge:
                    props.update(Grip=f"J {edge}")
                outer = self.add(Part(f"{bay.id}-D{drawer_no}", name.strip(), "Drawer" if zone.kind == "drawer" else "PullOut",
                                      boxes, drawer=dr, props=props, grips=grips), bay)
                # Inner drawers (2026-11-20 c): each its own part and motion,
                # opening only with the front open (``Parent``); the coupled
                # top one (ZI7.0M07) opens with the front, the front closing
                # closes them all (viewer: doors.js).
                for k, ib in enumerate(inner_boxes, start=1):
                    coupled = k == 1 and latch == "top"
                    ifloor = ib[4] + p["BoxBottomThickness"]
                    iboxes = inner_drawer_boxes(p, ib, dr.out)
                    igrid, iplate = None, []
                    if dr.grid:
                        ic0, ic1 = ib[2] + p["BoxWall"], ib[3] - p["BoxWall"]
                        igrid = dr.grid
                        iplate = gridfinity_baseplate(p, igrid[0], igrid[1], (ib[0] + ib[1]) / 2.0, (ic0 + ic1) / 2.0, ifloor)
                    if coupled:
                        iboxes += latch_boxes(p, dr, ib)[1:]
                    idr = replace(dr, front=iboxes[0], box=ib, items=list(iplate), baseplate=list(iplate),
                                  grid=igrid, floor_z=ifloor,
                                  inside=(dr.inside[0], dr.inside[1], ib[5] - ifloor))
                    self.add(Part(f"{bay.id}-D{drawer_no}-I{k}", f"Vnitřní šuplík {k}", "InnerDrawer",
                                  iboxes + iplate, drawer=idr,
                                  props={"Zone": zone.index, "Kind": "inner", "System": "Blum MERIVOBOX",
                                         "SideHeight": round((ib[5] - ib[4]) / 1000.0, 6), "Latched": coupled,
                                         "Latch": "Blum ZI7.0M07" if coupled else None, "Parent": outer.id,
                                         "Gridfinity": f"{igrid[0]}x{igrid[1]}" if igrid else None}), bay)
            elif zone.kind in ("door", "doors"):
                leaves = _leaves(bay, p, zone, front_box)
                for hinge, a0, a1 in leaves["doors"]:
                    leaf_no += 1
                    hinge_a = _hinge_a(bay, hinge, a0, a1)
                    face_c = fc0 if bay.front_low else fc1
                    boxes = [(a0, a1, fc0, fc1, front_box[4], front_box[5])]
                    racks = int(zone.opts.get("racks", 0))
                    boxes += _racks(bay, p, (a0, a1), front_box, racks)
                    leaf = Leaf(zone.index, hinge, hinge_a, face_c, out)
                    grips, edge = self._grips(bay, p, zone, "Door", boxes[0], hinge_a)
                    self.add(Part(f"{bay.id}-DOOR{leaf_no}", f"Dvířka {leaf_no} ({hinge})", "Door", boxes, door=leaf,
                                  grips=grips,
                                  props=dict(base, Hinge=hinge, Racks=racks or None, Grip=f"J {edge}" if edge else None,
                                             LeafWidth=round((a1 - a0) / 1000.0, 6),
                                             LeafHeight=round((front_box[5] - front_box[4]) / 1000.0, 6))), bay)
                for a0, a1 in leaves["fillers"]:
                    self.add(Part(f"{bay.id}-FILLER{zone.index}", "Lišta", "Filler",
                                  [(a0, a1, fc0, fc1, front_box[4], front_box[5])], props={"Zone": zone.index}), bay)
                self._shelves(bay, p, zone, in_z0, in_z1, back_y, racks=int(zone.opts.get("racks", 0)))
            elif zone.kind == "lift":
                # The lowest front of a wall cabinet hangs ``WallFrontOverhang``
                # below the carcass bottom (and closes the half gap under it).
                drop = (g + p["WallFrontOverhang"]) if (below is None and p["WallFrontOverhang"] > 0) else 0.0
                mechs = self._lift(bay, p, zone, front_box, in_z1, back_y, base, drop=drop)
                lift_p = dict(p, ShelfSetback=max(p["ShelfSetback"], LIFT_HF_SHELF_SETBACK))
                self._shelves(bay, lift_p, zone, in_z0, in_z1, back_y, avoid=mechs)
            elif zone.kind == "niche":
                n0, n1 = lo, hi
                clear = zone.opts.get("clear")
                if clear is not None:
                    # Packers on both sides narrow the opening to the maker's
                    # niche width (a monoblock 600 bay is 582 clear).
                    pad = (hi - lo - float(clear) * 1000.0) / 2.0
                    if pad < -TOL:
                        raise ValueError(f"{bay.id}: niche clear {clear} wider than the opening {hi - lo:.0f}")
                    if pad > TOL:
                        pc0, pc1 = self.c_range(bay, tf, back_y)
                        for side, (x0, x1) in (("L", (lo, lo + pad)), ("R", (hi - pad, hi))):
                            self.add(Part(f"{bay.id}-PACK{zone.index}{side}", "Lišta niky", "Packer",
                                          [(x0, x1, pc0, pc1, in_z0, in_z1)],
                                          props={"Zone": zone.index, "Thickness": round(pad / 1000.0, 6)}), bay)
                        n0, n1 = lo + pad, hi - pad
                zone.niche = (n0, n1, *self.c_range(bay, 0.0, back_y), in_z0, in_z1)
            elif zone.kind == "dock":
                self._dock(bay, p, zone, front_box, back_y, z0)
            elif zone.kind == "front":
                front_no += 1
                fid = f"{bay.id}-FRONT" if single else f"{bay.id}-FRONT{zone.index}"
                self.add(Part(fid, "Dvířka", "Front", [front_box], props=base), bay)
                if zone.opts.get("shelves"):
                    self._shelves(bay, p, zone, in_z0, in_z1, back_y)
            # "none": an open band, nothing in front.

    def _dock(self, bay: Bay, p: dict, zone: Zone, front_box: tuple, back_y: float, z0: float):
        """A ``dock`` band at the bottom of a bay: an opening from the floor
        for a floor-standing appliance (a robot-vacuum station), ``width=``
        (metres) on the ``side=L|R|C`` (as you face it, default L; C centred
        on the bay's front) of the band. The kickboard and the carcass bottom
        (and back) are cut away over the opening; side boards close it off
        from the dead space beside it. The dead space is behind a fixed
        panel, or with ``front=notch`` behind the drawer front above, carried
        down to the kickboard either side of the opening (one notched front;
        Petr, 2026-11-20 c). The board over the band (``board_below`` of the
        band above) is the opening's top."""
        t, tf = p["BoardThickness"], p["FrontThickness"]
        g = p["FrontGap"] / 2.0
        if zone.slot_z0 > z0 + TOL:
            raise ValueError(f"{bay.id}: a dock band must be the lowest band")
        width = float(zone.opts.get("width", 0)) * 1000.0
        side = str(zone.opts.get("side", "L")).upper()
        lo, hi = bay.clear_lo, bay.clear_hi
        if width <= 0 or width > hi - lo - t + TOL:
            raise ValueError(f"{bay.id}: dock width {width:.0f} does not fit the {hi - lo:.0f} opening")
        dc0, dc1 = self.c_range(bay, tf, back_y)
        fc0, fc1 = self.c_range(bay, 0.0, tf)
        if side == "C":
            am = (bay.a0 + bay.a1) / 2.0
            o0, o1 = am - width / 2.0, am + width / 2.0
            if o0 < lo + t - TOL or o1 > hi - t + TOL:
                raise ValueError(f"{bay.id}: a centred {width:.0f} dock leaves no room for its side boards")
            sides = [(o0 - t, o0), (o1, o1 + t)]
            dead = [(bay.a0 + g, o0), (o1, bay.a1 - g)]
        else:
            # Left as you face it: low a when the front is the c0 face.
            at_lo = (side == "L") == bay.front_low
            o0, o1 = (lo, lo + width) if at_lo else (hi - width, hi)
            sides = [(o1, o1 + t)] if at_lo else [(o0 - t, o0)]
            dead = [(o1 + g, bay.a1 - g)] if at_lo else [(bay.a0 + g, o0 - g)]
        floor = self.run.bays[0].z_base
        oc0, oc1 = self.c_range(bay, 0.0, back_y)
        zone.dock = (o0, o1, oc0, oc1, floor, zone.slot_z1)
        for k, (s0, s1) in enumerate(sides, start=1):
            sid = f"{bay.id}-DOCKSIDE" if len(sides) == 1 else f"{bay.id}-DOCKSIDE{k}"
            self.add(Part(sid, "Bok niky stanice", "Board", [(s0, s1, dc0, dc1, z0 + t, zone.slot_z1)],
                         props={"Zone": zone.index}), bay)
        if str(zone.opts.get("front", "panel")) == "notch":
            # The drawer front over the band runs down either side of the
            # opening to the kickboard: one front with a notch.
            above = next((q for q in self.run.parts if q.drawer is not None and q.role in ("Drawer", "PullOut")
                          and q.id in bay.members and q.props.get("Zone") == zone.index - 1), None)
            if above is None:
                raise ValueError(f"{bay.id}: front=notch needs a drawer in the band above the dock")
            legs = [(f0, f1, fc0, fc1, front_box[4], above.drawer.front[4]) for f0, f1 in dead if f1 - f0 > TOL]
            above.boxes[1:1] = legs
            above.props.update(FrontNotch=round((o1 - o0) / 1000.0, 6),
                               FrontNotchHeight=round((above.drawer.front[4] - front_box[4]) / 1000.0, 6),
                               FrontBottom=round(front_box[4] / 1000.0, 6))
        else:
            for k, (f0, f1) in enumerate(dead, start=1):
                did = f"{bay.id}-DEAD" if len(dead) == 1 else f"{bay.id}-DEAD{k}"
                self.add(Part(did, "Pevný panel (mrtvý prostor)", "Front",
                              [(f0, f1, fc0, fc1, front_box[4], front_box[5])],
                              props={"Zone": zone.index, "Kind": "dead space", "Fixed": True}), bay)
        # Cut the opening out of the kickboard, the carcass bottom and back.
        for part in self.run.parts:
            if part.role not in ("Plinth", "Bottom", "Back") or part.id not in bay.members:
                continue
            kept = []
            for b in part.boxes:
                if b[0] < o1 - TOL and b[1] > o0 + TOL and (part.role != "Back" or b[4] < zone.slot_z1):
                    if b[0] < o0 - TOL:
                        kept.append((b[0], o0, *b[2:]))
                    if b[1] > o1 + TOL:
                        kept.append((o1, b[1], *b[2:]))
                    if part.role == "Back" and b[5] > zone.slot_z1 + TOL:
                        kept.append((max(b[0], o0), min(b[1], o1), b[2], b[3], zone.slot_z1, b[5]))
                else:
                    kept.append(b)
            part.boxes[:] = kept
            part.props["DockOpening"] = round((o1 - o0) / 1000.0, 6)
        bay.docks.append((bay.id, zone.index, zone.dock))
        self.run.docks.append((bay, zone))

    def _dock_appliances(self, bays):
        """Floor appliances in a ``dock`` band (``Pset_BuiltIn.Kind: Dock``,
        ``Bay`` the section id, ``Zone``): standing on the floor in the
        opening, centred across it, front on the fronts' plane. Its height
        plus ``DockClearance`` must fit under the board over the opening,
        its width plus twice that inside the opening."""
        p = self.p
        for bay, zone in self.run.docks:
            for ext in self.builtins:
                if str(_prop(ext, PSET_BUILTIN, "Kind", "")) != "Dock" or str(_prop(ext, PSET_BUILTIN, "Bay", "")) != bay.id:
                    continue
                if int(_prop(ext, PSET_BUILTIN, "Zone", zone.index)) != zone.index:
                    continue
                w, d, h = (float(_prop(ext, PSET_BUILTIN, k)) * 1000.0 for k in ("Width", "Depth", "Height"))
                o0, o1, _c0, _c1, floor, top = zone.dock
                clear = p["DockClearance"]
                if h + clear > top - floor + TOL:
                    raise ValueError(f"{ext['id']}: {h:.0f} + {clear:.0f} over the station needs {h + clear:.0f}, "
                                     f"the dock opening is {top - floor:.0f}")
                if w + 2 * clear > o1 - o0 + TOL:
                    raise ValueError(f"{ext['id']}: {w:.0f} wide needs {w + 2 * clear:.0f}, the opening is {o1 - o0:.0f}")
                am = (o0 + o1) / 2.0
                b0, b1 = self.c_range(bay, 0.0, d)
                body = (am - w / 2.0, am + w / 2.0, b0, b1, floor, floor + h)
                self._builtin_part(ext, bay, [body], props={
                    "Bay": bay.id, "Zone": zone.index, "DockClearWidth": round((o1 - o0) / 1000.0, 6),
                    "DockClearHeight": round((top - floor) / 1000.0, 6),
                    "ClearanceAbove": round((top - floor - h) / 1000.0, 6)})

    def _grips(self, bay: Bay, p: dict, zone: Zone, role: str, box: tuple, hinge_a: float | None = None):
        """The routed J grip of one front (``Pset_KitchenRun.FrontGrip: J``):
        (cut boxes, edge). Edge per front from the band's ``grip=`` option
        (top | bottom | side | none), else ``_grip_edge``."""
        if str(_prop(self.run.element, PSET_RUN, "FrontGrip") or "").upper() != "J":
            return [], None
        edge = _grip_edge(zone, role, box)
        if edge in (None, "none"):
            return [], None
        gh, gd, lip, u, e = p["JGripHeight"], p["JGripDepth"], p["JGripLip"], p["JGripUndercut"], 1.0
        if not (0.0 < lip < gd < p["FrontThickness"]):
            raise ValueError(f"{bay.id}: J grip needs 0 < JGripLip < JGripDepth < FrontThickness")
        a0, a1, c0, c1, z0, z1 = box
        cc = (c0 - e, c0 + gd) if bay.front_low else (c1 - gd, c1 + e)  # the band, from the face
        hc = (c0 + lip, c0 + gd) if bay.front_low else (c1 - gd, c1 - lip)  # the hook, behind the lip
        if edge == "top":
            cuts = [(a0 - e, a1 + e, *cc, z1 - gh, z1 + e), (a0 - e, a1 + e, *hc, z1 - gh - u, z1 - gh + e)]
        elif edge == "bottom":
            cuts = [(a0 - e, a1 + e, *cc, z0 - e, z0 + gh), (a0 - e, a1 + e, *hc, z0 + gh - e, z0 + gh + u)]
        elif edge == "side":
            if hinge_a is None:
                raise ValueError(f"{bay.id}: grip=side needs a hinged door")
            latch_low = abs(hinge_a - a1) < abs(hinge_a - a0)  # the edge away from the hinge
            if latch_low:
                cuts = [(a0 - e, a0 + gh, *cc, z0 - e, z1 + e), (a0 + gh - e, a0 + gh + u, *hc, z0 - e, z1 + e)]
            else:
                cuts = [(a1 - gh, a1 + e, *cc, z0 - e, z1 + e), (a1 - gh - u, a1 - gh + e, *hc, z0 - e, z1 + e)]
        else:
            raise ValueError(f"{bay.id}: grip={edge!r}, one of top, bottom, side, none")
        return cuts, edge

    def _lift(self, bay: Bay, p: dict, zone: Zone, front_box: tuple, in_z1: float, back_y: float,
              base: dict, drop: float = 0.0) -> list:
        """A Blum AVENTOS lift-up front (``lift`` band), its two lift
        mechanisms and the space it needs open (``run.clearances``).

        The band must be inside the fitting's Blum ranges (``AVENTOS``):
        cabinet height KH (the band), width KB (the bay), internal depth LT
        and the power factor LF = KH x front weight. The export stops if not,
        unless the bay's ``Pset_Fronts.BlumRangeOverride`` says why it may
        (a quote with its source); then each breach is kept on the front's
        properties (``OutsideBlumRange``) and in ``run.notes``.
        Returns the mechanism boxes so the shelves can keep clear of them.
        """
        fit = str(zone.opts.get("fitting", "HK"))
        if fit not in AVENTOS:
            raise ValueError(f"{bay.id}: lift fitting={fit!r}, one of {sorted(AVENTOS)}")
        spec = AVENTOS[fit]
        override = _prop(bay.element, PSET_FRONTS, "BlumRangeOverride")
        breaches = []
        t, tf = p["BoardThickness"], p["FrontThickness"]
        kh, kb, lt = zone.nominal, bay.width, back_y - tf
        lo_kh, hi_kh = spec["kh"]
        if not (lo_kh - TOL <= kh <= hi_kh + TOL):
            breaches.append(f"{spec['name']} takes a cabinet height of {lo_kh:.0f}–{hi_kh:.0f} mm, this one is {kh:.0f}")
        if kb > spec["kb"] + TOL:
            breaches.append(f"{spec['name']} takes a cabinet width up to {spec['kb']:.0f}, this one is {kb:.0f}")
        if spec["lt"] is not None and lt < spec["lt"] - TOL:
            breaches.append(f"{spec['name']} needs {spec['lt']:.0f} internal depth, this one has {lt:.0f}")
        a0, a1, fc0, fc1, z0, z1 = front_box
        fb, fh = a1 - a0, z1 - z0
        density = float(zone.opts.get("density", LIFT_FRONT_DENSITY))
        if spec["fronts"] == 2:
            gap = p["FrontGap"]
            upper = zone.opts.get("upper")
            fho = (fh - gap) / 2.0 if upper is None else float(upper) * 1000.0
            fhu = fh - gap - fho
            if fhu > fho + TOL:
                raise ValueError(f"{bay.id}: Blum HF: the taller front must be at the top")
            fronts = [("1", "Horní klapka", (z1 - fho, z1)), ("2", "Dolní klapka", (z0, z0 + fhu))]
        else:
            fho = fh
            fronts = [("", "Výklopná dvířka", (z0, z1))]
        if drop:
            # ``WallFrontOverhang``: the lowest front reaches below the carcass.
            tag_, label_, (zz0_, zz1_) = fronts[-1]
            fronts[-1] = (tag_, label_, (zz0_ - drop, zz1_))
        fg = sum((zz1 - zz0) * fb * tf for _n, _l, (zz0, zz1) in fronts) * 1e-9 * density
        lf = kh * fg
        if spec["lf"] is not None and not (spec["lf"][0] <= lf <= spec["lf"][1]):
            breaches.append(f"{spec['name']} power factor {lf:.0f} outside {spec['lf'][0]:.0f}–{spec['lf'][1]:.0f}")
        if spec["fg"] is not None and fg > spec["fg"] + 1e-6:
            breaches.append(f"{spec['name']} front weight {fg:.1f} kg over {spec['fg']} kg")
        if breaches and not override:
            raise ValueError(f"{bay.id}: {breaches[0]}")
        # Opening angle: ``angle=`` in the band, one of the fitting's stop
        # settings; else its largest.
        angle = zone.opts.get("angle")
        if angle is None:
            angle = LIFT_OPEN_DEG[fit]
        else:
            angle = float(angle)
            stops = spec.get("stops")
            if not stops or not any(abs(angle - a) < 1e-6 for a in stops):
                raise ValueError(f"{bay.id}: {spec['name']} angle={angle:g}, the opening-angle stops are "
                                 f"{', '.join(f'{a:g}' for a in stops) if stops else 'not modelled'}")
        # Space the open front needs (Blum planning pages, at the largest
        # opening angle): Y above the cabinet top, X out in front of it.
        # HF: replaced below by the swept four-bar at ``angle``.
        if fit == "HF":
            above = fho * 0.44 + 38.0  # 116°
            ahead = fho * 0.9 + tf * 1.5 + 35.0
        elif fit == "HK":
            above = fh * 0.29 + tf - t  # max angle, Y = FH x 0.29 + FD - SOB
            ahead = fh + tf  # guess: the front tilts out about its top edge
        else:
            above, ahead = fh, fh + tf  # guess: Blum's tables not read for this type
        out = -1.0 if bay.front_low else 1.0
        face = fc0 if bay.front_low else fc1
        cc0, cc1 = sorted((face, face + out * ahead))
        top = zone.slot_z1
        self.run.clearances.append((bay.id, (bay.a0, bay.a1, cc0, cc1, top, top + above)))
        props = dict(base, Fitting=spec["name"], FittingCode=fit, CabinetHeight=round(kh / 1000.0, 6),
                     FrontWeight=round(fg, 2), PowerFactor=round(lf), OpenAbove=round(above / 1000.0, 6),
                     OpenAhead=round(ahead / 1000.0, 6))
        if override:
            props.update(BlumRangeOverride=str(override))
        if breaches:
            props.update(OutsideBlumRange="; ".join(breaches))
            self.run.notes.append(f"{bay.id}: outside Blum's range, kept by override ({override}): {'; '.join(breaches)}")
        for tag, label, (zz0, zz1) in fronts:
            self.add(Part(f"{bay.id}-LIFT{tag}", label, "Lift", [(a0, a1, fc0, fc1, zz0, zz1)],
                          props=dict(props, LeafWidth=round(fb / 1000.0, 6), LeafHeight=round((zz1 - zz0) / 1000.0, 6))),
                     bay)
        mw, md, mh = spec["mech"]
        mc0, mc1 = self.c_range(bay, tf, tf + md)
        boxes = []
        for side, (x0, x1) in (("L", (bay.clear_lo, bay.clear_lo + mw)), ("R", (bay.clear_hi - mw, bay.clear_hi))):
            box = (x0, x1, mc0, mc1, in_z1 - mh, in_z1)
            boxes.append(box)
            self.add(Part(f"{bay.id}-LIFTMECH-{side}", f"Zdvihací mechanismus {fit}", "LiftMechanism", [box],
                          props={"Zone": zone.index, "Fitting": spec["name"], "FittingCode": fit}), bay)
        arms, env = self._lift_motion(bay, fit, fronts, front_box, out, boxes, in_z1 - mh, zone, spec, angle)
        boxes += arms
        if env is not None:
            # The space the swept fronts need, from the four-bar (the top
            # hinge is at the front's top edge, ``top`` the carcass top).
            max_u, max_z = env
            k, c = spec["stops"][min(spec["stops"], key=lambda a: abs(a - angle))]
            # Above: the larger of the swept fronts and Blum's Y for the stop.
            above = max(0.0, z1 + max_z - top, fho * k + c)
            ahead = max_u - tf
            cc0, cc1 = sorted((face, face + out * ahead))
            self.run.clearances[-1] = (bay.id, (bay.a0, bay.a1, cc0, cc1, top, top + above))
            for tag, _l, _z in fronts:
                self.run.part(f"{bay.id}-LIFT{tag}").props.update(
                    OpenAbove=round(above / 1000.0, 6), OpenAhead=round(ahead / 1000.0, 6),
                    BlumOpenAbove=round((fho * k + c) / 1000.0, 6))
        for tag, _l, _z in fronts:
            self.run.part(f"{bay.id}-LIFT{tag}").props.update(OpeningAngle=angle)
        self.run.notes.append(
            f"{bay.id}: {spec['name']}, KH {kh:.0f}, front(s) {fb:.0f} wide, {fg:.1f} kg, LF {lf:.0f}, "
            f"opens to {angle:g}°, {above:.0f} above the top and {ahead:.0f} ahead of the face")
        return boxes

    def _lift_motion(self, bay: Bay, fit: str, fronts: list, front_box: tuple, out: float, mechs: list,
                     mech_z0: float, zone: Zone, spec: dict, angle: float) -> tuple:
        """How the lift front moves open, as ``LiftJoint`` s on its parts,
        plus a lever arm on each side. Returns the arm boxes (the shelves
        keep clear of them too) and, for HF, the swept fronts' reach (u out
        of the inner face, z above the top hinge), else None.

        The upper front (or the one front) turns about its top edge on the
        inner face, 0 to ``angle`` (the opening-angle stop).

        HF top (two fronts), after Blum's planning sketches: the lever pivots
        at the mechanism's underside and is fixed to the lower front, which
        hangs from the centre hinge. That is a four-bar (carcass, upper
        front, lower front, lever); for each upper angle the lower front's
        angle is the one that keeps the lever's length. The fixing height is
        solved so that, open, the lower front hangs ``LIFT_HF_LOWER_OPEN_DEG``
        from vertical at the mechanism's full 116° (the lever geometry does
        not change with the stop); a stop ends the same path earlier. Partly
        folded, its bottom edge in reach (Petr,
        2026-11-13). The export stops if the lower front's bottom edge would
        pass into the carcass on the way.

        One front: each arm turns about its pivot in the mechanism and
        telescopes so its tip stays on its fixing on the front. guess: the
        arm is drawn as a straight bar placed by eye.
        """
        a0, a1, fc0, fc1, _z0, z1 = front_box
        inner = fc0 if out > 0 else fc1  # the front's carcass-side face
        top_z = z1
        steps = [k / LIFT_STEPS for k in range(LIFT_STEPS + 1)]
        theta = [math.radians(angle) * t for t in steps]
        group = f"{bay.id}-LIFT"
        aw, ad, drop = LIFT_ARM
        ac0, ac1 = sorted((inner, inner - out * ad))
        arm_c = (ac0 + ac1) / 2.0
        ua = out * (arm_c - inner)  # the arm's line, outward from the inner face (negative: inside)
        if spec["fronts"] == 2:
            (_t1, _l1, (u0, _u1)), (_t2, _l2, (lz0, l1)) = fronts
            cz = (u0 + l1) / 2.0  # centre hinge
            lo, fhu = top_z - cz, cz - lz0
            piv_z = mech_z0
            solved = _hf_fourbar(lo, fhu, ua, piv_z - top_z, theta, fc1 - fc0, math.radians(LIFT_OPEN_DEG["HF"]))
            fix_z = cz - solved["s"]
            upper = LiftJoint(group, 0, None, inner, top_z, out, tuple(theta))
            lower = LiftJoint(group, 1, 0, inner, cz, out, tuple(a - th for a, th in zip(solved["alpha"], theta)))
            self.run.part(f"{bay.id}-LIFT1").lift = upper
            self.run.part(f"{bay.id}-LIFT2").lift = lower
            bu, bz = solved["bottom"]
            props = self.run.part(f"{bay.id}-LIFT2").props
            props.update(OpenBottomEdgeHeight=round((top_z + bz) / 1000.0, 3),
                         OpenBottomEdgeAhead=round((bu - (fc1 - fc0)) / 1000.0, 3),
                         OpenLowerAngle=round(math.degrees(solved["alpha"][-1]), 1))
            self.run.notes.append(
                f"{bay.id}: open at {angle:g}°, the lower front hangs {math.degrees(solved['alpha'][-1]):.0f}° from vertical; "
                f"its bottom edge at {top_z + bz:.0f} above the floor, {bu - (fc1 - fc0):.0f} out from the closed face")
            swing, stretch = solved["lever"], None
            env = solved["reach"]
        else:
            env = None
            self.run.part(f"{bay.id}-LIFT").lift = LiftJoint(group, 0, None, inner, top_z, out, tuple(theta))
            # A bar down the inner face of the front, from inside the
            # mechanism to its fixing, turning about its top end.
            fix_z = max(mech_z0 - drop, fronts[0][2][0] + 20.0)
            piv_z = mech_z0 + 10.0
            if fix_z > mech_z0 - 20.0:
                return [], env  # the front is too short under the mechanism for an arm
            swing, stretch = [], []
            for th in theta:
                du, dz = ua, fix_z - top_z
                # A positive turn takes "down" towards "out": counter-clockwise in (u, z).
                ru = du * math.cos(th) - dz * math.sin(th)
                rz = top_z + du * math.sin(th) + dz * math.cos(th)
                v0 = (0.0, fix_z - piv_z)
                v1 = (ru - ua, rz - piv_z)
                swing.append(math.atan2(v0[0] * v1[1] - v0[1] * v1[0], v0[0] * v1[0] + v0[1] * v1[1]))
                stretch.append(math.hypot(*v1) / math.hypot(*v0))
            stretch = tuple(stretch)
        arms = []
        for side, mech in zip(("L", "R"), mechs):
            mid = (mech[0] + mech[1]) / 2.0
            box = (mid - aw / 2.0, mid + aw / 2.0, ac0, ac1, fix_z, piv_z + 15.0)
            arms.append(box)
            self.add(Part(f"{bay.id}-LIFTARM-{side}", f"Rameno zdvihacího mechanismu {fit}", "LiftArm", [box],
                          props={"Zone": zone.index, "Fitting": spec["name"], "FittingCode": fit},
                          lift=LiftJoint(group, 2, None, arm_c, piv_z, out, tuple(swing), stretch)), bay)
        return arms, env

    def _shelves(self, bay, p, zone, z_lo, z_hi, back_y, racks=0, avoid=()):
        """Loose shelves in a door band: ``shelves=N`` evenly spaced, the
        first one ``first=`` metres above the band's floor if given. A shelf
        that would hit a box in ``avoid`` (a lift mechanism) stops the export."""
        n = int(zone.opts.get("shelves", 0))
        if n <= 0:
            return
        t, tf = p["BoardThickness"], p["FrontThickness"]
        setback = p["ShelfSetback"] + (p["RackDepth"] + p["ShelfSetback"] if racks else 0.0)
        c0, c1 = self.c_range(bay, tf + setback, back_y)
        first = zone.opts.get("first")
        if first is not None:
            z = z_lo + float(first) * 1000.0
            levels = [z] + _even(z + t, z_hi, n - 1, t)
        else:
            levels = _even(z_lo, z_hi, n, t)
        for k, z in enumerate(levels, start=1):
            if z + t > z_hi - TOL or z < z_lo - TOL:
                raise ValueError(f"{bay.id}: shelf {k} of zone {zone.index} does not fit")
            shelf = (bay.clear_lo, bay.clear_hi, c0, c1, z, z + t)
            if any(_boxes_meet(shelf, box) for box in avoid):
                raise ValueError(f"{bay.id}: shelf {k} of zone {zone.index} hits the lift mechanism")
            self.add(Part(f"{bay.id}-SH{zone.index}-{k}", f"Police {k}", "Shelf",
                          [shelf],
                          props={"Zone": zone.index, "Elevation": round(z / 1000.0, 6)}), bay)

    def _obstacle_ceiling(self, bay: Bay, p: dict):
        """Things hanging into the bay from above (a sink bowl, a disposer):
        a drawer box under them stops ``ObstacleClearance`` below the lowest."""
        out = []
        for box, oid in bay.obstacles:
            out.append((box, box[4] - p["ObstacleClearance"], oid))
        return out

    # --- built-in appliances and sink fittings (Pset_BuiltIn) ----------------

    def _builtin_part(self, ext: dict, bay: Bay, boxes: list, shape: str = "box", props: dict | None = None) -> Part:
        label = "sink" if ext["id"] in self.sanitary else "appliance"
        part = Part(ext["id"], ext.get("Name") or ext["id"], "Appliance", boxes, label=label, shape=shape,
                    props=props or {}, builtin=ext)
        self.run.builtins.append(ext["id"])
        return self.add(part, bay)

    def _sink_fittings(self, bays, zt):
        """Disposers hang under a sink's bowl, taps stand behind it (guess:
        positions, sizes from Pset_BuiltIn). A bowl and a disposer are
        obstacles for any drawer box under them."""
        p = self.p
        for sink in self.sinks:
            bay = next((b for b in bays if sink["yaml_id"] in b.external), None)
            if bay is None:
                continue
            bay.obstacles.append((sink["box"], sink["yaml_id"]))
            sa0, sa1, sc0, sc1, sz0, _sz1 = sink["box"]
            ca = (sa0 + sa1) / 2.0
            for ext in self.builtins:
                if _prop(ext, PSET_BUILTIN, "Sink") != sink["yaml_id"]:
                    continue
                kind = str(_prop(ext, PSET_BUILTIN, "Kind", ""))

                def mm(key, default=None, ext=ext):
                    v = _prop(ext, PSET_BUILTIN, key)
                    if v is None:
                        if default is None:
                            raise ValueError(f"{ext['id']}: Pset_BuiltIn needs {key}")
                        return default
                    return float(v) * 1000.0

                bowl_c = (sc0 + sc1) / 2.0
                if kind == "Disposer":
                    d, h = mm("Width"), mm("Height")
                    box = (ca - d / 2, ca + d / 2, bowl_c - d / 2, bowl_c + d / 2, sz0 - h, sz0)
                    part = self._builtin_part(ext, bay, [box], shape="cylinder",
                                              props={"Sink": sink["yaml_id"], "Top": round(sz0 / 1000.0, 6),
                                                     "Bottom": round((sz0 - h) / 1000.0, 6)})
                    bay.obstacles.append((box, part.id))
                elif kind == "Tap":
                    d, h = mm("BodyDiameter", 50.0), mm("Height")
                    reach, spout = mm("SpoutReach"), mm("SpoutHeight")
                    hole = mm("HoleOffset", 40.0)
                    # Behind the bowl: away from the bay front.
                    back_c = sc1 + hole if bay.front_low else sc0 - hole
                    toward = -1.0 if bay.front_low else 1.0  # the spout points at the bowl
                    arm = 30.0
                    body = (ca - d / 2, ca + d / 2, back_c - d / 2, back_c + d / 2, zt, zt + h)
                    tip = back_c + toward * reach
                    arm_box = (ca - arm / 2, ca + arm / 2, min(back_c, tip), max(back_c, tip), zt + h - arm, zt + h)
                    nozzle = (ca - arm / 2, ca + arm / 2, min(tip, tip - toward * arm), max(tip, tip - toward * arm),
                              zt + spout, zt + h)
                    self._builtin_part(ext, bay, [body, arm_box, nozzle],
                                       props={"Sink": sink["yaml_id"], "HoleBehindBowl": round(hole / 1000.0, 6)})
                else:
                    raise ValueError(f"{ext['id']}: a sink fitting is Kind Disposer or Tap, got {kind!r}")
        return p

    def _niche_appliances(self, bays):
        """Appliances in a ``niche`` band: centred along the run, standing on
        the band's board, front face on the fronts' plane. The niche must be
        inside the maker's min/max niche height (Pset_BuiltIn)."""
        by_id = {b.id: b for b in bays}
        for ext in self.builtins:
            if str(_prop(ext, PSET_BUILTIN, "Kind", "")) != "Niche":
                continue
            bay = by_id.get(str(_prop(ext, PSET_BUILTIN, "Bay", "")))
            if bay is None:
                continue
            zi = int(_prop(ext, PSET_BUILTIN, "Zone", 0))
            zone = next((z for z in bay.zones if z.index == zi), None)
            if zone is None or zone.niche is None:
                raise ValueError(f"{ext['id']}: {bay.id} band {zi} is not a niche")
            w, d, h = (float(_prop(ext, PSET_BUILTIN, k)) * 1000.0 for k in ("Width", "Depth", "Height"))
            na0, na1, _nc0, _nc1, nz0, nz1 = zone.niche
            clear_h, clear_w = nz1 - nz0, na1 - na0
            for key, value in (("NicheHeight", clear_h), ("NicheWidth", clear_w)):
                lo = _prop(ext, PSET_BUILTIN, key + "Min")
                hi = _prop(ext, PSET_BUILTIN, key + "Max")
                if lo is not None and value < float(lo) * 1000.0 - TOL:
                    raise ValueError(f"{ext['id']}: {key} {value:.1f} below the maker's {float(lo) * 1000:.0f}")
                if hi is not None and value > float(hi) * 1000.0 + TOL:
                    raise ValueError(f"{ext['id']}: {key} {value:.1f} above the maker's {float(hi) * 1000:.0f}")
            depth_min = _prop(ext, PSET_BUILTIN, "NicheDepth")
            niche_depth = abs(_nc1 - _nc0) - self.p["FrontThickness"]
            if depth_min is not None and niche_depth < float(depth_min) * 1000.0 - TOL:
                raise ValueError(f"{ext['id']}: niche depth {niche_depth:.0f} under the maker's {float(depth_min) * 1000:.0f}")
            am = (bay.a0 + bay.a1) / 2.0
            tf = self.p["FrontThickness"]
            # Fascia on the fronts' plane (its thickness taken as a front's,
            # guess:), centred on the niche so it laps the boards; the body
            # fills the clear niche behind it, 1 mm off each face.
            zm = (nz0 + nz1) / 2.0
            f0, f1 = self.c_range(bay, 0.0, tf)
            b0, b1 = self.c_range(bay, tf, d)
            fascia = (am - w / 2, am + w / 2, f0, f1, zm - h / 2, zm + h / 2)
            body = (na0 + 1.0, na1 - 1.0, b0, b1, nz0 + 1.0, min(nz1, nz0 + h) - 1.0)
            # The fascia laps past the niche; the fronts above and below it
            # stop a front gap short of it.
            g = self.p["FrontGap"] / 2.0
            fz0, fz1 = fascia[4], fascia[5]
            for other in self.run.parts:
                if other.id not in bay.members or other.role not in ("Front", "Door", "Drawer", "PullOut"):
                    continue
                x0, x1, y0, y1, z0, z1 = other.boxes[0]
                if z0 < fz1 + g and z1 > fz1:
                    other.boxes[0] = (x0, x1, y0, y1, fz1 + g, z1)
                elif z1 > fz0 - g and z0 < fz0:
                    other.boxes[0] = (x0, x1, y0, y1, z0, fz0 - g)
            self._builtin_part(ext, bay, [fascia, body], props={
                "Bay": bay.id, "Zone": zi, "NicheClearWidth": round(clear_w / 1000.0, 6),
                "NicheClearHeight": round(clear_h / 1000.0, 6), "NicheClearDepth": round(niche_depth / 1000.0, 6),
                "Elevation": round(nz0 / 1000.0, 6)})

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
        cuts = []
        if self._mitred():
            cuts = [_mitre_cut(a0, a0 + (zt - zb), zb, zt, "top"), _mitre_cut(a1, a1 - (zt - zb), zb, zt, "top")]
        self.add(Part(f"{run.id}-WORKTOP", "Pracovní deska", "Worktop", [run.worktop],
                      label="worktop", voids=voids, material=material, cuts=cuts))

    def _mitred(self) -> bool:
        """``MitreEnds``: the worktop and the clad ends meet at 45 degrees
        (the top's end and the panel's top edge both bevelled, outer faces
        meeting at the top's outer corner). Needs equal thicknesses."""
        run, p = self.run, self.p
        if not _prop(run.element, PSET_RUN, "MitreEnds"):
            return False
        if not _prop(run.element, PSET_RUN, "CladEnds"):
            raise ValueError(f"{run.id}: MitreEnds needs CladEnds")
        ct = p["CladdingThickness"] or p["WorktopThickness"]
        if not _near(ct, p["WorktopThickness"]):
            raise ValueError(f"{run.id}: a 45 degree mitre needs the cladding as thick as the worktop "
                             f"({ct} vs {p['WorktopThickness']})")
        return True

    def _cladding(self, rows, zb, zt):
        run, p = self.run, self.p
        ct = p["CladdingThickness"] or p["WorktopThickness"]
        if run.worktop is not None:
            c0, c1 = run.worktop[2], run.worktop[3]
        else:
            c0, c1 = min(b.c0 for b in run.bays), max(b.c1 for b in run.bays)
        a0 = min(b.a0 for b in run.bays)
        a1 = max(b.a1 for b in run.bays)
        # Petr, 2026-11-20 f: the west run's sides are cream wood, the
        # island's stay Silestone (CladdingMaterial, default the worktop's).
        material = _prop(run.element, PSET_RUN, "CladdingMaterial") or _prop(run.element, PSET_RUN, "WorktopMaterial")
        stone = _prop(run.element, PSET_RUN, "CladdingMaterial") is None
        mitre = self._mitred()
        wt = p["WorktopThickness"]
        top = zt + wt if mitre else zt
        for da, a_range, edge in ((-1, (a0 - ct, a0), a0), (1, (a1, a1 + ct), a1)):
            name = self._end_name(da)
            touching = [b for b in run.bays if _near(b.a0 if da < 0 else b.a1, edge)]
            cuts = [_mitre_cut(edge + da * ct, edge, zt, top, "clad")] if mitre else []
            self.add(Part(f"{run.id}-CLAD-{name}", f"Obklad boku {name}", "Cladding",
                          [(*a_range, c0, c1, zb, top)], label="worktop" if stone else "cabinet",
                          material=material, cuts=cuts), *touching)

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

    def _overhang(self, front_low: bool) -> float:
        """Front overhang of the edge a row facing c0 (``front_low``) or c1
        has: ``WorktopOverhang<compass>`` (metres, e.g. ``WorktopOverhangE``)
        for that edge, else ``WorktopOverhang``. Petr, 2026-11-20 f: the
        island's east edge is flush with the east row's fronts."""
        face = self.run.frame.compass(0.0, -1.0 if front_low else 1.0)
        own = _prop(self.run.element, PSET_RUN, f"WorktopOverhang{face}")
        return self.p["WorktopOverhang"] if own is None else float(own) * 1000.0

    def _worktop_c(self, bays) -> tuple[float, float]:
        c0 = min(b.c0 for b in bays)
        c1 = max(b.c1 for b in bays)
        if any(b.front_low and _near(b.c0, c0) for b in bays):
            c0 -= self._overhang(True)
        if any((not b.front_low) and _near(b.c1, c1) for b in bays):
            c1 += self._overhang(False)
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


def _mitre_cut(outer: float, inner: float, zb: float, zt: float, piece: str) -> list:
    """The triangle (a, z) cut off one end of a 45 degree mitre joint.

    The joint plane runs from the outer top corner (``outer``, ``zt``) to the
    inner bottom one (``inner``, ``zb``): the worktop loses the triangle
    under it (``piece="top"``), the end panel the triangle over it
    (``"clad"``). Corners run 1 mm past the faces along the joint line so
    the boolean cut is clean."""
    s = 1.0 if inner > outer else -1.0  # from the outer face inwards
    o_top = (outer - s, zt + 1.0)
    i_bot = (inner + s, zb - 1.0)
    if piece == "top":
        return [o_top, (outer - s, zb - 1.0), i_bot]
    return [o_top, (inner + s, zt + 1.0), i_bot]


def _worktop_label(material) -> str:
    """Viewer label of a worktop: ``oak`` for a wooden top (the living-room
    counter, Petr 2026-11-13: "oak veneer, not silestone"), else stone."""
    return "oak" if material and "oak" in str(material).lower() else "worktop"


def _boxes_meet(a, b) -> bool:
    return all(a[2 * i] < b[2 * i + 1] - TOL and b[2 * i] < a[2 * i + 1] - TOL for i in range(3))


DRAWER_KINDS = ("drawer", "pullout")
ZONE_KINDS = ("drawer", "pullout", "door", "doors", "lift", "niche", "front", "dock", "none")


def zone_spec(element: dict) -> list[tuple[str, str, dict]]:
    """A bay's bands, top to bottom: ``[(kind, height token, options)]``.

    ``Pset_Fronts.Layout`` is the general form: bands separated by ``|``,
    each ``<kind> <height> [key=value ...]``. The height is metres or ``*``
    (the rest of the carcass, at most one). Kinds:

    - ``drawer``: a drawer (front, box on full-extension slides);
    - ``pullout``: a full-height pull-out; ``items=shelves|bins``, ``n=N``;
    - ``door``: one hinged door, ``hinge=L|R`` as you face it, optional
      ``width=`` (metres, the rest of the band is a fixed filler on the
      ``filler=L|R`` side, default the hinge side), ``shelves=N``,
      ``first=`` (metres, first shelf above the band floor), ``racks=N``
      (door shelves);
    - ``doors``: a pair, left leaf hinged L, right leaf R; ``shelves=N``;
    - ``lift``: a Blum AVENTOS lift-up front, ``fitting=HF|HS|HL|HK|HK-S|HK-XS``
      (``AVENTOS``); HF is a bi-fold pair, ``upper=`` (metres) sets the
      upper front for an asymmetrical pair; ``angle=`` an opening-angle
      stop (HF: 116, 107, 97, 88, 81; default the largest). ``shelves=N``,
      ``first=`` as a door. The cabinet must be inside the fitting's Blum ranges;
    - ``niche``: an appliance niche; the height is the *clear* niche height,
      the band adds one board under it; ``clear=`` (metres) narrows the
      opening with a packer on each side. The appliance names the bay and
      the band in its ``Pset_BuiltIn``;
    - ``front``: one plain slab, nothing decided behind it;
    - ``none``: an open band.

    Older forms still work: ``Pset_Drawers.NominalHeights`` (all drawers),
    ``Pset_KitchenBay.Front: none`` (no front) and nothing (one slab front).

    A bay with ``Pset_Fronts.Sections`` is split side by side first (see
    ``section_widths``); each section reads ``Layout<N>`` (else ``Layout``),
    via ``section_element``.
    """
    layout = _prop(element, PSET_FRONTS, "Layout")
    if layout:
        out = []
        for raw in str(layout).split("|"):
            tokens = raw.split()
            if len(tokens) < 2:
                raise ValueError(f"{element['id']}: bad Pset_Fronts band {raw!r}")
            kind, height, *rest = tokens
            if kind not in ZONE_KINDS:
                raise ValueError(f"{element['id']}: unknown band kind {kind!r}")
            opts = {}
            for tok in rest:
                if "=" not in tok:
                    raise ValueError(f"{element['id']}: band option {tok!r} needs key=value")
                k, v = tok.split("=", 1)
                opts[k] = v
            out.append((kind, height, opts))
        return out
    raw = _prop(element, PSET_DRAWERS, "NominalHeights")
    if raw is not None:
        return [("drawer", tok, {}) for tok in str(raw).split()]
    if str(_prop(element, PSET_BAY, "Front", "slab")).lower() == "none":
        return [("none", "*", {})]
    return [("front", "*", {})]


def zone_contents(element: dict) -> list[str]:
    raw = _prop(element, PSET_FRONTS, "Contents")
    if raw is None:
        raw = _prop(element, PSET_DRAWERS, "Contents", "")
    return [c.strip() for c in str(raw).split(";")] if str(raw).strip() else []


def zones(element: dict, carcass_height: float, board: float, z0: float) -> list[Zone]:
    """The bands laid out from the carcass bottom ``z0`` up (mm)."""
    spec = zone_spec(element)
    tokens = []
    for kind, height, _opts in spec:
        if height == "*":
            tokens.append("*")
        else:
            extra = board / 1000.0 if kind == "niche" else 0.0
            tokens.append(str(float(height) + extra))
    heights = _nominals(" ".join(tokens), carcass_height)
    contents = zone_contents(element)
    out = []
    top = z0 + carcass_height
    for index, ((kind, _h, opts), nominal) in enumerate(zip(spec, heights), start=1):
        content = contents[index - 1] if index - 1 < len(contents) else ""
        out.append(Zone(index, kind, nominal, top - nominal, top, opts, content))
        top -= nominal
    return out


def inner_side_height(p: dict, letter: str) -> float:
    """Blum MERIVOBOX / LEGRABOX side height for a letter (M, K), mm."""
    key = "InnerSide" + str(letter).strip().upper()
    if key not in p:
        raise ValueError(f"unknown Blum side height {letter!r} (M or K)")
    return p[key]


def inner_drawers(p: dict, dr: "Drawer", zone_top: float, letters: list) -> list[tuple]:
    """Inner drawer boxes behind one outer front (run frame mm), top first:
    the top one ``InnerTopGap`` under ``zone_top``, the rest spaced evenly
    between it and the outer drawer's box, each the outer box's plan."""
    a0, a1, c0, c1, _bz0, bz1 = dr.box
    heights = [inner_side_height(p, x) for x in letters]
    top = zone_top - p["InnerTopGap"]
    free = top - bz1 - sum(heights)
    if free < 0:
        raise ValueError(f"inner drawers {letters} do not fit over the outer box ({free:.0f} mm short)")
    gap = free / len(heights)  # the same clear height over each drawer below
    out = []
    z = top
    for h in heights:
        out.append((a0, a1, c0, c1, z - h, z))
        z -= h + gap
    return out


def box_side_height(p: dict, kind: str, nominal: float) -> float:
    """Drawer box side height for a front band (mm). Drawers in bands up to
    a MAXIMERA "system height" get that MAXIMERA box: low 78 (band 100),
    medium 144 (200), high 212 (300), IKEA. Taller bands and pull-outs get
    the front height less ``BoxHeightReserve`` (guess:)."""
    reserve = max(p["BoxMinHeight"], nominal - p["BoxHeightReserve"])
    if kind != "drawer" or nominal >= p["MaximeraTallBand"] - TOL:
        return reserve
    tiers = [(p["MaximeraHighBand"], p["MaximeraHighHeight"]), (p["MaximeraMediumBand"], p["MaximeraMediumHeight"]),
             (p["MaximeraLowBand"], p["MaximeraLowHeight"])]
    for band, height in tiers:
        if nominal >= band - TOL:
            return height
    return max(p["BoxMinHeight"], min(p["MaximeraLowHeight"], nominal - (p["MaximeraLowBand"] - p["MaximeraLowHeight"])))


MERIVOBOX_NL = (270.0, 300.0, 350.0, 400.0, 450.0, 500.0, 550.0, 600.0)  # Blum nominal lengths


def drawer_system(element: dict) -> str:
    """``MAXIMERA`` (default, IKEA-like) or ``MERIVOBOX`` (Blum), from Pset_Drawers.System."""
    v = str(_prop(element, PSET_DRAWERS, "System", "MAXIMERA")).upper()
    if v not in ("MAXIMERA", "MERIVOBOX"):
        raise ValueError(f"{element['id']}: Pset_Drawers.System is MAXIMERA or MERIVOBOX, got {v}")
    return v


def merivobox_nl(p: dict, side_depth: float) -> float:
    """The longest Blum MERIVOBOX nominal length that fits (NL + 3 <= inside depth)."""
    fits = [nl for nl in MERIVOBOX_NL if nl + p["MerivoboxDepthClearance"] <= side_depth + TOL]
    if not fits:
        raise ValueError(f"no MERIVOBOX nominal length fits {side_depth:.0f} mm")
    return fits[-1]


def drawer_inside(bay: Bay, p: dict, back_y: float) -> tuple[float, float]:
    """Drawer inside width and depth (mm): the bay's clear width and side
    depth less the MAXIMERA deductions (kitchen-cabinets.md), or for a
    MERIVOBOX bay LW − 51 by NL − 26 − 16 (Blum, see ``IKEA_DEFAULTS_MM``)."""
    side_depth = back_y - p["FrontThickness"]
    if drawer_system(bay.element) == "MERIVOBOX":
        nl = merivobox_nl(p, side_depth)
        return (bay.clear_width - p["MerivoboxWidthDeduction"],
                nl - p["MerivoboxBaseDeduction"] - p["MerivoboxBackThickness"])
    return bay.clear_width - p["DrawerInnerWidthDeduction"], side_depth - p["DrawerInnerDepthDeduction"]


def gridfinity_cells(p: dict, inside: float) -> tuple[int, float]:
    """Whole Gridfinity cells that fit an inside length, and the slack over
    n × pitch + play (0 when the drawer is sized to the grid)."""
    pitch, play = p["GridfinityPitch"], p["GridfinityPlay"]
    n = int(math.floor((inside - play) / pitch + 1e-6))
    return n, inside - (n * pitch + play)


def wants_gridfinity(element: dict) -> bool:
    v = _prop(element, PSET_DRAWERS, "Gridfinity", _prop(element, PSET_FRONTS, "Gridfinity", False))
    return v is True or str(v).lower() == "true"


def _drawer(bay: Bay, p: dict, zone: Zone, number: int, back_y: float, ceiling: float | None,
            obstacles: list, carcass_z0: float = 0.0, top_limit: float | None = None,
            on_board: bool = False) -> Drawer:
    """One drawer or pull-out in its band, from the clear opening (mm).

    The box is a MAXIMERA-like box: its inside is the clear width and side
    depth less the MAXIMERA deductions, its walls ``BoxWall`` (front, back
    and sides; the decor front is screwed to the box front), centred in the
    opening, full extension (travel = box length). See kitchen-cabinets.md.
    """
    tf, wall = p["FrontThickness"], p["BoxWall"]
    inner_w, inner_d = drawer_inside(bay, p, back_y)
    if inner_w <= 0 or inner_d <= 0:
        raise ValueError(f"{bay.id}: no room for a drawer ({inner_w} × {inner_d})")
    length = inner_d + 2 * wall
    g = p["FrontGap"] / 2.0
    out_dir = -1.0 if bay.front_low else 1.0
    fc0, fc1 = _Builder.c_range(bay, 0.0, tf)
    front = (bay.a0 + g, bay.a1 - g, fc0, fc1, zone.slot_z0 + g, zone.slot_z1 - g)
    box_h = box_side_height(p, zone.kind, zone.nominal)
    if zone.opts.get("box"):
        # An outer drawer under inner drawers: a low box by Blum letter (M, K).
        box_h = inner_side_height(p, zone.opts["box"])
    lowest = abs(zone.slot_z0 - carcass_z0) < TOL
    # On the carcass bottom or on a fixed board under the band (a dock).
    bz0 = zone.slot_z0 + p["BoxBottomOffset"] + (p["BoardThickness"] if lowest or on_board else 0.0)
    mid = (bay.clear_lo + bay.clear_hi) / 2.0
    half = inner_w / 2.0 + wall
    bc0, bc1 = _Builder.c_range(bay, tf, tf + length)
    box = (mid - half, mid + half, bc0, bc1, bz0, bz0 + box_h)
    limit, why = None, ""
    if top_limit is not None and box[5] > top_limit:
        limit, why = top_limit, "rail"
    if ceiling is not None and box[5] > ceiling and (limit is None or ceiling < limit):
        # Miele: >= 8 mm from the hob underside to a drawer's top edge.
        limit, why = ceiling, "hob"
    for obox, top, oid in obstacles:
        if _plan_meet(box, obox) and box[5] > top and (limit is None or top < limit):
            limit, why = top, oid
    trimmed = 0.0
    if limit is not None:
        trimmed = box[5] - limit
        if limit - bz0 < p["BoxMinHeight"]:
            raise ValueError(f"{bay.id}: drawer {number} under the {why} would be under {p['BoxMinHeight']} mm")
        box = (*box[:5], limit)
    floor_z = bz0 + p["BoxBottomThickness"]
    items = _items(p, zone, box, out_dir)
    grid = None
    if zone.kind == "drawer" and wants_gridfinity(bay.element):
        n, _sw = gridfinity_cells(p, inner_w)
        m, _sd = gridfinity_cells(p, inner_d)
        grid = (n, m)
        ic0, ic1 = _Builder.c_range(bay, tf + wall, tf + wall + inner_d)
        baseplate = gridfinity_baseplate(p, n, m, mid, (ic0 + ic1) / 2.0, floor_z)
        items = items + baseplate
    else:
        baseplate = []
    return Drawer(number, zone.content, zone.nominal, zone.slot_z0, front, box, length, out_dir, trimmed,
                  kind=zone.kind, items=items, zone=zone.index,
                  inside=(inner_w, inner_d, box[5] - floor_z), floor_z=floor_z, grid=grid,
                  baseplate=baseplate)


def gridfinity_baseplate(p: dict, n: int, m: int, a_mid: float, c_mid: float, z0: float) -> list:
    """An n × m Gridfinity baseplate as boxes (run frame mm): a thin floor
    and a rib on every grid line, centred on the drawer's inside floor. A
    drawing aid, not the real profiled plate."""
    pitch, h, rib = p["GridfinityPitch"], p["GridfinityHeight"], p["GridfinityRib"]
    w, d = n * pitch, m * pitch
    a0, c0 = a_mid - w / 2.0, c_mid - d / 2.0
    out = [(a0, a0 + w, c0, c0 + d, z0, z0 + p["GridfinityFloor"])]
    for i in range(n + 1):
        x = a0 + i * pitch
        out.append((max(a0, x - rib / 2.0), min(a0 + w, x + rib / 2.0), c0, c0 + d, z0, z0 + h))
    for j in range(m + 1):
        y = c0 + j * pitch
        out.append((a0, a0 + w, max(c0, y - rib / 2.0), min(c0 + d, y + rib / 2.0), z0, z0 + h))
    return out


def _items(p: dict, zone: Zone, box: tuple, out_dir: float) -> list:
    """Baskets (shelves) or bins riding in a pull-out box, evenly (guess:)."""
    kind = zone.opts.get("items")
    n = int(zone.opts.get("n", 0))
    if not kind or n <= 0:
        return []
    wall = p["BoxWall"]
    a0, a1, c0, c1, z0, z1 = box
    ia0, ia1, ic0, ic1, iz0 = a0 + wall, a1 - wall, c0 + wall, c1 - wall, z0 + wall
    out = []
    if kind == "shelves":
        board = wall
        step = (z1 - iz0 - n * board) / (n + 1)
        for k in range(n):
            z = iz0 + step * (k + 1) + board * k
            out.append((ia0, ia1, ic0, ic1, z, z + board))
        return out
    if kind == "bins":
        gap = p["BinGap"]
        w = (ia1 - ia0 - (n + 1) * gap) / n
        for k in range(n):
            x0 = ia0 + gap + k * (w + gap)
            out.append((x0, x0 + w, ic0 + gap, ic1 - gap, iz0, z1 - gap))
        return out
    raise ValueError(f"pull-out items={kind!r}: shelves or bins")


def _even(z_lo: float, z_hi: float, n: int, t: float) -> list[float]:
    """Bottoms of ``n`` boards ``t`` thick spaced evenly in z_lo..z_hi."""
    if n <= 0:
        return []
    step = (z_hi - z_lo - n * t) / (n + 1)
    return [z_lo + step * (k + 1) + t * k for k in range(n)]


def _plan_meet(a, b) -> bool:
    return a[0] < b[1] - TOL and b[0] < a[1] - TOL and a[2] < b[3] - TOL and b[2] < a[3] - TOL


def _grip_edge(zone: "Zone", role: str, box: tuple) -> str | None:
    """Which edge of a front gets the J grip. The band's ``grip=`` option
    wins (top | bottom | side | none: per front, so a tall door can be
    switched to a horizontal grip). Else (Petr, 2026-11-22 c, t784u): drawers
    and low doors the top edge; tall doors (over 1200 high) the vertical edge
    away from the hinge, like IKEA's VOXTORP "vertical handle" tall doors;
    doors starting above 1400 (the upper doors of tall cabinets) the bottom
    edge (guess:, within reach). Pull-outs, fixed fronts, fillers, lift-ups:
    none unless asked."""
    opt = zone.opts.get("grip")
    if opt:
        return str(opt).lower()
    z0, z1 = box[4], box[5]
    if role == "Drawer":
        return "top"
    if role == "Door":
        if z1 - z0 > 1200.0:
            return "side"
        if z0 > 1400.0:
            return "bottom"
        return "top"
    return None


def _hinge_a(bay: Bay, hinge: str, a0: float, a1: float) -> float:
    """The hinge edge in the run frame. Facing the front you look into the
    carcass: along +c when the front is the c0 face, so your left is -a;
    along -c otherwise, so your left is +a."""
    left_is_low = bay.front_low
    if hinge == "L":
        return a0 if left_is_low else a1
    return a1 if left_is_low else a0


def _leaves(bay: Bay, p: dict, zone: Zone, front_box: tuple) -> dict:
    """Door leaves (hinge, a0, a1) and fixed fillers (a0, a1) of a band."""
    g = p["FrontGap"] / 2.0
    a0, a1 = bay.a0, bay.a1
    if zone.kind == "doors":
        mid = (a0 + a1) / 2.0
        lo_hinge, hi_hinge = ("L", "R") if bay.front_low else ("R", "L")
        return {"doors": [(lo_hinge, a0 + g, mid - g), (hi_hinge, mid + g, a1 - g)], "fillers": []}
    hinge = zone.opts.get("hinge", "")
    if hinge not in ("L", "R"):
        raise ValueError(f"{bay.id}: door band {zone.index} needs hinge=L or hinge=R")
    width = zone.opts.get("width")
    if width is None:
        return {"doors": [(hinge, a0 + g, a1 - g)], "fillers": []}
    w = float(width) * 1000.0
    if w > a1 - a0 + TOL:
        raise ValueError(f"{bay.id}: door {w} wider than the bay")
    side = zone.opts.get("filler", hinge)
    # The filler side as a run-frame end: L is the low-a end when the front faces -c.
    filler_low = (side == "L") == bay.front_low
    split = a0 + (a1 - a0 - w) if filler_low else a0 + w
    if filler_low:
        return {"doors": [(hinge, split + g, a1 - g)], "fillers": [(a0 + g, split - g)]}
    return {"doors": [(hinge, a0 + g, split - g)], "fillers": [(split + g, a1 - g)]}


def _racks(bay: Bay, p: dict, span: tuple, front_box: tuple, n: int) -> list:
    """Door shelves on the leaf's back, evenly up the leaf (guess:). They
    overlap the leaf by 0.5 mm so the leaf and its racks are one solid."""
    if n <= 0:
        return []
    tf = p["FrontThickness"]
    a0, a1 = span[0] + p["RackInset"], span[1] - p["RackInset"]
    c0, c1 = _Builder.c_range(bay, tf - 0.5, tf + p["RackDepth"])
    z_lo, z_hi = front_box[4], front_box[5]
    step = (z_hi - z_lo) / (n + 1)
    return [(a0, a1, c0, c1, z_lo + step * (k + 1) - p["RackHeight"] / 2.0,
             z_lo + step * (k + 1) + p["RackHeight"] / 2.0) for k in range(n)]


def drawer_boxes(dr: Drawer, p: dict) -> list:
    """Front plus the box (bottom, two sides, box front, back), run frame,
    then anything riding in it (baskets, bins, a Gridfinity baseplate)."""
    wall = p["BoxWall"]
    a0, a1, c0, c1, z0, z1 = dr.box
    back_lo = dr.out > 0  # pulls toward +c, so its back is the c0 end
    lo_wall = (a0, a1, c0, c0 + wall, z0, z1)
    hi_wall = (a0, a1, c1 - wall, c1, z0, z1)
    back, box_front = (lo_wall, hi_wall) if back_lo else (hi_wall, lo_wall)
    return [
        dr.front,
        (a0, a1, c0, c1, z0, z0 + p["BoxBottomThickness"]),
        (a0, a0 + wall, c0, c1, z0, z1),
        (a1 - wall, a1, c0, c1, z0, z1),
        box_front,
        back,
        *dr.items,
    ]


def inner_drawer_boxes(p: dict, box: tuple, out: float) -> list:
    """An inner drawer: its low front piece (full side height, at the pull
    end), bottom, two sides and back, run frame mm. Blum's front piece is a
    steel profile; drawn ``BoxWall`` thick like the outer box."""
    wall = p["BoxWall"]
    a0, a1, c0, c1, z0, z1 = box
    front_lo = out < 0  # pulls toward -c: its front piece is at c0
    lo_wall = (a0, a1, c0, c0 + wall, z0, z1)
    hi_wall = (a0, a1, c1 - wall, c1, z0, z1)
    front, back = (lo_wall, hi_wall) if front_lo else (hi_wall, lo_wall)
    return [front, (a0, a1, c0, c1, z0, z0 + p["BoxBottomThickness"]),
            (a0, a0 + wall, c0, c1, z0, z1), (a1 - wall, a1, c0, c1, z0, z1), back]


def latch_boxes(p: dict, dr: "Drawer", inner_box: tuple) -> list:
    """Blum ZI7.0M07: the latch on the inner drawer's front piece and its
    housing let into the back of the outer front, centred across the drawer,
    at the front piece's mid-height (drawn as boxes)."""
    dia, depth = p["LatchDiameter"], p["LatchDepth"]
    a0, a1, _c0, _c1, z0, z1 = inner_box
    am, zm = (a0 + a1) / 2.0, (z0 + z1) / 2.0
    fa0, fa1, fc0, fc1, _fz0, _fz1 = dr.front
    inner_face = fc1 if dr.out < 0 else fc0  # the front's carcass side
    into = 1.0 if dr.out < 0 else -1.0  # from the inner face into the front
    h0, h1 = sorted((inner_face, inner_face - into * depth))
    housing = (am - dia / 2, am + dia / 2, h0, h1, zm - dia / 2, zm + dia / 2)
    gap0, gap1 = sorted((inner_face, inner_face + into * p["FrontThickness"]))
    latch = (am - dia / 2, am + dia / 2, gap0, gap1, zm - dia / 4, zm + dia / 4)
    return [housing, latch]


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
                    # Inside the bay, or standing on its counter (a kettle, a grinder).
                    overlaps = (ez0 < bay.z_base + bay.height and ez1 > bay.z_base) or _near(ez0, bay.z_base + bay.height)
                    if inside and overlaps:
                        bay.external.append(ext["id"])
                if ext.get("PredefinedType") == "SINK" and _prop(ext, PSET_SINK, "BowlWidth") is not None:
                    sink = _sink(ext, frame, (ca, cc), (rx, ry), ez1)
                    loc = [frame.local(x, y) for x, y in pts]
                    sink["box"] = (min(q[0] for q in loc), max(q[0] for q in loc),
                                   min(q[1] for q in loc), max(q[1] for q in loc), ez0, ez1)
                    sinks.append(sink)
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
        builtins = [x for key in EXTERNAL_LISTS for x in (doc.get(key) or [])
                    if _prop(x, PSET_BUILTIN, "Kind") is not None]
        sanitary = {x["id"] for x in (doc.get("sanitaryTerminals") or [])}
        _Builder(run, sinks, above, builtins, sanitary).build()
        out.append(run)
    _join_worktops(out)
    return out


def _join_worktops(runs_: list) -> None:
    """Slabs a bay lends to another run's counter (``Pset_KitchenBay.WorktopRun``)
    join that run's worktop part, in its frame (both frames must be
    parallel). Petr, 2026-11-20 b: at the eastern column the oak top "is part
    of the living-room oak counter"."""
    by_id = {r.id: r for r in runs_}
    for run in runs_:
        for other_id, bay_id, slab in run.lent_worktop:
            other = by_id.get(other_id)
            if other is None:
                raise ValueError(f"{bay_id}: WorktopRun {other_id} is not a kitchen run")
            top = next((p for p in other.parts if p.role == "Worktop" and p.id == f"{other.id}-WORKTOP"), None)
            if top is None:
                raise ValueError(f"{bay_id}: {other_id} has no worktop to join")
            f, g = run.frame, other.frame
            if abs(f.ux - g.ux) > 1e-9 or abs(f.uy - g.uy) > 1e-9:
                raise ValueError(f"{bay_id}: {other_id}'s frame is not parallel to {run.id}'s")
            a0, a1, c0, c1, z0, z1 = slab
            x0, y0 = f.world(a0, c0, 0.0)[:2]
            x1, y1 = f.world(a1, c1, 0.0)[:2]
            la0, lc0 = g.local(x0, y0)
            la1, lc1 = g.local(x1, y1)
            piece = (min(la0, la1), max(la0, la1), min(lc0, lc1), max(lc0, lc1), z0, z1)
            if not (_near(z0, top.boxes[0][4]) and _near(z1, top.boxes[0][5])):
                raise ValueError(f"{bay_id}: its top {z0}–{z1} is not {other_id}'s {top.boxes[0][4]}–{top.boxes[0][5]}")
            top.boxes.append(piece)
            covers = [x for x in str(top.props.get("Covers") or "").split(",") if x]
            top.props["Covers"] = ",".join(covers + [bay_id])
            if other.worktop is not None:
                w = other.worktop
                other.worktop = (min(w[0], piece[0]), max(w[1], piece[1]), min(w[2], piece[2]), max(w[3], piece[3]), w[4], w[5])


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


def _rot(v, a):
    """(u, z) turned by ``a``; positive takes down (0, -1) towards out (+u)."""
    return (v[0] * math.cos(a) - v[1] * math.sin(a), v[0] * math.sin(a) + v[1] * math.cos(a))


def _hf_fourbar(lo: float, fhu: float, ua: float, mz: float, theta: list, tf: float, full: float) -> dict:
    """AVENTOS HF top as a four-bar, in (u, z) about the top hinge (u out
    of the inner face, z up, mm). The upper front's centre hinge is ``lo``
    below the top hinge; the lower front (``fhu`` long) hangs from it; the
    lever pivots at (``ua``, ``mz``) and is fixed to the lower front at
    (``ua``, ``-s``) in the lower front's frame, plumb under the pivot when
    shut. ``s`` is solved so the lower front hangs at
    ``LIFT_HF_LOWER_OPEN_DEG`` with the upper front at ``full`` (the
    mechanism without a stop); ``theta`` may end earlier (a stop). Returns
    ``s``, the lower front's absolute angle and the lever's turn per sample
    of ``theta``, the open bottom edge of the lower front (its farthest u,
    its lowest corner's z) and ``reach``: the farthest u and highest z any
    corner of either front passes on the way to ``theta[-1]``."""
    fine = [full * k / 400 for k in range(401)]

    def run(s: float, samples: list):
        r = (-lo - s) - mz
        r = abs(r)
        alpha, prev, out = 0.0, 0.0, []
        for th in samples:
            pu, pz = _rot((0.0, -lo), th)
            a = prev
            for _ in range(40):  # Newton on |A - M|^2 - r^2
                ou, oz = _rot((ua, -s), a)
                au, az = pu + ou, pz + oz
                g = (au - ua) ** 2 + (az - mz) ** 2 - r * r
                du, dz = _rot((ua, -s), a + math.pi / 2)  # d/da of the offset
                dg = 2 * (au - ua) * du + 2 * (az - mz) * dz
                if abs(dg) < 1e-9:
                    break
                step = g / dg
                a -= max(-0.2, min(0.2, step))
                if abs(step) < 1e-10:
                    break
            prev = alpha = a
            out.append((th, alpha, (au, az)))
        return out, r

    lo_s, hi_s = 0.05 * fhu, 0.95 * fhu
    target = math.radians(LIFT_HF_LOWER_OPEN_DEG)
    for _ in range(50):  # the open lower angle rises with s
        mid = (lo_s + hi_s) / 2.0
        path, _r = run(mid, fine)
        if path[-1][1] > target:
            hi_s = mid
        else:
            lo_s = mid
    s = (lo_s + hi_s) / 2.0
    path, r = run(s, fine)
    for th, a, _A in path:
        pu, _pz = _rot((0.0, -lo), th)
        bu, _bz = _rot((0.0, -fhu), a)
        if pu + bu < -TOL:
            raise ValueError("AVENTOS HF: the lower front's bottom edge would pass into the carcass")
    sweep, _r = run(s, [theta[-1] * k / 400 for k in range(401)])
    reach_u, reach_z = -1e9, -1e9
    for th, a, _A in sweep:
        pu, pz = _rot((0.0, -lo), th)
        pts = [_rot(c, th) for c in ((0.0, 0.0), (tf, 0.0), (0.0, -lo), (tf, -lo))]
        pts += [(pu + q[0], pz + q[1]) for q in (_rot(c, a) for c in ((0.0, 0.0), (tf, 0.0), (0.0, -fhu), (tf, -fhu)))]
        reach_u = max(reach_u, max(q[0] for q in pts))
        reach_z = max(reach_z, max(q[1] for q in pts))
    sampled, _r = run(s, theta)
    a0 = (0.0, -lo - s - mz)
    lever = []
    for _th, _a, (au, az) in sampled:
        v1 = (au - ua, az - mz)
        lever.append(math.atan2(a0[0] * v1[1] - a0[1] * v1[0], a0[0] * v1[0] + a0[1] * v1[1]))
    th, a, _A = sampled[-1]
    pu, pz = _rot((0.0, -lo), th)
    # The bottom edge's two corners: on the hinge line (inner face) and on
    # the outer face, the front's thickness out from it.
    corners = [_rot((0.0, -fhu), a), _rot((tf, -fhu), a)]
    bottom = (max(pu + c[0] for c in corners), min(pz + c[1] for c in corners))
    return {"s": s, "alpha": [x[1] for x in sampled], "lever": lever, "bottom": bottom, "reach": (reach_u, reach_z)}
