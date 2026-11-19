"""Guessed cable routes: valid ends, no diagonals, overrides applied.

Rules and assumptions: docs/electrical/CableRoutes.md.
"""

from blueprints import cable_routes as cr


def test_every_route_has_ends_and_points():
    data = cr.load_routes()
    ids = [r["id"] for r in data["routes"]]
    assert len(ids) == len(set(ids))
    boards = {b["id"] for b in data["boards"]}
    fixtures = cr._raw_fixtures()
    for route in data["routes"]:
        assert len(route["points"]) >= 2, route["id"]
        assert route["to"] in fixtures, route["id"]
        # From a board, or chained on from another fixture's box (C141 from C140-S).
        assert route["from"] in boards or route["from"] in fixtures, route["id"]


def test_main_runs_are_axis_aligned():
    for route in cr.load_routes()["routes"]:
        pts = route["points"]
        # The last leg of a tail may be a fixture's own lead, drawn straight.
        legs = list(zip(pts, pts[1:]))
        if route.get("tail") or route.get("lead"):
            legs = legs[:-1]
        for a, b in legs:
            # The 1.11 vault slopes (y 3.275-7.95): runs under it follow the slope.
            if min(a[2], b[2]) > 2.5 and all(3.2 <= p[1] <= 7.96 and p[0] < 6.5 for p in (a, b)):
                continue
            moving = sum(abs(x - y) > 1e-4 for x, y in zip(a, b))
            assert moving <= 1, (route["id"], a, b)


def test_cable_override_replaces_points_and_fixture_move_drags_the_end():
    routes = cr.load_routes()
    first = routes["routes"][0]
    edited = [[1, 2, 3], [1, 2, 4]]
    out = cr.resolve(routes, {"fixtures": {}, "cables": {first["id"]: {"points": edited}}}, raw={})
    assert out["routes"][0]["points"] == edited
    to = first.get("toBox") or first["to"]
    raw = cr._raw_fixtures()
    moved = cr.resolve(routes, {"fixtures": {to: {"Move": [0.1, 0, 0]}}, "cables": {}}, raw=raw)
    end = moved["routes"][0]["points"][-1]
    assert abs(end[0] - (first["points"][-1][0] + 0.1)) < 1e-6
    assert moved["routes"][0]["points"][1] == [round(v, 4) for v in first["points"][1]]


def test_viewer_json_is_current():
    import json

    assert json.loads(cr.VIEWER_JSON.read_text(encoding="utf-8")) == json.loads(json.dumps(cr.viewer_json(), ensure_ascii=False))
