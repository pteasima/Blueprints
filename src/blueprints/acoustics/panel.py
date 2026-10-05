"""Panel-on-cavity absorption for one gypsum leaf on an open stud cavity.

The leaf is a thin plate. Each bay between CD studs and joint rails has its
own bending shapes. Those shapes push on the air and wool behind the leaf.
The cavity is the same layered stack as the old limp-sheet model (room → air
→ wool → rigid wall), evaluated at the shape's lateral wavenumber so air can
move sideways between bays. It is not a set of sealed boxes.

A very large bay with the bending stiffness removed sums back to the limp
sheet: mass in series with that same cavity. See ``analytic_ss_system``.

Gypsum constants
----------------
No Rigips RB/RF modulus is in this repo. The numbers are the published
building-acoustics range, not a datasheet.

- Young's modulus about 2–4 GPa. Baseline 2.5 GPa is the middle of the values
  used for plasterboard in Hopkins, *Sound Insulation* (2007) and in Craik,
  *Sound Transmission through Buildings using Statistical Energy Analysis*
  (1996). The paper facing is stiffer along the sheet than across it; one
  isotropic modulus is enough here, and the half/double stiffness cases cover
  that spread.
- Poisson's ratio 0.20–0.30. Baseline 0.25. It only enters as (1−ν²).
- Loss factor about 0.006–0.03. Bare board is near 0.01 (Hopkins quotes
  internal loss factors of that order for plasterboard). Paint and the skim
  on the taped joints sit toward the high end. Baseline 0.015. The loss
  multiplies the bending stiffness (hysteretic), not the mass.
- Density. The limp model uses 800 kg/m³, that is 10 kg/m² at 12.5 mm.
  Low and high cases use 8 and 12 kg/m² (light RB to a heavier RF).

Edge conditions
---------------
``simple`` — the screw line stops the board moving in and out and applies no
moment (a hinge).
``elastic`` — the same hinge plus a rotational spring for the CD flange.
``continuous`` — the board is one taped sheet, so under a long bass wave the
fields either side of a stud prop each other and the slope at the stud is
zero. That is stiffer than a hinge. It is not a vice on the flange.
Sides, the rake, and the bottom line are screwed to a perimeter profile.
That edge is simply supported: there is no neighbouring field to prop it.
The 2–5 mm bead sits outside the screw line and is not part of the plate.
"""

from __future__ import annotations

import math
from dataclasses import dataclass
from functools import lru_cache

import numpy as np

from blueprints.acoustics.layers import (
    C0,
    FIELD_THETA_DEG,
    RHO0,
    Z0,
    surface_impedance_kx,
)

# Paris angles and samples inside one third-octave. 16 angles stays within
# about 0.01 of a 48-angle limp reference on these broad bass curves.
FIELD_ANGLES = 16
BAND_SAMPLES = 3

# CD 60×27, steel about 0.6 mm. The flange is a short cantilever from the
# web to the screw line (~20 mm): D_flange = E t³/12 ≈ 3.8 N·m,
# K_r ≈ D_flange / 0.020 m ≈ 190 N·m/rad per metre of stud.
# Order of magnitude for the sensitivity case, not a measured hinge.
FLANGE_K_ROT = 190.0

_N_GRID = 32
_N_FUNC = 4
_CC_BETA = (
    4.730040744862704,
    7.853204624095838,
    10.995607838001672,
    14.137165491257464,
)


@dataclass(frozen=True)
class Plate:
    """12.5 mm GKB leaf. ``edge`` is how each CD or rail holds the sheet."""

    e_pa: float = 2.5e9
    nu: float = 0.25
    eta: float = 0.015
    density: float = 800.0
    thickness_m: float = 0.0125
    edge: str = "continuous"
    k_rot: float = 0.0

    @property
    def mu(self) -> float:
        return self.density * self.thickness_m

    @property
    def flexural_rigidity(self) -> float:
        return self.e_pa * self.thickness_m**3 / (12.0 * (1.0 - self.nu**2))

    def with_changes(self, **kwargs: float | str) -> Plate:
        data = {
            "e_pa": self.e_pa,
            "nu": self.nu,
            "eta": self.eta,
            "density": self.density,
            "thickness_m": self.thickness_m,
            "edge": self.edge,
            "k_rot": self.k_rot,
        }
        data.update(kwargs)
        return Plate(**data)  # type: ignore[arg-type]


