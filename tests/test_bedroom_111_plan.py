"""The 1.11 plan follows the sketch rules and does not move the 3D origins."""

from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from bedroom_111 import SOURCE_PATH, device_records  # noqa: E402
from bedroom_111_plan import (  # noqa: E402
    PLAN_HTML,
    PLAN_SVG,
    bed_outline,
    envelope,
    marks,
    render_svg,
    write_outputs,
)


def test_every_yaml_device_is_on_the_plan_and_ids_are_unique():
    drawn = [mark.current_id for mark in marks() if mark.current_id]
    assert drawn == list(dict.fromkeys(drawn))
    assert set(drawn) == {record["id"] for record in device_records()}
    proposed = [mark.proposed_id for mark in marks()]
    assert proposed == list(dict.fromkeys(proposed))


def test_rules_put_devices_on_the_right_side_of_the_wall():
    box = envelope()
    inner = (
        box["west"] - 1e-6,
        box["south"] - 1e-6,
        box["east"] + 1e-6,
        box["north"] + 1e-6,
    )
    stacks: dict[str, set[tuple[float, float]]] = {}
    for mark in marks():
        if mark.stack:
            stacks.setdefault(mark.stack, set()).add((mark.x, mark.y))
        if mark.place == "exterior":
            outside = mark.x < box["west_out"] or mark.y < box["south_out"]
            assert outside, mark.proposed_id
            assert not (inner[0] < mark.x < inner[2] and inner[1] < mark.y < inner[3])
        elif mark.place == "wall":
            on_face = (
                mark.x == pytest.approx(box["west"])
                or mark.x == pytest.approx(box["east"])
                or mark.y == pytest.approx(box["south"])
                or mark.y == pytest.approx(box["north"])
            )
            assert on_face, mark.current_id
        elif mark.place == "frame":
            on_opening_face = mark.y == pytest.approx(box["south"]) or mark.y == pytest.approx(
                box["north"]
            )
            assert on_opening_face, mark.current_id
        elif mark.place == "corridor":
            assert mark.y > box["north"]
        elif mark.place == "ceiling":
            assert inner[0] < mark.x < inner[2]
            assert inner[1] < mark.y < inner[3]
        elif mark.place == "bed":
            assert inner[0] < mark.x < inner[2]
            assert inner[1] < mark.y < inner[3]
    for name, points in stacks.items():
        assert len(points) == 1, name
    # Blind motors are outside. Contacts are not.
    for mark in marks():
        if mark.kind == "actuator":
            assert mark.place == "exterior"
        if mark.current_id in {"C9-M", "C32-M"}:
            assert mark.place == "frame"


def test_bed_outline_is_inside_the_room_and_not_from_furnishings():
    x0, y0, x1, y1 = bed_outline()
    box = envelope()
    assert box["west"] < x0 < x1 < box["east"]
    assert box["south"] < y0 < y1 < box["north"]
    text = (ROOT / "inputs" / "ground_floor" / "furnishings.yaml").read_text(encoding="utf-8")
    assert "SP-1.11" not in text
    bed = (ROOT / "inputs" / "ground_floor" / "bedroom-1.11.yaml").read_text(encoding="utf-8")
    assert "Status: UNFINISHED" in bed
    assert "Placeholder: true" in bed
    svg = render_svg()
    assert "UNFINISHED" in svg
    assert "placeholder furniture" in svg


def test_published_plan_matches_the_renderer_and_names_both_schemes():
    svg = render_svg()
    assert PLAN_SVG.is_file()
    assert PLAN_SVG.read_text(encoding="utf-8") == svg
    assert "1 m" in svg
    for record in device_records():
        assert record["id"] in svg
    page = PLAN_HTML.read_text(encoding="utf-8")
    assert "1.11-L1" in page
    assert "C11-S" in page
    assert "UNFINISHED placeholder" in page
    assert "Where is the other 2.44" in page
    # The 3D file still carries the first-pass origins. This drawing must not be that pass.
    yaml_text = SOURCE_PATH.read_text(encoding="utf-8")
    assert "Origin: [0.72, 7.57]" in yaml_text
    assert "C11-S" in yaml_text


def test_write_outputs_round_trip(tmp_path: Path):
    paths = write_outputs(
        svg_path=tmp_path / "plan.svg",
        png_path=tmp_path / "plan.png",
        html_path=tmp_path / "1.11.html",
    )
    assert paths["png"].stat().st_size > 10_000
    assert "1.11-XR1" in paths["naming"].read_text(encoding="utf-8")
