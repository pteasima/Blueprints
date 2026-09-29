"""Energy rays in the Obývák shell.

Specular on hard faces. On a battened face, a labeled scattering coefficient
(see ``batten_scattering``) mixes Lambert directions into the reflection.
Absorption at a hit is α at that arrival angle, from the extended-reaction
stack. It is not the Paris average and not the normal-incidence value.

Air absorption is ISO 9613-1:1993 at 20 °C, 50 % RH, 101.325 kPa.

Ray statistics are not a modal model. Below the Schroeder frequency
(about 100–150 Hz in this volume when RT is half a second to a second)
a decay from these rays is not a result. 125 Hz is computed only so it
can be marked invalid. Bass modes are the next slice, not this one.
"""

from __future__ import annotations

import math
from dataclasses import dataclass

import numpy as np

from blueprints.acoustics.shell import Shell, batten_scattering
from blueprints.acoustics.transfer import oblique_absorption

# Octave centres we actually march. 125 is kept so the report can mark it.
OCTAVE_HZ = (125, 250, 500, 1000, 2000)
RAYS_VALID_FROM_HZ = 250


def air_attenuation_db_per_m(
    freq_hz: float,
    temperature_c: float = 20.0,
    relative_humidity_pct: float = 50.0,
    pressure_kpa: float = 101.325,
) -> float:
    """ISO 9613-1 pure-tone attenuation, dB per metre."""
    t_kelvin = temperature_c + 273.15
    t0 = 293.15
    t01 = 273.16
    pr = 101.325
    psat = pr * 10 ** (-6.8346 * (t01 / t_kelvin) ** 1.261 + 4.6151)
    # Molar concentration of water vapour, percent.
    humidity = relative_humidity_pct * (psat / pressure_kpa)
    pa_over_pr = pressure_kpa / pr
    f_ro = pa_over_pr * (24.0 + 4.04e4 * humidity * (0.02 + humidity) / (0.391 + humidity))
    f_rn = pa_over_pr * (t_kelvin / t0) ** -0.5 * (
        9.0 + 280.0 * humidity * math.exp(-4.170 * ((t_kelvin / t0) ** (-1.0 / 3.0) - 1.0))
    )
    f2 = freq_hz * freq_hz
    classical = 1.84e-11 * (t_kelvin / t0) ** 0.5 / pressure_kpa
    rotational = (t_kelvin / t0) ** -2.5 * (
        0.01275 * math.exp(-2239.1 / t_kelvin) / (f_ro + f2 / f_ro)
        + 0.1068 * math.exp(-3352.0 / t_kelvin) / (f_rn + f2 / f_rn)
    )
    return 8.686 * f2 * (classical + rotational)


@dataclass(frozen=True)
class DecayResult:
    freq_hz: int
    valid_rays: bool
    t20_s: float | None
    t30_s: float | None
    edt_s: float | None
    received_hits: int
    energy_checksum: float
    miki_extrapolated: bool


def _alpha_grid(layers, freq_hz: float, open_fraction: float, n_theta: int = 91) -> np.ndarray:
    """α at theta = 0 .. almost 90°. Last sample is grazing, forced to 0."""
    values = np.empty(n_theta, dtype=float)
    for i in range(n_theta - 1):
        theta = (i / (n_theta - 1)) * (0.5 * math.pi * 0.995)
        values[i] = oblique_absorption(layers, freq_hz, theta, open_fraction)
    values[-1] = 0.0
    return values


def lookup_alpha(grid: np.ndarray, cos_incidence: np.ndarray) -> np.ndarray:
    """grid is sampled uniformly in theta from 0 to pi/2."""
    theta = np.arccos(np.clip(cos_incidence, 0.0, 1.0))
    x = theta / (0.5 * math.pi) * (len(grid) - 1)
    i0 = np.floor(x).astype(int)
    i1 = np.minimum(i0 + 1, len(grid) - 1)
    frac = x - i0
    return (1.0 - frac) * grid[i0] + frac * grid[i1]


