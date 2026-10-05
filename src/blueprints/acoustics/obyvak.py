"""Absorption of the obývák stacks, and the room decay those coefficients imply.

The gable traps are a 12.5 mm GKB leaf on an open CD cavity. The leaf bends
between the studs, so the lattice (bay size, board direction, cut edge fields)
changes the absorption. A loose sheet with the bending stiffness removed is
kept as the limit check: a very large bay returns to that curve.

The soffit outline, roof pitch, and both predstěna depths stay fixed. The
slopes stay on the one-dimensional stack: 80 mm NaturHeld 140 on the GKF, no
Flex, no slope latě. The soffit cavity is mineral wool behind a 40 mm
NaturHeld 140 face.

On the kitchen gable the air gap includes the front CD: 27 mm of profile plus
20 mm clear of that CD, so the leaf can move. Wool never eats that clearance.
The slope build-up is StoSilent on NaturHeld 140, stopped on the GKF as a
heavy backing. Hanger compliance of that GKF is not in this model.

Flow resistivities are catalogue-order assumptions, not measured samples.
Half and double wool resistivity, and half and double plate stiffness, are
part of the ranking so a wrong number cannot silently flip it.

Another lattice is a ``LatticeSpec`` passed to ``run_study``. Pass
``cd_x_mm`` and ``rail_above_bottom_mm``, or a spacing. Pass ``wool_fractions``
to re-run one wool split instead of the grid.
"""

from __future__ import annotations

import math
import sys
from dataclasses import dataclass
from pathlib import Path

from blueprints.acoustics.lattice import (
    CANDIDATES,
    LatticeSpec,
    describe_layout,
    layout_gable,
    layout_svg,
)
from blueprints.acoustics.layers import (
    C0,
    Layer,
    field_absorption,
    panel_frequency,
    reactance_zero_hz,
)
from blueprints.acoustics.panel import (
    BAND_SAMPLES,
    FIELD_ANGLES,
    FLANGE_K_ROT,
    Cavity,
    Plate,
    first_absorption_peak_hz,
    solve_modes,
    weighted_band_alpha,
)

# Third-octave centres, 31.5 Hz–4 kHz.
THIRDS: tuple[float, ...] = (
    31.5, 40, 50, 63, 80, 100, 125, 160, 200, 250, 315, 400,
    500, 630, 800, 1000, 1250, 1600, 2000, 2500, 3150, 4000,
)
BASS_BANDS: tuple[float, ...] = (31.5, 40, 50, 63, 80, 100, 125)
WOOL_FRACTIONS: tuple[float, ...] = (0.0, 0.25, 0.5, 0.75, 1.0)

# Nominal gypsum density. 12.5 mm → 10 kg/m².
GKB_DENSITY = 800.0

# Fixed finishes. Absolute T20 moves if these are wrong; the wool rankings
# below are differences against the same finishes.
FLOOR_ALPHA = 0.05
PLASTER_ALPHA = 0.04
GLASS_ALPHA = 0.03
FURNITURE_ALPHA = 0.10

# Screening air attenuation, nepers/m, near 20 °C and 50 % RH.
def air_m(freq: float) -> float:
    return 5.5e-4 * (freq / 1000.0) ** 1.5


# 24 ln(10). T = K V / (c A) with A the Eyring absorption area.
_SABINE_K = 55.26

_BASS_TIE = 0.03
_AXIAL_SPLIT = 0.15


@dataclass(frozen=True)
class Resistivity:
    """Pa·s/m². Baseline values are typical fibrous products, not lab sheets."""

    mineral_wool: float = 12_000.0
    wood_fibre_board: float = 15_000.0
    wood_fibre_flex: float = 8_000.0
    stosilent: float = 100_000.0

    def scaled(self, factor: float) -> Resistivity:
        return Resistivity(
            mineral_wool=self.mineral_wool * factor,
            wood_fibre_board=self.wood_fibre_board * factor,
            wood_fibre_flex=self.wood_fibre_flex * factor,
            stosilent=self.stosilent * factor,
        )


@dataclass(frozen=True)
class Geometry:
    volume: float
    floor: float
    slope: float
    soffit: float
    glass: float
    plaster: float
    furniture: float
    kitchen_trap: float
    living_trap: float
    timber_fraction: float
    kitchen_cavity: float
    living_cavity: float
    kitchen_wool_fraction: float
    living_wool_fraction: float
    gkb_mass: float
    soffit_wool_depth: float
    soffit_air_depth: float
    soffit_board: float
    length: float
    width: float


def _models():
    repo = Path(__file__).resolve().parents[3]
    models = str(repo / "models")
    if models not in sys.path:
        sys.path.insert(0, models)
    from obyvak_geom import ObyvakLayout, ObyvakParams, build_layout

    return ObyvakParams, ObyvakLayout, build_layout


def _shoelace_m2(pts: list[tuple[float, float]]) -> float:
    area = 0.0
    for (x0, z0), (x1, z1) in zip(pts, pts[1:] + pts[:1]):
        area += x0 * z1 - x1 * z0
    return abs(area) * 0.5 / 1.0e6


def room_geometry(params=None) -> Geometry:
    """Areas and volume in metres, taken from the parametric layout."""
    ObyvakParams, _, build_layout = _models()
    p = params or ObyvakParams()
    g = build_layout(p)
    mm = 1.0 / 1000.0

    slope = (
        math.hypot(g.x_false, g.z_false - g.h_start)
        + math.hypot(g.x_furn - g.x_false, g.z_false - g.z_gkf_horiz)
    ) * p.room_length * mm * mm

    trap = _shoelace_m2(g.predstena_pts())
    section = (
        0.5 * (g.h_start + g.z_false) * g.x_false
        + 0.5 * (g.z_false + g.z_gkf_horiz) * (g.x_furn - g.x_false)
    )
    volume = section * p.room_length * mm**3
    volume -= trap * p.predstena_kitchen * mm
    volume -= trap * p.predstena_living * mm

    soffit_y = (g.y_furn1 - g.y_furn0) * mm
    soffit = (p.room_width - g.x_furn) * mm * soffit_y
    soffit += max(0.0, (g.h_start - g.z_nabeh_bot) * mm) * soffit_y

    glass = sum(width * min(p.window_h, g.h_start) for _, width in p.eave_windows) * mm * mm
    window_wall = g.h_start * p.room_length * mm * mm
    # Exposed gable below the traps, in front of the cabinet line.
    gable_hard = 2.0 * g.x_furn * p.predstena_bottom_z * mm * mm
    plaster = max(0.0, window_wall - glass) + gable_hard

    furniture = p.furniture_height * (g.y_furn1 - g.y_furn0) * mm * mm
    floor = g.x_furn * p.room_length * mm * mm

    kitchen_cavity = (p.predstena_kitchen - p.bass_k_gkb) * mm
    living_cavity = (p.predstena_living - p.bass_l_gkb) * mm
    return Geometry(
        volume=volume,
        floor=floor,
        slope=slope,
        soffit=soffit,
        glass=glass,
        plaster=plaster,
        furniture=furniture,
        kitchen_trap=trap,
        living_trap=trap,
        timber_fraction=0.0,
        kitchen_cavity=kitchen_cavity,
        living_cavity=living_cavity,
        kitchen_wool_fraction=p.bass_k_wool * mm / kitchen_cavity,
        living_wool_fraction=p.bass_l_wool * mm / living_cavity,
        gkb_mass=GKB_DENSITY * p.bass_k_gkb * mm,
        soffit_wool_depth=max(0.0, (g.z_soffit_rail() - (g.z_nabeh_bot + g.t_soffit_face)) * mm),
        soffit_air_depth=max(0.0, (g.z_soffit_lid - g.z_soffit_rail()) * mm),
        soffit_board=p.soffit_naturheld_t * mm,
        length=p.room_length * mm,
        width=p.room_width * mm,
    )


def axial_frequencies(geom: Geometry, c: float = C0) -> dict[str, float]:
    """Shoe-box axials. The pitch is ignored; these are marks, not a modal solution."""
    return {
        "Y1": c / (2.0 * geom.length),
        "Y2": 2.0 * c / (2.0 * geom.length),
        "Y3": 3.0 * c / (2.0 * geom.length),
        "X1": c / (2.0 * geom.width),
    }


def axial_marks(axials: dict[str, float]) -> list[tuple[float, str]]:
    """Collapse axials that sit on top of each other at the chart's resolution."""
    ordered = sorted(axials.items(), key=lambda item: item[1])
    groups: list[list[tuple[str, float]]] = []
    for name, freq in ordered:
        if groups and freq / groups[-1][-1][1] < 1.08:
            groups[-1].append((name, freq))
        else:
            groups.append([(name, freq)])
    marks = []
    for group in groups:
        freq = sum(value for _, value in group) / len(group)
        marks.append((freq, " ".join(name for name, _ in group)))
    return marks


