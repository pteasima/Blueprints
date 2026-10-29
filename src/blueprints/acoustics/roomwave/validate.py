"""Analytic checks: rectangular modes, an impedance tube, and the Sabine factor."""

from __future__ import annotations

import math

import numpy as np

from blueprints.acoustics.layers import C0, RHO0, Z0, surface_impedance
from blueprints.acoustics.roomwave.helmholtz import Field, rigid_modes
from blueprints.acoustics.roomwave.mesh import mesh_box

_T60_FACTOR = 2.0 * math.log(1000.0)


def analytic_box_modes(lx: float, ly: float, lz: float, count: int = 8, c: float = C0) -> np.ndarray:
    found = []
    for nx in range(6):
        for ny in range(6):
            for nz in range(6):
                if nx == ny == nz == 0:
                    continue
                freq = 0.5 * c * math.sqrt((nx / lx) ** 2 + (ny / ly) ** 2 + (nz / lz) ** 2)
                found.append(freq)
    return np.array(sorted(found)[:count])


def box_mode_errors(h: float = 0.45, count: int = 5) -> list[tuple[float, float, float]]:
    """``(analytic Hz, FEM Hz, relative error)`` for the lowest rigid-box modes."""
    lx, ly, lz = 5.0, 4.0, 3.0
    mesh = mesh_box(lx, ly, lz, h)
    fem = rigid_modes(mesh, count=count + 2, sigma=0.2)
    analytic = analytic_box_modes(lx, ly, lz, count)
    rows = []
    for expect, got in zip(analytic, fem):
        rows.append((float(expect), float(got), abs(got - expect) / expect))
    return rows


def tube_relative_error(freq: float = 100.0, h: float = 0.08) -> float:
    """Plane-wave tube with a wool termination, FEM pressure against the closed form."""
    length, side = 1.20, 0.28
    mesh = mesh_box(length, side, side, h)
    field = Field(mesh)
    wool = surface_impedance((("porous", 0.08, 12_000.0),), freq)
    beta = {"xmax": Z0 / wool}
    v_piston = 1.0
    # Outward normal at x=0 is −x, and the piston pushes toward +x, so
    # ∂p/∂n = j ω ρ v_piston.
    drive = 1j * (2.0 * math.pi * freq) * RHO0 * v_piston
    pressure = field.solve_boundary_drive(freq, beta, "xmin", drive)
    probe = field.locate((0.6 * length, 0.5 * side, 0.5 * side))
    got = field.sample(pressure, probe)
    expect = _tube_pressure(0.6 * length, length, freq, wool, v_piston)
    return abs(got - expect) / abs(expect)


def uniform_sabine_error(h: float = 0.4) -> tuple[float, float]:
    """Energy-balance T60 of a uniform pressure against Sabine with α = 4 β.

    Returns ``(fem, sabine)``. No solve: this checks the matrices and the factor.
    """
    lx, ly, lz = 4.0, 3.0, 2.5
    mesh = mesh_box(lx, ly, lz, h)
    field = Field(mesh)
    beta_value = 0.02
    beta = {label: complex(beta_value, 0.0) for label in field.b_mat}
    pressure = np.ones(mesh.points.shape[0], dtype=np.complex128)
    fem = field.energy_t60(pressure, beta)
    volume = lx * ly * lz
    surface = 2.0 * (lx * ly + lx * lz + ly * lz)
    sabine = _T60_FACTOR * volume / (C0 * beta_value * surface)
    return fem, sabine


def _tube_pressure(x: float, length: float, freq: float, impedance: complex, v_piston: float) -> complex:
    k = 2.0 * math.pi * freq / C0
    beta = Z0 / impedance
    reflection = np.exp(-2j * k * length) * (1.0 - beta) / (1.0 + beta)
    amplitude = Z0 * v_piston / (1.0 - reflection)
    backward = amplitude * reflection
    return amplitude * np.exp(-1j * k * x) + backward * np.exp(1j * k * x)
