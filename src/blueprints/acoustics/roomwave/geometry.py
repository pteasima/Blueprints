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
    # kitchen on the left and the TV on the right.
    #
    # Kept as solids: sofa, lamella wall, tall wood cabinets, kitchen counters,
    # island, fridge, the wall oven in that run, TV, sub. The dining table is a 40 mm top.
    # Omitted, because a solid box would invent a closed surface: hood, the open
    # hanging shelf above the island, dining chairs, plants, pendants, the person,
    # the low bench under the TV. The oven is a flush face in the counter run.
    # Cabinet-wall uppers in the white kitchen are omitted for the same reason.
    #
    # The sofa is Petr's 4.0 × 4.0 m. It starts 0.40 m off the TV gable so the
    # sub at 0.30 m from both walls stays outside the sofa. The lamella is the
    # same run, just above the back. The island is his 2.5 × 1.2 × 0.9 m, long
    # side along the room. The kitchen end sits on the drawn island; the extra
    # length runs toward the dining table.
    sofa_y0, run = 0.40, 4.00
    sofa_y1 = sofa_y0 + run
    back_h, seat_h = 0.95, 0.60
    sofa = (
        Box("sofa", x_wall - 0.40, sofa_y0, 0.0, 0.40, run, back_h),
        Box("sofa", x_wall - 1.10, sofa_y0, 0.0, 0.70, run, seat_h),
        Box("sofa", x_wall - 4.00, sofa_y1 - 0.40, 0.0, 2.90, 0.40, back_h),
        Box("sofa", x_wall - 4.00, sofa_y1 - 1.10, 0.0, 2.90, 0.70, seat_h),
    )
    shelf_z0, shelf_z1 = 1.02, 2.45
    shelf_box = (
        Box("shelf", x_wall - 0.18, sofa_y0, shelf_z0, 0.18, run, shelf_z1 - shelf_z0),
    )
    # Wood-panelled tall units behind the dining table, between the shelf and
    # the kitchen. The kitchen end matches the elevation; the TV end follows
    # the 4.0 m shelf, so this run is shorter than the drawing.
    tall_y1 = 6.90
    tall = (Box("tall", x_wall - 0.60, sofa_y1, 0.0, 0.60, tall_y1 - sofa_y1, shelf_z1),)
    # Fridge in the cabinet-wall run. Oven is not a separate solid.
    fridge_y0, fridge_y1 = 8.70, 9.50
    kitchen = (
        Box("kitchen", x_wall - 0.60, tall_y1, 0.0, 0.60, fridge_y0 - tall_y1, 0.90),
        Box("kitchen", x_wall - 0.60, fridge_y1, 0.0, 0.60, length - fridge_y1, 0.90),
        Box("fridge", x_wall - 0.65, fridge_y0, 0.0, 0.65, fridge_y1 - fridge_y0, 1.85),
        # Wall oven in that run, flush with the counters. Not a separate tall box.
        Box("oven", x_wall - 0.60, 7.52, 1.05, 0.60, 0.53, 0.45),
        Box("kitchen", 0.40, length - 0.60, 0.0, x_wall - 0.60 - 0.40, 0.60, 0.90),
        Box("kitchen", 0.40, length - 0.35, 1.45, x_wall - 0.60 - 0.40, 0.35, 0.75),
    )
    # 1.2 m into the room, 2.5 m along it, 0.90 m aisle in front of the counters.
    island = (Box("island", x_wall - 0.60 - 0.90 - 1.20, 7.30, 0.0, 1.20, 2.50, 0.90),)
    table = (Box("table", 2.30, 4.80, 0.74, 1.40, 1.25, 0.04),)
    boxes = sofa + shelf_box + tall + kitchen + island + table

    # TV on the living gable, edge-on in the cabinet-wall elevation. No bench.
    # Sub is on the floor in the cabinet-wall / TV-gable corner.
    tv_x0, tv_x1 = 2.70, 4.30
    sources = (
        Marker("sub", x_wall - 0.30, 0.30, 0.25, "sub"),
        Marker("tv_l", tv_x0 + 0.12, 0.08, 1.15, "tv"),
        Marker("tv_r", tv_x1 - 0.12, 0.08, 1.15, "tv"),
        Marker("talker", 3.00, 6.50, 1.20, "talk"),
    )
    seat_x = x_wall - 0.75
    island_box = island[0]
    receivers = (
        Marker("sofa_1", seat_x, 1.30, 1.15, "sofa"),
        Marker("sofa_2", seat_x, 2.50, 1.15, "sofa"),
        Marker("sofa_3", seat_x, 3.60, 1.15, "sofa"),
        Marker("dining", 3.00, 5.40, 1.15, "dining"),
        Marker("island", island_box.x - 0.25, island_box.y + 0.5 * island_box.dy, 1.15, "island"),
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
        tv=(tv_x0, tv_x1, 0.75, 1.70),
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
