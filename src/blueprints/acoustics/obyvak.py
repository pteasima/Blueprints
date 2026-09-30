"""Absorption of the obývák stacks, and the room decay those coefficients imply.

The soffit outline, roof pitch, and both predstěna depths stay fixed. What
this varies is the wool/air split behind each gable GKB, how much of the
40 mm slope lať is filled with NaturHeld Flex, and whether the slopes drop
the lať and keep only NaturHeld 140. The soffit is the deep Flex pack under
the ducts, not a second copy of that 40 mm lať.

Both gables follow the solids in ``models/obyvak.py``: wall, mineral wool,
empty gap, 12.5 mm GKB toward the room. The slope build-up is StoSilent on
NaturHeld 140, then Flex and/or air in the lať, stopped on the GKF as a
heavy (rigid) backing. Hanger compliance of that GKF is not in this model.
The GKB itself is a limp mass; stud stiffness is omitted, so real trap
resonances sit somewhat higher than the frequencies reported here.

Flow resistivities are catalogue-order assumptions, not measured samples.
A half/double resistivity case is part of the ranking so a wrong number
cannot silently flip a recommendation.
"""

from __future__ import annotations

import math
import sys
from dataclasses import dataclass
from pathlib import Path

from blueprints.acoustics.layers import (
    C0,
    RHO0,
    Layer,
    field_absorption,
    panel_frequency,
    reactance_zero_hz,
)

# Third-octave centres, 31.5 Hz–4 kHz.
THIRDS: tuple[float, ...] = (
    31.5, 40, 50, 63, 80, 100, 125, 160, 200, 250, 315, 400,
    500, 630, 800, 1000, 1250, 1600, 2000, 2500, 3150, 4000,
)
BASS_BANDS: tuple[float, ...] = (31.5, 40, 50, 63, 80, 100, 125)
WOOL_FRACTIONS: tuple[float, ...] = (0.0, 0.25, 0.5, 0.75, 1.0)
FLEX_FRACTIONS: tuple[float, ...] = (0.0, 0.25, 0.5, 0.75, 1.0)
# NaturHeld 140 screwed through the GKF onto the CD, no Flex and no lať.
BOARD_ONLY_MM: tuple[float, ...] = (40.0, 60.0, 80.0, 100.0)
# Leave the GKB free to move. Wool stops short of the leaf.
LEAF_CLEARANCE_M = 0.020

# Nominal gypsum density. 12.5 mm → 10 kg/m².
GKB_DENSITY = 800.0

# Fixed finishes. Absolute T20 moves if these are wrong; the wool and Flex
# rankings below are differences against the same finishes.
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
    rost_depth: float
    length: float
    width: float
    # Soffit is not a second copy of the 40 mm slope lať. Horizontal face:
    # Flex up to the duct rail, then the empty duct void, then the lid.
    soffit_horizontal: float
    soffit_vert_flex: float
    soffit_vert_air: float
    soffit_flex_z: float
    soffit_air_z: float
    soffit_vert_depth: float


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
    soffit_horizontal = (p.room_width - g.x_furn) * mm * soffit_y
    vert_flex_h = max(0.0, (g.z_soffit_rail() - g.z_nabeh_bot) * mm)
    vert_air_h = max(0.0, (g.h_start - g.z_soffit_rail()) * mm)
    soffit_vert_flex = vert_flex_h * soffit_y
    soffit_vert_air = vert_air_h * soffit_y
    soffit = soffit_horizontal + soffit_vert_flex + soffit_vert_air
    soffit_flex_z = max(0.0, (g.z_soffit_rail() - (g.z_nabeh_bot + g.t_nh_face)) * mm)
    soffit_air_z = max(0.0, (g.z_soffit_lid - g.z_soffit_rail()) * mm)
    soffit_vert_depth = max(0.0, (p.room_width - g.x_nh_inner) * mm)

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
        timber_fraction=p.rost_w / p.rost_spacing,
        kitchen_cavity=kitchen_cavity,
        living_cavity=living_cavity,
        kitchen_wool_fraction=p.bass_k_wool * mm / kitchen_cavity,
        living_wool_fraction=p.bass_l_wool * mm / living_cavity,
        gkb_mass=GKB_DENSITY * p.bass_k_gkb * mm,
        rost_depth=p.rost_d * mm,
        length=p.room_length * mm,
        width=p.room_width * mm,
        soffit_horizontal=soffit_horizontal,
        soffit_vert_flex=soffit_vert_flex,
        soffit_vert_air=soffit_vert_air,
        soffit_flex_z=soffit_flex_z,
        soffit_air_z=soffit_air_z,
        soffit_vert_depth=soffit_vert_depth,
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


def _face(plaster_m: float, board_m: float, res: Resistivity) -> list[Layer]:
    return [
        ("porous", plaster_m, res.stosilent),
        ("porous", board_m, res.wood_fibre_board),
    ]


def _with_timber(
    bay: tuple[Layer, ...],
    face: tuple[Layer, ...],
    timber_fraction: float,
    freq: float,
) -> float:
    open_area = field_absorption(bay, freq)
    blocked = field_absorption(face, freq)
    return (1.0 - timber_fraction) * open_area + timber_fraction * blocked


def soffit_field_alpha(
    geom: Geometry,
    res: Resistivity,
    plaster_m: float,
    board_m: float,
    freq: float,
) -> float:
    """Deep soffit pack: Flex up to the ducts, then the void, then the lid or the wall."""
    face = tuple(_face(plaster_m, board_m, res))
    horizontal = list(face)
    if geom.soffit_flex_z > 1e-4:
        horizontal.append(("porous", geom.soffit_flex_z, res.wood_fibre_flex))
    if geom.soffit_air_z > 1e-4:
        horizontal.append(("air", geom.soffit_air_z, 0.0))
    vertical_flex = list(face)
    vertical_air = list(face)
    if geom.soffit_vert_depth > 1e-4:
        vertical_flex.append(("porous", geom.soffit_vert_depth, res.wood_fibre_flex))
        vertical_air.append(("air", geom.soffit_vert_depth, 0.0))
    parts = (
        (geom.soffit_horizontal, tuple(horizontal)),
        (geom.soffit_vert_flex, tuple(vertical_flex)),
        (geom.soffit_vert_air, tuple(vertical_air)),
    )
    total = sum(area for area, _ in parts)
    if total <= 0.0:
        return 0.0
    absorbed = 0.0
    for area, bay in parts:
        absorbed += area * _with_timber(bay, face, geom.timber_fraction, freq)
    return absorbed / total


