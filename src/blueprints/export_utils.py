"""Shared export helpers for build123d models."""

from __future__ import annotations

import os
import shutil
import struct
import zipfile
from pathlib import Path
from typing import Any

from build123d import (
    Axis,
    ColorIndex,
    Compound,
    ExportDXF,
    ExportSVG,
    LineType,
    Shape,
    Vector,
    export_step,
    export_stl,
)


REPO_ROOT = Path(__file__).resolve().parents[2]
EXPORTS_DIR = REPO_ROOT / "exports"
PREVIEW_LINE_WEIGHT = 1.0

# Drawing-unit stroke widths so a ~6 m section still reads at ~1800 px PNG.
SECTION_LINE_WEIGHT = 12.0
SECTION_HEAVY_WEIGHT = 22.0
SECTION_PNG_WIDTH = 1800

# SVG fill/line colours (0–255 RGB) keyed by Face/Wire.label from the section model.
SECTION_LAYERS: dict[str, dict[str, Any]] = {
    "podlaha": {
        "fill": (200, 194, 180),
        "line": (85, 85, 85),
        "dxf": ColorIndex.GRAY,
        "weight": SECTION_LINE_WEIGHT,
    },
    "eps": {
        "fill": (217, 232, 200),
        "line": (90, 122, 58),
        "dxf": ColorIndex.GREEN,
        "weight": SECTION_LINE_WEIGHT,
    },
    "zdivo": {
        "fill": (207, 200, 188),
        "line": (85, 85, 85),
        "dxf": ColorIndex.GRAY,
        "weight": SECTION_LINE_WEIGHT,
    },
    "omitka": {
        "fill": (232, 228, 220),
        "line": (136, 136, 136),
        "dxf": ColorIndex.LIGHT_GRAY,
        "weight": SECTION_LINE_WEIGHT,
    },
    "nabytek": {
        "fill": (232, 213, 163),
        "line": (138, 106, 42),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
    },
    "pozednice": {
        "fill": (196, 165, 116),
        "line": (107, 79, 42),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
    },
    "koruna": {
        "fill": (196, 165, 116),
        "line": (107, 79, 42),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
    },
    "predstena": {
        "fill": (200, 232, 240),
        "line": (26, 122, 154),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
    },
    "pouzdro": {
        "fill": (232, 224, 208),
        "line": (102, 102, 102),
        "dxf": ColorIndex.GRAY,
        "weight": SECTION_LINE_WEIGHT,
        "dashed": True,
    },
    "krov": {
        "fill": (196, 165, 116),
        "line": (107, 79, 42),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
    },
    "vata": {
        "fill": (217, 232, 200),
        "line": (90, 122, 58),
        "dxf": ColorIndex.GREEN,
        "weight": SECTION_LINE_WEIGHT,
    },
    "soffit": {
        "fill": (122, 171, 69),
        "line": (61, 107, 30),
        "dxf": ColorIndex.GREEN,
        "weight": SECTION_LINE_WEIGHT,
    },
    "podhled": {
        "fill": None,
        "line": (26, 95, 138),
        "dxf": ColorIndex.BLUE,
        "weight": SECTION_HEAVY_WEIGHT,
    },
    "krytina": {
        "fill": None,
        "line": (139, 46, 26),
        "dxf": ColorIndex.RED,
        "weight": SECTION_HEAVY_WEIGHT,
    },
}

SECTION_LAYER_ORDER = [
    "podlaha",
    "eps",
    "zdivo",
    "omitka",
    "vata",
    "nabytek",
    "pouzdro",
    "pozednice",
    "koruna",
    "krov",
    "soffit",
    "predstena",
    "podhled",
    "krytina",
]


def ensure_export_dir(model_name: str) -> Path:
    out = EXPORTS_DIR / model_name
    out.mkdir(parents=True, exist_ok=True)
    return out


def _shape_span(shape: Shape | Compound) -> float:
    size = shape.bounding_box().size
    return max(size.X, size.Y, size.Z)


def _preview_line_weight(shape: Shape | Compound) -> float:
    """1 mm strokes vanish on an 11 m isometric; use section weights for large models."""
    if _shape_span(shape) > 2000:
        return SECTION_LINE_WEIGHT
    return PREVIEW_LINE_WEIGHT


def _preview_png_width(shape: Shape | Compound) -> int:
    if _shape_span(shape) > 2000:
        return SECTION_PNG_WIDTH
    return 1400


def _stl_tolerance(shape: Shape | Compound) -> float:
    if _shape_span(shape) > 2000:
        return 2.0
    return 1e-3