@dataclass(frozen=True)
class Bay:
    """One field of the leaf. Coordinates are metres, x across the gable, z up.

    Edge labels are ``free`` or ``supported``. ``Plate.edge`` decides what
    ``supported`` means when the modes are built.
    """

    polygon: tuple[tuple[float, float], ...]
    area: float
    x0: float
    x1: float
    z0: float
    z1: float
    left: str
    right: str
    bottom: str
    top: str
    kind: str

    @property
    def span_x(self) -> float:
        return self.x1 - self.x0

    @property
    def span_z(self) -> float:
        return self.z1 - self.z0

    def with_edge(self, edge: str) -> Bay:
        def conv(label: str) -> str:
            if label == "free":
                return "free"
            # The perimeter profile has no bay on the other side, so it stays a hinge.
            if label == "perimeter":
                return "simple"
            return edge

        return Bay(
            self.polygon,
            self.area,
            self.x0,
            self.x1,
            self.z0,
            self.z1,
            conv(self.left),
            conv(self.right),
            conv(self.bottom),
            conv(self.top),
            self.kind,
        )


@dataclass(frozen=True)
class Mode:
    """One mass-normalised bending shape. ``gamma`` is ∫ φ dA."""

    omega: float
    gamma: float
    k_lat: float


@dataclass(frozen=True)
class ModalSystem:
    """Bending shapes of one bay. ``tail`` is leftover limp-sheet weight (D = 0 only)."""

    modes: tuple[Mode, ...]
    area: float
    tail: float = 0.0


def make_rectangle(
    width: float,
    height: float,
    left: str = "supported",
    right: str = "supported",
    bottom: str = "supported",
    top: str = "supported",
) -> Bay:
    """Axis-aligned rectangle with its corner at the origin. Spans are metres."""
    poly = ((0.0, 0.0), (width, 0.0), (width, height), (0.0, height))
    return Bay(poly, width * height, 0.0, width, 0.0, height, left, right, bottom, top, "rectangle")


def ss_frequency(width: float, height: float, rigidity: float, mu: float, m: int = 1, n: int = 1) -> float:
    """Simply-supported rectangular-plate frequency, Hz."""
    omega = math.pi**2 * math.sqrt(rigidity / mu) * ((m / width) ** 2 + (n / height) ** 2)
    return omega / (2.0 * math.pi)


def ss_strip_frequency(width: float, rigidity: float, mu: float) -> float:
    """Infinite strip, simply supported on the long edges, Hz."""
    omega = (math.pi / width) ** 2 * math.sqrt(rigidity / mu)
    return omega / (2.0 * math.pi)


def cc_strip_frequency(width: float, rigidity: float, mu: float) -> float:
    """Infinite strip, clamped on the long edges, Hz."""
    beta = _CC_BETA[0]
    omega = (beta / width) ** 2 * math.sqrt(rigidity / mu)
    return omega / (2.0 * math.pi)


@dataclass
class Cavity:
    """Air gap then wool, on a rigid wall. Depths in metres.

    A full fill has ``air_m`` of 0. The lateral wavenumber then runs through
    the wool only. There is no open-air layer left for the shape to slosh
    through.
    """

    air_m: float
    wool_m: float
    sigma: float
    _cache: dict[tuple[float, float], complex]

    def __init__(self, air_m: float, wool_m: float, sigma: float) -> None:
        self.air_m = air_m
        self.wool_m = wool_m
        self.sigma = sigma
        self._cache = {}

    def impedance(self, freq: float, kx: float) -> complex:
        key = (round(freq, 3), round(max(kx, 0.0), 3))
        cached = self._cache.get(key)
        if cached is not None:
            return cached
        layers: list[tuple[str, float, float]] = []
        if self.air_m > 1e-6:
            layers.append(("air", self.air_m, 0.0))
        if self.wool_m > 1e-6:
            layers.append(("porous", self.wool_m, self.sigma))
        if not layers:
            value = complex(1e15, 0.0)
        else:
            value = surface_impedance_kx(tuple(layers), freq, key[1])
        self._cache[key] = value
        return value


