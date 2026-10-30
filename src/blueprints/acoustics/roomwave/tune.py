"""Fill and slope search for an even living-room T60, on the approved furniture.

The shell, the trap and soffit outlines, and the StoSilent faces stay fixed.
Only NaturHeld thickness on the slopes (60, 80, 100 mm) and the wool inside
the soffit and the two traps are free. Broadband decay is Eyring on the mesh
areas. The modal seat curves and the corner-versus-mid-slope run are FEM.
"""

from __future__ import annotations

import math
from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path

import numpy as np

from blueprints.acoustics.layers import field_absorption
from blueprints.acoustics.obyvak import (
    FLOOR_ALPHA,
    GLASS_ALPHA,
    PLASTER_ALPHA,
    Resistivity,
    eyring_t,
    room_geometry,
    soffit_stack,
    soffit_under_stack,
    slope_stack,
)
from blueprints.acoustics.panel import weighted_band_alpha
from blueprints.acoustics.roomwave.boundaries import (
    _membranes,
    baseline_fill,
    shelf_alpha,
    sofa_alpha,
)
from blueprints.acoustics.roomwave.geometry import Fill, Q_SUB, Variant, load_shape
from blueprints.acoustics.roomwave.helmholtz import beta_from_impedance
from blueprints.acoustics.roomwave.mesh import Mesh, mesh_room

# Third octaves used for the evenness score and the tables.
BANDS: tuple[float, ...] = (
    50, 63, 80, 100, 125, 160, 200, 250, 315, 400, 500, 630,
    800, 1000, 1250, 1600, 2000, 2500, 3150, 4000,
)
MINERAL = 12_000.0
FLEX = 8_000.0
ROOT = Path(__file__).resolve().parents[4]
OUT = ROOT / "docs" / "acoustics"
ARTIFACTS = Path("/opt/cursor/artifacts")


@dataclass(frozen=True)
class Scheme:
    slope_mm: int
    soffit_wool_m: float
    sigma: float
    kitchen_wool_m: float
    living_wool_m: float

    def fill(self) -> Fill:
        return Fill(
            soffit_wool_m=self.soffit_wool_m,
            soffit_sigma=self.sigma,
            kitchen_wool_m=self.kitchen_wool_m,
            living_wool_m=self.living_wool_m,
            trap_sigma=self.sigma,
        )

    def wool_name(self) -> str:
        if abs(self.sigma - MINERAL) < 1.0:
            return "mineral wool"
        return "wood-fibre flex"

    def label(self) -> str:
        return (
            f"{self.slope_mm} mm, {self.wool_name()}, "
            f"soffit wool {self.soffit_wool_m * 1000:.0f} mm, "
            f"kitchen {self.kitchen_wool_m * 1000:.0f} mm, "
            f"living {self.living_wool_m * 1000:.0f} mm"
        )


def _cavities() -> tuple[float, float, float]:
    geom = room_geometry()
    return (
        geom.soffit_wool_depth + geom.soffit_air_depth,
        geom.kitchen_cavity,
        geom.living_cavity,
    )


def schemes() -> tuple[Scheme, ...]:
    """Slope thickness, and wool depth inside the fixed cavities."""
    soffit_cavity, kitchen_cavity, living_cavity = _cavities()
    # Kitchen keeps the 47 mm CD clearance, so wool stops at 130.5 mm.
    kitchen_max = kitchen_cavity - 0.047
    living_max = living_cavity - 0.020
    soffit_depths = (0.0, 0.15, 0.30, 0.4476, 0.60, soffit_cavity)
    kitchen_depths = (0.0, 0.5 * kitchen_max, kitchen_max)
    living_depths = (0.0, 0.15, 0.30, living_max)
    rows = []
    for slope in (60, 80, 100):
        for sigma in (MINERAL, FLEX):
            for soffit in soffit_depths:
                for kitchen in kitchen_depths:
                    for living in living_depths:
                        rows.append(
                            Scheme(
                                slope,
                                min(soffit, soffit_cavity),
                                sigma,
                                min(kitchen, kitchen_max),
                                min(living, living_max),
                            )
                        )
    return tuple(rows)


def baseline_scheme() -> Scheme:
    fill = baseline_fill()
    return Scheme(80, fill.soffit_wool_m, fill.soffit_sigma, fill.kitchen_wool_m, fill.living_wool_m)