def _viewport_edges(shape: Shape | Compound):
    """Isometric-ish visible edges; camera sits outside the bbox (orthographic)."""
    bb = shape.bounding_box()
    center = bb.center()
    direction = Vector(-1.2, -1.5, 1.0).normalized()
    origin = center + direction * (bb.diagonal * 1.5)
    visible, _hidden = shape.project_to_viewport(origin, look_at=center)
    return visible


def _write_svg(edges, path: Path, *, line_weight: float = PREVIEW_LINE_WEIGHT) -> None:
    exporter = ExportSVG(scale=1.0, line_weight=line_weight)
    exporter.add_layer("visible", line_weight=line_weight)
    exporter.add_shape(edges, layer="visible")
    exporter.write(path)


def _write_dxf(edges, path: Path) -> None:
    exporter = ExportDXF()
    exporter.add_layer("visible")
    exporter.add_shape(edges, layer="visible")
    exporter.write(path)


def _write_png(svg_path: Path, png_path: Path, *, width: int = 1400) -> None:
    try:
        import cairosvg
    except ImportError as exc:  # pragma: no cover
        raise ImportError("PNG export requires cairosvg; pip install cairosvg") from exc
    cairosvg.svg2png(
        url=str(svg_path),
        write_to=str(png_path),
        output_width=width,
        background_color="white",
    )


def export_shape(
    shape: Shape | Compound,
    model_name: str,
    *,
    stem: str = "model",
    formats: tuple[str, ...] = ("step", "stl", "svg", "dxf", "png"),
) -> dict[str, Path]:
    """Export a build123d shape to common formats under exports/<model_name>/."""
    out_dir = ensure_export_dir(model_name)
    written: dict[str, Path] = {}
    edges = None
    line_weight = _preview_line_weight(shape)
    png_width = _preview_png_width(shape)

    for fmt in formats:
        path = out_dir / f"{stem}.{fmt}"
        if fmt == "step":
            export_step(shape, path)
        elif fmt == "stl":
            export_stl(shape, path, tolerance=_stl_tolerance(shape))
        elif fmt in {"svg", "dxf", "png"}:
            if edges is None:
                edges = _viewport_edges(shape)
            if fmt == "svg":
                _write_svg(edges, path, line_weight=line_weight)
            elif fmt == "dxf":
                _write_dxf(edges, path)
            else:
                svg_path = written.get("svg") or (out_dir / f"{stem}.svg")
                if "svg" not in written:
                    _write_svg(edges, svg_path, line_weight=line_weight)
                    written["svg"] = svg_path
                _write_png(svg_path, path, width=png_width)
        else:
            raise ValueError(f"Unsupported export format: {fmt}")
        written[fmt] = path

    _maybe_write_usdz(written)
    publish_to_artifacts(model_name, written)
    return written


def _section_children(shape: Shape | Compound) -> list[Shape]:
    children = getattr(shape, "children", None)
    if children:
        return list(children)
    return [shape]


def _section_to_xy(shape: Shape) -> Shape:
    """Map XZ section (Y=0, Z up) onto the XY plane used by SVG/DXF exporters."""
    return shape.rotate(Axis.X, -90)


def export_section(
    shape: Shape | Compound,
    model_name: str,
    *,
    stem: str = "model",
    formats: tuple[str, ...] = ("svg", "dxf", "png"),
) -> dict[str, Path]:
    """Orthographic XZ section: 1:1 mm DXF, layered SVG, PNG preview."""
    out_dir = ensure_export_dir(model_name)
    written: dict[str, Path] = {}
    grouped: dict[str, list[Shape]] = {}
    for child in _section_children(shape):
        name = child.label or "visible"
        grouped.setdefault(name, []).append(_section_to_xy(child))

    layer_names = [n for n in SECTION_LAYER_ORDER if n in grouped]
    layer_names.extend(n for n in grouped if n not in layer_names)

    for fmt in formats:
        path = out_dir / f"{stem}.{fmt}"
        if fmt == "svg":
            exporter = ExportSVG(scale=1.0, margin=80)
            for name in layer_names:
                style = SECTION_LAYERS.get(name, {})
                svg_kwargs: dict[str, Any] = dict(
                    fill_color=style.get("fill"),
                    line_color=style.get("line", (0, 0, 0)),
                    line_weight=style.get("weight", SECTION_LINE_WEIGHT),
                )
                if style.get("dashed"):
                    svg_kwargs["line_type"] = LineType.DASHED
                exporter.add_layer(name, **svg_kwargs)
                for piece in grouped[name]:
                    exporter.add_shape(piece, layer=name)
            exporter.write(path)
        elif fmt == "dxf":
            exporter = ExportDXF()
            for name in layer_names:
                style = SECTION_LAYERS.get(name, {})
                dxf_kwargs: dict[str, Any] = dict(
                    color=style.get("dxf", ColorIndex.BLACK),
                    line_weight=0.35,
                )
                if style.get("dashed"):
                    dxf_kwargs["line_type"] = LineType.DASHED
                exporter.add_layer(name, **dxf_kwargs)
                for piece in grouped[name]:
                    exporter.add_shape(piece, layer=name)
            exporter.write(path)
        elif fmt == "png":
            svg_path = written.get("svg") or (out_dir / f"{stem}.svg")
            if "svg" not in written:
                svg_paths = export_section(shape, model_name, stem=stem, formats=("svg",))
                svg_path = svg_paths["svg"]
                written["svg"] = svg_path
            _write_png(svg_path, path, width=SECTION_PNG_WIDTH)
        else:
            raise ValueError(f"Unsupported section export format: {fmt}")
        written[fmt] = path

    publish_to_artifacts(model_name, written)
    return written


