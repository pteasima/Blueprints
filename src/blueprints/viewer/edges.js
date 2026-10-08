/**
 * CAD edge overlay (hard edges + cut silhouettes) for the WebGL viewer.
 * Uses Three.js fat lines (LineSegments2) — native GL linewidth is ignored on
 * most platforms. Depth bias is patched into LineMaterial because
 * polygonOffset is a no-op under logarithmicDepthBuffer (gl_FragDepth rewrite).
 */
import * as THREE from "three";
import { LineSegments2 } from "three/addons/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import {
  cutEdgeSegmentPositions,
  worldPlanesToLocal,
} from "./clipGeometry.js";

export const EDGE_OVERLAY_KEY = "blueprints.edgeMode";
/** @deprecated Migrated to EDGE_OVERLAY_KEY on first load. */
const EDGE_OVERLAY_KEY_LEGACY = "blueprints.edgesEnabled";

/** No CAD edge overlay. */
export const EDGE_MODE_NONE = "none";
/** Edges fade with parent part opacity. */
export const EDGE_MODE_TRANSPARENT = "transparent";
/** Edges stay fully opaque while faces fade. */
export const EDGE_MODE_OPAQUE = "opaque";

/** @typedef {typeof EDGE_MODE_NONE | typeof EDGE_MODE_TRANSPARENT | typeof EDGE_MODE_OPAQUE} EdgeMode */

/** Dihedral threshold (°): hide coplanar triangulation edges, keep CAD creases. */
export const EDGE_THRESHOLD_DEG = 20;

/** Screen-space stroke width (px). Native GL lines cannot do this. */
export const EDGE_LINEWIDTH_PX = 2.5;

/** Always black for contrast on Solid / Realistic faces. */
export const EDGE_COLOR = 0x000000;

/**
 * Pull strokes toward the camera in view space (metres), before projection.
 * Camera looks down −Z, so a positive Z is closer. A fraction of a millimetre
 * wins a coplanar face without letting a line behind 8 mm of tile punch
 * through at house-scale near/far, in perspective or ISO.
 */
export const EDGE_VIEW_BIAS_M = 0.00035;

/**
 * Same quantity as `LAYER_FRAG_DEPTH_STEP` in materials.js. One extra step
 * past the face bias keeps the stroke on its own face. A flat 5e-4 here was
 * ~80 mm of ISO window-Z at house scale, so every tile and grout edge read
 * through the solid and the masonry bottom at z=0 showed up as a line.
 */
const EDGE_LAYER_STEP = 2e-6;

/**
 * @param {THREE.Mesh} mesh
 */
function edgeFragDepthBias(mesh) {
  const mat = Array.isArray(mesh?.material) ? mesh.material[0] : mesh?.material;
  const face = mat?.userData?.layerDepthBias ?? 0;
  return (Number(face) + 1) * EDGE_LAYER_STEP;
}

/**
 * Fat-line overlays live on this layer so an opaque frame can draw them
 * without rasterizing every CAD face a second time. The camera stays on
 * layer 0 for faces; the edge pass switches to this layer.
 */
export const EDGE_LAYER = 1;

/** Cache-key bump when bias shader strategy changes. */
const EDGE_BIAS_SHADER_REV = 3;

/** Grout wider than this is not a joint face (tile thickness is 8.5 mm). */
const JOINT_MIN_M = 0.0012;
const JOINT_MAX_M = 0.0036;
/** Skip end caps and crossings shorter than a real joint. */
const JOINT_LINE_MIN_M = 0.02;
/** Tile edges this close to a parallel grout centreline are the same joint. */
const TILE_EDGE_DROP_M = 0.0035;
/** Cap faces are larger than the 8.5 mm tile thickness. */
const TILE_CAP_MIN_M = 0.012;

/**
 * @param {unknown} v
 * @returns {EdgeMode | null}
 */
function parseEdgeMode(v) {
  if (v === EDGE_MODE_NONE || v === EDGE_MODE_TRANSPARENT || v === EDGE_MODE_OPAQUE) {
    return v;
  }
  if (v === "1" || v === "true") return EDGE_MODE_TRANSPARENT;
  if (v === "0" || v === "false") return EDGE_MODE_NONE;
  return null;
}

/**
 * @returns {EdgeMode}
 */
export function loadEdgeMode() {
  try {
    const cur = parseEdgeMode(localStorage.getItem(EDGE_OVERLAY_KEY));
    if (cur) return cur;
    const legacy = parseEdgeMode(localStorage.getItem(EDGE_OVERLAY_KEY_LEGACY));
    if (legacy) {
      saveEdgeMode(legacy);
      return legacy;
    }
  } catch {
    /* ignore */
  }
  return EDGE_MODE_TRANSPARENT;
}

/**
 * @param {EdgeMode} mode
 */
