"""Obývák 1.02 — příčný řez (panel A), parametrické 2D profily v Plane.XZ.

Hrubý řez místnosti: stěny, krov, podhled, soffit jako hmota (bez detailu skladeb).
Bez textů a kót. 3D později: extrude podél Y (délka místnosti je v params.room_length).

    python -m blueprints.export obyvak_section

Zdroj geometrie: inputs/obyvak/make_obyvak_sheet_84d0.py (panel A).
450 mm u skříní je hloubka u okapové stěny — neplést se štítovou předstěnou 450.
"""

from __future__ import annotations

import math
from dataclasses import asdict, dataclass

from build123d import Compound, Edge, Face, Vector, Wire


MODEL_NAME = "obyvak_section"
EXPORT_KIND = "section"


@dataclass(frozen=True)
class ObyvakParams:
    """Transverse section parameters (mm). Layer thicknesses keep H_START honest."""

    room_width: float = 5350.0
    room_length: float = 11100.0  # stub for later 3D; unused in this 2D section
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


PARAMS = asdict(ObyvakParams())


class ObyvakLayout:
    """Derived measures — same formulas as the legacy ezdxf sheet."""

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

        self.xl_eps = -p.wall_plaster - p.wall_mason - p.wall_eps
        self.xl_mas = -p.wall_plaster - p.wall_mason
        self.xr_int = p.room_width
        self.xr_mas = p.room_width + p.wall_plaster + p.wall_mason
        self.xr_eps = p.room_width + p.wall_plaster + p.wall_mason + p.wall_eps
        self.left_eave = self.xl_eps - p.roof_overhang
        self.right_eave = self.xr_eps + p.roof_overhang
        self.poz_l0 = self.xl_mas + p.wall_mason - p.plate_w
        self.poz_r0 = self.xr_int + p.wall_plaster

    def z_raf(self, x: float) -> float:
        return self.z_raf_inner_ridge - abs(x - self.x_ridge) * self.tan

    def z_raf_outer(self, x: float) -> float:
        return self.z_raf(x) + self.p.rafter_t / self.cos

    def z_tile(self, x: float) -> float:
        return self.z_raf(x) + (self.t_above_raf + self.p.rafter_t) / self.cos


def _xz(x: float, z: float) -> Vector:
    return Vector(x, 0.0, z)


def _face(pts: list[tuple[float, float]], label: str) -> Face:
    return Face(Wire.make_polygon([_xz(x, z) for x, z in pts]), label=label)


def _rect(x: float, z: float, w: float, h: float, label: str) -> Face:
    return _face([(x, z), (x + w, z), (x + w, z + h), (x, z + h)], label)


def _polyline(pts: list[tuple[float, float]], label: str) -> Wire:
    verts = [_xz(x, z) for x, z in pts]
    wire = Wire.make_polygon(verts, close=False)
    wire.label = label
    return wire


def _line(x0: float, z0: float, x1: float, z1: float, label: str) -> Edge:
    edge = Edge.make_line(_xz(x0, z0), _xz(x1, z1))
    edge.label = label
    return edge


def build_layout(params: ObyvakParams | None = None) -> ObyvakLayout:
    return ObyvakLayout(params or ObyvakParams())


def build(params: ObyvakParams | None = None):
    p = params or ObyvakParams()
    g = ObyvakLayout(p)

    parts: list = []

    parts.append(_rect(g.xl_eps, -p.floor_t, g.xr_eps - g.xl_eps, p.floor_t, "podlaha"))
    parts.append(_rect(g.xl_eps, -p.floor_t, p.wall_eps, p.eave_wall_z + p.floor_t, "eps"))
    parts.append(_rect(g.xl_mas, -p.floor_t, p.wall_mason, p.eave_wall_z + p.floor_t, "zdivo"))
    parts.append(_rect(-p.wall_plaster, 0.0, p.wall_plaster, p.eave_wall_z, "omitka"))
    parts.append(_rect(p.room_width, 0.0, p.wall_plaster, p.eave_wall_z, "omitka"))
    parts.append(
        _rect(p.room_width + p.wall_plaster, -p.floor_t, p.wall_mason, p.eave_wall_z + p.floor_t, "zdivo")
    )
    parts.append(_rect(g.xr_mas, -p.floor_t, p.wall_eps, p.eave_wall_z + p.floor_t, "eps"))

    parts.append(_rect(g.x_furn, 0.0, p.furniture_width, p.furniture_height, "nabytek"))
    parts.append(_rect(g.poz_l0, p.eave_wall_z, p.plate_w, p.plate_h, "pozednice"))
    parts.append(_rect(g.poz_r0, p.eave_wall_z, p.plate_w, p.plate_h, "pozednice"))

    zle = g.z_tile(0.0) - (0.0 - g.left_eave) * g.tan
    zre = g.z_tile(p.room_width) - (g.right_eave - p.room_width) * g.tan
    parts.append(
        _face(
            [
                (g.left_eave, zle - g.t_above_raf / g.cos),
                (g.x_ridge, g.z_raf_outer(g.x_ridge)),
                (g.right_eave, zre - g.t_above_raf / g.cos),
                (g.right_eave, zre - (g.t_above_raf + p.rafter_t) / g.cos),
                (g.x_ridge, g.z_raf(g.x_ridge)),
                (g.left_eave, zle - (g.t_above_raf + p.rafter_t) / g.cos),
            ],
            "krov",
        )
    )
    parts.append(
        _polyline(
            [(g.left_eave, zle), (g.x_ridge, p.ridge_z), (g.right_eave, zre)],
            "krytina",
        )
    )

    parts.append(
        _face(
            [
                (0.0, g.h_start),
                (g.x_false, g.z_false),
                (g.x_furn, g.z_gkf_horiz),
                (p.room_width, g.z_gkf_horiz),
                (p.room_width, g.z_raf(p.room_width)),
                (g.x_ridge, g.z_raf(g.x_ridge)),
                (0.0, g.z_raf(0.0)),
            ],
            "vata",
        )
    )
    parts.append(
        _rect(g.x_furn, g.z_nabeh_bot, p.furniture_width, g.z_gkf_horiz - g.z_nabeh_bot, "soffit")
    )
    parts.append(
        _polyline(
            [
                (0.0, g.h_start),
                (g.x_false, g.z_false),
                (g.x_furn, g.z_gkf_horiz),
                (p.room_width, g.z_gkf_horiz),
            ],
            "podhled",
        )
    )
    parts.append(_line(g.x_furn, g.z_gkf_horiz, g.x_furn, g.z_nabeh_bot, "podhled"))
    parts.append(_line(g.x_furn, g.z_nabeh_bot, p.room_width, g.z_nabeh_bot, "podhled"))

    shape = Compound(obj=parts, children=parts, label=MODEL_NAME)
    meta = {
        "params": asdict(p),
        "kind": EXPORT_KIND,
        "derived": {
            "h_start": g.h_start,
            "x_furn": g.x_furn,
            "x_false": g.x_false,
            "z_false": g.z_false,
            "z_nabeh_bot": g.z_nabeh_bot,
            "z_gkf_horiz": g.z_gkf_horiz,
        },
    }
    return shape, meta


if __name__ == "__main__":
    from blueprints.export_utils import export_section, summarize_params

    shape, meta = build()
    paths = export_section(shape, MODEL_NAME)
    print(f"Built {MODEL_NAME}: {summarize_params(meta['derived'])}")
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")