def board_only_stack(thickness_m: float, plaster_m: float, res: Resistivity) -> tuple[Layer, ...]:
    """NaturHeld 140 on the GKF, no Flex and no lať. The board is the whole slope."""
    return tuple(_face(plaster_m, thickness_m, res))


def slope_stacks(
    flex_m: float,
    rost_m: float,
    res: Resistivity,
    board_m: float,
    plaster_m: float,
) -> tuple[tuple[Layer, ...], tuple[Layer, ...]]:
    """Bay (Flex/air) and lať (timber, rigid behind the board). Room → backing."""
    face: list[Layer] = [
        ("porous", plaster_m, res.stosilent),
        ("porous", board_m, res.wood_fibre_board),
    ]
    air_m = max(0.0, rost_m - flex_m)
    bay = list(face)
    if flex_m > 1e-6:
        bay.append(("porous", flex_m, res.wood_fibre_flex))
    if air_m > 1e-6:
        bay.append(("air", air_m, 0.0))
    return tuple(bay), tuple(face)


def _face_thicknesses(params) -> tuple[float, float]:
    mm = 1.0 / 1000.0
    return (params.finish_t + params.basic_t) * mm, params.naturheld_t * mm


def mixed_field_alpha(
    bay: tuple[Layer, ...],
    lat: tuple[Layer, ...],
    timber_fraction: float,
    freq: float,
) -> float:
    bay_a = field_absorption(bay, freq)
    lat_a = field_absorption(lat, freq)
    return (1.0 - timber_fraction) * bay_a + timber_fraction * lat_a


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
    flex_fraction: float,
) -> dict[float, dict[str, float]]:
    flex_m = flex_fraction * geom.rost_depth
    bay, lat = slope_stacks(flex_m, geom.rost_depth, res, board_m, plaster_m)
    k_wool, k_air = _split(geom.kitchen_cavity, kitchen_fraction)
    l_wool, l_air = _split(geom.living_cavity, living_fraction)
    kitchen = trap_stack(k_wool, k_air, geom.gkb_mass, res.mineral_wool)
    living = trap_stack(l_wool, l_air, geom.gkb_mass, res.mineral_wool)
    out: dict[float, dict[str, float]] = {}
    for freq in THIRDS:
        out[freq] = {
            "kitchen": field_absorption(kitchen, freq),
            "living": field_absorption(living, freq),
            "slope": mixed_field_alpha(bay, lat, geom.timber_fraction, freq),
            "soffit": soffit_field_alpha(geom, res, plaster_m, board_m, freq),
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
class Study:
    geometry: Geometry
    resistivity: Resistivity
    axials: dict[str, float]
    as_built_alpha: dict[float, dict[str, float]]
    as_built_t: dict[float, float]
    kitchen_alpha: dict[float, dict[float, float]]
    living_alpha: dict[float, dict[float, float]]
    delta_t: dict[str, dict[float, float]]
    board_alpha: dict[float, dict[float, float]]
    board_delta: dict[float, dict[float, float]]
    report: str
    svg: str
    followup_svg: str


def _trap_family(
    geom: Geometry,
    res: Resistivity,
    cavity: float,
    fractions: tuple[float, ...],
) -> dict[float, dict[float, float]]:
    family: dict[float, dict[float, float]] = {}
    for fraction in fractions:
        wool, air = _split(cavity, fraction)
        stack = trap_stack(wool, air, geom.gkb_mass, res.mineral_wool)
        family[fraction] = {freq: field_absorption(stack, freq) for freq in THIRDS}
    return family


def _peak_note(stack: tuple[Layer, ...], cavity: float, air: float, mass: float) -> str:
    zero = reactance_zero_hz(stack)
    full = panel_frequency(mass, cavity)
    opaque = panel_frequency(mass, air) if air > 1e-4 else None
    zero_s = f"{zero:.0f} Hz" if zero is not None else "no zero below 250 Hz"
    opaque_s = f"{opaque:.0f} Hz" if opaque is not None else "n/a (no empty gap)"
    return (
        f"reactance zero {zero_s}; "
        f"closed form if the wool is transparent {full:.0f} Hz; "
        f"closed form if the wool is opaque {opaque_s}"
    )


def _direction(best: float, as_built: float, gain: float) -> str:
    if gain < _BASS_TIE:
        return "keep"
    if best > as_built + 0.02:
        return "more-wool"
    if best < as_built - 0.02:
        return "less-wool"
    return "keep"


def _mm(metres: float) -> str:
    millimetres = metres * 1000.0
    if abs(millimetres - round(millimetres)) < 0.05:
        return f"{millimetres:.0f} mm"
    return f"{millimetres:.1f} mm"


def _fem_warranted(
    family: dict[float, dict[float, float]],
    as_built_fraction: float,
    as_built_alpha: dict[float, float],
    axials: dict[str, float],
) -> bool:
    """True when a bass-band tie still splits at an axial mark."""
    means = {fraction: _bass_mean(curve) for fraction, curve in family.items()}
    means[as_built_fraction] = _bass_mean(as_built_alpha)
    curves = dict(family)
    curves[as_built_fraction] = as_built_alpha
    best = max(means.values())
    contenders = [fraction for fraction, mean in means.items() if best - mean <= _BASS_TIE]
    if len(contenders) < 2:
        return False
    for name in axials:
        band = _nearest_band(axials[name])
        values = [curves[fraction][band] for fraction in contenders]
        if max(values) - min(values) >= _AXIAL_SPLIT:
            return True
    return False


def _recommend_trap(
    name: str,
    family: dict[float, dict[float, float]],
    as_built_fraction: float,
    as_built_alpha: dict[float, float],
    cavity: float,
    mass: float,
    sigma: float,
    axials: dict[str, float],
    area: float,
    scaled: list[tuple[float, str, float]],
    delta_empty: dict[float, float],
    delta_full: dict[float, float],
    as_built_t: dict[float, float],
) -> str:
    means = {fraction: _bass_mean(curve) for fraction, curve in family.items()}
    as_mean = _bass_mean(as_built_alpha)
    best = max(means, key=means.get)
    gain = means[best] - as_mean
    direction = _direction(best, as_built_fraction, gain)
    stable = all(call == direction for _, call, _ in scaled)
    as_wool, as_air = _split(cavity, as_built_fraction)
    best_wool, best_air = _split(cavity, best)
    as_stack = trap_stack(as_wool, as_air, mass, sigma)
    full_txt, full_better, _full_worse = _room_shifts(delta_full, as_built_t)
    empty_txt, _empty_better, empty_worse = _room_shifts(delta_empty, as_built_t)
    lines = [
        f"{name}: as-built wool {_mm(as_wool)}, air {_mm(as_air)} "
        f"(wool fraction {as_built_fraction:.2f}). {_peak_note(as_stack, cavity, as_air, mass)}.",
        (
            f"Bass-band mean field absorption (31.5–125 Hz) is {as_mean:.2f}. "
            "The GKB face is a bass resonator and a midrange reflector: every split "
            "is back near zero absorption by a few hundred hertz."
        ),
    ]
    fill_wins = direction == "more-wool" and stable and full_better
    if fill_wins:
        lines.append(
            f"Filling the cavity shortens the room decay past 5% ({full_txt}). "
            "The same more-wool direction holds at half and double resistivity. "
            "Thicken the wool from the wall. Leave the last 20 mm empty so the "
            "leaf can still move; that build is in the mounting note below. "
            f"Air only goes the other way ({empty_txt})."
        )
    elif direction == "less-wool" and stable and _room_shifts(delta_empty, as_built_t)[1]:
        saved = area * (as_wool - best_wool)
        lines.append(
            f"Less wool shortens the room decay past 5% ({empty_txt}), "
            "and that direction holds at half and double resistivity. "
            f"Use wool {_mm(best_wool)}, air {_mm(best_air)} "
            f"({saved:.2f} m³ less wool on this gable)."
        )
    else:
        lines.append(
            f"Filling the cavity does not clear a 5% room-decay change ({full_txt}). "
            + (
                f"Emptying the wool does ({empty_txt}). "
                if empty_worse
                else f"Emptying the wool does not either ({empty_txt}). "
            )
            + f"Keep the as-built {_mm(as_wool)} / {_mm(as_air)} split."
        )
        if direction != "keep" and not stable:
            lines.append(
                "The trap coefficient by itself would move the wool fraction, "
                "and that call changes when the wool resistivity is halved or doubled."
            )
        elif gain >= _BASS_TIE:
            lines.append(
                f"The trap coefficient would still rise by {gain:.2f} at wool "
                f"{_mm(best_wool)}, but the gable is too small a share of the room "
                "for that to move the decay time audibly."
            )
    if _fem_warranted(family, as_built_fraction, as_built_alpha, axials):
        lines.append(
            "Those near-equal bass averages still differ at an axial mark. "
            "A bass FEM is the next step before changing this gable."
        )
    else:
        lines.append(
            "The bass-band ranking and the axial marks agree closely enough "
            "that a bass FEM is not justified for this gable."
        )
    return "\n".join(lines)


def _flex_paragraph(geom: Geometry, delta_t: dict[str, dict[float, float]], as_built_t: dict[float, float]) -> str:
    empty = delta_t["flex-0"]
    half = delta_t["flex-0.5"]
    bits = []
    audible_any = False
    for freq in (63.0, 125.0, 250.0, 500.0):
        d_empty = empty[freq]
        d_half = half[freq]
        ref = as_built_t[freq]
        heard = _audible(d_empty, ref) or _audible(d_half, ref)
        audible_any = audible_any or heard
        bits.append(
            f"{freq:.0f} Hz: empty lať {d_empty:+.3f} s, half fill {d_half:+.3f} s "
            f"(as-built T {ref:.2f} s)"
        )
    if audible_any:
        decision = (
            "Leaving the lať partly empty moves the midrange decay by more than "
            "the 5 % just-noticeable difference. Keep the flush 40 mm Flex fill: "
            "it is also the simple install. A deeper lať is a framing change and "
            "is outside this comparison."
        )
    else:
        decision = (
            "Emptying or halving the Flex fill stays inside a 5 % decay-time change "
            "at 63, 125, 250, and 500 Hz. Acoustically the lať fill is optional in this "
            "model; the flush 40 mm fill remains the simple install, and a partial "
            "fill is the awkward one. Do not deepen the lať for absorption."
        )
    return "Slope Flex, relative to the as-built full fill. " + "; ".join(bits) + ". " + decision


def _sensitivity(
    geom: Geometry,
    res: Resistivity,
    plaster_m: float,
    board_m: float,
) -> tuple[str, dict[str, list[tuple[float, str, float]]]]:
    """Half and double fibrous resistivity. StoSilent stays put (it is a facing)."""
    grouped: dict[str, list[tuple[float, str, float]]] = {"kitchen": [], "living": [], "flex": []}
    for factor in (0.5, 2.0):
        scaled = Resistivity(
            mineral_wool=res.mineral_wool * factor,
            wood_fibre_board=res.wood_fibre_board * factor,
            wood_fibre_flex=res.wood_fibre_flex * factor,
            stosilent=res.stosilent,
        )
        for label, cavity, as_fraction in (
            ("kitchen", geom.kitchen_cavity, geom.kitchen_wool_fraction),
            ("living", geom.living_cavity, geom.living_wool_fraction),
        ):
            family = _trap_family(geom, scaled, cavity, WOOL_FRACTIONS)
            as_mean = _mean(
                [
                    field_absorption(
                        trap_stack(*_split(cavity, as_fraction), geom.gkb_mass, scaled.mineral_wool),
                        freq,
                    )
                    for freq in BASS_BANDS
                ]
            )
            means = {fraction: _bass_mean(curve) for fraction, curve in family.items()}
            best = max(means, key=means.get)
            gain = means[best] - as_mean
            grouped[label].append((factor, _direction(best, as_fraction, gain), gain))
        bands_full = _band_alphas(
            geom, scaled, plaster_m, board_m,
            geom.kitchen_wool_fraction, geom.living_wool_fraction, 1.0,
        )
        bands_empty = _band_alphas(
            geom, scaled, plaster_m, board_m,
            geom.kitchen_wool_fraction, geom.living_wool_fraction, 0.0,
        )
        t_full = room_times(geom, bands_full)[125.0]
        t_empty = room_times(geom, bands_empty)[125.0]
        grouped["flex"].append(
            (factor, "audible" if _audible(t_empty - t_full, t_full) else "inaudible", t_empty - t_full)
        )
    parts = []
    for label in ("kitchen", "living"):
        for factor, direction, gain in grouped[label]:
            parts.append(f"σ×{factor:g} {label} wool call: {direction} (bass-mean gain {gain:.2f})")
    for factor, direction, gain in grouped["flex"]:
        parts.append(f"σ×{factor:g} empty-lať ΔT(125 Hz) {gain:+.3f} s ({direction})")
    text = "Resistivity check (mineral wool and wood fibre together). " + "; ".join(parts) + "."
    return text, grouped


def _volumes(geom: Geometry, wool_k: float, wool_l: float, flex_fraction: float) -> str:
    wool = geom.kitchen_trap * wool_k + geom.living_trap * wool_l
    flex = geom.slope * (1.0 - geom.timber_fraction) * flex_fraction * geom.rost_depth
    return (
        f"Variable material at this split: gable wool {wool:.2f} m³, "
        f"slope Flex {flex:.2f} m³ (lať timber excluded). "
        "The soffit stays on a full Flex fill and is not in that Flex volume."
    )


def _sabins(geom: Geometry, alpha: float, area: float) -> float:
    return area * alpha


def _soffit_paragraph(geom: Geometry, bands: dict[float, dict[str, float]]) -> str:
    gap = (80.0, 100.0, 125.0, 160.0, 200.0, 250.0)
    rows = []
    for freq in gap:
        kitchen = _sabins(geom, bands[freq]["kitchen"], geom.kitchen_trap)
        slope = _sabins(geom, bands[freq]["slope"], geom.slope)
        soffit = _sabins(geom, bands[freq]["soffit"], geom.soffit)
        rows.append(
            f"{freq:.0f} Hz kitchen {kitchen:.1f} m², slopes {slope:.1f} m², soffit {soffit:.1f} m² "
            f"(soffit α {bands[freq]['soffit']:.2f}, slope α {bands[freq]['slope']:.2f})"
        )
    handoff = 80.0
    kitchen = _sabins(geom, bands[handoff]["kitchen"], geom.kitchen_trap)
    slope = _sabins(geom, bands[handoff]["slope"], geom.slope)
    soffit = _sabins(geom, bands[handoff]["soffit"], geom.soffit)
    clone = bands[handoff]["slope"] * geom.soffit
    share = 100.0 * soffit / (kitchen + slope + soffit)
    return (
        "Soffit. The earlier pass copied the 40 mm slope lať onto this box, so it "
        "could not do a different job from the slopes. "
        f"The built cavity is deeper: the horizontal face ({geom.soffit_horizontal:.1f} m²) has "
        f"{_mm(geom.soffit_flex_z)} of Flex behind the NaturHeld, then {_mm(geom.soffit_air_z)} of "
        f"duct void up to the lid. The vertical face backed by Flex is {geom.soffit_vert_flex:.1f} m² "
        f"at {_mm(geom.soffit_vert_depth)} deep; above the duct rail {geom.soffit_vert_air:.1f} m² "
        "sees that depth as air. "
        f"By {handoff:.0f} Hz the kitchen trap has already fallen off ({kitchen:.1f} m²). "
        f"The slopes are still climbing (α {bands[handoff]['slope']:.2f}, {slope:.1f} m²). "
        f"The soffit is already at α {bands[handoff]['soffit']:.2f} and adds {soffit:.1f} m², "
        f"{share:.0f}% of what those three surfaces absorb there. "
        f"Treating it as the 40 mm lať would have left it near the slope coefficient, about {clone:.1f} m². "
        "By 250 Hz the slope coefficient has caught the soffit and the slope area takes over. "
        "The soffit cannot replace the slopes: even at α = 1 it is only "
        f"{geom.soffit:.1f} m² beside {geom.slope:.1f} m² of slope. "
        "Absorption area through that handoff: "
        + "; ".join(rows)
        + "."
    )


def _mounting_paragraph(
    geom: Geometry,
    as_built_t: dict[float, float],
    delta_full: dict[float, float],
    delta_clear: dict[float, float],
    sigma: float,
) -> str:
    stiffness = RHO0 * C0 * C0 / geom.kitchen_cavity
    full_txt, _, _ = _room_shifts(delta_full, as_built_t)
    clear_txt, clear_better, _ = _room_shifts(delta_clear, as_built_t)
    as_wool, as_air = _split(geom.kitchen_cavity, geom.kitchen_wool_fraction)
    clear_wool = geom.kitchen_cavity - LEAF_CLEARANCE_M
    zeros = []
    for label, wool, air in (
        ("as drawn", as_wool, as_air),
        ("20 mm clear of the GKB", clear_wool, LEAF_CLEARANCE_M),
        ("wool touching the board", geom.kitchen_cavity, 0.0),
    ):
        zero = reactance_zero_hz(trap_stack(wool, air, geom.gkb_mass, sigma))
        zeros.append(f"{label} {zero:.0f} Hz" if zero is not None else f"{label} none")
    extra = geom.kitchen_trap * (clear_wool - as_wool)
    clearance = (
        "Leaving 20 mm of air against the GKB"
        + (" still shortens the decay past 5% (" if clear_better else " stays inside a 5% change (")
        + clear_txt
        + ")."
    )
    return (
        "How the bass traps are held. The detail sheet fixes the rear CD to the wall "
        "through a short hanger and a Sylomer washer — or an acoustic hanger, the "
        "contractor's choice — and says not to tighten the washer flat. The GKB is "
        "screwed to the front CD only. The model uses that fact: the leaf is a limp "
        "mass, with no stud stiffness. It does not add a Sylomer spring rate, because "
        "the sheet does not name the pad or the spacing. "
        f"The kitchen air spring is {stiffness / 1000:.0f} kN/m per square metre "
        f"over the full {_mm(geom.kitchen_cavity)} cavity (ρc²/d). A soft washer is "
        "there so the frame does not bridge rigidly into the wall. It is not what "
        "tunes the trap; the cavity depth is. "
        "Wool does not delete that spring. At these densities it is almost all air, "
        "so a filled cavity keeps nearly the same compliance. "
        "Kitchen reactance zero: " + "; ".join(zeros) + ". "
        "Wool adds damping. It should still stop short of the board, so the leaf "
        "can move on the washer. "
        f"Pressing wool against the GKB: {full_txt}. {clearance} "
        f"Build the kitchen trap as {_mm(clear_wool)} of wool and "
        f"{_mm(LEAF_CLEARANCE_M)} of air ({extra:+.2f} m³ of wool on this gable). "
        "Do not bed the wool on the board."
    )


def _board_paragraph(
    as_built_t: dict[float, float],
    deltas: dict[float, dict[float, float]],
    timber_fraction: float,
) -> str:
    bands = (63.0, 125.0, 250.0, 500.0, 1000.0)
    lines = [
        "Slopes with only NaturHeld 140, screwed through the GKF onto the CD. "
        "No Flex, no lať. StoSilent stays on the board (4 mm). "
        "Positive ΔT is a longer decay than the as-built 60 mm board plus 40 mm Flex."
    ]
    for thickness in BOARD_ONLY_MM:
        bits = []
        for freq in bands:
            change = deltas[thickness][freq]
            base = as_built_t[freq]
            note = ", audible" if _audible(change, base) else ""
            bits.append(f"{freq:.0f} Hz {change:+.3f} s ({100.0 * change / base:+.1f}%{note})")
        lines.append(f"{thickness:.0f} mm: " + "; ".join(bits) + ".")
    longer = []
    level = []
    for thickness in BOARD_ONLY_MM:
        lost = [
            freq
            for freq in bands
            if deltas[thickness][freq] > 0.0 and _audible(deltas[thickness][freq], as_built_t[freq])
        ]
        if lost:
            longer.append(f"{thickness:.0f} mm at " + ", ".join(f"{freq:.0f}" for freq in lost))
        else:
            level.append(f"{thickness:.0f} mm")
    if longer:
        lines.append(
            "Taking the Flex and the lať away lengthens the decay past 5% for "
            + "; ".join(longer)
            + "."
        )
    if level:
        lines.append(
            " and ".join(level)
            + " stays inside 5% of the as-built decay on every band above. "
            "That thickness is level with 60 mm of 140 plus the 40 mm Flex, "
            "not a difference you would hear. The thinner bare boards are not. "
            f"Part of the tie is the missing lať: {100.0 * timber_fraction:.0f}% of the "
            "as-built slope is batten, with no Flex behind it, and the bare board has none of that shading."
        )
    return "\n".join(lines)


def _board_stability(geom: Geometry, res: Resistivity, plaster_m: float, board_m: float) -> str:
    """Whether the bare-board call at 125 Hz survives a resistivity swing."""
    problems = []
    for factor in (0.5, 2.0):
        scaled = Resistivity(
            mineral_wool=res.mineral_wool * factor,
            wood_fibre_board=res.wood_fibre_board * factor,
            wood_fibre_flex=res.wood_fibre_flex * factor,
            stosilent=res.stosilent,
        )
        built = _band_alphas(
            geom,
            scaled,
            plaster_m,
            board_m,
            geom.kitchen_wool_fraction,
            geom.living_wool_fraction,
            1.0,
        )
        reference = room_times(geom, built)
        for thickness in BOARD_ONLY_MM:
            stack = board_only_stack(thickness / 1000.0, plaster_m, scaled)
            replaced = {freq: dict(built[freq]) for freq in THIRDS}
            replaced[125.0] = {**built[125.0], "slope": field_absorption(stack, 125.0)}
            change = room_times(geom, replaced)[125.0] - reference[125.0]
            longer = change > 0.0 and _audible(change, reference[125.0])
            if thickness < 100.0 and not longer:
                problems.append(f"σ×{factor:g} {thickness:.0f} mm ΔT(125 Hz) {change:+.3f} s")
            if thickness == 100.0 and _audible(change, reference[125.0]):
                problems.append(f"σ×{factor:g} 100 mm ΔT(125 Hz) {change:+.3f} s")
    if problems:
        return (
            "The bare-board call is not stable when wood-fibre resistivity is halved or doubled: "
            + "; ".join(problems)
            + "."
        )
    return (
        "Half and double wood-fibre resistivity leave the same call: "
        "40, 60, and 80 mm still lengthen 125 Hz past 5%, and 100 mm stays inside 5%."
    )


def build_report(study_bits: dict) -> str:
    geom: Geometry = study_bits["geometry"]
    axials: dict[str, float] = study_bits["axials"]
    res: Resistivity = study_bits["resistivity"]
    lines = [
        "Obývák layer impedance. Soffit outline, roof pitch, trap depths, and the "
        "choice of materials stay fixed. The soffit is scored as the deep Flex "
        "pack under the ducts. Varied: wool versus air behind each 12.5 mm GKB, "
        "the Flex fraction of the 40 mm slope lať, and a slope of NaturHeld 140 alone.",
        (
            f"Room volume {geom.volume:.0f} m³. Areas: slopes {geom.slope:.1f} m², "
            f"soffit {geom.soffit:.1f} m², each gable trap {geom.kitchen_trap:.1f} m², "
            f"glass {geom.glass:.1f} m², plaster {geom.plaster:.1f} m², "
            f"floor {geom.floor:.1f} m², cabinet front {geom.furniture:.1f} m²."
        ),
        (
            f"Assumed flow resistivity: mineral wool {res.mineral_wool:.0f}, "
            f"NaturHeld 140 {res.wood_fibre_board:.0f}, Flex {res.wood_fibre_flex:.0f}, "
            f"StoSilent facing {res.stosilent:.0f} Pa·s/m². "
            f"GKB areal mass {geom.gkb_mass:.1f} kg/m², modelled as limp. "
            "Floor, glass, plaster, and cabinets use fixed absorption "
            f"{FLOOR_ALPHA:.2f}, {GLASS_ALPHA:.2f}, {PLASTER_ALPHA:.2f}, {FURNITURE_ALPHA:.2f}. "
            "Absolute decay times move with those four numbers; the differences do not."
        ),
        (
            "Length axials "
            + ", ".join(f"{name} {freq:.1f} Hz" for name, freq in axials.items())
            + ". These use the full plan dimensions and are marks on the curves, not a wave solution."
        ),
        study_bits["kitchen_text"],
        study_bits["living_text"],
        study_bits["mounting_text"],
        study_bits["soffit_text"],
        study_bits["flex_text"],
        study_bits["board_text"],
        study_bits["sensitivity_text"],
        study_bits["volume_text"],
        (
            "Field incidence is the Paris average out to 78°. "
            "Miki's formulas are extrapolated below the old Delany–Bazley bound "
            f"f = 0.01 σ ({0.01 * res.mineral_wool:.0f} Hz for the baseline wool); "
            "that extrapolation is the reason the closed-form panel frequencies are printed beside the curves."
        ),
    ]
    return "\n\n".join(lines) + "\n"


def _svg_escape(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def _series_path(
    freqs: list[float],
    values: list[float],
    x_of,
    y_of,
) -> str:
    parts = []
    for i, (freq, value) in enumerate(zip(freqs, values)):
        cmd = "M" if i == 0 else "L"
        parts.append(f"{cmd}{x_of(freq):.1f},{y_of(value):.1f}")
    return " ".join(parts)


def _append_chart(parts, box, title, ymin, ymax, series, vlines, y_format) -> None:
    ox, oy, w, h = box
    fmin, fmax = 12.0, 5000.0
    parts.append(f'<text x="{ox}" y="{oy - 14}" font-size="15" font-weight="600">{_svg_escape(title)}</text>')
    parts.append(f'<rect x="{ox}" y="{oy}" width="{w}" height="{h}" fill="#fff" stroke="#ddd"/>')

    def x_of(freq: float) -> float:
        return ox + w * (math.log(freq) - math.log(fmin)) / (math.log(fmax) - math.log(fmin))

    def y_of(value: float) -> float:
        return oy + h * (1.0 - (value - ymin) / (ymax - ymin))

    for tick in (31.5, 63, 125, 250, 500, 1000, 2000, 4000):
        x = x_of(tick)
        parts.append(f'<line x1="{x:.1f}" y1="{oy}" x2="{x:.1f}" y2="{oy + h}" stroke="#eee"/>')
        label = f"{tick:.0f}" if tick >= 100 else f"{tick:g}"
        parts.append(f'<text x="{x:.1f}" y="{oy + h + 16}" font-size="10" text-anchor="middle">{label}</text>')
    for value in y_format:
        if not ymin - 1e-9 <= value <= ymax + 1e-9:
            continue
        y = y_of(value)
        stroke = "#bbb" if abs(value) < 1e-9 and ymin < 0 else "#eee"
        parts.append(f'<line x1="{ox}" y1="{y:.1f}" x2="{ox + w}" y2="{y:.1f}" stroke="{stroke}"/>')
        parts.append(
            f'<text x="{ox - 8}" y="{y + 3:.1f}" font-size="10" text-anchor="end">{value:g}</text>'
        )
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
    legend_x = ox + w + 12
    legend_y = oy + 14
    for name, freqs, values, color, stroke, dash in series:
        path = _series_path(freqs, values, x_of, y_of)
        dash_attr = f' stroke-dasharray="{dash}"' if dash else ""
        parts.append(
            f'<path d="{path}" fill="none" stroke="{color}" stroke-width="{stroke}"{dash_attr}/>'
        )
        parts.append(
            f'<line x1="{legend_x}" y1="{legend_y - 4}" x2="{legend_x + 16}" y2="{legend_y - 4}" '
            f'stroke="{color}" stroke-width="{stroke}"{dash_attr}/>'
        )
        parts.append(
            f'<text x="{legend_x + 22}" y="{legend_y}" font-size="11" fill="{color}">{_svg_escape(name)}</text>'
        )
        legend_y += 18


def render_svg(study: dict) -> str:
    geom: Geometry = study["geometry"]
    width, height = 1360, 760
    plot_w, plot_h = 440, 280
    panels = [
        (64, 48, plot_w, plot_h),
        (700, 48, plot_w, plot_h),
        (64, 430, plot_w, plot_h),
        (700, 430, plot_w, plot_h),
    ]
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" fill="#f7f5f1"/>',
        '<style>text{font-family:system-ui,sans-serif;fill:#222}</style>',
    ]

    def chart(box, title, ymin, ymax, series, vlines, y_format):
        _append_chart(parts, box, title, ymin, ymax, series, vlines, y_format)

    as_built = study["as_built_alpha"]
    freqs = list(THIRDS)
    chart(
        panels[0],
        "As built, field absorption",
        0.0,
        1.0,
        [
            ("kitchen trap", freqs, [as_built[f]["kitchen"] for f in freqs], "#1f4e79", 2.2, None),
            ("living trap", freqs, [as_built[f]["living"] for f in freqs], "#2e7d4f", 2.2, None),
            ("slopes", freqs, [as_built[f]["slope"] for f in freqs], "#b36b00", 2.2, None),
            ("soffit", freqs, [as_built[f]["soffit"] for f in freqs], "#6b3fa0", 2.2, None),
        ],
        axial_marks(study["axials"]),
        (0, 0.25, 0.5, 0.75, 1),
    )

    def family_series(family, as_fraction, as_curve):
        palette = {
            0.0: "#9aa0a6",
            0.25: "#6f93b8",
            0.5: "#2f6fad",
            0.75: "#c47b2f",
            1.0: "#a33b32",
        }
        series = []
        for fraction in WOOL_FRACTIONS:
            series.append(
                (
                    f"wool {fraction:.0%}",
                    freqs,
                    [family[fraction][f] for f in freqs],
                    palette[fraction],
                    1.6,
                    None,
                )
            )
        series.append(
            (
                f"as built {as_fraction:.0%}",
                freqs,
                [as_curve[f] for f in freqs],
                "#111",
                2.2,
                "5 3",
            )
        )
        return series

    chart(
        panels[1],
        "Kitchen trap, wool fraction of the cavity",
        0.0,
        1.0,
        family_series(
            study["kitchen_alpha"],
            geom.kitchen_wool_fraction,
            {f: as_built[f]["kitchen"] for f in freqs},
        ),
        axial_marks(study["axials"]),
        (0, 0.5, 1),
    )
    chart(
        panels[2],
        "Living trap, wool fraction of the cavity",
        0.0,
        1.0,
        family_series(
            study["living_alpha"],
            geom.living_wool_fraction,
            {f: as_built[f]["living"] for f in freqs},
        ),
        axial_marks(study["axials"]),
        (0, 0.5, 1),
    )

    deltas: dict[str, dict[float, float]] = study["delta_t"]
    extremes = [max(abs(v) for v in curve.values()) for curve in deltas.values()]
    span = max(0.08, max(extremes) * 1.15)
    delta_colors = {
        "flex-0": ("#b36b00", None),
        "flex-0.5": ("#e0a100", "5 3"),
        "kitchen-0": ("#1f4e79", None),
        "kitchen-1": ("#1f4e79", "2 3"),
        "living-0": ("#2e7d4f", None),
        "living-1": ("#2e7d4f", "2 3"),
    }
    delta_names = {
        "flex-0": "Flex empty",
        "flex-0.5": "Flex half",
        "kitchen-0": "kitchen air only",
        "kitchen-1": "kitchen wool full",
        "living-0": "living air only",
        "living-1": "living wool full",
    }
    delta_series = []
    for key, (color, dash) in delta_colors.items():
        curve = deltas[key]
        delta_series.append(
            (delta_names[key], freqs, [curve[f] for f in freqs], color, 1.8, dash)
        )
    chart(
        panels[3],
        "ΔT vs as built (seconds)",
        -span,
        span,
        delta_series,
        [],
        (0,),
    )
    parts.append("</svg>")
    return "\n".join(parts)


def render_followup_svg(study: dict) -> str:
    """Soffit absorption area, and slopes built from NaturHeld 140 alone."""
    geom: Geometry = study["geometry"]
    width, height = 1360, 760
    plot_w, plot_h = 440, 280
    panels = [
        (64, 48, plot_w, plot_h),
        (700, 48, plot_w, plot_h),
        (64, 430, plot_w, plot_h),
        (700, 430, plot_w, plot_h),
    ]
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" fill="#f7f5f1"/>',
        '<style>text{font-family:system-ui,sans-serif;fill:#222}</style>',
    ]
    as_built = study["as_built_alpha"]
    freqs = list(THIRDS)
    areas = {
        "kitchen": geom.kitchen_trap,
        "living": geom.living_trap,
        "slope": geom.slope,
        "soffit": geom.soffit,
    }
    sabin_series = []
    colors = {
        "kitchen": "#1f4e79",
        "living": "#2e7d4f",
        "slope": "#b36b00",
        "soffit": "#6b3fa0",
    }
    names = {
        "kitchen": "kitchen trap",
        "living": "living trap",
        "slope": "slopes",
        "soffit": "soffit",
    }
    peak = 1.0
    for key, area in areas.items():
        values = [area * as_built[freq][key] for freq in freqs]
        peak = max(peak, max(values))
        sabin_series.append((names[key], freqs, values, colors[key], 2.0, None))
    _append_chart(
        parts,
        panels[0],
        "Absorption area (m²)",
        0.0,
        peak * 1.05,
        sabin_series,
        axial_marks(study["axials"]),
        (),
    )
    _append_chart(
        parts,
        panels[1],
        "Who covers the mid band",
        0.0,
        1.0,
        [
            ("kitchen", freqs, [as_built[f]["kitchen"] for f in freqs], "#1f4e79", 2.0, None),
            ("slopes", freqs, [as_built[f]["slope"] for f in freqs], "#b36b00", 2.0, None),
            ("soffit", freqs, [as_built[f]["soffit"] for f in freqs], "#6b3fa0", 2.2, None),
        ],
        axial_marks(study["axials"]),
        (0, 0.5, 1),
    )
    board_colors = {40.0: "#9aa0a6", 60.0: "#6f93b8", 80.0: "#c47b2f", 100.0: "#a33b32"}
    board_series = [
        (
            "as built + Flex",
            freqs,
            [as_built[f]["slope"] for f in freqs],
            "#111",
            2.2,
            "5 3",
        )
    ]
    for thickness in BOARD_ONLY_MM:
        board_series.append(
            (
                f"140 only {thickness:.0f} mm",
                freqs,
                [study["board_alpha"][thickness][f] for f in freqs],
                board_colors[thickness],
                1.7,
                None,
            )
        )
    _append_chart(
        parts,
        panels[2],
        "Slope α, 140 on CD, no Flex",
        0.0,
        1.0,
        board_series,
        [],
        (0, 0.5, 1),
    )
    board_delta = study["board_delta"]
    clear = study["delta_clear"]
    delta_series = [
        ("20 mm clearance", freqs, [clear[f] for f in freqs], "#1f4e79", 2.0, None),
        ("kitchen wool full", freqs, [study["delta_t"]["kitchen-1"][f] for f in freqs], "#1f4e79", 1.6, "3 3"),
    ]
    for thickness in BOARD_ONLY_MM:
        delta_series.append(
            (
                f"140 {thickness:.0f} mm",
                freqs,
                [board_delta[thickness][f] for f in freqs],
                board_colors[thickness],
                1.7,
                None,
            )
        )
    extremes = [max(abs(value) for value in series[2]) for series in delta_series]
    span = max(0.08, max(extremes) * 1.15)
    _append_chart(
        parts,
        panels[3],
        "ΔT vs as built (seconds)",
        -span,
        span,
        delta_series,
        [],
        (0,),
    )
    parts.append("</svg>")
    return "\n".join(parts)


