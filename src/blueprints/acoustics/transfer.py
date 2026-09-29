"""Miki 1990 porous layer and a normal-incidence transfer matrix.

Y. Miki, Acoustical properties of porous materials — Modifications of
Delany–Bazley models, J. Acoust. Soc. Jpn. (E) 11, 19–24 (1990).

Characteristic impedance and wavenumber depend on flow resistivity only
(rigid frame). Time convention is e^{+jωt}, as in the Matelys APMR statement
of the same formulas:

    Zc = ρ0 c0 [ 1 + 5.50 (10³ f/σ)^{-0.632} − j 8.43 (10³ f/σ)^{-0.632} ]
    k  = ω/c0  [ 1 + 7.81 (10³ f/σ)^{-0.618} − j 11.41 (10³ f/σ)^{-0.618} ]

with f in Hz and σ in Pa·s/m². Delany and Bazley's validity window, which
Miki does not extend, is 0.01 < f/σ < 1. Bands outside that window are still
computed but must be flagged: for naturheld 140 at the declared minimum
σ = 60 000 Pa·s/m² much of the bass is below the window. This is not a
Johnson–Champoux–Allard model; tortuosity and characteristic lengths are
not invented.
"""

from __future__ import annotations

import cmath
import math
from dataclasses import dataclass

from blueprints.acoustics.materials import AIR_DENSITY_KG_M3, AIR_SPEED_M_S

MIKI_F_OVER_SIGMA_MIN = 0.01
MIKI_F_OVER_SIGMA_MAX = 1.0


def miki_in_range(freq_hz: float, sigma_pa_s_m2: float) -> bool:
    ratio = freq_hz / sigma_pa_s_m2
    return MIKI_F_OVER_SIGMA_MIN < ratio < MIKI_F_OVER_SIGMA_MAX


def miki_zc_k(
    freq_hz: float,
    sigma_pa_s_m2: float,
    rho0: float = AIR_DENSITY_KG_M3,
    c0: float = AIR_SPEED_M_S,
) -> tuple[complex, complex]:
    """Characteristic impedance (Pa·s/m) and wavenumber (1/m)."""
    if sigma_pa_s_m2 <= 0.0:
        raise ValueError("flow resistivity must be positive")
    if freq_hz <= 0.0:
        raise ValueError("frequency must be positive")
    scaled = (1000.0 * freq_hz / sigma_pa_s_m2)
    z_factor = scaled ** -0.632
    k_factor = scaled ** -0.618
    z_norm = 1.0 + 5.50 * z_factor - 1j * 8.43 * z_factor
    k_norm = 1.0 + 7.81 * k_factor - 1j * 11.41 * k_factor
    omega = 2.0 * math.pi * freq_hz
    return rho0 * c0 * z_norm, (omega / c0) * k_norm


@dataclass(frozen=True)
class Layer:
    name: str
    kind: str  # porous, limp, air, transparent
    thickness_m: float
    sigma_pa_s_m2: float | None = None
    areal_mass_kg_m2: float | None = None
    note: str = ""


Matrix = tuple[tuple[complex, complex], tuple[complex, complex]]


def _matmul(a: Matrix, b: Matrix) -> Matrix:
    return (
        (
            a[0][0] * b[0][0] + a[0][1] * b[1][0],
            a[0][0] * b[0][1] + a[0][1] * b[1][1],
        ),
        (
            a[1][0] * b[0][0] + a[1][1] * b[1][0],
            a[1][0] * b[0][1] + a[1][1] * b[1][1],
        ),
    )


def _layer_matrix(k: complex, zc: complex, thickness_m: float) -> Matrix:
    kd = k * thickness_m
    c = cmath.cos(kd)
    s = cmath.sin(kd)
    return ((c, 1j * zc * s), (1j * s / zc, c))


def layer_matrix(layer: Layer, freq_hz: float) -> Matrix | None:
    """Transfer matrix from the back face of the layer to the room face.

    ``None`` for a named transparent layer (identity, coat omitted).
    """
    if layer.kind == "transparent":
        return None
    if layer.kind == "porous":
        if layer.sigma_pa_s_m2 is None:
            raise ValueError(f"{layer.name} has no flow resistivity")
        zc, k = miki_zc_k(freq_hz, layer.sigma_pa_s_m2)
        return _layer_matrix(k, zc, layer.thickness_m)
    if layer.kind == "air":
        k = 2.0 * math.pi * freq_hz / AIR_SPEED_M_S
        zc = AIR_DENSITY_KG_M3 * AIR_SPEED_M_S
        return _layer_matrix(k, zc, layer.thickness_m)
    if layer.kind == "limp":
        if layer.areal_mass_kg_m2 is None:
            raise ValueError(f"{layer.name} has no areal mass")
        omega = 2.0 * math.pi * freq_hz
        return ((1.0 + 0j, 1j * omega * layer.areal_mass_kg_m2), (0j, 1.0 + 0j))
    raise ValueError(f"unknown layer kind {layer.kind}")


def rigid_backed_impedance(layers: tuple[Layer, ...] | list[Layer], freq_hz: float) -> complex:
    """Input impedance at the room face. The back of the stack is rigid (v = 0)."""
    total: Matrix = ((1.0 + 0j, 0j), (0j, 1.0 + 0j))
    any_layer = False
    for layer in layers:
        matrix = layer_matrix(layer, freq_hz)
        if matrix is None:
            continue
        total = _matmul(total, matrix)
        any_layer = True
    if not any_layer:
        raise ValueError("stack has no acoustic thickness")
    # [p, v]_room = T [p, 0]_wall, so Z = T00 / T10.
    velocity = total[1][0]
    if velocity == 0:
        return complex(math.inf)
    return total[0][0] / velocity


def normal_absorption(impedance: complex) -> float:
    """α = 1 − |R|², R = (Z − Z0) / (Z + Z0), normal incidence."""
    z0 = AIR_DENSITY_KG_M3 * AIR_SPEED_M_S
    reflection = (impedance - z0) / (impedance + z0)
    alpha = 1.0 - abs(reflection) ** 2
    # Complex roundoff can step a few ulps outside [0, 1].
    if -1e-9 <= alpha < 0.0:
        return 0.0
    if 1.0 < alpha <= 1.0 + 1e-9:
        return 1.0
    return alpha


def porous_layers_out_of_range(layers: list[Layer], freq_hz: float) -> list[str]:
    names: list[str] = []
    for layer in layers:
        if layer.kind != "porous" or layer.sigma_pa_s_m2 is None:
            continue
        if not miki_in_range(freq_hz, layer.sigma_pa_s_m2):
            names.append(layer.name)
    return names


def area_weighted_absorption(alpha_open: float, open_fraction: float) -> float:
    """Batten strip is sealed timber, reflection coefficient ~1, so α_timber = 0.

    Geometric area weight, not a long-wavelength parallel impedance. The batten
    fraction does not absorb at these frequencies.
    """
    if not 0.0 <= open_fraction <= 1.0:
        raise ValueError(f"open fraction out of range: {open_fraction}")
    return open_fraction * alpha_open
