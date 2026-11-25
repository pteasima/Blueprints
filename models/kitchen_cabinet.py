"""Kitchen cabinet runs as monoblocks: shared walls, drawers, worktop, cladding.

Facts and their sources: docs/design/kitchen-cabinets.md. Numbers Petr did
not give are IKEA METOD carcass defaults, Blum MERIVOBOX catalogue values
(every drawer, 2026-11-23) or ``guess:`` values, marked there.

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
    # Every drawer and pull-out is Blum MERIVOBOX (Petr, 2026-11-23, t835u:
    # "Remodel or drawers to use merivobox"). Blum catalogue 2024/25, pp.
    # 250-289 (https://publications.blum.com/2024/catalogue/en/254/ ...), see
    # kitchen-cabinets.md "Drawers: Blum MERIVOBOX". Blum: drawer side heights
    # N 68.5, M 91, K 129; E is the M side plus a gallery rail, BOXCOVER or
    # BOXCAP, 192 overall (Blum planning sheet); F 256 is not in the European
    # catalogue (Blum NZ/AU only, NL <= 550). Space requirement in height
    # (profile + side + 2 tilt): N 85.5, M 108, K 146, E 209; inner drawers M
    # 106, K 144. So the cabinet profile takes 15 under the side and 2 over it.
    # M and K were 90 / 128 from Petr's brief of 2026-11-20 b; Blum's 91 / 129
    # since every drawer became MERIVOBOX (2026-11-23).
    "InnerSideM": 91.0,
    "InnerSideK": 129.0,
    "InnerSideE": 192.0,
    "InnerSideF": 256.0,  # not in the European catalogue; kept so an old layout still reads
    "InnerSideN": 68.5,
    "MerivoboxProfileBelow": 15.0,  # space requirement − side − tilt (Blum: 108 − 91 − 2)
    "MerivoboxTilt": 2.0,  # "incl. 2 mm tilt adjustment" (Blum)
    "SpaceTwinLoad": 20,  # Blum SPACE TWIN: 20 kg dynamic per base cabinet (catalogue 2024/25 p. 282)
    # Base and chipboard back LW − 51 wide, LW the cabinet's inside width
    # (Blum); the inside width is taken as that base width (guess: the side
    # profiles' inner faces). The cabinet needs NL + 3 inside depth ("internal
    # cabinet depth LT min. = NL + 3 mm", Blum); the base is NL − 26 long with
    # a 16 chipboard back, the inside depth that less the 16 back (guess:).
    # Blum inner drawers: an aluminium front piece cut to LW − 126 (Blum).
    "MerivoboxWidthDeduction": 51.0,
    "MerivoboxDepthClearance": 3.0,
    "MerivoboxBaseDeduction": 26.0,
    "MerivoboxBackThickness": 16.0,
    "MerivoboxInnerFrontDeduction": 126.0,
    # Cabinet profile (runner) drawn as a simple box on each cabinet side
    # (Petr t991u). Length and underside follow Blum (NL, 15 mm under the
    # side). Inward width and the box height are drawing sizes, guess:.
    "MerivoboxProfileWidth": 16.0,  # guess: inward from the cabinet side; official 28 mm is side + profile together
    "MerivoboxProfileHeight": 20.0,  # guess: visual body; official underside is MerivoboxProfileBelow under the side
    # EVOline Wing, Schulte Elektrotechnik data sheet Stand 08/2025 / BMA
    # 7040 2160 0003. Used on appliance inners with a custom tall back
    # (t991u). The custom back is not a Blum part (guess: woodworker).
    "EvolineWingArmLength": 378.0,
    "EvolineWingArmThickness": 17.0,  # plan thickness of the chain
    "EvolineWingWoodHang": 121.0,  # overall below the upper edge, wood/universal adapter
    "EvolineWingMetalHang": 126.0,  # overall below the upper edge, metal adapter (170 mm back was sized from this)
    "EvolineWingBracketHeight": 70.0,  # cabinet-side triangle (12+20+12)
    "EvolineWingBracketBase": 41.0,  # 13+28
    "EvolineWingWoodPlan": 23.0,  # wood cabinet bracket in plan
    "EvolineWingAdapterWidth": 40.0,  # guess: drawer-side guide across the back
    "EvolineWingAdapterHeight": 60.0,  # official hook-body height on the data sheet
    # 70 kg profiles (453.xxx1B) exist for NL 450-600 only (Blum). Petr,
    # 2026-11-23 (t895u): "go all out, all heavy duty where they fit": every
    # MERIVOBOX drawer, pull-out and inner drawer at NL 450-600 is 70 kg,
    # NL 270-400 stays 40 kg (``merivobox_load``). Was 70 kg only for
    # pull-outs, E boxes and boxes wider than 600 inside (guess: rule).
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
    # Bottom-row fronts on a recessed toe-kick (Petr, 2026-11-24, t947u):
    # the front hangs this many mm below the carcass floor so it can be
    # opened with a foot. 0 = the usual half-gap above the carcass bottom.
    "BottomFrontOverhang": 0.0,
    # Integrated J grip (``Pset_KitchenRun.FrontGrip: J``; Petr, 2026-11-22 c:
    # "voxtorp J style on drawers and hinged doors"; t789u, a photo of a real
    # VOXTORP edge: "Not as deep and a little different detail (looks like
    # much larger radius on the inside of the outer handle part and only a
    # very small radius on the visible face of the handle)"; t791u: an
    # aluminium J handle (18 wide, 31.18 tall) with VOXTORP's line sketched in
    # red). In section (``grip_profile``), an open J cup, no undercut: the
    # face side is cut away from the edge down to the lip's crest
    # ``JGripLipTop`` below the edge (a crest of ``JGripCrestRadius``, very
    # small, on the visible face); from the crest the lip's inside sweeps
    # down in one large arc ``JGripBowlRadius`` to the cup's bottom
    # ``JGripCupDepth`` below the edge; the bottom turns up into the back
    # wall (``JGripBackWall`` thick, up to the edge) with ``JGripCornerRadius``.
    # The fingers go in over the crest and pull on the inside of the lip.
    # guess: all of it, read off Petr's sketch (the aluminium profile is 18
    # wide, like our fronts) and photo. Which edge: ``_grip_edge``.
    "JGripLipTop": 21.0,
    "JGripCupDepth": 28.0,
    "JGripBackWall": 4.0,
    "JGripBowlRadius": 7.0,
    "JGripCrestRadius": 1.0,
    "JGripCornerRadius": 4.0,
    "JGripEdgeRadius": 0.0,
    # Wall (top) cabinets: the lowest front hangs this far below the carcass
    # bottom as the grip (Petr, 2026-11-22 c: "plain 1cm overhang on all top
    # cabinets"). The top edge does not move.
    "WallFrontOverhang": 0.0,
    "RailDepth": 80.0,  # top front/back rails (guess)
    "BoxWall": 19.0,  # drawn box side / back / inner front piece (a drawing size, guess:)
    # Petr, 2026-11-22 (t795u): "we remove the useless frame frontsides". A
    # main drawer is sides + back + bottom; the decor front closes the box
    # (clips onto the sides), so there is no box front board behind it
    # (``BoxFrontPanel`` 0; 19 = the old drawn box front). Inner drawers keep
    # their own low front piece (``inner_drawer_boxes``).
    "BoxFrontPanel": 0.0,
    "BoxBottomThickness": 16.0,  # 16 chipboard base (Blum cutting list)
    # A pull-out's shelves or bins stand up to the front top less this
    # (guess:, the old tall-box rule; MERIVOBOX boxes stop at E 192).
    "BoxHeightReserve": 110.0,
    # Gridfinity (bays with Pset_Drawers.Gridfinity): 42 mm pitch, the drawer
    # inside is n × 42 + GridfinityPlay; the baseplate is drawn in the drawer.
    "GridfinityPitch": 42.0,
    # 2 mm of play since 2026-11-23 (Petr, t841u; was 1).
    "GridfinityPlay": 2.0,
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
    # Hanging-bin frame pull-out (``frame=u``, Petr 2026-11-23, t842u): an
    # MDF plate with one hole per bin, U-shaped round the disposer, on two
    # sides running on Blum MOVENTO 760H (BLUMOTION S, manual opening).
    "FrameBoard": 18.0,  # MDF plate (guess:)
    # No side walls since 2026-11-23 (t866u): the runners screw straight
    # under the plate's edge strips, the bins hang free below it.
    "FrameSide": 16.0,  # plate edge strip over each runner, the "drawer side" width (Blum: 12-16)
    "FrameRunnerBelow": 21.0,  # runner bottom to the plate underside (guess:, MOVENTO drawing)
    "FrameBack": 16.0,  # rear hook block under each arm's back end (guess:)
    "FrameBackHeight": 40.0,  # rear hook block height (guess:; was a 120 back panel)
    "FrameBracket": 40.0,  # 90° steel angle, front to plate, leg length (guess:)
    "FrameBracketWidth": 30.0,  # (guess:)
    "FrameBracketThick": 3.0,  # (guess:)
    "FrameHoleInset": 5.0,  # hole = the bin's outer size less this a side (Petr, t842u)
    "FrameFrontStrip": 25.0,  # plate in front of the holes (guess:)
    "FrameNotchClearance": 5.0,  # notch edge to the disposer, each side (guess:)
    "FrameLiftClearance": 10.0,  # bins in front of the worktop edge when pulled out (guess:)
    "FrameTopClearance": 20.0,  # bin top (lid) under the sink bowl (guess:)
    "FrameFloorGap": 10.0,  # hanging bin bottom over the carcass bottom (Petr, 2026-11-23, t849u; was 22)
    "BinRim": 30.0,  # FILUR rim + lid above the plate (guess: Petr ~3 cm; IKEA lid package 3 cm)
    "BinTaper": 10.0,  # FILUR body under the rim, narrower a side (guess:)
}

# Blum MOVENTO 760H / 766H nominal lengths (technical data sheet TD-132/1,
# 06.22): SKL = NL - 10, SKW = LW - 42, inside cabinet depth >= NL + 3.
# Petr, 2026-11-23 (t866u): "make merivobox hardware white". Blum makes
# MERIVOBOX in SW-M silk white matt, IG-M indium grey matt, OG-M orion grey matt.
MERIVOBOX_COLOUR = "Blum SW-M silk white matt"
MOVENTO_NL = (250, 270, 300, 320, 350, 380, 400, 420, 450, 480, 500, 550, 600)
RUN_FLAGS = ("CladEnds", "Backsplash", "FlushEnds")

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
    side: str = ""  # Blum MERIVOBOX drawer side letter (N, M, K, E)
    nl: float = 0.0  # Blum nominal length, mm
    load: int = 0  # Blum profile load class, kg (40 / 70)
    drop: float = 0.0  # mm the box sits below its band's own position (stacking, see _drawer)
    profile_z: float = 0.0  # bottom of the cabinet profile (Blum space requirement), mm
    frame: dict | None = None  # hanging-bin frame pull-out (``frame=u``): its sizes, see _frame_pullout
    twin: dict | None = None  # Blum SPACE TWIN (``twin=E``): the upper box and its profile, see _drawer


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


# Underside drip groove (okapnik) along a worktop front overhang
# (Petr, 2026-11-24, t947u). guess: 5 mm wide × 3 mm deep; centreline
# 10 mm in from the edge (half of the 20 mm overhang); stopped 10 mm
# short of each free end (and of a 45° mitre's inner edge).
DRIP_GROOVE_WIDTH = 5.0
DRIP_GROOVE_DEPTH = 3.0
DRIP_GROOVE_CENTRE = 10.0
DRIP_GROOVE_END_STOP = 10.0


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


def grip_profile(p: dict) -> list:
    """The VOXTORP J cup's cut-away region as segments in (d, u): d into the
    front from its visible face, u from the gripped edge toward the middle of
    the front. Overcut 1 past the face and the edge. See ``IKEA_DEFAULTS_MM``."""
    hc, hb, tb = p["JGripLipTop"], p["JGripCupDepth"], p["JGripBackWall"]
    R, rc, rk, re, e = p["JGripBowlRadius"], p["JGripCrestRadius"], p["JGripCornerRadius"], p["JGripEdgeRadius"], 1.0
    dw = p["FrontThickness"] - tb  # the back wall's inside
    dy = (hb - R) - (hc + rc)  # bowl centre to crest centre, along u
    if not (0.0 < tb < p["FrontThickness"] and 0.0 < hc < hb and R > 0.0 and rc > 0.0 and (R + rc) ** 2 > dy * dy):
        raise ValueError("J grip: 0 < JGripLipTop < JGripCupDepth, 0 < JGripBackWall < FrontThickness, "
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
        self._standing_appliances()
        self._decor_panels()
        if wt > 0:
            self._worktop(rows, z_base + height - wt, z_base + height)
        if _prop(run.element, PSET_RUN, "CladEnds"):
            self._cladding(rows, z_base, z_base + height - wt)
        if self._flush_ends():
            self._end_panels(z_base, z_base + height - wt)
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
        self._standing_appliances()
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
            top = self.add(Part(f"{run.id}-WORKTOP", "Pracovní deska", "Worktop", slabs, label=_worktop_label(material),
                          material=material))
            self._drip_grooves(top)
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
        floor_ends = self._floor_ends()
        for end, a_range, bay in (("lo", (a_lo, a_lo + t), row[0]), ("hi", (a_hi - t, a_hi), row[-1])):
            name = self._end_name(-1 if end == "lo" else 1)
            c0, c1 = self.c_range(bay, tf, bay.depth)
            # ``EndsToFloor`` (Petr, 2026-11-23, t865u): this end side runs
            # down past the plinth to the floor; the bottom is fixed to it
            # (guess: dowels / connectors or angle brackets) and the legs and
            # kickboard stop at its inside face.
            zs = bay.z_base if name in floor_ends else z0
            self.add(Part(f"{run.id}-END-{name}{tag}", f"Bok {name}", "EndSide",
                          [(*a_range, c0, c1, zs, z1)],
                          props={"ToFloor": True} if name in floor_ends else {}), bay)
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
        floor = self._floor_ends()
        t = p["BoardThickness"]
        a_lo += t if self._end_name(-1) in floor else 0.0
        a_hi -= t if self._end_name(1) in floor else 0.0
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
        if sides:
            t, sb, tf = p["BoardThickness"], p["PlinthSetback"], p["FrontThickness"]
            own = _prop(self.run.element, PSET_RUN, "SideKickboardSetback")
            se = sb if own is None else float(own) * 1000.0
            # A flush front plinth (north tall cabinets, 2026-11-24, t947u):
            # the return starts at the front board's back, not at a recess.
            y0 = tf if kind == "Flush" else sb + t
            ends = {self._end_name(-1.0): (row[0], a_lo + se, a_lo + se + t),
                    self._end_name(1.0): (row[-1], a_hi - se - t, a_hi - se)}
            for name in sides:
                if name not in ends:
                    raise ValueError(f"{self.run.id}: SideKickboards {name!r} is not a run end ({', '.join(ends)})")
                end_bay, s0, s1 = ends[name]
                k0, k1 = self.c_range(end_bay, y0, back_y)
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
        # An end leg sits under the end side but never past its outer face
        # (2026-11-22: a free end next to a door opening, ``FlushEnds``).
        end = max(t, d) / 2 if self._flush_ends() else t / 2
        floor = self._floor_ends()
        # An end side down to the floor (``EndsToFloor``): its leg stands
        # just inside it.
        lo_end = t + d / 2 if self._end_name(-1) in floor else end
        hi_end = t + d / 2 if self._end_name(1) in floor else end
        lines = [(row[0].a0 + lo_end, (row[0],), f"{row[0].id}-{run.frame.compass(-1.0, 0.0)}")]
        lines += [(l.a1, (l, r), f"{l.id}-{r.id}") for l, r in zip(row, row[1:])]
        lines.append((row[-1].a1 - hi_end, (row[-1],), f"{row[-1].id}-{run.frame.compass(1.0, 0.0)}"))
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
        vent = self._hob_vent_plan(bay, z0, z1, back_y, p)
        # A vented hob bay stops the bottom at the moved-forward back so
        # the exhaust channel is open down into the plinth.
        bottom_y = vent.outer_y if vent is not None else back_y
        c_in0, c_in1 = self.c_range(bay, tf, bottom_y)
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
                flipout = any(kind == "flipout" for kind, _h, _o in zone_spec(bay.element))
                for tag, name, (c0, c1) in rails:
                    box = (lo, hi, c0, c1, z1 - t, z1)
                    if tag == "F" and flipout:
                        # Petr, 2026-11-24 (t928u): a tilt-out bin has to
                        # swing through the front opening; the front rail
                        # would clip the rim. The back rail stays.
                        self.run.notes.append(f"{bay.id}: rail F left out, the flip-out bin swings through the opening")
                        continue
                    if hob is not None and _boxes_meet(box, hob.housing):
                        # The hob housing drops into the rail: no rail (guess:).
                        self.run.notes.append(f"{bay.id}: rail {tag} left out, the hob housing sits there")
                        continue
                    self.add(Part(f"{bay.id}-RAIL-{tag}", name, "Rail", [box]), bay)
        else:
            self.add(Part(f"{bay.id}-TOP", "Strop", "Top", [(lo, hi, c_in0, c_in1, z1 - t, z1)]), bay)
        # Safety distances under an air-intake panel are from the panel
        # underside (Miele pp. 19–20), not from the hob housing.
        if hob is None:
            ceiling = None
        else:
            panel_t = 0.0 if vent is None else vent.panel_t
            ceiling = hob.underside - panel_t - hob.min_drawer_gap
        subs = self._sections(bay, p, z0, z1, back_y)
        for sub in subs or [bay]:
            self._fronts(sub, p, z0, z1, back_y, ceiling)
        if vent is not None:
            self._hob_vent_carcass(bay, z0, z1, p, vent)

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

    def _add_merivobox_profiles(self, bay: Bay, p: dict, drawer_id: str, dr: "Drawer"):
        """Blum cabinet profiles (runners) as simple carcass-fixed boxes,
        length NL, underside at ``dr.profile_z``. SPACE TWIN uses one
        profile per box, diagonally offset (lower left, upper right)."""
        article = merivobox_profile_article(dr.load, dr.nl)
        if dr.twin:
            sides_z = (("L", dr.profile_z), ("R", dr.twin["profile_z"]))
        else:
            sides_z = (("L", dr.profile_z), ("R", dr.profile_z))
        for side, pz in sides_z:
            boxes = merivobox_cabinet_profile_boxes(p, bay, dr.nl, pz, sides=(side,))
            self.add(Part(f"{drawer_id}-PROFILE-{side}", f"Korpusová lišta {side}", "CabinetProfile",
                          [boxes[side]],
                          props={"ParentDrawer": drawer_id, "Side": side,
                                 "NominalLength": round(dr.nl / 1000.0, 6),
                                 "ProfileArticle": article, "LoadClass": dr.load,
                                 "ProfileZ": round(pz / 1000.0, 6),
                                 "Width": round(p["MerivoboxProfileWidth"] / 1000.0, 6),
                                 "Height": round(p["MerivoboxProfileHeight"] / 1000.0, 6),
                                 "WidthNote": "guess: inward width; official 28 mm is side + profile together",
                                 "HeightNote": "guess: drawn body; official underside is 15 mm under the side"}), bay)

    def _add_evoline_wing(self, bay: Bay, p: dict, drawer_id: str, box: tuple,
                          back_height: float, out: float, back_y: float, opening_top: float):
        """Folded EVOline Wing: the drawer-side adapter rides with the inner
        drawer; the arm and the cabinet triangle stay on the carcass in the
        closed position."""
        moving, fixed = evoline_wing_boxes(p, bay, box, back_height, out, back_y)
        back_top = box[4] + back_height
        spare_rail = opening_top - back_top
        spare_hang = (back_top - p["EvolineWingWoodHang"]) - (box[4] + 42.0)
        props = {"ParentDrawer": drawer_id, "System": "EVOline Wing (Schulte Elektrotechnik)",
                 "Adapter": "wood/universal (custom wood back)",
                 "ArmLength": round(p["EvolineWingArmLength"] / 1000.0, 6),
                 "ArmThickness": round(p["EvolineWingArmThickness"] / 1000.0, 6),
                 "Hang": round(p["EvolineWingWoodHang"] / 1000.0, 6),
                 "BracketHeight": round(p["EvolineWingBracketHeight"] / 1000.0, 6),
                 "BracketBase": round(p["EvolineWingBracketBase"] / 1000.0, 6),
                 "CustomBackHeight": round(back_height / 1000.0, 6),
                 "ClearUnderOpening": round(spare_rail / 1000.0, 6),
                 "ClearAboveRunner": round(spare_hang / 1000.0, 6),
                 "State": "folded (closed)",
                 "AdapterWidth": "guess: 40 mm across the back",
                 "Note": "170 mm back sized from 126 mm metal hang + 42 mm runner zone, rounded up"}
        self.add(Part(f"{drawer_id}-WING-ADAPTER", "EVOline Wing adapter", "EvolineWing",
                      moving, props=dict(props, Kind="drawer-side adapter")), bay)
        self.add(Part(f"{drawer_id}-WING", "EVOline Wing (folded)", "EvolineWing",
                      fixed, props=dict(props, Kind="folded arm and cabinet bracket")), bay)
        self.run.notes.append(
            f"{drawer_id}: EVOline Wing folded; custom back {back_height:g} mm, "
            f"{spare_rail:.0f} mm under the opening/rail, arm bottom {spare_hang:.0f} mm above the 42 mm runner-zone top"
        )

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
        stack_top = None  # the cabinet profile of the drawer just above (MERIVOBOX stacking)
        for i, zone in enumerate(bay.zones):
            if zone.kind not in DRAWER_KINDS and zone.kind != "gap":
                stack_top = None
            below = bay.zones[i + 1] if i + 1 < len(bay.zones) else None
            top_zone = i == 0
            # A fixed board between two bands, except between drawers
            # (and a ``gap`` holding a pending drawer band).
            board_below = below is not None and not (
                zone.kind in _NO_BOARD_BETWEEN and below.kind in _NO_BOARD_BETWEEN)
            if board_below:
                bc0, bc1 = self.c_range(bay, tf, back_y)
                self.add(Part(f"{bay.id}-BOARD{zone.index}", f"Mezidno {zone.index}", "Board",
                              [(lo, hi, bc0, bc1, zone.slot_z0, zone.slot_z0 + t)],
                              props={"Zone": zone.index}), bay)
            if zone.kind == "gap":
                # No front or box. Pin the next drawer's stack to this
                # floor so its box stays where it was (t972u).
                stack_top = zone.slot_z0
                self.run.notes.append(
                    f"open: {bay.id} D2/D3 heights are pending Petr's next decision "
                    f"(a {zone.nominal:.0f} mm gap holds the lower band still)"
                )
                continue
            # Clear interior of the band: above the board under it (or the
            # carcass bottom), below the board over it (or the top/rails).
            # The lowest band stands on the carcass bottom (``BottomThickness``).
            in_z0 = zone.slot_z0 + ((p["BottomThickness"] or t) if below is None else t)
            in_z1 = zone.slot_z1 - (t if top_zone else 0.0)
            front_box = (bay.a0 + g, bay.a1 - g, fc0, fc1, _front_z0(p, zone, z0), zone.slot_z1 - g)
            base = {"Zone": zone.index, "Kind": zone.kind, "NominalHeight": round(zone.nominal / 1000.0, 6),
                    "Contents": zone.content or None}
            if zone.kind in DRAWER_KINDS:
                drawer_no += 1
                dr = _drawer(bay, p, zone, drawer_no, back_y, ceiling, self._obstacle_ceiling(bay, p),
                             carcass_z0=z0, top_limit=(z1 - t) if top_zone else None,
                             on_board=board_below, stack_top=stack_top)
                stack_top = dr.profile_z
                if zone.opts.get("front_top") is not None:
                    # ``front_top=`` (absolute z, metres): the decor front
                    # reaches past its band over the board above (Petr,
                    # 2026-11-23, t874u: SF-T3's drawer front covers the
                    # oven board's edge). Only upward, never into the box.
                    ft = float(zone.opts["front_top"]) * 1000.0
                    if ft < dr.front[5] - TOL:
                        raise ValueError(f"{bay.id}: front_top {ft:g} is below the band's front top {dr.front[5]:g}")
                    dr.front = (*dr.front[:5], ft)
                name = ("Výsuv" if zone.kind == "pullout" else "Šuplík") + f" {drawer_no} {dr.content}"
                drawer_system(bay.element)
                if dr.frame:
                    fr = dr.frame
                    props = dict(base, System="Blum MOVENTO 760H, BLUMOTION S (manual opening)",
                                 RunnerArticle=f"760H{int(dr.nl)}1S", NominalLength=round(dr.nl / 1000.0, 6),
                                 Extension=round(dr.extension / 1000.0, 6), LoadClass=40,
                                 FrameKind="U-shaped MDF plate, no side walls, runners screwed under the plate, bins hung free by the rim",
                                 RunnerHeight=round(fr["runner_z0"] / 1000.0, 6),
                                 FrontBrackets=f"{fr['brackets']} × 90° steel angle {fr['bracket'][0]:g}×{fr['bracket'][0]:g}×{fr['bracket'][2]:g}, {fr['bracket'][1]:g} wide (guess:)",
                                 FrameBoard=round(fr["plate"] / 1000.0, 6),
                                 FramePlateTop=round(fr["plate_top"] / 1000.0, 6),
                                 FrameInsideWidth=round(fr["skw"] / 1000.0, 6),
                                 FrameLength=round(fr["skl"] / 1000.0, 6),
                                 HoleWidth=round(fr["hole"][0] / 1000.0, 6), HoleDepth=round(fr["hole"][1] / 1000.0, 6),
                                 NotchStrip=round(min(fr["strip"]) / 1000.0, 6),
                                 PlateToBowl=round(fr["top_gap"] / 1000.0, 6),
                                 BinTopToBowl=round(fr["lid_gap"] / 1000.0, 6),
                                 BinBottomToFloor=round(fr["floor_gap"] / 1000.0, 6),
                                 BinsPastWorktop=round(fr["lift"] / 1000.0, 6),
                                 Items=n_bins if (n_bins := len(fr["bins"]) // 2) else None, ItemKind="bins (hung)")
                    self.run.notes.append(
                        f"open: {bay.id} bin frame: MOVENTO NL {dr.nl:g}, plate top {fr['plate_top']:g} "
                        f"({fr['top_gap']:g} under the bowl), bins {fr['floor_gap']:g} over the floor, "
                        f"{min(fr['strip']):g} mm of MDF beside the disposer notch (trap, outlet and hoses not modelled)")
                    self.run.notes.append(
                        f"open: {bay.id} bin frame has no side walls: MOVENTO is made for wooden drawer sides "
                        f"12-16 mm; here its locking devices screw under the plate's {p['FrameSide']:g} mm edge strips "
                        f"and the rear hooks go into blocks under the arms (runner bottom z {fr['runner_z0']:g}); "
                        f"check with Blum or the joiner")
                else:
                    props = None
                props = props or dict(base, System="Blum MERIVOBOX",
                             BoxColour=MERIVOBOX_COLOUR,
                             NominalLength=round(dr.nl / 1000.0, 6),
                             DrawerSide=dr.side, LoadClass=dr.load,
                             ProfileArticle=None if dr.twin else merivobox_profile_article(dr.load, dr.nl),
                             BoxBelowFront=round(dr.drop / 1000.0, 6) if dr.drop > TOL else None,
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
                if dr.twin:
                    tw = dr.twin
                    props.update(System="Blum MERIVOBOX SPACE TWIN (BLUMOTION, manual opening)",
                                 Items=None, ItemKind=None,
                                 TwinBoxes=f"{dr.side} (low) + {tw['side']} (high)",
                                 TwinUpperBoxBottom=round(tw["box"][4] / 1000.0, 6),
                                 TwinProfiles="lower box: left cabinet profile; upper box: right (diagonally offset)",
                                 TwinProfileHeights=f"{dr.profile_z:g} / {tw['profile_z']:g}")
                    self.run.notes.append(
                        f"open: {bay.id} SPACE TWIN {dr.side} + {tw['side']}: inside {dr.inside[0]:g} wide, profiles at "
                        f"z {dr.profile_z:g} (left) and {tw['profile_z']:g} (right); upper box height is a guess")
                if dr.grid:
                    sw = gridfinity_cells(p, dr.inside[0])[1]
                    sd = gridfinity_cells(p, dr.inside[1])[1]
                    if abs(sw) > TOL or abs(sd) > TOL:
                        self.run.notes.append(f"open: {bay.id}-D{drawer_no} inside {dr.inside[0]:g} x {dr.inside[1]:g} is "
                                              f"{sw:+g} / {sd:+g} off the Gridfinity {dr.grid[0]}x{dr.grid[1]} size "
                                              f"(scripts/gridfinity_fit.py)")
                if zone.opts.get("items") == "bins" and bay.obstacles:
                    side_gap, top_gap = bin_clearance(dr, bay.obstacles)
                    props.update(BinClearanceSide=round(side_gap / 1000.0, 6), BinClearanceTop=round(top_gap / 1000.0, 6))
                    if side_gap < -TOL or top_gap < -TOL:
                        raise ValueError(f"{bay.id}: the bins run into the sink or disposer "
                                         f"(side {side_gap:.1f}, top {top_gap:.1f} mm)")
                    self.run.notes.append(f"open: {bay.id} bins clear the disposer by {side_gap:.1f} mm each side "
                                          f"and the bowl by {top_gap:.1f} mm on top (drawn sizes, no trap or outlet)")
                inner = [x for x in str(zone.opts.get("inner", "")).split(",") if x.strip()]
                boxes = drawer_boxes(dr, p)
                iclear = zone.opts.get("inner_clear")
                inner_boxes = (inner_drawers(p, dr, in_z1, inner, float(iclear) * 1000.0 if iclear is not None else None)
                               if inner else [])
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
                if not dr.frame:
                    self._add_merivobox_profiles(bay, p, f"{bay.id}-D{drawer_no}", dr)
                if zone.opts.get("shelf") is not None:
                    # Petr, 2026-11-23 (t871u): a FIXED shelf in the carcass
                    # behind the drawer front, over the drawer's box, for
                    # laying oven trays on; not part of the pull-out.
                    # ``shelf=`` is its top z in metres (absolute).
                    st = float(zone.opts["shelf"]) * 1000.0
                    sz0 = st - t
                    if sz0 < dr.box[5] + p["ShelfSetback"] - TOL or st > zone.slot_z1 - TOL:
                        raise ValueError(f"{bay.id}: fixed shelf {sz0:g}-{st:g} must sit over the drawer box "
                                         f"(top {dr.box[5]:g}) and under the band top {zone.slot_z1:g}")
                    sc0, sc1 = self.c_range(bay, tf + p["ShelfSetback"], back_y)
                    self.add(Part(f"{bay.id}-SH{zone.index}-1", "Police na plechy", "Shelf",
                                  [(bay.clear_lo, bay.clear_hi, sc0, sc1, sz0, st)],
                                  props={"Zone": zone.index, "Kind": "fixed shelf over the drawer box",
                                         "ShelfTop": round(st / 1000.0, 6),
                                         "OverDrawerBox": round((sz0 - dr.box[5]) / 1000.0, 6),
                                         "UnderBoard": round((zone.slot_z1 - st) / 1000.0, 6),
                                         "BehindFront": round(p["ShelfSetback"] / 1000.0, 6)}), bay)
                # Inner drawers (2026-11-20 c): each its own part and motion,
                # opening only with the front open (``Parent``); the coupled
                # top one (ZI7.0M07) opens with the front, the front closing
                # closes them all (viewer: doors.js).
                inner_back_raw = zone.opts.get("inner_back")
                inner_back = float(inner_back_raw) * 1000.0 if inner_back_raw is not None else None
                for k, ib in enumerate(inner_boxes, start=1):
                    coupled = k == 1 and latch == "top"
                    ifloor = ib[4] + p["BoxBottomThickness"]
                    if inner_back is not None and inner_back + TOL < (ib[5] - ib[4]):
                        raise ValueError(f"{bay.id}-D{drawer_no}-I{k}: inner_back {inner_back:g} is shorter than the side {ib[5] - ib[4]:g}")
                    if inner_back is not None and ib[4] + inner_back > in_z1 + TOL:
                        raise ValueError(f"{bay.id}-D{drawer_no}-I{k}: custom back {inner_back:g} mm from z {ib[4]:g} "
                                         f"does not clear the opening underside {in_z1:g} (rail / band top)")
                    iboxes = inner_drawer_boxes(p, ib, dr.out, back_height=inner_back)
                    igrid, iplate = None, []
                    # Its own front piece and back: inside = box − 2 walls deep.
                    iw, idp = dr.inside[0], abs(ib[3] - ib[2]) - 2 * p["BoxWall"]
                    if zone.kind == "drawer" and wants_gridfinity(bay.element):
                        igrid = (gridfinity_cells(p, iw)[0], gridfinity_cells(p, idp)[0])
                        # Snapped to the inner drawer's front piece (Petr, t835u).
                        gd = igrid[1] * p["GridfinityPitch"]
                        if dr.out < 0:
                            ic0 = ib[2] + p["BoxWall"]
                            ic1 = ic0 + gd
                        else:
                            ic1 = ib[3] - p["BoxWall"]
                            ic0 = ic1 - gd
                        iplate = gridfinity_baseplate(p, igrid[0], igrid[1], (ib[0] + ib[1]) / 2.0, (ic0 + ic1) / 2.0, ifloor)
                    if igrid:
                        isw, isd = gridfinity_cells(p, iw)[1], gridfinity_cells(p, idp)[1]
                        if abs(isw) > TOL or abs(isd) > TOL:
                            self.run.notes.append(f"open: {bay.id}-D{drawer_no}-I{k} inside {iw:g} x {idp:g} is "
                                                  f"{isw:+g} / {isd:+g} off the Gridfinity {igrid[0]}x{igrid[1]} size "
                                                  f"(scripts/gridfinity_fit.py)")
                    if coupled:
                        iboxes += latch_boxes(p, dr, ib)[1:]
                    ipz = ib[4] - p["MerivoboxProfileBelow"]
                    idr = replace(dr, front=iboxes[0], box=ib, items=list(iplate), baseplate=list(iplate), side=inner[k - 1].strip().upper(),
                                  load=merivobox_load(p, "drawer", inner[k - 1].strip().upper(), iw, dr.nl),
                                  grid=igrid, floor_z=ifloor, profile_z=ipz,
                                  inside=(iw, idp, ib[5] - ifloor))
                    iprops = {"Zone": zone.index, "Kind": "inner", "System": "Blum MERIVOBOX",
                              "BoxColour": MERIVOBOX_COLOUR,
                              "NominalLength": round(dr.nl / 1000.0, 6),
                              "DrawerSide": inner[k - 1].strip().upper(),
                              "FrontPieceLength": round((bay.clear_width - p["MerivoboxInnerFrontDeduction"]) / 1000.0, 6),
                              "SideHeight": round((ib[5] - ib[4]) / 1000.0, 6), "Latched": coupled,
                              "ClearAbove": round((in_z1 - ifloor) / 1000.0, 6),
                              "Latch": "Blum ZI7.0M07" if coupled else None, "Parent": outer.id, "LoadClass": idr.load,
                              "ProfileArticle": merivobox_profile_article(idr.load, dr.nl),
                              "InsideWidth": round(iw / 1000.0, 6), "InsideDepth": round(idp / 1000.0, 6),
                              "Gridfinity": f"{igrid[0]}x{igrid[1]}" if igrid else None,
                              "GridfinitySlackWidth": round(gridfinity_cells(p, iw)[1] / 1000.0, 6) if igrid else None,
                              "GridfinitySlackDepth": round(gridfinity_cells(p, idp)[1] / 1000.0, 6) if igrid else None}
                    if inner_back is not None:
                        iprops["CustomBackHeight"] = round(inner_back / 1000.0, 6)
                        iprops["CustomBack"] = (f"guess: custom {inner_back:g} mm wood back, not a Blum part "
                                                "(t991u: tall enough for the EVOline Wing above the runner)")
                    self.add(Part(f"{bay.id}-D{drawer_no}-I{k}", f"Vnitřní šuplík {k}", "InnerDrawer",
                                  iboxes + iplate, drawer=idr, props=iprops), bay)
                    self._add_merivobox_profiles(bay, p, f"{bay.id}-D{drawer_no}-I{k}", idr)
                    if str(zone.opts.get("wing", "")).strip().lower() == "evoline" and inner_back is not None:
                        self._add_evoline_wing(bay, p, f"{bay.id}-D{drawer_no}-I{k}", ib, inner_back, dr.out, back_y, in_z1)
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
                self.run.door_bands.append((bay, zone, in_z0, in_z1, back_y, int(zone.opts.get("racks", 0))))
            elif zone.kind == "flipout":
                self._flipout(bay, p, zone, front_box, in_z0, in_z1, back_y, base)
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

    def _standing_appliances(self):
        """Loose appliances on the floor of a door band (``Pset_BuiltIn.Kind:
        Standing``, ``Bay``, ``Zone``; Petr, 2026-11-23, t870u: the vacuum
        sealer at the pantry's base). Centred across the clear width, its
        front ``ShelfSetback`` behind the door racks (or the door). It must
        fit under the band's lowest shelf; ``LidOpenHeight`` (the height
        with the lid open, base to the lid's top) is checked against that
        shelf and reported, not drawn."""
        p = self.p
        # In an inner drawer (``Pset_BuiltIn.InnerDrawer``, t883u): on its
        # floor, moving with it; ``Rotation: 90`` turns the footprint (its
        # width along the drawer's depth); ``Faces`` N/S/E/W puts its front
        # against that side of the drawer.
        for ext in self.builtins:
            if str(_prop(ext, PSET_BUILTIN, "Kind", "")) != "Standing":
                continue
            host_id = _prop(ext, PSET_BUILTIN, "InnerDrawer")
            if not host_id:
                continue
            host = next((q for q in self.run.parts if q.id == host_id), None)
            if host is None:
                continue
            bay = next(b for b in self.run.bays if b.id == _prop(ext, PSET_BUILTIN, "Bay"))
            w, d, h = (float(_prop(ext, PSET_BUILTIN, k)) * 1000.0 for k in ("Width", "Depth", "Height"))
            rot = int(_prop(ext, PSET_BUILTIN, "Rotation", 0) or 0) % 180
            along, across = (d, w) if rot == 90 else (w, d)  # along the run (a), along the drawer depth (c)
            idr = host.drawer
            wall = p["BoxWall"]
            a0, a1, c0, c1, _z0, _z1 = idr.box
            ia0, ia1 = a0 + wall, a1 - wall
            ic0, ic1 = c0 + wall, c1 - wall
            if along > ia1 - ia0 + TOL or across > ic1 - ic0 + TOL:
                raise ValueError(f"{ext['id']}: {along:g} x {across:g} does not fit {host_id}'s inside "
                                 f"{ia1 - ia0:g} x {ic1 - ic0:g}")
            faces = str(_prop(ext, PSET_BUILTIN, "Faces", "") or "").upper()
            fr = self.run.frame
            north_hi = fr.world(ia1, 0.0, 0.0)[1] > fr.world(ia0, 0.0, 0.0)[1]
            at_hi = (faces == "N") == north_hi if faces in ("N", "S") else None
            if at_hi is None:
                x0 = (ia0 + ia1 - along) / 2.0
            else:
                x0 = ia1 - along if at_hi else ia0
            cm = (ic0 + ic1) / 2.0
            floor = idr.floor_z
            body = (x0, x0 + along, cm - across / 2.0, cm + across / 2.0, floor, floor + h)
            zone_top = floor + host.props["ClearAbove"] * 1000.0 if host.props.get("ClearAbove") is not None else None
            part = self._builtin_part(ext, bay, [body], props={
                "Bay": bay.id, "InnerDrawer": host_id, "Rotation": rot or None, "Faces": faces or None,
                "InsideWidth": round((ia1 - ia0) / 1000.0, 6), "InsideDepth": round((ic1 - ic0) / 1000.0, 6),
                "SpareAlongRun": round((ia1 - ia0 - along) / 1000.0, 6),
                "SpareAcrossDepth": round((ic1 - ic0 - across) / 1000.0, 6),
                "ClearanceAbove": round((zone_top - floor - h) / 1000.0, 6) if zone_top is not None else None,
                "Parent": host.props.get("Parent"), "Latched": host.props.get("Latched")})
            # It slides with its inner drawer (viewer: the same motion).
            part.drawer = replace(idr, front=body, box=body, items=[], baseplate=[])
            if str(_prop(ext, PSET_BUILTIN, "Shape", "") or "") == "StandMixer":
                self._stand_mixer(ext, bay, part, body, faces, north_hi, idr, host_id)
            self.run.notes.append(
                f"open: {ext['id']} in {host_id}: {along:g} along the run x {across:g} deep x {h:g}, "
                f"inside {ia1 - ia0:g} x {ic1 - ic0:g}, faces {faces or '-'}"
                + (f", {zone_top - floor - h:g} over it to the band top" if zone_top is not None else ""))
        for bay, zone, floor, top, back_y, racks in self.run.door_bands:
            for ext in self.builtins:
                if str(_prop(ext, PSET_BUILTIN, "Kind", "")) != "Standing" or str(_prop(ext, PSET_BUILTIN, "Bay", "")) != bay.id:
                    continue
                if int(_prop(ext, PSET_BUILTIN, "Zone", zone.index)) != zone.index:
                    continue
                w, d, h = (float(_prop(ext, PSET_BUILTIN, k)) * 1000.0 for k in ("Width", "Depth", "Height"))
                lid = float(_prop(ext, PSET_BUILTIN, "LidOpenHeight", 0.0) or 0.0) * 1000.0
                tf = p["FrontThickness"]
                front = tf + p["ShelfSetback"] + (p["RackDepth"] + p["ShelfSetback"] if racks else 0.0)
                depth_clear = back_y - front
                cw = bay.clear_hi - bay.clear_lo
                shelves = [q for q in self.run.parts if q.role == "Shelf" and q.id.startswith(f"{bay.id}-SH{zone.index}-")]
                roof = min((q.boxes[0][4] for q in shelves), default=top)
                if w > cw + TOL:
                    raise ValueError(f"{ext['id']}: {w:.0f} wide, {bay.id} is {cw:.0f} clear")
                if d > depth_clear + TOL:
                    raise ValueError(f"{ext['id']}: {d:.0f} deep, {bay.id} has {depth_clear:.0f} behind the door racks")
                if h > roof - floor + TOL:
                    raise ValueError(f"{ext['id']}: {h:.0f} high, {roof - floor:.0f} under the lowest shelf of {bay.id}")
                am = (bay.clear_lo + bay.clear_hi) / 2.0
                b0, b1 = self.c_range(bay, front, front + d)
                body = (am - w / 2.0, am + w / 2.0, b0, b1, floor, floor + h)
                lid_clear = roof - floor - lid if lid else None
                self._builtin_part(ext, bay, [body], props={
                    "Bay": bay.id, "Zone": zone.index, "ClearWidth": round(cw / 1000.0, 6),
                    "ClearDepthBehindRacks": round(depth_clear / 1000.0, 6),
                    "ClearHeight": round((roof - floor) / 1000.0, 6),
                    "SideClearance": round((cw - w) / 2000.0, 6),
                    "DepthLeftBehind": round((depth_clear - d) / 1000.0, 6),
                    "ClearanceAbove": round((roof - floor - h) / 1000.0, 6),
                    "LidOpenClearance": round(lid_clear / 1000.0, 6) if lid_clear is not None else None})
                self.run.notes.append(
                    f"{'open' if lid_clear is None or lid_clear >= 0 else 'CLASH'}: {ext['id']} in {bay.id}: "
                    f"{w:g} × {d:g} × {h:g} on z {floor:g}, {(cw - w) / 2:g} a side, {depth_clear - d:g} behind it, "
                    f"{roof - floor - h:g} over it to the lowest shelf"
                    + (f"; lid open {lid:g} (guess:) leaves {lid_clear:g}" if lid else ""))

    def _grips(self, bay: Bay, p: dict, zone: Zone, role: str, box: tuple, hinge_a: float | None = None):
        """The routed J grip of one front (``Pset_KitchenRun.FrontGrip: J``):
        (cut boxes, edge). Edge per front from the band's ``grip=`` option
        (top | bottom | side | none), else ``_grip_edge``."""
        if str(_prop(self.run.element, PSET_RUN, "FrontGrip") or "").upper() != "J":
            return [], None
        edge = _grip_edge(zone, role, box)
        if edge in (None, "none"):
            return [], None
        a0, a1, c0, c1, z0, z1 = box
        face, inward = (c0, 1.0) if bay.front_low else (c1, -1.0)
        prof = grip_profile(p)
        if edge in ("top", "bottom"):
            zz = (lambda u: z1 - u) if edge == "top" else (lambda u: z0 + u)
            return [Grip("a", a0 - 1.0, a1 + 1.0, [[(face + inward * d, zz(u)) for d, u in sg] for sg in prof])], edge
        if edge == "side":
            if hinge_a is None:
                raise ValueError(f"{bay.id}: grip=side needs a hinged door")
            latch_low = abs(hinge_a - a1) < abs(hinge_a - a0)  # the edge away from the hinge
            aa = (lambda u: a0 + u) if latch_low else (lambda u: a1 - u)
            return [Grip("z", z0 - 1.0, z1 + 1.0, [[(aa(u), face + inward * d) for d, u in sg] for sg in prof])], edge
        raise ValueError(f"{bay.id}: grip={edge!r}, one of top, bottom, side, none")

    def _flipout(self, bay: Bay, p: dict, zone: Zone, front_box, in_z0, in_z1, back_y, base):
        """Bottom-hinged tilt-out front with a hook-on bin on its inside.

        Petr, 2026-11-24 (t928u): the shallow dining filler by pier W-053
        (near the Harvey corner) becomes a flip-out trashcan for the
        Elletipi Cover Box Small 8 L (340 × 225 × 150, H × W × D).
        t930u: the 12 mm plywood cradle is gone; the bin hangs from two
        hook-in brackets on the inside of the front, near the top.
        """
        tf = p["FrontThickness"]
        g = p["FrontGap"] / 2.0
        out = -1.0 if bay.front_low else 1.0
        raw_bin = str(zone.opts.get("bin", "0.225x0.150x0.340")).lower().replace("×", "x")
        bw, bd, bh = (float(v) * 1000.0 for v in raw_bin.split("x"))
        # guess: 8 mm under the worktop at the peak of the rear rim's swing,
        # and 8 mm past the worktop edge for the expose stop.
        clearance = 8.0 if zone.opts.get("clearance") is None else float(zone.opts["clearance"]) * 1000.0
        # guess: two 2 mm stainless hook plates on the door, each with an
        # 8 mm drop-in lip, and matching 2 mm hooks on the bin's back wall.
        # The 8 mm lip is the stand-off from the door's inner face to the bin.
        hook_t = 2.0
        hook_w = 40.0
        hook_h = 18.0
        hook_lip = 8.0
        hook_inset = 30.0
        fc0, fc1 = front_box[2], front_box[3]
        fz0, fz1 = front_box[4], front_box[5]
        front = (bay.a0 + g, bay.a1 - g, fc0, fc1, fz0, fz1)
        # Piano / tilt-out hinge along the front's bottom outer edge.
        pivot_c = fc0 if bay.front_low else fc1
        pivot_z = fz0
        inner_c = (fc0 + tf) if bay.front_low else (fc1 - tf)
        mid = (bay.clear_lo + bay.clear_hi) / 2.0
        ba0, ba1 = mid - bw / 2.0, mid + bw / 2.0
        if ba0 < bay.clear_lo + 1.0 or ba1 > bay.clear_hi - 1.0:
            raise ValueError(
                f"{bay.id}: flip-out bin {bw:g} mm wide does not fit the "
                f"{bay.clear_hi - bay.clear_lo:g} mm clear width"
            )
        if hook_w + hook_inset * 2 > bw - 1.0:
            raise ValueError(f"{bay.id}: hook plates {hook_w:g} mm do not fit the bin width")
        if bay.front_low:
            bc0, bc1 = inner_c + hook_lip, inner_c + hook_lip + bd
        else:
            bc0, bc1 = inner_c - hook_lip - bd, inner_c - hook_lip
        bc0, bc1 = sorted((bc0, bc1))
        worktop_z = zone.slot_z1
        back_rail_z0 = worktop_z - p["BoardThickness"]
        rail_c0, rail_c1 = sorted(self.c_range(bay, back_y - p["RailDepth"], back_y))
        c_rear = bc1 if bay.front_low else bc0
        c_rel = abs(c_rear - pivot_c)
        r_max = worktop_z - clearance - pivot_z
        if r_max <= c_rel + 1.0:
            raise ValueError(f"{bay.id}: flip-out bin depth leaves no swing under the worktop")
        z_rel_max = math.sqrt(r_max * r_max - c_rel * c_rel)
        # Keep the rear rim under the back rail, with the same clearance,
        # for every angle while the rim is still in the rail's c-range.
        # Sweep past the expose angle so the peak (when the rim crosses
        # the front plane) is always checked.
        def _clears(z_top: float) -> bool:
            if z_top > back_rail_z0 - clearance + TOL:
                return False
            for i in range(40):
                a = math.radians(30.0) * i / 39.0
                ca, za = _tilt_point(c_rear, z_top, pivot_c, pivot_z, a, out)
                if rail_c0 - 0.5 <= ca <= rail_c1 + 0.5 and za > back_rail_z0 - clearance + TOL:
                    return False
            return True
        lo, hi = in_z0 + bh, min(back_rail_z0 - clearance, pivot_z + z_rel_max)
        if hi < lo:
            raise ValueError(f"{bay.id}: flip-out bin {bh:g} mm high does not fit the opening")
        if not _clears(hi):
            a, b = lo, hi
            for _ in range(24):
                mid_z = (a + b) / 2.0
                if _clears(mid_z):
                    a = mid_z
                else:
                    b = mid_z
            hi = a
            if not _clears(hi):
                raise ValueError(f"{bay.id}: flip-out bin rim would hit the back rail as it tilts out")
        z_top = hi
        z_bot = z_top - bh
        if z_bot < in_z0 - TOL:
            raise ValueError(
                f"{bay.id}: flip-out bin {bh:g} mm high does not fit under the "
                f"worktop with {clearance:g} mm swing clearance"
            )
        back_face = back_y
        if bay.front_low:
            if bc1 > back_face + TOL:
                raise ValueError(
                    f"{bay.id}: flip-out bin {bd:g} mm deep plus an {hook_lip:g} mm "
                    f"hang stand-off does not fit the {back_face - inner_c:g} mm clear depth"
                )
        else:
            if bc0 < back_face - TOL:
                raise ValueError(
                    f"{bay.id}: flip-out bin {bd:g} mm deep plus the hang stand-off "
                    f"does not fit the clear depth"
                )
        # Minimum angle that puts the rear rim ``clearance`` in front of the
        # worktop edge, so the full 225 × 150 mouth is clear from above.
        target_c = pivot_c + out * clearance
        def _exposed(deg: float) -> bool:
            ca, _za = _tilt_point(c_rear, z_top, pivot_c, pivot_z, math.radians(deg), out)
            return ca <= target_c + TOL if bay.front_low else ca >= target_c - TOL
        if "angle" in zone.opts:
            angle = float(zone.opts["angle"])
        else:
            a0, a1 = 0.0, 40.0
            for _ in range(60):
                mid_a = (a0 + a1) / 2.0
                if _exposed(mid_a):
                    a1 = mid_a
                else:
                    a0 = mid_a
            # Round up to 0.1° so the stop still clears the 8 mm target.
            angle = math.ceil(a1 * 10.0 - 1e-12) / 10.0
        if not _exposed(angle):
            raise ValueError(
                f"{bay.id}: flip-out stop {angle:g}° does not fully expose the bin opening"
            )
        # Bin bottom stays above the carcass bottom, closed and through the swing.
        bottom_pts = [
            (bc0, z_bot), (bc1, z_bot),
            (bc0, z_bot), (bc1, z_bot),
        ]
        for i in range(25):
            a = math.radians(angle) * i / 24.0
            for c, z in bottom_pts:
                _ca, za = _tilt_point(c, z, pivot_c, pivot_z, a, out)
                if za < in_z0 + TOL:
                    raise ValueError(
                        f"{bay.id}: flip-out bin bottom would hit the carcass "
                        f"bottom at {angle * i / 24.0:g}° (z {za:.1f} < {in_z0:.1f})"
                    )
        wall = p["BinWall"]
        bin_boxes = [
            (ba0, ba1, bc0, bc1, z_bot, z_bot + wall),
            (ba0, ba0 + wall, bc0, bc1, z_bot + wall, z_top),
            (ba1 - wall, ba1, bc0, bc1, z_bot + wall, z_top),
            (ba0 + wall, ba1 - wall, bc0, bc0 + wall, z_bot + wall, z_top),
            (ba0 + wall, ba1 - wall, bc1 - wall, bc1, z_bot + wall, z_top),
        ]
        # Two brackets on the door, two hooks on the bin, both near the top.
        # Left/right plates sit ``hook_inset`` in from each bin side.
        ha = [
            (ba0 + hook_inset, ba0 + hook_inset + hook_w),
            (ba1 - hook_inset - hook_w, ba1 - hook_inset),
        ]
        # Lip shelf a little below the rim; the hook drops onto it.
        lip_z0, lip_z1 = z_top - hook_h - 4.0, z_top - hook_h - 2.0
        plate_z0, plate_z1 = lip_z1, z_top - 4.0
        hook_fold_z0, hook_fold_z1 = lip_z1, lip_z1 + 4.0
        hook_vert_z0, hook_vert_z1 = hook_fold_z1, plate_z1
        if bay.front_low:
            br_plate_c0, br_plate_c1 = inner_c, inner_c + hook_t
            br_lip_c0, br_lip_c1 = inner_c, inner_c + hook_lip
            hk_vert_c0, hk_vert_c1 = inner_c + hook_lip - hook_t, inner_c + hook_lip
            hk_fold_c0, hk_fold_c1 = inner_c + hook_t, inner_c + hook_lip
        else:
            br_plate_c0, br_plate_c1 = inner_c - hook_t, inner_c
            br_lip_c0, br_lip_c1 = inner_c - hook_lip, inner_c
            hk_vert_c0, hk_vert_c1 = inner_c - hook_lip, inner_c - hook_lip + hook_t
            hk_fold_c0, hk_fold_c1 = inner_c - hook_lip, inner_c - hook_t
        bracket_boxes, hook_boxes = [], []
        for a0, a1 in ha:
            bracket_boxes.append((a0, a1, br_plate_c0, br_plate_c1, plate_z0, plate_z1))
            bracket_boxes.append((a0, a1, br_lip_c0, br_lip_c1, lip_z0, lip_z1))
            hook_boxes.append((a0, a1, hk_vert_c0, hk_vert_c1, hook_vert_z0, hook_vert_z1))
            hook_boxes.append((a0, a1, hk_fold_c0, hk_fold_c1, hook_fold_z0, hook_fold_z1))
        # LiftJoint positive swings the lower edge out, so a bottom hinge
        # uses negative angles: the upper edge and the bin swing out.
        n = 25
        open_rad = math.radians(angle)
        thetas = tuple(-open_rad * i / (n - 1) for i in range(n))
        group = f"{bay.id}-FLIP"
        lift = LiftJoint(group, 0, None, pivot_c, pivot_z, out, thetas)
        peak_z = pivot_z + math.hypot(c_rel, z_top - pivot_z)
        worktop_gap = worktop_z - peak_z
        ca, za = _tilt_point(c_rear, z_top, pivot_c, pivot_z, open_rad, out)
        grips, edge = self._grips(bay, p, zone, "Door", front, None)
        props = dict(
            base,
            Hinge="bottom",
            Grip=f"J {edge}" if edge else None,
            LeafWidth=round((front[1] - front[0]) / 1000.0, 6),
            LeafHeight=round((front[5] - front[4]) / 1000.0, 6),
            Bin="Elletipi Cover Box Small 8 L",
            BinSize=f"{bw:g}x{bd:g}x{bh:g}",
            OpeningAngle=round(angle, 2),
            PeakZ=round(peak_z / 1000.0, 6),
            WorktopClearance=round(worktop_gap / 1000.0, 6),
            ClosedTop=round(z_top / 1000.0, 6),
            PivotZ=round(pivot_z / 1000.0, 6),
            HangStandoff=round(hook_lip / 1000.0, 6),
        )
        self.add(Part(f"{bay.id}-FLIP", "Výklopná dvířka", "Door", [front],
                      lift=lift, grips=grips, props=props), bay)
        self.add(Part(f"{bay.id}-BRACKETS", "Závěsné konzoly koše", "Bracket",
                      bracket_boxes, lift=lift, label="appliance",
                      props={"Zone": zone.index, "Kind": "bracket",
                             "Thickness": round(hook_t / 1000.0, 6),
                             "Lip": round(hook_lip / 1000.0, 6)}), bay)
        self.add(Part(f"{bay.id}-HOOKS", "Háky koše", "Hook",
                      hook_boxes, lift=lift, label="appliance",
                      props={"Zone": zone.index, "Kind": "hook",
                             "Thickness": round(hook_t / 1000.0, 6)}), bay)
        self.add(Part(f"{bay.id}-BIN", "Elletipi Small 8 L", "Bin", bin_boxes,
                      lift=lift, props={"Zone": zone.index, "Kind": "bin",
                                        "Product": "Elletipi PTM SP34 C97 M",
                                        "Volume": 0.008,
                                        "Size": f"{bw:g}x{bd:g}x{bh:g}"}), bay)
        self.run.notes.append(
            f"{bay.id}: flip-out Elletipi Small 8 L {bw:.0f}×{bd:.0f}×{bh:.0f} mm "
            f"(W×D×H), hinge at c {pivot_c:.1f} z {pivot_z:.1f}, opens to {angle:g}°, "
            f"bin closed z {z_bot:.1f}–{z_top:.1f} c {bc0:.1f}–{bc1:.1f} "
            f"(hang stand-off {hook_lip:.0f} mm), rear-rim peak z {peak_z:.1f} "
            f"clears the worktop at {worktop_z:.1f} by {worktop_gap:.1f} mm; "
            f"open rear rim at c {ca:.1f}, z {za:.1f}"
        )

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

    def _stand_mixer(self, ext: dict, bay: Bay, part: Part, body: tuple, faces: str, north_hi: bool,
                     idr: "Drawer", host_id: str):
        """A basic kitchen machine in ``body`` (Petr, 2026-11-23, t889u: the
        Kenwood Chef XL; "proportions and display position should be
        apparent"): a base, a column at the back, a head arm over a bowl,
        and the control / display patch on the side that ``Faces`` names
        (N / S), drawn black (``hob`` label) so it stands out. ``Depth``
        runs column to bowl along the drawer's depth; ``BowlEnd`` (E / W)
        says which end the bowl is. Every piece rides the inner drawer.

        Proportions (guess:, from Kenwood's product photos, not a drawing):
        base 70 high and 85 % of the width; column 33 % of the depth, 72 %
        of the width, full height; head from the column to 25 mm short of
        the bowl end, the top 32 % of the height, 72 % of the width; bowl
        the full width across, centred half a width from the bowl end, from
        the base up to 3 mm under the head; display 90 x 55 on the head's
        side next to the column, 2 proud."""
        a0, a1, c0, c1, z0, z1 = body
        w, d, h = a1 - a0, c1 - c0, z1 - z0
        am = (a0 + a1) / 2.0
        fr = self.run.frame
        east_hi = fr.world(0.0, 1.0, 0.0)[0] > fr.world(0.0, 0.0, 0.0)[0]
        bowl_end = str(_prop(ext, PSET_BUILTIN, "BowlEnd", "E") or "E").upper()
        bowl_hi = (bowl_end == "E") == east_hi

        def span(frm: float, to: float) -> tuple:
            # c range measured from the column (back) end.
            return (c1 - to, c1 - frm) if not bowl_hi else (c0 + frm, c0 + to)

        def across(frac: float) -> tuple:
            return (am - w * frac / 2.0, am + w * frac / 2.0)

        base_h, head_h = 70.0, 0.32 * h
        col = span(0.0, 0.33 * d)
        head = span(0.0, d - 25.0)
        bowl = span(d - w, d)
        boxes = [(*across(0.85), c0, c1, z0, z0 + base_h),
                 (*across(0.72), *col, z0, z1),
                 (*across(0.72), *head, z1 - head_h, z1)]
        part.boxes = boxes
        bowl_box = (a0, a1, *bowl, z0 + base_h - 10.0, z1 - head_h - 3.0)
        side_hi = (faces == "N") == north_hi
        ha0, ha1 = across(0.72)
        da0, da1 = (ha1, ha1 + 2.0) if side_hi else (ha0 - 2.0, ha0)
        disp = (da0, da1, *span(0.33 * d - 100.0, 0.33 * d - 10.0), z1 - head_h + 20.0, z1 - head_h + 75.0)
        for suffix, name, box, label, shape in (
                ("BOWL", "Mísa", bowl_box, "appliance", "cylinder"),
                ("DISPLAY", "Ovládání / displej", disp, "hob", "box")):
            piece = Part(f"{ext['id']}-{suffix}", f"{ext.get('Name') or ext['id']}: {name}", "Appliance", [box],
                         label=label, shape=shape,
                         props={"Bay": bay.id, "InnerDrawer": host_id, "Of": ext["id"]})
            piece.drawer = replace(idr, front=box, box=box, items=[], baseplate=[])
            self.add(piece, bay)

    def _builtin_part(self, ext: dict, bay: Bay, boxes: list, shape: str = "box", props: dict | None = None) -> Part:
        label = "sink" if ext["id"] in self.sanitary else "appliance"
        part = Part(ext["id"], ext.get("Name") or ext["id"], "Appliance", boxes, label=label, shape=shape,
                    props=props or {}, builtin=ext)
        self.run.builtins.append(ext["id"])
        return self.add(part, bay)

    def _sink_fittings(self, bays, zt):
        """Disposers hang under a sink's bowl, taps stand behind it
        (positions and sizes from Pset_BuiltIn). A bowl and a disposer are
        obstacles for any drawer box under them.

        ``HoleOffset`` is the hole centre behind the inner bowl back, not
        the rim. A disposer uses ``Pset_Sink DrainOffsetFromBack`` when
        set (mm from the inner bowl back); otherwise it is centred on the
        bowl (guess:).
        """
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

                # Inner bowl in the bay's c axis: the cut-out sits
                # SINK_CUTOUT_INSET_MM inside the bowl (Teka, and the fallback).
                inset = SINK_CUTOUT_INSET_MM
                bowl_c0 = sink["cutout"].c0 - inset
                bowl_c1 = sink["cutout"].c1 + inset
                bowl_c = (bowl_c0 + bowl_c1) / 2.0
                if kind == "Disposer":
                    d, h = mm("Width"), mm("Height")
                    drain = sink.get("drain_from_back")
                    if drain is None:
                        dc = bowl_c
                    else:
                        dc = (bowl_c1 - drain) if bay.front_low else (bowl_c0 + drain)
                    box = (ca - d / 2, ca + d / 2, dc - d / 2, dc + d / 2, sz0 - h, sz0)
                    part = self._builtin_part(ext, bay, [box], shape="cylinder",
                                              props={"Sink": sink["yaml_id"], "Top": round(sz0 / 1000.0, 6),
                                                     "Bottom": round((sz0 - h) / 1000.0, 6)})
                    bay.obstacles.append((box, part.id))
                elif kind == "Tap":
                    d, h = mm("BodyDiameter", 50.0), mm("Height")
                    reach, spout = mm("SpoutReach"), mm("SpoutHeight")
                    hole = mm("HoleOffset", 40.0)
                    # Behind the inner bowl, away from the bay front.
                    back_c = bowl_c1 + hole if bay.front_low else bowl_c0 - hole
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

    def _decor_panels(self):
        """An integrated appliance's decor front in a niche bay
        (``Pset_Fronts.DecorPanel``: the appliance id): one front on the
        fronts' plane, the bay less the front gaps, as high as the run's
        other fronts, with the run's grip. It drops down about its bottom
        edge (a dishwasher door, guess: the real hinge sits near the
        appliance's foot, not at the panel's edge). Petr, 2026-11-23, t865u:
        "fix the dishwasher, it has to sit flush with the other fronts"; "let
        me open dishwasher"."""
        p = self.p
        run = self.run
        tf, g = p["FrontThickness"], p["FrontGap"] / 2.0
        for bay in run.bays:
            appliance = _prop(bay.element, PSET_FRONTS, "DecorPanel")
            if not bay.niche or not appliance:
                continue
            fronts = [q.boxes[0] if q.drawer is None else q.drawer.front for q in run.parts
                      if q.role in ("Drawer", "PullOut", "Door")]
            if not fronts:
                raise ValueError(f"{bay.id}: DecorPanel needs another front in the run to match")
            z0, z1 = min(b[4] for b in fronts), max(b[5] for b in fronts)
            fc0, fc1 = self.c_range(bay, 0.0, tf)
            box = (bay.a0 + g, bay.a1 - g, fc0, fc1, z0, z1)
            out = -1.0 if bay.front_low else 1.0
            face = fc0 if bay.front_low else fc1
            zone = Zone(0, "front", z1 - z0, z0, z1, {})
            grips, edge = self._grips(bay, p, zone, "DecorPanel", box)
            steps = 8
            lift = LiftJoint(f"{bay.id}-PANEL", 0, None, face, z0, out,
                             tuple(-math.pi / 2 * k / steps for k in range(steps + 1)))
            self.add(Part(f"{bay.id}-PANEL", f"Dekor {appliance}", "DecorPanel", [box], lift=lift, grips=grips,
                          props={"Appliance": str(appliance), "Opens": "down (guess: like the appliance door)",
                                 "Grip": f"J {edge}" if edge else None,
                                 "PanelWidth": round((box[1] - box[0]) / 1000.0, 6),
                                 "PanelHeight": round((z1 - z0) / 1000.0, 6),
                                 # Petr, t866u: the same colour as the other fronts.
                                 "Finish": "same as the other fronts (kitchen cream, matt lacquered MDF)"}), bay)

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
            self._builtin_part(ext, bay, [body], props={
                "Bay": bay.id, "Zone": zi, "NicheClearWidth": round(clear_w / 1000.0, 6),
                "NicheClearHeight": round(clear_h / 1000.0, 6), "NicheClearDepth": round(niche_depth / 1000.0, 6),
                "Elevation": round(nz0 / 1000.0, 6)})
            # The fascia is the appliance door (Petr, 2026-11-23, t865u: "let
            # me open ... oven, microwave"; insides not modelled).
            # ``Pset_BuiltIn.DoorHinge``: Bottom (drops down), L or R (as
            # you face it), from the maker's data sheet.
            hinge = str(_prop(ext, PSET_BUILTIN, "DoorHinge", "Bottom"))
            out = -1.0 if bay.front_low else 1.0
            face = f0 if bay.front_low else f1
            door, lift = None, None
            if hinge == "Bottom":
                steps = 8
                lift = LiftJoint(f"{ext['id']}-DOOR", 0, None, face, fascia[4], out,
                                 tuple(-math.pi / 2 * k / steps for k in range(steps + 1)))
            elif hinge in ("L", "R"):
                door = Leaf(zi, hinge, _hinge_a(bay, hinge, fascia[0], fascia[1]), face, out)
            else:
                raise ValueError(f"{ext['id']}: DoorHinge {hinge!r}, one of Bottom, L, R")
            self.add(Part(f"{ext['id']}-DOOR", f"Dvířka {ext.get('Name') or ext['id']}", "ApplianceDoor",
                          [fascia], label="appliance", door=door, lift=lift,
                          props={"Appliance": ext["id"], "Hinge": hinge}), bay)

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
        a0, a1 = self._flush_span(a0, a1)
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
        top = self.add(Part(f"{run.id}-WORKTOP", "Pracovní deska", "Worktop", [run.worktop],
                      label="worktop", voids=voids, material=material, cuts=cuts))
        self._drip_grooves(top)

    def _floor_ends(self) -> set:
        """``Pset_KitchenRun.EndsToFloor``: compass names of the run ends
        (single rows) whose carcass end side runs down to the floor."""
        v = _prop(self.run.element, PSET_RUN, "EndsToFloor")
        return set(str(v or "").split())

    def _flush_ends(self) -> bool:
        """``Pset_KitchenRun.FlushEnds`` (Petr, 2026-11-22, the west run
        between the pocket doors OP24 / OP25): no cladding outside the bays;
        a carcass end side is the visible end panel and the worktop and
        backsplash stop flush with it. A run end that is a niche (the
        dishwasher slot) has no end side, so it gets one ``BoardThickness``
        panel just outside the niche (``_end_panels``), inside the run's
        span on the wall; the top and backsplash run over it."""
        v = _prop(self.run.element, PSET_RUN, "FlushEnds")
        if v and _prop(self.run.element, PSET_RUN, "CladEnds"):
            raise ValueError(f"{self.run.id}: FlushEnds and CladEnds exclude each other")
        return bool(v)

    def _niche_ends(self) -> list:
        """(direction, edge) of each run end whose end bay is a niche."""
        bays = self.run.bays
        lo, hi = min(bays, key=lambda b: b.a0), max(bays, key=lambda b: b.a1)
        return [(da, b.a0 if da < 0 else b.a1) for da, b in ((-1, lo), (1, hi)) if b.niche]

    def _flush_span(self, a0: float, a1: float) -> tuple[float, float]:
        """``a0``, ``a1`` grown over the ``FlushEnds`` niche end panels."""
        if not self._flush_ends():
            return a0, a1
        t = self.p["BoardThickness"]
        for da, _edge in self._niche_ends():
            if da < 0:
                a0 -= t
            else:
                a1 += t
        return a0, a1

    def _end_panels(self, zb, zt):
        """The ``FlushEnds`` end panel beside an end niche: floor to the
        worktop underside, wall to the fronts' face, ``BoardThickness``
        thick, in the run's end-side material (cream)."""
        run, p = self.run, self.p
        t = p["BoardThickness"]
        for da, edge in self._niche_ends():
            name = self._end_name(da)
            bay = next(b for b in run.bays if _near(b.a0 if da < 0 else b.a1, edge))
            c0, c1 = self.c_range(bay, 0.0, bay.depth)
            a_range = (edge - t, edge) if da < 0 else (edge, edge + t)
            self.add(Part(f"{run.id}-NICHE-END-{name}", f"Bok {name} (u niky)", "EndSide",
                          [(*a_range, c0, c1, zb, zt)], label="cabinet"), bay)

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


    def _hob_vent_plan(self, bay: Bay, z0, z1, back_y, p) -> HobVent | None:
        """A sealed exhaust channel when this bay has a hob and a
        ``Pset_Drawers.NominalLength`` shorter than the longest NL that
        would fill the carcass (Petr, 2026-11-24, t935u–t941u)."""
        hob = self.run.hobs.get(bay.id)
        if hob is None or _prop(bay.element, PSET_DRAWERS, "NominalLength") is None:
            return None
        tf, t = p["FrontThickness"], p["BoardThickness"]
        nl = merivobox_nl(p, back_y - tf, bay.element)
        longest = merivobox_nl(p, back_y - tf, None)
        if nl >= longest - TOL:
            return None
        inner_y = tf + nl + p["MerivoboxDepthClearance"]
        back_t = t
        outer_y = inner_y + back_t
        channel = back_y - outer_y
        if channel < HOB_VENT_CHANNEL_MIN - TOL:
            raise ValueError(
                f"{bay.id}: hob exhaust channel {channel:.1f} mm is under "
                f"{HOB_VENT_CHANNEL_MIN:.0f} (NL {nl:g}, back {back_t:g}; "
                f"a shorter NL or a thinner back is needed)"
            )
        panel_t = float(_prop(bay.element, PSET_HOB, "IntakePanelThickness", 0.012)) * 1000.0
        if panel_t <= 0:
            raise ValueError(f"{bay.id}: IntakePanelThickness must be > 0 when the bay is vented")
        hole_d = float(_prop(bay.element, PSET_HOB, "IntakeHoleDiameter", 0.08)) * 1000.0
        if not (MIELE_INTAKE_HOLE_D[0] - TOL <= hole_d <= MIELE_INTAKE_HOLE_D[1] + TOL):
            raise ValueError(
                f"{bay.id}: IntakeHoleDiameter {hole_d:g} mm is not in Miele's "
                f"{MIELE_INTAKE_HOLE_D[0]:g}–{MIELE_INTAKE_HOLE_D[1]:g} mm"
            )
        vent = HobVent(
            nl=nl, back_t=back_t, channel=channel, inner_y=inner_y, outer_y=outer_y,
            back_y=back_y, cutout_h=MIELE_REAR_CUTOUT_H, cutout_w=MIELE_REAR_CUTOUT_W,
            panel_t=panel_t, hole_d=hole_d,
        )
        self.run.notes.append(
            f"{bay.id}: MERIVOBOX NL {longest:g} → {nl:g}, sealed exhaust channel "
            f"{channel:.0f} mm (moved-forward back {back_t:.0f} mm) to the central back"
        )
        self.run.notes.append(
            f"guess: {bay.id} intake panel {panel_t:.0f} mm compact HPL "
            f"(thickness not confirmed), no gap to the hob underside, holes Ø{hole_d:.0f} "
            f"at Miele X {MIELE_INTAKE_X[0]:g}/{MIELE_INTAKE_X[1]:g}, Y {MIELE_INTAKE_Y:g}"
        )
        self.run.notes.append(
            f"open: {bay.id} how exhaust leaves the island underside "
            f"(outlet / grille / duct / baffle), fillets at the channel turns, "
            f"and back-panel thickness are to be settled with the woodworker"
        )
        return vent

    def _hob_vent_carcass(self, bay: Bay, z0, z1, p, vent: HobVent):
        """Air-intake panel under the hob, and the moved-forward back with
        the Miele rear cut-out, sealing the drawer space from the exhaust
        channel. The carcass bottom already stops at ``vent.outer_y``, so
        the channel opens down into the island underside / plinth void."""
        lo, hi = bay.clear_lo, bay.clear_hi
        tb = p["BottomThickness"] or p["BoardThickness"]
        hob = self.run.hobs[bay.id]
        cut = hob.cutout
        y_front = _prop(bay.element, PSET_HOB, "FrontOffset")
        y_front = (float(y_front) * 1000.0) if y_front is not None else (
            abs((cut.c0 if bay.front_low else cut.c1) - (bay.c0 if bay.front_low else bay.c1))
        )
        mid_a = (cut.a0 + cut.a1) / 2.0
        mid_y = y_front + abs(cut.c1 - cut.c0) / 2.0
        # Panel: no gap to the hob, sealed to the new back, so intake air
        # comes only from the drawer below. Facing the front, X1.1 is to
        # the left (−a) and X2.1 to the right (+a). Y is toward the rear.
        c_p0, c_p1 = self.c_range(bay, y_front, vent.inner_y)
        r = vent.hole_d / 2.0
        hy = mid_y + MIELE_INTAKE_Y
        holes = []
        for sign, x in ((-1, MIELE_INTAKE_X[0]), (1, MIELE_INTAKE_X[1])):
            ha = mid_a + sign * x
            hc0, hc1 = self.c_range(bay, hy - r, hy + r)
            holes.append(Void(ha - r, ha + r, min(hc0, hc1), max(hc0, hc1),
                              radius=r, name=f"intake {x:g}"))
        gap = (MIELE_INTAKE_X[0] + MIELE_INTAKE_X[1]) - vent.hole_d
        if gap < MIELE_INTAKE_HOLE_GAP - TOL:
            raise ValueError(
                f"{bay.id}: intake holes {gap:.0f} mm apart, Miele needs ≥ {MIELE_INTAKE_HOLE_GAP:.0f}"
            )
        self.add(Part(f"{bay.id}-INTAKE", "Air-intake base panel", "Board",
                      [(lo, hi, c_p0, c_p1, hob.underside - vent.panel_t, hob.underside)],
                      voids=holes,
                      props={"Kind": "IntakePanel", "Thickness": round(vent.panel_t / 1000.0, 6),
                             "Guess": True}), bay)
        c_b0, c_b1 = self.c_range(bay, vent.inner_y, vent.outer_y)
        void_c0, void_c1 = min(c_b0, c_b1) - 1.0, max(c_b0, c_b1) + 1.0
        cutout = Void(mid_a - vent.cutout_w / 2.0, mid_a + vent.cutout_w / 2.0,
                      void_c0, void_c1, depth=vent.cutout_h, name="exhaust")
        self.add(Part(f"{bay.id}-BACK", "Záda (exhaust)", "Back",
                      [(lo, hi, c_b0, c_b1, z0 + tb, z1)],
                      voids=[cutout],
                      props={"Kind": "ExhaustBack", "Channel": round(vent.channel / 1000.0, 6)}), bay)

    def _drip_grooves(self, part: Part) -> None:
        """Underside drip grooves (okapnik) along this slab's front overhangs
        (Petr, 2026-11-24, t947u). guess: 5 mm wide × 3 mm deep, centreline
        10 mm in from the edge (half of the 20 mm overhang). Stopped 10 mm
        short of each free end, and of a 45° mitre's inner edge so the
        groove stays on the underside. Where two overhangs meet at a
        corner, the grooves join (one continuous centreline)."""
        if part.role != "Worktop" or not part.boxes:
            return
        # Overhang on the c0 face (a front_low row) and/or the c1 face.
        ov_lo = self._overhang(True) if any(b.front_low for b in self.run.bays) else 0.0
        ov_hi = self._overhang(False) if any(not b.front_low for b in self.run.bays) else 0.0
        width, depth = DRIP_GROOVE_WIDTH, DRIP_GROOVE_DEPTH
        centre, stop = DRIP_GROOVE_CENTRE, DRIP_GROOVE_END_STOP
        # A groove that would run past the front face onto the cabinets is
        # skipped (the overhang is too shallow for this profile).
        need = centre + width / 2.0
        mitre = (self.p["WorktopThickness"] if self._mitred() else 0.0)
        half = width / 2.0
        for box in part.boxes:
            a0, a1, c0, c1, _z0, _z1 = box
            a_lo, a_hi = a0 + mitre + stop, a1 - mitre - stop
            if a_hi - a_lo < width:
                continue
            lo = ov_lo >= need
            hi = ov_hi >= need
            if lo:
                part.voids.append(Void(a_lo, a_hi, c0 + centre - half, c0 + centre + half,
                                       depth=depth, name="drip-groove", underside=True))
            if hi:
                part.voids.append(Void(a_lo, a_hi, c1 - centre - half, c1 - centre + half,
                                       depth=depth, name="drip-groove", underside=True))
            # Opposite long edges do not meet. If a later run grows an end
            # overhang that meets a side overhang, a short corner connector
            # along c would be added here (the a-runs already stop at the
            # same a_lo/a_hi, so they would meet a c-run at the corner).

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
        a0, a1 = self._flush_span(min(b.a0 for b in run.bays), max(b.a1 for b in run.bays))
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



def _tilt_point(c: float, z: float, pivot_c: float, pivot_z: float, angle: float, out: float) -> tuple:
    """A (c, z) point after a bottom-hinged tilt of ``angle`` radians.

    ``angle`` > 0 swings the upper edge towards ``out`` (+1 / −1 in c),
    the opposite of ``LiftJoint``'s sign (which swings the lower edge out).
    """
    sign = -1.0 if out > 0 else 1.0
    dc = (c - pivot_c) * sign
    dz = z - pivot_z
    ca = dc * math.cos(angle) - dz * math.sin(angle)
    za = dc * math.sin(angle) + dz * math.cos(angle)
    return (pivot_c + ca * sign, pivot_z + za)


def _boxes_meet(a, b) -> bool:
    return all(a[2 * i] < b[2 * i + 1] - TOL and b[2 * i] < a[2 * i + 1] - TOL for i in range(3))


DRAWER_KINDS = ("drawer", "pullout")
# gap: a height placeholder with no front or box (a pending drawer).
# No fixed board is inserted next to a gap or between drawers.
ZONE_KINDS = ("drawer", "pullout", "door", "doors", "lift", "flipout", "niche", "front", "dock", "none", "gap")
_NO_BOARD_BETWEEN = DRAWER_KINDS + ("gap",)


def zone_spec(element: dict) -> list[tuple[str, str, dict]]:
    """A bay's bands, top to bottom: ``[(kind, height token, options)]``.

    ``Pset_Fronts.Layout`` is the general form: bands separated by ``|``,
    each ``<kind> <height> [key=value ...]``. The height is metres or ``*``
    (the rest of the carcass, at most one). Kinds:

    - ``drawer``: a drawer (front, box on full-extension slides). Optional
      ``inner=`` (MERIVOBOX side letters, e.g. ``M`` or ``M,K``),
      ``inner_clear=`` (metres of room over the top inner floor),
      ``inner_back=`` (metres, a custom tall back on those inners, guess:
      not a Blum part) and ``wing=evoline`` (folded EVOline Wing on an
      inner that has ``inner_back=``);
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
    - ``flipout``: a bottom-hinged tilt-out front with a trash bin hanging
      from two hook-in brackets on the inside of the front, near the top.
      ``bin=W×D×H`` metres (default the Elletipi Cover Box Small 8 L,
      0.225×0.150×0.340), ``angle=`` the opening stop in degrees (if
      omitted, the minimum that puts the rear rim 8 mm in front of the
      worktop edge), ``clearance=`` metres under the worktop at the peak
      of the swing and past the worktop edge for that expose stop
      (default 0.008). The front rail is omitted so the bin can swing
      through the opening. There is no cradle and no inner shelf;
    - ``niche``: an appliance niche; the height is the *clear* niche height,
      the band adds one board under it; ``clear=`` (metres) narrows the
      opening with a packer on each side. The appliance names the bay and
      the band in its ``Pset_BuiltIn``;
    - ``front``: one plain slab, nothing decided behind it;
    - ``none``: an open band;
    - ``gap``: height only, no front or box. Used to hold a lower
      drawer's band when the drawer above grew (t972u: island D2/D3
      pending). No board is inserted around it; the next drawer's
      ``stack_top`` is the gap's floor so that box does not rise into
      the reserved band.

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


def _front_z0(p: dict, zone: Zone, carcass_z0: float) -> float:
    """Bottom of a decor front, mm. Normally a half-gap above the band.
    On a recessed toe-kick run with ``BottomFrontOverhang`` the lowest
    front hangs that many mm below the carcass floor so it can be opened
    with a foot (Petr, 2026-11-24, t947u)."""
    if p["BottomFrontOverhang"] > 0 and abs(zone.slot_z0 - carcass_z0) < TOL:
        return zone.slot_z0 - p["BottomFrontOverhang"]
    return zone.slot_z0 + p["FrontGap"] / 2.0


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
    """Blum MERIVOBOX side height for a letter (N, M, K, E, F), mm."""
    key = "InnerSide" + str(letter).strip().upper()
    if key not in p:
        raise ValueError(f"unknown Blum side height {letter!r} (N, M, K, E)")
    return p[key]


# Blum planning drawings, "Space requirements in the cabinet" / front
# "min." stack (AU planning guide N p. 6, M p. 8, K p. 12, E high-fronted
# p. 16; catalogue 2024/2025, same drawings, M at p. 257). The lower min.
# is always 54* (covers the cabinet profile); the upper min.** is 31.5 /
# 54 / 92 / 155 (incl. 2 mm tilt). The sums are the space requirement and
# the minimum decor-front height. See kitchen-cabinets.md "MERIVOBOX front
# coverage".
MERIVOBOX_MIN_FRONT = {"N": 85.5, "M": 108.0, "K": 146.0, "E": 209.0}


def merivobox_space_requirement(p: dict, letter: str) -> float:
    """Blum space requirement in the cabinet (mm): profile 15 + side +
    tilt 2 (N 85.5, M 108, K 146, E 209, incl. 2 mm tilt)."""
    return p["MerivoboxProfileBelow"] + inner_side_height(p, letter) + p["MerivoboxTilt"]


def merivobox_min_front(letter: str) -> float:
    """Blum minimum decor-front height (mm) for a standard drawer or
    high-fronted pull-out. Equal to the space requirement (planning
    drawing: min. 54* + the upper min.**). Inner-drawer aluminium front
    pieces are Blum parts with different mins and are not this function."""
    letter = str(letter).strip().upper()
    if letter not in MERIVOBOX_MIN_FRONT:
        raise ValueError(f"unknown Blum side {letter!r} (N, M, K, E)")
    return MERIVOBOX_MIN_FRONT[letter]


def inner_drawers(p: dict, dr: "Drawer", zone_top: float, letters: list, clear: float | None = None) -> list[tuple]:
    """Inner drawer boxes behind one outer front (run frame mm), top first:
    the top one ``InnerTopGap`` under ``zone_top``, the rest spaced evenly
    between it and the outer drawer's box, each the outer box's plan.

    ``clear`` (mm, the band's ``inner_clear=``): the top inner drawer's
    floor sits that far under ``zone_top`` instead, so exactly that much
    room is over it (Petr, 2026-11-23, t883u: the vacuum sealer's drawer
    "just tall enough" for the closed sealer + 30)."""
    a0, a1, c0, c1, _bz0, bz1 = dr.box
    heights = [inner_side_height(p, x) for x in letters]
    top = zone_top - p["InnerTopGap"]
    if clear is not None:
        top = min(top, zone_top - clear - p["BoxBottomThickness"] + heights[0])
    free = top - bz1 - sum(heights)
    if free < 0:
        raise ValueError(f"inner drawers {letters} do not fit over the outer box ({free:.0f} mm short)")
    gap = free / len(heights)  # the same clear height over each drawer below
    need = p["MerivoboxProfileBelow"] + p["MerivoboxTilt"]
    if gap < need - TOL:
        raise ValueError(f"inner drawers {letters}: {gap:.0f} mm between boxes, Blum needs {need:g} "
                         "(profile under the side and tilt over it)")
    out = []
    z = top
    for h in heights:
        out.append((a0, a1, c0, c1, z - h, z))
        z -= h + gap
    return out


# Blum MERIVOBOX, catalogue 2024/25 pp. 252-279 (kitchen-cabinets.md "Drawers:
# Blum MERIVOBOX"). Nominal lengths NL per drawer side height: N 400-550,
# M 270-600, K 300-600, E (M sides + gallery / BOXCOVER / BOXCAP) 270-600;
# 70 kg profiles NL 450-600. F (256) is Blum NZ/AU only: NL 270-550.
MERIVOBOX_NL = (270.0, 300.0, 350.0, 400.0, 450.0, 500.0, 550.0, 600.0)  # Blum nominal lengths
MERIVOBOX_NL_BY_SIDE = {
    "N": (400.0, 450.0, 500.0, 550.0),
    "M": MERIVOBOX_NL,
    "K": MERIVOBOX_NL[1:],
    "E": MERIVOBOX_NL,
    "F": MERIVOBOX_NL[:-1],
}
MERIVOBOX_70KG_NL = (450.0, 500.0, 550.0, 600.0)

# Miele KM 8665 FL air-intake-optimised base panel and rear cut-out
# (installation manual, en-GB M.-Nr. 12 985 350, pp. 19–20). X and Y are
# from the cut-out centre; Y is toward the rear. Safety distances under
# the panel (variant 3, no intermediate shelf) are ≥ 5 mm to a drawer
# upper edge and ≥ 75 mm to a drawer base. The modelled MinDrawerGap may
# be tighter. The outlet path and fillets are not modelled (open: woodworker).
MIELE_INTAKE_HOLE_D = (60.0, 80.0)
MIELE_INTAKE_X = (78.0, 210.0)  # X1.1, X2.1; left, right facing the front
MIELE_INTAKE_Y = 138.0
MIELE_INTAKE_HOLE_GAP = 15.0
MIELE_REAR_CUTOUT_H = 45.0
MIELE_REAR_CUTOUT_W = 550.0
HOB_VENT_CHANNEL_MIN = 50.0
# Drawer sides tallest first, for picking the tallest box a band can take.
# F is left out: it is not in Blum's European catalogue.
MERIVOBOX_AUTO_SIDES = ("E", "K", "M", "N")


def drawer_system(element: dict) -> str:
    """Every drawer is Blum ``MERIVOBOX`` (Petr, 2026-11-23, t835u). The
    IKEA MAXIMERA assumption is gone; ``Pset_Drawers.System`` may only say
    MERIVOBOX."""
    v = str(_prop(element, PSET_DRAWERS, "System", "MERIVOBOX")).upper()
    if v != "MERIVOBOX":
        raise ValueError(f"{element['id']}: Pset_Drawers.System is MERIVOBOX (the only drawer system), got {v}")
    return v


def merivobox_nl(p: dict, side_depth: float, element: dict | None = None) -> float:
    """The bay's Blum MERIVOBOX nominal length: ``Pset_Drawers.NominalLength``
    (metres) if set, else the longest NL that fits (Blum: inside cabinet
    depth >= NL + 3). Raises when the set one does not fit."""
    want = _prop(element, PSET_DRAWERS, "NominalLength") if element is not None else None
    if want is not None:
        nl = float(want) * 1000.0
        if all(abs(nl - x) > TOL for x in MERIVOBOX_NL):
            raise ValueError(f"{element['id']}: MERIVOBOX NominalLength {nl:g} is not a Blum length {MERIVOBOX_NL}")
        if nl + p["MerivoboxDepthClearance"] > side_depth + TOL:
            raise ValueError(f"{element['id']}: MERIVOBOX NL {nl:g} needs {nl + p['MerivoboxDepthClearance']:g} "
                             f"inside depth, the cabinet has {side_depth:g}")
        return nl
    fits = [nl for nl in MERIVOBOX_NL if nl + p["MerivoboxDepthClearance"] <= side_depth + TOL]
    if not fits:
        raise ValueError(f"no MERIVOBOX nominal length fits {side_depth:.0f} mm")
    return fits[-1]


def merivobox_side(p: dict, kind: str, room: float, nl: float, want: str | None = None) -> str:
    """The drawer side letter for one band: ``want`` (the band's ``box=``) if
    given, else for a pull-out E, else the tallest of E, K, M, N whose Blum
    space requirement (profile 15 + side + tilt 2) fits ``room`` and that is
    made in ``nl``; if none fits, the lowest side made in ``nl``. That
    fallback is not Blum's front-coverage rule (min. front = space
    requirement); hanging boxes are listed, not a reason to shrink the
    front, see kitchen-cabinets.md "MERIVOBOX front coverage"."""
    if want:
        letter = str(want).strip().upper()
        if nl not in MERIVOBOX_NL_BY_SIDE.get(letter, ()):
            raise ValueError(f"MERIVOBOX side {letter} is not made in NL {nl:g} (Blum)")
        return letter
    if kind == "pullout":
        return "E"
    made = [x for x in MERIVOBOX_AUTO_SIDES if nl in MERIVOBOX_NL_BY_SIDE[x]]
    for letter in made:
        need = merivobox_space_requirement(p, letter)
        if need <= room + TOL:
            return letter
    return made[-1]


def merivobox_load(p: dict, kind: str, letter: str, inner_w: float, nl: float) -> int:
    """40 or 70 kg profile. Petr, 2026-11-23 (t895u): 70 kg wherever Blum
    makes it (NL 450-600, any box height, outer or inner), else 40 kg."""
    return 70 if any(abs(nl - x) <= TOL for x in MERIVOBOX_70KG_NL) else 40


def merivobox_profile_article(load: int, nl: float) -> str:
    """Blum MERIVOBOX BLUMOTION cabinet profile pair (left/right): 450.xxx1B
    for 40 kg, 453.xxx1B for 70 kg (NL 450-600 only), e.g. 453.5001B for NL
    500 (MERIVOBOX ordering information, "Cabinet profile left/right")."""
    return f"{450 if load == 40 else 453}.{int(round(nl))}1B"


def merivobox_cabinet_profile_boxes(p: dict, bay: "Bay", nl: float, profile_z: float,
                                    sides: tuple = ("L", "R")) -> dict:
    """Simple boxes for the Blum cabinet profile (the runner), fixed to the
    carcass. Official: length NL, underside ``profile_z`` = box bottom minus
    ``MerivoboxProfileBelow`` (15 mm). Inward width and the drawn height are
    guess: (see those parameters). ``L`` is the low-a cabinet side
    (``clear_lo``), ``R`` the high-a side."""
    tf = p["FrontThickness"]
    width, height = p["MerivoboxProfileWidth"], p["MerivoboxProfileHeight"]
    c0, c1 = _Builder.c_range(bay, tf, tf + nl)
    z0, z1 = profile_z, profile_z + height
    out = {}
    if "L" in sides:
        out["L"] = (bay.clear_lo, bay.clear_lo + width, c0, c1, z0, z1)
    if "R" in sides:
        out["R"] = (bay.clear_hi - width, bay.clear_hi, c0, c1, z0, z1)
    return out


def evoline_wing_boxes(p: dict, bay: "Bay", box: tuple, back_height: float, out: float,
                       back_y: float) -> tuple[list, list]:
    """EVOline Wing in the closed (folded) position, simple boxes.

    Official sizes (data sheet 08/2025): arm 378 × 17 mm in plan, wood
    adapter overall 121 mm below the upper edge of the drawer, cabinet
    triangle 70 mm tall with a 41 mm (13+28) base, wood bracket 23 mm in
    plan. The drawer-side adapter width and exactly where the folded arm
    sits across the back are guess:. The custom back is wood, so the wood
    adapter figures are used; the 170 mm back was sized from the 126 mm
    metal hang (it still clears 121 + 42).

    Returns (boxes that ride with the drawer, boxes fixed to the carcass).
    """
    wall = p["BoxWall"]
    a0, a1, c0, c1, z0, _z1 = box
    back_top = z0 + back_height
    hang = p["EvolineWingWoodHang"]
    arm_t = p["EvolineWingArmThickness"]
    arm_l = p["EvolineWingArmLength"]
    br_h, br_base = p["EvolineWingBracketHeight"], p["EvolineWingBracketBase"]
    ad_w, ad_h = p["EvolineWingAdapterWidth"], p["EvolineWingAdapterHeight"]
    back_lo = out > 0  # back is at the low-c end
    back_face = c0 if back_lo else c1  # outer face of the back, toward the carcass back
    into = -1.0 if back_lo else 1.0  # from the back face toward the carcass back
    carcass_back = sum(_Builder.c_range(bay, back_y, back_y)) / 2.0  # inner face
    gap_lo, gap_hi = sorted((back_face, carcass_back))

    def in_gap(face, thick):
        c_a, c_b = sorted((face, face + into * thick))
        return (max(c_a, gap_lo), min(c_b, gap_hi))

    # Adapter on the outer face of the tall back, at the upper edge, on the
    # low-a side (the same side as the cabinet bracket).
    side_a = a0 + wall
    ad_c0, ad_c1 = in_gap(back_face, arm_t)
    adapter = (side_a, side_a + ad_w, ad_c0, ad_c1, max(z0, back_top - ad_h), back_top)

    # Folded arm in the rear gap, along the back, 17 mm in plan, hanging
    # 121 mm below the back's upper edge (wood adapter).
    arm_a0, arm_a1 = side_a, side_a + arm_l
    if arm_a1 > a1 - wall + TOL:
        arm_a1 = a1 - wall
        arm_a0 = max(a0 + wall, arm_a1 - arm_l)
    arm_c0, arm_c1 = in_gap(back_face, arm_t)
    arm = (arm_a0, arm_a1, arm_c0, arm_c1, back_top - hang, back_top)

    # Cabinet triangle on the low-a carcass side, in the rear corner, above
    # the runner, inside the hang band. Thickness against the side is
    # guess: (uses the drawn profile width). Base 41 mm from the carcass
    # back toward the drawer.
    pw = p["MerivoboxProfileWidth"]
    br_a0, br_a1 = bay.clear_lo, bay.clear_lo + pw
    toward = 1.0 if back_lo else -1.0  # from carcass back into the cabinet
    br_c0, br_c1 = sorted((carcass_back, carcass_back + toward * br_base))
    br_c0, br_c1 = max(br_c0, gap_lo), min(br_c1, gap_hi)
    # Conservative runner-zone top is 42 mm above the box bottom (Blum N
    # p. 10: min. 54 from the profile underside, underside 12 mm below the
    # side; kitchen-cabinets.md t988u).
    runner_top = z0 + 42.0
    br_z0 = max(back_top - hang, runner_top)
    br_z1 = br_z0 + br_h
    if br_z1 > back_top + TOL:
        br_z1 = back_top
        br_z0 = br_z1 - br_h
    bracket = (br_a0, br_a1, br_c0, br_c1, br_z0, br_z1)
    return [adapter], [arm, bracket]



def drawer_inside(bay: Bay, p: dict, back_y: float) -> tuple[float, float]:
    """Drawer inside width and depth (mm), Blum MERIVOBOX: LW − 51 by
    NL − 26 − 16 (see ``IKEA_DEFAULTS_MM``)."""
    nl = merivobox_nl(p, back_y - p["FrontThickness"], bay.element)
    return (bay.clear_width - p["MerivoboxWidthDeduction"],
            nl - p["MerivoboxBaseDeduction"] - p["MerivoboxBackThickness"])


def drawer_box_length(bay: Bay, p: dict, back_y: float) -> float:
    """The drawn drawer box's length (mm), back of the decor front to the
    box back: Blum inside plus the back wall, plus a box front panel if
    there is one. After t795u the main drawer has no front panel
    (``BoxFrontPanel`` 0); adding a second ``BoxWall`` here used to leave
    a 19 mm phantom cavity behind the Gridfinity (visible slack 57 mm in
    an NL 500 drawer that Blum's inside of 458 cannot use; Petr t978u)."""
    _w, inner_d = drawer_inside(bay, p, back_y)
    return inner_d + p["BoxWall"] + p["BoxFrontPanel"]


def gridfinity_main(element: dict) -> bool:
    """``Pset_Drawers.GridfinityMain`` (default true): false keeps the
    baseplate out of a main drawer that carries inner drawers (they get it)."""
    v = _prop(element, PSET_DRAWERS, "GridfinityMain", True)
    return v is True or str(v).lower() == "true"


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
            on_board: bool = False, stack_top: float | None = None) -> Drawer:
    """One Blum MERIVOBOX drawer or pull-out in its band, from the clear
    opening (mm).

    The box (sides, back and base ``BoxWall`` / ``BoxBottomThickness``,
    closed at the front by the decor front itself) is ``drawer_box_length``
    long, centred in the opening, full extension (travel = box length). Its
    side letter comes from ``merivobox_side``. Vertically, the cabinet
    profile sits on the band's floor (the carcass bottom or a board for the
    lowest band) and takes ``MerivoboxProfileBelow`` under the side and
    ``MerivoboxTilt`` over it (Blum's space requirement: the box base is
    then 15 mm above a minimum-height front's lower edge). When that would
    reach the top rail, the hob limit or the profile of the drawer above
    (``stack_top``), the box moves down instead (``Drawer.drop``): metal
    sides cannot be trimmed. A drop that puts the box below the decor front
    is not a Blum recommendation; it happens only when the front is shorter
    than ``merivobox_min_front`` (listed in kitchen-cabinets.md "MERIVOBOX
    front coverage", agreed fronts not silently grown).
    """
    if zone.opts.get("frame"):
        return _frame_pullout(bay, p, zone, number, back_y, obstacles, carcass_z0, on_board)
    tf, wall = p["FrontThickness"], p["BoxWall"]
    inner_w, inner_d = drawer_inside(bay, p, back_y)
    if inner_w <= 0 or inner_d <= 0:
        raise ValueError(f"{bay.id}: no room for a drawer ({inner_w} × {inner_d})")
    nl = merivobox_nl(p, back_y - tf, bay.element)
    length = drawer_box_length(bay, p, back_y)
    has_inner = bool(str(zone.opts.get("inner", "")).strip())
    # Gridfinity: in the main drawer unless it carries inner drawers (then in
    # those; Petr, t795u: "for the island east side, we want gridfinity on
    # the inner drawer, the bottom main one doesnt need gridfinity").
    grid_here = (zone.kind == "drawer" and wants_gridfinity(bay.element)
                 and not (has_inner and not gridfinity_main(bay.element)))
    g = p["FrontGap"] / 2.0
    out_dir = -1.0 if bay.front_low else 1.0
    fc0, fc1 = _Builder.c_range(bay, 0.0, tf)
    front = (bay.a0 + g, bay.a1 - g, fc0, fc1, _front_z0(p, zone, carcass_z0), zone.slot_z1 - g)
    lowest = abs(zone.slot_z0 - carcass_z0) < TOL
    # The profile stands on the carcass bottom or a fixed board under the
    # band (a dock); a band higher up starts on its own bottom line.
    floor0 = zone.slot_z0 + (p["BoardThickness"] if lowest or on_board else 0.0)
    roof = zone.slot_z1
    for lim in (top_limit, ceiling):
        if lim is not None:
            roof = min(roof, lim)
    letter = merivobox_side(p, zone.kind, roof - floor0, nl, zone.opts.get("box"))
    box_h = inner_side_height(p, letter)
    below, tilt = p["MerivoboxProfileBelow"], p["MerivoboxTilt"]
    bz0 = floor0 + below
    limit, why = None, ""
    for lim, name in ((top_limit, "rail"), (ceiling, "hob"), (stack_top, "drawer above")):
        if lim is not None and (limit is None or lim < limit):
            limit, why = lim, name
    drop = 0.0
    if limit is not None and bz0 + box_h + tilt > limit + TOL:
        drop = bz0 + box_h + tilt - limit
        bz0 -= drop
    if bz0 - below < carcass_z0 + p["BoardThickness"] - TOL:
        raise ValueError(f"{bay.id}: MERIVOBOX {letter} drawer {number} under the {why} does not fit "
                         f"over the carcass bottom ({carcass_z0 + p['BoardThickness'] - bz0 + below:.0f} mm short)")
    mid = (bay.clear_lo + bay.clear_hi) / 2.0
    half = inner_w / 2.0 + wall
    bc0, bc1 = _Builder.c_range(bay, tf, tf + length)
    box = (mid - half, mid + half, bc0, bc1, bz0, bz0 + box_h)
    for obox, top, oid in obstacles:
        if _plan_meet(box, obox) and box[5] > top + TOL:
            raise ValueError(f"{bay.id}: MERIVOBOX {letter} drawer {number} (top {box[5]:.0f}) runs into {oid} "
                             f"(bottom {top:.0f}); pick a lower side with box=")
    floor_z = bz0 + p["BoxBottomThickness"]
    item_top = zone.slot_z1 - g - p["BoxHeightReserve"]
    items = _items(p, zone, box, out_dir, item_top, floor_z)
    twin = None
    if zone.opts.get("twin"):
        # Blum SPACE TWIN (MERIVOBOX, narrow cabinets KB 150-250, catalogue
        # 2024/25 pp. 282-283): one front carries two standard MERIVOBOX boxes,
        # each on one cabinet profile, diagonally offset (lower box on the
        # left profile, upper box on the right, as drawn on p. 283). The low
        # box is this drawer's own (box=); the upper one (twin=) sits as high
        # as the band allows (guess:, Blum gives installation heights X, not
        # the upper box position).
        up = str(zone.opts["twin"]).strip().upper()
        uh = inner_side_height(p, up)
        utop = (limit if limit is not None else roof) - tilt
        uz0 = utop - uh
        if uz0 - below < box[5] + tilt - TOL:
            raise ValueError(f"{bay.id}: SPACE TWIN {letter} + {up} do not fit one above the other "
                             f"({box[5] + tilt - uz0 + below:.0f} mm short)")
        ubox = (box[0], box[1], box[2], box[3], uz0, utop)
        back_lo = out_dir > 0
        uback = (ubox[0], ubox[1], ubox[2], ubox[2] + wall, uz0, utop) if back_lo else \
            (ubox[0], ubox[1], ubox[3] - wall, ubox[3], uz0, utop)
        items = items + [(ubox[0], ubox[1], ubox[2], ubox[3], uz0, uz0 + p["BoxBottomThickness"]),
                         (ubox[0], ubox[0] + wall, ubox[2], ubox[3], uz0, utop),
                         (ubox[1] - wall, ubox[1], ubox[2], ubox[3], uz0, utop), uback]
        twin = {"side": up, "box": ubox, "profile_z": uz0 - below, "lower_profile": "left",
                "upper_profile": "right", "floor_z": uz0 + p["BoxBottomThickness"]}
    grid = None
    if grid_here:
        n, _sw = gridfinity_cells(p, inner_w)
        m, _sd = gridfinity_cells(p, inner_d)
        grid = (n, m)
        # Snapped to the drawer front (Petr, 2026-11-23, t835u: "snapped to
        # the front of the drawer"); the slack in depth is at the back.
        f0 = tf + p["BoxFrontPanel"]  # the inside starts at the back of the front
        ic0, ic1 = _Builder.c_range(bay, f0, f0 + m * p["GridfinityPitch"])
        baseplate = gridfinity_baseplate(p, n, m, mid, (ic0 + ic1) / 2.0, floor_z)
        items = items + baseplate
    else:
        baseplate = []
    return Drawer(number, zone.content, zone.nominal, zone.slot_z0, front, box, length, out_dir, 0.0,
                  kind=zone.kind, items=items, zone=zone.index,
                  inside=(inner_w, inner_d, box[5] - floor_z), floor_z=floor_z, grid=grid,
                  baseplate=baseplate, side=letter, nl=nl,
                  load=p["SpaceTwinLoad"] if twin else merivobox_load(p, zone.kind, letter, inner_w, nl), drop=drop,
                  profile_z=bz0 - below, twin=twin)


def _frame_pullout(bay: Bay, p: dict, zone: Zone, number: int, back_y: float, obstacles: list,
                   carcass_z0: float, on_board: bool) -> Drawer:
    """A pull-out that hangs bins by their rims in an MDF plate (Petr,
    2026-11-23, t842u): ``frame=u bin=WxDxH n=2`` (metres, the bin's outer
    size with its rim). No side walls and no back panel (Petr, t866u): the
    plate ``FrameBoard`` thick runs on Blum MOVENTO 760H runners (concealed,
    BLUMOTION S, manual opening) screwed under its edge strips, with one
    hole per bin (outer size less ``FrameHoleInset`` a side), the outer
    holes against the edge strips, and a notch open to the back round the
    disposer so the frame slides past it. The bins hang free below the
    plate. A small block under each arm's back end takes the runner's rear
    hook (guess:), and two 90° steel angles inside tie the plate to the
    decor front (guess:).

    The runner is the shortest MOVENTO NL whose travel (= NL, guess:) takes
    the bins ``FrameLiftClearance`` in front of the worktop edge, so they
    lift straight up. The plate sits so the bin tops stay
    ``FrameTopClearance`` under the lowest obstacle over them (the bowl)."""
    tf, t = p["FrontThickness"], p["BoardThickness"]
    fb, fs, inset = p["FrameBoard"], p["FrameSide"], p["FrameHoleInset"]
    bw, bd, bh = (float(v) * 1000.0 for v in str(zone.opts.get("bin", "0.29x0.38x0.55")).lower().split("x"))
    n = int(zone.opts.get("n", 2))
    out_dir = -1.0 if bay.front_low else 1.0
    g = p["FrontGap"] / 2.0
    fc0, fc1 = _Builder.c_range(bay, 0.0, tf)
    front = (bay.a0 + g, bay.a1 - g, fc0, fc1, _front_z0(p, zone, carcass_z0), zone.slot_z1 - g)
    depth = back_y - tf
    # Bins: offsets behind the carcass front (the decor front's back is tf).
    hole0 = tf + p["FrameFrontStrip"]
    rim_back = hole0 - inset + bd
    need = rim_back + p["WorktopOverhang"] + p["FrameLiftClearance"]
    fit = [nl for nl in MOVENTO_NL if nl + 3.0 <= depth + TOL and nl - 10.0 >= rim_back - tf + p["FrameBack"]]
    nl = next((x for x in fit if x >= need - TOL), None)
    if nl is None:
        raise ValueError(f"{bay.id}: no MOVENTO length takes the bins past the worktop edge (needs {need:.0f})")
    skl = nl - 10.0
    lift = nl - rim_back - p["WorktopOverhang"]  # bins' back edge in front of the worktop edge, pulled out
    # Across: SKW = LW - 42 between the sides, centred in the opening.
    lw = bay.clear_hi - bay.clear_lo
    skw = lw - 42.0
    mid = (bay.clear_lo + bay.clear_hi) / 2.0
    ia0, ia1 = mid - skw / 2.0, mid + skw / 2.0
    hw, hd = bw - 2 * inset, bd - 2 * inset
    if n != 2:
        raise ValueError(f"{bay.id}: frame=u takes two bins, one each side of the disposer")
    holes_a = [(ia0, ia0 + hw), (ia1 - hw, ia1)]
    # The disposer (or whatever hangs lowest between the holes).
    disp = [(ob, top, oid) for ob, top, oid in obstacles if ob[5] - ob[4] > 50.0 and ob[1] - ob[0] < 300.0]
    if not disp:
        raise ValueError(f"{bay.id}: frame=u needs a disposer to go round")
    dbox = disp[0][0]
    nc = p["FrameNotchClearance"]
    notch_a = (dbox[0] - nc, dbox[1] + nc)
    strip_l, strip_r = notch_a[0] - holes_a[0][1], holes_a[1][0] - notch_a[1]
    if min(strip_l, strip_r) < -TOL:
        raise ValueError(f"{bay.id}: the bin holes run into the disposer notch ({min(strip_l, strip_r):.1f} mm)")
    dc = sorted(dbox[2:4])
    d_front = min(abs(dc[0] - _Builder.c_range(bay, 0.0, 0.0)[0]), abs(dc[1] - _Builder.c_range(bay, 0.0, 0.0)[0]))
    notch_front = d_front - nc
    # Heights: the plate under the bowl, the bins hanging from it.
    floor0 = zone.slot_z0 + (t if abs(zone.slot_z0 - carcass_z0) < TOL or on_board else 0.0)
    bins_plan = [(a0 - inset, a1 + inset) for a0, a1 in holes_a]
    bc = sorted(_Builder.c_range(bay, hole0 - inset, rim_back))
    over = [ob[4] for ob, _top, _oid in obstacles
            if any(_plan_meet((a0, a1, bc[0], bc[1], 0, 0), ob) for a0, a1 in bins_plan)]
    roof = min(over) if over else zone.slot_z1 - g
    # Petr, 2026-11-23 (t849u): the bins hang FrameFloorGap over the carcass
    # bottom; the plate follows. Their lids must stay FrameTopClearance
    # under the lowest obstacle over them (the bowl).
    bin_bottom = floor0 + p["FrameFloorGap"]
    plate_top = bin_bottom + (bh - p["BinRim"])
    floor_gap = bin_bottom - floor0
    if plate_top + p["BinRim"] > roof - p["FrameTopClearance"] + TOL:
        raise ValueError(f"{bay.id}: hanging bins' lids reach the bowl ({roof - plate_top - p['BinRim']:.0f} mm)")
    pz0 = plate_top - fb
    runner_z0 = pz0 - p["FrameRunnerBelow"]

    def cr(o0, o1):
        return _Builder.c_range(bay, o0, o1)

    f0, f1 = tf, tf + skl
    h0, h1 = hole0, hole0 + hd
    items = [
        # Rear hook blocks under the arms' back ends (no side walls, no back panel).
        (ia0 - fs, ia0, *cr(f1 - p["FrameBack"], f1), pz0 - p["FrameBackHeight"], pz0),
        (ia1, ia1 + fs, *cr(f1 - p["FrameBack"], f1), pz0 - p["FrameBackHeight"], pz0),
        # The U plate: front band, the bridge between the holes in front of
        # the notch, the strips over the sides, beside the notch, behind the holes.
        (ia0 - fs, ia1 + fs, *cr(f0, h0), pz0, plate_top),
        (holes_a[0][1], holes_a[1][0], *cr(h0, notch_front), pz0, plate_top),
        (ia0 - fs, ia0, *cr(h0, h1), pz0, plate_top),
        (ia1, ia1 + fs, *cr(h0, h1), pz0, plate_top),
        (holes_a[0][1], notch_a[0], *cr(notch_front, f1), pz0, plate_top),
        (notch_a[1], holes_a[1][0], *cr(notch_front, f1), pz0, plate_top),
        (ia0 - fs, notch_a[0], *cr(h1, f1), pz0, plate_top),
        (notch_a[1], ia1 + fs, *cr(h1, f1), pz0, plate_top),
    ]
    # Two 90° angles on the bridge between the bins, front to plate (Petr,
    # t866u: "for front panel rigidity").
    bl, bwid, bt = p["FrameBracket"], p["FrameBracketWidth"], p["FrameBracketThick"]
    bmid = (holes_a[0][1] + holes_a[1][0]) / 2.0
    for a0 in (bmid - 40.0 - bwid, bmid + 40.0):
        items.append((a0, a0 + bwid, *cr(f0, f0 + bl), plate_top, plate_top + bt))  # leg on the plate
        items.append((a0, a0 + bwid, *cr(f0, f0 + bt), plate_top, plate_top + bl))  # leg on the front
    items = [b for b in items if b[1] - b[0] > TOL and abs(b[3] - b[2]) > TOL and b[5] - b[4] > TOL]
    taper = p["BinTaper"]
    bins = []
    for a0, a1 in bins_plan:
        bins.append((a0, a1, *bc, plate_top, plate_top + p["BinRim"]))  # rim and lid on the plate
        bins.append((a0 + taper, a1 - taper, *cr(hole0 - inset + taper, rim_back - taper), bin_bottom, plate_top))
    box = (ia0 - fs, ia1 + fs, *cr(f0, f1), bin_bottom, plate_top + p["BinRim"])
    frame = dict(nl=nl, skl=skl, skw=skw, lw=lw, plate_top=plate_top, plate=fb, bin_bottom=bin_bottom,
                 floor_gap=floor_gap, roof=roof, top_gap=roof - plate_top, lid_gap=roof - plate_top - p["BinRim"],
                 hole=(hw, hd), strip=(strip_l, strip_r), notch=notch_a, notch_front=notch_front,
                 notch_clear=nc, lift=lift, front_strip=p["FrameFrontStrip"], back_strip=skl - (h1 - tf),
                 bins=bins, holes=[(a0, a1, *cr(h0, h1)) for a0, a1 in holes_a],
                 runner_z0=runner_z0, brackets=2, bracket=(bl, bwid, bt))
    return Drawer(number, zone.content, zone.nominal, zone.slot_z0, front, box, nl, out_dir, 0.0,
                  kind=zone.kind, items=items + bins, zone=zone.index,
                  inside=(skw, skl, plate_top - bin_bottom), floor_z=pz0, side="", nl=nl, load=40,
                  profile_z=runner_z0, frame=frame)


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


def _items(p: dict, zone: Zone, box: tuple, out_dir: float, item_top: float | None = None,
           floor_z: float | None = None) -> list:
    """Baskets (shelves) or bins riding in a pull-out box (run frame mm).

    ``items=shelves n=N``: N boards spread evenly from the box floor up to
    ``item_top`` (the front less ``BoxHeightReserve``; guess:, they stand for
    inner pull-outs or a rack behind the tall front, since a MERIVOBOX box
    stops at its E side). ``items=bins n=N``: N equal bins over the inside
    width up to ``item_top`` (guess:), or with ``bin=WxDxH`` (metres) N bins
    of that real size standing on the floor, front against the decor front,
    the outer two against the box sides and the rest spread evenly between.
    """
    kind = zone.opts.get("items")
    n = int(zone.opts.get("n", 0))
    if not kind or n <= 0:
        return []
    wall = p["BoxWall"]
    a0, a1, c0, c1, z0, z1 = box
    ia0, ia1 = a0 + wall, a1 - wall
    iz0 = floor_z if floor_z is not None else z0 + p["BoxBottomThickness"]
    top = item_top if item_top is not None else z1
    # The decor front closes the box: the inside runs from the box's front
    # end to its back wall.
    if out_dir < 0:  # pulls toward -c: the front end is c0
        ic_front, ic_back = c0, c1 - wall
    else:
        ic_front, ic_back = c1, c0 + wall
    ic0, ic1 = sorted((ic_front, ic_back))
    out = []
    if kind == "shelves":
        board = wall
        if zone.opts.get("at") is not None and n == 1:
            # ``at=`` metres over the box floor (t870u: SF-T3's oven-tray
            # shelf on the E box's top edge).
            z = iz0 + float(zone.opts["at"]) * 1000.0
            return [(ia0, ia1, ic0, ic1, z, z + board)]
        step = (top - iz0 - n * board) / (n + 1)
        for k in range(n):
            z = iz0 + step * (k + 1) + board * k
            out.append((ia0, ia1, ic0, ic1, z, z + board))
        return out
    if kind == "bins":
        size = zone.opts.get("bin")
        if size:
            bw, bd, bh = (float(v) * 1000.0 for v in str(size).lower().split("x"))
            if n * bw > ia1 - ia0 + TOL or bd > ic1 - ic0 + TOL:
                raise ValueError(f"{n} bins {bw:g} x {bd:g} do not fit the {ia1 - ia0:g} x {ic1 - ic0:g} inside")
            step = (ia1 - ia0 - bw) / (n - 1) if n > 1 else 0.0
            for k in range(n):
                x0 = ia0 + k * step if n > 1 else (ia0 + ia1 - bw) / 2.0
                d0, d1 = sorted((ic_front, ic_front - out_dir * bd))
                out.append((x0, x0 + bw, d0, d1, iz0, iz0 + bh))
            return out
        gap = p["BinGap"]
        w = (ia1 - ia0 - (n + 1) * gap) / n
        for k in range(n):
            x0 = ia0 + gap + k * (w + gap)
            out.append((x0, x0 + w, ic0 + gap, ic1 - gap, iz0, top))
        return out
    raise ValueError(f"pull-out items={kind!r}: shelves or bins")


def bin_clearance(dr: "Drawer", obstacles: list) -> tuple[float, float]:
    """Smallest gaps (mm) between a pull-out's bins and the things hanging
    into the bay (a sink bowl, a disposer), drawer closed: beside them in
    plan where the heights overlap (``side``), and from a bin top up to an
    obstacle's bottom where they overlap in plan (``top``). The drawer
    slides along c, so a bin beside a disposer stays beside it."""
    side, top = math.inf, math.inf
    for it in dr.items:
        for box, _oid in obstacles:
            plan = _plan_meet(it, box)
            if plan:
                top = min(top, box[4] - it[5])
            elif it[4] < box[5] and box[4] < it[5]:
                # beside it: the gap across the sliding direction
                side = min(side, max(box[0] - it[1], it[0] - box[1]))
    return (side if side < math.inf else 0.0, top if top < math.inf else 0.0)


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
    edge (guess:, within reach). Pull-outs and an integrated dishwasher's
    decor panel: the top edge too (Petr, 2026-11-23, t865u: "same J grip
    everywhere"). Fixed fronts, fillers, lift-ups: none unless asked."""
    opt = zone.opts.get("grip")
    if opt:
        return str(opt).lower()
    z0, z1 = box[4], box[5]
    if role in ("Drawer", "PullOut", "DecorPanel"):
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
    """Front plus the box (bottom, two sides, back; a box front board only
    when ``BoxFrontPanel`` > 0), run frame, then anything riding in it
    (baskets, bins, a Gridfinity baseplate). The decor front closes the box."""
    if dr.frame:  # hanging-bin frame: its pieces are the items
        return [dr.front, *dr.items]
    wall, fp = p["BoxWall"], p["BoxFrontPanel"]
    a0, a1, c0, c1, z0, z1 = dr.box
    back_lo = dr.out > 0  # pulls toward +c, so its back is the c0 end
    back = (a0, a1, c0, c0 + wall, z0, z1) if back_lo else (a0, a1, c1 - wall, c1, z0, z1)
    out = [
        dr.front,
        (a0, a1, c0, c1, z0, z0 + p["BoxBottomThickness"]),
        (a0, a0 + wall, c0, c1, z0, z1),
        (a1 - wall, a1, c0, c1, z0, z1),
    ]
    if fp > 0:
        out.append((a0, a1, c1 - fp, c1, z0, z1) if back_lo else (a0, a1, c0, c0 + fp, z0, z1))
    return [*out, back, *dr.items]


def inner_drawer_boxes(p: dict, box: tuple, out: float, back_height: float | None = None) -> list:
    """An inner drawer: its low front piece (full side height, at the pull
    end), bottom, two sides and back, run frame mm. Blum's front piece is a
    steel profile; drawn ``BoxWall`` thick like the outer box. ``back_height``
    (mm), if set, is a custom tall back from the box bottom, taller than the
    sides (Petr t991u: 170 mm on the appliance inners so the EVOline Wing
    sits above the runner; guess: not a Blum part, the woodworker builds it)."""
    wall = p["BoxWall"]
    a0, a1, c0, c1, z0, z1 = box
    front_lo = out < 0  # pulls toward -c: its front piece is at c0
    lo_wall = (a0, a1, c0, c0 + wall, z0, z1)
    hi_wall = (a0, a1, c1 - wall, c1, z0, z1)
    front, back = (lo_wall, hi_wall) if front_lo else (hi_wall, lo_wall)
    bz1 = z0 + back_height if back_height is not None else z1
    back = (back[0], back[1], back[2], back[3], z0, bz1)
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
        # mm from the inner bowl back to the drain centre, or None to hang
        # the disposer on the bowl centre (guess:).
        "drain_from_back": m("DrainOffsetFromBack"),
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