def run_study(params=None, resistivity: Resistivity | None = None) -> Study:
    ObyvakParams, _, _ = _models()
    p = params or ObyvakParams()
    if abs(p.bass_k_gkb - p.bass_l_gkb) > 1e-9:
        raise ValueError("this study assumes the same GKB thickness on both gables")
    res = resistivity or Resistivity()
    geom = room_geometry(p)
    plaster_m, board_m = _face_thicknesses(p)
    axials = axial_frequencies(geom)

    as_built = _band_alphas(
        geom,
        res,
        plaster_m,
        board_m,
        geom.kitchen_wool_fraction,
        geom.living_wool_fraction,
        1.0,
    )
    as_t = room_times(geom, as_built)
    kitchen_family = _trap_family(geom, res, geom.kitchen_cavity, WOOL_FRACTIONS)
    living_family = _trap_family(geom, res, geom.living_cavity, WOOL_FRACTIONS)

    scenarios = {
        "flex-0": (geom.kitchen_wool_fraction, geom.living_wool_fraction, 0.0),
        "flex-0.5": (geom.kitchen_wool_fraction, geom.living_wool_fraction, 0.5),
        "kitchen-0": (0.0, geom.living_wool_fraction, 1.0),
        "kitchen-1": (1.0, geom.living_wool_fraction, 1.0),
        "living-0": (geom.kitchen_wool_fraction, 0.0, 1.0),
        "living-1": (geom.kitchen_wool_fraction, 1.0, 1.0),
    }
    delta_t: dict[str, dict[float, float]] = {}
    for name, (k_frac, l_frac, flex_frac) in scenarios.items():
        bands = _band_alphas(geom, res, plaster_m, board_m, k_frac, l_frac, flex_frac)
        times = room_times(geom, bands)
        delta_t[name] = {freq: times[freq] - as_t[freq] for freq in THIRDS}

    sensitivity_text, grouped = _sensitivity(geom, res, plaster_m, board_m)
    kitchen_text = _recommend_trap(
        "Kitchen gable",
        kitchen_family,
        geom.kitchen_wool_fraction,
        {freq: as_built[freq]["kitchen"] for freq in THIRDS},
        geom.kitchen_cavity,
        geom.gkb_mass,
        res.mineral_wool,
        axials,
        geom.kitchen_trap,
        grouped["kitchen"],
        delta_t["kitchen-0"],
        delta_t["kitchen-1"],
        as_t,
    )
    living_text = _recommend_trap(
        "Living gable",
        living_family,
        geom.living_wool_fraction,
        {freq: as_built[freq]["living"] for freq in THIRDS},
        geom.living_cavity,
        geom.gkb_mass,
        res.mineral_wool,
        axials,
        geom.living_trap,
        grouped["living"],
        delta_t["living-0"],
        delta_t["living-1"],
        as_t,
    )
    flex_text = _flex_paragraph(geom, delta_t, as_t)
    as_wool_k, _ = _split(geom.kitchen_cavity, geom.kitchen_wool_fraction)
    as_wool_l, _ = _split(geom.living_cavity, geom.living_wool_fraction)
    volume_text = _volumes(geom, as_wool_k, as_wool_l, 1.0)
    clear_fraction = 1.0 - LEAF_CLEARANCE_M / geom.kitchen_cavity
    clear_bands = _band_alphas(
        geom, res, plaster_m, board_m, clear_fraction, geom.living_wool_fraction, 1.0
    )
    delta_clear = {freq: room_times(geom, clear_bands)[freq] - as_t[freq] for freq in THIRDS}
    board_alpha: dict[float, dict[float, float]] = {}
    board_delta: dict[float, dict[float, float]] = {}
    for thickness_mm in BOARD_ONLY_MM:
        stack = board_only_stack(thickness_mm / 1000.0, plaster_m, res)
        alphas = {freq: field_absorption(stack, freq) for freq in THIRDS}
        board_alpha[thickness_mm] = alphas
        replaced = {freq: {**as_built[freq], "slope": alphas[freq]} for freq in THIRDS}
        times = room_times(geom, replaced)
        board_delta[thickness_mm] = {freq: times[freq] - as_t[freq] for freq in THIRDS}
    mounting_text = _mounting_paragraph(
        geom, as_t, delta_t["kitchen-1"], delta_clear, res.mineral_wool
    )
    soffit_text = _soffit_paragraph(geom, as_built)
    board_text = _board_paragraph(as_t, board_delta, geom.timber_fraction)
    board_text += "\n" + _board_stability(geom, res, plaster_m, board_m)
    bits = {
        "geometry": geom,
        "resistivity": res,
        "axials": axials,
        "kitchen_text": kitchen_text,
        "living_text": living_text,
        "flex_text": flex_text,
        "sensitivity_text": sensitivity_text,
        "volume_text": volume_text,
        "mounting_text": mounting_text,
        "soffit_text": soffit_text,
        "board_text": board_text,
        "board_alpha": board_alpha,
        "board_delta": board_delta,
        "delta_clear": delta_clear,
        "as_built_alpha": as_built,
        "kitchen_alpha": kitchen_family,
        "living_alpha": living_family,
        "delta_t": delta_t,
    }
    report = build_report(bits)
    svg = render_svg(bits)
    followup_svg = render_followup_svg(bits)
    return Study(
        geometry=geom,
        resistivity=res,
        axials=axials,
        as_built_alpha=as_built,
        as_built_t=as_t,
        kitchen_alpha=kitchen_family,
        living_alpha=living_family,
        delta_t=delta_t,
        board_alpha=board_alpha,
        board_delta=board_delta,
        report=report,
        svg=svg,
        followup_svg=followup_svg,
    )