def trap_stack(wool_m: float, air_m: float, mass: float, sigma: float) -> tuple[Layer, ...]:
    """Room → GKB → air → wool → rigid wall."""
    layers: list[Layer] = [("mass", mass, 0.0)]
    if air_m > 1e-6:
        layers.append(("air", air_m, 0.0))
    if wool_m > 1e-6:
        layers.append(("porous", wool_m, sigma))
    return tuple(layers)


def _split(cavity_m: float, wool_fraction: float) -> tuple[float, float]:
    wool = max(0.0, min(1.0, wool_fraction)) * cavity_m
    return wool, cavity_m - wool


def slope_stack(board_m: float, plaster_m: float, res: Resistivity) -> tuple[Layer, ...]:
    """StoSilent + NaturHeld 140 on the rigid GKF. No Flex, no timber fraction."""
    return (
        ("porous", plaster_m, res.stosilent),
        ("porous", board_m, res.wood_fibre_board),
    )


def soffit_stack(
    board_m: float,
    plaster_m: float,
    wool_m: float,
    air_m: float,
    res: Resistivity,
) -> tuple[Layer, ...]:
    """Soffit face, then mineral wool up to the duct void, then that air, then the lid."""
    layers: list[Layer] = [
        ("porous", plaster_m, res.stosilent),
        ("porous", board_m, res.wood_fibre_board),
    ]
    if wool_m > 1e-6:
        layers.append(("porous", wool_m, res.mineral_wool))
    if air_m > 1e-6:
        layers.append(("air", air_m, 0.0))
    return tuple(layers)


def _face_thicknesses(params) -> tuple[float, float]:
    mm = 1.0 / 1000.0
    return (params.finish_t + params.basic_t) * mm, params.naturheld_t * mm


def eyring_t(
    volume: float,
    area_alpha: list[tuple[float, float]],
    freq: float,
    c: float = C0,
) -> float:
    """Eyring decay time, with a small air-absorption term."""
    area = sum(s for s, _ in area_alpha)
    absorbed = sum(s * a for s, a in area_alpha) + 4.0 * air_m(freq) * volume
    if area <= 0.0 or volume <= 0.0:
        raise ValueError("room area and volume must be positive")
    # Keep the log argument inside (0, 1). Very dead rooms saturate here.
    alpha_bar = min(0.98, max(1e-6, absorbed / area))
    eyring_area = -area * math.log(1.0 - alpha_bar)
    return _SABINE_K * volume / (c * eyring_area)


def _band_alphas(
    geom: Geometry,
    res: Resistivity,
    plaster_m: float,
    board_m: float,
    kitchen_fraction: float,
    living_fraction: float,
) -> dict[float, dict[str, float]]:
    slopes = slope_stack(board_m, plaster_m, res)
    soffit = soffit_stack(
        geom.soffit_board, plaster_m, geom.soffit_wool_depth, geom.soffit_air_depth, res
    )
    k_wool, k_air = _split(geom.kitchen_cavity, kitchen_fraction)
    l_wool, l_air = _split(geom.living_cavity, living_fraction)
    kitchen = trap_stack(k_wool, k_air, geom.gkb_mass, res.mineral_wool)
    living = trap_stack(l_wool, l_air, geom.gkb_mass, res.mineral_wool)
    out: dict[float, dict[str, float]] = {}
    for freq in THIRDS:
        out[freq] = {
            "kitchen": field_absorption(kitchen, freq),
            "living": field_absorption(living, freq),
            "slope": field_absorption(slopes, freq),
            "soffit": field_absorption(soffit, freq),
        }
    return out


def room_times(geom: Geometry, bands: dict[float, dict[str, float]]) -> dict[float, float]:
    times: dict[float, float] = {}
    for freq, alpha in bands.items():
        parts = [
            (geom.floor, FLOOR_ALPHA),
            (geom.glass, GLASS_ALPHA),
            (geom.plaster, PLASTER_ALPHA),
            (geom.furniture, FURNITURE_ALPHA),
            (geom.kitchen_trap, alpha["kitchen"]),
            (geom.living_trap, alpha["living"]),
            (geom.slope, alpha["slope"]),
            (geom.soffit, alpha["soffit"]),
        ]
        times[freq] = eyring_t(geom.volume, parts, freq)
    return times


def _mean(values: list[float]) -> float:
    return sum(values) / len(values)


def _bass_mean(alphas: dict[float, float]) -> float:
    return _mean([alphas[f] for f in BASS_BANDS])


def _nearest_band(freq: float) -> float:
    return min(THIRDS, key=lambda band: abs(math.log(band / freq)))


def _audible(delta: float, reference: float) -> bool:
    """ISO 3382's decay-time JND is about 5 %."""
    return abs(delta) >= 0.05 * max(reference, 0.05)


_ROOM_BANDS = (31.5, 63.0, 125.0)


def _room_shifts(
    delta: dict[float, float],
    reference: dict[float, float],
    bands: tuple[float, ...] = _ROOM_BANDS,
) -> tuple[str, bool, bool]:
    """Text, True if any band shortens audibly, True if any band lengthens audibly."""
    parts = []
    improved = False
    harmed = False
    for freq in bands:
        change = delta[freq]
        base = reference[freq]
        note = ""
        if _audible(change, base):
            note = ", audible"
            if change < 0.0:
                improved = True
            else:
                harmed = True
        label = f"{freq:.0f}" if abs(freq - round(freq)) < 0.05 else f"{freq:g}"
        parts.append(f"{label} Hz {change:+.3f} s ({100.0 * change / base:+.1f}%{note})")
    return "; ".join(parts), improved, harmed


@dataclass(frozen=True)
class LatticeResult:
    """One lattice on both gables, including the wool grid and the room times."""

    name: str
    layout_text: str
    kitchen_peak_hz: float
    living_peak_hz: float
    kitchen_alpha: dict[float, dict[float, float]]
    living_alpha: dict[float, dict[float, float]]
    as_built_kitchen: float
    as_built_living: float
    best_kitchen: float
    best_living: float
    as_built_t: dict[float, float]
    best_t: dict[float, float]
    delta_as_built: dict[float, float]
    delta_best: dict[float, float]
    living_full_peak_hz: float = 0.0


@dataclass(frozen=True)
class RobustnessRow:
    """One sensitivity case. ``flipped`` means the mean-bass winner changed."""

    case: str
    winner: str
    flipped: bool
    wool: tuple[tuple[str, float, float], ...]
    mean_t: tuple[tuple[str, float], ...]
    note: str
    separated: bool


@dataclass(frozen=True)
class Study:
    geometry: Geometry
    resistivity: Resistivity
    axials: dict[str, float]
    as_built_alpha: dict[float, dict[str, float]]
    as_built_t: dict[float, float]
    centre_t: dict[float, float]
    kitchen_alpha: dict[str, dict[float, dict[float, float]]]
    living_alpha: dict[str, dict[float, dict[float, float]]]
    delta_t: dict[str, dict[float, float]]
    lattices: tuple[LatticeResult, ...]
    robustness: tuple[RobustnessRow, ...]
    winner: str
    audible_bands: tuple[float, ...]
    kitchen_limp_hz: float | None
    living_limp_hz: float | None
    report: str
    svg: str
    figures: dict[str, str]


def _mm(metres: float) -> str:
    millimetres = metres * 1000.0
    if abs(millimetres - round(millimetres)) < 0.05:
        return f"{millimetres:.0f} mm"
    return f"{millimetres:.1f} mm"


def constrained_split(
    cavity_m: float,
    wool_fraction: float,
    min_air_m: float = 0.0,
) -> tuple[float, float, float]:
    """``(fraction, wool_m, air_m)`` with the air gap held at least ``min_air_m``.

    The kitchen clearance is the front CD plus 20 mm, so a requested "full of
    wool" split comes back as the as-built wool and that minimum air.
    """
    if cavity_m <= 0.0:
        raise ValueError("cavity depth must be positive")
    fraction = min(1.0, max(0.0, wool_fraction))
    wool = fraction * cavity_m
    air = cavity_m - wool
    if air < min_air_m:
        air = min(min_air_m, cavity_m)
        wool = cavity_m - air
        fraction = wool / cavity_m
    return round(fraction, 5), wool, air


def _fraction_grid(
    cavity_m: float,
    as_built: float,
    min_air_m: float,
    override: tuple[float, ...] | None,
) -> tuple[float, ...]:
    raw = override if override is not None else (0.0, 0.25, 0.5, 0.75, 1.0, as_built)
    found: list[float] = []
    for fraction in raw:
        actual, _, _ = constrained_split(cavity_m, fraction, min_air_m)
        if not any(abs(actual - earlier) < 1e-4 for earlier in found):
            found.append(actual)
    return tuple(found)


