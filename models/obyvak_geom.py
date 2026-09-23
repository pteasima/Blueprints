"""Shared Obývák 1.02 parameters and 2D sketch helpers (mm).

World:
  X = eave ↔ eave (room_width), Y = kitchen ↔ living (room_length), Z up.

2D drawings sit in Plane.XZ for the orthographic exporter:
  section X = transverse, elevation X = longitudinal (world Y).
3D (`models/obyvak.py`) extrudes section profiles along Y and gable profiles along Y
(thickness) / X (span).

Šikminy stack (interior → attic; thicknesses ⊥ to the face unless noted):

  StoSilent Top Finish + Top Basic + NaturHeld 140 (60)     → `slope_naturheld_140`
  dřevěný rošt: latě KVH 60×40 @ ~625 // krokvím (⊥ CD)   → `slope_battens`
  NaturHeld Flex 50 between those latě, flush (40)          → `slope_naturheld_flex_50`
  vapour foil (~1) + GKF/RF 12.5                            → `slope_gkf`
  CD Rigips 60×27 @ ~625 ⊥ krokvím                          → `slope_cd`
  přímý závěs 125 on the window slope (plenum ~80)          → `slope_direct_hanger`
  Nonius on the cabinet slope (gap opens to ~370)           → `slope_nonius`
  minerální vlna / mineral wool plenum (80)                → `plenum_wool`
  krokve 100/160 @ ~875 + MW between                        → `rafters` / `plenum_wool`
  zavětrovací pásky 40×2 @ 45° X across krokve (racking)    → `racking_strap`
  (střešní latě / kontralatě above rafters stay in roofing)

Right eave soffit box: NH L, Flex cavity + latový rost (latě @625, Flex between).
GKF is continuous for acoustics and copies the wooden lattice edge: slope GKF
runs to `x_nh_inner` (rost front), a vertical return with a slope-cut top seats
on the lid (lid extends past the front CD for a proper L), and that front CD
hangs the box at the lattice edge. Horizontal CD @625 + Nonius above the lid;
rost drop-hung from that grid and braced to the eave wall. Furniture /
wall plate are not structural. CAD ids are zone-prefixed so the viewer can
toggle / fade slopes, soffit, and bass traps independently.
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
LABEL_SLOPE_FLEX = "slope_naturheld_flex_50"
LABEL_SLOPE_BATTENS = "slope_battens"
LABEL_SLOPE_GKF = "slope_gkf"
LABEL_SLOPE_CD = "slope_cd"
LABEL_SLOPE_DIRECT = "slope_direct_hanger"
LABEL_SLOPE_NONIUS = "slope_nonius"
# --- Soffit (podhled) ---
LABEL_SOFFIT_NH = "soffit_naturheld_140"
LABEL_SOFFIT_FLEX = "soffit_naturheld_flex_50"
LABEL_SOFFIT_BATTENS = "soffit_battens"
LABEL_SOFFIT_GKF = "soffit_gkf"
LABEL_SOFFIT_CD = "soffit_cd"
LABEL_SOFFIT_NONIUS = "soffit_nonius"
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
            LABEL_SLOPE_FLEX,
            LABEL_SLOPE_BATTENS,
            LABEL_SLOPE_GKF,
            LABEL_SLOPE_CD,
            LABEL_SLOPE_DIRECT,
            LABEL_SLOPE_NONIUS,
        ],
    },
    {
        "id": "soffit",
        "children": [
            LABEL_SOFFIT_NH,
            LABEL_SOFFIT_FLEX,
            LABEL_SOFFIT_BATTENS,
            LABEL_SOFFIT_GKF,
            LABEL_SOFFIT_CD,
            LABEL_SOFFIT_NONIUS,
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
    plenum_t: float = 80.0
    cd_t: float = 27.0
    finish_t: float = 2.0
    basic_t: float = 2.0
    naturheld_t: float = 60.0
    flex_t: float = 60.0
    foil_t: float = 1.0
    sdk_t: float = 12.5
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
    # Bass-trap stacks (detail sheets C/D) — wall → room; air gap is empty.
    # Kitchen 190: MW 80 + vzduch 97.5 + GKB 12.5.
    bass_k_wool: float = 80.0
    bass_k_air: float = 97.5
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
    # Clearance from the kitchen-cabinet eave (X=room_width) to the spíž opening.
    pocket_spiz_inset: float = 650.0
    # (gable, x0, width) — "kitchen"=Y=0 (předstěna 190), "living"=Y=L (předstěna 450).
    # Cutaway camera is at −X,−Y: near/right gable = Y=0, far/left gable = Y=L.
    # Spíž must sit on the far gable (Y=L), not on the near/right wall with chodba.
    # Chodba stays Y=0 window corner; zádveří stays Y=L window corner; spíž Y=L cabinet inset.
    pocket_doors: tuple[tuple[str, float, float], ...] = (
        ("kitchen", 0.0, 1000.0),  # chodba · roh u oken · near gable Y=0
        ("living", 3700.0, 1000.0),  # spíž · far gable Y=L · 5350 − 650 − 1000
        ("living", 0.0, 1100.0),  # zádveří · roh u oken · far gable Y=L
    )
    # Window wall (X=0, opposite cabinets): 2× HS 2500 + fixed 4500, h=2500 (D.1.1.03).
    window_h: float = 2500.0
    # (y0, width) along Y from kitchen→living; ~200 mm piers between bays.
    eave_windows: tuple[tuple[float, float], ...] = (
        (550.0, 2500.0),  # HS portal · kuchyně / chodba
        (3250.0, 4500.0),  # velké fixní / posuvné sklo
        (7950.0, 2500.0),  # HS portal · obývák / zádveří
    )
    glass_t: float = 20.0
    # Interior acoustic rost (latě holding NaturHeld) — // krokvím, ⊥ CD.
    rost_w: float = 60.0
    rost_d: float = 40.0
    rost_spacing: float = 625.0
    rost_first_inset: float = 90.0
    # CD grid holding SDK — ⊥ krokvím.
    cd_w: float = 60.0
    cd_spacing: float = 625.0
    cd_first_inset: float = 90.0
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
    # Wall angle brackets at the eave (rear support only — not the hang point).
    wall_bracket_leg: float = 80.0
    wall_bracket_t: float = 3.0
    ridge_runout: float = 200.0

    def __post_init__(self) -> None:
        assert abs(self.bass_k_wool + self.bass_k_air + self.bass_k_gkb - self.predstena_kitchen) < 1e-9
        assert abs(self.bass_l_gkb + self.bass_l_air + self.bass_l_wool - self.predstena_living) < 1e-9


class ObyvakLayout:
    """Derived measures — same formulas as the legacy ezdxf sheets."""

    def __init__(self, p: ObyvakParams):
        self.p = p
        th = math.radians(p.roof_angle_deg)
        self.sin = math.sin(th)
        self.cos = math.cos(th)
        self.tan = math.tan(th)

        # Room-facing acoustic face (Finish + Basic + NaturHeld 140).
        self.t_nh_face = p.finish_t + p.basic_t + p.naturheld_t
        # Flex fills the 40 mm lať. Foil is the 1 mm seat under GKF — not a second Flex skin.
        self.t_flex_pack = p.rost_d + p.foil_t
        self.t_soft_below_sdk = self.t_nh_face + self.t_flex_pack + p.sdk_t
        self.t_left = p.plenum_t + p.cd_t + self.t_soft_below_sdk
        # Right-side hangers are longer: slope continues to X_FURN then drops.
        self.t_extra = p.furniture_width * self.sin
        self.l_hanger_left = p.plenum_t
        self.l_hanger_right = p.plenum_t + self.t_extra
        self.t_above_raf = (
            p.vent_t + p.dhv_t + p.counter_batten_t + p.batten_t + p.tile_t
        )

        self.x_ridge = p.room_width / 2.0
        self.x_furn = p.room_width - p.furniture_width
        self.x_false = (p.room_width - p.furniture_width) / 2.0
        self.z_raf_inner_ridge = p.ridge_z - (self.t_above_raf + p.rafter_t) / self.cos
        self.h_start = self.z_raf(0.0) - self.t_left / self.cos
        self.z_false = self.h_start + self.x_false * self.tan
        self.z_gkf_horiz = self.h_start
        self.z_nabeh_bot = p.furniture_height + p.furniture_gap
        self.z_soffit = self.h_start + self.x_ridge * self.tan
        self.z_raf_top = self.z_raf_inner_ridge + p.rafter_t / self.cos
        # Vertical NH outer face flush with slope NH ∩ furniture plane; thickness into box.
        self.x_nh_outer = self.x_furn
        self.x_nh_inner = self.x_furn + self.t_nh_face
        # GKF zlom flush with the wooden rost front: slope board meets a vertical
        # return here, lid runs to the wall, break CD hangs the lattice at its edge.
        self.x_sdk_break = self.x_nh_inner

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

        self.x_pred_l = p.predstena_kitchen
        self.x_pred_r = p.room_length - p.predstena_living

        self.yl_eps = -p.wall_plaster - p.wall_mason - p.wall_eps
        self.yl_mas = -p.wall_plaster - p.wall_mason
        self.yr_int = p.room_length
        self.yr_mas = p.room_length + p.wall_plaster + p.wall_mason
        self.yr_eps = self.yr_mas + p.wall_eps
        self.y_pred_l = p.predstena_kitchen
        self.y_pred_r = p.room_length - p.predstena_living
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

    def z_slope_plane_offset(self, x: float, t_perp: float) -> float:
        """Parallel offset on the right-slope plane, continued past X_FURN for GKF.

        NH / Flex still break at the furniture line; only GKF follows this plane
        into the soffit bay so the membrane can drop vertically onto the lid.
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

    def _sikmina_xs(self) -> list[float]:
        return [0.0, self.x_false, self.x_furn]

    def _sikmina_sdk_xs(self) -> list[float]:
        """Slope GKF runs past X_FURN to the vertical return at x_sdk_break."""
        return [0.0, self.x_false, self.x_furn, self.x_sdk_break]

    def _slope_band_pts(self, t0: float, t1: float) -> list[tuple[float, float]]:
        """Closed XZ band on the šikminy (0→X_FURN) between two parallel offsets."""
        xs = self._sikmina_xs()
        inner = [(x, self.z_slope_offset(x, t0)) for x in xs]
        outer = [(x, self.z_slope_offset(x, t1)) for x in xs]
        return inner + list(reversed(outer))

    def _slope_sdk_band_pts(self, t0: float, t1: float) -> list[tuple[float, float]]:
        """GKF band on the slope plane to x_sdk_break, with a mitered right-hand end.

        The terminal edge is cut ⊥ to the board (along the attic normal) so it
        seats on the vertical return's slope-cut top instead of ending as a
        blunt vertical face.
        """
        xs = self._sikmina_sdk_xs()
        inner = [(x, self.z_slope_plane_offset(x, t0)) for x in xs]
        outer = [(x, self.z_slope_plane_offset(x, t1)) for x in xs]
        # Right-slope attic normal (up-left): end face = thickness along that normal.
        dt = t1 - t0
        x_i, z_i = inner[-1]
        outer[-1] = (x_i - dt * self.sin, z_i + dt * self.cos)
        return inner + list(reversed(outer))

    def sikmina_nh_pts(self) -> list[tuple[float, float]]:
        """NaturHeld + StoSilent face on the slopes (perp thickness t_nh_face)."""
        return self._slope_band_pts(0.0, self.t_nh_face)

    def sikmina_flex_pts(self) -> list[tuple[float, float]]:
        """Flex 50 between the latě, flush with the 40 mm lať. No quilt over them."""
        t0 = self.t_nh_face
        return self._slope_band_pts(t0, t0 + self.p.rost_d)

    def sikmina_sdk_pts(self) -> list[tuple[float, float]]:
        """GKF/RF on the slopes, continued past X_FURN to the vertical acoustic return."""
        t0 = self.t_nh_face + self.t_flex_pack
        return self._slope_sdk_band_pts(t0, t0 + self.p.sdk_t)

    def _sikmina_segments(self) -> list[tuple[tuple[float, float], tuple[float, float]]]:
        """Ceiling polyline segments on the šikminy (room face), left then right."""
        a = (0.0, self.h_start)
        b = (self.x_false, self.z_false)
        c = (self.x_furn, self.z_gkf_horiz)
        return [(a, b), (b, c)]

    def sikmina_cd_band_pts(self) -> list[tuple[float, float]]:
        """CD grid zone thickness behind SDK."""
        t0 = self.t_nh_face + self.t_flex_pack + self.p.sdk_t
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
        """CD centers along the šikmina (⊥ krokvím — spaced along the slope)."""
        p = self.p
        return self._path_stations(p.cd_spacing, p.cd_first_inset)

    def sikmina_cd_quad(
        self,
        x: float,
        z: float,
        tx: float,
        tz: float,
        nx: float,
        nz: float,
    ) -> list[tuple[float, float]]:
        """XZ rectangle for one CD profile behind SDK."""
        p = self.p
        t0 = self.t_nh_face + self.t_flex_pack + p.sdk_t
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
        for st in self.sikmina_cd_stations():
            quad = self.sikmina_cd_quad(*st)
            xs = [pt[0] for pt in quad]
            if min(xs) < x_lo or max(xs) > x_hi:
                continue
            quads.append(quad)
        return quads

    def sikmina_rost_ribbon_pts(self) -> list[tuple[float, float]]:
        """XZ ribbon of one lať // krokvím (full šikmina run in the Flex zone).

        Latě run eave→ridge (parallel to rafters); spacing is along Y, so a
        transverse section that cuts a lať shows this continuous ribbon.
        """
        return self._slope_band_pts(self.t_nh_face, self.t_nh_face + self.p.rost_d)

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
        p = self.p
        return self.y_stations(y0, y1, p.rost_spacing, p.rost_first_inset)

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
        """Thin steel hanger prism from CD outer face up toward the rafter."""
        p = self.p
        t_cd_outer = self.t_nh_face + self.t_flex_pack + p.sdk_t + p.cd_t
        # Perp length of plenum / hanger to rafter underside at this x.
        z_cd = self.z_slope_offset(x, t_cd_outer)
        z_raf = self.z_raf(x)
        hang = max((z_raf - z_cd) * self.cos - 2.0, 20.0)
        cx = x + nx * t_cd_outer
        cz = z + nz * t_cd_outer
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

    def soffit_nh_pts(self) -> list[tuple[float, float]]:
        """L-shaped NH+StoSilent on the soffit box: vertical face + underside.

        Outer vertical face flush with the slope NH at X_FURN; thickness goes
        into the box (toward the wall) so the junction has no step into the room.
        """
        p = self.p
        t = self.t_nh_face
        z0 = self.z_nabeh_bot
        z1 = self.z_gkf_horiz
        return [
            (self.x_nh_outer, z0),
            (p.room_width, z0),
            (p.room_width, z0 + t),
            (self.x_nh_inner, z0 + t),
            (self.x_nh_inner, z1),
            (self.x_nh_outer, z1),
        ]

    def soffit_flex_pts(self) -> list[tuple[float, float]]:
        """Flex cavity in the soffit box + small pack under slope GKF to the return.

        Below Z_GKF: fills the NH L box. Between X_FURN and the vertical GKF
        the top follows the slope-GKF underside (angled seat on the return).
        """
        p = self.p
        t = self.t_nh_face
        t0 = self.t_nh_face + self.t_flex_pack
        xb = self.x_sdk_break
        x_vert = xb - p.sdk_t  # room face of vertical GKF (= lid overhang start)
        z_br = self.z_slope_plane_offset(xb, t0)
        z_fu = self.z_slope_plane_offset(self.x_furn, t0)
        z_vert_top = self.z_slope_plane_offset(x_vert, t0)
        return [
            (self.x_nh_inner, self.z_nabeh_bot + t),
            (p.room_width, self.z_nabeh_bot + t),
            (p.room_width, self.z_gkf_horiz),
            (x_vert, self.z_gkf_horiz),
            (x_vert, z_vert_top),
            (self.x_furn, z_fu),
            (self.x_furn, self.z_gkf_horiz),
            (self.x_nh_inner, self.z_gkf_horiz),
        ]

    def soffit_sdk_lid_pts(self) -> list[tuple[float, float]]:
        """Horizontal GKF lid — extends past the front CD to seat the vertical return.

        Runs from the room face of the vertical GKF to the eave wall so the
        corner is a proper L (lid beyond the CD), not an edge-only touch.
        """
        p = self.p
        t = p.sdk_t
        x0 = self.x_sdk_break - p.sdk_t
        return [
            (x0, self.z_gkf_horiz),
            (p.room_width, self.z_gkf_horiz),
            (p.room_width, self.z_gkf_horiz + t),
            (x0, self.z_gkf_horiz + t),
        ]

    def soffit_sdk_vertical_pts(self) -> list[tuple[float, float]]:
        """Vertical GKF return at the rost front, seated on the lid overhang.

        Attic face at `x_nh_inner` (CD front). Top is cut parallel to the slope
        GKF underside so the two boards join on that angled face instead of
        touching only at an edge. Bottom sits on the lid (which extends past CD).
        """
        p = self.p
        t0 = self.t_nh_face + self.t_flex_pack
        xb = self.x_sdk_break
        x0 = xb - p.sdk_t
        z_bot = self.z_gkf_horiz + p.sdk_t
        # Angled top // slope GKF inner plane (miter seat).
        z_top_attic = self.z_slope_plane_offset(xb, t0)
        z_top_room = self.z_slope_plane_offset(x0, t0)
        return [
            (x0, z_bot),
            (xb, z_bot),
            (xb, z_top_attic),
            (x0, z_top_room),
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
        """MW plenum + between-rafter fill: above CD / GKF lid, below rafters."""
        p = self.p
        t_below = self.t_soft_below_sdk + p.cd_t
        # Follow the slope-GKF plane to the rost-front break, then step to the lid CD.
        z_pack = self.z_slope_plane_offset(self.x_sdk_break, t_below)
        z_horiz_cd_top = self.z_gkf_horiz + p.sdk_t + p.cd_t
        return [
            (0.0, self.z_slope_offset(0.0, t_below)),
            (self.x_false, self.z_slope_offset(self.x_false, t_below)),
            (self.x_furn, self.z_slope_offset(self.x_furn, t_below)),
            (self.x_sdk_break, z_pack),
            # Step down at the rost-front GKF zlom onto the horizontal CD plane.
            (self.x_sdk_break, z_horiz_cd_top),
            (p.room_width, z_horiz_cd_top),
            (p.room_width, self.z_raf(p.room_width)),
            (self.x_ridge, self.z_raf(self.x_ridge)),
            (0.0, self.z_raf(0.0)),
        ]

    def horiz_cd_x_stations(self) -> list[float]:
        """CD centres on the GKF lid: first flush with rost front, then @ spacing."""
        p = self.p
        # Front face of first CD at x_nh_inner (rost edge) → centre half a CD inboard.
        front = self.x_sdk_break + p.cd_w * 0.5
        x1 = p.room_width - p.wall_plaster - p.cd_t - p.cd_first_inset
        out = [front]
        x = front + p.cd_spacing
        while x <= x1:
            out.append(x)
            x += p.cd_spacing
        return out

    def horiz_cd_quad(self, x: float) -> list[tuple[float, float]]:
        """XZ section of one horizontal CD sitting on the GKF lid."""
        p = self.p
        z0 = self.z_gkf_horiz + p.sdk_t
        hw = p.cd_w * 0.5
        d = p.cd_t
        return [
            (x - hw, z0),
            (x + hw, z0),
            (x + hw, z0 + d),
            (x - hw, z0 + d),
        ]

    def horiz_wall_ud_pts(self) -> list[tuple[float, float]]:
        """UD/CD perimeter channel on the eave plaster, same Z as horizontal CD."""
        p = self.p
        x1 = p.room_width - p.wall_plaster
        x0 = x1 - p.cd_t
        z0 = self.z_gkf_horiz + p.sdk_t
        return [(x0, z0), (x1, z0), (x1, z0 + p.cd_t), (x0, z0 + p.cd_t)]

    def horiz_break_ud_pts(self) -> list[tuple[float, float]]:
        """Deprecated alias: front soffit CD is the first horiz_cd station (rost-flush).

        Kept for callers that still ask for a break profile; returns that front CD.
        """
        xs = self.horiz_cd_x_stations()
        return self.horiz_cd_quad(xs[0]) if xs else []

    def horiz_hanger_top_z(self, x: float) -> float:
        """Underside of rafter at x (hang point for Nonius over the soffit bay)."""
        return self.z_raf(x)

    def horiz_hanger_bot_z(self) -> float:
        """Top of horizontal CD (Nonius seats here)."""
        p = self.p
        return self.z_gkf_horiz + p.sdk_t + p.cd_t

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


def xz_polyline(pts: list[tuple[float, float]], label: str) -> Wire:
    wire = Wire.make_polygon([xz(x, z) for x, z in pts], close=False)
    wire.label = label
    return wire


def xz_line(x0: float, z0: float, x1: float, z1: float, label: str) -> Edge:
    edge = Edge.make_line(xz(x0, z0), xz(x1, z1))
    edge.label = label
    return edge
