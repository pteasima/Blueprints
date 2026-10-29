"""Linear tetrahedron Helmholtz solver with a locally reacting wall.

Time convention is e^{+jωt}, the same one ``layers.py`` uses. The weak form is

    ∫ ∇q·∇p − k² ∫ q p + ∫_Γ j k β q p = j ω ρ Q q(x_s)

with β = Z0 / Z and Z = p / v_n on the outward normal.
"""

from __future__ import annotations

import math

import numpy as np
from scipy.sparse import coo_matrix, csr_matrix
from scipy.sparse.linalg import eigsh, splu

from blueprints.acoustics.layers import C0, RHO0, Z0
from blueprints.acoustics.roomwave.mesh import Mesh

# 2 ln(1000). Energy decays twice as fast as amplitude.
_T60_FACTOR = 2.0 * math.log(1000.0)


class Field:
    def __init__(self, mesh: Mesh):
        self.mesh = mesh
        self.k_mat, self.m_mat, self.b_mat = _assemble(mesh)
        self._inv_j, self._origin = _barycentric(mesh.points, mesh.tets)

    def locate(self, xyz: tuple[float, float, float] | np.ndarray, tol: float = 1e-5):
        """Return ``(tet, bary4)`` or None."""
        point = np.asarray(xyz, dtype=float)
        xi = np.einsum("mij,j->mi", self._inv_j, point) - np.einsum(
            "mij,mj->mi", self._inv_j, self._origin
        )
        b0 = 1.0 - xi.sum(axis=1)
        ok = (
            (b0 >= -tol)
            & (xi[:, 0] >= -tol)
            & (xi[:, 1] >= -tol)
            & (xi[:, 2] >= -tol)
        )
        hits = np.flatnonzero(ok)
        if len(hits) == 0:
            return None
        i = int(hits[0])
        bary = np.array([b0[i], xi[i, 0], xi[i, 1], xi[i, 2]], dtype=float)
        bary = np.clip(bary, 0.0, None)
        bary /= bary.sum()
        return i, bary

    def solve(
        self,
        freq: float,
        beta: dict[str, complex],
        groups: dict[str, list[tuple[object, np.ndarray]]],
    ) -> dict[str, np.ndarray]:
        """One refactorisation, one pressure field per source group.

        ``groups`` maps a name to a list of ``(barycentric locate result, Q)``.
        """
        k = 2.0 * math.pi * freq / C0
        system = (self.k_mat - (k * k) * self.m_mat).astype(np.complex128)
        for label, value in beta.items():
            block = self.b_mat.get(label)
            if block is None or abs(value) < 1e-16:
                continue
            system = system + (1j * k * value) * block
        factor = splu(system.tocsc())
        omega = 2.0 * math.pi * freq
        out: dict[str, np.ndarray] = {}
        for name, items in groups.items():
            rhs = np.zeros(self.mesh.points.shape[0], dtype=np.complex128)
            for located, strength in items:
                if located is None or strength == 0.0:
                    continue
                tet, bary = located
                nodes = self.mesh.tets[tet]
                rhs[nodes] += (1j * omega * RHO0 * strength) * bary
            out[name] = factor.solve(rhs)
        return out

    def solve_boundary_drive(
        self,
        freq: float,
        beta: dict[str, complex],
        drive_label: str,
        normal_derivative: complex,
    ) -> np.ndarray:
        """Impose ∂p/∂n = ``normal_derivative`` on one labelled face set."""
        k = 2.0 * math.pi * freq / C0
        system = (self.k_mat - (k * k) * self.m_mat).astype(np.complex128)
        for label, value in beta.items():
            if label == drive_label:
                continue
            block = self.b_mat.get(label)
            if block is None or abs(value) < 1e-16:
                continue
            system = system + (1j * k * value) * block
        drive = self.b_mat[drive_label]
        rhs = normal_derivative * np.asarray(drive @ np.ones(self.mesh.points.shape[0])).ravel()
        return splu(system.tocsc()).solve(rhs)

    def sample(self, pressure: np.ndarray, located) -> complex:
        if located is None:
            return complex("nan")
        tet, bary = located
        return complex(np.dot(bary, pressure[self.mesh.tets[tet]]))

    def energy_t60(self, pressure: np.ndarray, beta: dict[str, complex]) -> float:
        """Decay time from the steady field's energy balance, in seconds."""
        potential = float(np.real(np.vdot(pressure, self.m_mat @ pressure)))
        absorbed = 0.0
        for label, value in beta.items():
            block = self.b_mat.get(label)
            if block is None:
                continue
            resistance = float(np.real(value))
            if resistance <= 1e-16:
                continue
            absorbed += resistance * float(np.real(np.vdot(pressure, block @ pressure)))
        if potential <= 0.0 or absorbed <= 1e-18:
            return math.inf
        return _T60_FACTOR * potential / (C0 * absorbed)