def _stack_band_alpha(
    stack: tuple[Layer, ...],
    freq: float,
    n_angles: int = FIELD_ANGLES,
    n_in_band: int = BAND_SAMPLES,
) -> float:
    """Same third-octave average the plate uses, on a limp transfer-matrix stack."""
    if n_in_band <= 1:
        return field_absorption(stack, freq, n_angles=n_angles)
    lo = freq / 2.0 ** (1.0 / 6.0)
    hi = freq * 2.0 ** (1.0 / 6.0)
    acc = 0.0
    for i in range(n_in_band):
        sample = lo * (hi / lo) ** ((i + 0.5) / n_in_band)
        acc += field_absorption(stack, sample, n_angles=n_angles)
    return acc / n_in_band


def _room_at(
    geom: Geometry,
    slope_a: float,
    soffit_a: float,
    kitchen_a: float,
    living_a: float,
    freq: float,
) -> float:
    return eyring_t(
        geom.volume,
        [
            (geom.floor, FLOOR_ALPHA),
            (geom.glass, GLASS_ALPHA),
            (geom.plaster, PLASTER_ALPHA),
            (geom.furniture, FURNITURE_ALPHA),
            (geom.kitchen_trap, kitchen_a),
            (geom.living_trap, living_a),
            (geom.slope, slope_a),
            (geom.soffit, soffit_a),
        ],
        freq,
    )


def _slug(name: str) -> str:
    cleaned = "".join(ch.lower() if ch.isalnum() else "-" for ch in name)
    while "--" in cleaned:
        cleaned = cleaned.replace("--", "-")
    return cleaned.strip("-")


def _hz(freq: float) -> str:
    if abs(freq - round(freq)) < 0.05:
        return f"{freq:.0f}"
    return f"{freq:g}"


def _mean_t(times: dict[float, float], bands: tuple[float, ...] = _ROOM_BANDS) -> float:
    return sum(times[freq] for freq in bands) / len(bands)


def _systems(layout, plate: Plate):
    return tuple(solve_modes(bay, plate) for bay in layout.bays)


def _alpha_family(
    systems,
    plate: Plate,
    cavity_m: float,
    min_air_m: float,
    fractions: tuple[float, ...],
    sigma: float,
    freqs: tuple[float, ...],
    n_angles: int,
    n_in_band: int,
) -> dict[float, dict[float, float]]:
    family: dict[float, dict[float, float]] = {}
    for fraction in fractions:
        actual, wool, air = constrained_split(cavity_m, fraction, min_air_m)
        cavity = Cavity(air, wool, sigma)
        family[actual] = {
            freq: weighted_band_alpha(systems, freq, plate, cavity, n_angles, n_in_band)
            for freq in freqs
        }
    return family


def _select_pair(
    kitchen: dict[float, dict[float, float]],
    living: dict[float, dict[float, float]],
    geom: Geometry,
    shared: dict[float, dict[str, float]],
    bands: tuple[float, ...],
) -> tuple[float, float]:
    """Wool fractions with the lowest mean decay on ``bands``. Earlier grid rows win a tie."""
    best_k = next(iter(kitchen))
    best_l = next(iter(living))
    best_mean = float("inf")
    for k_frac, k_curve in kitchen.items():
        for l_frac, l_curve in living.items():
            total = 0.0
            for freq in bands:
                total += _room_at(
                    geom,
                    shared[freq]["slope"],
                    shared[freq]["soffit"],
                    k_curve[freq],
                    l_curve[freq],
                    freq,
                )
            mean = total / len(bands)
            if mean < best_mean - 1e-9:
                best_mean = mean
                best_k, best_l = k_frac, l_frac
    return best_k, best_l


def _times_for(
    k_curve: dict[float, float],
    l_curve: dict[float, float],
    geom: Geometry,
    shared: dict[float, dict[str, float]],
    freqs: tuple[float, ...],
) -> dict[float, float]:
    return {
        freq: _room_at(
            geom,
            shared[freq]["slope"],
            shared[freq]["soffit"],
            k_curve[freq],
            l_curve[freq],
            freq,
        )
        for freq in freqs
    }


def _split_text(cavity_m: float, fraction: float) -> str:
    return f"{_mm(fraction * cavity_m)} wool, {_mm((1.0 - fraction) * cavity_m)} air"


def _humps(curve: dict[float, float]) -> str:
    bands = [freq for freq in THIRDS if freq <= 250.0]
    found: list[str] = []
    for i, freq in enumerate(bands):
        alpha = curve[freq]
        left = curve[bands[i - 1]] if i else -1.0
        right = curve[bands[i + 1]] if i + 1 < len(bands) else -1.0
        if alpha >= left and alpha >= right and alpha >= 0.12:
            found.append(f"{_hz(freq)} Hz ({alpha:.2f})")
    if not found:
        return "no third-octave hump above 0.12"
    return "third-octave high points " + ", ".join(found)


def _band_table(
    runs: tuple[LatticeResult, ...] | list[LatticeResult],
    attr: str,
) -> tuple[list[str], tuple[float, ...]]:
    """Per-band comparison against the lattice with the lower decay in that band."""
    if len(runs) < 2:
        return ["One lattice was run, so there is no second layout to compare."], ()
    audible: list[float] = []
    lines: list[str] = []
    for freq in _ROOM_BANDS:
        ordered = sorted(runs, key=lambda run: getattr(run, attr)[freq])
        low, high = ordered[0], ordered[-1]
        t_low = getattr(low, attr)[freq]
        t_high = getattr(high, attr)[freq]
        gap = t_high - t_low
        ref = max(t_low, t_high, 0.05)
        flag = "past 5%" if gap >= 0.05 * ref else "inside 5%"
        if gap >= 0.05 * ref:
            audible.append(freq)
        bits = ", ".join(f"{run.name} {getattr(run, attr)[freq]:.2f} s" for run in runs)
        lines.append(
            f"{_hz(freq)} Hz: {bits}. {low.name} is lower by {gap:.3f} s "
            f"({100.0 * gap / ref:.1f}%, {flag})."
        )
    return lines, tuple(audible)


def _mean_winner(runs: list[LatticeResult] | tuple[LatticeResult, ...], attr: str = "best_t") -> str:
    winner = runs[0]
    best = _mean_t(getattr(winner, attr))
    for run in runs[1:]:
        value = _mean_t(getattr(run, attr))
        if value < best - 1e-9:
            winner = run
            best = value
    return winner.name


def _wool_note(baseline: tuple[LatticeResult, ...], wool: tuple[tuple[str, float, float], ...]) -> str:
    moves: list[str] = []
    by_name = {run.name: run for run in baseline}
    for name, k_frac, l_frac in wool:
        run = by_name.get(name)
        if run is None:
            continue
        if abs(k_frac - run.best_kitchen) > 0.08:
            moves.append(f"{name} kitchen wool fraction {run.best_kitchen:.2f} → {k_frac:.2f}")
        if abs(l_frac - run.best_living) > 0.08:
            moves.append(f"{name} living wool fraction {run.best_living:.2f} → {l_frac:.2f}")
    if not moves:
        return "Best wool split stays on the same grid step."
    return "Best wool moves: " + "; ".join(moves) + "."


def _sensitivity_cases(plate: Plate, sigma: float) -> tuple[tuple[str, Plate, float], ...]:
    return (
        ("half plate stiffness", plate.with_changes(e_pa=plate.e_pa * 0.5), sigma),
        ("double plate stiffness", plate.with_changes(e_pa=plate.e_pa * 2.0), sigma),
        ("low loss factor", plate.with_changes(eta=0.006), sigma),
        ("high loss factor", plate.with_changes(eta=0.03), sigma),
        ("half wool resistivity", plate, sigma * 0.5),
        ("double wool resistivity", plate, sigma * 2.0),
        ("independent bays", plate.with_changes(edge="simple"), sigma),
        ("elastic CD flange", plate.with_changes(edge="elastic", k_rot=FLANGE_K_ROT), sigma),
        ("light board", plate.with_changes(density=640.0), sigma),
        ("heavy board", plate.with_changes(density=960.0), sigma),
    )


