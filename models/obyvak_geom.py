"""Shared Obývák 1.02 parameters and 2D sketch helpers (mm).

World:
  X = eave ↔ eave (room_width), Y = living gable ↔ kitchen gable (room_length), Z up.
  The living gable is Y=0 (one sliding door, 450 mm trap). The kitchen gable
  is Y=L (two sliding doors, 190 mm trap).

2D drawings sit in Plane.XZ for the orthographic exporter:
  section X = transverse, elevation X = longitudinal (world Y).
3D (`models/obyvak.py`) extrudes section profiles along Y and gable profiles along Y
(thickness) / X (span).

Šikminy stack (interior → attic; thicknesses ⊥ to the face unless noted):

  StoSilent Top Finish + Top Basic + NaturHeld 140 (80)     → `slope_naturheld_140`
  Internal StoSilent corners (slope-to-slope false ridge, slope-to-gable,
  slope-to-soffit where the face is plastered) are a tape-cut separation
  joint, not acrylic on the finish. Plaster the first side into the corner
  and let it dry. Stick Sto-Stuckband or painter's tape on that face along
  the corner, overlapping a few millimetres into the corner. Plaster the
  second side over the overlap. While the coat is fresh, and at the latest
  before the final coat, cut along the corner at a flat angle and pull the
  tape off with the plaster that stuck to it. The result is a thin straight
  separation line. At the gable walls the alternative is a StoSilent Profile
  AP 210 shadow gap. Confirm with the plasterer and Sto technical support
  for a NaturHeld substrate.
  Sources: https://ausschreiben.de/catalog/sto/catalogItem/6079e2c2-0eed-4176-91b9-86fc2bbf2fc9
  and https://stoprod.e-spirit.cloud/cepcom/at/documents/broschueren/A_VAR_StoSilent-Direct_0221.pdf
  GKF/RF 12.5                                               → `slope_gkf`
  CD Rigips 60×27 @ 500 ⊥ krokvím                          → `slope_cd`
  Jutafol N AL 170 Speciál vapour barrier (~1)               → `slope_foil`
  přímý závěs 200 on the window slope (void 140)            → `slope_direct_hanger`
  Nonius horní 440 on the cabinet slope (gap ~429)          → `slope_nonius`
  Knauf Unifit 035: void below krokve + bays between them  → `plenum_wool`
  krokve 100/160 @ ~875                                     → `rafters`
  6× táhlo ø14 mezi pozednicemi, každé druhé pole,
  270 mm od bližšího líce krokve                            → `tie_rod`
  5 dvojic bodovek na šikminu, mezi táhly                   → `slope_light`
  zavětrovací pásky 40×2 @ 45° X across krokve (racking)    → `racking_strap`
  (střešní latě / kontralatě above rafters stay in roofing)

The 80 mm board is screwed through the GKF into the CD. Foil sits on the
attic side of the CD (below the mineral wool), matching the rest of the
house (Jutafol N AL 170 Speciál — not a variable membrane). There is no slope lať
and no NaturHeld Flex. CD spacing is 500 mm: Knauf D112 for 12.5 mm GKF
in one or two layers, boards across the CDs. 2000, 2500 and 3000 mm boards
then end on a CD. The first axis stays within 100 mm of the eave.

Right eave soffit box: 40 mm NaturHeld 140 + StoSilent on the side and the
bottom, mineral wool in the cavity, a CD/UD rost (@500) hanging the box.
The wool stops short of the ducts. Three Ø160 spiral ducts (HRV supply, HRV
extract, AC) sit in a 2-over-1 pack against the cabinet eave, below the lid
and above the column heads. They are already anchored to the wall; this box
does not hang them. The GKF lid is raised so its top is flush with the
pozednice and its cut end meets the plate cheek — above the wall head, not
on the plaster. The lid widens until the slope GKF, cut level, lands on it.
The nearest slope CD carries that slope edge. An angle on the end of that CD
holds a horizontal UD, and the lid edge screws into the UD. The lid CD is
the only horizontal rail and the only Nonius row.
No vertical riser. Furniture and the wall plate do
not carry the box (the plate only fixes the board edge). The soffit CD
studs hang from that CD and brace into a UD on the eave wall. There is no
timber in the kastlík frame. CAD ids are zone-prefixed so
the viewer can toggle / fade slopes, soffit, and bass traps independently.
"""

from __future__ import annotations

import math
from dataclasses import dataclass

from build123d import Edge, Face, Vector, Wire

# CAD / viewer part labels (stable machine ids; display names live in viewer i18n).
# --- Shell (roof + walls + floor) ---
LABEL_FLOOR = "floor"
LABEL_MASONRY = "masonry"
LABEL_EPS = "eps"
LABEL_PLASTER = "plaster"
LABEL_WALL_PLATE = "wall_plate"
LABEL_RAFTERS = "rafters"
LABEL_ROOFING = "roofing"
LABEL_PLENUM_WOOL = "plenum_wool"
LABEL_RACKING_STRAP = "racking_strap"
LABEL_TIE_ROD = "tie_rod"
LABEL_SLOPE_LIGHT = "slope_light"
# Pair of spots on the room face. The pair centre is this far vertically
# above the tie axis; the two heads are this far apart along the slope.
TIE_LIGHT_ABOVE = 120.0
TIE_LIGHT_PAIR = 140.0
TIE_LIGHT_D = 70.0
TIE_LIGHT_H = 28.0
LABEL_POCKET_FRAME = "pocket_frame"
LABEL_WALL_GKF = "wall_gkf"
LABEL_GLAZING = "glazing"
# --- Slopes (šikminy) ---
LABEL_SLOPE_NH = "slope_naturheld_140"
LABEL_SLOPE_GKF = "slope_gkf"
LABEL_SLOPE_CD = "slope_cd"
LABEL_SLOPE_FOIL = "slope_foil"
LABEL_EAVE_UD = "eave_ud"
LABEL_VB_TAPE = "vapour_brake_tape"
LABEL_EAVE_ACRYLIC = "eave_acrylic"
LABEL_SLOPE_DIRECT = "slope_direct_hanger"
LABEL_SLOPE_NONIUS = "slope_nonius"
# --- Soffit (podhled) ---
LABEL_SOFFIT_NH = "soffit_naturheld_140"
LABEL_SOFFIT_WOOL = "soffit_mineral_wool"
LABEL_SOFFIT_GKF = "soffit_gkf"
LABEL_SOFFIT_GKB = "soffit_gkb"
LABEL_SOFFIT_CD = "soffit_cd"
LABEL_SOFFIT_UD = "soffit_ud"
LABEL_SOFFIT_NONIUS = "soffit_nonius"
LABEL_SOFFIT_DUCT = "soffit_duct"
# --- Bass traps ---
LABEL_BASS_WOOL = "bass_mineral_wool"
LABEL_BASS_GKB = "bass_gkb"
LABEL_BASS_CW = "bass_cw"
LABEL_BASS_UW = "bass_uw"
LABEL_BASS_STRUT = "bass_strut"
LABEL_BASS_ANGLE = "bass_angle"
LABEL_BASS_ANCHOR = "bass_anchor"
LABEL_BASS_TAPE = "bass_tape"
LABEL_BASS_ACRYLIC = "bass_acrylic"
# --- Furniture ---
LABEL_FURNITURE = "furniture"

# Nested Parts outline (ids only; viewer localizes group/leaf labels).
PART_GROUPS = [
    {
        "id": "shell",
        "children": [
            LABEL_FLOOR,
            LABEL_MASONRY,
            LABEL_EPS,
            LABEL_PLASTER,
            LABEL_WALL_PLATE,
            LABEL_TIE_ROD,
            LABEL_RAFTERS,
            LABEL_ROOFING,
            LABEL_PLENUM_WOOL,
            LABEL_RACKING_STRAP,
            LABEL_POCKET_FRAME,
            LABEL_WALL_GKF,
            LABEL_GLAZING,
        ],
    },
    {
        "id": "slopes",
        "children": [
            LABEL_SLOPE_NH,
            LABEL_SLOPE_LIGHT,
            LABEL_SLOPE_GKF,
            LABEL_SLOPE_CD,
            LABEL_SLOPE_FOIL,
            LABEL_EAVE_UD,
            LABEL_VB_TAPE,
            LABEL_EAVE_ACRYLIC,
            LABEL_SLOPE_DIRECT,
            LABEL_SLOPE_NONIUS,
        ],
    },
    {
        "id": "soffit",
        "children": [
            LABEL_SOFFIT_NH,
            LABEL_SOFFIT_WOOL,
            LABEL_SOFFIT_GKF,
            LABEL_SOFFIT_GKB,
            LABEL_SOFFIT_CD,
            LABEL_SOFFIT_UD,
            "joint_screw",
            LABEL_SOFFIT_NONIUS,
            LABEL_SOFFIT_DUCT,
        ],
    },
    {
        "id": "bass_traps",
        "children": [
            LABEL_BASS_WOOL,
            LABEL_BASS_GKB,
            LABEL_BASS_CW,
            LABEL_BASS_UW,
            LABEL_BASS_STRUT,
            LABEL_BASS_ANGLE,
            LABEL_BASS_ANCHOR,
            LABEL_BASS_TAPE,
            LABEL_BASS_ACRYLIC,
        ],
    },
    {
        "id": "furniture",
        "children": [LABEL_FURNITURE],
    },
]


