"""Air volume, furniture, sources, and receivers for the obývák wave model.

Coordinates are metres. X runs from the window eave to the cabinet wall,
Y from the living gable (TV) to the kitchen gable, Z up. The numbers come
from ``ObyvakParams`` / ``ObyvakLayout``; the furniture positions are the
layout described for this study.
"""

from __future__ import annotations

import math
from dataclasses import dataclass

from blueprints.acoustics.layers import C0

# Third-octave centres used in the report.
THIRDS: tuple[float, ...] = (31.5, 40, 50, 63, 80, 100, 125, 160, 200, 250, 315, 400, 500)

# Pleasant living-room bass, not a dead studio. The recommendation aims here.
PLEASANT_LO = 0.40
PLEASANT_HI = 0.90
PLEASANT_MID = 0.60
# ISO 3382 decay-time just-noticeable difference, as a fraction.
JND = 0.05

# Reference monopole strengths, m³/s. Absolute SPL is this source, not a
# calibrated subwoofer.
Q_SUB = 1.0e-4
Q_TV = 0.5e-4
Q_TALK = 1.0e-4


@dataclass(frozen=True)
class Box:
    """Axis-aligned solid removed from the air, or drawn as a ray obstacle."""

    name: str
    x: float
    y: float
    z: float
    dx: float
    dy: float
    dz: float

    @property
    def x1(self) -> float:
        return self.x + self.dx

    @property
    def y1(self) -> float:
        return self.y + self.dy

    @property
    def z1(self) -> float:
        return self.z + self.dz


@dataclass(frozen=True)
class Marker:
    name: str
    x: float
    y: float
    z: float
    group: str


@dataclass(frozen=True)
class Shape:
    """Section derived from the parametric layout, in metres."""

    x_wall: float
    length: float
    x_false: float
    x_soffit: float
    z_eave: float
    z_ridge: float
    z_cut: float
    z_soffit: float
    z_wall: float
    y_living: float
    y_kitchen: float
    window_h: float
    windows: tuple[tuple[float, float], ...]
    rug: tuple[float, float, float, float]
    shelf: tuple[float, float, float, float]
    # TV screen on the living gable: x0, x1, z0, z1. No cabinet under it.
    tv: tuple[float, float, float, float]
    boxes: tuple[Box, ...]
    sources: tuple[Marker, ...]
    receivers: tuple[Marker, ...]

    def upper(self, soffit: str) -> list[tuple[float, float]]:
        """XZ polygon of the air above the trap bottom. ``soffit`` is ``as_built`` or ``removed``."""
        if soffit == "removed":
            return [
                (0.0, self.z_cut),
                (self.x_wall, self.z_cut),
                (self.x_wall, self.z_wall),
                (self.x_false, self.z_ridge),
                (0.0, self.z_eave),
            ]
        return [
            (0.0, self.z_cut),
            (self.x_wall, self.z_cut),
            (self.x_wall, self.z_soffit),
            (self.x_soffit, self.z_soffit),
            (self.x_soffit, self.z_eave),
            (self.x_false, self.z_ridge),
            (0.0, self.z_eave),
        ]

    def lower(self) -> list[tuple[float, float]]:
        return [
            (0.0, 0.0),
            (self.x_wall, 0.0),
            (self.x_wall, self.z_cut),
            (0.0, self.z_cut),
        ]

    def analytic_volume(self, soffit: str) -> float:
        low = abs(_shoelace(self.lower()))
        up = abs(_shoelace(self.upper(soffit)))
        return low * self.length + up * (self.y_kitchen - self.y_living)


def _shoelace(poly: list[tuple[float, float]]) -> float:
    area = 0.0
    for (x0, z0), (x1, z1) in zip(poly, poly[1:] + poly[:1]):
        area += x0 * z1 - x1 * z0
    return 0.5 * area


