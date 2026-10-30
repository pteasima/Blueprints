"""Band decay, smoothness, and the thickness recommendation."""

from __future__ import annotations

import math

import numpy as np

from blueprints.acoustics.roomwave.geometry import JND, PLEASANT_HI, PLEASANT_LO, PLEASANT_MID, THIRDS

_LN1000 = math.log(1000.0)


def band_edges(centre: float) -> tuple[float, float]:
    half = 2.0 ** (1.0 / 6.0)
    return centre / half, centre * half


def band_mask(freqs: np.ndarray, centre: float) -> np.ndarray:
    lo, hi = band_edges(centre)
    return (freqs >= lo) & (freqs < hi)


def weighted_mean(values: np.ndarray, weights: np.ndarray) -> float:
    total = float(np.sum(weights))
    if total <= 0.0 or not np.any(np.isfinite(values)):
        return math.nan
    good = np.isfinite(values) & np.isfinite(weights) & (weights > 0.0)
    if not np.any(good):
        return math.nan
    return float(np.sum(values[good] * weights[good]) / np.sum(weights[good]))


def synthetic_edt(weights: np.ndarray, t60: np.ndarray) -> float:
    """Early decay of a sum of exponentials, extrapolated from −10 dB to −60 dB.

    Each frequency sample keeps its energy weight and its own energy-balance
    T60. One mode returns that T60. A mix of fast and slow decays is steeper
    at the start, which is what EDT is for.
    """
    good = np.isfinite(t60) & (t60 > 0.02) & (t60 < 30.0) & (weights > 0.0)
    if int(np.sum(good)) < 2:
        return math.nan
    w = weights[good]
    rate = 2.0 * _LN1000 / t60[good]

    def energy(time: float) -> float:
        return float(np.sum(w * np.exp(-rate * time)))

    start = energy(0.0)
    if start <= 0.0:
        return math.nan
    lo, hi = 0.0, 3.0
    if energy(hi) > 0.1 * start:
        return math.nan
    for _ in range(40):
        mid = 0.5 * (lo + hi)
        if energy(mid) > 0.1 * start:
            lo = mid
        else:
            hi = mid
    return 6.0 * (0.5 * (lo + hi))


def power_db(power: float, reference: float) -> float:
    if power <= 0.0 or reference <= 0.0:
        return math.nan
    return 10.0 * math.log10(power / reference)


def smoothness(levels_db: list[float] | np.ndarray) -> float:
    """Standard deviation of third-octave levels, in dB. A flat curve is zero."""
    values = np.array([v for v in levels_db if math.isfinite(v)], dtype=float)
    if len(values) < 3:
        return math.nan
    return float(np.std(values))


def audible(left: float, right: float) -> bool:
    if not (math.isfinite(left) and math.isfinite(right)):
        return False
    return abs(left - right) >= JND * max(left, right, 0.05)


def choose_thickness(rows: list[dict]) -> tuple[int, str]:
    """Pick a NaturHeld thickness for a pleasant living room.

    ``rows`` are the furnished, as-built-soffit cases, one per thickness.
    Each row has ``thickness_mm``, ``t_bass`` (seconds) and ``smooth`` (dB).
    The target is the middle of 0.4–0.9 s. A thicker board is not chosen when
    every step stays inside 5% and the smoothness stays inside 0.4 dB.
    """
    ordered = sorted(rows, key=lambda row: row["thickness_mm"])
    by_mm = {int(row["thickness_mm"]): row for row in ordered}
    base = by_mm.get(80)
    if base is not None and all(
        not audible(base["t_bass"], row["t_bass"]) and abs(base["smooth"] - row["smooth"]) < 0.4
        for row in ordered
        if math.isfinite(row["t_bass"]) and math.isfinite(row["smooth"])
    ):
        return 80, "inaudible"

    def pleasant(row: dict) -> bool:
        return math.isfinite(row["t_bass"]) and PLEASANT_LO <= row["t_bass"] <= PLEASANT_HI

    pleasant_rows = [row for row in ordered if pleasant(row)]
    if pleasant_rows and all(pleasant(row) for row in ordered) and 80 in by_mm:
        thicker = [row for row in pleasant_rows if int(row["thickness_mm"]) > 80]
        base_smooth = by_mm[80]["smooth"]
        smoother = [
            row for row in thicker
            if math.isfinite(row["smooth"]) and row["smooth"] < base_smooth - 0.4
        ]
        if not smoother:
            return 80, "drawing"
    pool = pleasant_rows or ordered

    def key(row: dict):
        bass = row["t_bass"] if math.isfinite(row["t_bass"]) else 99.0
        smooth = row["smooth"] if math.isfinite(row["smooth"]) else 99.0
        return (abs(bass - PLEASANT_MID), abs(int(row["thickness_mm"]) - 80), smooth, int(row["thickness_mm"]))

    best = min(pool, key=key)
    code = "pleasant" if pleasant_rows else "nearest"
    return int(best["thickness_mm"]), code


def summarise_variant(freqs: np.ndarray, t60: np.ndarray, weights: np.ndarray, sofa_power: np.ndarray) -> dict:
    """Per-third T60, EDT, and sofa level. ``sofa_power`` is mean |p|² of the three seats."""
    bands = []
    for centre in THIRDS:
        mask = band_mask(freqs, centre)
        if int(mask.sum()) == 0:
            continue
        level = float(np.mean(sofa_power[mask])) if mask.any() else math.nan
        bands.append(
            {
                "hz": centre,
                "t60": weighted_mean(t60[mask], weights[mask]),
                "edt": synthetic_edt(weights[mask], t60[mask]),
                "sofa_power": level,
                "n": int(mask.sum()),
            }
        )
    bass_centres = (50.0, 63.0, 80.0)
    mid_centres = (100.0, 125.0)
    by = {row["hz"]: row for row in bands}

    def mean_of(centres: tuple[float, ...], field: str) -> float:
        values = [by[hz][field] for hz in centres if hz in by and math.isfinite(by[hz][field])]
        if not values:
            return math.nan
        return float(sum(values) / len(values))

    smooth_levels = []
    for centre in (50.0, 63.0, 80.0, 100.0, 125.0, 160.0):
        if centre in by and by[centre]["sofa_power"] > 0.0:
            smooth_levels.append(10.0 * math.log10(by[centre]["sofa_power"]))
    return {
        "bands": bands,
        "t_bass": mean_of(bass_centres, "t60"),
        "edt_bass": mean_of(bass_centres, "edt"),
        "t_125": mean_of(mid_centres, "t60"),
        "smooth": smoothness(smooth_levels),
    }