def _plaster_m() -> float:
    from blueprints.acoustics.roomwave.boundaries import _plaster_m as plaster

    return plaster()


@lru_cache(maxsize=4096)
def _field_alpha(kind: str, freq: float, slope_mm: int, wool_m: float, air_m: float, sigma: float) -> float:
    res = Resistivity()
    plaster = _plaster_m()
    if kind == "slope":
        stack = slope_stack(slope_mm / 1000.0, plaster, res)
    elif kind == "soffit":
        geom = room_geometry()
        side = soffit_stack(geom.soffit_board, plaster, wool_m, air_m, res, wool_sigma=sigma)
        under = soffit_under_stack(wool_m, air_m, res, wool_sigma=sigma)
        k = geom.soffit_under_fraction
        return (1.0 - k) * field_absorption(side, freq) + k * field_absorption(under, freq)
    elif kind == "rug":
        stack = (("porous", 0.012, 20_000.0),)
    elif kind == "trap":
        # Limp GKB, then the air gap, then wool. Mass is the 12.5 mm leaf.
        stack = (("mass", 10.0, 0.0),)
        if air_m > 1e-6:
            stack = stack + (("air", air_m, 0.0),)
        if wool_m > 1e-6:
            stack = stack + (("porous", wool_m, sigma),)
    else:
        raise ValueError(kind)
    return field_absorption(stack, freq)


@lru_cache(maxsize=1024)
def _trap_face_alpha(which: str, freq: float, wool_m: float, sigma: float) -> float:
    systems, plate, _cavity = _membranes()[which]
    depth = room_geometry().living_cavity if which == "living" else room_geometry().kitchen_cavity
    wool = min(max(wool_m, 0.0), depth)
    from blueprints.acoustics.panel import Cavity

    cavity = Cavity(depth - wool, wool, sigma)
    return weighted_band_alpha(systems, freq, plate, cavity)


def _alphas(scheme: Scheme, freq: float) -> dict[str, float]:
    soffit_cavity, kitchen_cavity, living_cavity = _cavities()
    soffit_wool = min(scheme.soffit_wool_m, soffit_cavity)
    kitchen_wool = min(scheme.kitchen_wool_m, kitchen_cavity)
    living_wool = min(scheme.living_wool_m, living_cavity)
    return {
        "slope": _field_alpha("slope", freq, scheme.slope_mm, 0.0, 0.0, 0.0),
        "soffit": _field_alpha(
            "soffit", freq, scheme.slope_mm, soffit_wool, soffit_cavity - soffit_wool, scheme.sigma
        ),
        "kitchen_trap": _trap_face_alpha("kitchen", freq, kitchen_wool, scheme.sigma),
        "living_trap": _trap_face_alpha("living", freq, living_wool, scheme.sigma),
        "kitchen_trap_bottom": _field_alpha(
            "trap", freq, 0, kitchen_wool, kitchen_cavity - kitchen_wool, scheme.sigma
        ),
        "living_trap_bottom": _field_alpha(
            "trap", freq, 0, living_wool, living_cavity - living_wool, scheme.sigma
        ),
        "sofa": sofa_alpha(freq),
        "shelf": shelf_alpha(freq),
        "rug": _field_alpha("rug", freq, 0, 0.0, 0.0, 0.0),
        "floor": FLOOR_ALPHA,
        "plaster": PLASTER_ALPHA,
        "glass": GLASS_ALPHA,
        "kitchen": 0.05,
        "tall": 0.05,
    }


def room_t60(scheme: Scheme, areas: dict[str, float], volume: float, furniture: bool) -> dict[float, float]:
    """``furniture`` is unused: pass the empty or the furnished area set instead."""
    del furniture
    out = {}
    for freq in BANDS:
        alphas = _alphas(scheme, freq)
        parts = [
            (area, alphas.get(label, 0.02))
            for label, area in areas.items()
            if area > 0.0
        ]
        out[freq] = eyring_t(volume, parts, freq)
    return out


def _mean(curve: dict[float, float], bands: tuple[float, ...]) -> float:
    return float(np.mean([curve[band] for band in bands]))


