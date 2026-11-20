"""Parametric links between furnishings (``Pset_Links``), resolved on load.

An element may leave out a placement or size and say where it comes from
instead, so the number lives in one place (Petr, 2026-11-20 c: "That tall
corner cabinet in living room should be the exact width of the couch
armrest."). ``Pset_Links`` maps a target to an expression:

    - Name: Pset_Links
      Properties:
        Width: "FN-ARME.Width"
        East: "FN-ARME.East"

Targets: ``X``, ``Y`` (the ``Origin``), ``Width``, ``Depth``, ``Height``,
``Elevation``; ``East`` (the +x face: sets ``X`` from ``Width`` when
``Width`` is linked, else ``Width`` from ``X``),
``Top`` (sets ``Height`` from ``Elevation``), and ``<Pset>.<Property>`` (a
property of one of the element's own property sets). Expressions are
arithmetic (``+ - * / ( )``, numbers) over references ``<id>.<attr>`` with
attr ``X Y Width Depth Height Elevation East North Top`` (metres), or a
bare attr of the element itself. ``East``/``North`` need an unrotated box
(no ``RefDirection`` or ``[1, 0]``). Also ``<id>.<Pset>.<Property>`` (a
number in another element's property set) and ``mat:<material-id>.Thickness``
(``thickness_m`` of a material in inputs/materials/catalogue.yaml, metres;
2026-11-20 f: every Silestone part takes its 20 mm from
``silestone-blanco-maple``).

Everything resolves in dependency order; a cycle or a missing reference
stops the load. The YAML file stays a valid yaml-ifc document (linked
values are simply absent there); ``ground_floor.load_furnishings`` returns
the resolved document.
"""

from __future__ import annotations

import ast
import operator
import re

PSET = "Pset_Links"
ATTRS = ("X", "Y", "Width", "Depth", "Height", "Elevation", "East", "North", "Top")
LISTS = ("furniture", "systemFurniture", "electricAppliances", "sanitaryTerminals", "coverings")
_REF = re.compile(r"\b([A-Z][A-Za-z0-9]*(?:-[A-Za-z0-9]+)+)\.(X|Y|Width|Depth|Height|Elevation|East|North|Top)\b")
_PREF = re.compile(r"\b([A-Z][A-Za-z0-9]*(?:-[A-Za-z0-9]+)+)\.(Pset_[A-Za-z0-9_]+)\.([A-Za-z0-9_]+)\b")
_MAT = re.compile(r"\bmat:([a-z0-9]+(?:-[a-z0-9]+)*)\.Thickness\b")
_SELF = re.compile(r"(?<![\w.-])(X|Y|Width|Depth|Height|Elevation|East|North|Top)\b")
_OPS = {ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul, ast.Div: operator.truediv,
        ast.USub: operator.neg, ast.UAdd: operator.pos}


class LinkError(ValueError):
    pass


def _links(element: dict) -> dict:
    for pset in element.get("PropertySets") or []:
        if pset.get("Name") == PSET:
            return dict(pset.get("Properties") or {})
    return {}


def _eval(node):
    if isinstance(node, ast.Expression):
        return _eval(node.body)
    if isinstance(node, ast.Constant) and isinstance(node.value, (int, float)):
        return float(node.value)
    if isinstance(node, ast.BinOp) and type(node.op) in _OPS:
        return _OPS[type(node.op)](_eval(node.left), _eval(node.right))
    if isinstance(node, ast.UnaryOp) and type(node.op) in _OPS:
        return _OPS[type(node.op)](_eval(node.operand))
    raise LinkError(f"unsupported expression {ast.dump(node)}")


def _unrotated(e: dict) -> bool:
    rd = e.get("RefDirection")
    return rd is None or (abs(float(rd[0]) - 1.0) < 1e-9 and abs(float(rd[1])) < 1e-9)


def _attr(e: dict, attr: str) -> float | None:
    origin = e.get("Origin")
    if attr == "X":
        return None if origin is None or origin[0] is None else float(origin[0])
    if attr == "Y":
        return None if origin is None or origin[1] is None else float(origin[1])
    if attr in ("Width", "Depth", "Height"):
        v = e.get(attr)
        return None if v is None else float(v)
    if attr == "Elevation":
        return float(e.get("Elevation") or 0.0)
    if attr in ("East", "North"):
        if not _unrotated(e):
            raise LinkError(f"{e['id']}.{attr}: the box is rotated")
        base, size = ("X", "Width") if attr == "East" else ("Y", "Depth")
        a, b = _attr(e, base), _attr(e, size)
        return None if a is None or b is None else a + b
    if attr == "Top":
        h = _attr(e, "Height")
        return None if h is None else _attr(e, "Elevation") + h
    raise LinkError(f"unknown attribute {attr}")


_CATALOGUE: dict | None = None


def material_thickness(material_id: str) -> float:
    """``thickness_m`` of a catalogue material (metres)."""
    global _CATALOGUE
    if _CATALOGUE is None:
        from blueprints.materials import load_catalogue

        _CATALOGUE = {m["id"]: m for m in load_catalogue()}
    m = _CATALOGUE.get(material_id)
    if m is None:
        raise LinkError(f"mat:{material_id}: not in the materials catalogue")
    if m.get("thickness_m") is None:
        raise LinkError(f"mat:{material_id}: the catalogue gives no thickness_m")
    return float(m["thickness_m"])


