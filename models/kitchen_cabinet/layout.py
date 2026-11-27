"""Build every kitchen run in a furnishings document."""
from __future__ import annotations

from .builder import _Builder
from .geometry import _near
from .hardware import BAY_LISTS, EXTERNAL_LISTS, KIND_NICHE, PSET_BAY, PSET_BUILTIN, PSET_RUN, PSET_SINK
from .props import _params, _prop, is_run, run_of
from .types import Bay, Frame, Run, _unit
from .worktop import _box_plan, _join_worktops, _sink


# --- layout ------------------------------------------------------------------


def _bay(element: dict, frame: Frame) -> Bay:
    ox, oy = (float(v) * 1000.0 for v in element["Origin"])
    rx, ry = _unit(element.get("RefDirection"))
    nx, ny = -ry, rx
    w, d, h = (float(element[k]) * 1000.0 for k in ("Width", "Depth", "Height"))
    corners = [frame.local(ox + rx * x + nx * y, oy + ry * x + ny * y) for x in (0, w) for y in (0, d)]
    a_vals = [p[0] for p in corners]
    c_vals = [p[1] for p in corners]
    vx, vy = frame.v
    front_low = (nx * vx + ny * vy) > 0  # bay depth runs toward +c: front is the c0 face
    if abs(abs(rx * frame.ux + ry * frame.uy) - 1.0) > 1e-6:
        raise ValueError(f"{element['id']} is not parallel to its run")
    return Bay(
        id=element["id"],
        element=element,
        a0=min(a_vals),
        a1=max(a_vals),
        c0=min(c_vals),
        c1=max(c_vals),
        front_low=front_low,
        z_base=float(element.get("Elevation") or 0.0) * 1000.0,
        height=h,
        niche=_prop(element, PSET_BAY, "Kind") == KIND_NICHE,
    )


def runs(doc: dict) -> list[Run]:
    """Every kitchen run in a furnishings document, fully laid out."""
    elements = [e for key in BAY_LISTS for e in (doc.get(key) or [])]
    run_elements = [e for e in elements if is_run(e)]
    out = []
    for run_el in run_elements:
        bay_els = [e for e in elements if run_of(e) == run_el["id"]]
        if not bay_els:
            raise ValueError(f"{run_el['id']} has no bays")
        first = bay_els[0]
        ox, oy = (float(v) * 1000.0 for v in first["Origin"])
        ux, uy = _unit(first.get("RefDirection"))
        frame = Frame(ox, oy, ux, uy)
        params = _params((run_el, PSET_RUN))
        bays = [_bay(e, frame) for e in bay_els]
        run = Run(run_el["id"], run_el, frame, params, bays)
        sinks = []
        for key in EXTERNAL_LISTS:
            for ext in doc.get(key) or []:
                if not all(ext.get(k) is not None for k in ("Origin", "Width", "Depth", "Height")):
                    continue
                pts, (ez0, ez1), (rx, ry), (w, d) = _box_plan(ext)
                cx = sum(p[0] for p in pts) / 4.0
                cy = sum(p[1] for p in pts) / 4.0
                ca, cc = frame.local(cx, cy)
                for bay in bays:
                    inside = bay.a0 < ca < bay.a1 and bay.c0 < cc < bay.c1
                    # Inside the bay, or standing on its counter (a kettle, a grinder).
                    overlaps = (ez0 < bay.z_base + bay.height and ez1 > bay.z_base) or _near(ez0, bay.z_base + bay.height)
                    if inside and overlaps:
                        bay.external.append(ext["id"])
                if ext.get("PredefinedType") == "SINK" and _prop(ext, PSET_SINK, "BowlWidth") is not None:
                    sink = _sink(ext, frame, (ca, cc), (rx, ry), ez1)
                    loc = [frame.local(x, y) for x, y in pts]
                    sink["element"] = ext
                    sink["box"] = (min(q[0] for q in loc), max(q[0] for q in loc),
                                   min(q[1] for q in loc), max(q[1] for q in loc), ez0, ez1)
                    sinks.append(sink)
        above = []
        for e in elements + [x for key in EXTERNAL_LISTS for x in (doc.get(key) or [])]:
            if e is run_el or run_of(e) == run_el["id"] or not float(e.get("Elevation") or 0.0) > 0:
                continue
            if not all(e.get(k) is not None for k in ("Origin", "Width", "Depth", "Height")):
                continue
            pts, (ez0, _ez1), _r, _wd = _box_plan(e)
            loc = [frame.local(x, y) for x, y in pts]
            above.append((min(q[0] for q in loc), max(q[0] for q in loc),
                          min(q[1] for q in loc), max(q[1] for q in loc), ez0, e["id"]))
        builtins = [x for key in EXTERNAL_LISTS for x in (doc.get(key) or [])
                    if _prop(x, PSET_BUILTIN, "Kind") is not None]
        sanitary = {x["id"] for x in (doc.get("sanitaryTerminals") or [])}
        _Builder(run, sinks, above, builtins, sanitary).build()
        out.append(run)
    _join_worktops(out)
    return out


def bay_summary(run: Run) -> list[dict]:
    """Per-bay clear widths and member lists, for docs and previews."""
    return [
        {
            "id": b.id,
            "width": b.width,
            "clear": None if b.niche else b.clear_width,
            "members": list(b.members),
            "external": list(b.external),
        }
        for b in run.bays
    ]