def _robustness(
    layouts,
    baseline: tuple[LatticeResult, ...],
    plate: Plate,
    sigma: float,
    geom: Geometry,
    shared: dict[float, dict[str, float]],
    k_fracs: tuple[float, ...],
    l_fracs: tuple[float, ...],
    k_min_air: float,
    l_min_air: float,
) -> tuple[RobustnessRow, ...]:
    """Bass bands only. The published curves already cover the baseline plate."""
    if len(baseline) < 2:
        return ()
    base_name = _mean_winner(baseline, "best_t")
    rows: list[RobustnessRow] = []
    for label, case_plate, case_sigma in _sensitivity_cases(plate, sigma):
        partial: list[LatticeResult] = []
        wool_rows: list[tuple[str, float, float]] = []
        means: list[tuple[str, float]] = []
        for layout, run in zip(layouts, baseline):
            systems = _systems(layout, case_plate)
            kitchen = _alpha_family(
                systems, case_plate, geom.kitchen_cavity, k_min_air,
                k_fracs, case_sigma, _ROOM_BANDS, FIELD_ANGLES, BAND_SAMPLES,
            )
            living = _alpha_family(
                systems, case_plate, geom.living_cavity, l_min_air,
                l_fracs, case_sigma, _ROOM_BANDS, FIELD_ANGLES, BAND_SAMPLES,
            )
            best_k, best_l = _select_pair(kitchen, living, geom, shared, _ROOM_BANDS)
            times = _times_for(kitchen[best_k], living[best_l], geom, shared, _ROOM_BANDS)
            wool_rows.append((run.name, best_k, best_l))
            means.append((run.name, _mean_t(times)))
            partial.append(
                LatticeResult(
                    name=run.name,
                    layout_text=run.layout_text,
                    kitchen_peak_hz=0.0,
                    living_peak_hz=0.0,
                    kitchen_alpha=kitchen,
                    living_alpha=living,
                    as_built_kitchen=run.as_built_kitchen,
                    as_built_living=run.as_built_living,
                    best_kitchen=best_k,
                    best_living=best_l,
                    as_built_t=times,
                    best_t=times,
                    delta_as_built={},
                    delta_best={},
                )
            )
        winner = _mean_winner(partial, "best_t")
        flipped = winner != base_name
        gap_note = _wool_note(baseline, tuple(wool_rows))
        values = [value for _, value in means]
        spread = max(values) - min(values) if values else 0.0
        ref = max(values) if values else 0.05
        separated = spread >= 0.05 * max(ref, 0.05)
        if separated:
            gap_note += " Mean decay of the lattices is past 5%."
        else:
            gap_note += " Mean decay of the lattices is inside 5%."
        rows.append(
            RobustnessRow(
                label, winner, flipped, tuple(wool_rows), tuple(means), gap_note, separated
            )
        )
    return tuple(rows)


def _slope_paragraph(params, as_built_t: dict[float, float]) -> str:
    return (
        f"Slopes: NaturHeld 140, {params.naturheld_t:.0f} mm, with StoSilent "
        f"{params.finish_t:.0f}+{params.basic_t:.0f} mm, screwed through the GKF into the CD. "
        "No slope latě and no NaturHeld Flex. "
        f"Soffit side and bottom are NaturHeld 140, {params.soffit_naturheld_t:.0f} mm; "
        "the cavity behind that face is mineral wool, stopped short of the ducts. "
        f"Loose-sheet room decay at the band centre: 125 Hz {as_built_t[125.0]:.2f} s, "
        f"500 Hz {as_built_t[500.0]:.2f} s."
    )


def _volumes(geom: Geometry, wool_k: float, wool_l: float) -> str:
    wool = geom.kitchen_trap * wool_k + geom.living_trap * wool_l
    soffit_wool = geom.soffit * geom.soffit_wool_depth
    return (
        f"Material at this split: gable wool {wool:.2f} m³, "
        f"soffit mineral wool about {soffit_wool:.2f} m³ "
        "(the horizontal cavity depth applied across the soffit face). "
        "The slopes are a wood-fibre board, not a Flex quilt."
    )


_LEAVES_OUT = (
    "What this model still leaves out. The shapes are a short series for each field, "
    "not a finite-element mesh, so a cut triangle's note can sit a little high. The "
    "studs are continuous lines, not individual screws. The open cabinet lets air pass "
    "the studs, but the CD is not resolved as a duct and the 20 mm kitchen gap is not "
    "resolved as a slot. The wool uses Miki's formulas and a catalogue flow resistivity. "
    "The plasterboard modulus is a published range (Hopkins, Sound Insulation, 2007; "
    "Craik, Sound Transmission through Buildings using Statistical Energy Analysis, 1996), "
    "not a Rigips datasheet; paint only enters as a higher loss factor. The room decay "
    "is Eyring with fixed absorption for the floor, glass, plaster, and cabinets. The "
    "axial marks are shoe-box lengths. The slopes and the soffit stay on the "
    "one-dimensional stack. Hangers, Sylomer washers, and the rear CD are not part of "
    "the leaf. The 2–5 mm bead sits outside the perimeter screw line and is not a spring. Doors, "
    "flanking, and furniture scattering are absent. The third-octave numbers are "
    "averages across each band."
)


def _plain_answer(
    runs: tuple[LatticeResult, ...],
    audible: tuple[float, ...],
    winner: str,
    geom: Geometry,
) -> str:
    """The part of the report a builder can act on, written from the numbers."""
    if len(runs) < 2:
        return "One lattice was run, so this note does not rank two layouts."
    peaks = "; ".join(
        f"{run.name} near {run.kitchen_peak_hz:.0f} Hz on the kitchen gable "
        f"and {run.living_peak_hz:.0f} Hz on the living gable"
        for run in runs
    )
    parts = [
        "In short. " + peaks + ". A smaller field sits higher. That is the stud spacing doing its job."
    ]
    if audible:
        band_bits = []
        for freq in _ROOM_BANDS:
            ordered = sorted(runs, key=lambda run: run.best_t[freq])
            low, high = ordered[0], ordered[-1]
            gap = high.best_t[freq] - low.best_t[freq]
            ref = max(low.best_t[freq], high.best_t[freq], 0.05)
            if gap >= 0.05 * ref:
                band_bits.append(f"at {_hz(freq)} Hz, {low.name} is the lower decay")
        parts.append(
            "Past 5%: " + "; ".join(band_bits) + ". "
            f"The average of the three bands picks {winner}. "
            "That average is a summary. A band you care about can point the other way."
        )
    else:
        parts.append(
            "The two lattices stay inside 5% at 31.5, 63 and 125 Hz, so this model "
            "cannot choose between them."
        )
    same = all(
        abs(run.best_kitchen - runs[0].best_kitchen) < 0.02
        and abs(run.best_living - runs[0].best_living) < 0.02
        for run in runs
    )
    if same:
        parts.append(
            "Best wool is the same for both lattices: kitchen "
            f"{_split_text(geom.kitchen_cavity, runs[0].best_kitchen)}, living "
            f"{_split_text(geom.living_cavity, runs[0].best_living)}."
        )
    else:
        for run in runs:
            parts.append(
                f"Best wool for {run.name}: kitchen {_split_text(geom.kitchen_cavity, run.best_kitchen)}, "
                f"living {_split_text(geom.living_cavity, run.best_living)}."
            )
    return " ".join(parts)


# Previous published run: free perimeter, 90 mm inset, 170 mm closer, same wool
# (kitchen 130.5 mm / 47 mm air, living cavity full). Peaks in that run were at the
# as-built wool, so the living peak was at 300 mm rather than a full cavity.
_PREVIOUS_FIXED = {
    ("625 vertical", "625 vertical"): {
        "t": {31.5: 1.93, 63.0: 0.94, 125.0: 0.70},
        "kitchen_peak": 57.0,
        "living_peak": 59.0,
    },
    ("1000 horizontal", "1000 horizontal"): {
        "t": {31.5: 1.46, 63.0: 1.10, 125.0: 0.66},
        "kitchen_peak": 22.0,
        "living_peak": 24.0,
    },
}