def analytic_ss_system(
    width: float,
    height: float,
    rigidity: float,
    mu: float,
    *,
    m_max: int = 11,
    tail: bool | None = None,
) -> ModalSystem:
    """Odd simply-supported sine shapes of a rectangle.

    Uniform pressure only drives odd-odd shapes. Their weights sum to 1, so
    with the bending stiffness removed (and a limp tail for the shapes left
    out) the bay is the limp sheet. ``tail`` defaults to on when rigidity is 0.
    """
    if width <= 0.0 or height <= 0.0 or mu <= 0.0:
        raise ValueError("width, height, and mass must be positive")
    use_tail = (rigidity <= 0.0) if tail is None else tail
    area = width * height
    scale = math.sqrt(rigidity / mu) if rigidity > 0.0 else 0.0
    modes: list[Mode] = []
    for m in range(1, m_max + 1, 2):
        for n in range(1, m_max + 1, 2):
            omega = math.pi**2 * scale * ((m / width) ** 2 + (n / height) ** 2) if scale else 0.0
            if rigidity > 0.0 and omega > 2.0 * math.pi * 6000.0 and (m > 1 or n > 1):
                continue
            gamma = 8.0 * math.sqrt(area) / (m * n * math.pi**2 * math.sqrt(mu))
            k_lat = math.pi * math.hypot(m / width, n / height)
            modes.append(Mode(omega, gamma, k_lat))
    g_sum = sum(mu * mode.gamma**2 / area for mode in modes)
    leftover = max(0.0, 1.0 - g_sum) if use_tail else 0.0
    return ModalSystem(tuple(modes), area, leftover)


def solve_modes(bay: Bay, plate: Plate) -> ModalSystem:
    """Bending shapes of one bay for this leaf and edge model."""
    resolved = bay.with_edge(plate.edge)
    k_rot = plate.k_rot if plate.edge == "elastic" else 0.0
    return _solve_cached(
        resolved,
        float(plate.e_pa),
        float(plate.nu),
        float(plate.density),
        float(plate.thickness_m),
        float(k_rot),
    )


@lru_cache(maxsize=4096)
def _solve_cached(
    bay: Bay,
    e_pa: float,
    nu: float,
    density: float,
    thickness: float,
    k_rot: float,
) -> ModalSystem:
    mu = density * thickness
    rigidity = e_pa * thickness**3 / (12.0 * (1.0 - nu**2)) if e_pa > 0.0 else 0.0
    labels = (bay.left, bay.right, bay.bottom, bay.top)
    if bay.area <= 0.0 or mu <= 0.0:
        return ModalSystem((), max(bay.area, 0.0), 0.0)
    if all(label == "free" for label in labels):
        return ModalSystem((Mode(0.0, math.sqrt(bay.area / mu), 0.0),), bay.area, 0.0)
    if bay.span_x < 0.02 or bay.span_z < 0.02:
        # A sliver between the last stud and the inset. Too stiff to move.
        return ModalSystem((), bay.area, 0.0)
    four_simple = all(label == "simple" for label in labels) and bay.kind == "rectangle"
    bbox_area = bay.span_x * bay.span_z
    if four_simple and bay.area >= 0.97 * bbox_area and rigidity >= 0.0:
        return analytic_ss_system(bay.span_x, bay.span_z, rigidity, mu, tail=False)

    system = _ritz(bay, rigidity, nu, mu, k_rot)
    return system


def _family(left: str, right: str, xi: np.ndarray, n: int) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """Value, d/dξ, d²/dξ². Columns are the 1D shapes. ``elastic`` is a hinge here."""
    left = "simple" if left == "elastic" else left
    right = "simple" if right == "elastic" else right
    cols_w: list[np.ndarray] = []
    cols_d: list[np.ndarray] = []
    cols_d2: list[np.ndarray] = []
    if left == "simple" and right == "simple":
        for p in range(1, n + 1):
            w = np.sin(p * np.pi * xi)
            cols_w.append(w)
            cols_d.append(p * np.pi * np.cos(p * np.pi * xi))
            cols_d2.append(-(p * np.pi) ** 2 * w)
    elif left == "continuous" and right == "continuous":
        for beta in _CC_BETA[:n]:
            w, d, d2 = _cc_on_grid(xi, beta, _cc_sigma(beta))
            cols_w.append(w)
            cols_d.append(d)
            cols_d2.append(d2)
    else:
        orders = {"free": 0, "simple": 1, "continuous": 2}
        p0 = orders[left]
        q0 = orders[right]
        for k in range(n):
            w, d, d2 = _monomial_factor(xi, p0 + k, q0)
            cols_w.append(w)
            cols_d.append(d)
            cols_d2.append(d2)
    return np.stack(cols_w, axis=1), np.stack(cols_d, axis=1), np.stack(cols_d2, axis=1)


