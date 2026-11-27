"""Field devices of every ground-floor room except the bedroom 1.11.

Sources: ``inputs/ground_floor/electrical-<room>.yaml``, one yaml-ifc file per
room in the bedroom format (``bedroom-1.11.yaml``). Each file is loaded through
``blueprints.fixture_overrides.load_fixture_document`` so edit-mode overrides
(docs/electrical/EditMode.md) reach the export.

Boxed devices become the extrusions ``yaml_ifc`` writes, as in
``bedroom_111.parts``. LED strips have no box; ``Pset_YamlIfc.Path`` holds
their runs as ``x,y,z;x,y,z`` points, runs separated by ``|``, and the viewer
gets one thin box per leg.

LED panels under the wall cabinets (2026-11-22 a) have no box either:
``Pset_YamlIfc.PanelRun`` names the kitchen run whose cabinet bottoms carry
the LED fields (``Pset_KitchenRun.LedPanels``), and the light is drawn as
those fields' opal diffusers, so it follows the cabinets
(``models/kitchen_cabinet.py``, ``LedField``).

    python -m blueprints.export ground_floor
"""

from __future__ import annotations

import math
from pathlib import Path

from yaml_ifc import validation_errors
from yaml_ifc.to_ifc import build_ifc

from blueprints.fixture_overrides import load_fixture_document

from blueprints.ifc_helpers import _LIST_CLASS, _axis_box, _pset_props, _solid_from_product

INPUTS = Path(__file__).resolve().parents[1] / "inputs" / "ground_floor"
MM = 1000.0
STRIP_SIZE = 0.012

# Viewer label per YAML list. Gutter heating is an electric appliance; it is
# drawn in the actuator colour.
DEVICE_LISTS = (
    ("lightFixtures", "light"),
    ("switchingDevices", "switch"),
    ("sensors", "sensor"),
    ("outlets", "outlet"),
    ("actuators", "actuator"),
    ("electricAppliances", "actuator"),
)


def source_paths() -> list[Path]:
    """Every per-room device file, sorted by room number."""
    return sorted(INPUTS.glob("electrical-*.yaml"))


def room_of(path: Path) -> str:
    return path.stem.removeprefix("electrical-")


def load_document(path: Path) -> dict:
    """The room's device YAML with Petr's edit-mode overrides applied."""
    return load_fixture_document(path)


def device_records(doc: dict) -> list[dict]:
    records = []
    for key, label in DEVICE_LISTS:
        for element in doc.get(key) or []:
            records.append({**element, "list": key, "label": label})
    return records


def strip_runs(element: dict) -> list[list[tuple[float, float, float]]]:
    """Runs of a path strip, metres. Empty when the element has no ``Path``."""
    text = str(_pset_props(element).get("Path") or "").strip()
    runs = []
    for run in text.split("|"):
        points = []
        for point in run.split(";"):
            point = point.strip()
            if not point:
                continue
            x, y, z = (float(value) for value in point.split(","))
            points.append((x, y, z))
        if len(points) >= 2:
            runs.append(points)
    return runs


_RUNS: dict | None = None
_RUNS_LIST: list | None = None


def share_kitchen_runs(runs: list) -> None:
    """Reuse runs already built by the ground-floor export.

    ``kitchen_cabinet.runs`` is about 0.3 s. The living-room LED panels need
    the same layout the furnishings builder just computed, so the export
    hands that list over instead of loading furnishings.yaml again.
    """
    global _RUNS, _RUNS_LIST
    _RUNS_LIST = list(runs)
    _RUNS = {run.id: run for run in _RUNS_LIST}


def shared_kitchen_runs() -> list | None:
    return _RUNS_LIST


def _kitchen_runs() -> dict:
    if _RUNS is None:
        import ground_floor  # late: ground_floor imports this module
        import kitchen_cabinet as kc

        share_kitchen_runs(kc.runs(ground_floor.load_furnishings()))
    return _RUNS


def panel_rects(element: dict) -> list[tuple[float, float, float, float, float, float]]:
    """World boxes (x0, y0, z0, x1, y1, z1, metres) of the diffusers of a
    ``PanelRun`` light, one per LED field. Empty when there is no PanelRun."""
    run_id = _pset_props(element).get("PanelRun")
    if not run_id:
        return []
    run = _kitchen_runs().get(str(run_id))
    if run is None:
        raise ValueError(f"{element['id']}: PanelRun {run_id} is not a kitchen run")
    if not run.led_fields:
        raise ValueError(f"{element['id']}: kitchen run {run_id} has no LED fields (Pset_KitchenRun.LedPanels)")
    out = []
    for f in run.led_fields:
        a0, a1, c0, c1, z0, z1 = f.diffuser
        pts = [run.frame.world(a, c, 0.0)[:2] for a in (a0, a1) for c in (c0, c1)]
        xs = [q[0] for q in pts]
        ys = [q[1] for q in pts]
        out.append((min(xs) / MM, min(ys) / MM, z0 / MM, max(xs) / MM, max(ys) / MM, z1 / MM))
    return out


def _panel_parts(element: dict) -> list:
    return [_axis_box((x0, y0, z0), (1.0, 0.0), (x1 - x0, y1 - y0, z1 - z0), element["id"])
            for x0, y0, z0, x1, y1, z1 in panel_rects(element)]


def _strip_parts(element: dict) -> list:
    """One thin box per leg, centred on the leg. Legs are level (one z)."""
    found = []
    half = STRIP_SIZE / 2.0
    for run in strip_runs(element):
        for (x0, y0, z0), (x1, y1, _z1) in zip(run, run[1:]):
            length = math.hypot(x1 - x0, y1 - y0)
            if length < 1e-6:
                continue
            ux, uy = (x1 - x0) / length, (y1 - y0) / length
            # Local +Y is +90° from +X; start half a profile to the right.
            origin = (x0 + uy * half, y0 - ux * half, z0)
            found.append(_axis_box(origin, (ux, uy), (length, STRIP_SIZE, STRIP_SIZE), element["id"]))
    return found


def room_parts(path: Path) -> list:
    doc = load_document(path)
    if not any(doc.get(key) for key, _label in DEVICE_LISTS):
        return []
    model = build_ifc(doc)
    errors = validation_errors(model)
    if errors:
        raise ValueError(f"{path.name} failed yaml-ifc validation: " + "; ".join(errors))
    found = []
    labels = {}
    for key, label in DEVICE_LISTS:
        ifc_class = _LIST_CLASS[key]
        if ifc_class in labels:
            continue
        labels[ifc_class] = label
        for product in model.by_type(ifc_class):
            part = _solid_from_product(product, label, key)
            if part is not None:
                found.append(part)
    for element in doc.get("lightFixtures") or []:
        found.extend(_strip_parts(element))
        found.extend(_panel_parts(element))
    return found


def parts() -> list:
    found = []
    for path in source_paths():
        found.extend(room_parts(path))
    return found