def _fixed_wool_table(
    runs: tuple[LatticeResult, ...],
    geom: Geometry,
    shared: dict[float, dict[str, float]],
    kitchen_key: float,
    living_key: float,
) -> str:
    """Room decay at the fixed wool, including the two mixed gable pairings."""
    by_name = {run.name: run for run in runs}
    needed = ("625 vertical", "1000 horizontal")
    if any(name not in by_name for name in needed):
        return ""
    pairings = (
        ("C", "625 vertical", "625 vertical"),
        ("C", "1000 horizontal", "1000 horizontal"),
        ("A", "625 vertical", "1000 horizontal"),
        ("B", "1000 horizontal", "625 vertical"),
    )
    lines = [
        (
            "Fixed wool on every row: kitchen "
            f"{_split_text(geom.kitchen_cavity, kitchen_key)}, living "
            f"{_split_text(geom.living_cavity, living_key)}. "
            "Sides, the rake, and the bottom line are simply supported. "
            "Studs sit on both edges and the bays between them are equal. "
            "1000 horizontal is at the top of normal finished-wall spacing. "
            "The even split is the nearest equal bay, which lands past 1000 mm. "
            "Hairline cracks at the joints are a risk."
        ),
        (
            f"{'code':<6}{'kitchen / living':<42}{'31.5 s':>8}{'63 s':>8}{'125 s':>8}"
            f"{'kit peak':>12}{'liv peak':>12}"
        ),
    ]
    for code, kitchen_name, living_name in pairings:
        kitchen = by_name[kitchen_name]
        living = by_name[living_name]
        times = _times_for(
            kitchen.kitchen_alpha[kitchen_key],
            living.living_alpha[living_key],
            geom,
            shared,
            _ROOM_BANDS,
        )
        label = f"{kitchen_name} / {living_name}"
        lines.append(
            f"{code:<6}{label:<42}"
            f"{times[31.5]:8.2f}{times[63.0]:8.2f}{times[125.0]:8.2f}"
            f"{kitchen.kitchen_peak_hz:10.0f} Hz{living.living_full_peak_hz:10.0f} Hz"
        )
        previous = _PREVIOUS_FIXED.get((kitchen_name, living_name))
        if previous is None:
            lines.append(f"{'':6}no previous run")
            continue
        lines.append(
            f"{'':6}{'change from the previous run':<42}"
            f"{times[31.5] - previous['t'][31.5]:+8.2f}"
            f"{times[63.0] - previous['t'][63.0]:+8.2f}"
            f"{times[125.0] - previous['t'][125.0]:+8.2f}"
            f"{kitchen.kitchen_peak_hz - previous['kitchen_peak']:+10.0f} Hz"
            f"{living.living_full_peak_hz - previous['living_peak']:+10.0f} Hz"
        )
    lines.append(
        "The previous run had free edges, a 90 mm inset, and a 170 mm closer. "
        "Its room times above are at this same wool. Its living peaks were at "
        "300 mm of wool, so the living-peak change mixes the full fill with the new edges."
    )
    return "\n".join(lines)


def _wool_path_text(
    runs: tuple[LatticeResult, ...],
    air_alpha: dict[str, float],
    kitchen_key: float,
    living_key: float,
    sigma: float,
) -> str:
    """Whether the 31.5 Hz advantage of the wide field survives a full wool fill."""
    by_name = {run.name: run for run in runs}
    if "625 vertical" not in by_name or "1000 horizontal" not in by_name:
        return ""
    narrow = by_name["625 vertical"]
    wide = by_name["1000 horizontal"]
    wool_narrow = narrow.living_alpha[living_key][31.5]
    wool_wide = wide.living_alpha[living_key][31.5]
    air_narrow = air_alpha.get("625 vertical", 0.0)
    air_wide = air_alpha.get("1000 horizontal", 0.0)
    kit_narrow = narrow.kitchen_alpha[kitchen_key][31.5]
    kit_wide = wide.kitchen_alpha[kitchen_key][31.5]
    if wool_wide > wool_narrow:
        living = (
            f"On the living gable, with the cavity full of wool, 1000 horizontal "
            f"still absorbs more at 31.5 Hz ({wool_wide:.2f}) than 625 vertical "
            f"({wool_narrow:.2f}). The 31.5 Hz benefit survives the full fill. "
            f"The sideways path is through the wool ({sigma:.0f} Pa·s/m²), not through an open air gap."
        )
    else:
        living = (
            f"On the living gable, with the cavity full of wool, 1000 horizontal "
            f"absorbs {wool_wide:.2f} at 31.5 Hz and 625 vertical absorbs {wool_narrow:.2f}. "
            f"The sideways path is through the wool ({sigma:.0f} Pa·s/m²). "
            f"The 31.5 Hz benefit of the wider field does not survive once that path is wool."
        )
    return (
        f"{living} The same shapes on an open air cavity of that depth, which is not the build, "
        f"would absorb {air_wide:.2f} (1000 horizontal) and {air_narrow:.2f} (625 vertical). "
        f"The kitchen still has 47 mm of air behind the leaf, so that gable can still move air "
        f"sideways through the clearance. Its 31.5 Hz absorption is {kit_wide:.2f} on "
        f"1000 horizontal and {kit_narrow:.2f} on 625 vertical."
    )


