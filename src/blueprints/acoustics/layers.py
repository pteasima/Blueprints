"""Miki porous layers, transfer matrices, and field-incidence absorption.

Time convention is e^{+jωt}, as in Miki's revision of Delany–Bazley
(J. Acoust. Soc. Jpn. (E), 1990) and the Matelys APMR transcription.
Flow resistivity is in Pa·s/m². The original Delany–Bazley fit was stated
for 0.01 < f/σ < 1; Miki's coefficients stay passive below that, which is
where the gable traps work.
"""

from __future__ import annotations

import cmath
import math
from typing import Sequence

# 20 °C, dry enough for a screening model.
RHO0 = 1.204
C0 = 343.0
Z0 = RHO0 * C0

# Matelys APMR / Miki 1990. Argument is 10³ f/σ with σ in Pa·s/m².
_Z_A = 5.50
_Z_B = 8.43
_Z_E = -0.632
_K_A = 7.81
_K_B = 11.41
_K_E = -0.618

# Paris field incidence stops short of grazing; 78° is the usual match to a reverberation room.
FIELD_THETA_DEG = 78.0

Layer = tuple[str, float, float]
# ("porous", thickness_m, sigma) | ("air", thickness_m, 0) | ("mass", mass_kg_m2, 0)


def miki(freq: float, sigma: float, rho: float = RHO0, c: float = C0) -> tuple[complex, complex]:
    """Characteristic impedance and wavenumber of a motionless porous frame."""
    if freq <= 0.0 or sigma <= 0.0:
        raise ValueError("frequency and flow resistivity must be positive")
    x = 1.0e3 * freq / sigma
    zc = rho * c * (1.0 + _Z_A * x**_Z_E - 1j * _Z_B * x**_Z_E)
    kc = (2.0 * math.pi * freq / c) * (1.0 + _K_A * x**_K_E - 1j * _K_B * x**_K_E)
    return zc, kc


def panel_frequency(mass_kg_m2: float, depth_m: float, rho: float = RHO0, c: float = C0) -> float:
    """Limp panel over a shallow air cavity, f = (c/2π) √(ρ / m d)."""
    if mass_kg_m2 <= 0.0 or depth_m <= 0.0:
        raise ValueError("mass and cavity depth must be positive")
    return (c / (2.0 * math.pi)) * math.sqrt(rho / (mass_kg_m2 * depth_m))


def _matmul(a: list[list[complex]], b: list[list[complex]]) -> list[list[complex]]:
    return [
        [
            a[0][0] * b[0][0] + a[0][1] * b[1][0],
            a[0][0] * b[0][1] + a[0][1] * b[1][1],
        ],
        [
            a[1][0] * b[0][0] + a[1][1] * b[1][0],
            a[1][0] * b[0][1] + a[1][1] * b[1][1],
        ],
    ]


def _decaying_kz(kc: complex, kx: float) -> complex:
    """Normal wavenumber that decays into the layer (Im ≤ 0)."""
    kz = cmath.sqrt(kc * kc - kx * kx)
    if kz.imag > 0.0:
        kz = -kz
    return kz


def _layer_matrix(layer: Layer, freq: float, theta: float, rho: float, c: float) -> list[list[complex]]:
    kind, a, b = layer
    omega = 2.0 * math.pi * freq
    k0 = omega / c
    if kind == "mass":
        return [[1.0 + 0j, 1j * omega * a], [0j, 1.0 + 0j]]
    if kind == "air":
        if a <= 0.0:
            return [[1.0 + 0j, 0j], [0j, 1.0 + 0j]]
        kz = k0 * math.cos(theta)
        z = (rho * c) / math.cos(theta)
    elif kind == "porous":
        if a <= 0.0:
            return [[1.0 + 0j, 0j], [0j, 1.0 + 0j]]
        zc, kc = miki(freq, b, rho=rho, c=c)
        kx = k0 * math.sin(theta)
        kz = _decaying_kz(kc, kx)
        z = zc * kc / kz
    else:
        raise ValueError(f"unknown layer {kind!r}")
    kd = kz * a
    cos_kd = cmath.cos(kd)
    sin_kd = cmath.sin(kd)
    return [[cos_kd, 1j * z * sin_kd], [1j * sin_kd / z, cos_kd]]


def surface_impedance(
    stack: Sequence[Layer],
    freq: float,
    theta: float = 0.0,
    rho: float = RHO0,
    c: float = C0,
) -> complex:
    """p / v_n at the room face. The stack runs room → rigid wall."""
    transfer = [[1.0 + 0j, 0j], [0j, 1.0 + 0j]]
    for layer in stack:
        transfer = _matmul(transfer, _layer_matrix(layer, freq, theta, rho, c))
    # Rigid wall: v at the back is 0, so Zs = T11 / T21.
    t21 = transfer[1][0]
    if abs(t21) < 1e-30:
        return complex(1e12, 0.0)
    return transfer[0][0] / t21


def _tan_stable(w: complex) -> complex:
    """tan(w) via tanh, stable when w is largely imaginary (evanescent trace)."""
    return -1j * cmath.tanh(1j * w)