@dataclass(frozen=True)
class ObyvakParams:
    """Room and build-up thicknesses. Layer stack keeps H_START / Z_SOFFIT honest."""

    room_width: float = 5350.0
    room_length: float = 11100.0
    # Raised so rafter underside sits on pozednice top at plate mid-X (40° pack unchanged).
    ridge_z: float = 6057.6
    eave_wall_z: float = 3200.0
    # Ring-beam course under pozednice (drawn as masonry); columns stop below it.
    venec_h: float = 250.0
    roof_angle_deg: float = 40.0
    furniture_width: float = 450.0
    furniture_height: float = 2450.0
    furniture_gap: float = 20.0
    wall_mason: float = 250.0
    wall_eps: float = 200.0
    wall_plaster: float = 15.0
    plate_w: float = 140.0
    plate_h: float = 100.0
    # Terrace-glass jakl (drawn as masonry) — in front of glass, pier centres.
    window_column_size: float = 100.0
    # Concrete columns stand in front of the cabinet eave (room side), 300×300.
    furn_column_size: float = 300.0
    rafter_t: float = 160.0
    cd_t: float = 27.0
    finish_t: float = 2.0
    basic_t: float = 2.0
    # Slope boards. Screwed through the GKF into the CD. No slope lať, no Flex.
    # Both slopes are 100 mm. The left (window) side is the tight one: its
    # under-rafter wool is fixed at 160 mm and sets the shared room-face height.
    naturheld_left: float = 100.0
    naturheld_right: float = 100.0
    wool_below_left: float = 160.0
    # Soffit side face only (NH + StoSilent). It butts the slope board at X_FURN.
    soffit_naturheld_t: float = 40.0
    # Soffit underside over the cabinets: plain GKB (furniture covers it anyway).
    soffit_bottom_t: float = 12.5
    foil_t: float = 1.0
    sdk_t: float = 12.5
    # Road side (right, cabinet) slope: 2× GKF for road noise. Left stays 1×.
    # The room face does not move; the right CD plane moves 12.5 mm up.
    sdk_layers_right: int = 2
    # Soffit lid: one GKF under the plate top plus layers stacked on the attic side.
    soffit_lid_layers: int = 2
    vent_t: float = 40.0
    dhv_t: float = 1.0
    counter_batten_t: float = 40.0
    batten_t: float = 40.0
    tile_t: float = 22.0
    floor_t: float = 150.0
    # Past outer EPS face — just enough for a gutter.
    roof_overhang: float = 80.0
    predstena_kitchen: float = 190.0
    predstena_living: float = 450.0
    predstena_bottom_z: float = 2450.0
    # Bass-trap stacks — wall → room. Depths stay 190 / 450.
    # Wool is against the wall. The air is the sealed cavity the CW stands in.
    # Kitchen air is 47 mm; a CW 50 stud is 50 mm, so each stud notches 3 mm
    # into the wool. The bay between studs stays 47 mm. Living air is 137.5 mm;
    # CW 125 is the deepest standard profile that fits, with 12.5 mm of air
    # left between the wool face and the back of the stud.
    bass_k_wool: float = 130.5
    bass_k_air: float = 47.0
    bass_k_gkb: float = 12.5
    bass_k_cw: float = 50.0
    # Living 450: GKB 12.5 + vzduch 137.5 + MW 300.
    bass_l_gkb: float = 12.5
    bass_l_air: float = 137.5
    bass_l_wool: float = 300.0
    bass_l_cw: float = 125.0
    # Both gables: vertical CW @ 625, 1250 mm boards spanning two bays.
    bass_stud_spacing: float = 625.0
    bass_cw_w: float = 50.0
    bass_uw_flange: float = 40.0
    bass_tape_t: float = 2.0
    bass_acrylic: float = 3.0
    bass_strut_h: float = 40.0
    bass_strut_max_step: float = 1200.0
    bass_board_w: float = 1250.0
    # 2750 mm sheets cover the peak (about 2626 mm above 2450) with no horizontal joint.
    bass_board_l: float = 2750.0
    pouzdro_d: float = 120.0
    pocket_door_h: float = 2450.0
    # Clearance from the cabinet eave (X=room_width) to the far-gable opening at x=3700.
    pocket_spiz_inset: float = 650.0
    # (gable, x0, width). Openings stay put. The gable with two doors is the
    # kitchen and carries the 190 mm trap; the gable with one door is the
    # living room and carries the 450 mm trap.
    # Y=0 (living): one opening, window corner, x=0, 1000 mm.
    # Y=L (kitchen): window corner x=0, 1100 mm, and cabinet-eave x=3700, 1000 mm.
    pocket_doors: tuple[tuple[str, float, float], ...] = (
        ("living", 0.0, 1000.0),  # one door · window corner · living gable Y=0
        ("kitchen", 3700.0, 1000.0),  # kitchen gable Y=L · 5350 − 650 − 1000
        ("kitchen", 0.0, 1100.0),  # kitchen gable Y=L · window corner
    )
    # Window wall (X=0, opposite cabinets): 2× HS 2500 + fixed 4500, h=2500 (D.1.1.03).
    window_h: float = 2500.0
    # (y0, width) along Y from kitchen→living; ~200 mm piers between bays.
    eave_windows: tuple[tuple[float, float], ...] = (
        (550.0, 2500.0),  # HS portal · living gable (Y=0, one sliding door)
        (3250.0, 4500.0),  # velké fixní / posuvné sklo
        (7950.0, 2500.0),  # HS portal · kitchen gable (Y=L, two sliding doors)
    )
    glass_t: float = 20.0
    # Y grid of the kastlík CD studs. The section is CD 60×27, not a timber lať.
    # Same 500 mm module as the slope CDs (12.5 mm board across the profiles).
    rost_spacing: float = 500.0
    rost_first_inset: float = 90.0
    # CD grid holding SDK — ⊥ krokvím. UD is the wall channel the soffit CDs enter.
    # 500 mm: Knauf D112 max for 12.5 mm GKF, one or two layers, boards across the CDs.
    cd_w: float = 60.0
    cd_spacing: float = 500.0
    # Axis of the first CD from the room face. Knauf perimeter offset is ≤ 100 mm.
    cd_first_inset: float = 90.0
    ud_w: float = 28.0
    # Rafters (spacing along Y) + bracing straps on underside.
    rafter_w: float = 100.0
    rafter_spacing: float = 875.0
    rafter_first_inset: float = 200.0
    # Sheet note "6× táhlo ø14 z pozednice". The bar is in every other rafter
    # bay, this far clear of the nearer (living-gable) rafter face.
    tie_d: float = 14.0
    tie_face_clear: float = 270.0
    strap_w: float = 40.0
    strap_t: float = 2.0
    hanger_w: float = 20.0
    # Short drop hangers: horizontal CD → soffit top rail (through GKF).
    soffit_drop_w: float = 20.0
    soffit_drop_t: float = 2.0
    # Bare spiral ducts in the soffit void (HRV + AC). OD is the metal pipe.
    # Pack is 2-over-1 against the cabinet plaster; gaps are what the 386 mm
    # bay behind the NH face can actually give.
    duct_od: float = 160.0
    duct_gap: float = 5.0
    duct_wall_gap: float = 6.0
    duct_lid_gap: float = 10.0
    # Wall angle brackets at the eave (rear support only — not the hang point).
    wall_bracket_leg: float = 80.0
    wall_bracket_t: float = 3.0
    ridge_runout: float = 200.0

    def __post_init__(self) -> None:
        assert abs(self.bass_k_wool + self.bass_k_air + self.bass_k_gkb - self.predstena_kitchen) < 1e-9
        assert abs(self.bass_l_gkb + self.bass_l_air + self.bass_l_wool - self.predstena_living) < 1e-9
        assert self.bass_k_cw <= self.bass_k_wool + self.bass_k_air
        assert self.bass_l_cw <= self.bass_l_air