def artifacts_dir() -> Path | None:
    """Cloud Agent artifact folder. Chat renders PNG/video tiles only; hrefs are not rewritten."""
    override = os.environ.get("BLUEPRINTS_ARTIFACTS_DIR")
    if override:
        path = Path(override)
        path.mkdir(parents=True, exist_ok=True)
        return path
    # pytest must not sprinkle CAD files into the live chat folder
    if "PYTEST_CURRENT_TEST" in os.environ:
        return None
    path = Path("/opt/cursor/artifacts")
    return path if path.is_dir() else None


_CHAT_FORMATS = frozenset({".png", ".usdz", ".html"})


def _artifact_name(model_name: str, path: Path) -> str:
    suffix = path.suffix.lower()
    if path.stem == "model" and suffix in {".step", ".stp", ".stl", ".usdz", ".html"}:
        return f"{model_name}_3d{suffix}"
    return f"{model_name}_{path.name}"


def publish_to_artifacts(model_name: str, paths: dict[str, Path]) -> dict[str, Path]:
    """Copy PNG/USDZ/HTML into the run artifact folder.

    Chat still only displays PNG/video. Do not emit `<a href="/opt/cursor/artifacts/…">`;
    those paths 404 on cursor.com. Give the user a real https URL or a QR PNG instead.
    """
    dest_root = artifacts_dir()
    if dest_root is None:
        return {}
    published: dict[str, Path] = {}
    for path in paths.values():
        if path.suffix.lower() not in _CHAT_FORMATS or not path.is_file():
            continue
        dest = dest_root / _artifact_name(model_name, path)
        shutil.copy2(path, dest)
        published[path.suffix.lower().lstrip(".")] = dest
    return published


def _read_binary_stl(path: Path) -> tuple[list[tuple[float, float, float]], list[tuple[int, int, int]]]:
    data = path.read_bytes()
    if len(data) < 84:
        raise ValueError(f"STL too small: {path}")
    count = struct.unpack_from("<I", data, 80)[0]
    points: list[tuple[float, float, float]] = []
    faces: list[tuple[int, int, int]] = []
    offset = 84
    for _ in range(count):
        # skip normal (3 floats), read 3 vertices
        verts = struct.unpack_from("<9f", data, offset + 12)
        i = len(points)
        points.append((verts[0], verts[1], verts[2]))
        points.append((verts[3], verts[4], verts[5]))
        points.append((verts[6], verts[7], verts[8]))
        faces.append((i, i + 1, i + 2))
        offset += 50
    return points, faces


