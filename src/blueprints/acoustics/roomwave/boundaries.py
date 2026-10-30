"""Locally reacting impedances for the obývák surfaces.

Slopes and the soffit use ``layers.surface_impedance`` at normal incidence.
The gable faces use the membrane admittance from ``panel.py`` (kitchen 625 mm
vertical, living 1000 mm horizontal, taped sheet, as-built wool). A real
β = α/4 on the floor, plaster, and glass matches the Sabine limit of those
fixed Eyring coefficients.
"""

from __future__ import annotations

import math
from functools import lru_cache

import numpy as np

from blueprints.acoustics.layers import Z0, surface_impedance
from blueprints.acoustics.obyvak import (
    FLOOR_ALPHA,
    GLASS_ALPHA,
    PLASTER_ALPHA,
    Resistivity,
    room_geometry,
    soffit_stack,
    slope_stack,
    trap_stack,
)
from blueprints.acoustics.panel import Cavity, Plate, _admittance, solve_modes
from blueprints.acoustics.roomwave.geometry import Fill, Variant, load_shape
from blueprints.acoustics.roomwave.helmholtz import beta_from_impedance

# Rug: 12 mm, 20 000 Pa·s/m², Miki. A thin carpet on a hard floor. Bass stays
# near zero, which matches the published carpet tables (about 0.02–0.08 at
# 125 Hz). Beranek, Noise and Vibration Control, revised ed., 1988, Ch. 9.
RUG_SIGMA = 20_000.0
RUG_DEPTH = 0.012

# Upholstered seating, random-incidence α. Octave anchors are the fabric-seat
# values used in architectural tables (about 0.15 at 125 Hz, 0.60 at 500 Hz,
# 0.70 at 1–2 kHz). 63 Hz is held at 0.15 so the bass stays in the 0.1–0.2
# band a domestic sofa actually has. Checked against ISO 354 object data for
# the Offecct Lucy 2-seater (SP report 18-106-M8, 2018): A_obj is 1.30 m² at
# 63 Hz and 3.28 m² at 500 Hz. Spread over this mesh's 18 m² of L-sofa
# surface, two to three such sofas are still only α ≈ 0.14–0.22 at 63 Hz.
# The old model was a 0.40 m block at 8 000 Pa·s/m², which gave α ≈ 0.60 at
# 63 Hz on that whole surface.
SOFA_ALPHA: tuple[tuple[float, float], ...] = (
    (50.0, 0.12),
    (63.0, 0.15),
    (80.0, 0.18),
    (100.0, 0.22),
    (125.0, 0.28),
    (160.0, 0.36),
    (200.0, 0.45),
    (250.0, 0.52),
    (315.0, 0.58),
    (400.0, 0.64),
    (500.0, 0.68),
    (630.0, 0.72),
    (800.0, 0.75),
    (1000.0, 0.76),
    (1250.0, 0.75),
    (1600.0, 0.74),
    (2000.0, 0.72),
    (2500.0, 0.70),
    (3150.0, 0.68),
    (4000.0, 0.65),
)

# Book-filled shelves. The lamella-plus-books transfer matrix (20 mm gap, no
# wool, 120 mm at 40 000 Pa·s/m², half the wall) is already modest at bass
# (α ≈ 0.12 at 63 Hz, 0.45 at 500 Hz) and then collapses to α ≈ 0.12 at 4 kHz,
# which a shelf of books does not do. These values keep that bass and the
# mid-band, and hold the top end near 0.55. Cox and D'Antonio, Acoustic
# Absorbers and Diffusers, 2nd ed., 2009: shelving loaded with books is a
# mid-frequency absorber, not a bass trap.
SHELF_ALPHA: tuple[tuple[float, float], ...] = (
    (50.0, 0.08),
    (63.0, 0.10),
    (80.0, 0.13),
    (100.0, 0.16),
    (125.0, 0.20),
    (160.0, 0.25),
    (200.0, 0.30),
    (250.0, 0.36),
    (315.0, 0.40),
    (400.0, 0.44),
    (500.0, 0.48),
    (630.0, 0.52),
    (800.0, 0.55),
    (1000.0, 0.57),
    (1250.0, 0.58),
    (1600.0, 0.58),
    (2000.0, 0.57),
    (2500.0, 0.56),
    (3150.0, 0.55),
    (4000.0, 0.54),
)

