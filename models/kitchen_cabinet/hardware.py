"""Hardware constants for kitchen cabinet runs.

IKEA METOD carcass defaults, Blum MERIVOBOX and AVENTOS catalogue values,
Miele hob-vent cut-outs, property-set names, and other numeric facts.
Sources: docs/design/kitchen-cabinets.md.
"""
from __future__ import annotations

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
    # Bottom-edge grips drop the straight stem (kind="u" in grip_profile):
    # the same crest and bowl, opening at the edge as an uneven U
    # (Petr, 2026-11-27, t1013u; docs/design/sources/VoxtorpUGripPhoto.jpg).

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
    # Full-height pull-out back panel (``tall_back=rail``): the board stops
    # this far under the top rail underside so the drawer can still slide
    # out (t1017u). Not in the Blum cutting list; guess:.
    "TallBackClearance": 3.0,
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

# Underside drip groove (okapnik) along a worktop front overhang
# (Petr, 2026-11-24, t947u). guess: 5 mm wide × 3 mm deep; centreline
# 10 mm in from the edge (half of the 20 mm overhang); stopped 10 mm
# short of each free end (and of a 45° mitre's inner edge).
DRIP_GROOVE_WIDTH = 5.0
DRIP_GROOVE_DEPTH = 3.0
DRIP_GROOVE_CENTRE = 10.0
DRIP_GROOVE_END_STOP = 10.0

DRAWER_KINDS = ("drawer", "pullout")

# gap: a height placeholder with no front or box (a pending drawer).
# No fixed board is inserted next to a gap or between drawers.
ZONE_KINDS = ("drawer", "pullout", "door", "doors", "lift", "flipout", "niche", "front", "dock", "none", "gap")
_NO_BOARD_BETWEEN = DRAWER_KINDS + ("gap",)

# Blum planning drawings, "Space requirements in the cabinet" / front
# "min." stack (AU planning guide N p. 6, M p. 8, K p. 12, E high-fronted
# p. 16; catalogue 2024/2025, same drawings, M at p. 257). The lower min.
# is always 54* (covers the cabinet profile); the upper min.** is 31.5 /
# 54 / 92 / 155 (incl. 2 mm tilt). The sums are the space requirement and
# the minimum decor-front height. See kitchen-cabinets.md "MERIVOBOX front
# coverage".
MERIVOBOX_MIN_FRONT = {"N": 85.5, "M": 108.0, "K": 146.0, "E": 209.0}

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

BAY_LISTS = ("systemFurniture", "furniture")
EXTERNAL_LISTS = ("electricAppliances", "sanitaryTerminals")