def build_report(bits: dict) -> str:
    geom: Geometry = bits["geometry"]
    res: Resistivity = bits["resistivity"]
    axials: dict[str, float] = bits["axials"]
    runs: tuple[LatticeResult, ...] = bits["lattices"]
    rows: tuple[RobustnessRow, ...] = bits["robustness"]
    lines = []
    if bits.get("fixed_table"):
        lines.append(bits["fixed_table"])
    if bits.get("wool_path_text"):
        lines.append(bits["wool_path_text"])
    lines.extend([
        (
            "The gable boards are one 12.5 mm plasterboard, taped and skimmed, screwed "
            "to CD studs. The old estimate treated each board as a loose sheet in front "
            "of the wool. This one lets the board bend between the studs. A smaller field "
            "is stiffer, so its note sits higher. The air behind an open stud can slide "
            "sideways, so a field pinned on the CDs does not keep the full air spring of "
            "a loose sheet. A wide field can therefore sit below the loose-sheet note, "
            "and a close field can sit above it."
        ),
        (
            f"Room volume {geom.volume:.0f} m³. Areas: slopes {geom.slope:.1f} m², "
            f"soffit {geom.soffit:.1f} m², each gable trap {geom.kitchen_trap:.1f} m², "
            f"glass {geom.glass:.1f} m², plaster {geom.plaster:.1f} m², "
            f"floor {geom.floor:.1f} m², cabinet front {geom.furniture:.1f} m². "
            "Both gables use the same outline. The kitchen předstěna is 190 mm deep "
            "and the living one is 450 mm deep."
        ),
        (
            f"Board: E = 2.5 GPa, Poisson 0.25, loss factor 0.015, "
            f"{geom.gkb_mass:.1f} kg/m². Poisson between 0.20 and 0.30 moves the "
            "stiffness only a few percent, so it is not its own case. "
            f"Mineral wool {res.mineral_wool:.0f} Pa·s/m², NaturHeld 140 "
            f"{res.wood_fibre_board:.0f}, Flex {res.wood_fibre_flex:.0f}, "
            f"StoSilent facing {res.stosilent:.0f}. Floor, glass, plaster, and cabinets "
            f"use fixed absorption {FLOOR_ALPHA:.2f}, {GLASS_ALPHA:.2f}, "
            f"{PLASTER_ALPHA:.2f}, {FURNITURE_ALPHA:.2f}. Absolute decay times move "
            "with those four numbers; the differences do not."
        ),
        (
            "Length axials "
            + ", ".join(f"{name} {freq:.1f} Hz" for name, freq in axials.items())
            + ". These use the full plan dimensions and are marks on the curves, not a wave solution."
        ),
    ])
    lines.extend(run.layout_text for run in runs)
    k_zero = bits["kitchen_limp_hz"]
    l_zero = bits["living_limp_hz"]
    k_zero_s = f"{k_zero:.0f} Hz" if k_zero is not None else "no zero below 250 Hz"
    l_zero_s = f"{l_zero:.0f} Hz" if l_zero is not None else "no zero below 250 Hz"
    lines.append(
        f"Loose sheet, bending stiffness removed: kitchen reactance zero {k_zero_s} "
        f"(closed form if the wool were transparent air, {bits['kitchen_transparent']:.0f} Hz); "
        f"living reactance zero {l_zero_s} "
        f"(transparent-air closed form {bits['living_transparent']:.0f} Hz). "
        "A very large bay with the stiffness removed falls back on these notes. "
        "That is the check that the plate model still contains the old limp sheet."
    )
    lines.append(
        "Kitchen gable, 190 mm. As built: "
        f"{_split_text(geom.kitchen_cavity, runs[0].as_built_kitchen)}. "
        "The air gap stays at least 47 mm, the 27 mm front CD plus 20 mm clear of "
        "the board, so the wool cannot go past this as-built thickness."
    )
    lines.append(
        "Living gable, 450 mm. As built: "
        f"{_split_text(geom.living_cavity, runs[0].as_built_living)}. "
        "This cavity can be empty or full; the 20 mm clearance does not bind here."
    )
    for run in runs:
        k_curve = run.kitchen_alpha[run.as_built_kitchen]
        l_curve = run.living_alpha[run.as_built_living]
        lines.append(
            f"{run.name}. Kitchen first peak about {run.kitchen_peak_hz:.0f} Hz, "
            f"{_humps(k_curve)}. "
            f"Kitchen band absorption at the as-built wool: "
            + ", ".join(f"{_hz(freq)} Hz {k_curve[freq]:.2f}" for freq in _ROOM_BANDS)
            + f". Living first peak about {run.living_peak_hz:.0f} Hz, {_humps(l_curve)}. "
            "Living band absorption at the as-built wool: "
            + ", ".join(f"{_hz(freq)} Hz {l_curve[freq]:.2f}" for freq in _ROOM_BANDS)
            + "."
        )
        lines.append(
            f"{run.name} wool on the grid: kitchen {_split_text(geom.kitchen_cavity, run.best_kitchen)}, "
            f"living {_split_text(geom.living_cavity, run.best_living)}. "
            "That pair has the lowest average room decay at 31.5, 63 and 125 Hz."
        )
        same_wool = (
            abs(run.best_kitchen - run.as_built_kitchen) <= 0.02
            and abs(run.best_living - run.as_built_living) <= 0.02
        )
        wool_delta = {freq: run.best_t[freq] - run.as_built_t[freq] for freq in THIRDS}
        wool_txt, wool_shorter, wool_longer = _room_shifts(wool_delta, run.as_built_t)
        if same_wool:
            lines.append(f"For {run.name} that pair is the as-built wool.")
        elif wool_shorter or wool_longer:
            lines.append(
                f"Moving {run.name} off the as-built wool changes the room by {wool_txt}."
            )
        else:
            lines.append(
                f"Moving {run.name} off the as-built wool stays inside 5% at 31.5, 63 and 125 Hz "
                f"({wool_txt}). The thickness is not worth changing for the decay time."
            )
        if geom.kitchen_cavity * (1.0 - run.best_kitchen) <= bits["kitchen_min_air"] + 1e-4:
            lines.append(
                f"{run.name}: the kitchen wool in that pair sits on the 20 mm clearance, "
                "which is as much wool as this gable can take."
            )
        loose_txt, _, _ = _room_shifts(run.delta_as_built, bits["as_built_t"])
        lines.append(f"{run.name} at the as-built wool, against the loose sheet: {loose_txt}.")
        if not same_wool:
            best_txt, _, _ = _room_shifts(run.delta_best, bits["as_built_t"])
            lines.append(f"{run.name} at its best wool, against the loose sheet: {best_txt}.")

    centre: dict[float, float] = bits["centre_t"]
    lines.append(
        "The loose-sheet room decay at the band centre (the old single-frequency average) is "
        + ", ".join(f"{_hz(freq)} Hz {centre[freq]:.2f} s" for freq in _ROOM_BANDS)
        + ". Comparisons above use a third-octave average on both the loose sheet and the "
        "studded board, with the same 16 angles, so a narrow peak is not a single-bin spike. "
        "The loose sheet is the previous calculation of this same wall, not a way to build "
        "the předstěna without studs. Where a lattice is slower than that loose sheet, "
        "the old number was optimistic in that band."
    )
    best_lines, audible = _band_table(runs, "best_t")
    as_lines, as_audible = _band_table(runs, "as_built_t")
    lines.append("Lattices at their best wool, room decay:")
    lines.extend(best_lines)
    lines.append("The same comparison with the wool left at the as-built thickness:")
    lines.extend(as_lines)
    if len(runs) >= 2 and audible:
        lines.append(
            "The lattice difference clears 5% in "
            + ", ".join(f"{_hz(freq)} Hz" for freq in audible)
            + ". Where the bands point at different lattices, each note wants a different "
            "field size; the average across 31.5, 63 and 125 Hz is only a summary. "
            f"That average picks {bits['winner']}. "
            "A bass FEM is not required to see this gap. It is the tool for a spacing "
            "or a cut field this model only sketches."
        )
    elif len(runs) >= 2:
        lines.append(
            "The two lattices stay inside 5% at 31.5, 63 and 125 Hz"
            + (
                ", and the same is true with the as-built wool."
                if not as_audible
                else ". With the as-built wool the picture is different; see the lines above."
            )
            + " This model cannot choose between them. A measurement, or a bass FEM, "
            "is the next step before preferring one lattice."
        )
    lines.append(_plain_answer(runs, audible, bits["winner"], geom))
    lines.append(
        "Half and double the wood-fibre resistivity move the slopes and the soffit. "
        "Those surfaces are the same for every lattice, so they do not change which "
        "lattice wins or which wool split is best. Mineral-wool resistivity is in the "
        "cases below, together with the plate."
    )
    if rows:
        lines.append(
            f"Sensitivity, judged by the average decay at 31.5, 63 and 125 Hz. "
            f"Baseline winner: {bits['winner']}."
        )
        for row in rows:
            if row.flipped:
                tag = "flips the winner"
            else:
                tag = "same winner"
            caveat = ""
            if row.flipped and not row.separated:
                caveat = " The two averages stay inside 5%, so this change of name is not a result to build on."
            wool_bits = ", ".join(
                f"{name} kitchen {_mm(k * geom.kitchen_cavity)}, "
                f"living {_mm(lv * geom.living_cavity)}"
                for name, k, lv in row.wool
            )
            mean_bits = ", ".join(f"{name} {value:.3f} s" for name, value in row.mean_t)
            lines.append(
                f"{row.case}: {row.winner} ({tag}).{caveat} Mean decay {mean_bits}. "
                f"Best wool {wool_bits}. {row.note}"
            )
        clear = [row.case for row in rows if row.flipped and row.separated]
        soft = [row.case for row in rows if row.flipped and not row.separated]
        if clear:
            lines.append(
                "Cases that flip the winner by more than 5% on the average: "
                + "; ".join(clear)
                + "."
            )
        if soft:
            lines.append(
                "These cases change which lattice has the lower average, and the two "
                "averages stay inside 5%, so the new name is not a result to build on: "
                + "; ".join(soft)
                + ". A measurement would be the way to settle that edge detail."
            )
        if not clear and not soft:
            lines.append("No sensitivity case flips the winner.")
        if any(row.case == "half plate stiffness" and not row.separated for row in rows):
            lines.append(
                "At half plate stiffness the average gap between the lattices falls "
                f"inside 5%, and {bits['winner']} is still the lower average. A softer "
                "board makes the two lattices hard to separate on that average."
            )
    else:
        lines.append("Sensitivity cases were not run.")
    lines.append(bits["slope_text"])
    lines.append(bits["volume_text"])
    lines.append(_LEAVES_OUT)
    lines.append(
        "These two lattices, and the wool grid under each of them, are the runs in "
        "this report. Another spacing is the same model with a different LatticeSpec. "
        "From the repo, with the virtualenv active:\n"
        "python -c \"\n"
        "from blueprints.acoustics.lattice import LatticeSpec\n"
        "from blueprints.acoustics.obyvak import run_study, write_outputs\n"
        "spec = LatticeSpec(\n"
        "    name='my layout',\n"
        "    orientation='vertical',\n"
        "    cd_x_mm=(300, 900, 1500, 2200, 2900, 3600, 4300, 5000),\n"
        "    rail_above_bottom_mm=(1250, 2500),\n"
        ")\n"
        "write_outputs(run_study(lattices=(spec,), wool_fractions=(0.5,)))\n"
        "\"\n"
        "cd_spacing_mm and rail_spacing_mm work in place of the lists. wool_fractions "
        "replaces the grid on both gables; the kitchen still keeps its 47 mm of air. "
        "Leave wool_fractions out to sweep 0, 25, 50, 75 and 100 percent plus the as-built split."
    )
    return "\n\n".join(lines) + "\n"