def _pset_prop(e: dict, pset_name: str, prop: str):
    for pset in e.get("PropertySets") or []:
        if pset.get("Name") == pset_name:
            return (pset.get("Properties") or {}).get(prop)
    return None


def evaluate(expr, element: dict, by_id: dict) -> float | None:
    """The value of one link expression, or None while a reference is unresolved."""
    if isinstance(expr, (int, float)):
        return float(expr)
    text = str(expr)
    missing = False
    text = _MAT.sub(lambda m: repr(material_thickness(m.group(1))), text)

    def pref(match):
        rid, pset_name, prop = match.groups()
        if rid not in by_id:
            raise LinkError(f"{element['id']}: {rid} is not an element")
        v = _pset_prop(by_id[rid], pset_name, prop)
        if v is None:
            raise LinkError(f"{element['id']}: {rid} has no {pset_name}.{prop}")
        if isinstance(v, str):
            raise LinkError(f"{element['id']}: {rid}.{pset_name}.{prop} is not a number")
        return repr(float(v))

    text = _PREF.sub(pref, text)

    def ref(match):
        nonlocal missing
        rid, attr = match.group(1), match.group(2)
        if rid not in by_id:
            raise LinkError(f"{element['id']}: {rid} is not an element")
        v = _attr(by_id[rid], attr)
        if v is None:
            missing = True
            return "0"
        return repr(v)

    text = _REF.sub(ref, text)

    def own(match):
        nonlocal missing
        v = _attr(element, match.group(1))
        if v is None:
            missing = True
            return "0"
        return repr(v)

    text = _SELF.sub(own, text)
    value = _eval(ast.parse(text, mode="eval"))
    return None if missing else value


def _set(e: dict, target: str, value: float, linked: dict) -> None:
    value = round(value, 9)
    if target in ("X", "Y"):
        origin = list(e.get("Origin") or [None, None])
        origin[0 if target == "X" else 1] = value
        e["Origin"] = origin
    elif target in ("Width", "Depth", "Height", "Elevation"):
        e[target] = value
    elif target == "East":
        if "Width" in linked or "X" not in linked and (e.get("Origin") is None or e["Origin"][0] is None):
            if e.get("Width") is None:
                raise LinkError(f"{e['id']}: East needs a Width or an X")
            _set(e, "X", value - float(e["Width"]), linked)
        else:
            e["Width"] = round(value - float(e["Origin"][0]), 9)
    elif target == "Top":
        e["Height"] = round(value - float(e.get("Elevation") or 0.0), 9)
    elif "." in target:
        pset_name, prop = target.split(".", 1)
        for pset in e.get("PropertySets") or []:
            if pset.get("Name") == pset_name:
                pset.setdefault("Properties", {})[prop] = value
                return
        e.setdefault("PropertySets", []).append({"Name": pset_name, "Properties": {prop: value}})
    else:
        raise LinkError(f"{e['id']}: unknown link target {target}")


def resolve(doc: dict) -> dict:
    """Resolve every ``Pset_Links`` in place; returns ``doc``."""
    elements = [e for key in LISTS for e in (doc.get(key) or [])]
    by_id = {e["id"]: e for e in elements}
    todo = []
    for e in elements:
        links = _links(e)
        for target, expr in links.items():
            todo.append((e, target, expr, links))
    pending = {(id(e), t) for e, t, _x, _l in todo}

    def blocks(e, expr):
        # Unresolved targets an expression reads (by id, attr) block it.
        text = _MAT.sub("0", str(expr))
        for rid, pset_name, prop in _PREF.findall(text):
            o = by_id.get(rid)
            if o is not None and (id(o), f"{pset_name}.{prop}") in pending:
                return True
        text = _PREF.sub("0", text)
        for rid, attr in _REF.findall(text):
            o = by_id.get(rid)
            if o is None:
                continue
            deps = {"East": ("X", "Width", "East"), "North": ("Y", "Depth"), "Top": ("Height", "Elevation", "Top"),
                    "X": ("X", "East"), "Width": ("Width", "East"), "Height": ("Height", "Top")}.get(attr, (attr,))
            if any((id(o), d) in pending for d in deps):
                return True
        for attr in _SELF.findall(_REF.sub("", text)):
            if any((id(e), d) in pending for d in ({"East": ("X", "Width", "East")}.get(attr, (attr,)))):
                return True
        return False

    while todo:
        progressed = False
        for item in list(todo):
            e, target, expr, links = item
            if blocks(e, expr):
                continue
            if target == "East" and any(k in links and (id(e), k) in pending for k in ("Width", "X")):
                continue
            if target == "Top" and (id(e), "Elevation") in pending:
                continue
            value = evaluate(expr, e, by_id)
            if value is None:
                continue
            _set(e, target, value, links)
            todo.remove(item)
            pending.discard((id(e), target))
            progressed = True
        if not progressed:
            raise LinkError("unresolved or cyclic Pset_Links: " +
                            ", ".join(f"{e['id']}.{t} = {x}" for e, t, x, _l in todo))
    return doc
