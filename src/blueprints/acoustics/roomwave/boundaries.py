"""Locally reacting impedances for the obývák surfaces.

Slopes and the soffit use ``layers.surface_impedance`` at normal incidence.
The gable faces use the membrane admittance from ``panel.py`` (kitchen 625 mm
vertical, living 1000 mm horizontal, taped sheet, as-built wool). A real
β = α/4 on the floor, plaster, and glass matches the Sabine limit of those
fixed Eyring coefficients.
"""

from __future__ import annotations

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
from blueprints.acoustics.roomwave.geometry import Variant, load_shape
from blueprints.acoustics.roomwave.helmholtz import beta_from_impedance

# Upholstery, rug, and the book half of the lamella wall. Catalogue-order
# guesses: the sweep does not vary them.
SOFA_SIGMA = 8_000.0
SOFA_DEPTH = 0.40
RUG_SIGMA = 20_000.0
RUG_DEPTH = 0.012
BOOK_SIGMA = 40_000.0
BOOK_DEPTH = 0.12
LAMELLA_GAP = 0.020

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


def membrane_impedance(which: str, freq: float) -> complex:
    systems, plate, cavity = _membranes()[which]
    total = 0.0
    admit = 0j
    for system in systems:
        admit += system.area * _admittance(system, freq, 0.0, plate.eta, plate.mu, cavity)
        total += system.area
    if total <= 0.0 or abs(admit) < 1e-16:
        return complex(1e12, 0.0)
    return total / admit


def _stack_z(kind: str, freq: float, thickness_mm: float) -> complex:
    res = Resistivity()
    plaster = _plaster_m()
    if kind == "slope":
        stack = slope_stack(thickness_mm / 1000.0, plaster, res)
    elif kind == "soffit":
        geom = room_geometry()
        stack = soffit_stack(
            geom.soffit_board,
            plaster,
            geom.soffit_wool_depth,
            geom.soffit_air_depth,
            res,
        )
    elif kind == "sofa":
        stack = (("porous", SOFA_DEPTH, SOFA_SIGMA),)
    elif kind == "rug":
        stack = (("porous", RUG_DEPTH, RUG_SIGMA),)
    else:
        raise ValueError(kind)
    return surface_impedance(stack, freq)


def shelf_impedance(freq: float) -> complex:
    """Half the wall is a 20 mm lamella gap, half is that gap plus books. No wool."""
    gap = surface_impedance((("air", LAMELLA_GAP, 0.0),), freq)
    books = surface_impedance(
        (("air", LAMELLA_GAP, 0.0), ("porous", BOOK_DEPTH, BOOK_SIGMA)),
        freq,
    )
    admit = 0.5 / gap + 0.5 / books
    if abs(admit) < 1e-18:
        return complex(1e12, 0.0)
    return 1.0 / admit


def trap_bottom_impedance(which: str, freq: float) -> complex:
    """Limp closure under the předstěna: same wool and air, not the studded leaf."""
    params = _params()
    wool = Resistivity().mineral_wool
    mass = 800.0 * params.bass_k_gkb / 1000.0
    if which == "living":
        stack = trap_stack(params.bass_l_wool / 1000.0, params.bass_l_air / 1000.0, mass, wool)
    else:
        stack = trap_stack(params.bass_k_wool / 1000.0, params.bass_k_air / 1000.0, mass, wool)
    return surface_impedance(stack, freq)


def impedance(label: str, freq: float, variant: Variant) -> complex:
    """p / v_n for one labelled surface. Rigid surfaces return a huge real Z."""
    if label in _HARD or (label == "soffit" and variant.soffit == "rigid"):
        return complex(1e12, 0.0)
    if label in _FIXED_ALPHA:
        alpha = _FIXED_ALPHA[label]
        # β = α/4, Z = Z0 / β, so a uniform field reproduces that Sabine α.
        return complex(Z0 * 4.0 / alpha, 0.0)
    if label == "slope":
        return _stack_z("slope", freq, variant.thickness_mm)
    if label == "soffit":
        return _stack_z("soffit", freq, variant.thickness_mm)
    if label == "rug":
        return _stack_z("rug", freq, variant.thickness_mm)
    if label == "sofa":
        return _stack_z("sofa", freq, variant.thickness_mm)
    if label == "shelf":
        return shelf_impedance(freq)
    if label == "living_trap":
        return membrane_impedance("living", freq)
    if label == "kitchen_trap":
        return membrane_impedance("kitchen", freq)
    if label == "living_trap_bottom":
        return trap_bottom_impedance("living", freq)
    if label == "kitchen_trap_bottom":
        return trap_bottom_impedance("kitchen", freq)
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