def stl_to_usdz(stl_path: Path, usdz_path: Path) -> Path:
    """Pack a binary STL as USDZ so iOS Quick Look / Files can open the 3D mesh."""
    points, faces = _read_binary_stl(stl_path)
    if not faces:
        raise ValueError(f"STL has no triangles: {stl_path}")
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    zs = [p[2] for p in points]
    point_txt = ", ".join(f"({x:.6f}, {y:.6f}, {z:.6f})" for x, y, z in points)
    index_txt = ", ".join(str(i) for tri in faces for i in tri)
    counts_txt = ", ".join("3" for _ in faces)
    usda = f"""#usda 1.0
(
    defaultPrim = "Model"
    metersPerUnit = 0.001
    upAxis = "Z"
)

def Mesh "Model"
{{
    float3[] extent = [({min(xs):.6f}, {min(ys):.6f}, {min(zs):.6f}), ({max(xs):.6f}, {max(ys):.6f}, {max(zs):.6f})]
    int[] faceVertexCounts = [{counts_txt}]
    int[] faceVertexIndices = [{index_txt}]
    point3f[] points = [{point_txt}]
}}
"""
    usdz_path.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(usdz_path, "w") as zf:
        info = zipfile.ZipInfo("mimetype")
        info.compress_type = zipfile.ZIP_STORED
        zf.writestr(info, "model/vnd.usdz+zip")
        geo = zipfile.ZipInfo("model.usda")
        geo.compress_type = zipfile.ZIP_STORED
        zf.writestr(geo, usda)
    return usdz_path