def _cc_sigma(beta: float) -> float:
    e2 = math.exp(-2.0 * beta)
    half = 0.5 * math.exp(beta)
    cosh = half * (1.0 + e2)
    sinh = half * (1.0 - e2)
    return (cosh - math.cos(beta)) / (sinh - math.sin(beta))


def _cc_on_grid(xi: np.ndarray, beta: float, sigma: float) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """Clamped-clamped beam shape, stable at the right-hand end."""
    a_coef = 0.5 * (1.0 - sigma) * math.exp(beta)
    b_coef = 0.5 * (1.0 + sigma)
    ep = np.exp(beta * (xi - 1.0))
    en = np.exp(-beta * xi)
    w = a_coef * ep + b_coef * en - np.cos(beta * xi) + sigma * np.sin(beta * xi)
    dw = (
        a_coef * beta * ep
        - b_coef * beta * en
        + beta * np.sin(beta * xi)
        + sigma * beta * np.cos(beta * xi)
    )
    d2 = (
        a_coef * beta**2 * ep
        + b_coef * beta**2 * en
        + beta**2 * np.cos(beta * xi)
        - sigma * beta**2 * np.sin(beta * xi)
    )
    return w, dw, d2


def _monomial_factor(xi: np.ndarray, p: int, q: int) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """ξ^p (1−ξ)^q and its first two derivatives. Negative powers are zero."""
    xi = np.asarray(xi, dtype=float)

    def xp(n: int) -> np.ndarray:
        if n == 0:
            return np.ones_like(xi)
        if n < 0:
            return np.zeros_like(xi)
        return xi**n

    def xq(n: int) -> np.ndarray:
        if n == 0:
            return np.ones_like(xi)
        if n < 0:
            return np.zeros_like(xi)
        return (1.0 - xi) ** n

    u = xp(p) * xq(q)
    du = np.zeros_like(xi)
    if p >= 1:
        du = du + p * xp(p - 1) * xq(q)
    if q >= 1:
        du = du - q * xp(p) * xq(q - 1)
    d2 = np.zeros_like(xi)
    if p >= 2:
        d2 = d2 + p * (p - 1) * xp(p - 2) * xq(q)
    if p >= 1 and q >= 1:
        d2 = d2 - 2.0 * p * q * xp(p - 1) * xq(q - 1)
    if q >= 2:
        d2 = d2 + q * (q - 1) * xp(p) * xq(q - 2)
    return u, du, d2


def _point_in_polygon(xs: np.ndarray, zs: np.ndarray, poly: tuple[tuple[float, float], ...]) -> np.ndarray:
    """Even-odd ray cast. The gable fields can be concave, so half-planes are not enough."""
    x = xs[:, None]
    z = zs[None, :]
    inside = np.zeros((xs.size, zs.size), dtype=bool)
    count = len(poly)
    for i in range(count):
        x0, z0 = poly[i]
        x1, z1 = poly[(i + 1) % count]
        if z0 == z1:
            continue
        straddles = (z0 > z) != (z1 > z)
        x_cross = x0 + (z - z0) * (x1 - x0) / (z1 - z0)
        inside ^= straddles & (x < x_cross)
    return inside


def _poly_area(poly: tuple[tuple[float, float], ...] | list[tuple[float, float]]) -> float:
    area = 0.0
    for (x0, z0), (x1, z1) in zip(poly, list(poly)[1:] + [poly[0]]):
        area += x0 * z1 - x1 * z0
    return 0.5 * area