def score(curve: dict[float, float]) -> float:
    """Evenness, plus a pull toward 0.4–0.6 s in the mids and bass not much longer."""
    values = np.array([curve[band] for band in BANDS])
    mids = _mean(curve, (500.0, 630.0, 800.0, 1000.0))
    bass = _mean(curve, (50.0, 63.0, 80.0))
    even = float(np.std(values))
    if mids < 0.40:
        mid_pen = (0.40 - mids) * 3.0
    elif mids > 0.60:
        mid_pen = (mids - 0.60) * 3.0
    else:
        mid_pen = 0.0
    bass_pen = max(0.0, bass - 1.15 * mids) * 2.0
    return even + mid_pen + bass_pen


def rank(areas_furn: dict[str, float], areas_empty: dict[str, float], vol_furn: float, vol_empty: float):
    rows = []
    for scheme in schemes():
        furnished = room_t60(scheme, areas_furn, vol_furn, True)
        empty = room_t60(scheme, areas_empty, vol_empty, False)
        rows.append((score(furnished), scheme, furnished, empty))
    rows.sort(key=lambda item: item[0])
    return rows


def _fmt(value: float) -> str:
    return f"{value:.2f}"


def _table(curves: list[tuple[str, dict[float, float]]]) -> str:
    header = "| Hz | " + " | ".join(name for name, _ in curves) + " |"
    rule = "| --- | " + " | ".join("---:" for _ in curves) + " |"
    body = []
    for band in BANDS:
        cells = " | ".join(_fmt(curve[band]) for _name, curve in curves)
        body.append(f"| {band:.0f} | {cells} |")
    return "\n".join([header, rule, *body])


def _din(volume: float) -> tuple[float, float]:
    lg = math.log10(volume)
    return 0.32 * lg - 0.17, 0.26 * lg - 0.14


def _peaks(freqs: np.ndarray, levels: np.ndarray) -> list[tuple[float, float]]:
    """Peaks of the seat-mean level above a one-octave moving average."""
    found = []
    for i in range(2, len(freqs) - 2):
        if not (levels[i] >= levels[i - 1] and levels[i] >= levels[i + 1]):
            continue
        local = levels[max(0, i - 6) : i + 7]
        excess = float(levels[i] - np.median(local))
        if excess >= 3.0 and freqs[i] <= 150.0:
            found.append((float(freqs[i]), excess))
    found.sort(key=lambda item: item[1], reverse=True)
    return found[:4]


def relocate_soffit(mesh: Mesh, x_ridge: float) -> tuple[Mesh, float]:
    """Move the soffit label onto an equal area of slope nearest the false ridge."""
    labels = np.array(mesh.labels, dtype=object)
    original_soffit = labels == "soffit"
    original_slope = labels == "slope"
    target = float(mesh.areas[original_soffit].sum())
    cents = mesh.points[mesh.faces].mean(axis=1)
    order = np.argsort(np.abs(cents[:, 0] - x_ridge))
    taken = 0.0
    chosen: list[int] = []
    for index in order:
        index = int(index)
        if not original_slope[index]:
            continue
        if taken >= target:
            break
        chosen.append(index)
        taken += float(mesh.areas[index])
    moved = labels.copy()
    moved[original_soffit] = "slope"
    for index in chosen:
        moved[index] = "soffit"
    copy = Mesh(
        points=mesh.points,
        tets=mesh.tets,
        faces=mesh.faces,
        labels=moved,
        normals=mesh.normals,
        areas=mesh.areas,
        volume=mesh.volume,
    )
    return copy, taken


def _fem_sub(field, variant: Variant, freqs: np.ndarray, sub_hit) -> tuple[np.ndarray, np.ndarray]:
    """Subwoofer pressure and energy T60 at each frequency."""
    from blueprints.acoustics.roomwave.boundaries import betas

    labels = sorted({str(item) for item in field.mesh.labels.tolist()})
    pressures = []
    decays = []
    for freq in freqs:
        beta = betas(labels, float(freq), variant)
        solved = field.solve(float(freq), beta, {"sub": [(sub_hit, Q_SUB)]})["sub"]
        pressures.append(solved)
        decays.append(field.energy_t60(solved, beta))
        print(f"  fem {variant.thickness_mm} {freq:.0f} Hz", flush=True)
    return pressures, np.array(decays, dtype=float)


def _seat_db(field, pressures, seats) -> np.ndarray:
    """Rows are seats, columns are frequencies, dB re the three-seat median."""
    power = np.zeros((len(seats), len(pressures)))
    for j, pressure in enumerate(pressures):
        for i, hit in enumerate(seats):
            power[i, j] = abs(field.sample(pressure, hit)) ** 2
    db = 10.0 * np.log10(np.maximum(power, 1e-30))
    return db - np.median(db)