export function saveEdgeMode(mode) {
  try {
    localStorage.setItem(EDGE_OVERLAY_KEY, mode);
  } catch {
    /* ignore */
  }
}

/**
 * @returns {boolean}
 * @deprecated Prefer loadEdgeMode().
 */
export function loadEdgesEnabled() {
  return loadEdgeMode() !== EDGE_MODE_NONE;
}

/**
 * @param {boolean} on
 * @deprecated Prefer saveEdgeMode().
 */
export function saveEdgesEnabled(on) {
  saveEdgeMode(on ? EDGE_MODE_TRANSPARENT : EDGE_MODE_NONE);
}

/**
 * @param {THREE.Object3D} obj
 * @returns {boolean}
 */
export function isEdgeOverlay(obj) {
  return Boolean(obj && obj.userData && obj.userData.isEdgeOverlay);
}

/**
 * @param {THREE.BufferGeometry} meshGeometry
 * @returns {Float32Array}
 */
function hardEdgePositions(meshGeometry) {
  const src = meshGeometry?.getAttribute?.("position");
  if (!src || !src.count) return new Float32Array(0);
  const edges = new THREE.EdgesGeometry(meshGeometry, EDGE_THRESHOLD_DEG);
  const pos = edges.getAttribute("position");
  const arr =
    pos && pos.array
      ? pos.array instanceof Float32Array
        ? pos.array.slice()
        : Float32Array.from(pos.array)
      : new Float32Array(0);
  edges.dispose();
  return arr;
}

/**
 * @param {Float32Array} hard
 * @param {Float32Array} cut
 * @returns {Float32Array}
 */
function concatPositions(hard, cut) {
  if (!cut.length) return hard;
  if (!hard.length) return cut;
  const out = new Float32Array(hard.length + cut.length);
  out.set(hard, 0);
  out.set(cut, hard.length);
  return out;
}

const _vec = new THREE.Vector3();

/**
 * @param {Float32Array} pos
 */
function segmentsFromPairs(pos) {
  /** @type {{ax:number,ay:number,az:number,bx:number,by:number,bz:number,dx:number,dy:number,dz:number,len:number}[]} */
  const segs = [];
  for (let i = 0; i + 5 < pos.length; i += 6) {
    const ax = pos[i];
    const ay = pos[i + 1];
    const az = pos[i + 2];
    const bx = pos[i + 3];
    const by = pos[i + 4];
    const bz = pos[i + 5];
    const dx = bx - ax;
    const dy = by - ay;
    const dz = bz - az;
    const len = Math.hypot(dx, dy, dz);
    if (len < 1e-6) continue;
    segs.push({ ax, ay, az, bx, by, bz, dx: dx / len, dy: dy / len, dz: dz / len, len });
  }
  return segs;
}

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} sz
 * @param {number} ex
 * @param {number} ey
 * @param {number} ez
 */
function quantLineKey(sx, sy, sz, ex, ey, ez) {
  const q = (v) => Math.round(v / 0.0005);
  let ax = q(sx);
  let ay = q(sy);
  let az = q(sz);
  let bx = q(ex);
  let by = q(ey);
  let bz = q(ez);
  if (ax > bx || (ax === bx && ay > by) || (ax === bx && ay === by && az > bz)) {
    const tx = ax;
    ax = bx;
    bx = tx;
    const ty = ay;
    ay = by;
    by = ty;
    const tz = az;
    az = bz;
    bz = tz;
  }
  return `${ax},${ay},${az},${bx},${by},${bz}`;
}

/**
 * One centreline per grout joint. Box edges of a 2 mm recessed strip read as
 * a rectangle; the midline is the joint.
 * @param {Float32Array} edgePositions mesh-local metres
 * @returns {Float32Array}
 */
export function groutCenterlines(edgePositions) {
  const segs = segmentsFromPairs(edgePositions);
  /** @type {number[]} */
  const out = [];
  const seen = new Set();
  for (let i = 0; i < segs.length; i++) {
    const a = segs[i];
    for (let j = i + 1; j < segs.length; j++) {
      const b = segs[j];
      const parallel = Math.abs(a.dx * b.dx + a.dy * b.dy + a.dz * b.dz);
      if (parallel < 0.985) continue;
      const vx = a.ax - b.ax;
      const vy = a.ay - b.ay;
      const vz = a.az - b.az;
      const along = vx * a.dx + vy * a.dy + vz * a.dz;
      const px = vx - along * a.dx;
      const py = vy - along * a.dy;
      const pz = vz - along * a.dz;
      const dist = Math.hypot(px, py, pz);
      if (dist < JOINT_MIN_M || dist > JOINT_MAX_M) continue;
      const b0 =
        (b.ax - a.ax) * a.dx + (b.ay - a.ay) * a.dy + (b.az - a.az) * a.dz;
      const b1 =
        (b.bx - a.ax) * a.dx + (b.by - a.ay) * a.dy + (b.bz - a.az) * a.dz;
      const lo = Math.max(0, Math.min(b0, b1));
      const hi = Math.min(a.len, Math.max(b0, b1));
      if (hi - lo < JOINT_LINE_MIN_M) continue;
      const hx = (-px / dist) * (dist * 0.5);
      const hy = (-py / dist) * (dist * 0.5);
      const hz = (-pz / dist) * (dist * 0.5);
      const sx = a.ax + a.dx * lo + hx;
      const sy = a.ay + a.dy * lo + hy;
      const sz = a.az + a.dz * lo + hz;
      const ex = a.ax + a.dx * hi + hx;
      const ey = a.ay + a.dy * hi + hy;
      const ez = a.az + a.dz * hi + hz;
      const key = quantLineKey(sx, sy, sz, ex, ey, ez);
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(sx, sy, sz, ex, ey, ez);
    }
  }
  return new Float32Array(out);
}

