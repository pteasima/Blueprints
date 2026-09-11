"""CLI: python -m blueprints.export <module.path>"""

from __future__ import annotations

import argparse
import importlib
import sys
from pathlib import Path


def _ensure_models_on_path() -> None:
    repo = Path(__file__).resolve().parents[2]
    models = str(repo / "models")
    if models not in sys.path:
        sys.path.insert(0, models)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Build and export a parametric model module."
    )
    parser.add_argument(
        "module",
        help="Python module under models/ (e.g. hello_world or models.hello_world)",
    )
    args = parser.parse_args(argv)

    _ensure_models_on_path()
    name = args.module.removeprefix("models.")
    mod = importlib.import_module(name)

    if not hasattr(mod, "build"):
        raise SystemExit(f"Module {name!r} must define build() -> shape")

    result = mod.build()
    # Models may return a shape, or (shape, metadata)
    if isinstance(result, tuple):
        shape, meta = result
    else:
        shape, meta = result, {}

    from blueprints.export_utils import export_section, export_shape, summarize_params

    model_name = getattr(mod, "MODEL_NAME", name)
    kind = meta.get("kind") or getattr(mod, "EXPORT_KIND", "solid")
    if kind == "section":
        paths = export_section(shape, model_name)
    else:
        paths = export_shape(shape, model_name)

    extra_fn = getattr(mod, "extra_exports", None)
    if extra_fn is not None:
        for stem, extra_shape, extra_kind in extra_fn():
            if extra_kind == "section":
                extra = export_section(extra_shape, model_name, stem=stem)
            else:
                extra = export_shape(
                    extra_shape, model_name, stem=stem, formats=("svg", "dxf", "png")
                )
            paths.update({f"{stem}_{k}": v for k, v in extra.items()})
    elif hasattr(mod, "build_preview"):
        preview, _ = mod.build_preview()
        extra = export_shape(
            preview, model_name, stem="cutaway", formats=("svg", "dxf", "png")
        )
        paths.update({f"cutaway_{k}": v for k, v in extra.items()})
    params = meta.get("derived") or getattr(mod, "PARAMS", meta.get("params", {}))
    print(f"Built {model_name}: {summarize_params(params) if params else '(no params)'}")
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