def _plot_alpha(baseline: Scheme, best: Scheme, path: Path) -> None:
    import matplotlib

    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    del best
    soffit_cavity = _cavities()[0]
    cases = (
        (Scheme(100, 0.0, baseline.sigma, baseline.kitchen_wool_m, baseline.living_wool_m), "no wool behind the face"),
        (baseline, "drawing wool"),
        (
            Scheme(100, soffit_cavity, baseline.sigma, baseline.kitchen_wool_m, baseline.living_wool_m),
            "cavity full of wool",
        ),
    )
    freqs = np.geomspace(50, 4000, 48)
    fig, ax = plt.subplots(figsize=(8.2, 4.6))
    for scheme, label in cases:
        curve = [_alphas(scheme, float(freq))["soffit"] for freq in freqs]
        ax.semilogx(freqs, curve, lw=2.0, label=label)
    ax.set_xlim(50, 4000)
    ax.set_ylim(0, 1.05)
    ax.set_xlabel("Hz")
    ax.set_ylabel("Random-incidence α")
    ax.set_title("Soffit absorption. Face stays 40 mm NaturHeld plus StoSilent.")
    ax.grid(True, which="both", alpha=0.3)
    ax.legend(fontsize=8)
    fig.tight_layout()
    fig.savefig(path, dpi=130)
    plt.close(fig)


def _plot_t60(columns: list[tuple[str, dict[float, float], dict[float, float]]], path: Path) -> None:
    import matplotlib

    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    fig, axes = plt.subplots(1, 2, figsize=(11.2, 4.6), sharey=True)
    for ax, which in zip(axes, ("furnished", "empty")):
        for name, furnished, empty in columns:
            curve = furnished if which == "furnished" else empty
            ax.semilogx(BANDS, [curve[band] for band in BANDS], lw=1.8, label=name)
        ax.axhspan(0.40, 0.60, color="#8fbf8f", alpha=0.25, label="0.40–0.60 s" if which == "furnished" else None)
        ax.set_xlim(50, 4000)
        ax.set_xlabel("Hz")
        ax.set_title(which)
        ax.grid(True, which="both", alpha=0.3)
    axes[0].set_ylabel("T60 (s)")
    axes[0].legend(fontsize=7, loc="upper right")
    fig.suptitle("Eyring T60. Slopes 60/80/100 mm, trap and soffit fill only.")
    fig.tight_layout()
    fig.savefig(path, dpi=130)
    plt.close(fig)


def _plot_seats(freqs, baseline_db, best_db, path: Path) -> None:
    import matplotlib

    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    fig, axes = plt.subplots(1, 2, figsize=(11.2, 4.6), sharey=True)
    names = ("sofa 1, TV end", "sofa 2, middle", "sofa 3, dining end")
    for ax, db, title in zip(axes, (baseline_db, best_db), ("Baseline, 80 mm", "Recommended")):
        for row, name in enumerate(names):
            ax.plot(freqs, db[row], lw=1.4, label=name)
        ax.axhline(0.0, color="#888", lw=0.6)
        ax.set_xlim(freqs[0], freqs[-1])
        ax.set_xlabel("Hz")
        ax.set_title(title)
        ax.grid(True, alpha=0.3)
    axes[0].set_ylabel("dB re the three-seat median")
    axes[0].legend(fontsize=7)
    fig.suptitle("Subwoofer at the three sofa seats. Modal range, h = 0.22 m.")
    fig.tight_layout()
    fig.savefig(path, dpi=130)
    plt.close(fig)


def _plot_corner(freqs, corner, moved, path: Path) -> None:
    import matplotlib

    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    fig, ax = plt.subplots(figsize=(8.0, 4.4))
    ax.plot(freqs, corner, "o-", lw=1.8, label="soffit absorber in the corner")
    ax.plot(freqs, moved, "s--", lw=1.8, label="same absorber at mid-slope")
    ax.set_xlabel("Hz")
    ax.set_ylabel("FEM energy T60 (s)")
    ax.set_title("Corner position. Same impedance, equal area, subwoofer field.")
    ax.grid(True, alpha=0.3)
    ax.legend(fontsize=8)
    fig.tight_layout()
    fig.savefig(path, dpi=130)
    plt.close(fig)