def _line_span(poly: tuple[tuple[float, float], ...], *, x: float | None = None, z: float | None = None) -> tuple[float, float] | None:
    hits: list[float] = []
    count = len(poly)
    for i in range(count):
        x0, z0 = poly[i]
        x1, z1 = poly[(i + 1) % count]
        if x is not None:
            if abs(x1 - x0) < 1e-9:
                if abs(x0 - x) <= 1e-6:
                    hits.extend((z0, z1))
                continue
            t = (x - x0) / (x1 - x0)
            if -1e-8 <= t <= 1.0 + 1e-8:
                hits.append(z0 + t * (z1 - z0))
        else:
            assert z is not None
            if abs(z1 - z0) < 1e-9:
                if abs(z0 - z) <= 1e-6:
                    hits.extend((x0, x1))
                continue
            t = (z - z0) / (z1 - z0)
            if -1e-8 <= t <= 1.0 + 1e-8:
                hits.append(x0 + t * (x1 - x0))
    if len(hits) < 2:
        return None
    lo, hi = min(hits), max(hits)
    if hi - lo < 1e-4:
        return None
    return lo, hi


def _slant_window(
    xs: np.ndarray,
    zs: np.ndarray,
    poly: tuple[tuple[float, float], ...],
    mask: np.ndarray,
) -> tuple[np.ndarray, np.ndarray, np.ndarray] | None:
    """Factor that is zero on each slanted edge of the bay, and its gradient.

    A rake screw line is not a side of the bounding box. Multiplying by the
    inward distance pins the leaf on that line (simply supported). Axis-aligned
    studs and the perimeter profile are already in the edge families.
    """
    edges: list[tuple[float, float, float, float]] = []
    area = 0.0
    pts = list(poly)
    for (x0, z0), (x1, z1) in zip(pts, pts[1:] + pts[:1]):
        area += x0 * z1 - x1 * z0
        if abs(x1 - x0) > 1.5e-3 and abs(z1 - z0) > 1.5e-3:
            edges.append((x0, z0, x1, z1))
    if not edges:
        return None
    sign = 1.0 if area >= 0.0 else -1.0
    x_col = xs[:, None]
    z_row = zs[None, :]
    window = np.ones(mask.shape)
    grad_x = np.zeros(mask.shape)
    grad_z = np.zeros(mask.shape)
    for x0, z0, x1, z1 in edges:
        ex, ez = x1 - x0, z1 - z0
        length = math.hypot(ex, ez)
        if length < 1e-9:
            continue
        dist = sign * ((x_col - x0) * ez - (z_row - z0) * ex) / length
        dist = np.clip(dist, 0.0, None)
        inside = dist[mask]
        scale = float(inside.max()) if inside.size else 0.0
        if scale < 1e-6:
            continue
        factor = dist / scale
        fx = sign * ez / (length * scale)
        fz = sign * (-ex) / (length * scale)
        grad_x = grad_x * factor + window * fx
        grad_z = grad_z * factor + window * fz
        window = window * factor
    if not np.any(mask) or float(window[mask].max()) < 1e-8:
        return None
    return window, grad_x, grad_z


