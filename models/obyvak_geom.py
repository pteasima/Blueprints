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
  GKF/RF 12.5                                               → `slope_gkf`
  CD Rigips 60×27 @ ~625 ⊥ krokvím                          → `slope_cd`
  Jutafol N AL 170 Speciál vapour barrier (~1)               → `slope_foil`
  přímý závěs 200 on the window slope (void 140)            → `slope_direct_hanger`
  Nonius horní 440 on the cabinet slope (gap ~429)          → `slope_nonius`
  Knauf Unifit 035: void below krokve + bays between them  → `plenum_wool`
  krokve 100/160 @ ~875                                     → `rafters`
  zavětrovací pásky 40×2 @ 45° X across krokve (racking)    → `racking_strap`
  (střešní latě / kontralatě above rafters stay in roofing)

The 80 mm board is screwed through the GKF into the CD. Foil sits on the
attic side of the CD (below the mineral wool), matching the rest of the
house (Jutafol N AL 170 Speciál — not a variable membrane). There is no slope lať
and no NaturHeld Flex. CD spacing stays 625 mm, which is the published
NaturHeld 140 stud spacing.

Right eave soffit box: 40 mm NaturHeld 140 + StoSilent on the side and the
bottom, mineral wool in the cavity, a CD/UD rost (@625) hanging the box.
The wool stops short of the ducts. Three Ø160 spiral ducts (HRV supply, HRV
extract, AC) sit in a 2-over-1 pack against the cabinet eave, below the lid
and above the column heads. They are already anchored to the wall; this box
does not hang them. The GKF lid is raised so its top is flush with the
pozednice and its cut end meets the plate cheek — above the wall head, not
on the plaster. Slope GKF stops where that board's underside meets the lid.
The slope board ends at the furniture line; the thinner soffit board butts it
there, its top following the slope board's attic face so the joint is not a
level cut through the slope pack. The board stays 12.5 mm to a square end. A
light-gauge angle backs that hidden butt: a short leg on the slope board, a
horizontal leg screwed to the rost CD. That CD is the only horizontal rail
and the only Nonius row. No vertical riser. Furniture and the wall plate do
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
LABEL_POCKET_FRAME = "pocket_frame"
LABEL_WALL_GKF = "wall_gkf"
LABEL_GLAZING = "glazing"
# --- Slopes (šikminy) ---
LABEL_SLOPE_NH = "slope_naturheld_140"
LABEL_SLOPE_GKF = "slope_gkf"
LABEL_SLOPE_CD = "slope_cd"
LABEL_SLOPE_FOIL = "slope_foil"
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
LABEL_BASS_CD = "bass_cd"
LABEL_BASS_HANGER = "bass_wall_hanger"
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
            LABEL_SLOPE_GKF,
            LABEL_SLOPE_CD,
            LABEL_SLOPE_FOIL,
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
            LABEL_SOFFIT_NONIUS,
            LABEL_SOFFIT_DUCT,
        ],
    },
    {
        "id": "bass_traps",
        "children": [
            LABEL_BASS_WOOL,
            LABEL_BASS_GKB,
            LABEL_BASS_CD,
            LABEL_BASS_HANGER,
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
    # Left (window) is the tight side; right (cabinet) is the hung side.
    naturheld_left: float = 60.0
    naturheld_right: float = 100.0
    # Soffit side face only (NH + StoSilent). It butts the slope board at X_FURN.
    soffit_naturheld_t: float = 40.0
    # Soffit underside over the cabinets: plain GKB (furniture covers it anyway).
    soffit_bottom_t: float = 12.5
    foil_t: float = 1.0
    sdk_t: float = 12.5
    # Road side (right, cabinet) slope: 2× GKF for road noise. Left stays 1×.
    # The room face does not move; the right CD plane moves 12.5 mm up.
    sdk_layers_right: int = 2
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
    # Bass-trap stacks — wall → room.
    # Kitchen 190: wool stops 20 mm short of the back of the front CD so the
    # GKB leaf can move on the Sylomer washer. The front CD (27) sits against
    # the GKB, so the geometric cavity from the wool face to the GKB is
    # 20 + 27 = 47 mm. That 47 mm is not an empty air spring. The rear CD
    # stays at 80 mm from the wall, inside the wool (catalog reach ≤ ~120).
    bass_k_wool: float = 130.5
    bass_k_air: float = 47.0
    bass_k_gkb: float = 12.5
    bass_k_rear_reach: float = 80.0  # wall → rear CD (≤ catalog ~120)
    # Living 450: GKB 12.5 + vzduch 137.5 + MW 300 (mirrored).
    bass_l_gkb: float = 12.5
    bass_l_air: float = 137.5
    bass_l_wool: float = 300.0
    bass_l_rear_reach: float = 100.0
    # Short rear wall fix + vertical CD studs (no hangers through šikminy).
    bass_hanger_z_inset: float = 200.0
    bass_hanger_z_step: float = 700.0
    bass_trmen_arm_t: float = 3.0
    bass_trmen_arm_h: float = 16.0
    bass_bottom_sdk_t: float = 12.5
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
    rost_spacing: float = 625.0
    rost_first_inset: float = 90.0
    # CD grid holding SDK — ⊥ krokvím. UD is the wall channel the soffit CDs enter.
    cd_w: float = 60.0
    cd_spacing: float = 625.0
    cd_first_inset: float = 90.0
    ud_w: float = 28.0
    # Rafters (spacing along Y) + bracing straps on underside.
    rafter_w: float = 100.0
    rafter_spacing: float = 875.0
    rafter_first_inset: float = 200.0
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
        # 20 mm clear of the front CD, then the 27 mm profile, then the GKB.
        assert abs(self.bass_k_air - (self.cd_t + 20.0)) < 1e-9


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
        self.x_soffit_cd = self.x_nh_inner + p.cd_w * 0.5
        self.x_soffit_cd_room = self.x_soffit_cd - p.cd_w * 0.5
        self.z_soffit_cd_bot = self.z_soffit_lid + p.sdk_t
        self.z_soffit_cd_top = self.z_soffit_cd_bot + p.cd_t
        # UD bend: GKF attic face is the 40° plane through the CD's room-side
        # lower corner. 3 mm up-slope is the acrylic joint, so the board does
        # not fuse into the CD.
        self.joint_gap = 3.0
        # The first GKF layer's attic plane goes through the CD's lower corner
        # (as with 1× GKF), so the room face is unchanged. The second layer
        # lifts the slope CD plane: it meets the CD room-side face this high.
        extra = self.t_gkf_right - p.sdk_t
        self.joint_anchor = (
            self.x_soffit_cd_room,
            self.z_soffit_cd_bot + extra / self.cos,
        )
        jx, jz = self.joint_anchor
        ax = jx - self.cos * self.joint_gap
        az = jz + self.sin * self.joint_gap
        self.gkf_end_attic = (ax, az)
        self.gkf_end_mid = (ax - self.sin * (self.t_gkf_right - p.sdk_t),
                            az - self.cos * (self.t_gkf_right - p.sdk_t))
        self.gkf_end_room = (ax - self.sin * self.t_gkf_right, az - self.cos * self.t_gkf_right)
        # Room face = GKF attic plane plus the GKF, 100 mm NaturHeld and StoSilent.
        d_room = self.t_gkf_attic_right
        rx = jx - self.sin * d_room
        rz = jz - self.cos * d_room
        # Symmetric ceiling: both eaves share this room-face height.
        self.h_start = rz + (rx - self.x_furn) * self.tan
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
        # Lid starts under the soffit CD. The slope GKF stops 3 mm short of it.
        self.x_gkf_kink = self.x_soffit_cd_room

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
        """NaturHeld + StoSilent. 60 mm left, 100 mm right, one room face.

        The boards butt on the vertical at the false ridge. Past that line the
        right board is splayed down onto the left attic plane until the two
        attic planes meet at ``x_stack_joint``, where the right board is its
        full thickness. That meeting is the GKF joint, not this one.
        """
        xf = self.x_false
        xj = self.x_stack_joint
        xn = self.x_furn
        tl, tr = self.t_nh_left, self.t_nh_right
        return [
            (0.0, self.plane_z(0.0, 0.0, right=False)),
            (xf, self.z_false),
            (xj, self.plane_z(xj, 0.0, right=True)),
            (xn, self.plane_z(xn, 0.0, right=True)),
            (xn, self.plane_z(xn, tr, right=True)),
            (xj, self.plane_z(xj, tr, right=True)),
            (xf, self.plane_z(xf, tl, right=False)),
            (0.0, self.plane_z(0.0, tl, right=False)),
        ]

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
        return [
            (0.0, self.plane_z(0.0, t0l, right=False)),
            (xj, self.plane_z(xj, t0l, right=False)),
            (erx, erz),
            (eax, eaz),
            (xj, self.plane_z(xj, t1l, right=False)),
            (0.0, self.plane_z(0.0, t1l, right=False)),
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
        z_clear = self.z_soffit_lid + p.sdk_t + 4.0
        if self.z_slope_offset(self.x_furn, t_perp) >= z_clear:
            return self.x_furn
        rise = z_clear - self.h_start - t_perp / self.cos
        x = self.x_furn - rise / self.tan
        return min(self.x_furn, max(self.x_false + 1.0, x))

    def sikmina_foil_pts(self) -> list[tuple[float, float]]:
        """Jutafol N AL 170 on the attic side of the CD, stopped at the UD.

        Same meeting line as the GKF: the left plane runs to ``x_stack_joint``.
        """
        p = self.p
        xj = self.x_cd_joint
        t0l, t1l = self.t_cd_outer_left, self.t_foil_outer_left
        # Stop up-slope of the soffit CD. The UD occupies the corner.
        eax, eaz = self._joint_station(80.0)
        end_in = (eax + self.sin * p.cd_t, eaz + self.cos * p.cd_t)
        end_out = (eax + self.sin * (p.cd_t + p.foil_t), eaz + self.cos * (p.cd_t + p.foil_t))
        return [
            (0.0, self.plane_z(0.0, t0l, right=False)),
            (xj, self.plane_z(xj, t0l, right=False)),
            end_in,
            end_out,
            (xj, self.plane_z(xj, t1l, right=False)),
            (0.0, self.plane_z(0.0, t1l, right=False)),
        ]

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

    def sikmina_cd_stations(
        self,
    ) -> list[tuple[float, float, float, float, float, float]]:
        """CD centers along the šikmina (⊥ krokvím — spaced along the slope).

        The cabinet-slope run stops one module short of the gypsum joint. The
        joint angle, not another CD, closes that bay.
        """
        p = self.p
        return self._path_stations(p.cd_spacing, p.cd_first_inset)

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

    def sikmina_cd_quads(self) -> list[list[tuple[float, float]]]:
        """CD profiles fully inside the clear šikmina span."""
        quads = []
        x_lo, x_hi = 1.0, self.x_furn - 1.0
        # The right-hand grid ends in the UD, so the last module is the track.
        x_ud = self.gkf_end_attic[0] - 40.0
        for st in self.sikmina_cd_stations():
            quad = self.sikmina_cd_quad(*st)
            xs = [pt[0] for pt in quad]
            if min(xs) < x_lo or max(xs) > x_hi:
                continue
            if st[0] > self.x_false and max(xs) > x_ud:
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
        """625 mm centres. The slope has no latě; the soffit CD studs use this module."""
        p = self.p
        return self.y_stations(y0, y1, p.rost_spacing, p.rost_first_inset)

    def soffit_rost_y_stations(
        self, bay0: float, bay1: float, slope_ys: list[float]
    ) -> list[float]:
        """Soffit CD studs on the 625 mm module, limited to the soffit bay.

        The module is not restarted at the předstěna, so the verticals stay
        on one grid along the room.
        """
        half = self.p.cd_w * 0.5
        return [y for y in slope_ys if bay0 + half <= y <= bay1 - half]

    def soffit_wool_wedge_pts(self) -> list[tuple[float, float]]:
        """Mineral wool under the lid, from the slope-board attic face to the vertical CD.

        The board ends at the furniture line. Past the gypsum joint the lid
        sits above that attic face. The triangle is on the warm side of the
        lid and is the same wool as the soffit cavity.
        """
        t1 = self.t_nh_face
        x0 = self.x_gkf_kink
        x1 = self.x_nh_inner
        z_lid = self.z_soffit_lid
        z0 = min(self.z_slope_plane_offset(x0, t1), z_lid)
        z1 = min(self.z_slope_plane_offset(x1, t1), z_lid)
        # No wedge once the slope board's attic face is up at the lid.
        if x1 - x0 < 2.0 or z_lid - max(z0, z1) < 2.0:
            return []
        return [
            (x0, z0),
            (x1, z1),
            (x1, z_lid),
            (x0, z_lid),
        ]

    def rafter_y_stations(self, y0: float, y1: float) -> list[float]:
        p = self.p
        return self.y_stations(y0, y1, p.rafter_spacing, p.rafter_first_inset)

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
        z_out = min(self.z_slope_offset(self.x_nh_outer, t_slope), z_cap)
        z_in = min(self.z_slope_plane_offset(self.x_nh_inner, t_slope), z_cap)
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
        t = p.sdk_t
        x0 = self.x_gkf_kink
        return [
            (x0, self.z_soffit_lid),
            (self.poz_r0, self.z_soffit_lid),
            (self.poz_r0, self.z_soffit_lid + t),
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
        """Wool below the rafters (Unifit 033 left, NatuRoll 039 right). Depths stay as solved.

        The bottom follows the foil. Left and right foil planes meet at
        ``x_stack_joint``, so the wool has no step there either. Between the
        rafters the fill is ``vata_rafter_bay_pts`` (160 mm).
        """
        p = self.p
        xj = self.x_cd_joint
        t_out = self.t_foil_outer_left
        # Wool is what's left between the foil and the rafter. It stops at the UD.
        eax, eaz = self._joint_station(80.0)
        x_end = eax + self.sin * (p.cd_t + p.foil_t)
        z_end = eaz + self.cos * (p.cd_t + p.foil_t)
        z_cd = self.z_soffit_cd_top
        pts = [
            (0.0, self.plane_z(0.0, t_out, right=False)),
            (xj, self.plane_z(xj, t_out, right=False)),
            (x_end, z_end),
            (x_end, max(z_end, z_cd)),
            (p.room_width, z_cd),
            (p.room_width, self.z_raf(p.room_width)),
            (self.x_ridge, self.z_raf(self.x_ridge)),
            (0.0, self.z_raf(0.0)),
        ]
        self.vata_bottom_n = 5
        return pts

    def vata_rafter_bay_pts(self) -> list[tuple[float, float]]:
        """Mineral wool in the rafter depth, over the warm room only.

        Bottom is the rafter underside; top is the rafter top. The ventilation
        gap, DHV, and tiles stay above this. The 3D build keeps a FACE_GAP off
        each krokev cheek so the timber is not the insulation.
        """
        p = self.p
        return [
            (0.0, self.z_raf(0.0)),
            (self.x_ridge, self.z_raf(self.x_ridge)),
            (p.room_width, self.z_raf(p.room_width)),
            (p.room_width, self.z_raf_outer(p.room_width)),
            (self.x_ridge, self.z_raf_outer(self.x_ridge)),
            (0.0, self.z_raf_outer(0.0)),
        ]

    def horiz_cd_x_stations(self) -> list[float]:
        """CD centre on the raised GKF lid.

        One rail. The rost CD hangs the box and takes the joint angle. The
        plate cleat fixes the board edge. The ducts are anchored to the wall,
        so there is no second rail and no trapeze.
        """
        p = self.p
        front = self.x_sdk_break + p.cd_w * 0.5
        if front + p.cd_w * 0.5 > p.room_width - 1.0:
            return []
        return [front]

    def _joint_station(self, along: float) -> tuple[float, float]:
        """Point on the GKF attic plane, `along` mm up-slope of the soffit CD corner."""
        jx, jz = self.joint_anchor
        x0 = jx - self.cos * along
        z0 = jz + self.sin * along
        return x0, z0

    def soffit_ud_track_quads(self) -> list[list[tuple[float, float]]]:
        """UD notched and bent: flat leg on the soffit CD, 40° channel beyond.

        Flanges are cut at the bend, so only the web lies on the room-side face
        of the fixed CD. Past the bend the web runs up the slope and the
        flanges return, forming the channel the slope CDs slide into. Drawn at
        1 mm; the real sheet is about 0.6 mm. The last quad is the seated CD
        (a section marker, not a second full-length rail).
        """
        p = self.p
        tm = 1.0
        leg_h = 22.0
        # Acrylic owns the first 3 mm. The strap starts just above that.
        s0 = 6.0
        # 27 mm attic flange clears the CD once s > 27·tan 40°.
        s1 = 34.0
        chan = 52.0
        ux, uz = -self.cos, self.sin
        nx, nz = self.sin, self.cos
        # Bend sits where the slope CD plane meets the CD cheek. With 2× GKF
        # that is 16 mm up the cheek, so the flat leg hangs down from the bend.
        x0, z0 = self.joint_anchor
        z_leg0 = z0 + 4.0
        if z0 > self.z_soffit_cd_bot + 1e-6:
            leg_lo, leg_hi = self.z_soffit_cd_bot + 1.0, z_leg0
        else:
            leg_lo, leg_hi = z_leg0, z_leg0 + leg_h

        def along(s: float, t: float) -> tuple[float, float]:
            return (
                x0 - self.cos * s + nx * t,
                z0 + self.sin * s + nz * t,
            )

        def quad_pts(a, b, c, d):
            return [a, b, c, d]

        # Short flat leg, full contact with the CD cheek.
        leg = quad_pts(
            (x0 - tm, leg_lo),
            (x0, leg_lo),
            (x0, leg_hi),
            (x0 - tm, leg_hi),
        )
        # Bend: bottom of the leg to the start of the 40° web.
        a0, a1 = along(s0, 0.0), along(s0, tm)
        bend = quad_pts((x0 - tm, z_leg0), (x0, z_leg0), a1, a0)
        # Web along the slope, flanges notched off, up to the channel.
        b0, b1 = along(s1, 0.0), along(s1, tm)
        strap = quad_pts(a0, a1, b1, b0)
        # Channel web, 1 mm along the slope, standing out to the CD depth.
        web = quad_pts(
            along(s1, 0.0),
            along(s1, p.cd_t),
            along(s1 + tm, p.cd_t),
            along(s1 + tm, 0.0),
        )
        # Flanges up-slope of the web. The channel opens up-slope.
        room_flange = quad_pts(
            along(s1 + tm, 0.0),
            along(s1 + tm + chan, 0.0),
            along(s1 + tm + chan, tm),
            along(s1 + tm, tm),
        )
        attic_flange = quad_pts(
            along(s1 + tm, p.cd_t - tm),
            along(s1 + tm + chan, p.cd_t - tm),
            along(s1 + tm + chan, p.cd_t),
            along(s1 + tm, p.cd_t),
        )
        # Slope CD end, clear of the sheet.
        seated = quad_pts(
            along(s1 + tm + 2.0, tm),
            along(s1 + tm + 2.0 + 46.0, tm),
            along(s1 + tm + 2.0 + 46.0, p.cd_t - tm),
            along(s1 + tm + 2.0, p.cd_t - tm),
        )
        return [leg, bend, strap, web, room_flange, attic_flange, seated]

    def soffit_ud_screw_quads(self) -> list[list[tuple[float, float]]]:
        """One LB 3.5×9.5 in section, through the flat leg into the soffit CD.

        The track is fixed at about 300 mm along its length. A section shows
        a single screw; the spacing is a note, not a second mark in this plane.
        """
        x0 = self.x_soffit_cd_room
        z0 = self.z_soffit_cd_bot
        tm = 1.0
        z_screw = z0 + 4.0 + 11.0
        x_sheet = x0 - tm
        head_w, head_t = 8.0, 1.6
        shank_d, shank_l = 3.5, 9.5
        head = [
            (x_sheet - head_t, z_screw - head_w * 0.5),
            (x_sheet, z_screw - head_w * 0.5),
            (x_sheet, z_screw + head_w * 0.5),
            (x_sheet - head_t, z_screw + head_w * 0.5),
        ]
        shank = [
            (x_sheet, z_screw - shank_d * 0.5),
            (x_sheet + shank_l, z_screw - shank_d * 0.5),
            (x_sheet + shank_l, z_screw + shank_d * 0.5),
            (x_sheet, z_screw + shank_d * 0.5),
        ]
        return [head, shank]

    def board_joint_quads(self) -> list[list[tuple[float, float]]]:
        """Butt lines. NaturHeld at the false ridge, GKF where the planes meet."""
        w = 0.9
        xf = self.x_false
        z_room = self.z_false
        z_nh = self.plane_z(xf, self.t_nh_left, right=False)
        xj = self.x_stack_joint
        z_a = self.plane_z(xj, self.t_gkf_room_left, right=False)
        z_b = self.plane_z(xj, self.t_gkf_attic_left, right=False)

        def vline(x: float, z0: float, z1: float) -> list[tuple[float, float]]:
            return [
                (x - w * 0.5, z0),
                (x + w * 0.5, z0),
                (x + w * 0.5, z1),
                (x - w * 0.5, z1),
            ]

        return [vline(xf, z_room, z_nh), vline(xj, z_a, z_b)]

    def soffit_acrylic_joint_pts(self) -> list[tuple[float, float]]:
        """Flexible acrylic + tape in the 3 mm gap between slope GKF and the CD."""
        p = self.p
        x0, z0 = self.gkf_end_attic
        x1, z1 = self.gkf_end_room
        # The gap runs from the board end back to the CD corner, same 12.5 mm.
        ux, uz = self.cos, -self.sin  # down-slope, toward the CD
        return [
            (x0, z0),
            (x1, z1),
            (x1 + ux * self.joint_gap, z1 + uz * self.joint_gap),
            (x0 + ux * self.joint_gap, z0 + uz * self.joint_gap),
        ]

    def horiz_cd_quad(self, x: float) -> list[tuple[float, float]]:
        """XZ section of one horizontal CD sitting on the GKF lid."""
        p = self.p
        z0 = self.z_soffit_lid + p.sdk_t
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
        x1 = self.poz_r0
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
        rost = self.x_sdk_break + self.p.cd_w * 0.5
        hit = min(xs, key=lambda x: abs(x - rost)) if xs else None
        return self.horiz_cd_quad(hit) if hit is not None else []

    def horiz_hanger_top_z(self, x: float) -> float:
        """Underside of rafter at x (hang point for Nonius over the soffit bay)."""
        return self.z_raf(x)

    def horiz_hanger_bot_z(self) -> float:
        """Top of horizontal CD (Nonius seats here)."""
        p = self.p
        return self.z_soffit_lid + p.sdk_t + p.cd_t

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