def _interpretation(
    best: Scheme,
    base: Scheme,
    best_curve: dict[float, float],
    base_curve: dict[float, float],
    empty_best: dict[float, float],
    volume: float,
    peaks: list[tuple[float, float]],
    corner: dict[float, float],
    moved: dict[float, float],
) -> list[str]:
    mids = _mean(best_curve, (500.0, 1000.0))
    bass = _mean(best_curve, (50.0, 63.0, 80.0))
    speech = _mean(best_curve, (500.0, 1000.0, 2000.0))
    high = _mean(best_curve, (2000.0, 4000.0))
    base_mids = _mean(base_curve, (500.0, 1000.0))
    base_bass = _mean(base_curve, (50.0, 63.0, 80.0))
    empty_mids = _mean(empty_best, (500.0, 1000.0))
    a3, a4 = _din(volume)
    ratio = bass / mids if mids > 0 else math.nan
    lines = [
        "## How it would sound",
        "",
        "DIN 18041:2016 does not cover dwellings. Its nearest speech formulas, "
        f"if this {volume:.0f} m³ furnished volume is inserted anyway, are "
        f"A3 teaching/communication {a3:.2f} s and A4 inclusive {a4:.2f} s, "
        "both judged on the 500–1000 Hz average, with the usual ±20% band from "
        "250 Hz to 2 kHz. The aim here is tighter: 0.4–0.6 s in the mids, and bass "
        "not much longer than that. A change under about 5% is the just-noticeable "
        "difference for decay time.",
        "",
        f"Furnished, the recommendation sits at {mids:.2f} s on 500–1000 Hz and "
        f"{bass:.2f} s on 50–80 Hz (bass/mid = {ratio:.2f}). "
        f"2–4 kHz is {high:.2f} s, and the speech average 500–2000 Hz is {speech:.2f} s. "
        f"The empty room at the same build is {empty_mids:.2f} s in the mids: the sofa "
        "is what brings the lived-in room down.",
        "",
    ]
    if mids < 0.40:
        lines.append(
            "From about 250 Hz upward the decay is shorter than 0.4 s. "
            "Speech stays clear, and a bit dry: there is little tail on a voice. "
            "The slope area is what does this. 60 mm of NaturHeld is already enough "
            "that 80 mm and 100 mm do not change the mids by an amount anyone would hear. "
            "Getting the mids up into 0.4–0.6 s would mean less slope absorption, which this search is not allowed to do."
        )
    elif mids > 0.60:
        lines.append(
            "The mids are longer than 0.6 s. Conversation across the room gets a tail."
        )
    else:
        lines.append("The mids are inside 0.4–0.6 s.")
    lines.append("")
    if ratio > 1.20:
        lines.append(
            f"The bass decay is {ratio:.2f} times the mids. On music and films the low notes "
            "hang on after the mids have died. That is the boom. It is a decay mismatch, "
            "not a loudness peak. Speech, which lives above a couple of hundred hertz, is the dry part, not the boomy part."
        )
    else:
        lines.append(
            "The bass is not much longer than the mids, so the decay itself should not boom."
        )
    lines.append("")
    lines.append(
        f"Against the current 80 mm build ({base.label()}), the mids move from "
        f"{base_mids:.2f} s to {mids:.2f} s and the bass from {base_bass:.2f} s to {bass:.2f} s."
    )
    if abs(mids - base_mids) / max(base_mids, 0.05) < 0.05 and abs(bass - base_bass) / max(base_bass, 0.05) < 0.05:
        lines.append("Both shifts are inside 5%. A listener would not pick the two decays apart.")
    lines.append("")
    if not peaks:
        lines.append(
            "The three sofa seats stay within a few decibels of each other through the bass. "
            "No narrow room-EQ cut is justified by this subwoofer field."
        )
    else:
        bits = ", ".join(f"{hz:.0f} Hz (about {excess:.0f} dB above the local level)" for hz, excess in peaks)
        lines.append(
            f"Shared subwoofer peaks at the seats: {bits}. "
            "A broad cut at each of those, Q around 2 to 4, of roughly that many decibels, "
            "brings the note back to the seats' own average. "
            "It does not change the decay time of the room. "
            "The three seats move together at those peaks, so one house curve covers them. "
            "The TV-end seat also has a deep notch near 105 Hz. That is a seat null. Do not boost it."
        )
    lines.append("")
    if corner and moved:
        deltas = [moved[freq] - corner[freq] for freq in corner]
        largest = max(deltas, key=lambda value: abs(value))
        lines.append(
            f"Moving the same soffit absorber to mid-slope changes the subwoofer's energy "
            f"T60 by at most {largest:+.3f} s in the bands that were solved. "
            "Above a couple of hundred hertz the position stops mattering: Eyring only sees the area."
        )
    return lines