/**
 * @param {THREE.BufferGeometry} geometry
 */
function averageNormal(geometry) {
  const pos = geometry.getAttribute("position");
  const index = geometry.getIndex();
  let nx = 0;
  let ny = 0;
  let nz = 0;
  const count = index ? index.count : pos.count;
  const at = (i) => {
    const vi = index ? index.getX(i) : i;
    return [pos.getX(vi), pos.getY(vi), pos.getZ(vi)];
  };
  for (let i = 0; i + 2 < count; i += 3) {
    const a = at(i);
    const b = at(i + 1);
    const c = at(i + 2);
    const ux = b[0] - a[0];
    const uy = b[1] - a[1];
    const uz = b[2] - a[2];
    const vx = c[0] - a[0];
    const vy = c[1] - a[1];
    const vz = c[2] - a[2];
    nx += uy * vz - uz * vy;
    ny += uz * vx - ux * vz;
    nz += ux * vy - uy * vx;
  }
  const len = Math.hypot(nx, ny, nz) || 1;
  return { x: nx / len, y: ny / len, z: nz / len };
}

/**
 * Smaller in-plane extent of a face, metres.
 * @param {THREE.BufferGeometry} geometry
 * @param {{x:number,y:number,z:number}} normal
 */
function inPlaneMin(geometry, normal) {
  const pos = geometry.getAttribute("position");
  let tx;
  let ty;
  let tz;
  if (Math.abs(normal.z) < 0.9) {
    tx = -normal.y;
    ty = normal.x;
    tz = 0;
  } else {
    tx = 0;
    ty = -normal.z;
    tz = normal.y;
  }
  const tl = Math.hypot(tx, ty, tz) || 1;
  tx /= tl;
  ty /= tl;
  tz /= tl;
  const bx = normal.y * tz - normal.z * ty;
  const by = normal.z * tx - normal.x * tz;
  const bz = normal.x * ty - normal.y * tx;
  let minT = Infinity;
  let maxT = -Infinity;
  let minB = Infinity;
  let maxB = -Infinity;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const t = x * tx + y * ty + z * tz;
    const b = x * bx + y * by + z * bz;
    if (t < minT) minT = t;
    if (t > maxT) maxT = t;
    if (b < minB) minB = b;
    if (b > maxB) maxB = b;
  }
  return Math.min(maxT - minT, maxB - minB);
}

/**
 * Tile cap the camera should outline. Thickness faces (8.5 mm) and the
 * underside stay off so a box does not draw every edge through the grout.
 * Floor-tile sides are only the ceramic thickness tall once the slope is
 * included (~15 mm); wall faces are at least the piece above the door.
 * Geometry is CAD Z-up metres. Depth hides the back of a wall tile.
 * @param {THREE.BufferGeometry} geometry
 */
export function isExposedTileCap(geometry) {
  const pos = geometry.getAttribute("position");
  if (!pos || pos.count < 3) return false;
  const normal = averageNormal(geometry);
  const minPlane = inPlaneMin(geometry, normal);
  if (normal.z > 0.5) return minPlane > TILE_CAP_MIN_M;
  if (normal.z < -0.5) return false;
  if (!geometry.boundingBox) geometry.computeBoundingBox();
  const height = geometry.boundingBox.max.z - geometry.boundingBox.min.z;
  if (height < 0.05) return false;
  return minPlane > TILE_CAP_MIN_M;
}

/**
 * @param {THREE.Mesh} mesh
 * @param {Float32Array} local
 */
function toWorldPositions(mesh, local) {
  mesh.updateWorldMatrix(true, false);
  const m = mesh.matrixWorld;
  const out = new Float32Array(local.length);
  for (let i = 0; i < local.length; i += 3) {
    _vec.set(local[i], local[i + 1], local[i + 2]).applyMatrix4(m);
    out[i] = _vec.x;
    out[i + 1] = _vec.y;
    out[i + 2] = _vec.z;
  }
  return out;
}

