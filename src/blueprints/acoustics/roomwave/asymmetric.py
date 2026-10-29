"""Asymmetric NaturHeld on the two slopes. Rigid backing. No wool in the pack.

Left is the window slope (X from the eave to the false ridge). Right is the
cabinet slope (ridge to the soffit), the one beside the subwoofer. Each side
is StoSilent on NaturHeld of the stated thickness, on rigid GKF. Mineral wool
behind that gypsum is not in the impedance.
"""

from __future__ import annotations

from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path

import numpy as np

from blueprints.acoustics.layers import field_absorption, surface_impedance
from blueprints.acoustics.obyvak import Resistivity, eyring_t, slope_stack
from blueprints.acoustics.roomwave.boundaries import betas
from blueprints.acoustics.roomwave.geometry import Q_SUB, Variant, load_shape
from blueprints.acoustics.roomwave.helmholtz import Field, beta_from_impedance
from blueprints.acoustics.roomwave.mesh import Mesh, mesh_room
from blueprints.acoustics.roomwave.tune import BANDS, _alphas, _plaster_m

ROOT = Path(__file__).resolve().parents[4]
OUT = ROOT / "docs" / "acoustics"
ARTIFACTS = Path("/opt/cursor/artifacts")
PEAKS = (38.0, 58.0, 140.0)


@dataclass(frozen=True)
class Pair:
    name: str
    left_mm: int
    right_mm: int


PAIRS: tuple[Pair, ...] = (
    Pair("60/100", 60, 100),
    Pair("60/120", 60, 120),
    Pair("80/120", 80, 120),
    Pair("60/60", 60, 60),
    Pair("80/80", 80, 80),
    Pair("100/100", 100, 100),
    Pair("120/120", 120, 120),
)


def pack(naturheld_mm: int) -> tuple:
    """StoSilent + NaturHeld on a rigid wall. Same stack as ``slope_stack``."""
    return slope_stack(naturheld_mm / 1000.0, _plaster_m(), Resistivity())


@lru_cache(maxsize=256)
def pack_alpha(naturheld_mm: int, freq: float) -> float:
    return field_absorption(pack(naturheld_mm), freq)


def split_slopes(mesh: Mesh, x_ridge: float) -> Mesh:
    labels = np.array(mesh.labels, dtype=object)
    cents = mesh.points[mesh.faces].mean(axis=1)
    slope = labels == "slope"
    labels = labels.copy()
    labels[slope & (cents[:, 0] <= x_ridge)] = "slope_left"
    labels[slope & (cents[:, 0] > x_ridge)] = "slope_right"
    return Mesh(
        points=mesh.points,
        tets=mesh.tets,
        faces=mesh.faces,
        labels=labels,
        normals=mesh.normals,
        areas=mesh.areas,
        volume=mesh.volume,
    )


def _curve(pair: Pair, areas: dict[str, float], volume: float) -> dict[float, float]:
    """Eyring. Non-slope surfaces use the drawing wool and the domestic sofa."""
    from blueprints.acoustics.roomwave.tune import baseline_scheme

    anchor = baseline_scheme()
    out = {}
    for freq in BANDS:
        base = _alphas(anchor, freq)
        parts = []
        for label, area in areas.items():
            if area <= 0.0:
                continue
            if label == "slope_left":
                alpha = pack_alpha(pair.left_mm, freq)
            elif label == "slope_right":
                alpha = pack_alpha(pair.right_mm, freq)
            elif label == "slope":
                alpha = pack_alpha(pair.left_mm, freq)
            else:
                alpha = base.get(label, 0.02)
            parts.append((area, alpha))
        out[freq] = eyring_t(volume, parts, freq)
    return out


def _table(columns: list[tuple[str, dict[float, float]]]) -> str:
    header = "| Hz | " + " | ".join(name for name, _ in columns) + " |"
    rule = "| --- | " + " | ".join("---:" for _ in columns) + " |"
    body = [
        "| {band:.0f} | {cells} |".format(
            band=band,
            cells=" | ".join(f"{curve[band]:.2f}" for _name, curve in columns),
        )
        for band in BANDS
    ]
    return "\n".join([header, rule, *body])