def write_outputs(study: Study, dest: Path | None = None) -> Path:
    repo = Path(__file__).resolve().parents[3]
    out = dest or (repo / "exports" / "obyvak_acoustics")
    out.mkdir(parents=True, exist_ok=True)
    (out / "report.txt").write_text(study.report, encoding="utf-8")
    (out / "obyvak_acoustics.svg").write_text(study.svg, encoding="utf-8")
    (out / "obyvak_soffit_variants.svg").write_text(study.followup_svg, encoding="utf-8")
    import cairosvg

    cairosvg.svg2png(bytestring=study.svg.encode("utf-8"), write_to=str(out / "obyvak_acoustics.png"))
    cairosvg.svg2png(
        bytestring=study.followup_svg.encode("utf-8"),
        write_to=str(out / "obyvak_soffit_variants.png"),
    )
    artifacts = Path("/opt/cursor/artifacts")
    if artifacts.is_dir():
        cairosvg.svg2png(
            bytestring=study.svg.encode("utf-8"),
            write_to=str(artifacts / "obyvak_acoustics.png"),
        )
        cairosvg.svg2png(
            bytestring=study.followup_svg.encode("utf-8"),
            write_to=str(artifacts / "obyvak_soffit_variants.png"),
        )
    return out


def main() -> None:
    study = run_study()
    out = write_outputs(study)
    print(study.report)
    print(f"wrote {out}")


if __name__ == "__main__":
    main()