def stl_to_html_viewer(stl_path: Path, html_path: Path) -> Path:
    """Self-contained WebGL viewer so the model can be opened in Safari (chat UI is PNG-only)."""
    points, faces = _read_binary_stl(stl_path)
    # Flat xyz list for the triangle soup.
    coords: list[float] = []
    for i, j, k in faces:
        for idx in (i, j, k):
            coords.extend(points[idx])
    xs = coords[0::3]
    ys = coords[1::3]
    zs = coords[2::3]
    cx, cy, cz = (min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2, (min(zs) + max(zs)) / 2
    span = max(max(xs) - min(xs), max(ys) - min(ys), max(zs) - min(zs), 1.0)
    html = f"""<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<title>3D preview</title>
<style>
  html,body {{ margin:0; height:100%; background:#111; color:#eee; font-family:-apple-system,sans-serif; }}
  canvas {{ display:block; width:100%; height:100%; touch-action:none; }}
  p {{ position:fixed; left:12px; bottom:12px; margin:0; font-size:13px; opacity:.8; }}
</style>
</head>
<body>
<canvas id="c"></canvas>
<p>Táhni = otáčení · dva prsty = zoom</p>
<script>
const P = {coords};
const cx = {cx:.6f}, cy = {cy:.6f}, cz = {cz:.6f}, span = {span:.6f};
const canvas = document.getElementById('c');
const gl = canvas.getContext('webgl');
if (!gl) {{ document.body.textContent = 'WebGL není k dispozici.'; }}
else {{
  const vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, `
    attribute vec3 aPos, aNrm;
    uniform mat4 uMVP, uN;
    varying vec3 vN;
    void main() {{
      vN = mat3(uN) * aNrm;
      gl_Position = uMVP * vec4(aPos, 1.0);
    }}`);
  gl.compileShader(vs);
  const fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, `
    precision mediump float;
    varying vec3 vN;
    void main() {{
      vec3 n = normalize(vN);
      float d = max(dot(n, normalize(vec3(.35,.6,.7))), .12);
      gl_FragColor = vec4(vec3(.82,.8,.76) * d, 1.0);
    }}`);
  gl.compileShader(fs);
  const prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  gl.useProgram(prog);
  const ntri = P.length / 9;
  const pos = new Float32Array(P.length);
  const nrm = new Float32Array(P.length);
  for (let t = 0; t < ntri; t++) {{
    const o = t * 9;
    const ax=P[o]-cx, ay=P[o+1]-cy, az=P[o+2]-cz;
    const bx=P[o+3]-cx, by=P[o+4]-cy, bz=P[o+5]-cz;
    const cxp=P[o+6]-cx, cyp=P[o+7]-cy, czp=P[o+8]-cz;
    const nx=(by-ay)*(czp-az)-(bz-az)*(cyp-ay);
    const ny=(bz-az)*(cxp-ax)-(bx-ax)*(czp-az);
    const nz=(bx-ax)*(cyp-ay)-(by-ay)*(cxp-ax);
    for (let k = 0; k < 3; k++) {{
      pos[o+k*3]=P[o+k*3]-cx; pos[o+k*3+1]=P[o+k*3+1]-cy; pos[o+k*3+2]=P[o+k*3+2]-cz;
      nrm[o+k*3]=nx; nrm[o+k*3+1]=ny; nrm[o+k*3+2]=nz;
    }}
  }}
  function buf(data, locName) {{
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, locName);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 3, gl.FLOAT, false, 0, 0);
  }}
  buf(pos, 'aPos'); buf(nrm, 'aNrm');
  const uMVP = gl.getUniformLocation(prog, 'uMVP');
  const uN = gl.getUniformLocation(prog, 'uN');
  let yaw = 0.6, pitch = 0.45, dist = span * 1.8;
  function resize() {{
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
    gl.viewport(0,0,canvas.width,canvas.height);
  }}
  addEventListener('resize', resize); resize();
  let last=null, pinching=null;
  canvas.addEventListener('pointerdown', e => {{ last={{x:e.clientX,y:e.clientY,id:e.pointerId}}; canvas.setPointerCapture(e.pointerId); }});
  canvas.addEventListener('pointerup', () => last=null);
  canvas.addEventListener('pointermove', e => {{
    if (!last || e.pointerId!==last.id) return;
    yaw += (e.clientX-last.x)*0.008;
    pitch = Math.max(-1.2, Math.min(1.2, pitch+(e.clientY-last.y)*0.008));
    last={{x:e.clientX,y:e.clientY,id:e.pointerId}};
  }});
  canvas.addEventListener('wheel', e => {{ e.preventDefault(); dist *= (e.deltaY>0?1.08:0.92); }}, {{passive:false}});
  canvas.addEventListener('touchstart', e => {{
    if (e.touches.length===2) {{
      const a=e.touches[0], b=e.touches[1];
      pinching=Math.hypot(a.clientX-b.clientX, a.clientY-b.clientY);
    }}
  }}, {{passive:true}});
  canvas.addEventListener('touchmove', e => {{
    if (e.touches.length===2 && pinching) {{
      const a=e.touches[0], b=e.touches[1];
      const d=Math.hypot(a.clientX-b.clientX, a.clientY-b.clientY);
      dist *= pinching/d; pinching=d;
    }}
  }}, {{passive:true}});
  function mul(a,b) {{
    const r=new Float32Array(16);
    for (let i=0;i<4;i++) for (let j=0;j<4;j++)
      r[j*4+i]=a[i]*b[j*4]+a[4+i]*b[j*4+1]+a[8+i]*b[j*4+2]+a[12+i]*b[j*4+3];
    return r;
  }}
  function persp(f, asp, n, f2) {{
    const t=1/Math.tan(f/2);
    return new Float32Array([t/asp,0,0,0, 0,t,0,0, 0,0,(f2+n)/(n-f2),-1, 0,0,(2*f2*n)/(n-f2),0]);
  }}
  function look() {{
    const cp=Math.cos(pitch), sp=Math.sin(pitch), cy=Math.cos(yaw), sy=Math.sin(yaw);
    const ex=dist*cp*sy, ey=-dist*sp, ez=dist*cp*cy;
    const upx=0, upy=1, upz=0;
    let zx=-ex, zy=-ey, zz=-ez;
    let zl=Math.hypot(zx,zy,zz); zx/=zl; zy/=zl; zz/=zl;
    let xx=upy*zz-upz*zy, xy=upz*zx-upx*zz, xz=upx*zy-upy*zx;
    let xl=Math.hypot(xx,xy,xz); xx/=xl; xy/=xl; xz/=xl;
    const yx=zy*xz-zz*xy, yy=zz*xx-zx*xz, yz=zx*xy-zy*xx;
    return new Float32Array([
      xx,yx,zx,0, xy,yy,zy,0, xz,yz,zz,0,
      -(xx*ex+xy*ey+xz*ez), -(yx*ex+yy*ey+yz*ez), -(zx*ex+zy*ey+zz*ez), 1
    ]);
  }}
  gl.enable(gl.DEPTH_TEST); gl.clearColor(0.07,0.07,0.08,1);
  (function frame() {{
    const mvp = mul(persp(0.7, canvas.width/canvas.height, span*0.02, span*20), look());
    gl.uniformMatrix4fv(uMVP, false, mvp);
    gl.uniformMatrix4fv(uN, false, look());
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, ntri*3);
    requestAnimationFrame(frame);
  }})();
}}
</script>
</body>
</html>
"""
    html_path.parent.mkdir(parents=True, exist_ok=True)
    html_path.write_text(html, encoding="utf-8")
    return html_path


def _maybe_write_usdz(written: dict[str, Path]) -> None:
    stl_path = written.get("stl")
    if stl_path is None or not stl_path.is_file():
        return
    usdz_path = stl_path.with_suffix(".usdz")
    stl_to_usdz(stl_path, usdz_path)
    written["usdz"] = usdz_path
    html_path = stl_path.with_suffix(".html")
    stl_to_html_viewer(stl_path, html_path)
    written["html"] = html_path


def summarize_params(params: dict[str, Any]) -> str:
    return ", ".join(f"{k}={v}" for k, v in params.items())