def _betas(mesh: Mesh, pair: Pair, freq: float) -> dict[str, complex]:
    variant = Variant(80, "as_built", True)
    labels = sorted({str(item) for item in mesh.labels.tolist()})
    out = {}
    for label in labels:
        if label == "slope_left":
            zeta = surface_impedance(pack(pair.left_mm), freq)
        elif label == "slope_right":
            zeta = surface_impedance(pack(pair.right_mm), freq)
        else:
            zeta = None
        if zeta is None:
            out.update(betas([label], freq, variant))
        else:
            out[label] = beta_from_impedance(zeta)
    return out


def _seat_power(field: Field, pair: Pair, freq: float, sub_hit, seat_hits) -> np.ndarray:
    beta = _betas(field.mesh, pair, freq)
    pressure = field.solve(freq, beta, {"sub": [(sub_hit, Q_SUB)]})["sub"]
    return np.array([abs(field.sample(pressure, hit)) ** 2 for hit in seat_hits])


def _plot_t60(furnished, empty, path: Path) -> None:
    import matplotlib

    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    fig, axes = plt.subplots(1, 2, figsize=(11.4, 4.8), sharey=True)
    for ax, curves, title in (
        (axes[0], furnished, "Furnished"),
        (axes[1], empty, "Empty"),
    ):
        for name, curve in curves:
            ax.semilogx(BANDS, [curve[band] for band in BANDS], lw=1.8, label=name)
        ax.axhspan(0.40, 0.60, color="#8fbf8f", alpha=0.25)
        ax.set_xlim(50, 4000)
        ax.set_xlabel("Hz")
        ax.set_title(title)
        ax.grid(True, which="both", alpha=0.3)
    axes[0].set_ylabel("T60 (s)")
    axes[0].legend(fontsize=8)
    fig.suptitle("NaturHeld only, rigid backing. Left = window slope, right = cabinet slope.")
    fig.tight_layout()
    fig.savefig(path, dpi=130)
    plt.close(fig)


def _plot_seats(names, levels, path: Path) -> None:
    """levels[variant, seat, peak] in dB re 80/80 three-seat mean at that peak."""
    import matplotlib

    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    fig, axes = plt.subplots(1, 3, figsize=(11.6, 4.4), sharey=True)
    x = np.arange(len(names))
    width = 0.25
    seat_names = ("TV end", "middle", "dining end")
    for ax, peak in zip(axes, PEAKS):
        index = PEAKS.index(peak)
        for seat in range(3):
            ax.bar(x + (seat - 1) * width, levels[:, seat, index], width=width, label=seat_names[seat])
        ax.axhline(0.0, color="#666", lw=0.7)
        ax.set_xticks(x, names, rotation=30, ha="right")
        ax.set_title(f"{peak:.0f} Hz")
        ax.grid(True, axis="y", alpha=0.3)
    axes[0].set_ylabel("dB re 80/80 three-seat mean")
    axes[0].legend(fontsize=7)
    fig.suptitle("Subwoofer at the three sofa seats")
    fig.tight_layout()
    fig.savefig(path, dpi=130)
    plt.close(fig)


def _bass(curve: dict[float, float]) -> float:
    return float(np.mean([curve[band] for band in (50.0, 63.0, 80.0)]))