def _ritz(bay: Bay, rigidity: float, nu: float, mu: float, k_rot: float) -> ModalSystem:
    nx = nz = _N_GRID
    n = _N_FUNC
    xi = (np.arange(nx) + 0.5) / nx
    eta = (np.arange(nz) + 0.5) / nz
    a = bay.span_x
    b = bay.span_z
    xw, xd, xd2 = _family(bay.left, bay.right, xi, n)
    zw, zd, zd2 = _family(bay.bottom, bay.top, eta, n)
    nfx = xw.shape[1]
    nfz = zw.shape[1]
    nb = nfx * nfz
    # (nb, nx, nz) tensor products. Derivatives are physical (per metre).
    w = (xw[:, :, None, None] * zw[None, None, :, :]).transpose(1, 3, 0, 2).reshape(nb, nx, nz)
    wx = (xd[:, :, None, None] * zw[None, None, :, :] / a).transpose(1, 3, 0, 2).reshape(nb, nx, nz)
    wz = (xw[:, :, None, None] * zd[None, None, :, :] / b).transpose(1, 3, 0, 2).reshape(nb, nx, nz)
    wxx = (xd2[:, :, None, None] * zw[None, None, :, :] / a**2).transpose(1, 3, 0, 2).reshape(nb, nx, nz)
    wzz = (xw[:, :, None, None] * zd2[None, None, :, :] / b**2).transpose(1, 3, 0, 2).reshape(nb, nx, nz)
    wxz = (xd[:, :, None, None] * zd[None, None, :, :] / (a * b)).transpose(1, 3, 0, 2).reshape(nb, nx, nz)

    xs = bay.x0 + xi * a
    zs = bay.z0 + eta * b
    mask = _point_in_polygon(xs, zs, bay.polygon)
    slant = _slant_window(xs, zs, bay.polygon, mask)
    if slant is not None:
        s_fac, sx_fac, sz_fac = slant
        wxx = s_fac * wxx + 2.0 * sx_fac * wx
        wzz = s_fac * wzz + 2.0 * sz_fac * wz
        wxz = s_fac * wxz + sx_fac * wz + sz_fac * wx
        wx = sx_fac * w + s_fac * wx
        wz = sz_fac * w + s_fac * wz
        w = s_fac * w
    d_a = (a / nx) * (b / nz)
    mr = mask.reshape(-1)
    if int(mr.sum()) < 8:
        return ModalSystem((Mode(0.0, math.sqrt(bay.area / mu), 0.0),), bay.area, 0.0)

    def flat(arr: np.ndarray) -> np.ndarray:
        return arr.reshape(nb, -1)

    wf = flat(w)
    wxxf, wzzf, wxzf = flat(wxx), flat(wzz), flat(wxz)
    wxf, wzf = flat(wx), flat(wz)
    mass = (wf * mr) @ wf.T * (mu * d_a)
    bend = (wxxf * mr) @ wxxf.T + (wzzf * mr) @ wzzf.T
    poisson = (wxxf * mr) @ wzzf.T
    poisson = poisson + poisson.T
    shear = (wxzf * mr) @ wxzf.T
    stiff = rigidity * (bend + nu * poisson + 2.0 * (1.0 - nu) * shear) * d_a
    if k_rot > 0.0:
        stiff = stiff + _spring_matrix(bay, k_rot, n, a, b)
    gamma_basis = (wf * mr).sum(axis=1) * d_a
    grad_x = (wxf * mr) @ wxf.T * d_a
    grad_z = (wzf * mr) @ wzf.T * d_a
    return _eigenmodes(stiff, mass, gamma_basis, grad_x, grad_z, mu, bay.area)


def _spring_matrix(bay: Bay, k_rot: float, n: int, a: float, b: float) -> np.ndarray:
    """Rotational spring along each elastic edge, ∫ K_r (∂φ/∂n)² ds."""
    nfx_probe, _, _ = _family(bay.left, bay.right, np.array([0.5]), n)
    nfz_probe, _, _ = _family(bay.bottom, bay.top, np.array([0.5]), n)
    nb = nfx_probe.shape[1] * nfz_probe.shape[1]
    matrix = np.zeros((nb, nb))
    edges = (
        ("left", bay.left, True),
        ("right", bay.right, True),
        ("bottom", bay.bottom, False),
        ("top", bay.top, False),
    )
    for which, label, vertical in edges:
        if label != "elastic":
            continue
        if vertical:
            span = _line_span(bay.polygon, x=bay.x0 if which == "left" else bay.x1)
            if span is None:
                continue
            lo, hi = span
            n_s = 24
            ds = (hi - lo) / n_s
            samples = lo + (np.arange(n_s) + 0.5) * ds
            eta = np.clip((samples - bay.z0) / b, 0.0, 1.0)
            xi_edge = 0.0 if which == "left" else 1.0
            _, xd, _ = _family(bay.left, bay.right, np.array([xi_edge]), n)
            zw, _, _ = _family(bay.bottom, bay.top, eta, n)
            nfx = xd.shape[1]
            nfz = zw.shape[1]
            dn = np.empty((nfx * nfz, eta.size))
            for ixf in range(nfx):
                for izf in range(nfz):
                    dn[ixf * nfz + izf, :] = (xd[0, ixf] / a) * zw[:, izf]
        else:
            span = _line_span(bay.polygon, z=bay.z0 if which == "bottom" else bay.z1)
            if span is None:
                continue
            lo, hi = span
            n_s = 24
            ds = (hi - lo) / n_s
            samples = lo + (np.arange(n_s) + 0.5) * ds
            xi = np.clip((samples - bay.x0) / a, 0.0, 1.0)
            eta_edge = 0.0 if which == "bottom" else 1.0
            xw, _, _ = _family(bay.left, bay.right, xi, n)
            _, zd, _ = _family(bay.bottom, bay.top, np.array([eta_edge]), n)
            nfx = xw.shape[1]
            nfz = zd.shape[1]
            dn = np.empty((nfx * nfz, xi.size))
            for ixf in range(nfx):
                for izf in range(nfz):
                    dn[ixf * nfz + izf, :] = xw[:, ixf] * (zd[0, izf] / b)
        if dn.shape[0] != nb:
            continue
        matrix += k_rot * (dn @ dn.T) * ds
    return matrix