/**
 * Drop tile edges that run along a grout centreline. The joint is one stroke.
 * @param {Float32Array} local
 * @param {THREE.Mesh} mesh
 * @param {Float32Array} linesWorld
 */
function dropEdgesNearGrout(local, mesh, linesWorld) {
  if (!linesWorld || linesWorld.length < 6) return local;
  const world = toWorldPositions(mesh, local);
  const lines = segmentsFromPairs(linesWorld);
  /** @type {number[]} */
  const kept = [];
  for (let i = 0; i + 5 < local.length; i += 6) {
    const ax = world[i];
    const ay = world[i + 1];
    const az = world[i + 2];
    const bx = world[i + 3];
    const by = world[i + 4];
    const bz = world[i + 5];
    const dx = bx - ax;
    const dy = by - ay;
    const dz = bz - az;
    const len = Math.hypot(dx, dy, dz);
    if (len < 1e-6) continue;
    const ux = dx / len;
    const uy = dy / len;
    const uz = dz / len;
    let drop = false;
    for (const line of lines) {
      const parallel = Math.abs(ux * line.dx + uy * line.dy + uz * line.dz);
      if (parallel < 0.95) continue;
      const vx = ax - line.ax;
      const vy = ay - line.ay;
      const vz = az - line.az;
      const along = vx * line.dx + vy * line.dy + vz * line.dz;
      const px = vx - along * line.dx;
      const py = vy - along * line.dy;
      const pz = vz - along * line.dz;
      if (Math.hypot(px, py, pz) > TILE_EDGE_DROP_M) continue;
      const a0 =
        (ax - line.ax) * line.dx + (ay - line.ay) * line.dy + (az - line.az) * line.dz;
      const a1 =
        (bx - line.ax) * line.dx + (by - line.ay) * line.dy + (bz - line.az) * line.dz;
      const e0 = Math.min(a0, a1);
      const e1 = Math.max(a0, a1);
      const overlap = Math.min(e1, line.len) - Math.max(e0, 0);
      if (overlap > 0.01) {
        drop = true;
        break;
      }
    }
    if (drop) continue;
    kept.push(local[i], local[i + 1], local[i + 2], local[i + 3], local[i + 4], local[i + 5]);
  }
  return new Float32Array(kept);
}

/**
 * Match fat-line overlay alpha to the parent mesh fade.
 * @param {THREE.Material | null | undefined} mat
 * @param {number} opacity 0–1
 */
export function applyEdgeMaterialOpacity(mat, opacity) {
  if (!mat) return;
  const o = Math.max(0, Math.min(1, Number(opacity) || 0));
  if (o < 1) {
    mat.transparent = true;
    mat.opacity = o;
    mat.depthWrite = false;
  } else {
    mat.transparent = false;
    mat.opacity = 1;
  }
  mat.needsUpdate = true;
}

/**
 * Read face opacity from a CAD mesh (first material).
 * @param {THREE.Mesh} mesh
 * @returns {number}
 */
function meshFaceOpacity(mesh) {
  if (!mesh?.visible) return 0;
  const src = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
  if (!src) return 1;
  if (src.transparent && typeof src.opacity === "number") return src.opacity;
  return 1;
}

/**
 * Overlay alpha for the current edge mode.
 * @param {THREE.Mesh} mesh
 * @param {EdgeMode} [mode]
 * @returns {number}
 */
function overlayOpacityForMesh(mesh, mode = EDGE_MODE_TRANSPARENT) {
  if (mode === EDGE_MODE_NONE) return 0;
  if (mode === EDGE_MODE_OPAQUE) return mesh?.visible === false ? 0 : 1;
  return meshFaceOpacity(mesh);
}

/**
 * LineMaterial that wins coplanar depth tests under log-depth / ortho.
 * @param {THREE.Plane[]} planes
 * @param {{ x: number, y: number } | null} res
 * @param {number} [opacity]
 * @returns {LineMaterial}
 */
function createEdgeMaterial(planes, res, opacity = 1, fragBias = EDGE_LAYER_STEP) {
  const o = Math.max(0, Math.min(1, Number(opacity) || 0));
  const bias = Number.isFinite(fragBias) ? fragBias : EDGE_LAYER_STEP;
  const mat = new LineMaterial({
    color: EDGE_COLOR,
    linewidth: EDGE_LINEWIDTH_PX,
    worldUnits: false,
    toneMapped: false,
    depthTest: true,
    depthWrite: false,
    transparent: o < 1,
    opacity: o < 1 ? o : 1,
    clippingPlanes: planes,
    clipIntersection: false,
  });
  // polygonOffset is ineffective once logdepth writes gl_FragDepth — bias in-shader.
  mat.onBeforeCompile = (shader) => {
    // View-space pull before clip and log-depth, so perspective and ISO agree.
    shader.vertexShader = shader.vertexShader.replace(
      `vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,
      `vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${EDGE_VIEW_BIAS_M};
			end.z += ${EDGE_VIEW_BIAS_M};`,
    );
    // One extra face-bias step. Do not add fwidth: at a grazing edge that
    // derivative is large enough to pull hidden lines through the tile.
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <logdepthbuf_fragment>",
      `#include <logdepthbuf_fragment>
			#if defined( USE_LOGDEPTHBUF )
				gl_FragDepth -= ${bias};
			#else
				gl_FragDepth = gl_FragCoord.z - ${bias};
			#endif`,
    );
  };
  mat.customProgramCacheKey = () =>
    `bp-edge-depth-bias-r${EDGE_BIAS_SHADER_REV}-${bias}-${EDGE_VIEW_BIAS_M}`;
  if (res) mat.resolution.set(res.x, res.y);
  return mat;
}

