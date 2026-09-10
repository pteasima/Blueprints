"""Hello-world parametric box — proves the build → export loop.

Change PARAMS and re-run:
    python -m blueprints.export hello_world
"""

from __future__ import annotations

from dataclasses import asdict, dataclass

from build123d import Align, Box, BuildPart, fillet


MODEL_NAME = "hello_world"


@dataclass(frozen=True)
class HelloWorldParams:
    width: float = 120.0   # mm
    depth: float = 80.0
    height: float = 40.0
    fillet_radius: float = 6.0


PARAMS = asdict(HelloWorldParams())


def build(params: HelloWorldParams | None = None):
    p = params or HelloWorldParams()

    with BuildPart() as part:
        Box(p.width, p.depth, p.height, align=(Align.CENTER, Align.CENTER, Align.MIN))
        # Soft edges so the SVG preview reads as intentional geometry, not a raw cube
        fillet(part.edges(), radius=min(p.fillet_radius, p.height / 4))

    return part.part, {"params": asdict(p)}


if __name__ == "__main__":
    from blueprints.export_utils import export_shape, summarize_params

    shape, meta = build()
    paths = export_shape(shape, MODEL_NAME)
    print(f"Built {MODEL_NAME}: {summarize_params(meta['params'])}")
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")