def _eigenmodes(
    stiff: np.ndarray,
    mass: np.ndarray,
    gamma_basis: np.ndarray,
    grad_x: np.ndarray,
    grad_z: np.ndarray,
    mu: float,
    area: float,
) -> ModalSystem:
    mass = 0.5 * (mass + mass.T)
    stiff = 0.5 * (stiff + stiff.T)
    evals, evecs = np.linalg.eigh(mass)
    top = float(evals[-1]) if evals.size else 0.0
    if top <= 0.0:
        return ModalSystem((Mode(0.0, math.sqrt(area / mu), 0.0),), area, 0.0)
    keep = evals > 1e-8 * top
    if not np.any(keep):
        return ModalSystem((Mode(0.0, math.sqrt(area / mu), 0.0),), area, 0.0)
    basis = evecs[:, keep] / np.sqrt(evals[keep])
    reduced = basis.T @ stiff @ basis
    omega2, coeffs = np.linalg.eigh(reduced)
    vectors = basis @ coeffs
    modes: list[Mode] = []
    for i, w2 in enumerate(omega2):
        w2 = float(w2)
        if w2 < 0.0:
            w2 = 0.0
        vec = vectors[:, i]
        gamma = float(vec @ gamma_basis)
        k2 = float(vec @ grad_x @ vec + vec @ grad_z @ vec) * mu
        if k2 < 0.0:
            k2 = 0.0
        modes.append(Mode(math.sqrt(w2), gamma, math.sqrt(k2)))
    modes.sort(key=lambda mode: mode.omega)
    return ModalSystem(tuple(modes), area, 0.0)


def _admittance(
    system: ModalSystem,
    freq: float,
    theta: float,
    eta: float,
    mu: float,
    cavity: Cavity,
) -> complex:
    omega = 2.0 * math.pi * freq
    if system.area <= 0.0 or omega <= 0.0:
        return 0j
    k_trace = omega / C0 * math.sin(theta)
    total = 0j
    for mode in system.modes:
        k_lat = math.hypot(mode.k_lat, k_trace)
        z_cav = cavity.impedance(freq, k_lat)
        denom = mode.omega**2 * (1.0 + 1j * eta) - omega**2 + 1j * omega * z_cav / mu
        if abs(denom) < 1e-18:
            continue
        total += 1j * omega * mode.gamma**2 / (system.area * denom)
    if system.tail > 0.0:
        z_cav = cavity.impedance(freq, abs(k_trace))
        limp = 1j * omega * mu + z_cav
        if abs(limp) > 1e-18:
            total += system.tail / limp
    return total


def _alpha_from_admittance(admittance: complex, theta: float) -> float:
    if abs(admittance) < 1e-16:
        return 0.0
    impedance = 1.0 / admittance
    incident = Z0 / max(math.cos(theta), 1e-6)
    reflection = (impedance - incident) / (impedance + incident)
    alpha = 1.0 - abs(reflection) ** 2
    if alpha < 0.0:
        return 0.0
    if alpha > 1.0:
        return 1.0
    return alpha


def alpha_at(
    system: ModalSystem,
    freq: float,
    plate: Plate,
    cavity: Cavity,
    theta: float = 0.0,
) -> float:
    return _alpha_from_admittance(
        _admittance(system, freq, theta, plate.eta, plate.mu, cavity),
        theta,
    )


def field_alpha(
    system: ModalSystem,
    freq: float,
    plate: Plate,
    cavity: Cavity,
    n_angles: int = FIELD_ANGLES,
    theta_max_deg: float = FIELD_THETA_DEG,
) -> float:
    """Paris average out to theta_max, same weighting as the layer model."""
    theta_max = math.radians(theta_max_deg)
    step = theta_max / n_angles
    acc = 0.0
    for i in range(n_angles):
        theta = (i + 0.5) * step
        weight = math.sin(theta) * math.cos(theta) * step
        acc += alpha_at(system, freq, plate, cavity, theta) * weight
    norm = 0.5 * math.sin(theta_max) ** 2
    return acc / norm