def _intersect(
    origins: np.ndarray,
    dirs: np.ndarray,
    v0: np.ndarray,
    e1: np.ndarray,
    e2: np.ndarray,
    normals: np.ndarray,
    eps: float,
) -> tuple[np.ndarray, np.ndarray]:
    """Closest front-face hit. Back faces are ignored so a leaked ray dies."""
    with np.errstate(invalid="ignore", divide="ignore"):
        pvec = np.cross(dirs[:, None, :], e2[None, :, :])
        det = np.einsum("ntj,tj->nt", pvec, e1)
        inv = np.zeros_like(det)
        np.divide(1.0, det, out=inv, where=np.abs(det) > 1e-10)
        tvec = origins[:, None, :] - v0[None, :, :]
        u = np.einsum("ntj,ntj->nt", pvec, tvec) * inv
        qvec = np.cross(tvec, e1[None, :, :])
        v = np.einsum("ntj,nj->nt", qvec, dirs) * inv
        dist = np.einsum("ntj,tj->nt", qvec, e2) * inv
        front = np.einsum("nj,tj->nt", dirs, normals) < 0.0
        valid = (
            (np.abs(det) > 1e-10)
            & front
            & (u >= 0.0)
            & (v >= 0.0)
            & (u + v <= 1.0)
            & (dist > eps)
        )
        dist = np.where(valid, dist, np.inf)
        face = np.argmin(dist, axis=1)
        nearest = dist[np.arange(len(origins)), face]
    return nearest, face


def _lambert(normals: np.ndarray, rng: np.random.Generator) -> np.ndarray:
    n = len(normals)
    u1 = rng.random(n)
    u2 = rng.random(n)
    z = np.sqrt(u1)
    radius = np.sqrt(np.maximum(1.0 - u1, 0.0))
    phi = 2.0 * math.pi * u2
    local_x = radius * np.cos(phi)
    local_y = radius * np.sin(phi)
    helper = np.tile(np.array([1.0, 0.0, 0.0]), (n, 1))
    helper[np.abs(normals[:, 0]) > 0.9] = (0.0, 1.0, 0.0)
    tangent = np.cross(normals, helper)
    tangent /= np.linalg.norm(tangent, axis=1, keepdims=True)
    bitangent = np.cross(normals, tangent)
    return local_x[:, None] * tangent + local_y[:, None] * bitangent + z[:, None] * normals


def trace_decay(
    shell: Shell,
    source: np.ndarray,
    receiver: np.ndarray,
    *,
    alpha_grids: dict[int, np.ndarray],
    scatter: dict[int, float],
    freq_hz: int,
    miki_extrapolated: bool,
    n_rays: int,
    max_bounces: int,
    seed: int,
    residual_alpha: float = 0.03,
    radius_m: float = 0.5,
    t_max_s: float = 2.0,
    bin_s: float = 0.005,
) -> DecayResult:
    """Monte Carlo energy decay at one receiver. Deterministic for a given seed.

    A hit on a surface with a grid uses α at that arrival angle. Every other
    face uses ``residual_alpha`` (the typical untreated-surface assumption).
    The reported times are Schroeder T20/T30 and EDT of the receiver histogram.
    They are not a diffuse-field average and not normal incidence.
    """
    rng = np.random.default_rng(seed)
    dirs = rng.normal(size=(n_rays, 3))
    dirs /= np.linalg.norm(dirs, axis=1, keepdims=True)
    pos = np.repeat(np.asarray(source, dtype=float)[None, :], n_rays, axis=0)
    receiver = np.asarray(receiver, dtype=float)
    energy = np.ones(n_rays, dtype=float)
    elapsed = np.zeros(n_rays, dtype=float)
    alive = np.ones(n_rays, dtype=bool)
    n_bins = int(t_max_s / bin_s) + 1
    hist = np.zeros(n_bins, dtype=float)
    hits = 0
    air_db = air_attenuation_db_per_m(freq_hz)
    c = 343.0
    tris = shell.triangles
    v0 = tris[:, 0]
    e1 = tris[:, 1] - v0
    e2 = tris[:, 2] - v0
    normals_all = shell.normals
    ids_all = shell.surface_ids
    for _bounce in range(max_bounces):
        active = np.flatnonzero(alive)
        if len(active) == 0:
            break
        dist, face = _intersect(pos[active], dirs[active], v0, e1, e2, normals_all, 1e-4)
        missed = ~np.isfinite(dist)
        alive[active[missed]] = False
        keep = ~missed
        if not np.any(keep):
            break
        active = active[keep]
        dist = dist[keep]
        face = face[keep]
        travel_time = dist / c
        to_rec = receiver - pos[active]
        along = np.einsum("ij,ij->i", to_rec, dirs[active])
        along = np.clip(along, 0.0, dist)
        closest = pos[active] + dirs[active] * along[:, None]
        near = np.einsum("ij,ij->i", closest - receiver, closest - receiver) <= radius_m ** 2
        if np.any(near):
            arrival = elapsed[active[near]] + along[near] / c
            gained = energy[active[near]] * 10 ** (-air_db * along[near] / 10.0)
            bins = np.clip((arrival / bin_s).astype(int), 0, n_bins - 1)
            np.add.at(hist, bins, gained)
            hits += int(near.sum())
        energy[active] *= 10 ** (-air_db * dist / 10.0)
        elapsed[active] += travel_time
        normals = normals_all[face]
        cos_inc = np.clip(-np.einsum("ij,ij->i", dirs[active], normals), 0.0, 1.0)
        sids = ids_all[face]
        absorbed = np.full(len(active), residual_alpha)
        for sid, grid in alpha_grids.items():
            mask = sids == sid
            if np.any(mask):
                absorbed[mask] = lookup_alpha(grid, cos_inc[mask])
        energy[active] *= 1.0 - absorbed
        dead = (energy[active] < 1e-6) | (elapsed[active] > t_max_s)
        alive[active[dead]] = False
        still = ~dead
        if not np.any(still):
            break
        active = active[still]
        normals = normals[still]
        sids = sids[still]
        dist = dist[still]
        reflect = dirs[active] - 2.0 * np.einsum("ij,ij->i", dirs[active], normals)[:, None] * normals
        scatter_p = np.array([scatter.get(int(sid), 0.0) for sid in sids])
        do_scatter = rng.random(len(active)) < scatter_p
        if np.any(do_scatter):
            reflect[do_scatter] = _lambert(normals[do_scatter], rng)
        norms = np.linalg.norm(reflect, axis=1, keepdims=True)
        reflect /= np.maximum(norms, 1e-15)
        pos[active] = pos[active] + dirs[active] * dist[:, None] + reflect * 2e-4
        dirs[active] = reflect
    t20, t30, edt = _schroeder(hist, bin_s)
    return DecayResult(
        freq_hz=freq_hz,
        valid_rays=freq_hz >= RAYS_VALID_FROM_HZ,
        t20_s=t20,
        t30_s=t30,
        edt_s=edt,
        received_hits=hits,
        energy_checksum=float(hist.sum()),
        miki_extrapolated=miki_extrapolated,
    )


