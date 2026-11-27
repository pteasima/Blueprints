"""CLI: python -m blueprints.export <module>  (also: python -m blueprints, bp-export)."""

from __future__ import annotations

import argparse
import importlib
import sys
import time
from pathlib import Path


def _ensure_models_on_path() -> None:
    repo = Path(__file__).resolve().parents[2]
    models = str(repo / "models")
    if models not in sys.path:
        sys.path.insert(0, models)


def _print_paths(model_name: str, summary: str, paths: dict[str, Path], *, cached: str | None = None) -> None:
    if cached:
        print(f"Built {model_name} from export cache ({cached[:12]}): {summary or '(cached, sources unchanged)'}")
    else:
        print(f"Built {model_name}: {summary or '(no params)'}")
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")


def _try_cache_hit(module: str, fingerprint: str, *, profile: bool) -> bool:
    from blueprints.export_cache import republish_preview, restore

    t0 = time.perf_counter()
    hit = restore(module, fingerprint)
    if hit is None:
        if profile:
            print(f"export cache miss in {time.perf_counter() - t0:.3f}s ({fingerprint[:12]})")
        return False
    hub = republish_preview(hit["model_name"], hit["files"])
    files = dict(hit["files"])
    if hub is not None:
        files["preview_hub"] = hub
    _print_paths(hit["model_name"], hit["summary"], files, cached=fingerprint)
    if profile:
        print(f"export cache hit in {time.perf_counter() - t0:.3f}s ({fingerprint[:12]})")
    return True


def _store_cache(module: str, fingerprint: str, model_name: str, summary: str, export_paths: dict[str, Path]) -> None:
    from blueprints.export_cache import collect_outputs, store

    outputs = collect_outputs(model_name, export_paths)
    stored = store(module, fingerprint, outputs, model_name=model_name, summary=summary)
    if stored is not None:
        print(f"export cache stored ({fingerprint[:12]})")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Build and export a parametric model module."
    )
    parser.add_argument(
        "module",
        help="Python module under models/ (e.g. ground_floor or models.ground_floor)",
    )
    parser.add_argument(
        "--no-cache",
        action="store_true",
        help="Bypass the content-addressed export cache (also: BLUEPRINTS_NO_CACHE=1).",
    )
    parser.add_argument(
        "--profile",
        action="store_true",
        help="Print wall-clock time for the main export stages.",
    )
    args = parser.parse_args(argv)

    from blueprints.export_cache import cache_enabled, source_fingerprint

    name = args.module.removeprefix("models.")
    use_cache = cache_enabled(no_cache=args.no_cache)
    fingerprint = source_fingerprint() if use_cache else None
    if use_cache and fingerprint and _try_cache_hit(name, fingerprint, profile=args.profile):
        return 0

    def stage(label: str):
        class _Stage:
            def __enter__(self):
                self.t0 = time.perf_counter()
                return self

            def __exit__(self, *exc):
                if args.profile:
                    print(f"{time.perf_counter() - self.t0:8.3f}s  {label}")

        return _Stage()

    _ensure_models_on_path()
    t_all = time.perf_counter()
    with stage("import.module"):
        mod = importlib.import_module(name)

    if not hasattr(mod, "build"):
        raise SystemExit(f"Module {name!r} must define build() -> shape")

    with stage("build"):
        result = mod.build()
    # Models may return a shape, or (shape, metadata)
    if isinstance(result, tuple):
        shape, meta = result
    else:
        shape, meta = result, {}

    from blueprints.export_utils import export_section, export_shape, summarize_params

    model_name = getattr(mod, "MODEL_NAME", name)
    kind = meta.get("kind") or getattr(mod, "EXPORT_KIND", "solid")
    repo = Path(__file__).resolve().parents[2]
    with stage("scenes_and_parts"):
        scenes_fn = getattr(mod, "scenes", None)
        scenes = scenes_fn() if callable(scenes_fn) else None
        parts_fn = getattr(mod, "part_groups", None)
        part_groups = parts_fn() if callable(parts_fn) else None
    motions = meta.get("door_motions")
    if isinstance(motions, list):
        from blueprints.scenes import write_doors_json

        write_doors_json(model_name, motions, repo / "docs" / "models" / f"{model_name}.doors.json")
    window_motions = meta.get("window_motions")
    if isinstance(window_motions, list):
        from blueprints.scenes import write_doors_json

        write_doors_json(
            model_name, window_motions, repo / "docs" / "models" / f"{model_name}.windows.json"
        )
    # Cable routes (docs/electrical/CableRoutes.md): the model names the file.
    if getattr(mod, "CABLE_ROUTES", False):
        from blueprints.cable_routes import write_viewer_json

        with stage("cables"):
            write_viewer_json(repo / "docs" / "models" / f"{model_name}.cables.json")
    # On-demand viewer layers (ground_floor's Gridfinity baseplates).
    lazy_layers = meta.get("lazy_layers")
    if isinstance(lazy_layers, dict):
        from blueprints.export_utils import write_lazy_layers

        with stage("gridfinity_layer"):
            write_lazy_layers(model_name, lazy_layers, repo / "docs" / "models")
    ifc_fn = getattr(mod, "ifc_index", None)
    with stage("ifc_index"):
        ifc_index = ifc_fn() if callable(ifc_fn) else None
    if kind == "section":
        with stage("export_section"):
            paths = export_section(shape, model_name)
        annot = getattr(mod, "annotate", None)
        if callable(annot):
            annot(paths["svg"], paths.get("dxf"), paths.get("png"))
    else:
        with stage("export_shape"):
            paths = export_shape(
                shape,
                model_name,
                scenes=scenes,
                part_groups=part_groups,
                label=getattr(mod, "MODEL_LABEL", None),
                ifc_index=ifc_index,
            )

    params = meta.get("derived") or getattr(mod, "PARAMS", meta.get("params", {}))
    summary = summarize_params(params) if params else "(no params)"
    _print_paths(model_name, summary, paths)
    if use_cache and fingerprint:
        _store_cache(name, fingerprint, model_name, summary, paths)
    if args.profile:
        print(f"{time.perf_counter() - t_all:8.3f}s  TOTAL")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
