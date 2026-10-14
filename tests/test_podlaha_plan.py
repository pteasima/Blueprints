"""Floor-build-up plan uses the workbook thicknesses and the model rooms."""

from blueprints.podlaha_plan import (
    COLOURS,
    DRAIN_MM,
    assemble,
    buildups,
    classify,
    load_workbook_rows,
    render_svg,
)


def test_workbook_rows_match_the_trades():
    rows = load_workbook_rows()
    by_kind = {}
    for row in rows:
        by_kind.setdefault(classify(row), row)
    assert by_kind["pu"]["eps_layers"] == (60, 60)
    assert by_kind["pu"]["screed_mm"] == 68
    assert by_kind["pu"]["finish_mm"] == 4
    assert by_kind["tile"]["screed_mm"] == 59
    assert by_kind["tile"]["finish_mm"] == 13
    assert by_kind["b120"]["eps_layers"] == (40, 40)
    assert by_kind["b120"]["screed_mm"] == 99
    assert by_kind["sh107"]["eps_layers"] == (60, 40)
    assert by_kind["sh107"]["screed_mm"] == 79
    assert by_kind["gar"]["eps_type"] == "EPS 150 S"
    assert by_kind["gar"]["eps_layers"] == (50, 40)
    assert by_kind["gar"]["screed_mm"] == 100
    assert by_kind["skl"]["board_mm"] == 0
    assert by_kind["skl"]["eps_layers"] == (100, 40)
    assert by_kind["skl"]["screed_mm"] == 100
    notes = " ".join(row["note"] for row in rows)
    assert "56" in notes and "53" in notes


def test_screed_trades_and_studio_assumption():
    builds = buildups()
    assert builds["b120"].screed_trade == "Harvalík"
    assert builds["b120"].screed_drain_mm == DRAIN_MM["1.20"]
    assert builds["tile"].screed_trade == "Harvalík"
    assert builds["pu"].screed_trade == "Harvalík"
    assert builds["gar"].screed_trade == "Harvalík"
    assert builds["sh107"].screed_trade == "Doskočil"
    assert builds["sh107"].screed_drain_mm == DRAIN_MM["1.07-shower"]
    shower = builds["sh121"]
    assert shower.screed_trade == "Doskočil"
    assert shower.eps_layers == (60, 40)
    assert shower.screed_mm == 79
    assert shower.screed_drain_mm == 66.5
    assert "předpoklad" in shower.lines()[-1]
    assert "Doskočil" in shower.lines()[-2]
    assert all("Systémová deska" not in line for line in builds["skl"].lines()[:3])
    assert any("bez systémové desky" in line for line in builds["skl"].lines())


def test_rooms_and_showers_come_from_the_model():
    plan = assemble()
    by_id = {area.area_id: area for area in plan.areas}
    assert set(by_id) >= {f"1.{number:02d}" for number in range(1, 24)} - {"1.07", "1.21"}
    assert "1.07" in by_id and "1.07s" in by_id
    assert "1.21" in by_id and "1.21s" in by_id
    assert by_id["1.07s"].kind == "sh107"
    assert abs(by_id["1.07s"].polygon.area - 2.42) < 0.05
    assert by_id["1.07"].kind == "tile"
    assert by_id["1.07"].polygon.intersection(by_id["1.07s"].polygon).area < 0.02
    assert by_id["1.20"].kind == "b120"
    assert "Harvalík" in " ".join(by_id["1.20"].lines)
    assert by_id["1.21s"].assumption
    assert by_id["1.21s"].kind == "sh121"
    assert abs(by_id["1.21s"].polygon.area - 1.0) < 0.05
    assert plan.studio_shower_corner == "SZ"
    assert by_id["1.21"].polygon.intersection(by_id["1.21s"].polygon).area < 0.02
    assert by_id["1.16"].kind == "gar" and by_id["1.17"].kind == "gar"
    assert by_id["1.18"].kind == "skl"
    assert by_id["1.23"].kind == "pu"
    # Clear floor from the wall model, not a second copy of the ZTI table.
    assert abs(by_id["1.01"].polygon.area - 19.98) < 0.2
    assert abs(by_id["1.12"].polygon.area - 13.67) < 0.15
    assert abs(by_id["1.22"].polygon.area - 3.95) < 0.15
    assert abs(by_id["1.23"].polygon.area - 20.03) < 0.3


def test_drawing_names_every_trade():
    svg = render_svg(assemble())
    for word in ("Rigl", "Vyslyšel", "Harvalík", "Hanzlík", "Doskočil", "✓", "severozápadním"):
        assert word in svg
    for colour in COLOURS.values():
        assert colour in svg
    assert "EPS EPS" not in svg
    assert svg.count("<svg") == 1
    # One layer list per build-up. Every stack starts with the same line.
    assert svg.count("hydroizolace 8 mm") == len(COLOURS)
    assert svg.count("Litý beton 68 mm") == 1
    assert svg.count("EPS 100 S 40+40 mm") == 1
    plan = assemble()
    for area in plan.areas:
        assert area.room in svg
        assert area.name.split()[0] in svg
    assert svg.count("sprcha") >= 2