/**
 * Fat line used only inside a settled peel layer. The shader keeps fragments
 * whose eye-space Z matches the current peel layer, so a rear stroke is
 * composited behind the glass in front of it instead of stamped on top.
 * Shared uniform objects are the peel pass's own; stage 0 (the fast path)
 * never draws this line.
 * @param {Float32Array} positions start/end xyz pairs, world space
 * @param {number} opacity
 * @param {THREE.Plane[]} planes
 * @param {{
 *   stage: { value: number },
 *   prevZ: { value: THREE.Texture | null },
 *   peelZ: { value: THREE.Texture | null },
 *   opaqueZ: { value: THREE.Texture | null },
 *   eps: { value: number },
 *   resolution: { value: THREE.Vector2 },
 * }} peel
 * @returns {LineSegments2}
 */
export function createPeeledEdgeLine(positions, opacity, planes, peel) {
  const o = Math.max(0, Math.min(1, Number(opacity) || 0));
  const mat = createEdgeMaterial(planes, null, o);
  mat.depthTest = false;
  mat.depthWrite = false;
  mat.transparent = true;
  mat.opacity = o;
  const prevCompile = mat.onBeforeCompile?.bind(mat);
  const prevKey = mat.customProgramCacheKey?.bind(mat);
  mat.customProgramCacheKey = () => `${prevKey ? prevKey() : "edge"}|peelEdge1`;
  mat.onBeforeCompile = (shader, renderer) => {
    prevCompile?.(shader, renderer);
    shader.uniforms.uPeelStage = peel.stage;
    shader.uniforms.tPrevViewZ = peel.prevZ;
    shader.uniforms.tPeelViewZ = peel.peelZ;
    shader.uniforms.tOpaqueViewZ = peel.opaqueZ;
    shader.uniforms.uViewZEps = peel.eps;
    shader.uniforms.uBpPeelRes = peel.resolution;
    shader.vertexShader = shader.vertexShader.replace(
      "void main() {",
      "varying float vBpEdgeViewZ;\nvoid main() {",
    );
    shader.vertexShader = shader.vertexShader.replace(
      "vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation",
      `vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation
			vBpEdgeViewZ = -mvPosition.z;`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "void main() {",
      `uniform float uPeelStage;
			uniform sampler2D tPrevViewZ;
			uniform sampler2D tPeelViewZ;
			uniform sampler2D tOpaqueViewZ;
			uniform float uViewZEps;
			uniform vec2 uBpPeelRes;
			varying float vBpEdgeViewZ;
			void main() {`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "gl_FragColor = vec4( diffuseColor.rgb, alpha );",
      `if (uPeelStage > 0.5) {
				vec2 peelUv = gl_FragCoord.xy / uBpPeelRes;
				float opaqueZ = texture2D(tOpaqueViewZ, peelUv).r;
				float prevZ = texture2D(tPrevViewZ, peelUv).r;
				float edgeZ = vBpEdgeViewZ;
				float eps = max(uViewZEps, 1e-3 * max(edgeZ, 1.0));
				if (opaqueZ > 1e-4 && edgeZ >= opaqueZ - eps) discard;
				if (edgeZ <= prevZ + eps) discard;
				if (uPeelStage >= 1.5) {
					float peelZ = texture2D(tPeelViewZ, peelUv).r;
					if (peelZ > 50000.0) discard;
					float peelEps = max(uViewZEps, 1e-2 * max(peelZ, 1.0));
					if (edgeZ > peelZ + peelEps) discard;
				}
			}
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`,
    );
  };
  mat.needsUpdate = true;
  const geom = new LineSegmentsGeometry();
  geom.setPositions(positions);
  const line = new LineSegments2(geom, mat);
  line.frustumCulled = false;
  line.matrixAutoUpdate = false;
  line.renderOrder = 1000;
  line.raycast = () => {};
  line.userData.isPeeledEdgeBatch = true;
  return line;
}