_HARD = ("kitchen", "tall", "fridge", "oven", "island", "table", "lid")
_FIXED_ALPHA = {"floor": FLOOR_ALPHA, "plaster": PLASTER_ALPHA, "glass": GLASS_ALPHA}


def _plaster_m() -> float:
    shape_params = _params()
    return (shape_params.finish_t + shape_params.basic_t) / 1000.0


def _params():
    import sys
    from pathlib import Path

    root = Path(__file__).resolve().parents[4]
    models = str(root / "models")
    if models not in sys.path:
        sys.path.insert(0, models)
    from obyvak_geom import ObyvakParams

    return ObyvakParams()


@lru_cache(maxsize=1)
def _membranes():
    """Area-weighted normal admittance of each gable, built once."""
    import sys
    from pathlib import Path

    from blueprints.acoustics.lattice import LATTICE_1000, LATTICE_625, layout_gable

    root = Path(__file__).resolve().parents[4]
    models = str(root / "models")
    if models not in sys.path:
        sys.path.insert(0, models)
    from obyvak_geom import build_layout

    params = _params()
    outline = build_layout(params).predstena_pts()
    plate = Plate()
    kitchen = layout_gable(outline, LATTICE_625, inset_mm=params.cd_first_inset)
    living = layout_gable(outline, LATTICE_1000, inset_mm=params.cd_first_inset)
    wool = Resistivity().mineral_wool
    return {
        "kitchen": (
            tuple(solve_modes(bay, plate) for bay in kitchen.bays),
            plate,
            Cavity(params.bass_k_air / 1000.0, params.bass_k_wool / 1000.0, wool),
        ),
        "living": (
            tuple(solve_modes(bay, plate) for bay in living.bays),
            plate,
            Cavity(params.bass_l_air / 1000.0, params.bass_l_wool / 1000.0, wool),
        ),
    }


def membrane_impedance(which: str, freq: float, fill: Fill | None = None) -> complex:
    systems, plate, cavity = _membranes()[which]
    if fill is not None:
        geom = room_geometry()
        if which == "living":
            depth = geom.living_cavity
            wool = min(max(fill.living_wool_m, 0.0), depth)
        else:
            depth = geom.kitchen_cavity
            wool = min(max(fill.kitchen_wool_m, 0.0), depth)
        cavity = Cavity(depth - wool, wool, fill.trap_sigma)
    total = 0.0
    admit = 0j
    for system in systems:
        admit += system.area * _admittance(system, freq, 0.0, plate.eta, plate.mu, cavity)
        total += system.area
    if total <= 0.0 or abs(admit) < 1e-16:
        return complex(1e12, 0.0)
    return total / admit


def _interp_alpha(table: tuple[tuple[float, float], ...], freq: float) -> float:
    """Log-frequency interpolation. Flat outside the table."""
    if freq <= table[0][0]:
        return table[0][1]
    if freq >= table[-1][0]:
        return table[-1][1]
    for (f0, a0), (f1, a1) in zip(table, table[1:]):
        if f0 <= freq <= f1:
            span = math.log(f1 / f0)
            if span <= 0.0:
                return a1
            weight = math.log(freq / f0) / span
            return a0 + (a1 - a0) * weight
    return table[-1][1]


def sabine_impedance(alpha: float) -> complex:
    """Real Z whose β = α/4, so a uniform field reproduces this Sabine α."""
    alpha = min(0.98, max(1e-4, alpha))
    return complex(Z0 * 4.0 / alpha, 0.0)


def sofa_alpha(freq: float) -> float:
    return _interp_alpha(SOFA_ALPHA, freq)


def shelf_alpha(freq: float) -> float:
    return _interp_alpha(SHELF_ALPHA, freq)


@lru_cache(maxsize=1)
def baseline_fill() -> Fill:
    """As-built wool: soffit up to the duct void, traps at the drawing split."""
    geom = room_geometry()
    wool = Resistivity().mineral_wool
    return Fill(
        soffit_wool_m=geom.soffit_wool_depth,
        soffit_sigma=wool,
        kitchen_wool_m=geom.kitchen_wool_fraction * geom.kitchen_cavity,
        living_wool_m=geom.living_wool_fraction * geom.living_cavity,
        trap_sigma=wool,
    )