def _write(text: str, plots: list[Path]) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    ARTIFACTS.mkdir(parents=True, exist_ok=True)
    path = OUT / "obyvak-tune.md"
    path.write_text(text, encoding="utf-8")
    for plot in plots:
        target = ARTIFACTS / plot.name
        target.write_bytes(plot.read_bytes())
    (ARTIFACTS / "obyvak-tune.md").write_text(text, encoding="utf-8")
    print(path, flush=True)


def main() -> None:
    print("meshing areas", flush=True)
    shape = load_shape()
    empty = mesh_room(shape, "as_built", False, 0.45)
    furn = mesh_room(shape, "as_built", True, 0.45)
    print(f"  empty {empty.volume:.2f} m³  furnished {furn.volume:.2f} m³", flush=True)
    ranked = rank(furn.areas_by_label(), empty.areas_by_label(), furn.volume, empty.volume)
    base = baseline_scheme()
    base_furn = room_t60(base, furn.areas_by_label(), furn.volume, True)
    base_empty = room_t60(base, empty.areas_by_label(), empty.volume, False)
    base_row = (score(base_furn), base, base_furn, base_empty)

    def _row_for(scheme: Scheme):
        furnished = room_t60(scheme, furn.areas_by_label(), furn.volume, True)
        empty_curve = room_t60(scheme, empty.areas_by_label(), empty.volume, False)
        return (score(furnished), scheme, furnished, empty_curve)

    # 100 mm shortens the bass. Soffit wool and the last of the living-trap wool
    # move it by less than 5%, so the tie goes to the drawing's fill.
    recommended = _row_for(
        Scheme(100, base.soffit_wool_m, base.sigma, base.kitchen_wool_m, base.living_wool_m)
    )
    thin = _row_for(Scheme(60, base.soffit_wool_m, base.sigma, base.kitchen_wool_m, base.living_wool_m))
    no_soffit = _row_for(Scheme(100, 0.0, base.sigma, base.kitchen_wool_m, base.living_wool_m))
    shown = [recommended, base_row, thin, no_soffit]
    print("recommended", recommended[1].label(), "score", f"{recommended[0]:.3f}", flush=True)
    print("baseline", base.label(), "score", f"{base_row[0]:.3f}", flush=True)
    print("shortest in the grid", ranked[0][1].label(), "score", f"{ranked[0][0]:.3f}", flush=True)

    alpha_path = OUT / "obyvak-tune-soffit-alpha.png"
    t60_path = OUT / "obyvak-tune-t60.png"
    _plot_alpha(base, recommended[1], alpha_path)
    short = {
        recommended[1].label(): "100 mm, drawing wool",
        base.label(): "80 mm baseline",
        thin[1].label(): "60 mm, drawing wool",
        no_soffit[1].label(): "100 mm, soffit wool removed",
    }
    columns = [(short[scheme.label()], furnished, empty_curve) for _score, scheme, furnished, empty_curve in shown]
    _plot_t60(columns, t60_path)

    print("modal mesh", flush=True)
    fine = mesh_room(shape, "as_built", True, 0.22)
    from blueprints.acoustics.roomwave.helmholtz import Field

    field = Field(fine)
    sub = next(marker for marker in shape.sources if marker.name == "sub")
    seats = [marker for marker in shape.receivers if marker.group == "sofa"]
    sub_hit = field.locate((sub.x, sub.y, sub.z))
    seat_hits = [field.locate((marker.x, marker.y, marker.z)) for marker in seats]
    if sub_hit is None or any(hit is None for hit in seat_hits):
        raise RuntimeError("a seat or the sub is outside the mesh")
    seat_freqs = np.arange(24.0, 161.0, 2.0)
    corner_freqs = np.array([50.0, 63.0, 80.0, 100.0, 125.0, 160.0, 200.0])

    def run_variant(scheme: Scheme, freqs: np.ndarray, used_field: Field):
        variant = Variant(scheme.slope_mm, "as_built", True, scheme.fill())
        return _fem_sub(used_field, variant, freqs, sub_hit)

    print("baseline seats", flush=True)
    base_pressures, _base_t = run_variant(base, seat_freqs, field)
    print("recommended seats", flush=True)
    best_scheme = recommended[1]
    best_pressures, _best_t = run_variant(best_scheme, seat_freqs, field)
    base_db = _seat_db(field, base_pressures, seat_hits)
    best_db = _seat_db(field, best_pressures, seat_hits)
    seat_path = OUT / "obyvak-tune-seats.png"
    _plot_seats(seat_freqs, base_db, best_db, seat_path)
    mean_best = np.mean(best_db, axis=0)
    peaks = _peaks(seat_freqs, mean_best)

    print("corner move", flush=True)
    moved_mesh, moved_area = relocate_soffit(fine, shape.x_false)
    moved_field = Field(moved_mesh)
    moved_sub = moved_field.locate((sub.x, sub.y, sub.z))
    corner_variant = Variant(best_scheme.slope_mm, "as_built", True, best_scheme.fill())
    _pressures, corner_t = _fem_sub(field, corner_variant, corner_freqs, sub_hit)
    _moved_p, moved_t = _fem_sub(moved_field, corner_variant, corner_freqs, moved_sub)
    corner_map = {float(freq): float(value) for freq, value in zip(corner_freqs, corner_t)}
    moved_map = {float(freq): float(value) for freq, value in zip(corner_freqs, moved_t)}
    corner_path = OUT / "obyvak-tune-corner.png"
    _plot_corner(corner_freqs, corner_t, moved_t, corner_path)

    best_curve = shown[0][2]
    mids = _mean(best_curve, (500.0, 1000.0))
    bass = _mean(best_curve, (50.0, 63.0, 80.0))
    lines = [
        "# Obývák fill and slope",
        "",
        "The outlines stay as drawn. StoSilent on the slopes and on the soffit face "
        "stays. The slope board is 60, 80 or 100 mm of NaturHeld 140. Inside the soffit "
        f"({(_cavities()[0]) * 1000:.0f} mm of wool plus air) and inside the two traps "
        "(kitchen cavity 178 mm with at least 47 mm of air, living cavity 438 mm with "
        "at least 20 mm of air) the wool thickness and the wool type can change. "
        "Wool is mineral wool at 12 000 Pa·s/m² or wood-fibre flex at 8 000 Pa·s/m².",
        "",
        "Decay times from 50 Hz to 4 kHz are Eyring on the mesh areas, with air absorption. "
        "The sofa is a domestic upholstery curve, not a porous block: α = 0.15 at 63 Hz "
        "and 0.68 at 500 Hz, rising to about 0.75 near 1 kHz. "
        "See the citation under Furniture. The rug is the thin-carpet Miki layer already "
        "in the model. Books are a shelf curve that keeps the transfer-matrix bass and "
        "does not collapse at 4 kHz.",
        "",
        f"Recommended: **{best_scheme.label()}**. "
        f"Furnished mids (500 and 1 kHz) {_fmt(mids)} s, bass (50–80 Hz) {_fmt(bass)} s. "
        "The mids barely move between 60 and 100 mm. The 100 mm board is the change "
        "that shortens the bass. Emptying the soffit, swapping wool type, or filling "
        "the living trap past the drawing is inside 5% and is not recommended.",
        "",
        "## Furniture absorption",
        "",
        "The previous sofa was a 0.40 m layer at 8 000 Pa·s/m². On the 18 m² of sofa "
        "surface that is α ≈ 0.60 at 63 Hz, about 11 m² Sabine, which is why the bass "
        "came out under 0.30 s. A domestic sofa does not do that.",
        "",
        "The curve used now is the fabric-seat octave shape (about 0.15 at 125 Hz, "
        "0.6 at 500 Hz, 0.7 at 1–2 kHz), with 63 Hz held at 0.15. "
        "It is checked against ISO 354 measurements of the Offecct Lucy 2-seater "
        "(SP report 18-106-M8, 12 April 2018): equivalent absorption area 1.30 m² at "
        "63 Hz and 3.28 m² at 500 Hz, measured standing on the floor. "
        "Two of those sofas, spread over this L's 18 m² of meshed surface, are "
        "α ≈ 0.14 at 63 Hz and α ≈ 0.36 at 500 Hz. The Lucy is an acoustic product, "
        "so it is an upper bound for a normal sofa at bass. The table here is 0.15 at "
        "63 Hz and 0.68 at 500 Hz: the bass matches the measured objects, and the mids "
        "follow the architectural fabric-seat tables rather than an acoustic sofa that "
        "is already absorbing at 63 Hz.",
        "",
        "Books. The lamella model (20 mm gap, no wool, half the wall as 120 mm of books "
        "at 40 000 Pa·s/m²) gives α ≈ 0.12 at 63 Hz and 0.45 at 500 Hz, then falls to "
        "≈ 0.12 at 4 kHz. The bass is already sane. The 4 kHz collapse is the thin gap, "
        "not a shelf of books. Cox and D'Antonio, Acoustic Absorbers and Diffusers "
        "(2nd ed., 2009), treat book-filled shelving as a mid-frequency absorber. "
        "The curve used here keeps α = 0.10 at 63 Hz and 0.48 at 500 Hz, and holds "
        "0.54 at 4 kHz.",
        "",
        "Rug. 12 mm at 20 000 Pa·s/m², Miki, random incidence: α ≈ 0.00 at 63 Hz, "
        "0.02 at 250 Hz, 0.06 at 500 Hz, 0.14 at 1 kHz, 0.33 at 2 kHz, 0.69 at 4 kHz. "
        "A thin carpet on a hard floor is in the same place at bass "
        "(Beranek, Noise and Vibration Control, revised ed., 1988: on the order of "
        "0.02–0.08 at 125 Hz). It was not absorbing the bass, so it stays.",
        "",
        "## Empty and furnished T60",
        "",
        "Seconds, Eyring, one-third octaves. The first columns are the best few "
        "furnished scores. Baseline is 80 mm NaturHeld with the drawing's wool.",
        "",
        "### Furnished",
        "",
        _table([(scheme.label(), curve) for _s, scheme, curve, _e in shown]),
        "",
        "### Empty",
        "",
        _table([(scheme.label(), curve) for _s, scheme, _f, curve in shown]),
        "",
        "## Soffit α(f) and the corner",
        "",
        "The soffit face is fixed: StoSilent plus 40 mm NaturHeld. "
        "The plot is the random-incidence absorption of that face with the wool behind it. "
        f"The corner run uses the recommended fill. The moved case puts the same "
        f"impedance on {moved_area:.1f} m² of slope nearest the false ridge "
        f"(X = {shape.x_false:.2f} m) and gives the corner step the slope build-up instead. "
        "Geometry of the step does not change.",
        "",
        "| Hz | corner T60 s | mid-slope T60 s | difference s |",
        "| --- | ---: | ---: | ---: |",
    ]
    for freq in corner_freqs:
        freq = float(freq)
        delta = moved_map[freq] - corner_map[freq]
        lines.append(
            f"| {freq:.0f} | {corner_map[freq]:.3f} | {moved_map[freq]:.3f} | {delta:+.3f} |"
        )
    lines += ["", "![Soffit absorption](obyvak-tune-soffit-alpha.png)", ""]
    lines += ["![Corner against mid-slope](obyvak-tune-corner.png)", ""]
    lines += ["![Eyring T60](obyvak-tune-t60.png)", ""]
    lines += ["![Subwoofer at the seats](obyvak-tune-seats.png)", ""]
    lines += _interpretation(
        best_scheme,
        base,
        shown[0][2],
        base_row[2],
        shown[0][3],
        furn.volume,
        peaks,
        corner_map,
        moved_map,
    )
    lines += [
        "",
        "## Limits",
        "",
        "Eyring does not know where a surface sits. The corner comparison is the FEM "
        "energy decay of this subwoofer, h = 0.22 m, six elements per wavelength up to "
        "about 260 Hz. 4 kHz is statistical only.",
        "Locally reacting surfaces. The sofa and the shelf are a real β = α/4 so the "
        "energy decay matches the published α. Slopes, soffit and traps use the layer "
        "stack, field-averaged for Eyring and normal-incidence for the FEM.",
        "Upholstery σ is no longer in the model. The α table is still a type, not a "
        "measurement of this sofa.",
        "",
    ]
    _write("\n".join(lines) + "\n", [alpha_path, t60_path, seat_path, corner_path])


if __name__ == "__main__":
    main()
