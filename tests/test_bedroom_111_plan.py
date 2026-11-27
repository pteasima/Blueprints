"""The 1.11 plan follows the sketch rules and does not move the 3D origins."""

from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from bedroom_111 import device_records  # noqa: E402
from bedroom_111_geometry import contains  # noqa: E402
from bedroom_111_plan import (  # noqa: E402
    PLAN_SVG,
    bed_outline,
    envelope,
    marks,
    render_svg,
    write_outputs,
)


def test_the_three_doors_are_the_model():
    from bedroom_111_geometry import openings

    doors = {item.id: item.kind for item in openings() if item.kind != "window"}
    assert set(doors) == {"OP03", "OP06", "OP09"}
    assert doors["OP03"] == "pocket"
    assert set(doors.values()) <= {"pocket", "hinged"}



def test_every_yaml_device_is_on_the_plan_and_ids_are_unique():
    drawn = [mark.current_id for mark in marks() if mark.current_id]
    assert drawn == list(dict.fromkeys(drawn))
    assert set(drawn) == {record["id"] for record in device_records()}
    proposed = [mark.proposed_id for mark in marks()]
    assert proposed == list(dict.fromkeys(proposed))


def test_rules_put_devices_on_the_right_side_of_the_wall():
    box = envelope()
    stacks: dict[str, set[tuple[float, float]]] = {}
    for mark in marks():
        if mark.stack:
            stacks.setdefault(mark.stack, set()).add((mark.x, mark.y))
        if mark.place == "exterior":
            outside = mark.x < box["west_out"] or mark.y < box["south_out"]
            assert outside, mark.proposed_id
            assert not contains(mark.x, mark.y)
        elif mark.place == "wall":
            on_face = (
                mark.x == pytest.approx(box["west"])
                or mark.x == pytest.approx(box["east"])
                or mark.x == pytest.approx(box["entry_east"])
                or mark.y == pytest.approx(box["south"])
                or mark.y == pytest.approx(box["north"])
            )
            assert on_face, mark.current_id
        elif mark.place == "frame":
            on_opening = mark.y == pytest.approx(box["south"]) or (
                mark.x == pytest.approx(box["entry_east"]) and mark.y == pytest.approx(9.25)
            )
            assert on_opening, mark.current_id
        elif mark.place == "corridor":
            assert mark.x > box["entry_east"]
        elif mark.place in {"ceiling", "bed"}:
            assert contains(mark.x, mark.y), mark.current_id
    for name, points in stacks.items():
        assert len(points) == 1, name
    # Blind motors are outside. Contacts are not.
    for mark in marks():
        if mark.kind == "actuator":
            assert mark.place == "exterior"
        if mark.current_id in {"C9-M", "C32-M"}:
            assert mark.place == "frame"


def test_bed_outline_is_inside_the_room():
    x0, y0, x1, y1 = bed_outline()
    box = envelope()
    assert box["west"] < x0 < x1 <= box["east"]
    assert box["south"] < y0 < y1 < box["north"]
    svg = render_svg()
    assert "UNFINISHED" not in svg



def test_published_plan_matches_the_renderer():
    svg = render_svg()
    assert PLAN_SVG.is_file()
    assert PLAN_SVG.read_text(encoding="utf-8") == svg
    for record in device_records():
        assert record["id"] in svg



def test_write_outputs_round_trip(tmp_path: Path):
    paths = write_outputs(
        svg_path=tmp_path / "plan.svg",
        png_path=tmp_path / "plan.png",
        html_path=tmp_path / "1.11.html",
    )
    assert paths["png"].stat().st_size > 10_000
    assert "1.11-XR1" in paths["naming"].read_text(encoding="utf-8")