def _svg_escape(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def _series_path(freqs: list[float], values: list[float], x_of, y_of) -> str:
    parts = []
    for i, (freq, value) in enumerate(zip(freqs, values)):
        cmd = "M" if i == 0 else "L"
        parts.append(f"{cmd}{x_of(freq):.1f},{y_of(value):.1f}")
    return " ".join(parts)


_CHART_COLORS = ("#1f4e79", "#a33b32", "#2e7d4f", "#b36b00", "#5c4b8a")


def _draw_chart(parts: list[str], box, title, ymin, ymax, series, vlines, y_ticks) -> None:
    ox, oy, w, h = box
    fmin, fmax = 12.0, 5000.0
    parts.append(f'<text x="{ox}" y="{oy - 14}" font-size="15" font-weight="600">{_svg_escape(title)}</text>')
    parts.append(f'<rect x="{ox}" y="{oy}" width="{w}" height="{h}" fill="#fff" stroke="#ddd"/>')

    def x_of(freq: float) -> float:
        return ox + w * (math.log(freq) - math.log(fmin)) / (math.log(fmax) - math.log(fmin))

    span = ymax - ymin if ymax > ymin else 1.0

    def y_of(value: float) -> float:
        return oy + h * (1.0 - (value - ymin) / span)

    for tick in (31.5, 63, 125, 250, 500, 1000, 2000, 4000):
        x = x_of(tick)
        parts.append(f'<line x1="{x:.1f}" y1="{oy}" x2="{x:.1f}" y2="{oy + h}" stroke="#eee"/>')
        label = f"{tick:.0f}" if tick >= 100 else f"{tick:g}"
        parts.append(f'<text x="{x:.1f}" y="{oy + h + 16}" font-size="10" text-anchor="middle">{label}</text>')
    for value in y_ticks:
        if not ymin - 1e-9 <= value <= ymax + 1e-9:
            continue
        y = y_of(value)
        stroke = "#bbb" if abs(value) < 1e-9 and ymin < 0 else "#eee"
        parts.append(f'<line x1="{ox}" y1="{y:.1f}" x2="{ox + w}" y2="{y:.1f}" stroke="{stroke}"/>')
        parts.append(f'<text x="{ox - 8}" y="{y + 3:.1f}" font-size="10" text-anchor="end">{value:g}</text>')
    for i, (freq, label) in enumerate(vlines):
        if not fmin <= freq <= fmax:
            continue
        x = x_of(freq)
        parts.append(
            f'<line x1="{x:.1f}" y1="{oy}" x2="{x:.1f}" y2="{oy + h}" stroke="#c4b8a5" stroke-dasharray="3 3"/>'
        )
        parts.append(
            f'<text x="{x + 3:.1f}" y="{oy + 14 + (i % 3) * 13:.1f}" font-size="10" fill="#7a6a52">{label}</text>'
        )
    legend_x = ox + w + 16
    legend_y = oy + 16
    for name, freqs, values, color, stroke, dash in series:
        path = _series_path(freqs, values, x_of, y_of)
        dash_attr = f' stroke-dasharray="{dash}"' if dash else ""
        parts.append(f'<path d="{path}" fill="none" stroke="{color}" stroke-width="{stroke}"{dash_attr}/>')
        parts.append(
            f'<line x1="{legend_x}" y1="{legend_y - 4}" x2="{legend_x + 18}" y2="{legend_y - 4}" '
            f'stroke="{color}" stroke-width="{stroke}"{dash_attr}/>'
        )
        parts.append(
            f'<text x="{legend_x + 24}" y="{legend_y}" font-size="12" fill="{color}">{_svg_escape(name)}</text>'
        )
        legend_y += 20


def _svg_wrap(width: float, height: float, body: list[str]) -> str:
    head = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width:.0f}" height="{height:.0f}" '
        f'viewBox="0 0 {width:.0f} {height:.0f}">',
        '<rect width="100%" height="100%" fill="#f7f5f1"/>',
        "<style>text{font-family:system-ui,sans-serif;fill:#222}</style>",
    ]
    return "\n".join(head + body + ["</svg>"])


def _absorption_series(runs: tuple[LatticeResult, ...], gable: str, limp: dict[float, float], freqs: list[float]):
    series = [("loose sheet", freqs, [limp[f] for f in freqs], "#666666", 1.8, "6 4")]
    for i, run in enumerate(runs):
        color = _CHART_COLORS[i % len(_CHART_COLORS)]
        family = run.kitchen_alpha if gable == "kitchen" else run.living_alpha
        as_frac = run.as_built_kitchen if gable == "kitchen" else run.as_built_living
        best = run.best_kitchen if gable == "kitchen" else run.best_living
        series.append(
            (
                f"{run.name}, as-built wool",
                freqs,
                [family[as_frac][f] for f in freqs],
                color,
                2.3,
                None,
            )
        )
        if abs(best - as_frac) > 0.02:
            series.append(
                (
                    f"{run.name}, best wool",
                    freqs,
                    [family[best][f] for f in freqs],
                    color,
                    1.6,
                    "2 3",
                )
            )
    return series


def _delta_series(runs: tuple[LatticeResult, ...], freqs: list[float]):
    series = []
    for i, run in enumerate(runs):
        color = _CHART_COLORS[i % len(_CHART_COLORS)]
        series.append(
            (
                f"{run.name}, as-built wool",
                freqs,
                [run.delta_as_built[f] for f in freqs],
                color,
                2.3,
                None,
            )
        )
        moved = abs(run.best_kitchen - run.as_built_kitchen) > 0.02 or abs(run.best_living - run.as_built_living) > 0.02
        if moved:
            series.append(
                (
                    f"{run.name}, best wool",
                    freqs,
                    [run.delta_best[f] for f in freqs],
                    color,
                    1.6,
                    "2 3",
                )
            )
    return series


def _chart_svg(title, series, ymin, ymax, y_ticks, vlines) -> str:
    body: list[str] = []
    _draw_chart(body, (78, 46, 620, 320), title, ymin, ymax, series, vlines, y_ticks)
    return _svg_wrap(1180, 420, body)


def _figures(runs, limp_alpha, axials, layouts, subtitle: str) -> tuple[str, dict[str, str]]:
    freqs = list(THIRDS)
    marks = axial_marks(axials)
    figures: dict[str, str] = {}
    for layout in layouts:
        figures[f"lattice-{_slug(layout.spec.name)}"] = layout_svg(layout, subtitle)
    kitchen_series = _absorption_series(
        runs, "kitchen", {freq: limp_alpha[freq]["kitchen"] for freq in freqs}, freqs
    )
    living_series = _absorption_series(
        runs, "living", {freq: limp_alpha[freq]["living"] for freq in freqs}, freqs
    )
    delta_series = _delta_series(runs, freqs)
    figures["absorption-kitchen"] = _chart_svg(
        "Kitchen gable, field absorption",
        kitchen_series,
        0.0,
        1.0,
        (0, 0.25, 0.5, 0.75, 1),
        marks,
    )
    figures["absorption-living"] = _chart_svg(
        "Living gable, field absorption",
        living_series,
        0.0,
        1.0,
        (0, 0.25, 0.5, 0.75, 1),
        marks,
    )
    extremes = [abs(value) for _, _, values, *_rest in delta_series for value in values]
    span = max(0.08, max(extremes) * 1.15) if extremes else 0.08
    figures["delta-t"] = _chart_svg(
        "ΔT against the loose sheet (seconds)",
        delta_series,
        -span,
        span,
        (0,),
        [],
    )
    body: list[str] = [
        '<text x="78" y="28" font-size="18" font-weight="600">Obývák gable traps, panel on an open cavity</text>'
    ]
    _draw_chart(
        body, (78, 70, 620, 280), "Kitchen gable, field absorption",
        0.0, 1.0, kitchen_series, marks, (0, 0.5, 1),
    )
    _draw_chart(
        body, (78, 430, 620, 280), "Living gable, field absorption",
        0.0, 1.0, living_series, marks, (0, 0.5, 1),
    )
    _draw_chart(
        body, (78, 790, 620, 280), "ΔT against the loose sheet (seconds)",
        -span, span, delta_series, [], (0,),
    )
    return _svg_wrap(1180, 1140, body), figures


def _reference_alphas(
    geom: Geometry,
    res: Resistivity,
    plaster_m: float,
    board_m: float,
    freqs: tuple[float, ...],
    n_angles: int,
    n_in_band: int,
) -> dict[float, dict[str, float]]:
    k_wool, k_air = _split(geom.kitchen_cavity, geom.kitchen_wool_fraction)
    l_wool, l_air = _split(geom.living_cavity, geom.living_wool_fraction)
    stacks = {
        "kitchen": trap_stack(k_wool, k_air, geom.gkb_mass, res.mineral_wool),
        "living": trap_stack(l_wool, l_air, geom.gkb_mass, res.mineral_wool),
        "slope": slope_stack(board_m, plaster_m, res),
        "soffit": soffit_stack(
            geom.soffit_board, plaster_m, geom.soffit_wool_depth, geom.soffit_air_depth, res
        ),
    }
    out: dict[float, dict[str, float]] = {}
    for freq in freqs:
        out[freq] = {
            name: _stack_band_alpha(stack, freq, n_angles, n_in_band) for name, stack in stacks.items()
        }
    return out


def _shared_from(reference: dict[float, dict[str, float]]) -> dict[float, dict[str, float]]:
    return {
        freq: {"slope": bands["slope"], "soffit": bands["soffit"]}
        for freq, bands in reference.items()
    }