def main() -> None:
    print("areas", flush=True)
    shape = load_shape()
    empty = split_slopes(mesh_room(shape, "as_built", False, 0.45), shape.x_false)
    furn = split_slopes(mesh_room(shape, "as_built", True, 0.45), shape.x_false)
    print(
        f"  window slope {furn.area_of('slope_left'):.2f} m², "
        f"cabinet slope {furn.area_of('slope_right'):.2f} m²",
        flush=True,
    )
    furn_curves = []
    empty_curves = []
    for pair in PAIRS:
        furn_curves.append((pair.name, _curve(pair, furn.areas_by_label(), furn.volume)))
        empty_curves.append((pair.name, _curve(pair, empty.areas_by_label(), empty.volume)))
        print(f"  {pair.name} bass {_bass(furn_curves[-1][1]):.3f}", flush=True)

    print("modal mesh", flush=True)
    fine = split_slopes(mesh_room(shape, "as_built", True, 0.22), shape.x_false)
    field = Field(fine)
    sub = next(marker for marker in shape.sources if marker.name == "sub")
    seats = [marker for marker in shape.receivers if marker.group == "sofa"]
    sub_hit = field.locate((sub.x, sub.y, sub.z))
    seat_hits = [field.locate((marker.x, marker.y, marker.z)) for marker in seats]
    if sub_hit is None or any(hit is None for hit in seat_hits):
        raise RuntimeError("sub or a seat is outside the mesh")

    # Reference levels first, so the others can be quoted against them.
    order = [pair for pair in PAIRS if pair.name == "80/80"] + [
        pair for pair in PAIRS if pair.name != "80/80"
    ]
    power = {pair.name: np.zeros((3, len(PEAKS))) for pair in PAIRS}
    for pair in order:
        for j, freq in enumerate(PEAKS):
            power[pair.name][:, j] = _seat_power(field, pair, freq, sub_hit, seat_hits)
            print(f"  fem {pair.name} {freq:.0f}", flush=True)
    ref = np.mean(power["80/80"], axis=0)
    levels = np.zeros((len(PAIRS), 3, len(PEAKS)))
    for i, pair in enumerate(PAIRS):
        levels[i] = 10.0 * np.log10(np.maximum(power[pair.name], 1e-30) / ref)

    # Swap of 60/100: more NaturHeld on the window side, away from the sub.
    swapped = Pair("100/60 swap", 100, 60)
    swap_power = np.zeros((3, len(PEAKS)))
    for j, freq in enumerate(PEAKS):
        swap_power[:, j] = _seat_power(field, swapped, freq, sub_hit, seat_hits)
        print(f"  fem swap {freq:.0f}", flush=True)
    swap_db = 10.0 * np.log10(np.maximum(swap_power, 1e-30) / ref)
    direct = levels[0]  # 60/100, more board on the cabinet side

    OUT.mkdir(parents=True, exist_ok=True)
    t60_path = OUT / "obyvak-asymmetric-t60.png"
    seat_path = OUT / "obyvak-asymmetric-seats.png"
    _plot_t60(furn_curves, empty_curves, t60_path)
    _plot_seats([pair.name for pair in PAIRS], levels, seat_path)

    lines = [
        "# Asymmetric slopes",
        "",
        "Left is the window slope, from the eave up to the false ridge. "
        "Right is the cabinet slope, from the ridge down to the soffit. "
        "The subwoofer sits against that cabinet wall, at the TV gable. "
        "In the cross-section the window slope is on the left and the cabinet slope on the right.",
        "",
        "Every slope face is StoSilent on NaturHeld, rigid-backed. "
        "`pack()` is `slope_stack`: no mineral wool in the room-facing layers. "
        "60/60, 80/80, 100/100 and 120/120 use that same stack on both sides. "
        "The asymmetric runs differ only in the NaturHeld thickness. "
        "Nothing is added behind the thinner board.",
        "",
        "Mineral wool behind the slope gypsum is not in the model. "
        "On the window slope that wool is 160 + 140 mm; on the cabinet slope it is 160 mm "
        "plus whatever is left. It sits behind the GKF, so the room does not hear it, "
        "and the ceiling stays symmetric. `plenum_wool` is a CAD volume for the material "
        "list only. No impedance function reads it. The older note about an 80 mm gap "
        "under the rafters is the same invisible layer, also excluded.",
        "",
        "Wool that is counted, on purpose, is not behind rigid gypsum. "
        "The soffit wool is behind the 40 mm NaturHeld face. "
        "The trap wool is behind the GKB membrane, which is the bass-trap leaf, not a rigid wall. "
        "Both stay at the drawing thicknesses from the previous run.",
        "",
        f"Window slope {furn.area_of('slope_left'):.1f} m², cabinet slope {furn.area_of('slope_right'):.1f} m², "
        "between the traps. Sofa, soffit wool and both traps stay as in the last run.",
        "",
        "## Furnished T60",
        "",
        _table(furn_curves),
        "",
        "## Empty T60",
        "",
        _table(empty_curves),
        "",
        "## Bass average, 50–80 Hz",
        "",
        "| Pair | Window mm | Cabinet mm | Furnished s | Empty s |",
        "| --- | ---: | ---: | ---: | ---: |",
    ]
    for pair, (_name, furn_c), (_n2, empty_c) in zip(PAIRS, furn_curves, empty_curves):
        lines.append(
            f"| {pair.name} | {pair.left_mm} | {pair.right_mm} | {_bass(furn_c):.2f} | {_bass(empty_c):.2f} |"
        )
    lines += [
        "",
        "## Subwoofer seats",
        "",
        "Decibels relative to the three-seat mean of 80/80 at the same frequency. "
        "Seats are TV end, middle, dining end.",
        "",
        "| Pair | 38 Hz | 58 Hz | 140 Hz |",
        "| --- | --- | --- | --- |",
    ]
    for i, pair in enumerate(PAIRS):
        cells = []
        for j in range(3):
            cells.append(
                ", ".join(f"{levels[i, seat, j]:+.1f}" for seat in range(3))
            )
        lines.append(f"| {pair.name} | {cells[0]} | {cells[1]} | {cells[2]} |")
    lines.append(
        "| 100/60, swapped | "
        + " | ".join(", ".join(f"{swap_db[seat, j]:+.1f}" for seat in range(3)) for j in range(3))
        + " |"
    )
    # Imbalance summary from the numbers.
    spread = float(np.max(np.abs(direct - swap_db)))
    cabinet_thicker = float(np.mean(direct))
    window_thicker = float(np.mean(swap_db))
    if spread < 1.0:
        side_sentence = (
            "One-sided absorption does not matter at these notes. "
            "The sub is in the cabinet-wall corner, but the two slopes cover the whole length, "
            "and the seats do not notice which side is thicker."
        )
    elif cabinet_thicker < window_thicker:
        side_sentence = (
            "The side nearer the sub does move these notes. "
            "Thicker NaturHeld on the cabinet slope is the quieter of the two arrangements."
        )
    else:
        side_sentence = (
            "The side nearer the sub does move these notes. "
            "Thicker NaturHeld on the window slope, away from the sub, is the quieter of the two arrangements."
        )
    lines += [
        "",
        "## What each one does",
        "",
    ]
    by_name = {name: curve for name, curve in furn_curves}
    base_bass = _bass(by_name["80/80"])
    ref100 = _bass(by_name["100/100"])
    for pair, (_n, curve) in zip(PAIRS, furn_curves):
        bass = _bass(curve)
        mid = float(np.mean([curve[500.0], curve[1000.0]]))
        if pair.name == "80/80":
            text = (
                f"80/80 is the drawing. Furnished bass {bass:.2f} s, mids {mid:.2f} s. "
                "Same dry mids as the last run, bass still about three times longer."
            )
        elif pair.name == "100/100":
            text = (
                f"100/100 is the previous recommendation. Furnished bass {bass:.2f} s "
                f"({bass - base_bass:+.2f} s against 80/80), mids {mid:.2f} s. "
                "The mids do not move."
            )
        elif pair.left_mm == pair.right_mm:
            text = (
                f"{pair.name} is NaturHeld only, rigid backing, both slopes {pair.left_mm} mm. "
                f"Furnished bass {bass:.2f} s ({bass - base_bass:+.2f} s against 80/80), mids {mid:.2f} s."
            )
        else:
            text = (
                f"{pair.name}: window slope {pair.left_mm} mm NaturHeld, "
                f"cabinet slope {pair.right_mm} mm, both rigid-backed, no wool in the pack. "
                f"Furnished bass {bass:.2f} s, against 80/80 {bass - base_bass:+.2f} s "
                f"and against 100/100 {bass - ref100:+.2f} s. Mids {mid:.2f} s."
            )
        lines.append(text)
        lines.append("")
    lines += [
        f"Swapping 60 and 100, so the thicker NaturHeld is on the window and away from the sub, "
        f"moves the seat levels by at most {spread:.1f} dB at 38, 58 and 140 Hz. "
        + side_sentence,
        "",
        "Eyring does see the mix, because 60 mm of NaturHeld is not the same absorber as "
        "100 mm. It does not see which side carries which thickness: the areas are equal, "
        "so 60/100 and 100/60 have the same decay. The seat levels say whether the sub, "
        "sitting on the cabinet side, notices the swap.",
        "",
        "![T60](obyvak-asymmetric-t60.png)",
        "",
        "![Seat levels](obyvak-asymmetric-seats.png)",
        "",
    ]
    text = "\n".join(lines) + "\n"
    path = OUT / "obyvak-asymmetric.md"
    path.write_text(text, encoding="utf-8")
    ARTIFACTS.mkdir(parents=True, exist_ok=True)
    for src in (path, t60_path, seat_path):
        (ARTIFACTS / src.name).write_bytes(src.read_bytes())
    print(path, flush=True)


if __name__ == "__main__":
    main()