def rigid_modes(mesh: Mesh, count: int = 8, sigma: float = 0.4) -> np.ndarray:
    """Rigid-wall eigenfrequencies, lowest first, in hertz. The zero mode is dropped."""
    field = Field(mesh)
    vals = eigsh(field.k_mat, k=count, M=field.m_mat, sigma=sigma, which="LM", tol=1e-8)[0]
    freqs = []
    for value in np.sort(np.real(vals)):
        if value <= 1e-6:
            continue
        freqs.append(C0 * math.sqrt(float(value)) / (2.0 * math.pi))
    return np.array(freqs)


def _assemble(mesh: Mesh) -> tuple[csr_matrix, csr_matrix, dict[str, csr_matrix]]:
    pts = mesh.points
    tets = mesh.tets
    origin = pts[tets[:, 0]]
    jac = np.stack(
        (
            pts[tets[:, 1]] - origin,
            pts[tets[:, 2]] - origin,
            pts[tets[:, 3]] - origin,
        ),
        axis=-1,
    )
    volume = np.linalg.det(jac) / 6.0
    if np.any(volume <= 0.0):
        raise RuntimeError("tetrahedron with a non-positive volume")
    inv = np.linalg.inv(jac)
    # ξ = inv @ (x − x0), so the gradient of ξ_i is row i of inv.
    grads = np.empty((len(tets), 4, 3))
    grads[:, 1:] = inv
    grads[:, 0] = -grads[:, 1:].sum(axis=1)
    stiff = np.einsum("mif,mjf->mij", grads, grads) * volume[:, None, None]
    mass = np.full((len(tets), 4, 4), 1.0 / 20.0) * volume[:, None, None]
    diag = np.arange(4)
    mass[:, diag, diag] = volume[:, None] / 10.0
    rows = np.repeat(tets, 4, axis=1).ravel()
    cols = np.tile(tets, 4).ravel()
    n = len(pts)
    k_mat = coo_matrix((stiff.ravel(), (rows, cols)), shape=(n, n)).tocsr()
    m_mat = coo_matrix((mass.ravel(), (rows, cols)), shape=(n, n)).tocsr()
    b_mat: dict[str, csr_matrix] = {}
    if len(mesh.faces):
        coeff = np.full((len(mesh.faces), 3, 3), 1.0 / 12.0)
        coeff[:, diag[:3], diag[:3]] = 1.0 / 6.0
        coeff *= mesh.areas[:, None, None]
        face_nodes = mesh.faces
        f_rows = np.repeat(face_nodes, 3, axis=1).ravel()
        f_cols = np.tile(face_nodes, 3).ravel()
        for label in sorted(set(mesh.labels.tolist())):
            pick = np.flatnonzero(mesh.labels == label)
            if len(pick) == 0:
                continue
            data = coeff[pick].ravel()
            b_mat[str(label)] = coo_matrix(
                (data, (f_rows.reshape(-1, 9)[pick].ravel(), f_cols.reshape(-1, 9)[pick].ravel())),
                shape=(n, n),
            ).tocsr()
    return k_mat, m_mat, b_mat


def _barycentric(points: np.ndarray, tets: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    origin = points[tets[:, 0]]
    jac = np.stack(
        (
            points[tets[:, 1]] - origin,
            points[tets[:, 2]] - origin,
            points[tets[:, 3]] - origin,
        ),
        axis=-1,
    )
    return np.linalg.inv(jac), origin


def beta_from_impedance(impedance: complex) -> complex:
    if abs(impedance) < 1e-8:
        return complex(1e6, 0.0)
    return Z0 / impedance