class ObyvakLayout:
    """Derived measures — same formulas as the legacy ezdxf sheets."""

    def __init__(self, p: ObyvakParams):
        self.p = p
        th = math.radians(p.roof_angle_deg)
        self.sin = math.sin(th)
        self.cos = math.cos(th)
        self.tan = math.tan(th)

        # StoSilent + NaturHeld. Right board is what the soffit butts.
        ss = p.finish_t + p.basic_t
        self.t_nh_left = ss + p.naturheld_left
        self.t_nh_right = ss + p.naturheld_right
        self.t_nh_face = self.t_nh_right
        self.t_soffit_face = ss + p.soffit_naturheld_t
        # Underside is GKB only; the soffit cavity starts above it.
        self.t_soffit_bottom = p.soffit_bottom_t
        # Foil is attic-side of the CD (below mineral wool), not between NH and GKF.
        # t_flex_pack stays 0 — NH screws through GKF straight into CD.
        self.t_flex_pack = 0.0
        self.t_gkf_room_left = self.t_nh_left + self.t_flex_pack
        self.t_gkf_room_right = self.t_nh_right + self.t_flex_pack
        self.t_gkf_attic_left = self.t_gkf_room_left + p.sdk_t
        self.t_gkf_right = p.sdk_t * p.sdk_layers_right
        self.t_gkf_attic_right = self.t_gkf_room_right + self.t_gkf_right
        # Attic face of the first (room-side) right layer.
        self.t_gkf_mid_right = self.t_gkf_room_right + p.sdk_t
        self.t_cd_outer_left = self.t_gkf_attic_left + p.cd_t
        self.t_cd_outer_right = self.t_gkf_attic_right + p.cd_t
        self.t_foil_outer_left = self.t_cd_outer_left + p.foil_t
        self.t_foil_outer_right = self.t_cd_outer_right + p.foil_t
        # Aliases used by callers that mean the right (cabinet) stack.
        self.t_soft_below_sdk = self.t_gkf_attic_right
        self.t_cd_outer = self.t_cd_outer_right
        self.t_foil_inner = self.t_cd_outer_right
        self.t_foil_outer = self.t_foil_outer_right
        self.t_extra = p.furniture_width * self.sin
        self.t_above_raf = (
            p.vent_t + p.dhv_t + p.counter_batten_t + p.batten_t + p.tile_t
        )

        self.x_ridge = p.room_width / 2.0
        self.x_furn = p.room_width - p.furniture_width
        self.x_false = (p.room_width - p.furniture_width) / 2.0
        # Thicker right NaturHeld: the attic-side planes meet this far past the
        # false ridge. Room faces still meet at x_false. Same shift for GKF, CD, foil.
        self.x_stack_joint = self.x_false + (self.t_nh_right - self.t_nh_left) / (2.0 * self.sin)
        # The CD, foil and wool planes meet further right: the right side also
        # carries the second GKF layer. The outer layer is bevelled to this line.
        self.x_cd_joint = self.x_false + (
            self.t_gkf_attic_right - self.t_gkf_attic_left
        ) / (2.0 * self.sin)
        self.z_raf_inner_ridge = p.ridge_z - (self.t_above_raf + p.rafter_t) / self.cos
        self.z_nabeh_bot = p.furniture_height + p.furniture_gap
        # Soffit lid is fixed on the pozednice, not on the šikmina datum.
        self.z_plate_top = p.eave_wall_z + p.plate_h
        self.z_soffit_lid = self.z_plate_top - p.sdk_t
        # Fixed soffit CD, on the lid, just behind the vertical board.
        self.x_nh_outer = self.x_furn
        self.x_nh_inner = self.x_furn + self.t_soffit_face
        self.x_sdk_break = self.x_nh_inner
        # Lid CD centred over the vertical soffit CD (27 deep behind the NH face).
        self.x_soffit_cd = self.x_nh_inner + p.cd_t * 0.5
        self.x_soffit_cd_room = self.x_soffit_cd - p.cd_w * 0.5
        # Lid pack grows up (attic side): bottom layer stays at the plate top,
        # the extra layers sit above it. The soffit CD sits on the pack.
        self.t_lid = p.sdk_t * p.soffit_lid_layers
        self.z_soffit_cd_bot = self.z_soffit_lid + self.t_lid
        self.z_soffit_cd_top = self.z_soffit_cd_bot + p.cd_t
        self.joint_gap = 0.0
        # Shared room-face height. The left stack is the tight one: StoSilent,
        # NaturHeld, one GKF, the CD, the vapour brake and 160 mm of wool have
        # to fit under the rafter at the window eave. Both slopes use this height.
        z_raf_0 = self.z_raf_inner_ridge - self.x_ridge * self.tan
        t_left_target = self.t_foil_outer_left + p.wool_below_left
        self.h_start = z_raf_0 - t_left_target / self.cos
        self.z_false = self.h_start + self.x_false * self.tan
        self.z_gkf_horiz = self.h_start
        self.z_soffit = self.h_start + self.x_ridge * self.tan
        # Available depth, room face → rafter underside, perpendicular.
        self.t_left = (self.z_raf(0.0) - self.h_start) * self.cos
        self.t_right = self.t_left + self.t_extra
        self.wool_left = self.t_left - self.t_foil_outer_left
        self.wool_right = self.t_right - self.t_foil_outer_right
        self.l_hanger_left = self.wool_left
        self.l_hanger_right = self.wool_right
        self.z_raf_top = self.z_raf_inner_ridge + p.rafter_t / self.cos
        # Right eave. The lid stays on the pozednice. The lowered slope meets
        # that lid further into the room, so the lid board gets wider and the
        # slope GKF is cut level on the lid top. The lid CD stays over the
        # vertical soffit CD; the joint cantilevers past it.
        z_lid_top = self.z_soffit_cd_bot
        self.joint_anchor = (self.x_soffit_cd_room, z_lid_top)

        def _hit(t: float) -> tuple[float, float]:
            return (self.x_false + (self.z_false + t / self.cos - z_lid_top) / self.tan, z_lid_top)

        self.gkf_end_room = _hit(self.t_gkf_room_right)
        self.gkf_end_mid = _hit(self.t_gkf_mid_right)
        self.gkf_end_attic = _hit(self.t_gkf_attic_right)
        # Lid room edge: the slope's room face, where the two boards meet.
        self.x_gkf_kink = self.gkf_end_room[0]
        # Cantilever from the lid CD's room face to that joint.
        self.joint_overhang = self.x_soffit_cd_room - self.x_gkf_kink

        self.xl_eps = -p.wall_plaster - p.wall_mason - p.wall_eps
        self.xl_mas = -p.wall_plaster - p.wall_mason
        self.xr_int = p.room_width
        self.xr_mas = p.room_width + p.wall_plaster + p.wall_mason
        self.xr_eps = p.room_width + p.wall_plaster + p.wall_mason + p.wall_eps
        self.left_eave = self.xl_eps - p.roof_overhang
        self.right_eave = self.xr_eps + p.roof_overhang
        # Pozednice centred on the věnec / masonry thickness (not flush to the room face).
        self.poz_l0 = self.xl_mas + p.wall_mason * 0.5 - p.plate_w * 0.5
        self.poz_r0 = self.xr_int + p.wall_plaster + p.wall_mason * 0.5 - p.plate_w * 0.5
        # Left eave. The lining now meets the wall below the crown. The GKF
        # ends tight on a UD screwed to the plaster; NaturHeld ends on the
        # plaster too. Wool above the brake fills back up to the plate.
        self.x_plate_cheek_l = self.poz_l0 + p.plate_w
        self.x_eave_ud_l = 0.0
        self.x_gkf_end_l = 1.2  # just clear of the UD web
        self.x_nh_end_l = 3.0  # acrylic bead in the corner
        self.z_eave_ud_l = self.plane_z(self.x_gkf_end_l, self.t_gkf_room_left, right=False)
        # Tape the brake to the plaster a short way below the foil.
        self.z_vb_bond_l = self.plane_z(self.x_gkf_end_l, self.t_foil_outer_left, right=False) - 40.0

        # Elevation X is world Y. Y=0 is the deep living trap; Y=L is the shallow kitchen trap.
        self.x_pred_l = p.predstena_living
        self.x_pred_r = p.room_length - p.predstena_kitchen

        self.yl_eps = -p.wall_plaster - p.wall_mason - p.wall_eps
        self.yl_mas = -p.wall_plaster - p.wall_mason
        self.yr_int = p.room_length
        self.yr_mas = p.room_length + p.wall_plaster + p.wall_mason
        self.yr_eps = self.yr_mas + p.wall_eps
        self.y_pred_l = p.predstena_living
        self.y_pred_r = p.room_length - p.predstena_kitchen
        self.y_roof0 = self.yl_eps - p.ridge_runout
        self.y_roof1 = self.yr_eps + p.ridge_runout
        # Cabinet/soffit run is not on either 2D sheet; default = clear span between gable predstěny.
        self.y_furn0 = self.y_pred_l
        self.y_furn1 = self.y_pred_r

        self.zle_tile = self.z_tile(0.0) - (0.0 - self.left_eave) * self.tan
        self.zre_tile = self.z_tile(p.room_width) - (self.right_eave - p.room_width) * self.tan
        # Underside of ring-beam course / top of columns (pozednice sits on eave_wall_z).
        self.column_top_z = p.eave_wall_z - p.venec_h

    def eave_column_y_centres(self) -> list[float]:
        """Y centres of the two structural columns (gaps between glazed bays)."""
        return [(y0 + y1) * 0.5 for y0, y1 in self.eave_pier_spans()]

    def eave_pier_spans(self) -> list[tuple[float, float]]:
        """Y spans between eave_windows (pier / column stations)."""
        wins = sorted(self.p.eave_windows, key=lambda w: w[0])
        spans: list[tuple[float, float]] = []
        for i in range(len(wins) - 1):
            y0 = wins[i][0] + wins[i][1]
            y1 = wins[i + 1][0]
            if y1 > y0:
                spans.append((y0, y1))
        return spans

    def eave_masonry_end_spans(self, y0: float, y1: float) -> list[tuple[float, float]]:
        """Y spans of solid eave masonry outside the glazed bays (not the columns)."""
        wins = sorted(self.p.eave_windows, key=lambda w: w[0])
        if not wins:
            return [(y0, y1)]
        spans: list[tuple[float, float]] = []
        first0 = wins[0][0]
        if first0 > y0:
            spans.append((y0, first0))
        last1 = wins[-1][0] + wins[-1][1]
        if y1 > last1:
            spans.append((last1, y1))
        return spans

    def z_raf(self, x: float) -> float:
        return self.z_raf_inner_ridge - abs(x - self.x_ridge) * self.tan

    def z_raf_outer(self, x: float) -> float:
        return self.z_raf(x) + self.p.rafter_t / self.cos

    def z_tile(self, x: float) -> float:
        return self.z_raf(x) + (self.t_above_raf + self.p.rafter_t) / self.cos

    def z_gable_top(self, x: float) -> float:
        """Gable masonry top: 40° rake, 3200 at both eaves, peak at ridge."""
        x_c = min(max(x, 0.0), self.p.room_width)
        return self.p.eave_wall_z + (self.x_ridge - abs(x_c - self.x_ridge)) * self.tan

    def z_ceil(self, x: float) -> float:
        """Interior soffit from panel A (false ridge, then horizontal over cabinets)."""
        if x <= self.x_false:
            return self.h_start + max(x, 0.0) * self.tan
        if x >= self.x_furn:
            return self.z_gkf_horiz
        t = (x - self.x_false) / (self.x_furn - self.x_false)
        return self.z_false + t * (self.z_gkf_horiz - self.z_false)

    def z_slope_offset(self, x: float, t_perp: float) -> float:
        """Vertical Z of a surface parallel to the šikmina, t_perp above the room face."""
        return self.z_ceil(x) + t_perp / self.cos

    def plane_z(self, x: float, t: float, *, right: bool) -> float:
        """Z of a plane parallel to one slope, extended through the false ridge.

        ``right`` is the cabinet slope. The two planes of a given offset meet
        at ``x_stack_joint`` when the right board is the thicker one.
        """
        if right:
            return self.z_false - (x - self.x_false) * self.tan + t / self.cos
        return self.h_start + x * self.tan + t / self.cos

    def z_slope_plane_offset(self, x: float, t_perp: float) -> float:
        """Parallel offset on the right-slope plane, continued past X_FURN for GKF.

        The slope board breaks at the furniture line. GKF follows this plane
        into the soffit bay so the membrane can meet the lid.
        """
        if x <= self.x_furn:
            return self.z_slope_offset(x, t_perp)
        z_room = self.z_gkf_horiz - (x - self.x_furn) * self.tan
        return z_room + t_perp / self.cos

    def ceil_pts(self) -> list[tuple[float, float]]:
        p = self.p
        return [
            (0.0, self.h_start),
            (self.x_false, self.z_false),
            (self.x_furn, self.z_gkf_horiz),
            (p.room_width, self.z_gkf_horiz),
        ]

    def _sikmina_xs(self, x_stop: float | None = None) -> list[float]:
        """Break points of the room-face polyline. `x_stop` ends the right slope early."""
        if x_stop is None or x_stop >= self.x_furn - 1.0:
            return [0.0, self.x_false, self.x_furn]
        return [0.0, self.x_false, x_stop]

    def _sikmina_sdk_xs(self) -> list[float]:
        """Slope GKF ends where its underside meets the soffit lid."""
        return [0.0, self.x_false, self.x_gkf_kink]

    def _slope_band_pts(
        self, t0: float, t1: float, x_stop: float | None = None
    ) -> list[tuple[float, float]]:
        """Closed XZ band on the šikminy between two parallel offsets."""
        xs = self._sikmina_xs(x_stop)
        inner = [(x, self.z_slope_offset(x, t0)) for x in xs]
        outer = [(x, self.z_slope_offset(x, t1)) for x in xs]
        return inner + list(reversed(outer))

    def _slope_sdk_band_pts(self, t0: float, t1: float) -> list[tuple[float, float]]:
        """GKF band on the slope plane, square-ended where it meets the lid.

        Both edges stop on the same vertical line. A miter aimed back along the
        board shaved the cabinet slope from 12.5 mm down to a knife.
        """
        xs = self._sikmina_sdk_xs()
        inner = [(x, self.z_slope_plane_offset(x, t0)) for x in xs]
        outer = [(x, self.z_slope_plane_offset(x, t1)) for x in xs]
        return inner + list(reversed(outer))

    def _z_off(self, x: float, t: float) -> float:
        """Z of a parallel to the šikmina. Right of X_FURN the slope plane continues."""
        if x <= self.x_false:
            return self.z_slope_offset(x, t)
        return self.z_slope_plane_offset(x, t)

    def sikmina_nh_pts(self) -> list[tuple[float, float]]:
        """NaturHeld + StoSilent. 100 mm on both slopes, one room face.

        The boards butt on the vertical at the false ridge. The right board
        keeps its thickness until it meets the soffit's vertical face.
        """
        xf = self.x_false
        xj = self.x_stack_joint
        xn = self.x_furn
        tl, tr = self.t_nh_left, self.t_nh_right
        x0 = self.x_nh_end_l
        pts = [
            (x0, self.plane_z(x0, 0.0, right=False)),
            (xf, self.z_false),
        ]
        if xj > xf + 0.5:
            pts.append((xj, self.plane_z(xj, 0.0, right=True)))
        pts += [
            (xn, self.plane_z(xn, 0.0, right=True)),
            (xn, self.plane_z(xn, tr, right=True)),
        ]
        if xj > xf + 0.5:
            pts.append((xj, self.plane_z(xj, tr, right=True)))
        pts += [
            (xf, self.plane_z(xf, tl, right=False)),
            (x0, self.plane_z(x0, tl, right=False)),
        ]
        return pts

    def sikmina_sdk_pts(self) -> list[tuple[float, float]]:
        """GKF. The two planes meet at ``x_stack_joint``. No step.

        Left plane runs past the false ridge until it hits the right plane.
        The right board stops at the soffit CD. The NaturHeld butt stays at
        ``x_false``,  so the two joints are offset.
        """
        xj = self.x_stack_joint
        erx, erz = self.gkf_end_room
        eax, eaz = self.gkf_end_mid
        t0l, t1l = self.t_gkf_room_left, self.t_gkf_attic_left
        x0 = self.x_gkf_end_l
        return [
            (x0, self.plane_z(x0, t0l, right=False)),
            (xj, self.plane_z(xj, t0l, right=False)),
            (erx, erz),
            (eax, eaz),
            (xj, self.plane_z(xj, t1l, right=False)),
            (x0, self.plane_z(x0, t1l, right=False)),
        ]

    def sikmina_sdk2_pts(self) -> list[tuple[float, float]] | None:
        """Second (outer) GKF layer, right slope only.

        It lies on the first layer. At the ridge it is bevelled from
        ``x_stack_joint`` (its room face meets the left board's attic face) to
        ``x_cd_joint`` (its attic face meets the left CD plane), so the CD
        planes still meet with no step. Bottom end: same 3 mm acrylic joint.
        """
        if self.p.sdk_layers_right < 2:
            return None
        xj, xc = self.x_stack_joint, self.x_cd_joint
        tl = self.t_gkf_attic_left
        return [
            (xj, self.plane_z(xj, tl, right=False)),
            self.gkf_end_mid,
            self.gkf_end_attic,
            (xc, self.plane_z(xc, tl, right=False)),
        ]

    def x_right_pack_stop(self, t_perp: float) -> float:
        """X where a right-slope offset meets the kastlík lid hardware.

        The lid Z is fixed on the pozednice. A thicker plenum drops the slope,
        so the foil and the wool end here instead of running through the lid.
        """
        p = self.p
        # Joint angle on the lid: 1 mm seat + 2 mm strip + 1 mm clearance.
        z_clear = self.z_soffit_cd_bot + 4.0
        if self.z_slope_offset(self.x_furn, t_perp) >= z_clear:
            return self.x_furn
        rise = z_clear - self.h_start - t_perp / self.cos
        x = self.x_furn - rise / self.tan
        return min(self.x_furn, max(self.x_false + 1.0, x))

    def vapour_brake_path(self) -> list[tuple[float, float]]:
        """Centre line of the vapour brake (Jutafol N AL 170), one run eave to eave.

        Left: bonded on the wall plaster just below the lining, with a slack
        loop, then on the attic face of the slope CDs. The wool above it
        fills back to the plate.
        Right: down the slope CD plane, over the lid CD, along the lid top,
        down the plate cheek behind the lid end and the cleat, over the crown
        with a slack loop and bonded on the cabinet wall plaster inside the
        soffit void. The plaster is the masonry's airtight layer.
        """
        p = self.p
        h = p.foil_t * 0.5
        zc = p.eave_wall_z + h
        tl = self.t_cd_outer_left + h
        tr = self.t_cd_outer_right + h
        xj = self.x_cd_joint
        z_hcd = self.z_soffit_cd_top + h
        x_hit = self.x_false + (self.z_false + tr / self.cos - z_hcd) / self.tan
        x_hcd1 = self.x_soffit_cd_room + p.cd_w + h
        z_lid = self.z_soffit_cd_bot + h
        xr = self.poz_r0 - h
        xw = p.room_width - h
        lp = self.vb_loop_h
        x_wall = self.x_gkf_end_l
        z_foil = self.plane_z(x_wall, tl, right=False)
        # Slack loop in the room, in the empty service gap, not in the wall.
        return [
            (1.5, self.z_vb_bond_l),
            (1.5, z_foil),
            (14.0, z_foil),
            (18.0, z_foil - lp),
            (26.0, z_foil - lp),
            (30.0, z_foil),
            (x_wall, z_foil),
            (xj, self.plane_z(xj, tl, right=False)),
            (x_hit, z_hcd),
            (x_hcd1, z_hcd),
            (x_hcd1, z_lid),
            (xr, z_lid),
            (xr, zc),
            (xw + 45.0, zc),
            (xw + 40.0, zc + lp),
            (xw + 30.0, zc + lp),
            (xw + 25.0, zc),
            (xw, zc),
            (xw, self.z_vb_bond_r),
        ]

    vb_loop_h = 14.0
    z_vb_bond_r = 3150.0

    def sikmina_foil_pts(self) -> list[tuple[float, float]]:
        """Vapour brake as a closed 1 mm band along ``vapour_brake_path``."""
        return thicken_polyline(self.vapour_brake_path(), self.p.foil_t)

    def vapour_brake_length_mm(self) -> float:
        pts = self.vapour_brake_path()
        return sum(math.dist(a, b) for a, b in zip(pts, pts[1:]))

    def vb_tape_pts(self) -> list[list[tuple[float, float]]]:
        """Airtight bond tape over the brake onto the wall plaster, both eaves."""
        p = self.p
        t = p.foil_t
        h = t * 0.5
        # In the room, clear of the UD, the board and the eave CD, then along
        # the crown above the plaster.
        z_crown = p.eave_wall_z + 3.5
        left = [(0.55, self.z_vb_bond_l), (0.55, z_crown), (-p.wall_plaster + 2.0, z_crown)]
        zc = p.eave_wall_z + t + h
        xw = p.room_width - t - h
        right = [(xw, self.z_vb_bond_r - 1.0), (xw, zc), (p.room_width + p.wall_plaster, zc)]
        return [thicken_polyline(left, t), thicken_polyline(right, t)]

    def eave_acrylic_pts(self) -> list[tuple[float, float]]:
        """Planned cut at the left wall: acrylic bead in the inside corner.

        StoSilent stops at the wall; wall paint and the bead come from the wall
        side only. No plaster bridges the NaturHeld and the wall plaster.
        """
        z = lambda x: self.h_start + x * self.tan  # noqa: E731
        # In the corner, short of the NaturHeld end, so the bead is not inside the board.
        return [(0.2, z(0.2) - 5.0), (2.4, z(2.4) - 1.2), (2.4, z(2.4) - 3.2), (0.2, z(0.2) - 7.0)]

    def eave_ud_left_quads(self) -> list[list[tuple[float, float]]]:
        """UD on the plaster. The GKF edge screws into it; the eave CD seats in it.

        Web dowelled to the wall. Flanges are the channel depth, long enough
        to hold the CD end that remains in the room. No hanger through the
        plate. The wool above the brake is not inside this channel.
        """
        tm = 0.8
        flange = self.p.cd_t
        z_room = self.z_eave_ud_l
        # The eave CD's in-room tip sits just above the GKF attic face.
        z_cd_top = self.plane_z(self.x_gkf_end_l, self.t_cd_outer_left, right=False)
        z0 = z_room - 4.0
        z1 = z_cd_top + 1.2
        web = [(0.0, z0), (tm, z0), (tm, z1), (0.0, z1)]
        bot = [(tm, z0), (tm + flange, z0), (tm + flange, z0 + tm), (tm, z0 + tm)]
        top = [(tm, z1 - tm), (tm + flange, z1 - tm), (tm + flange, z1), (tm, z1)]
        return [web, bot, top]

    def eave_ud_left_screw_quads(self) -> list[list[tuple[float, float]]]:
        """Masonry anchor through the UD web into the plastered wall.

        Centres are 625 mm apart along the UD, the usual maximum.
        """
        x0 = 1.0
        zs = self.z_eave_ud_l + 6.0
        head = [(x0, zs - 4.0), (x0 + 1.6, zs - 4.0), (x0 + 1.6, zs + 4.0), (x0, zs + 4.0)]
        shank = [(x0 - 35.0, zs - 1.75), (x0, zs - 1.75), (x0, zs + 1.75), (x0 - 35.0, zs + 1.75)]
        return [head, shank]

    def eave_gkf_screw_quads(self) -> list[list[tuple[float, float]]]:
        """Screw through the slope GKF edge into the wall UD."""
        z_room = self.z_eave_ud_l
        z_attic = self.plane_z(self.x_gkf_end_l, self.t_gkf_attic_left, right=False)
        z = 0.5 * (z_room + z_attic)
        head = [(8.0, z - 4.0), (9.6, z - 4.0), (9.6, z + 4.0), (8.0, z + 4.0)]
        shank = [(-2.0, z - 1.75), (8.0, z - 1.75), (8.0, z + 1.75), (-2.0, z + 1.75)]
        return [head, shank]

    def _sikmina_segments(self) -> list[tuple[tuple[float, float], tuple[float, float]]]:
        """Ceiling polyline segments on the šikminy (room face), left then right."""
        a = (0.0, self.h_start)
        b = (self.x_false, self.z_false)
        c = (self.x_furn, self.z_gkf_horiz)
        return [(a, b), (b, c)]

    def sikmina_cd_band_pts(self) -> list[tuple[float, float]]:
        """CD grid zone thickness behind SDK."""
        t0 = self.t_gkf_attic_right
        return self._slope_band_pts(t0, t0 + self.p.cd_t)

    def _path_stations(
        self, spacing: float, first_inset: float
    ) -> list[tuple[float, float, float, float, float, float]]:
        """Stations along the šikmina room face: (x, z, tx, tz, nx, nz)."""
        stations: list[tuple[float, float, float, float, float, float]] = []
        cursor = first_inset
        for (x0, z0), (x1, z1) in self._sikmina_segments():
            dx, dz = x1 - x0, z1 - z0
            length = math.hypot(dx, dz)
            if length < 1.0:
                continue
            tx, tz = dx / length, dz / length
            nx, nz = -tz, tx
            if nz < 0:
                nx, nz = -nx, -nz
            while cursor <= length - spacing * 0.35:
                s = cursor
                stations.append((x0 + tx * s, z0 + tz * s, tx, tz, nx, nz))
                cursor += spacing
            cursor -= length
        return stations

    def right_slope_along_end(self) -> float:
        """Along-slope length from the false ridge to the room-side board end."""
        return (self.gkf_end_room[0] - self.x_false) / self.cos

    def right_cd_stations(
        self,
    ) -> list[tuple[float, float, float, float, float, float]]:
        """Right slope restarted at the false ridge: 90, 590, 1090, … mm.

        The left-eave grid is not continued across the ridge. A row is kept
        only while the whole 60 mm profile is still on the board, short of
        the level cut. The next step that would pass the board end is dropped.
        The false ridge itself has no profile.
        """
        p = self.p
        tx, tz = self.cos, -self.sin
        nx, nz = self.sin, self.cos
        limit = self.right_slope_along_end() - p.cd_w * 0.5 - 5.0
        stations = []
        s = p.cd_first_inset
        while s <= limit:
            stations.append(
                (
                    self.x_false + self.cos * s,
                    self.z_false - self.sin * s,
                    tx,
                    tz,
                    nx,
                    nz,
                )
            )
            s += p.cd_spacing
        return stations

    def right_top_cd_station(
        self,
    ) -> tuple[float, float, float, float, float, float]:
        """First right-slope CD, 90 mm along the slope below the false ridge."""
        return self.right_cd_stations()[0]

    def sikmina_cd_stations(
        self,
    ) -> list[tuple[float, float, float, float, float, float]]:
        """CD centers along the šikmina (⊥ krokvím — spaced along the slope).

        Left slope: 90 mm from the eave, then 500 mm. Right slope: the same
        inset and spacing, restarted at the false ridge. The slope/lid joint
        is not closed by a CD.
        """
        p = self.p
        stations = [
            st for st in self._path_stations(p.cd_spacing, p.cd_first_inset) if st[0] <= self.x_false
        ]
        stations.extend(self.right_cd_stations())
        stations.sort(key=lambda st: st[0])
        return stations

    def _frame_basis(
        self, x: float
    ) -> tuple[float, float, float, float, float, float, float]:
        """Room-face Z, tangent, attic normal, and the two offsets at this X.

        Left of the stack joint the framing still follows the left plane,
        including the short run past the false ridge where that plane has not
        yet met the right one.
        """
        if x <= self.x_cd_joint:
            return (
                self.h_start + max(x, 0.0) * self.tan,
                self.cos,
                self.sin,
                -self.sin,
                self.cos,
                self.t_gkf_attic_left,
                self.t_cd_outer_left,
            )
        return (
            self.z_false - (x - self.x_false) * self.tan,
            self.cos,
            -self.sin,
            self.sin,
            self.cos,
            self.t_gkf_attic_right,
            self.t_cd_outer_right,
        )

    def sikmina_cd_quad(
        self,
        x: float,
        z: float,
        tx: float,
        tz: float,
        nx: float,
        nz: float,
    ) -> list[tuple[float, float]]:
        """XZ rectangle for one CD profile on the GKF attic face."""
        p = self.p
        z, tx, tz, nx, nz, t0, _t_cd = self._frame_basis(x)
        cx = x + nx * t0
        cz = z + nz * t0
        hw = p.cd_w * 0.5
        d = p.cd_t
        return [
            (cx - tx * hw, cz - tz * hw),
            (cx + tx * hw, cz + tz * hw),
            (cx + tx * hw + nx * d, cz + tz * hw + nz * d),
            (cx - tx * hw + nx * d, cz - tz * hw + nz * d),
        ]

    def sikmina_cd_in_span(self, xs: list[float], station_x: float) -> bool:
        """True when this CD is on the šikmina, including the eave profile.

        The first axis is ``cd_first_inset`` from the room face (≤ 100 mm).
        That profile's attic corner crosses x=0 because the board runs out
        onto the plate. Cutting at x=1 dropped it and left a full module of
        board with no CD. The profile still has to sit on the GKF.
        """
        # The eave profile's attic corner crosses the wall. Keep it if its
        # centre is still on the board; the wall UD trims the tail.
        if station_x < self.x_gkf_end_l - 5.0:
            return False
        # Right-hand grid: the profile has to sit on the slope board, short
        # of the open joint with the lid.
        if station_x > self.x_false:
            along = (self.gkf_end_room[0] - station_x) / self.cos
            if along < self.p.cd_w * 0.5 + 5.0:
                return False
        return True

    def sikmina_cd_quads(self) -> list[list[tuple[float, float]]]:
        """CD profiles on the šikmina, first axis within 100 mm of the eave."""
        quads = []
        for st in self.sikmina_cd_stations():
            quad = self.sikmina_cd_quad(*st)
            xs = [pt[0] for pt in quad]
            if not self.sikmina_cd_in_span(xs, st[0]):
                continue
            quads.append(quad)
        return quads

    def y_stations(
        self, y0: float, y1: float, spacing: float, first_inset: float
    ) -> list[float]:
        """Centers along Y between y0 and y1."""
        out: list[float] = []
        y = y0 + first_inset
        while y <= y1 - first_inset:
            out.append(y)
            y += spacing
        return out

    def sikmina_rost_y_stations(self, y0: float, y1: float) -> list[float]:
        """500 mm centres. The slope has no latě; the soffit CD studs use this module."""
        p = self.p
        return self.y_stations(y0, y1, p.rost_spacing, p.rost_first_inset)

    def soffit_rost_y_stations(
        self, bay0: float, bay1: float, slope_ys: list[float]
    ) -> list[float]:
        """Soffit CD studs on the 500 mm module, limited to the soffit bay.

        The module is not restarted at the předstěna, so the verticals stay
        on one grid along the room.
        """
        half = self.p.cd_w * 0.5
        return [y for y in slope_ys if bay0 + half <= y <= bay1 - half]

    def soffit_wool_wedge_pts(self) -> list[tuple[float, float]]:
        """One triangle of wool under the lid, above the slope NaturHeld.

        The board runs to the soffit's vertical face. Where its attic face
        drops below the lid, the triangle closes on that face and the lid.
        It stops at the vertical board, not inside the CD behind it.
        """
        t1 = self.t_nh_right
        x1 = self.x_furn
        z_lid = self.z_soffit_lid
        z1 = self.plane_z(x1, t1, right=True)
        x0 = self.x_false + (self.z_false + t1 / self.cos - z_lid) / self.tan
        if x1 - x0 < 2.0 or z_lid - z1 < 2.0:
            return []
        return [(x0, z_lid), (x1, z1), (x1, z_lid)]

    def rafter_y_stations(self, y0: float, y1: float) -> list[float]:
        p = self.p
        return self.y_stations(y0, y1, p.rafter_spacing, p.rafter_first_inset)

    def tie_axis_z(self, gap: float = 1.0) -> float:
        """Tie centreline inside the pozednice, clear of the Ø160 ducts.

        The sheet draws the bar at mid-plate (eave + plate_h/2 = 3250). That
        line runs through the spiral ducts under the soffit lid. The only Ø14
        that still lies in the plate and misses the pipes sits in the top of
        the timber: the clearance hole stays 1 mm under the plate top.
        """
        r = self.p.tie_d * 0.5
        plate_top = self.p.eave_wall_z + self.p.plate_h
        z_hi = plate_top - gap - (r + gap)
        z_lo = self.z_soffit_duct_crown() + gap + r
        if z_lo > z_hi + 1e-6:
            raise ValueError(
                f"ø{self.p.tie_d:g} tie cannot sit in the pozednice and clear the ducts "
                f"(need Z≥{z_lo:.1f}, plate allows ≤{z_hi:.1f})"
            )
        return z_hi

    def tie_x_ends(self, gap: float = 1.0) -> tuple[float, float]:
        """Bar ends 1 mm inside the outer cheeks of the two wall plates."""
        return (self.poz_l0 + gap, self.poz_r0 + self.p.plate_w - gap)

    def tie_y_stations(self, y0: float, y1: float) -> list[float]:
        """Six ties, one in every other rafter bay, 270 mm off the nearer face.

        Bays are numbered from the living gable. The odd bays (2nd, 4th, …)
        put the run closer to mid-room than the even bays. Inside each bay the
        bar is ``tie_face_clear`` past the living-side rafter face, so that
        face is the nearer one (the kitchen-side face is a bay further away).
        """
        raf = self.rafter_y_stations(y0, y1)
        half = self.p.rafter_w * 0.5
        clear = self.p.tie_face_clear
        out: list[float] = []
        for i in range(1, len(raf) - 1, 2):
            y = raf[i] + half + clear
            if y >= raf[i + 1] - half:
                continue
            out.append(y)
        return out

    def light_y_between_ties(self, tie_ys: list[float]) -> list[float]:
        """One light set centred between each pair of adjacent ties."""
        return [0.5 * (a + b) for a, b in zip(tie_ys, tie_ys[1:])]

    def _ceil_x_at_z(self, z: float, *, right: bool) -> float:
        if right:
            return self.x_false + (self.z_false - z) / self.tan
        return (z - self.h_start) / self.tan

    def light_contacts(
        self, y0: float, y1: float, gap: float = 1.0
    ) -> list[tuple[float, float, float, float, float, str]]:
        """Room-face points for each spot head.

        Returns (x, y, z, nx, nz, side). ``(nx, nz)`` points into the room.
        Five sets per slope; each set is two heads along the slope, centred
        ``TIE_LIGHT_ABOVE`` vertically above the tie.
        """
        z_mid = self.tie_axis_z(gap) + TIE_LIGHT_ABOVE
        half = TIE_LIGHT_PAIR * 0.5
        ys = self.light_y_between_ties(self.tie_y_stations(y0, y1))
        heads: list[tuple[float, float, float, float, float, str]] = []
        for side, right in (("L", False), ("R", True)):
            x_mid = self._ceil_x_at_z(z_mid, right=right)
            if right:
                tx, tz = -self.cos, self.sin
                nx, nz = -self.sin, -self.cos
            else:
                tx, tz = self.cos, self.sin
                nx, nz = self.sin, -self.cos
            for y in ys:
                for sign in (-1.0, 1.0):
                    s = sign * half
                    heads.append((x_mid + tx * s, y, z_mid + tz * s, nx, nz, side))
        return heads

    def hanger_quad(
        self,
        x: float,
        z: float,
        tx: float,
        tz: float,
        nx: float,
        nz: float,
    ) -> list[tuple[float, float]]:
        """Thin steel hanger prism from CD outer face up toward the rafter.

        Hang length is the distance along the room-normal from the CD outer
        face to the rafter underside. Evaluating the gap at the room-face X
        underestimates it on the cabinet slope: past the false ridge the
        normal pushes the CD toward +X, where the void has already opened.
        """
        p = self.p
        z, tx, tz, nx, nz, _t_gkf, t_cd_outer = self._frame_basis(x)
        cx = x + nx * t_cd_outer
        cz = z + nz * t_cd_outer
        # Solve cz + t·nz = z_raf(cx + t·nx) for t > 0 (along the attic normal).
        lo, hi = 0.0, 800.0
        for _ in range(40):
            mid = 0.5 * (lo + hi)
            if cz + mid * nz < self.z_raf(cx + mid * nx):
                lo = mid
            else:
                hi = mid
        hang = max(0.5 * (lo + hi) - 2.0, 20.0)
        hw = p.hanger_w * 0.5
        return [
            (cx - tx * hw, cz - tz * hw),
            (cx + tx * hw, cz + tz * hw),
            (cx + tx * hw + nx * hang, cz + tz * hw + nz * hang),
            (cx - tx * hw + nx * hang, cz - tz * hw + nz * hang),
        ]

    def paska_quad(
        self,
        x: float,
        z: float,
        tx: float,
        tz: float,
        nx: float,
        nz: float,
    ) -> list[tuple[float, float]]:
        """Schematic 40×2 strap cross-section on the rafter underside (2D only).

        3D pásky are long 45° diagonals crossing into X along the room length;
        a transverse cut only sees a thin section of those straps.
        """
        p = self.p
        z_raf = self.z_raf(x)
        t_raf = (z_raf - self.z_ceil(x)) * self.cos
        cx = x + nx * (t_raf - p.strap_t)
        cz = z + nz * (t_raf - p.strap_t)
        hw = p.strap_w * 0.5
        d = p.strap_t
        return [
            (cx - tx * hw, cz - tz * hw),
            (cx + tx * hw, cz + tz * hw),
            (cx + tx * hw + nx * d, cz + tz * hw + nz * d),
            (cx - tx * hw + nx * d, cz - tz * hw + nz * d),
        ]

    def soffit_duct_pitch(self) -> float:
        """Centre spacing of the upper pair (OD + gap). The lower duct nests on this."""
        return self.p.duct_od + self.p.duct_gap

    def soffit_duct_centers(self) -> list[tuple[float, float]]:
        """XZ centres: wall-side upper, room-side upper, lower duct in the valley.

        Packed against the cabinet plaster. The lid height is fixed by the
        pozednice; this pack has to live under that board and above the columns.
        """
        p = self.p
        r = p.duct_od * 0.5
        pitch = self.soffit_duct_pitch()
        x_wall = p.room_width - p.duct_wall_gap - r
        x_room = x_wall - pitch
        z_upper = self.z_soffit_lid - p.duct_lid_gap - r
        vert = math.sqrt(max(pitch * pitch - (pitch * 0.5) ** 2, 0.0))
        z_lower = z_upper - vert
        x_lower = 0.5 * (x_wall + x_room)
        return [(x_wall, z_upper), (x_room, z_upper), (x_lower, z_lower)]

    def z_soffit_duct_crown(self) -> float:
        r = self.p.duct_od * 0.5
        return max(z for _, z in self.soffit_duct_centers()) + r

    def z_soffit_duct_bot(self) -> float:
        r = self.p.duct_od * 0.5
        return min(z for _, z in self.soffit_duct_centers()) - r

    def z_soffit_rail(self) -> float:
        """Top of the soffit mineral wool, clear of the lower duct.

        There is no timber cap and no hanger under the pipes. The wool stops
        short of the metal so the wall-anchored ducts stay in an empty void.
        """
        return self.z_soffit_duct_bot() - self.p.duct_gap - 8.0

    def soffit_duct_x_extent(self) -> tuple[float, float]:
        """Min/max X of the metal (not the centres)."""
        r = self.p.duct_od * 0.5
        xs = [x for x, _ in self.soffit_duct_centers()]
        return min(xs) - r, max(xs) + r

    def soffit_nh_pts(self) -> list[tuple[float, float]]:
        """Vertical NH+StoSilent face of the soffit box (side only).

        Runs from the soffit underside up. The vertical leg butts the thicker
        slope board at X_FURN; its top follows that board's attic face down to
        the vertical CD. The underside is GKB (``soffit_gkb_pts``).
        """
        t_slope = self.t_nh_face
        z0 = self.z_nabeh_bot
        z_cap = self.z_soffit_lid
        # The lid now runs over this face, so the top is level under it.
        z_out = z_in = z_cap
        del t_slope
        return [
            (self.x_nh_outer, z0),
            (self.x_nh_inner, z0),
            (self.x_nh_inner, z_in),
            (self.x_nh_outer, z_out),
        ]

    def soffit_gkb_pts(self) -> list[tuple[float, float]]:
        """12.5 GKB underside, from the NH side face to the right wall plaster."""
        p = self.p
        z0 = self.z_nabeh_bot
        return [
            (self.x_nh_inner, z0),
            (p.room_width, z0),
            (p.room_width, z0 + self.t_soffit_bottom),
            (self.x_nh_inner, z0 + self.t_soffit_bottom),
        ]

    def soffit_wool_pts(self) -> list[tuple[float, float]]:
        """Mineral wool in the acoustic cavity only, stopped short of the ducts.

        The service void above this line stays empty. The pipes are already
        anchored to the wall and are not hung from this box.
        """
        p = self.p
        t = self.t_soffit_bottom
        z_top = self.z_soffit_rail()
        return [
            (self.x_nh_inner, self.z_nabeh_bot + t),
            (p.room_width, self.z_nabeh_bot + t),
            (p.room_width, z_top),
            (self.x_nh_inner, z_top),
        ]

    def soffit_sdk_lid_pts(self) -> list[tuple[float, float]]:
        """Horizontal GKF lid above the ducts, ending on the pozednice cheek.

        Room edge is the plane where the slope board's underside meets this lid.
        The far end is the plate face, not the plaster: the board is above the
        wall head and crosses the setback onto the plate.
        """
        p = self.p
        t = self.t_lid
        x0 = self.x_gkf_kink
        x1 = self.poz_r0 - p.foil_t
        return [
            (x0, self.z_soffit_lid),
            (x1, self.z_soffit_lid),
            (x1, self.z_soffit_lid + t),
            (x0, self.z_soffit_lid + t),
        ]

    def krov_pts(self) -> list[tuple[float, float]]:
        p = self.p
        return [
            (self.left_eave, self.zle_tile - self.t_above_raf / self.cos),
            (self.x_ridge, self.z_raf_outer(self.x_ridge)),
            (self.right_eave, self.zre_tile - self.t_above_raf / self.cos),
            (self.right_eave, self.zre_tile - (self.t_above_raf + p.rafter_t) / self.cos),
            (self.x_ridge, self.z_raf(self.x_ridge)),
            (self.left_eave, self.zle_tile - (self.t_above_raf + p.rafter_t) / self.cos),
        ]

    def krytina_pts(self) -> list[tuple[float, float]]:
        return [
            (self.left_eave, self.zle_tile - self.t_above_raf / self.cos),
            (self.x_ridge, self.z_raf_outer(self.x_ridge)),
            (self.right_eave, self.zre_tile - self.t_above_raf / self.cos),
            (self.right_eave, self.zre_tile),
            (self.x_ridge, self.p.ridge_z),
            (self.left_eave, self.zle_tile),
        ]

    def vata_pts(self) -> list[tuple[float, float]]:
        """Wool below the rafters (one 038 product, both slopes).

        The bottom is the attic face of the vapour brake. On the left the
        brake ends on the wall, and the wool fills the pocket above it up to
        the plate. On the right it runs over the lid CD and along the lid to
        the plate. Between the rafters the same wool continues as
        ``vata_rafter_bay_pts``.
        """
        p = self.p
        t = p.foil_t
        xj = self.x_cd_joint
        tl, tr = self.t_foil_outer_left, self.t_foil_outer_right
        z_hcd = self.z_soffit_cd_top + t
        x_hit = self.x_false + (self.z_false + tr / self.cos - z_hcd) / self.tan
        x_hcd1 = self.x_soffit_cd_room + p.cd_w + t
        z_lid = self.z_soffit_cd_bot + t
        xl, xr = self.x_plate_cheek_l, self.poz_r0
        zp = self.z_plate_top
        x_wall = self.x_gkf_end_l
        z_foil_wall = self.plane_z(x_wall, tl, right=False)
        # Rafter underside meets the plate top here (each side).
        dx = (self.z_raf(0.0) - zp) / self.tan
        pts = [
            (x_wall, z_foil_wall),
            (xj, self.plane_z(xj, tl, right=False)),
            (x_hit, z_hcd),
            (x_hcd1, z_hcd),
            (x_hcd1, z_lid),
            (xr, z_lid),
            (xr, zp),
            (p.room_width + dx, zp),
            (self.x_ridge, self.z_raf(self.x_ridge)),
            (-dx, zp),
            (xl, zp),
        ]
        self.vata_bottom_n = 7
        return pts

    def vata_rafter_bay_pts(self, gap: float = 0.0) -> list[tuple[float, float]]:
        """Mineral wool in the rafter depth, between the krokve.

        Runs from the outer face of the left wall plate to the outer face of
        the right one. Bottom is the rafter underside, or the plate top where
        the rafter is notched into the plate. Top is the rafter top. The
        ventilation gap stays above this. ``gap`` lifts the plate edge and
        drops the rafter top so the solid does not share a face with them.
        """
        p = self.p
        zp = self.z_plate_top
        seat = (self.z_raf(0.0) - zp) / self.tan
        x_out_l = self.poz_l0 + gap
        x_out_r = self.poz_r0 + p.plate_w - gap
        # Rafter underside is `gap` above the plate top this far in from the seat.
        kink = (2.0 * gap) / self.tan if gap else 0.0
        x_kink_l = -seat + kink
        x_kink_r = p.room_width + seat - kink
        depth = p.rafter_t / self.cos
        z_plate = zp + gap

        def z_top(x: float) -> float:
            return self.z_raf(x) + depth - gap

        def z_under(x: float) -> float:
            return self.z_raf(x) - gap

        return [
            (x_out_l, z_plate),
            (x_kink_l, z_plate),
            (self.x_ridge, z_under(self.x_ridge)),
            (x_kink_r, z_plate),
            (x_out_r, z_plate),
            (x_out_r, z_top(x_out_r)),
            (self.x_ridge, z_top(self.x_ridge)),
            (x_out_l, z_top(x_out_l)),
        ]

    def horiz_cd_x_stations(self) -> list[float]:
        """CD centre on the raised GKF lid.

        One rail. The rost CD hangs the box. The joint angle is on the
        nearest slope CD, not on this rail. The plate cleat fixes the board
        edge. The ducts are anchored to the wall, so there is no second rail.
        """
        p = self.p
        front = self.x_soffit_cd
        if front + p.cd_w * 0.5 > p.room_width - 1.0:
            return []
        return [front]

    def _joint_station(self, along: float) -> tuple[float, float]:
        """Point on the GKF attic plane, `along` mm up-slope of the soffit CD corner."""
        jx, jz = self.joint_anchor
        x0 = jx - self.cos * along
        z0 = jz + self.sin * along
        return x0, z0

    def joint_slope_cd(self) -> tuple[float, float, float, float, float, float] | None:
        """Right-slope CD nearest the lid joint, on the room-face station."""
        joint_x = self.gkf_end_room[0]
        best = None
        for st in self.sikmina_cd_stations():
            if st[0] <= self.x_false or st[0] >= joint_x:
                continue
            xs = [pt[0] for pt in self.sikmina_cd_quad(*st)]
            if not self.sikmina_cd_in_span(xs, st[0]):
                continue
            if best is None or st[0] > best[0]:
                best = st
        return best


    def horiz_cd_quad(self, x: float) -> list[tuple[float, float]]:
        """XZ section of one horizontal CD sitting on the GKF lid."""
        p = self.p
        z0 = self.z_soffit_cd_bot
        hw = p.cd_w * 0.5
        d = p.cd_t
        return [
            (x - hw, z0),
            (x + hw, z0),
            (x + hw, z0 + d),
            (x - hw, z0 + d),
        ]

    def soffit_plate_cleat_quads(self) -> list[list[tuple[float, float]]]:
        """Steel angle: plate cheek + underside of the GKF edge.

        Perimeter fix only. The leg stays in the setback above the wall head
        so it does not land on the masonry and does not enter the duct pack.
        """
        p = self.p
        t = p.wall_bracket_t
        setback = self.poz_r0 - p.room_width
        leg = min(p.wall_bracket_leg, max(setback - 15.0, t + 10.0))
        x1 = self.poz_r0 - p.foil_t
        z1 = self.z_soffit_lid
        horiz = [
            (x1 - leg, z1 - t),
            (x1, z1 - t),
            (x1, z1),
            (x1 - leg, z1),
        ]
        vert = [
            (x1 - t, z1 - leg),
            (x1, z1 - leg),
            (x1, z1),
            (x1 - t, z1),
        ]
        return [horiz, vert]

    def horiz_wall_ud_pts(self) -> list[tuple[float, float]]:
        """Deprecated: the lid no longer ends on a UD on the plaster.

        Returns the horizontal leg of the plate cleat for old callers.
        """
        return self.soffit_plate_cleat_quads()[0]

    def horiz_break_ud_pts(self) -> list[tuple[float, float]]:
        """Deprecated alias: the rost-front CD the joint angle screws to.

        Kept for callers that still ask for a break profile; returns that rost CD.
        """
        xs = self.horiz_cd_x_stations()
        rost = self.x_soffit_cd
        hit = min(xs, key=lambda x: abs(x - rost)) if xs else None
        return self.horiz_cd_quad(hit) if hit is not None else []

    def horiz_hanger_top_z(self, x: float) -> float:
        """Underside of rafter at x (hang point for Nonius over the soffit bay)."""
        return self.z_raf(x)

    def horiz_hanger_bot_z(self) -> float:
        """Top of horizontal CD (Nonius seats here)."""
        p = self.p
        return self.z_soffit_cd_bot + p.cd_t

    def predstena_pts(self) -> list[tuple[float, float]]:
        p = self.p
        return [
            (0.0, p.predstena_bottom_z),
            (p.room_width, p.predstena_bottom_z),
            (p.room_width, self.z_gkf_horiz),
            (self.x_furn, self.z_gkf_horiz),
            (self.x_false, self.z_false),
            (0.0, self.h_start),
        ]

    def podhled_pts(self) -> list[tuple[float, float]]:
        """Full-room acoustic face outline (slopes + horizontal over cabinets) — for elevation."""
        return self.sikmina_nh_pts()

    def gable_wall_pts(self, x0: float, x1: float, z_bot: float) -> list[tuple[float, float]]:
        """Gable masonry/plaster outline in XZ.

        Top edge must sample the eave stations (x=0 and x=room_width), not only
        the exterior corners and ridge. Skipping the eaves made the corner→ridge
        chord shallower than 40° (~37°) even though ``z_gable_top`` uses the
        roof tan — exterior wythes sit past the clear span at eave_wall_z.
        """
        pts = [(x0, z_bot), (x1, z_bot)]
        lo, hi = min(x0, x1), max(x0, x1)
        # Walk the crown from x1 back to x0: exterior → eave → ridge → eave → exterior.
        top_xs: list[float] = [x1]
        for x in (self.p.room_width, self.x_ridge, 0.0):
            if lo + 1e-9 < x < hi - 1e-9:
                top_xs.append(x)
        top_xs.append(x0)
        pts.extend((x, self.z_gable_top(x)) for x in top_xs)
        return pts