/**
 * Dispose geometry/material and detach one overlay line object.
 * @param {THREE.Object3D} lines
 */
function disposeOverlay(lines) {
  if (!lines) return;
  lines.parent?.remove(lines);
  lines.geometry?.dispose?.();
  const mat = lines.material;
  if (Array.isArray(mat)) {
    for (const m of mat) m?.dispose?.();
  } else {
    mat?.dispose?.();
  }
}

/**
 * Remove every edge overlay under a root (or a single mesh).
 * @param {THREE.Object3D | null | undefined} root
 */
export function clearEdgeOverlays(root) {
  if (!root) return;
  /** @type {THREE.Object3D[]} */
  const doomed = [];
  root.traverse((obj) => {
    if (isEdgeOverlay(obj)) doomed.push(obj);
  });
  for (const obj of doomed) disposeOverlay(obj);
}

/**
 * Hide/show overlays without disposing (depth-peel overrideMaterial safety).
 * @param {THREE.Object3D | null | undefined} root
 * @param {boolean} visible
 */
export function setEdgeOverlaysVisible(root, visible) {
  if (!root) return;
  root.traverse((obj) => {
    if (isEdgeOverlay(obj)) obj.visible = visible;
  });
}

/**
 * Keep fat-line resolution in sync with the drawing buffer.
 * @param {THREE.Object3D | null | undefined} root
 * @param {number} width
 * @param {number} height
 */
export function setEdgeOverlayResolution(root, width, height) {
  if (!root) return;
  const w = Math.max(1, width);
  const h = Math.max(1, height);
  root.traverse((obj) => {
    if (!isEdgeOverlay(obj) || !obj.material) return;
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const m of mats) {
      if (m?.resolution) m.resolution.set(w, h);
    }
  });
}

/**
 * Apply clipping planes to edge line materials.
 * @param {THREE.Object3D | null | undefined} root
 * @param {THREE.Plane[]} planes
 */
export function applyEdgeClipping(root, planes) {
  if (!root) return;
  const list = planes || [];
  root.traverse((obj) => {
    if (!isEdgeOverlay(obj) || !obj.material) return;
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const m of mats) {
      if (!m) continue;
      const prevCount = m.clippingPlanes ? m.clippingPlanes.length : 0;
      m.clippingPlanes = list;
      m.clipIntersection = false;
      // Plane values are uniforms. Recompile only when the plane count changes.
      if (prevCount !== list.length) m.needsUpdate = true;
    }
  });
}

/**
 * Rebuild overlay geometry: hard CAD edges + plane∩mesh cut silhouettes.
 * @param {THREE.Mesh} mesh
 * @param {LineSegments2} overlay
 * @param {THREE.Plane[]} worldPlanes
 */
/**
 * @param {THREE.Mesh} mesh
 * @param {string} label
 * @param {Float32Array} groutLinesWorld
 * @returns {Float32Array} mesh-local segments
 */
function visibleEdgePositions(mesh, label, groutLinesWorld) {
  let hard = mesh.userData.bpHardEdgePositions;
  if (!(hard instanceof Float32Array)) {
    hard = hardEdgePositions(mesh.geometry);
    mesh.userData.bpHardEdgePositions = hard;
  }
  if (label === "grout") {
    // Centreline only. The recessed box's own edges are the ISO rectangles.
    return groutCenterlines(hard);
  }
  if (label === "tile") {
    if (!isExposedTileCap(mesh.geometry)) return new Float32Array(0);
    return dropEdgesNearGrout(hard, mesh, groutLinesWorld);
  }
  return hard;
}

function rebuildOverlayGeometry(mesh, overlay, worldPlanes, label, groutLinesWorld) {
  mesh.updateWorldMatrix(true, false);
  const hard = visibleEdgePositions(mesh, label, groutLinesWorld);
  const localPlanes = worldPlanesToLocal(worldPlanes, mesh.matrixWorld);
  const cut = cutEdgeSegmentPositions(mesh.geometry, localPlanes);
  const packed = concatPositions(hard, cut);
  const geom = new LineSegmentsGeometry();
  const prev = overlay.geometry;
  if (packed.length >= 6) {
    geom.setPositions(packed);
    overlay.geometry = geom;
    overlay.computeLineDistances();
  } else {
    overlay.geometry = geom;
  }
  prev?.dispose?.();
}

/**
 * Ensure each mesh has a matching fat-line edge child when enabled.
 * @param {Map<string, THREE.Object3D[]>} partsMap
 * @param {boolean} enabled
 * @param {{
 *   clippingPlanes?: THREE.Plane[] | null,
 *   resolution?: { x: number, y: number } | null,
 *   edgeMode?: EdgeMode,
 * }} [opts]
 */
/**
 * Grout centrelines in world metres, so tile edges can drop the same joint.
 * @param {Map<string, THREE.Object3D[]>} partsMap
 */