def load_shape() -> Shape:
    """Build the acoustic section from the current obývák parameters."""
    import sys
    from pathlib import Path

    root = Path(__file__).resolve().parents[4]
    models = str(root / "models")
    if models not in sys.path:
        sys.path.insert(0, models)
    from obyvak_geom import ObyvakParams, build_layout

    params = ObyvakParams()
    layout = build_layout(params)
    mm = 0.001
    x_wall = params.room_width * mm
    length = params.room_length * mm
    x_false = layout.x_false * mm
    x_soffit = layout.x_furn * mm
    z_eave = layout.h_start * mm
    z_ridge = layout.z_false * mm
    z_cut = params.predstena_bottom_z * mm
    z_soffit = layout.z_nabeh_bot * mm
    slope = (z_eave - z_ridge) / (x_soffit - x_false)
    z_wall = z_ridge + (x_wall - x_false) * slope
    y_living = params.predstena_living * mm
    y_kitchen = length - params.predstena_kitchen * mm
    windows = tuple((y0 * mm, (y0 + width) * mm) for y0, width in params.eave_windows)

    # Cabinet wall, TV gable (Y = 0) toward kitchen. Petr's elevation has the
    # kitchen on the left and the TV on the right. The sofa is his 4.0 × 4.0 m
    # figure: long run on the back wall, TV end at the gable, chaise on the
    # dining side toward the windows. The lamella wall is behind that run.
    sofa_y0, sofa_y1 = 0.55, 4.55
    sofa = (
        Box("sofa", x_wall - 0.40, sofa_y0, 0.0, 0.40, 4.00, 0.85),
        Box("sofa", x_wall - 1.10, sofa_y0, 0.0, 0.70, 4.00, 0.45),
        Box("sofa", x_wall - 4.00, sofa_y1 - 0.40, 0.0, 2.90, 0.40, 0.85),
        Box("sofa", x_wall - 4.00, sofa_y1 - 1.10, 0.0, 2.90, 0.70, 0.45),
    )
    # Lamellas on the back wall, same run as the sofa, just above the back.
    shelf_z0, shelf_z1 = 0.95, 2.40
    shelf_box = (
        Box("shelf", x_wall - 0.18, sofa_y0, shelf_z0, 0.18, 4.00, shelf_z1 - shelf_z0),
    )
    # Wood-panelled tall units behind the dining table, between kitchen and shelf.
    tall = (
        Box("tall", x_wall - 0.60, sofa_y1, 0.0, 0.60, 3.15, 2.20),
    )
    kitchen_y0 = sofa_y1 + 3.15
    kitchen = (
        Box("kitchen", x_wall - 0.60, kitchen_y0, 0.0, 0.60, length - kitchen_y0, 0.90),
        Box("kitchen", x_wall - 0.35, kitchen_y0, 1.45, 0.35, length - kitchen_y0, 0.75),
        Box("fridge", x_wall - 0.70, 9.85, 0.0, 0.70, 0.90, 2.10),
        Box("hood", x_wall - 1.05, 8.40, 1.70, 0.70, 0.65, 0.70),
        Box("kitchen", 0.40, length - 0.60, 0.0, x_wall - 0.60 - 0.40, 0.60, 0.90),
        Box("kitchen", 0.40, length - 0.35, 1.45, x_wall - 0.60 - 0.40, 0.35, 0.75),
    )
    island = (Box("island", 1.55, 8.40, 0.0, 1.60, 1.90, 0.90),)
    table = (Box("table", 2.05, 5.50, 0.74, 1.80, 0.95, 0.05),)
    chairs = tuple(
        Box("chair", x, y, 0.0, 0.42, 0.42, 0.78)
        for x in (2.20, 3.25)
        for y in (5.00, 6.55)
    )
    boxes = sofa + shelf_box + tall + kitchen + island + table + chairs

    # TV on the living gable. The low bench in the rendering is not in the model.
    # Sub is the purple circle: floor, back-wall / TV-gable corner, 0.30 m from both.
    tv_x0, tv_x1 = 2.55, 4.15
    sources = (
        Marker("sub", x_wall - 0.30, 0.30, 0.25, "sub"),
        Marker("tv_l", tv_x0 + 0.12, 0.08, 1.15, "tv"),
        Marker("tv_r", tv_x1 - 0.12, 0.08, 1.15, "tv"),
        Marker("talker", 2.95, 5.15, 1.20, "talk"),
    )
    seat_x = x_wall - 0.75
    receivers = (
        Marker("sofa_1", seat_x, 1.30, 1.15, "sofa"),
        Marker("sofa_2", seat_x, 2.50, 1.15, "sofa"),
        Marker("sofa_3", seat_x, 3.60, 1.15, "sofa"),
        Marker("dining", 2.95, 6.75, 1.15, "dining"),
        Marker("island", 1.15, 9.30, 1.15, "island"),
    )
    rug = (1.80, 5.20, 0.50, 4.60)
    shelf = (sofa_y0, sofa_y1, shelf_z0, shelf_z1)
    return Shape(
        x_wall=x_wall,
        length=length,
        x_false=x_false,
        x_soffit=x_soffit,
        z_eave=z_eave,
        z_ridge=z_ridge,
        z_cut=z_cut,
        z_soffit=z_soffit,
        z_wall=z_wall,
        y_living=y_living,
        y_kitchen=y_kitchen,
        window_h=params.window_h * mm,
        windows=windows,
        rug=rug,
        shelf=shelf,
        tv=(tv_x0, tv_x1, 0.70, 1.60),
        boxes=boxes,
        sources=sources,
        receivers=receivers,
    )


