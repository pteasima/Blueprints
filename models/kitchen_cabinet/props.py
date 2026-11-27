"""Read kitchen parameters and front-band specs from furnishings elements."""
from __future__ import annotations

from .hardware import (
    DRAWER_KINDS,
    IKEA_DEFAULTS_MM,
    PSET_BAY,
    PSET_DRAWERS,
    PSET_FRONTS,
    RUN_OBJECT_TYPE,
    TOL,
    ZONE_KINDS,
)
from .types import Zone


def _prop(element: dict, pset_name: str, key: str, default=None):
    for pset in element.get("PropertySets") or []:
        if pset.get("Name") != pset_name:
            continue
        props = pset.get("Properties") or {}
        if key in props:
            return props[key]
    return default


def has_drawers(element: dict | None) -> bool:
    """True when any band of the bay (or of any of its sections) is a drawer or a pull-out."""
    if not element:
        return False
    specs = [zone_spec(e) for e in section_elements(element)] or [zone_spec(element)]
    return any(kind in DRAWER_KINDS for spec in specs for kind, _h, _o in spec)


def has_fronts(element: dict | None) -> bool:
    """True when the bay describes its fronts (``Pset_Fronts`` or ``Pset_Drawers``)."""
    return bool(element) and (_prop(element, PSET_FRONTS, "Layout") is not None
                              or _prop(element, PSET_FRONTS, "Sections") is not None
                              or _prop(element, PSET_DRAWERS, "NominalHeights") is not None)


def section_widths(element: dict, width: float) -> list[float] | None:
    """``Pset_Fronts.Sections`` (mm, left to right as you face it): a count of
    equal sections (``"7"``) or widths in metres with at most one ``*``
    (``"0.6 0.6 0.3 0.6 *"``). The widths are the bay's outer width split at
    the section dividers' centres."""
    raw = _prop(element, PSET_FRONTS, "Sections")
    if raw is None:
        return None
    tokens = str(raw).split()
    if len(tokens) == 1 and tokens[0].isdigit():
        n = int(tokens[0])
        if n < 2:
            raise ValueError(f"{element['id']}: Sections {raw!r} needs at least 2")
        return [width / n] * n
    out = _nominals(" ".join(tokens), width)
    if len(out) < 2:
        raise ValueError(f"{element['id']}: Sections {raw!r} needs at least 2")
    return out


def section_element(element: dict, number: int) -> dict:
    """The yaml element one section reads its fronts from: ``Layout<N>``
    (else ``Layout``), ``Contents<N>`` (else none), ``Gridfinity``,
    ``BlumRangeOverride``, and the
    bay's ``Pset_Drawers``."""
    props = next((ps.get("Properties") or {} for ps in element.get("PropertySets") or []
                  if ps.get("Name") == PSET_FRONTS), {})
    layout = props.get(f"Layout{number}", props.get("Layout"))
    if layout is None:
        raise ValueError(f"{element['id']}: section {number} has no Layout{number} or Layout")
    sub = {"Layout": layout}
    for key in (f"Contents{number}",):
        if props.get(key) is not None:
            sub["Contents"] = props[key]
    if props.get("Gridfinity") is not None:
        sub["Gridfinity"] = props["Gridfinity"]
    # A bay's Blum override holds for each of its sections (2026-11-20 f).
    if props.get("BlumRangeOverride") is not None:
        sub["BlumRangeOverride"] = props["BlumRangeOverride"]
    psets = [{"Name": PSET_FRONTS, "Properties": sub}]
    # The bay's Pset_Drawers (Gridfinity, System) holds for every section.
    drawers = next((ps.get("Properties") for ps in element.get("PropertySets") or []
                    if ps.get("Name") == PSET_DRAWERS), None)
    if drawers:
        psets.append({"Name": PSET_DRAWERS, "Properties": dict(drawers)})
    return {"id": f"{element['id']}-S{number}", "Name": f"{element.get('Name', element['id'])} {number}",
            "PropertySets": psets}


def section_elements(element: dict) -> list[dict]:
    """The section elements of a bay with ``Pset_Fronts.Sections`` (else [])."""
    if _prop(element, PSET_FRONTS, "Sections") is None:
        return []
    widths = section_widths(element, float(element.get("Width") or 1.0) * 1000.0)
    return [section_element(element, k) for k in range(1, len(widths) + 1)]


def run_of(element: dict | None) -> str | None:
    return _prop(element, PSET_BAY, "Run") if element else None


def is_run(element: dict | None) -> bool:
    return bool(element) and element.get("ObjectType") == RUN_OBJECT_TYPE


def _params(*elements_and_psets) -> dict:
    """IKEA defaults, overridden in order by each (element, pset name)."""
    out = dict(IKEA_DEFAULTS_MM)
    for element, pset_name in elements_and_psets:
        for key in IKEA_DEFAULTS_MM:
            value = _prop(element, pset_name, key)
            if value is not None:
                out[key] = float(value) * 1000.0
    return out


