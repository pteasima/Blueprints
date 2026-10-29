"""Wave-acoustics checks that stay small enough for the default suite."""

from __future__ import annotations

import math

import pytest

from blueprints.acoustics.layers import surface_impedance
from blueprints.acoustics.obyvak import Resistivity, slope_stack
from blueprints.acoustics.roomwave.boundaries import impedance, membrane_impedance, passive
from blueprints.acoustics.roomwave.geometry import Variant, load_shape
from blueprints.acoustics.roomwave.helmholtz import Field
from blueprints.acoustics.roomwave.mesh import mesh_room
from blueprints.acoustics.roomwave.metrics import choose_thickness
from blueprints.acoustics.roomwave.rays import shoebox_t60
from blueprints.acoustics.roomwave.validate import (
    box_mode_errors,
    tube_relative_error,
    uniform_sabine_error,
)


def test_box_modes_stay_near_the_analytic_values():
    rows = box_mode_errors(h=0.5, count=4)
    assert len(rows) >= 4
    for _expect, _got, error in rows:
        assert error < 0.03


def test_impedance_tube_matches_the_closed_form():
    assert tube_relative_error(h=0.1) < 0.04


def test_uniform_pressure_reproduces_the_sabine_factor():
    fem, sabine = uniform_sabine_error(h=0.5)
    assert abs(fem - sabine) / sabine < 0.02


def test_room_mesh_keeps_the_soffit_step_and_the_volume():
    shape = load_shape()
    empty = mesh_room(shape, "as_built", False, 0.7)
    analytic = shape.analytic_volume("as_built")
    assert abs(empty.volume - analytic) / analytic < 0.02
    assert empty.area_of("soffit") > 8.0
    assert empty.area_of("slope") > 50.0
    assert empty.area_of("living_trap") > 5.0
    removed = mesh_room(shape, "removed", False, 0.7)
    assert removed.area_of("soffit") == 0.0
    assert removed.area_of("lid") > 3.0
    assert abs(removed.volume - shape.analytic_volume("removed")) / shape.analytic_volume("removed") < 0.02
    furnished = mesh_room(shape, "as_built", True, 0.7)
    assert furnished.volume < empty.volume - 6.0
    assert furnished.area_of("sofa") > 8.0
    field = Field(furnished)
    for marker in list(shape.sources) + list(shape.receivers):
        assert field.locate((marker.x, marker.y, marker.z)) is not None


def test_slope_impedance_matches_the_layer_stack():
    variant = Variant(80, "as_built", True)
    res = Resistivity()
    stack = slope_stack(0.080, 0.004, res)
    expect = surface_impedance(stack, 100.0)
    got = impedance("slope", 100.0, variant)
    assert abs(got - expect) / abs(expect) < 1e-9
    assert passive(got)


def test_membrane_impedance_is_passive_at_bass():
    for freq in (40.0, 63.0, 100.0):
        kitchen = membrane_impedance("kitchen", freq)
        living = membrane_impedance("living", freq)
        assert passive(kitchen) and kitchen.real > 0.0
        assert passive(living) and living.real > 0.0


def test_thickness_choice_keeps_80_when_the_steps_are_inaudible():
    rows = [{"thickness_mm": mm, "t_bass": 0.62, "smooth": 1.2} for mm in (60, 80, 100, 120)]
    assert choose_thickness(rows) == (80, "inaudible")


def test_thickness_choice_keeps_the_drawing_when_thicker_board_only_dries_the_bass():
    # The furnished obývák case: every step is audible on T60, smoothness does not move,
    # and 80 mm is already inside 0.40–0.90 s.
    rows = [
        {"thickness_mm": 60, "t_bass": 0.53, "smooth": 1.72},
        {"thickness_mm": 80, "t_bass": 0.48, "smooth": 1.72},
        {"thickness_mm": 100, "t_bass": 0.44, "smooth": 1.69},
        {"thickness_mm": 120, "t_bass": 0.40, "smooth": 1.64},
    ]
    assert choose_thickness(rows) == (80, "drawing")


def test_thickness_choice_leaves_a_boomy_room_toward_the_window():
    rows = [
        {"thickness_mm": 60, "t_bass": 1.40, "smooth": 2.0},
        {"thickness_mm": 80, "t_bass": 1.15, "smooth": 1.8},
        {"thickness_mm": 100, "t_bass": 0.72, "smooth": 1.4},
        {"thickness_mm": 120, "t_bass": 0.58, "smooth": 1.3},
    ]
    # 100 and 120 are inside 0.40–0.90 s. 0.58 is closer to 0.60 than 0.72.
    assert choose_thickness(rows) == (120, "pleasant")


def test_sofa_and_shelf_stay_quiet_at_bass():
    from blueprints.acoustics.roomwave.boundaries import (
        impedance,
        normal_alpha,
        shelf_alpha,
        sofa_alpha,
    )
    from blueprints.acoustics.roomwave.helmholtz import beta_from_impedance

    variant = Variant(80, "as_built", True)
    assert 0.10 <= sofa_alpha(63.0) <= 0.20
    assert 0.60 <= sofa_alpha(500.0) <= 0.80
    assert sofa_alpha(4000.0) >= 0.55
    # β = α/4, so the energy decay sees this Sabine α rather than a wool block.
    assert 4.0 * beta_from_impedance(impedance("sofa", 63.0, variant)).real == pytest.approx(
        sofa_alpha(63.0)
    )
    assert normal_alpha(impedance("rug", 63.0, variant)) < 0.05
    assert 0.08 <= shelf_alpha(63.0) <= 0.20
    assert shelf_alpha(4000.0) > 0.40


def test_layout_keeps_the_solid_pieces_and_drops_the_open_ones():
    shape = load_shape()
    names = {box.name for box in shape.boxes}
    assert names <= {"sofa", "shelf", "tall", "kitchen"}
    assert names.isdisjoint({"hood", "chair", "island", "table", "fridge", "oven"})
    sofa = [box for box in shape.boxes if box.name == "sofa"]
    assert max(box.x1 for box in sofa) - min(box.x for box in sofa) == pytest.approx(4.0)
    assert max(box.y1 for box in sofa) - min(box.y for box in sofa) == pytest.approx(4.0)
    talker = next(marker for marker in shape.sources if marker.name == "talker")
    assert talker.x == pytest.approx(3.00)
    assert talker.y == pytest.approx(5.425)
    assert talker.z == pytest.approx(1.50)
    dining = next(marker for marker in shape.receivers if marker.name == "dining")
    island = next(marker for marker in shape.receivers if marker.name == "island")
    assert dining.z == pytest.approx(1.15)
    assert island.z == pytest.approx(1.15)
    for marker in (*shape.sources, *shape.receivers):
        for box in shape.boxes:
            inside = (
                box.x < marker.x < box.x1
                and box.y < marker.y < box.y1
                and box.z < marker.z < box.z1
            )
            assert not inside, marker.name


def test_shoebox_rays_land_near_sabine():
    got = shoebox_t60(5.0, 4.0, 3.0, 0.25, n_rays=400)
    volume = 60.0
    surface = 2.0 * (5 * 4 + 5 * 3 + 4 * 3)
    expect = 0.161 * volume / (0.25 * surface)
    assert math.isfinite(got)
    assert abs(got - expect) / expect < 0.40
