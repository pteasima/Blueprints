"""Shared Obývák 1.02 parameters and 2D sketch helpers (mm).

World:
  X = eave ↔ eave (room_width), Y = kitchen ↔ living (room_length), Z up.

2D drawings sit in Plane.XZ for the orthographic exporter:
  section X = transverse, elevation X = longitudinal (world Y).
3D (`models/obyvak.py`) extrudes section profiles along Y and gable profiles along Y
(thickness) / X (span).

Šikminy stack (interior → attic; thicknesses ⊥ to the face unless noted):

  StoSilent Top Finish + Top Basic + NaturHeld 140 (60)     → `NaturHeld 140`
  dřevěný rošt: latě KVH 60×40 @ ~625 // krokvím (⊥ CD)   → `dreveny_rost`
  NaturHeld Flex 50 between those latě (60)                 → `NaturHeld Flex 50`
  vapour foil (~1) + GKF/RF 12.5                            → `sdk`
  CD Rigips 60×27 @ ~625 ⊥ krokvím                          → `cd`
  Nonius / přímý závěs CD→krokve                            → `zaves`
  Domo Plus plenum (80)                                     → `vata`
  krokve 100/160 @ ~875 + MW between                        → `krov` / `vata`
  zavětrovací pásky 40×2 @ 45° X across krokve (racking)    → `paska`
  (střešní latě / kontralatě above rafters stay in krytina build-up)

Right eave soffit box: NH L, Flex cavity + latový rost (latě @625, Flex between),
GKF lid at Z≈H_start, horizontal CD @625 above the lid, Nonius CD→krokve.
Soffit rost hangs from that CD (drop hangers) and is braced to the eave wall
(angle brackets). Furniture and pozednice are not structural.
"""

from __future__ import annotations

import math
from dataclasses import dataclass

from build123d import Edge, Face, Vector, Wire

# CAD / viewer part labels (human-readable where the contractor sheet names products).
LABEL_NATURHELD = "NaturHeld 140"
LABEL_FLEX = "NaturHeld Flex 50"
LABEL_ROST = "dreveny_rost"
LABEL_CD = "cd"
LABEL_ZAVES = "zaves"
LABEL_PASKA = "paska"


@dataclass(frozen=True)
class ObyvakParams:
    """Room and build-up thicknesses. Layer stack keeps H_START / Z_SOFFIT honest."""

    room_width: float = 5350.0
    room_length: float = 11100.0
    ridge_z: float = 5850.0
    eave_wall_z: float = 3200.0
    roof_angle_deg: float = 40.0
    furniture_width: float = 450.0
    furniture_height: float = 2450.0
    furniture_gap: float = 20.0
    wall_mason: float = 250.0
    wall_eps: float = 200.0
    wall_plaster: float = 15.0
    plate_w: float = 140.0
    plate_h: float = 100.0
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
    roof_overhang: float = 280.0
    predstena_kitchen: float = 190.0
    predstena_living: float = 450.0
    predstena_bottom_z: float = 2450.0
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
        # Flex + foil + GKF behind the NH face (still below the CD grid).
        self.t_flex_pack = p.flex_t + p.foil_t
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

        self.xl_eps = -p.wall_plaster - p.wall_mason - p.wall_eps
        self.xl_mas = -p.wall_plaster - p.wall_mason
        self.xr_int = p.room_width
        self.xr_mas = p.room_width + p.wall_plaster + p.wall_mason
        self.xr_eps = p.room_width + p.wall_plaster + p.wall_mason + p.wall_eps
        self.left_eave = self.xl_eps - p.roof_overhang
        self.right_eave = self.xr_eps + p.roof_overhang
        self.poz_l0 = self.xl_mas + p.wall_mason - p.plate_w
        self.poz_r0 = self.xr_int + p.wall_plaster

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

    def _slope_band_pts(self, t0: float, t1: float) -> list[tuple[float, float]]:
        """Closed XZ band on the šikminy (0→X_FURN) between two parallel offsets."""
        xs = self._sikmina_xs()
        inner = [(x, self.z_slope_offset(x, t0)) for x in xs]
        outer = [(x, self.z_slope_offset(x, t1)) for x in xs]
        return inner + list(reversed(outer))

    def sikmina_nh_pts(self) -> list[tuple[float, float]]:
        """NaturHeld + StoSilent face on the slopes (perp thickness t_nh_face)."""
        return self._slope_band_pts(0.0, self.t_nh_face)

    def sikmina_flex_pts(self) -> list[tuple[float, float]]:
        """Flex 50 (+ foil) zone behind NH on the slopes — latě sit inside this band."""
        t0 = self.t_nh_face
        return self._slope_band_pts(t0, t0 + self.t_flex_pack)

    def sikmina_sdk_pts(self) -> list[tuple[float, float]]:
        """GKF/RF board on the slopes, outside the Flex pack."""
        t0 = self.t_nh_face + self.t_flex_pack
        return self._slope_band_pts(t0, t0 + self.p.sdk_t)

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
        """Flex 50 cavity inside the soffit box (behind the NH L, under the GKF lid)."""
        p = self.p
        t = self.t_nh_face
        return [
            (self.x_nh_inner, self.z_nabeh_bot + t),
            (p.room_width, self.z_nabeh_bot + t),
            (p.room_width, self.z_gkf_horiz),
            (self.x_nh_inner, self.z_gkf_horiz),
        ]

    def soffit_sdk_lid_pts(self) -> list[tuple[float, float]]:
        """Horizontal GKF lid over the soffit box (fire / ceiling plane at Z≈H_START)."""
        p = self.p
        t = p.sdk_t
        return [
            (self.x_furn, self.z_gkf_horiz),
            (p.room_width, self.z_gkf_horiz),
            (p.room_width, self.z_gkf_horiz + t),
            (self.x_furn, self.z_gkf_horiz + t),
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
        z_pack = self.z_slope_offset(self.x_furn, t_below)
        # Horizontal bay: GKF lid + CD, then tall Nonius plenum to the eave rafters.
        z_horiz_cd_top = self.z_gkf_horiz + p.sdk_t + p.cd_t
        return [
            (0.0, self.z_slope_offset(0.0, t_below)),
            (self.x_false, self.z_slope_offset(self.x_false, t_below)),
            (self.x_furn, z_pack),
            # Step down at the break: slope pack is thicker than the horizontal CD plane.
            (self.x_furn, z_horiz_cd_top),
            (p.room_width, z_horiz_cd_top),
            (p.room_width, self.z_raf(p.room_width)),
            (self.x_ridge, self.z_raf(self.x_ridge)),
            (0.0, self.z_raf(0.0)),
        ]

    def horiz_cd_x_stations(self) -> list[float]:
        """CD centres on the horizontal GKF lid (X_FURN → wall), spaced along X."""
        p = self.p
        x0 = self.x_furn + p.cd_first_inset
        # Leave room for the wall UD channel against the plaster.
        x1 = p.room_width - p.wall_plaster - p.cd_t - p.cd_first_inset
        return self.y_stations(x0, x1, p.cd_spacing, 0.0)

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
        """UD at the šikmina→vodorovný break (X_FURN), same Z as horizontal CD."""
        p = self.p
        x0 = self.x_furn
        x1 = self.x_furn + p.cd_t
        z0 = self.z_gkf_horiz + p.sdk_t
        return [(x0, z0), (x1, z0), (x1, z0 + p.cd_t), (x0, z0 + p.cd_t)]

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
        pts = [(x0, z_bot), (x1, z_bot)]
        top_xs = [x1]
        if min(x0, x1) < self.x_ridge < max(x0, x1):
            top_xs.append(self.x_ridge)
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