def _layer_specific(kind: str, sigma: float, freq: float, kx: float, rho: float, c: float) -> tuple[complex, complex]:
    """(specific impedance p/v_z, normal wavenumber) at lateral wavenumber kx."""
    omega = 2.0 * math.pi * freq
    k0 = omega / c
    if kind == "air":
        kz = _decaying_kz(complex(k0), kx)
        if abs(kz) < 1e-14:
            return complex(1e12, 0.0), kz
        return (rho * c) * (k0 / kz), kz
    if kind == "porous":
        zc, kc = miki(freq, sigma, rho=rho, c=c)
        kz = _decaying_kz(kc, kx)
        if abs(kz) < 1e-18:
            return complex(1e12, 0.0), kz
        return zc * kc / kz, kz
    raise ValueError(f"unknown cavity layer {kind!r}")


def _advance_impedance(z_back: complex, z_spec: complex, kz: complex, thickness: float) -> complex:
    """Rigid-backed layer recursion, room-ward. Z = -j z cot(kz d) when z_back is rigid."""
    if thickness <= 0.0:
        return z_back
    if abs(z_spec) < 1e-18:
        return z_back
    tangent = _tan_stable(kz * thickness)
    # Nearly rigid back: Z = z / (j tan) = -j z cot.
    if abs(z_back) > 1e8 * max(1.0, abs(z_spec)):
        if abs(tangent) < 1e-14:
            return complex(1e12, 0.0)
        return z_spec / (1j * tangent)
    ratio = z_back / z_spec
    denom = 1.0 + 1j * ratio * tangent
    if abs(denom) < 1e-18:
        return complex(1e12, 0.0)
    return z_spec * (ratio + 1j * tangent) / denom


def surface_impedance_kx(
    stack: Sequence[Layer],
    freq: float,
    kx: float,
    rho: float = RHO0,
    c: float = C0,
) -> complex:
    """Surface impedance at one lateral wavenumber.

    ``kx`` may exceed k0 (a bending shape that is finer than the sound
    wavelength). The stack still runs room → rigid wall. A mass layer, if
    present, adds jωm in series. Evanescent traces use a tanh form so a
    thick wool layer does not overflow.
    """
    if freq <= 0.0:
        raise ValueError("frequency must be positive")
    omega = 2.0 * math.pi * freq
    z_back = complex(1e15, 0.0)
    for kind, thickness, sigma in reversed(tuple(stack)):
        if kind == "mass":
            z_back = z_back + 1j * omega * thickness
            continue
        if thickness <= 0.0:
            continue
        z_spec, kz = _layer_specific(kind, sigma, freq, kx, rho, c)
        z_back = _advance_impedance(z_back, z_spec, kz, thickness)
    return z_back


def absorption(
    stack: Sequence[Layer],
    freq: float,
    theta: float = 0.0,
    rho: float = RHO0,
    c: float = C0,
) -> float:
    """Fraction of incident intensity absorbed at one angle from the normal."""
    zs = surface_impedance(stack, freq, theta, rho=rho, c=c)
    z_inc = (rho * c) / math.cos(theta)
    refl = (zs - z_inc) / (zs + z_inc)
    alpha = 1.0 - abs(refl) ** 2
    if alpha < 0.0:
        return 0.0
    if alpha > 1.0:
        return 1.0
    return alpha


def field_absorption(
    stack: Sequence[Layer],
    freq: float,
    n_angles: int = 48,
    theta_max_deg: float = FIELD_THETA_DEG,
    rho: float = RHO0,
    c: float = C0,
) -> float:
    """Paris average, ∫ α sinθ cosθ dθ, normalised out to theta_max."""
    theta_max = math.radians(theta_max_deg)
    if theta_max <= 0.0:
        raise ValueError("theta_max must be positive")
    step = theta_max / n_angles
    acc = 0.0
    for i in range(n_angles):
        theta = (i + 0.5) * step
        weight = math.sin(theta) * math.cos(theta) * step
        acc += absorption(stack, freq, theta, rho=rho, c=c) * weight
    norm = 0.5 * math.sin(theta_max) ** 2
    return acc / norm


def reactance_zero_hz(
    stack: Sequence[Layer],
    f_lo: float = 15.0,
    f_hi: float = 250.0,
    rho: float = RHO0,
    c: float = C0,
) -> float | None:
    """Normal-incidence frequency where Im(Zs) changes sign, if there is one."""

    def imag_z(freq: float) -> float:
        return surface_impedance(stack, freq, 0.0, rho=rho, c=c).imag

    samples = 80
    freqs = [f_lo * (f_hi / f_lo) ** (i / (samples - 1)) for i in range(samples)]
    values = [imag_z(f) for f in freqs]
    for f0, f1, y0, y1 in zip(freqs, freqs[1:], values, values[1:]):
        if y0 == 0.0:
            return f0
        if y0 * y1 < 0.0:
            lo, hi, y_lo = f0, f1, y0
            for _ in range(40):
                mid = 0.5 * (lo + hi)
                y_mid = imag_z(mid)
                if y_lo * y_mid <= 0.0:
                    hi = mid
                else:
                    lo, y_lo = mid, y_mid
            return 0.5 * (lo + hi)
    return None


def rigid_backed_wool_alpha(
    freq: float,
    thickness_m: float,
    sigma: float,
    rho: float = RHO0,
    c: float = C0,
) -> float:
    """Normal-incidence α of one Miki layer on a rigid wall, via -j Z cot(kd)."""
    zc, kc = miki(freq, sigma, rho=rho, c=c)
    zs = -1j * zc / cmath.tan(kc * thickness_m)
    z0 = rho * c
    refl = (zs - z0) / (zs + z0)
    return 1.0 - abs(refl) ** 2