def zone_spec(element: dict) -> list[tuple[str, str, dict]]:
    """A bay's bands, top to bottom: ``[(kind, height token, options)]``.

    ``Pset_Fronts.Layout`` is the general form: bands separated by ``|``,
    each ``<kind> <height> [key=value ...]``. The height is metres or ``*``
    (the rest of the carcass, at most one). Kinds:

    - ``drawer``: a drawer (front, box on full-extension slides);
    - ``pullout``: a full-height pull-out; ``items=shelves|bins``, ``n=N``;
    - ``door``: one hinged door, ``hinge=L|R`` as you face it, optional
      ``width=`` (metres, the rest of the band is a fixed filler on the
      ``filler=L|R`` side, default the hinge side), ``shelves=N``,
      ``first=`` (metres, first shelf above the band floor), ``racks=N``
      (door shelves);
    - ``doors``: a pair, left leaf hinged L, right leaf R; ``shelves=N``;
    - ``lift``: a Blum AVENTOS lift-up front, ``fitting=HF|HS|HL|HK|HK-S|HK-XS``
      (``AVENTOS``); HF is a bi-fold pair, ``upper=`` (metres) sets the
      upper front for an asymmetrical pair; ``angle=`` an opening-angle
      stop (HF: 116, 107, 97, 88, 81; default the largest). ``shelves=N``,
      ``first=`` as a door. The cabinet must be inside the fitting's Blum ranges;
    - ``flipout``: a bottom-hinged tilt-out front with a trash bin hanging
      from two hook-in brackets on the inside of the front, near the top.
      ``bin=W×D×H`` metres (default the Elletipi Cover Box Small 8 L,
      0.225×0.150×0.340), ``angle=`` the opening stop in degrees (if
      omitted, the minimum that puts the rear rim 8 mm in front of the
      worktop edge), ``clearance=`` metres under the worktop at the peak
      of the swing and past the worktop edge for that expose stop
      (default 0.008). The front rail is omitted so the bin can swing
      through the opening. There is no cradle and no inner shelf;
    - ``niche``: an appliance niche; the height is the *clear* niche height,
      the band adds one board under it; ``clear=`` (metres) narrows the
      opening with a packer on each side. The appliance names the bay and
      the band in its ``Pset_BuiltIn``;
    - ``front``: one plain slab, nothing decided behind it;
    - ``none``: an open band;
    - ``gap``: height only, no front or box. Used to hold a lower
      drawer's band when the drawer above grew (t972u: island D2/D3
      pending). No board is inserted around it; the next drawer's
      ``stack_top`` is the gap's floor so that box does not rise into
      the reserved band.

    Older forms still work: ``Pset_Drawers.NominalHeights`` (all drawers),
    ``Pset_KitchenBay.Front: none`` (no front) and nothing (one slab front).

    A bay with ``Pset_Fronts.Sections`` is split side by side first (see
    ``section_widths``); each section reads ``Layout<N>`` (else ``Layout``),
    via ``section_element``.
    """
    layout = _prop(element, PSET_FRONTS, "Layout")
    if layout:
        out = []
        for raw in str(layout).split("|"):
            tokens = raw.split()
            if len(tokens) < 2:
                raise ValueError(f"{element['id']}: bad Pset_Fronts band {raw!r}")
            kind, height, *rest = tokens
            if kind not in ZONE_KINDS:
                raise ValueError(f"{element['id']}: unknown band kind {kind!r}")
            opts = {}
            for tok in rest:
                if "=" not in tok:
                    raise ValueError(f"{element['id']}: band option {tok!r} needs key=value")
                k, v = tok.split("=", 1)
                opts[k] = v
            out.append((kind, height, opts))
        return out
    raw = _prop(element, PSET_DRAWERS, "NominalHeights")
    if raw is not None:
        return [("drawer", tok, {}) for tok in str(raw).split()]
    if str(_prop(element, PSET_BAY, "Front", "slab")).lower() == "none":
        return [("none", "*", {})]
    return [("front", "*", {})]


def zone_contents(element: dict) -> list[str]:
    raw = _prop(element, PSET_FRONTS, "Contents")
    if raw is None:
        raw = _prop(element, PSET_DRAWERS, "Contents", "")
    return [c.strip() for c in str(raw).split(";")] if str(raw).strip() else []


def _front_z0(p: dict, zone: Zone, carcass_z0: float) -> float:
    """Bottom of a decor front, mm. Normally a half-gap above the band.
    On a recessed toe-kick run with ``BottomFrontOverhang`` the lowest
    front hangs that many mm below the carcass floor so it can be opened
    with a foot (Petr, 2026-11-24, t947u)."""
    if p["BottomFrontOverhang"] > 0 and abs(zone.slot_z0 - carcass_z0) < TOL:
        return zone.slot_z0 - p["BottomFrontOverhang"]
    return zone.slot_z0 + p["FrontGap"] / 2.0


def zones(element: dict, carcass_height: float, board: float, z0: float) -> list[Zone]:
    """The bands laid out from the carcass bottom ``z0`` up (mm)."""
    spec = zone_spec(element)
    tokens = []
    for kind, height, _opts in spec:
        if height == "*":
            tokens.append("*")
        else:
            extra = board / 1000.0 if kind == "niche" else 0.0
            tokens.append(str(float(height) + extra))
    heights = _nominals(" ".join(tokens), carcass_height)
    contents = zone_contents(element)
    out = []
    top = z0 + carcass_height
    for index, ((kind, _h, opts), nominal) in enumerate(zip(spec, heights), start=1):
        content = contents[index - 1] if index - 1 < len(contents) else ""
        out.append(Zone(index, kind, nominal, top - nominal, top, opts, content))
        top -= nominal
    return out


def _nominals(raw: str, carcass_height: float) -> list[float]:
    """Top to bottom. ``*`` is the remainder of the carcass height."""
    tokens = str(raw).split()
    fixed = [float(t) * 1000.0 for t in tokens if t != "*"]
    rest = carcass_height - sum(fixed)
    if tokens.count("*") > 1:
        raise ValueError("Pset_Drawers NominalHeights allows one '*'")
    if "*" in tokens and rest <= 0:
        raise ValueError(f"drawers {fixed} do not fit the {carcass_height} carcass")
    if "*" not in tokens and abs(rest) > 0.5:
        raise ValueError(f"drawers sum {sum(fixed)} != carcass {carcass_height}")
    return [rest if t == "*" else float(t) * 1000.0 for t in tokens]