function collectGroutLinesWorld(partsMap) {
  /** @type {number[]} */
  const chunks = [];
  const meshes = partsMap.get("grout") || [];
  for (const mesh of meshes) {
    if (!mesh || !mesh.isMesh || !mesh.geometry) continue;
    let hard = mesh.userData.bpHardEdgePositions;
    if (!(hard instanceof Float32Array)) {
      hard = hardEdgePositions(mesh.geometry);
      mesh.userData.bpHardEdgePositions = hard;
    }
    const local = groutCenterlines(hard);
    if (local.length < 6) continue;
    const world = toWorldPositions(mesh, local);
    for (let i = 0; i < world.length; i++) chunks.push(world[i]);
  }
  return new Float32Array(chunks);
}

export function syncEdgeOverlays(partsMap, enabled, opts = {}) {
  const planes = opts.clippingPlanes ?? [];
  const res = opts.resolution || null;
  const edgeMode = opts.edgeMode ?? EDGE_MODE_TRANSPARENT;
  const groutLinesWorld = enabled ? collectGroutLinesWorld(partsMap) : new Float32Array(0);

  for (const [label, meshes] of partsMap) {
    for (const mesh of meshes) {
      if (!mesh || !mesh.isMesh || !mesh.geometry) continue;
      if (isEdgeOverlay(mesh)) continue;

      /** @type {THREE.Object3D | null} */
      let overlay = null;
      for (const child of mesh.children) {
        if (isEdgeOverlay(child)) {
          overlay = child;
          break;
        }
      }

      if (!enabled) {
        if (overlay) disposeOverlay(overlay);
        continue;
      }

      if (overlay && !overlay.isLineSegments2) {
        disposeOverlay(overlay);
        overlay = null;
      }

      const faceOpacity = overlayOpacityForMesh(mesh, edgeMode);

      const fragBias = edgeFragDepthBias(mesh);

      if (!overlay) {
        const mat = createEdgeMaterial(planes, res, faceOpacity, fragBias);
        const geom = new LineSegmentsGeometry();
        overlay = new LineSegments2(geom, mat);
        overlay.name = `${label}__edges`;
        overlay.userData.isEdgeOverlay = true;
        overlay.userData.edgeLabel = label;
        overlay.raycast = () => {};
        overlay.renderOrder = 1000;
        overlay.layers.set(EDGE_LAYER);
        mesh.add(overlay);
      } else {
        const mat = overlay.material;
        // Recreate if this overlay predates the FragDepth bias patch.
        const cacheKey = mat?.customProgramCacheKey?.();
        const wantKey = `bp-edge-depth-bias-r${EDGE_BIAS_SHADER_REV}-${fragBias}-${EDGE_VIEW_BIAS_M}`;
        if (!mat || typeof mat.customProgramCacheKey !== "function" || cacheKey !== wantKey) {
          disposeOverlay(overlay);
          const mat2 = createEdgeMaterial(planes, res, faceOpacity, fragBias);
          const geom2 = new LineSegmentsGeometry();
          overlay = new LineSegments2(geom2, mat2);
          overlay.name = `${label}__edges`;
          overlay.userData.isEdgeOverlay = true;
          overlay.userData.edgeLabel = label;
          overlay.raycast = () => {};
          overlay.renderOrder = 1000;
          overlay.layers.set(EDGE_LAYER);
          mesh.add(overlay);
        } else {
          if (mat.color) mat.color.setHex(EDGE_COLOR);
          if (typeof mat.linewidth === "number") {
            mat.linewidth = EDGE_LINEWIDTH_PX;
          }
          mat.clippingPlanes = planes;
          mat.clipIntersection = false;
          if (res && mat.resolution) mat.resolution.set(res.x, res.y);
          applyEdgeMaterialOpacity(mat, faceOpacity);
          mat.needsUpdate = true;
        }
      }
      overlay.layers.set(EDGE_LAYER);
      rebuildOverlayGeometry(mesh, /** @type {any} */ (overlay), planes, label, groutLinesWorld);
    }
  }
}

/**
 * @param {THREE.Object3D} obj
 * @returns {boolean}
 */
function isFadedFace(obj) {
  if (!obj.isMesh || isEdgeOverlay(obj)) return false;
  const mat = Array.isArray(obj.material) ? obj.material[0] : obj.material;
  return Boolean(mat && mat.transparent && mat.opacity < 1 - 1e-4);
}