def run_study(
    params=None,
    resistivity: Resistivity | None = None,
    lattices: tuple[LatticeSpec, ...] | None = None,
    wool_fractions: tuple[float, ...] | None = None,
    sensitivities: bool = True,
) -> Study:
    """Panel-on-cavity traps for each lattice, then the room decay.

    ``lattices`` defaults to 625 vertical and 1000 horizontal. ``wool_fractions``
    replaces the wool grid (the kitchen clearance still applies).
    """
    ObyvakParams, _, build_layout = _models()
    p = params or ObyvakParams()
    if abs(p.bass_k_gkb - p.bass_l_gkb) > 1e-9:
        raise ValueError("this study assumes the same GKB thickness on both gables")
    res = resistivity or Resistivity()
    geom = room_geometry(p)
    plaster_m, board_m = _face_thicknesses(p)
    axials = axial_frequencies(geom)
    specs = lattices if lattices is not None else CANDIDATES
    if not specs:
        raise ValueError("run_study needs at least one lattice")

    outline = build_layout(p).predstena_pts()
    layouts = tuple(layout_gable(outline, spec, inset_mm=p.cd_first_inset) for spec in specs)
    k_min_air = (p.cd_t + 20.0) / 1000.0
    l_min_air = 0.0
    k_fracs = _fraction_grid(geom.kitchen_cavity, geom.kitchen_wool_fraction, k_min_air, wool_fractions)
    l_fracs = _fraction_grid(geom.living_cavity, geom.living_wool_fraction, l_min_air, wool_fractions)
    # Closest grid row to the clamped as-built split. An override that omits
    # the as-built fraction is compared against that nearest row.
    as_built_k_target, _, _ = constrained_split(
        geom.kitchen_cavity, geom.kitchen_wool_fraction, k_min_air
    )
    as_built_l_target, _, _ = constrained_split(
        geom.living_cavity, geom.living_wool_fraction, l_min_air
    )
    as_built_k = min(k_fracs, key=lambda frac: abs(frac - as_built_k_target))
    as_built_l = min(l_fracs, key=lambda frac: abs(frac - as_built_l_target))

    reference = _reference_alphas(geom, res, plaster_m, board_m, THIRDS, FIELD_ANGLES, BAND_SAMPLES)
    shared = _shared_from(reference)
    limp_t = {
        freq: _room_at(geom, bands["slope"], bands["soffit"], bands["kitchen"], bands["living"], freq)
        for freq, bands in reference.items()
    }
    centre_alpha = _band_alphas(
        geom, res, plaster_m, board_m, geom.kitchen_wool_fraction, geom.living_wool_fraction
    )
    centre_t = room_times(geom, centre_alpha)

    k_wool, k_air = _split(geom.kitchen_cavity, geom.kitchen_wool_fraction)
    l_wool, l_air = _split(geom.living_cavity, geom.living_wool_fraction)
    kitchen_stack = trap_stack(k_wool, k_air, geom.gkb_mass, res.mineral_wool)
    living_stack = trap_stack(l_wool, l_air, geom.gkb_mass, res.mineral_wool)
    kitchen_limp = reactance_zero_hz(kitchen_stack)
    living_limp = reactance_zero_hz(living_stack)

    plate = Plate()
    results: list[LatticeResult] = []
    air_alphas: dict[str, float] = {}
    for layout in layouts:
        systems = _systems(layout, plate)
        kitchen = _alpha_family(
            systems, plate, geom.kitchen_cavity, k_min_air,
            k_fracs, res.mineral_wool, THIRDS, FIELD_ANGLES, BAND_SAMPLES,
        )
        living = _alpha_family(
            systems, plate, geom.living_cavity, l_min_air,
            l_fracs, res.mineral_wool, THIRDS, FIELD_ANGLES, BAND_SAMPLES,
        )
        k_peak = first_absorption_peak_hz(
            systems, plate, Cavity((1.0 - as_built_k) * geom.kitchen_cavity, as_built_k * geom.kitchen_cavity, res.mineral_wool)
        )
        l_peak = first_absorption_peak_hz(
            systems, plate, Cavity((1.0 - as_built_l) * geom.living_cavity, as_built_l * geom.living_cavity, res.mineral_wool)
        )
        full_peak = first_absorption_peak_hz(
            systems, plate, Cavity(0.0, geom.living_cavity, res.mineral_wool)
        )
        air_only = weighted_band_alpha(
            systems,
            31.5,
            plate,
            Cavity(geom.living_cavity, 0.0, res.mineral_wool),
        )
        air_alphas[layout.spec.name] = air_only
        best_k, best_l = _select_pair(kitchen, living, geom, shared, _ROOM_BANDS)
        as_t = _times_for(kitchen[as_built_k], living[as_built_l], geom, shared, THIRDS)
        best_t = _times_for(kitchen[best_k], living[best_l], geom, shared, THIRDS)
        results.append(
            LatticeResult(
                name=layout.spec.name,
                layout_text=describe_layout(layout),
                kitchen_peak_hz=k_peak,
                living_peak_hz=l_peak,
                kitchen_alpha=kitchen,
                living_alpha=living,
                as_built_kitchen=as_built_k,
                as_built_living=as_built_l,
                best_kitchen=best_k,
                best_living=best_l,
                as_built_t=as_t,
                best_t=best_t,
                delta_as_built={freq: as_t[freq] - limp_t[freq] for freq in THIRDS},
                delta_best={freq: best_t[freq] - limp_t[freq] for freq in THIRDS},
                living_full_peak_hz=full_peak,
            )
        )
    run_tuple = tuple(results)
    winner = _mean_winner(run_tuple, "best_t")
    _best_lines, audible = _band_table(run_tuple, "best_t")
    rows = (
        _robustness(
            layouts, run_tuple, plate, res.mineral_wool, geom, shared,
            k_fracs, l_fracs, k_min_air, l_min_air,
        )
        if sensitivities and len(run_tuple) >= 2
        else ()
    )
    as_wool_k = run_tuple[0].as_built_kitchen * geom.kitchen_cavity
    as_wool_l = run_tuple[0].as_built_living * geom.living_cavity
    l_full, _, _ = constrained_split(geom.living_cavity, 1.0, l_min_air)
    living_full_key = min(l_fracs, key=lambda frac: abs(frac - l_full))
    bits = {
        "geometry": geom,
        "resistivity": res,
        "axials": axials,
        "lattices": run_tuple,
        "robustness": rows,
        "winner": winner,
        "kitchen_limp_hz": kitchen_limp,
        "living_limp_hz": living_limp,
        "kitchen_transparent": panel_frequency(geom.gkb_mass, geom.kitchen_cavity),
        "living_transparent": panel_frequency(geom.gkb_mass, geom.living_cavity),
        "kitchen_min_air": k_min_air,
        "as_built_t": limp_t,
        "centre_t": centre_t,
        "slope_text": _slope_paragraph(p, centre_t),
        "volume_text": _volumes(geom, as_wool_k, as_wool_l),
        "fixed_table": _fixed_wool_table(run_tuple, geom, shared, as_built_k, living_full_key),
        "wool_path_text": _wool_path_text(
            run_tuple, air_alphas, as_built_k, living_full_key, res.mineral_wool
        ),
    }
    report = build_report(bits)
    subtitle = "Both gables, same outline. Kitchen 190 mm deep, living 450 mm deep."
    svg, figures = _figures(run_tuple, reference, axials, layouts, subtitle)
    delta_t = {}
    kitchen_alpha = {}
    living_alpha = {}
    for run in run_tuple:
        slug = _slug(run.name)
        delta_t[f"{slug}-as-built"] = run.delta_as_built
        delta_t[f"{slug}-best"] = run.delta_best
        kitchen_alpha[run.name] = run.kitchen_alpha
        living_alpha[run.name] = run.living_alpha
    return Study(
        geometry=geom,
        resistivity=res,
        axials=axials,
        as_built_alpha=reference,
        as_built_t=limp_t,
        centre_t=centre_t,
        kitchen_alpha=kitchen_alpha,
        living_alpha=living_alpha,
        delta_t=delta_t,
        lattices=run_tuple,
        robustness=rows,
        winner=winner,
        audible_bands=audible,
        kitchen_limp_hz=kitchen_limp,
        living_limp_hz=living_limp,
        report=report,
        svg=svg,
        figures=figures,
    )


def write_outputs(study: Study, dest: Path | None = None) -> Path:
    repo = Path(__file__).resolve().parents[3]
    out = dest or (repo / "exports" / "obyvak_acoustics")
    out.mkdir(parents=True, exist_ok=True)
    (out / "report.txt").write_text(study.report, encoding="utf-8")
    (out / "obyvak_acoustics.svg").write_text(study.svg, encoding="utf-8")
    import cairosvg

    artifacts = Path("/opt/cursor/artifacts")
    if artifacts.is_dir() or True:
        artifacts.mkdir(parents=True, exist_ok=True)

    def _png(svg: str, path: Path) -> None:
        cairosvg.svg2png(bytestring=svg.encode("utf-8"), write_to=str(path))

    _png(study.svg, out / "obyvak_acoustics.png")
    _png(study.svg, artifacts / "obyvak_acoustics.png")
    for name, svg in study.figures.items():
        (out / f"obyvak-{name}.svg").write_text(svg, encoding="utf-8")
        _png(svg, out / f"obyvak-{name}.png")
        _png(svg, artifacts / f"obyvak-{name}.png")
    return out


def main() -> None:
    study = run_study()
    out = write_outputs(study)
    print(study.report)
    print(f"wrote {out}")


if __name__ == "__main__":
    main()