def shoe_box_axials(length: float, width: float, c: float = C0) -> dict[str, float]:
    """Length and width axials of a shoe box with this plan. Marks, not solved modes."""
    return {
        "Y1": c / (2.0 * length),
        "Y2": c / length,
        "X1": c / (2.0 * width),
    }


@dataclass(frozen=True)
class Variant:
    thickness_mm: int
    soffit: str
    furniture: bool

    @property
    def key(self) -> str:
        furn = "furn" if self.furniture else "empty"
        return f"{self.thickness_mm}-{self.soffit}-{furn}"

    @property
    def mesh_kind(self) -> str:
        return "removed" if self.soffit == "removed" else "as_built"

    def needs_fine(self, quick: bool) -> bool:
        if quick:
            return False
        if self.furniture and self.soffit == "as_built":
            return True
        if self.thickness_mm == 80 and self.soffit in ("rigid", "removed") and self.furniture:
            return True
        if self.thickness_mm == 80 and self.soffit == "as_built" and not self.furniture:
            return True
        return False

    def keep_modes(self) -> bool:
        return self.thickness_mm == 80 and self.soffit == "as_built" and self.furniture


def all_variants() -> tuple[Variant, ...]:
    rows = []
    for thickness in (60, 80, 100, 120):
        for soffit in ("as_built", "rigid", "removed"):
            for furniture in (True, False):
                rows.append(Variant(thickness, soffit, furniture))
    return tuple(rows)


def group_sources(shape: Shape) -> dict[str, list[tuple[Marker, float]]]:
    scale = {"sub": Q_SUB, "tv": Q_TV, "talk": Q_TALK}
    groups: dict[str, list[tuple[Marker, float]]] = {"sub": [], "tv": [], "talk": []}
    for marker in shape.sources:
        groups[marker.group].append((marker, scale[marker.group]))
    return groups


def interior_probe(shape: Shape) -> tuple[float, float, float]:
    """A point that stays in the air for both soffit shapes and both furniture states."""
    return (2.50, 5.20, 1.00)


def elements_per_wavelength(h: float, freq: float, c: float = C0) -> float:
    return c / (freq * h)


def six_per_wavelength_hz(h: float, c: float = C0) -> float:
    return c / (6.0 * h)


def in_window(y: float, windows: tuple[tuple[float, float], ...]) -> bool:
    return any(y0 <= y <= y1 for y0, y1 in windows)
