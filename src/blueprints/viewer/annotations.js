/**
 * Scene callouts, dimensions, and a title block.
 *
 * Anchors are CAD millimetres. Notes are small haloed text (no chip), sized
 * from the view so a phone does not cover the model. They are camera-facing
 * planes, not sprites: a tilted camera up (the šikmina lattice) must not
 * mirror the glyphs. The group lives on the Three scene, not the GLB root,
 * so AR and Measure never pick it up.
 */
import * as THREE from "three";
import { Line2 } from "three/addons/lines/Line2.js";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";

const FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const A3_WIDTH_MM = 420;
/** Plate notes, in CSS pixels of the A3 buffer. Small enough to read, not to hide the cut. */
const PLATE_FONT_PX = 36;

const _ndc = new THREE.Vector3();
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _mid = new THREE.Vector3();
const _end = new THREE.Vector3();
const _perp = new THREE.Vector3();

/**
 * CAD mm (x, y length, z up) → glTF metres (x, y up, −y).
 * @param {number[]} point
 */
export function cadMmToGltf(point) {
  return new THREE.Vector3(
    point[0] * 0.001,
    point[2] * 0.001,
    -point[1] * 0.001,
  );
}

/**
 * @param {number} metres
 */
export function formatMm(metres) {
  const mm = Math.abs(metres) * 1000;
  if (!Number.isFinite(mm)) return "";
  if (Math.abs(mm - Math.round(mm)) < 0.05) return `${Math.round(mm)} mm`;
  if (mm >= 100) return `${mm.toFixed(1)} mm`;
  return `${mm.toFixed(2)} mm`;
}

/**
 * @param {string | { en?: string, cs?: string } | null | undefined} text
 * @param {string} locale
 */
export function resolveText(text, locale) {
  if (text == null) return "";
  if (typeof text === "string") return text;
  const loc = locale === "cs" ? "cs" : "en";
  return String(text[loc] || text.en || text.cs || "");
}

/**
 * @param {number} visibleWidthM
 */
export function formatScale(visibleWidthM) {
  if (!Number.isFinite(visibleWidthM) || visibleWidthM <= 0) return "";
  const n = (visibleWidthM * 1000) / A3_WIDTH_MM;
  const rounded = Math.max(1, Math.round(n));
  if (!Number.isFinite(rounded)) return "";
  return `1:${rounded}`;
}

/**
 * Live view: a few percent of the short side, capped so a phone stays readable
 * without covering the assembly. The plate uses a fixed size on the A3 buffer.
 * @param {HTMLCanvasElement} canvas
 * @param {"viewer" | "plate"} ink
 */
export function labelFontPx(canvas, ink) {
  if (ink === "plate") return PLATE_FONT_PX;
  const short = Math.min(
    Math.max(1, canvas.clientWidth),
    Math.max(1, canvas.clientHeight),
  );
  return Math.round(Math.min(14, Math.max(12, short * 0.034)));
}

/**
 * Haloed text on a camera-facing plane. No filled chip.
 * @param {string[]} lines
 * @param {"viewer" | "plate"} ink
 * @param {number} fontPx
 * @param {"center" | "topleft" | "bottomleft"} [anchor]
 */
function makeTextLabel(lines, ink, fontPx, anchor = "center") {
  const clean = lines.map((l) => String(l)).filter((l) => l.length);
  const canvas = document.createElement("canvas");
  const measure = canvas.getContext("2d");
  const font = `600 ${fontPx}px ${FONT_STACK}`;
  const padX = Math.ceil(fontPx * 0.35);
  const padY = Math.ceil(fontPx * 0.2);
  const lineH = Math.ceil(fontPx * 1.25);
  if (measure) measure.font = font;
  let maxW = fontPx;
  if (measure) {
    for (const line of clean) maxW = Math.max(maxW, measure.measureText(line).width);
  }
  const cssW = Math.ceil(maxW + padX * 2);
  const cssH = Math.ceil(Math.max(clean.length, 1) * lineH + padY * 2);
  const scale = 2;
  canvas.width = cssW * scale;
  canvas.height = cssH * scale;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.scale(scale, scale);
    ctx.clearRect(0, 0, cssW, cssH);
    const plate = ink === "plate";
    ctx.font = font;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.lineJoin = "round";
    ctx.miterLimit = 2;
    ctx.lineWidth = Math.max(2, fontPx * 0.28);
    ctx.strokeStyle = plate ? "#ffffff" : "rgba(0,0,0,0.92)";
    ctx.fillStyle = plate ? "#141414" : "#f7f7f8";
    clean.forEach((line, i) => {
      const x = padX;
      const y = padY + lineH * i + lineH * 0.5;
      ctx.strokeText(line, x, y);
      ctx.fillText(line, x, y);
    });
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.flipY = true;
  tex.needsUpdate = true;
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    depthTest: false,
    depthWrite: false,
    transparent: true,
    toneMapped: false,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
  mesh.renderOrder = 30;
  mesh.frustumCulled = false;
  mesh.userData.cssWidth = cssW;
  mesh.userData.cssHeight = cssH;
  mesh.userData.anchor = anchor;
  return mesh;
}