def band_alpha(
    system: ModalSystem,
    freq: float,
    plate: Plate,
    cavity: Cavity,
    n_angles: int = FIELD_ANGLES,
    n_in_band: int = BAND_SAMPLES,
) -> float:
    """Arithmetic mean of the field absorption across one third-octave."""
    if n_in_band <= 1:
        return field_alpha(system, freq, plate, cavity, n_angles=n_angles)
    lo = freq / 2.0 ** (1.0 / 6.0)
    hi = freq * 2.0 ** (1.0 / 6.0)
    acc = 0.0
    for i in range(n_in_band):
        sample = lo * (hi / lo) ** ((i + 0.5) / n_in_band)
        acc += field_alpha(system, sample, plate, cavity, n_angles=n_angles)
    return acc / n_in_band


def weighted_band_alpha(
    systems: list[ModalSystem] | tuple[ModalSystem, ...],
    freq: float,
    plate: Plate,
    cavity: Cavity,
    n_angles: int = FIELD_ANGLES,
    n_in_band: int = BAND_SAMPLES,
) -> float:
    total = sum(system.area for system in systems)
    if total <= 0.0:
        return 0.0
    acc = 0.0
    for system in systems:
        acc += system.area * band_alpha(system, freq, plate, cavity, n_angles, n_in_band)
    return acc / total


def weighted_normal_alpha(
    systems: list[ModalSystem] | tuple[ModalSystem, ...],
    freq: float,
    plate: Plate,
    cavity: Cavity,
) -> float:
    total = sum(system.area for system in systems)
    if total <= 0.0:
        return 0.0
    acc = 0.0
    for system in systems:
        acc += system.area * alpha_at(system, freq, plate, cavity, 0.0)
    return acc / total


def first_absorption_peak_hz(
    systems: list[ModalSystem] | tuple[ModalSystem, ...],
    plate: Plate,
    cavity: Cavity,
    f_lo: float = 12.0,
    f_hi: float = 200.0,
    n: int = 100,
    floor: float = 0.08,
) -> float:
    """Lowest peak of the normal-incidence curve.

    A higher bending shape can out-absorb the fundamental on a coarse grid.
    The note of the field is this first peak. Bay size moves it in the same
    direction as the plate frequency.
    """
    freqs = np.geomspace(f_lo, f_hi, n)
    alphas = [weighted_normal_alpha(systems, float(freq), plate, cavity) for freq in freqs]
    for i in range(1, n - 1):
        if alphas[i] >= alphas[i - 1] and alphas[i] >= alphas[i + 1] and alphas[i] >= floor:
            return float(freqs[i])
    return float(freqs[int(np.argmax(alphas))])


def normal_peak_hz(
    systems: list[ModalSystem] | tuple[ModalSystem, ...],
    plate: Plate,
    cavity: Cavity,
    f_lo: float = 16.0,
    f_hi: float = 220.0,
    n: int = 72,
) -> float:
    """Frequency of the highest normal-incidence absorption in the bass."""
    freqs = np.geomspace(f_lo, f_hi, n)
    alphas = [weighted_normal_alpha(systems, float(freq), plate, cavity) for freq in freqs]
    return float(freqs[int(np.argmax(alphas))])


def normal_reactance_zero_hz(
    system: ModalSystem,
    plate: Plate,
    cavity: Cavity,
    f_lo: float = 15.0,
    f_hi: float = 250.0,
) -> float | None:
    """Lowest frequency where Im(Zs) changes sign at normal incidence."""

    def imag(freq: float) -> float:
        admittance = _admittance(system, freq, 0.0, plate.eta, plate.mu, cavity)
        if abs(admittance) < 1e-18:
            return 0.0
        return (1.0 / admittance).imag

    samples = 70
    freqs = [f_lo * (f_hi / f_lo) ** (i / (samples - 1)) for i in range(samples)]
    values = [imag(freq) for freq in freqs]
    for f0, f1, y0, y1 in zip(freqs, freqs[1:], values, values[1:]):
        if y0 == 0.0:
            return f0
        if y0 * y1 < 0.0:
            lo, hi, y_lo = f0, f1, y0
            for _ in range(40):
                mid = 0.5 * (lo + hi)
                y_mid = imag(mid)
                if y_lo * y_mid <= 0.0:
                    hi = mid
                else:
                    lo, y_lo = mid, y_mid
            return 0.5 * (lo + hi)
    return None