/**
 * Faces first, then fat lines. Opaque frames reuse the colour-pass depth
 * (`reuseDepth`). Peeled frames refill depth, because the composite quad is
 * not the CAD depth and faded materials did not write one.
 *
 * The refill uses the real face shaders with colour writes off. MeshDepthMaterial
 * encodes a different gl_FragDepth under logarithmic depth, so strokes that
 * sit correctly on the fast path disappear once that buffer is in front of them.
 * Faded faces stay out of the refill — they do not depth-write on the fast path
 * either — so lines remain visible through transparent parts.
 *
 * @param {THREE.WebGLRenderer} renderer
 * @param {THREE.Scene} scene
 * @param {THREE.Camera} camera
 * @param {THREE.Object3D} root
 * @param {{ reuseDepth?: boolean, opaqueEdgesOnly?: boolean }} [opts]
 *   `reuseDepth` draws only the fat lines against the depth the colour pass
 *   just wrote. Used for fully opaque frames and the fast sorted-alpha frame.
 *   `opaqueEdgesOnly` skips strokes that already joined a peel layer (opacity under 1).
 */
export function renderEdgeOverlayPass(renderer, scene, camera, root, opts = {}) {
  if (!root) return;

  const reuseDepth = Boolean(opts.reuseDepth);
  let anyEdge = false;
  root.traverse((obj) => {
    if (isEdgeOverlay(obj)) anyEdge = true;
  });
  if (!anyEdge) {
    restoreBufferMasks(renderer);
    return;
  }

  const prevAutoClear = renderer.autoClear;
  const prevBg = scene.background;
  const prevOverride = scene.overrideMaterial;
  const prevLayers = camera.layers.mask;
  scene.background = null;
  renderer.autoClear = false;

  if (reuseDepth) {
    // Lines sit on EDGE_LAYER, so the parent faces are not rasterized again.
    // Their depth from the colour pass is still in this target.
    setEdgeOverlaysVisible(root, true);
    camera.layers.set(EDGE_LAYER);
    renderer.render(scene, camera);
    camera.layers.mask = prevLayers;
    scene.background = prevBg;
    scene.overrideMaterial = prevOverride;
    renderer.autoClear = prevAutoClear;
    restoreBufferMasks(renderer);
    return;
  }

  // 1) Depth from the opaque face shaders (colour off). Camera stays on
  //    layer 0, so EDGE_LAYER strokes are not in this pass.
  setEdgeOverlaysVisible(root, false);
  /** @type {THREE.Object3D[]} */
  const hiddenFades = [];
  root.traverse((obj) => {
    if (!isFadedFace(obj) || obj.visible === false) return;
    hiddenFades.push(obj);
    obj.visible = false;
  });
  /** @type {{ mat: THREE.Material, colorWrite: boolean, depthWrite: boolean }[]} */
  const snaps = [];
  const seen = new Set();
  scene.traverse((obj) => {
    if (!obj.isMesh || isEdgeOverlay(obj) || obj.visible === false) return;
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const mat of mats) {
      if (!mat || seen.has(mat)) continue;
      seen.add(mat);
      snaps.push({
        mat,
        colorWrite: mat.colorWrite !== false,
        depthWrite: mat.depthWrite !== false,
      });
      // Same log-depth and face bias as the fast path. Colour stays the peel.
      mat.colorWrite = false;
      mat.depthWrite = true;
    }
  });
  scene.overrideMaterial = null;
  renderer.clearDepth();
  try {
    renderer.render(scene, camera);
  } finally {
    for (const snap of snaps) {
      snap.mat.colorWrite = snap.colorWrite;
      snap.mat.depthWrite = snap.depthWrite;
    }
    for (const obj of hiddenFades) obj.visible = true;
  }

  // 2) Edge colour only. Faces stay on layer 0; the depth prepass already
  //    filled the buffer, so redrawing them (and flipping their transparent
  //    flag) only burns a second full traversal. Strokes already composited
  //    inside the peel stay hidden so they are not stamped on top of the glass.
  setEdgeOverlaysVisible(root, true);
  /** @type {THREE.Object3D[]} */
  const hiddenSoft = [];
  if (opts.opaqueEdgesOnly) {
    root.traverse((obj) => {
      if (!isEdgeOverlay(obj)) return;
      const mat = Array.isArray(obj.material) ? obj.material[0] : obj.material;
      if (mat && mat.transparent && mat.opacity < 1 - 1e-4) {
        hiddenSoft.push(obj);
        obj.visible = false;
      }
    });
  }
  camera.layers.set(EDGE_LAYER);
  try {
    renderer.render(scene, camera);
  } finally {
    for (const obj of hiddenSoft) obj.visible = true;
  }
  camera.layers.mask = prevLayers;

  scene.background = prevBg;
  scene.overrideMaterial = prevOverride;
  renderer.autoClear = prevAutoClear;
  // Peel colour pass and these fat lines leave depthWrite false. gl.clear on
  // the next frame keeps the previous cut cap unless the masks are back on.
  restoreBufferMasks(renderer);
}

/**
 * gl.clear respects the write masks left by the last material.
 * @param {THREE.WebGLRenderer} renderer
 */
function restoreBufferMasks(renderer) {
  renderer.state.buffers.color.setMask(true);
  renderer.state.buffers.depth.setMask(true);
}