/**
 * @param {number} color
 */
function makeFatLine(color) {
  const geom = new LineGeometry();
  geom.setPositions([0, 0, 0, 0, 0, 0]);
  const mat = new LineMaterial({
    color,
    linewidth: 1.75,
    depthTest: false,
    depthWrite: false,
    transparent: true,
    toneMapped: false,
    worldUnits: false,
  });
  const line = new Line2(geom, mat);
  line.renderOrder = 25;
  line.frustumCulled = false;
  line.computeLineDistances();
  return line;
}

/**
 * @param {Line2} line
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 */
function setFatLine(line, a, b) {
  line.geometry.setPositions([a.x, a.y, a.z, b.x, b.y, b.z]);
  line.computeLineDistances();
}

/**
 * @param {{
 *   scene: THREE.Scene,
 *   getCamera: () => THREE.Camera,
 *   getCanvas: () => HTMLCanvasElement,
 *   getLocale: () => string,
 *   getVisibleWidthM: () => number | null,
 *   getTarget: () => THREE.Vector3,
 * }} opts
 */
export function createAnnotations(opts) {
  const { scene, getCamera, getCanvas, getLocale, getVisibleWidthM, getTarget } = opts;
  const group = new THREE.Group();
  group.name = "Annotations";
  group.userData.blueprintAnnotations = true;
  scene.add(group);

  /** @type {object | null} */
  let spec = null;
  /** @type {"viewer" | "plate"} */
  let ink = "viewer";
  /** User toggle. Capture forces notes on, then restores this. */
  let shown = true;
  /** Font size baked into the current textures. */
  let bakedFont = 0;

  /** @type {Array<{ kind: string, sprite: THREE.Mesh, lines: Line2[], data: object }>} */
  let items = [];
  /** @type {THREE.Mesh | null} */
  let titleSprite = null;
  /** @type {THREE.Mesh | null} */
  let scaleSprite = null;
  /** @type {Line2 | null} */
  let scaleBar = null;

  function inkColor() {
    return ink === "plate" ? 0x141414 : 0xf2f2f4;
  }

  function disposeObject(obj) {
    obj.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      const mat = child.material;
      if (!mat) return;
      if (mat.map) mat.map.dispose();
      mat.dispose();
    });
  }

  function clearGroup() {
    for (const child of [...group.children]) {
      group.remove(child);
      disposeObject(child);
    }
    items = [];
    titleSprite = null;
    scaleSprite = null;
    scaleBar = null;
  }

  function fontPx() {
    return labelFontPx(getCanvas(), ink);
  }

  function applyVisibility() {
    group.visible = Boolean(spec) && shown;
  }

  function rebuild() {
    clearGroup();
    bakedFont = fontPx();
    if (!spec) {
      applyVisibility();
      return;
    }
    const locale = getLocale();
    const color = inkColor();
    const px = bakedFont;
    const list = Array.isArray(spec.annotations) ? spec.annotations : [];
    for (const ann of list) {
      if (!ann || typeof ann !== "object") continue;
      if (ann.kind === "callout" && Array.isArray(ann.anchor)) {
        const text = resolveText(ann.text, locale);
        if (!text) continue;
        const sprite = makeTextLabel(text.split("\n"), ink, px);
        const leader = makeFatLine(color);
        group.add(leader, sprite);
        items.push({
          kind: "callout",
          sprite,
          lines: [leader],
          data: ann,
        });
      } else if (ann.kind === "dim" && Array.isArray(ann.a) && Array.isArray(ann.b)) {
        const sprite = makeTextLabel(["0"], ink, px);
        const extA = makeFatLine(color);
        const extB = makeFatLine(color);
        const dim = makeFatLine(color);
        const tickA = makeFatLine(color);
        const tickB = makeFatLine(color);
        group.add(extA, extB, dim, tickA, tickB, sprite);
        items.push({
          kind: "dim",
          sprite,
          lines: [extA, extB, dim, tickA, tickB],
          data: ann,
        });
      }
    }

    const title = resolveText(spec.title, locale);
    const project = spec.project ? String(spec.project) : "";
    const titleLines = [...title.split("\n"), project].filter(Boolean);
    if (titleLines.length) {
      titleSprite = makeTextLabel(titleLines, ink, px, "topleft");
      group.add(titleSprite);
    }
    scaleSprite = makeTextLabel(["1:1"], ink, px, "bottomleft");
    scaleBar = makeFatLine(color);
    group.add(scaleBar, scaleSprite);
    applyVisibility();
  }

  /**
   * @param {THREE.Vector3} world
   * @param {THREE.Vector3} [out]
   */
  function projectNdc(world, out = _ndc) {
    return out.copy(world).project(getCamera());
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} zNdc
   * @param {THREE.Vector3} [out]
   */
  function unproject(x, y, zNdc, out = new THREE.Vector3()) {
    return out.set(x, y, zNdc).unproject(getCamera());
  }

  /**
   * @param {THREE.Vector3} world
   */
  function worldPerPixel(world) {
    const cam = getCamera();
    const canvas = getCanvas();
    const h = Math.max(1, canvas.clientHeight);
    if (cam.isOrthographicCamera) {
      const zoom = Math.max(cam.zoom, 1e-6);
      return (cam.top - cam.bottom) / zoom / h;
    }
    const dist = Math.max(cam.position.distanceTo(world), 1e-4);
    const vFov = ((cam.fov || 45) * Math.PI) / 180;
    return (2 * Math.tan(vFov / 2) * dist) / h;
  }

  const _right = new THREE.Vector3();
  const _up = new THREE.Vector3();

  /**
   * Face the camera with its own up, so a tilted lattice view cannot mirror text.
   * @param {THREE.Mesh} mesh
   * @param {THREE.Vector3} world
   */
  function placeSprite(mesh, world) {
    const cam = getCamera();
    const wpp = worldPerPixel(world);
    const wpx = wpp * mesh.userData.cssWidth;
    const hpx = wpp * mesh.userData.cssHeight;
    _right.set(1, 0, 0).applyQuaternion(cam.quaternion);
    _up.set(0, 1, 0).applyQuaternion(cam.quaternion);
    const anchor = mesh.userData.anchor || "center";
    mesh.position.copy(world);
    if (anchor === "topleft") {
      mesh.position.addScaledVector(_right, wpx * 0.5);
      mesh.position.addScaledVector(_up, -hpx * 0.5);
    } else if (anchor === "bottomleft") {
      mesh.position.addScaledVector(_right, wpx * 0.5);
      mesh.position.addScaledVector(_up, hpx * 0.5);
    }
    mesh.quaternion.copy(cam.quaternion);
    mesh.scale.set(wpx, hpx, 1);
  }

  function syncResolution() {
    const canvas = getCanvas();
    const w = Math.max(1, canvas.width);
    const h = Math.max(1, canvas.height);
    group.traverse((obj) => {
      const mat = obj.material;
      if (mat && mat.resolution) mat.resolution.set(w, h);
    });
  }

  /**
   * @param {THREE.Mesh} sprite
   * @param {string[]} lines
   */
  function replaceSpriteText(sprite, lines) {
    const next = makeTextLabel(lines, ink, bakedFont || fontPx(), sprite.userData.anchor);
    sprite.material.map?.dispose();
    sprite.material.dispose();
    sprite.material = next.material;
    sprite.userData.cssWidth = next.userData.cssWidth;
    sprite.userData.cssHeight = next.userData.cssHeight;
    next.geometry.dispose();
  }

  function update() {
    if (!spec || !shown) return;
    const px = fontPx();
    if (px !== bakedFont) rebuild();
    if (!group.visible) return;
    syncResolution();
    const locale = getLocale();
    const cam = getCamera();
    cam.updateMatrixWorld();

    for (const item of items) {
      if (item.kind === "callout") {
        const anchor = cadMmToGltf(item.data.anchor);
        const ndc = projectNdc(anchor, _a);
        const off = Array.isArray(item.data.offset) ? item.data.offset : [0.08, 0.06];
        const lx = ndc.x + Number(off[0] || 0) * 2;
        const ly = ndc.y + Number(off[1] || 0) * 2;
        const label = unproject(lx, ly, ndc.z, _b);
        placeSprite(item.sprite, label);
        const wpp = worldPerPixel(label);
        const half = wpp * item.sprite.userData.cssWidth * 0.5;
        _end.copy(label).sub(anchor);
        const len = _end.length();
        if (len > half + wpp) {
          _end.setLength(len - half);
          _end.add(anchor);
        } else {
          _end.copy(label);
        }
        setFatLine(item.lines[0], anchor, _end);
      } else if (item.kind === "dim") {
        const pa = cadMmToGltf(item.data.a);
        const pb = cadMmToGltf(item.data.b);
        const na = projectNdc(pa, _a);
        const nb = projectNdc(pb, _b);
        let dx = nb.x - na.x;
        let dy = nb.y - na.y;
        const slen = Math.hypot(dx, dy) || 1e-6;
        dx /= slen;
        dy /= slen;
        const side = Number(item.data.offset) || 0.04;
        const px = -dy * side * 2;
        const py = dx * side * 2;
        const z = (na.z + nb.z) * 0.5;
        const da = unproject(na.x + px, na.y + py, z, new THREE.Vector3());
        const db = unproject(nb.x + px, nb.y + py, z, new THREE.Vector3());
        const wpp = worldPerPixel(da);
        const gap = wpp * 6;
        const overrun = wpp * 8;
        _perp.copy(da).sub(pa);
        const extLen = _perp.length() || 1;
        _perp.multiplyScalar((extLen + overrun) / extLen);
        const extAEnd = pa.clone().add(_perp);
        _perp.copy(db).sub(pb);
        const extLenB = _perp.length() || 1;
        _perp.multiplyScalar((extLenB + overrun) / extLenB);
        const extBEnd = pb.clone().add(_perp);
        const startA = pa.clone().lerp(da, Math.min(0.85, gap / extLen));
        const startB = pb.clone().lerp(db, Math.min(0.85, gap / extLenB));
        setFatLine(item.lines[0], startA, extAEnd);
        setFatLine(item.lines[1], startB, extBEnd);
        setFatLine(item.lines[2], da, db);
        const tick = wpp * 10;
        const tickTip = unproject(
          na.x + px - dy * 0.012,
          na.y + py + dx * 0.012,
          z,
          new THREE.Vector3(),
        );
        const tickDir = tickTip.sub(da);
        if (tickDir.lengthSq() < 1e-16) tickDir.set(0, tick, 0);
        else tickDir.setLength(tick);
        setFatLine(item.lines[3], da.clone().sub(tickDir), da.clone().add(tickDir));
        setFatLine(item.lines[4], db.clone().sub(tickDir), db.clone().add(tickDir));
        _mid.copy(da).lerp(db, 0.5);
        const lift = unproject(na.x + px - dy * 0.03, na.y + py + dx * 0.03, z, new THREE.Vector3()).sub(
          unproject(na.x + px, na.y + py, z, new THREE.Vector3()),
        );
        if (lift.lengthSq() > 1e-12) {
          _mid.add(lift);
        }
        const custom = resolveText(item.data.text, locale);
        const label = custom || formatMm(pa.distanceTo(pb));
        const shown = item.sprite.userData.labelText;
        if (shown !== label) {
          replaceSpriteText(item.sprite, [label]);
          item.sprite.userData.labelText = label;
        }
        placeSprite(item.sprite, _mid);
      }
    }

    const targetZ = projectNdc(getTarget(), _end).z;

    if (titleSprite) {
      const corner = unproject(-0.94, 0.9, targetZ, new THREE.Vector3());
      placeSprite(titleSprite, corner);
    }

    const widthM = getVisibleWidthM();
    const scaleLabel = formatScale(widthM == null ? NaN : widthM);
    if (scaleSprite && scaleBar) {
      const niceM = widthM != null && widthM > 8 ? 2 : 1;
      const origin = unproject(-0.9, -0.86, targetZ, new THREE.Vector3());
      const right = unproject(-0.9 + 0.08, -0.86, targetZ, new THREE.Vector3()).sub(origin);
      // Bar length in world at this depth, matching `niceM` metres of the ortho frame.
      const wpp = worldPerPixel(origin);
      const barPx =
        widthM && widthM > 0
          ? (niceM / widthM) * Math.max(1, getCanvas().clientWidth)
          : 80;
      if (right.lengthSq() > 1e-12) right.setLength(Math.max(barPx * wpp, wpp * 40));
      else right.set(wpp * 80, 0, 0);
      setFatLine(scaleBar, origin, origin.clone().add(right));
      const shown = scaleSprite.userData.labelText;
      const line = scaleLabel ? `${scaleLabel}  ·  ${Math.round(niceM * 1000)} mm` : "";
      if (shown !== line) {
        replaceSpriteText(scaleSprite, line ? [line] : ["—"]);
        scaleSprite.userData.labelText = line;
      }
      const above = unproject(-0.9, -0.8, targetZ, new THREE.Vector3()).sub(origin);
      placeSprite(scaleSprite, origin.clone().add(above));
    }
  }

  return {
    group,
    /**
     * @param {object | null | undefined} next
     */
    setSpec(next) {
      spec = next && typeof next === "object" ? next : null;
      rebuild();
      update();
    },
    /**
     * @param {"viewer" | "plate"} next
     */
    setInk(next) {
      ink = next === "plate" ? "plate" : "viewer";
      rebuild();
      update();
    },
    /**
     * @param {boolean} next
     */
    setVisible(next) {
      shown = Boolean(next);
      applyVisibility();
      if (group.visible) update();
    },
    isVisible() {
      return shown;
    },
    relocalize() {
      rebuild();
      update();
    },
    update,
    clear() {
      spec = null;
      clearGroup();
      group.visible = false;
    },
  };
}
