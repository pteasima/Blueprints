"""Preview-hub publishing and on-demand viewer layer manifests."""

from __future__ import annotations

from pathlib import Path

from build123d import Compound, Shape

from blueprints.preview_hub import publish_to_preview_site

from .html import write_gltf_html_viewer
from .mesh import rewrite_glb_element_names, write_glb


def write_lazy_layers(model_name: str, layers: dict, models_dir: Path) -> list[Path]:
    """Write on-demand viewer layers: ``<model>.<label>.glb`` per label and
    ``<model>.layers.json`` listing them. The viewer shows each as a Parts
    leaf, on by default, and fetches its GLB after the main model (or only
    when it is switched on, if it starts off)
    (src/blueprints/viewer/README.md "On-demand layers"). Nodes are named
    like the main GLB's (``gridfinity__SF-E700-D1__``), in the same frame.
    With no layers, the manifest and the GLBs it listed are removed.
    """
    import json

    models_dir = Path(models_dir)
    manifest = models_dir / f"{model_name}.layers.json"
    if manifest.is_file():
        try:
            old = json.loads(manifest.read_text())
        except ValueError:
            old = []
        for entry in old if isinstance(old, list) else []:
            url = str((entry or {}).get("url") or "")
            if url and url not in {f"{model_name}.{label}.glb" for label in layers}:
                (models_dir / url).unlink(missing_ok=True)
    written: list[Path] = []
    entries = []
    for label in sorted(layers):
        solids = list(layers[label])
        if not solids:
            continue
        compound = Compound(obj=solids, children=solids, label=f"{model_name}.{label}")
        path = write_glb(compound, models_dir / f"{model_name}.{label}.glb")
        rewrite_glb_element_names(path, compound)
        written.append(path)
        entries.append({"id": label, "url": path.name})
    if entries:
        manifest.write_text(json.dumps(entries, indent=2) + "\n")
        written.append(manifest)
    else:
        manifest.unlink(missing_ok=True)
    return written


def _write_viewer_assets(
    written: dict[str, Path],
    model_name: str,
    *,
    shape: Shape | Compound | None = None,
    stem: str = "model",
    scenes: list | None = None,
    part_groups: list | None = None,
    label: str | None = None,
    ifc_index: dict | None = None,
) -> None:
    """Write GLB + offline HTML next to the STL, and publish the primary stem to the hub."""
    stl_path = written.get("stl")
    if stl_path is None or not stl_path.is_file():
        return

    if shape is not None:
        glb_path = stl_path.with_suffix(".glb")
        write_glb(shape, glb_path)
        written["glb"] = glb_path
        html_path = stl_path.with_suffix(".html")
        write_gltf_html_viewer(
            glb_path,
            html_path,
            scenes=scenes,
            part_groups=part_groups,
            ifc_index=ifc_index,
        )
        written["html"] = html_path

    # Only the primary stem updates the Pages hub (extras must not overwrite it).
    if stem == "model":
        hub = publish_to_preview_site(
            model_name,
            glb_path=written.get("glb"),
            scenes=scenes,
            part_groups=part_groups,
            label=label,
            ifc_index=ifc_index,
        )
        if hub is not None:
            written["preview_hub"] = hub