def thicken_polyline(path: list[tuple[float, float]], t: float) -> list[tuple[float, float]]:
    """Closed band of width ``t`` centred on an open polyline (mitred joins)."""

    def normals(a, b):
        dx, dz = b[0] - a[0], b[1] - a[1]
        n = math.hypot(dx, dz)
        return (-dz / n, dx / n)

    h = t * 0.5
    segs = list(zip(path, path[1:]))
    ns = [normals(a, b) for a, b in segs]

    def side(sign: float) -> list[tuple[float, float]]:
        out = [(path[0][0] + sign * h * ns[0][0], path[0][1] + sign * h * ns[0][1])]
        for k in range(1, len(path) - 1):
            n0, n1 = ns[k - 1], ns[k]
            mx, mz = n0[0] + n1[0], n0[1] + n1[1]
            dot = mx * n0[0] + mz * n0[1]
            out.append((path[k][0] + sign * h * mx / dot, path[k][1] + sign * h * mz / dot))
        out.append((path[-1][0] + sign * h * ns[-1][0], path[-1][1] + sign * h * ns[-1][1]))
        return out

    return side(1.0) + list(reversed(side(-1.0)))


def build_layout(params: ObyvakParams | None = None) -> ObyvakLayout:
    return ObyvakLayout(params or ObyvakParams())


def xz(x: float, z: float) -> Vector:
    return Vector(x, 0.0, z)


def xz_face(pts: list[tuple[float, float]], label: str) -> Face:
    return Face(Wire.make_polygon([xz(x, z) for x, z in pts]), label=label)


def xz_rect(x: float, z: float, w: float, h: float, label: str) -> Face:
    return xz_face([(x, z), (x + w, z), (x + w, z + h), (x, z + h)], label)


def xz_ngon(cx: float, cz: float, r: float, label: str, n: int = 24) -> Face:
    """Regular polygon in XZ, used for a duct cut in the transverse section."""
    pts = [
        (cx + r * math.cos(2.0 * math.pi * i / n), cz + r * math.sin(2.0 * math.pi * i / n))
        for i in range(n)
    ]
    return xz_face(pts, label)


def xz_polyline(pts: list[tuple[float, float]], label: str) -> Wire:
    wire = Wire.make_polygon([xz(x, z) for x, z in pts], close=False)
    wire.label = label
    return wire


def xz_line(x0: float, z0: float, x1: float, z1: float, label: str) -> Edge:
    edge = Edge.make_line(xz(x0, z0), xz(x1, z1))
    edge.label = label
    return edge
