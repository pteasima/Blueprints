"""STEP, STL, and GLB mesh export."""

from __future__ import annotations

from pathlib import Path
from typing import Any

from build123d import Compound, Shape, Unit, export_gltf, export_step, export_stl

from .paths import ensure_export_dir


def _shape_span(shape: Shape | Compound) -> float:
    size = shape.bounding_box().size
    return max(size.X, size.Y, size.Z)


def _stl_tolerance(shape: Shape | Compound) -> float:
    if _shape_span(shape) > 2000:
        return 2.0
    return 1e-3


def export_shape(
    shape: Shape | Compound,
    model_name: str,
    *,
    stem: str = "model",
    formats: tuple[str, ...] = ("step", "stl"),
    scenes: list | None = None,
    part_groups: list | None = None,
    label: str | None = None,
    ifc_index: dict | None = None,
) -> dict[str, Path]:
    """Export a solid under exports/<model_name>/.

    STEP and STL only. SVG/DXF/PNG plates come from the viewer drawing
    export (named scenes) or from ``export_section`` for 2D sheets.
    """
    out_dir = ensure_export_dir(model_name)
    written: dict[str, Path] = {}

    for fmt in formats:
        path = out_dir / f"{stem}.{fmt}"
        if fmt == "step":
            export_step(shape, path)
        elif fmt == "stl":
            export_stl(shape, path, tolerance=_stl_tolerance(shape))
        elif fmt in {"svg", "dxf", "png"}:
            raise ValueError(
                "Solid models do not export SVG, DXF, or PNG. "
                "Use the viewer Drawing button, or export_section for a 2D sheet."
            )
        else:
            raise ValueError(f"Unsupported export format: {fmt}")
        written[fmt] = path

    from .preview import _write_viewer_assets

    _write_viewer_assets(
        written,
        model_name,
        shape=shape,
        stem=stem,
        scenes=scenes,
        part_groups=part_groups,
        label=label,
        ifc_index=ifc_index,
    )
    return written


def element_node_name(label: str | None, element_id: str | None) -> str:
    """Part label, plus a yaml id the viewer can split back off (`masonry__W-001__`)."""
    base = label or "part"
    if not element_id:
        return base
    safe = str(element_id).replace("__", "_")
    return f"{base}__{safe}__"


def _walk_shapes(shape: Shape | Compound):
    yield shape
    for child in list(getattr(shape, "children", ()) or ()):
        yield from _walk_shapes(child)


def _stamp_element_labels(shape: Shape | Compound) -> list[tuple[Any, str]]:
    """Temporarily put element ids into node labels. Restored after export."""
    saved: list[tuple[Any, str]] = []
    for node in _walk_shapes(shape):
        element_id = getattr(node, "element_id", None)
        label = getattr(node, "label", None)
        if not element_id or not label or "__" in str(label):
            continue
        saved.append((node, str(label)))
        node.label = element_node_name(str(label), str(element_id))
    return saved


def _restore_labels(saved: list[tuple[Any, str]]) -> None:
    for node, label in saved:
        node.label = label


def write_glb(
    shape: Shape | Compound,
    glb_path: Path,
    *,
    linear_deflection: float | None = None,
) -> Path:
    """Write a binary glTF (.glb) preserving labeled compounds and materials."""
    glb_path = glb_path.resolve()
    glb_path.parent.mkdir(parents=True, exist_ok=True)
    tol = linear_deflection if linear_deflection is not None else _stl_tolerance(shape)
    saved = _stamp_element_labels(shape)
    try:
        ok = export_gltf(
            shape,
            glb_path,
            unit=Unit.MM,
            binary=True,
            linear_deflection=tol,
            angular_deflection=0.1,
        )
    finally:
        _restore_labels(saved)
    if not ok or not glb_path.is_file():
        raise RuntimeError(f"export_gltf failed for {glb_path}")
    return glb_path


def rewrite_glb_element_names(glb_path: Path, shape: Shape | Compound) -> int:
    """Rename existing GLB nodes from compound children, without tessellating again.

    OCCT writes one node per direct child, in order, under the root. Names that
    already carry an element id are left alone when the part label still matches.
    """
    import json
    import struct

    glb_path = glb_path.resolve()
    data = glb_path.read_bytes()
    if data[:4] != b"glTF":
        raise ValueError(f"{glb_path} is not a glTF binary")
    json_len, json_type = struct.unpack_from("<II", data, 12)
    if json_type != 0x4E4F534A:
        raise ValueError(f"{glb_path} JSON chunk is missing")
    json_bytes = data[20 : 20 + json_len]
    bin_at = 20 + json_len
    document = json.loads(json_bytes)
    nodes = document.get("nodes") or []
    if not nodes or not nodes[0].get("children"):
        raise ValueError(f"{glb_path} has no root children")
    children = list(getattr(shape, "children", ()) or ())
    indexes = nodes[0]["children"]
    if len(children) != len(indexes):
        raise ValueError(
            f"{glb_path} has {len(indexes)} nodes, the model has {len(children)} children"
        )
    renamed = 0
    for child, index in zip(children, indexes):
        node = nodes[index]
        label = str(getattr(child, "label", None) or "")
        current = str(node.get("name") or "")
        element_id = getattr(child, "element_id", None)
        base = current.split("__", 1)[0]
        if base != label and current != label:
            raise ValueError(f"node {current!r} is not part {label!r}")
        if not element_id:
            continue
        name = element_node_name(label, str(element_id))
        if current != name:
            node["name"] = name
            renamed += 1
    if not renamed:
        return 0
    payload = json.dumps(document, separators=(",", ":")).encode("utf-8")
    pad = (4 - (len(payload) % 4)) % 4
    payload += b" " * pad
    rest = data[bin_at:]
    total = 12 + 8 + len(payload) + len(rest)
    out = bytearray()
    out += struct.pack("<III", 0x46546C67, 2, total)
    out += struct.pack("<II", len(payload), 0x4E4F534A)
    out += payload
    out += rest
    glb_path.write_bytes(out)
    return renamed