def _fill_of(variant: Variant) -> Fill:
    return baseline_fill() if variant.fill is None else variant.fill


def _stack_z(kind: str, freq: float, thickness_mm: float, fill: Fill) -> complex:
    res = Resistivity()
    plaster = _plaster_m()
    if kind == "slope":
        stack = slope_stack(thickness_mm / 1000.0, plaster, res)
    elif kind == "soffit":
        geom = room_geometry()
        cavity = geom.soffit_wool_depth + geom.soffit_air_depth
        wool = min(max(fill.soffit_wool_m, 0.0), cavity)
        stack = soffit_stack(
            geom.soffit_board,
            plaster,
            wool,
            cavity - wool,
            res,
            wool_sigma=fill.soffit_sigma,
        )
    elif kind == "rug":
        stack = (("porous", RUG_DEPTH, RUG_SIGMA),)
    else:
        raise ValueError(kind)
    return surface_impedance(stack, freq)


def shelf_impedance(freq: float) -> complex:
    """Book-filled lamella wall. Sabine α, see ``SHELF_ALPHA``."""
    return sabine_impedance(shelf_alpha(freq))


def trap_bottom_impedance(which: str, freq: float, fill: Fill | None = None) -> complex:
    """Limp closure under the předstěna: wool and air, not the studded leaf."""
    params = _params()
    used = baseline_fill() if fill is None else fill
    mass = 800.0 * params.bass_k_gkb / 1000.0
    if which == "living":
        cavity = (params.predstena_living - params.bass_l_gkb) / 1000.0
        wool = min(max(used.living_wool_m, 0.0), cavity)
        stack = trap_stack(wool, cavity - wool, mass, used.trap_sigma)
    else:
        cavity = (params.predstena_kitchen - params.bass_k_gkb) / 1000.0
        wool = min(max(used.kitchen_wool_m, 0.0), cavity)
        stack = trap_stack(wool, cavity - wool, mass, used.trap_sigma)
    return surface_impedance(stack, freq)


def impedance(label: str, freq: float, variant: Variant) -> complex:
    """p / v_n for one labelled surface. Rigid surfaces return a huge real Z."""
    if label in _HARD or (label == "soffit" and variant.soffit == "rigid"):
        return complex(1e12, 0.0)
    if label in _FIXED_ALPHA:
        alpha = _FIXED_ALPHA[label]
        # β = α/4, Z = Z0 / β, so a uniform field reproduces that Sabine α.
        return complex(Z0 * 4.0 / alpha, 0.0)
    fill = _fill_of(variant)
    if label == "slope":
        return _stack_z("slope", freq, variant.thickness_mm, fill)
    if label == "soffit":
        return _stack_z("soffit", freq, variant.thickness_mm, fill)
    if label == "rug":
        return _stack_z("rug", freq, variant.thickness_mm, fill)
    if label == "sofa":
        return sabine_impedance(sofa_alpha(freq))
    if label == "shelf":
        return shelf_impedance(freq)
    if label == "living_trap":
        return membrane_impedance("living", freq, fill)
    if label == "kitchen_trap":
        return membrane_impedance("kitchen", freq, fill)
    if label == "living_trap_bottom":
        return trap_bottom_impedance("living", freq, fill)
    if label == "kitchen_trap_bottom":
        return trap_bottom_impedance("kitchen", freq, fill)
    return complex(1e12, 0.0)


def betas(labels: list[str] | tuple[str, ...], freq: float, variant: Variant) -> dict[str, complex]:
    return {label: beta_from_impedance(impedance(label, freq, variant)) for label in labels}


def normal_alpha(impedance_value: complex) -> float:
    if abs(impedance_value) > 1e8:
        return 0.0
    reflection = (impedance_value - Z0) / (impedance_value + Z0)
    alpha = 1.0 - abs(reflection) ** 2
    return float(np.clip(alpha, 0.0, 1.0))


def passive(impedance_value: complex) -> bool:
    return float(np.real(impedance_value)) >= -1e-6


def shape_for_boundaries() -> None:
    """Touch the layout so a missing model fails here, not mid-solve."""
    load_shape()
