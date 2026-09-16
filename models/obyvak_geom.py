"""Shared Obývák 1.02 parameters and 2D sketch helpers (mm).

World:
  X = eave ↔ eave (room_width), Y = kitchen ↔ living (room_length), Z up.

2D drawings sit in Plane.XZ for the orthographic exporter:
  section X = transverse, elevation X = longitudinal (world Y).
3D (`models/obyvak.py`) extrudes section profiles along Y and gable profiles along Y
(thickness) / X (span).
"""

from __future__ import annotations

import math
from dataclasses import dataclass

from build123d import Edge, Face, Vector, Wire


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
    plenum_t: float = 100.0
    cd_t: float = 27.0
    finish_t: float = 2.0
    basic_t: float = 2.0
    naturheld_t: float = 40.0
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
    # Window/terrace eave = X=0; kitchen cabinets on X=room_width.
    # Chodba + spíž on kitchen gable; zádveří on living gable.
    pocket_doors: tuple[tuple[str, float, float], ...] = (
        ("kitchen", 0.0, 1000.0),  # chodba · roh u oken
        ("kitchen", 3700.0, 1000.0),  # spíž · 5350 − 650 − 1000
        ("living", 0.0, 1100.0),  # zádveří · roh u oken
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
    soffit_hint_t: float = 30.0
    ridge_runout: float = 200.0


class ObyvakLayout:
    """Derived measures — same formulas as the legacy ezdxf sheets."""

    def __init__(self, p: ObyvakParams):
        self.p = p
        th = math.radians(p.roof_angle_deg)
        self.sin = math.sin(th)
        self.cos = math.cos(th)
        self.tan = math.tan(th)

        self.t_soft_below_sdk = (
            p.finish_t + p.basic_t + p.naturheld_t + p.flex_t + p.foil_t + p.sdk_t
        )
        self.t_left = p.plenum_t + p.cd_t + self.t_soft_below_sdk
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

    def ceil_pts(self) -> list[tuple[float, float]]:
        p = self.p
        return [
            (0.0, self.h_start),
            (self.x_false, self.z_false),
            (self.x_furn, self.z_gkf_horiz),
            (p.room_width, self.z_gkf_horiz),
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
        p = self.p
        return [
            (0.0, self.h_start),
            (self.x_false, self.z_false),
            (self.x_furn, self.z_gkf_horiz),
            (p.room_width, self.z_gkf_horiz),
            (p.room_width, self.z_raf(p.room_width)),
            (self.x_ridge, self.z_raf(self.x_ridge)),
            (0.0, self.z_raf(0.0)),
        ]

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
        t = self.p.soffit_hint_t
        ceil = self.ceil_pts()
        return ceil + [(x, z - t) for x, z in reversed(ceil)]

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