def _schroeder(hist: np.ndarray, bin_s: float) -> tuple[float | None, float | None, float | None]:
    """T20, T30 and EDT from the reverse-integrated receiver energy."""
    total = hist.sum()
    if total <= 0.0:
        return None, None, None
    tail = np.cumsum(hist[::-1])[::-1]
    db = 10.0 * np.log10(np.maximum(tail / total, 1e-15))
    t0 = _cross(db, -0.0, bin_s)
    # The first bin is already the peak of a reverse integral, so t0 is 0
    # unless the curve starts below 0 (it does not).
    if t0 is None:
        t0 = 0.0
    t5 = _cross(db, -5.0, bin_s)
    t10 = _cross(db, -10.0, bin_s)
    t25 = _cross(db, -25.0, bin_s)
    t35 = _cross(db, -35.0, bin_s)
    t20 = None if t5 is None or t25 is None or t25 <= t5 else 3.0 * (t25 - t5)
    t30 = None if t5 is None or t35 is None or t35 <= t5 else 2.0 * (t35 - t5)
    edt = None if t10 is None or t10 <= t0 else 6.0 * (t10 - t0)
    return t20, t30, edt


def _cross(db: np.ndarray, level: float, bin_s: float) -> float | None:
    below = np.flatnonzero(db <= level)
    if len(below) == 0:
        return None
    i1 = int(below[0])
    if i1 == 0:
        return 0.0
    i0 = i1 - 1
    span = db[i0] - db[i1]
    frac = 0.0 if span == 0.0 else (db[i0] - level) / span
    return (i0 + frac) * bin_s


def prepare_grids(
    surface_layers: dict[int, tuple[list, float]],
    freq_hz: float,
) -> dict[int, np.ndarray]:
    return {
        sid: _alpha_grid(layers, freq_hz, open_fraction)
        for sid, (layers, open_fraction) in surface_layers.items()
    }


def scattering_for(
    surface_names: tuple[str, ...],
    freq_hz: float,
    spacing_m: float,
    slope_battens: bool,
    soffit_battens: bool = True,
) -> dict[int, float]:
    out = {}
    for sid, name in enumerate(surface_names):
        if name == "slope":
            out[sid] = batten_scattering(freq_hz, spacing_m, slope_battens)
        elif name == "soffit":
            out[sid] = batten_scattering(freq_hz, spacing_m, soffit_battens)
        else:
            out[sid] = 0.0
    return out
