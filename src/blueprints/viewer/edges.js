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
 * Clip-space Z pull before log-depth encoding (multiplied by w → constant NDC).
 * Helps fat-line quads win coplanar tests before FragDepth runs.
 */
const EDGE_NDC_DEPTH_BIAS = 1e-4;

/**
 * Subtract from the *already encoded* gl_FragDepth after logdepthbuf_fragment.
 * Must never reassign from gl_FragCoord.z under USE_LOGDEPTHBUF — Three r172+
 * no longer defines USE_LOGDEPTHBUF_EXT, and that overwrite made edge depth
 * incomparable to face log-depth (edges only survived against clear/background).
 */
export const EDGE_FRAG_DEPTH_BIAS = 5e-4;

/**
 * Fat-line overlays live on this layer so an opaque frame can draw them
 * without rasterizing every CAD face a second time. The camera stays on
 * layer 0 for faces; the edge pass switches to this layer.
 */
export const EDGE_LAYER = 1;

/** Cache-key bump when bias shader strategy changes. */
const EDGE_BIAS_SHADER_REV = 2;

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
function createEdgeMaterial(planes, res, opacity = 1) {
  const o = Math.max(0, Math.min(1, Number(opacity) || 0));
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
    // NDC Z bias before log-depth encodes from gl_Position.w.
    shader.vertexShader = shader.vertexShader.replace(
      "#include <logdepthbuf_vertex>",
      `gl_Position.z -= ${EDGE_NDC_DEPTH_BIAS} * gl_Position.w;
			#include <logdepthbuf_vertex>`,
    );
    // Subtract from encoded FragDepth; never overwrite with raw gl_FragCoord.z
    // when logarithmic depth is on (that path is what broke opaque perspective).
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <logdepthbuf_fragment>",
      `#include <logdepthbuf_fragment>
			#if defined( USE_LOGDEPTHBUF )
				gl_FragDepth -= max( ${EDGE_FRAG_DEPTH_BIAS}, fwidth( gl_FragDepth ) );
			#else
				gl_FragDepth = gl_FragCoord.z - ${EDGE_FRAG_DEPTH_BIAS};
			#endif`,
    );
  };
  mat.customProgramCacheKey = () =>
    `bp-edge-depth-bias-r${EDGE_BIAS_SHADER_REV}-${EDGE_FRAG_DEPTH_BIAS}-${EDGE_NDC_DEPTH_BIAS}`;
  if (res) mat.resolution.set(res.x, res.y);
  return mat;
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
      m.clippingPlanes = list;
      m.clipIntersection = false;
      m.needsUpdate = true;
    }
  });
}

/**
 * Rebuild overlay geometry: hard CAD edges + plane∩mesh cut silhouettes.
 * @param {THREE.Mesh} mesh
 * @param {LineSegments2} overlay
 * @param {THREE.Plane[]} worldPlanes
 */
function rebuildOverlayGeometry(mesh, overlay, worldPlanes) {
  mesh.updateWorldMatrix(true, false);
  let hard = mesh.userData.bpHardEdgePositions;
  if (!(hard instanceof Float32Array)) {
    hard = hardEdgePositions(mesh.geometry);
    mesh.userData.bpHardEdgePositions = hard;
  }
  const localPlanes = worldPlanesToLocal(worldPlanes, mesh.matrixWorld);
  const cut = cutEdgeSegmentPositions(mesh.geometry, localPlanes);
  const packed = concatPositions(hard, cut);
  const geom = new LineSegmentsGeometry();
  if (packed.length >= 6) geom.setPositions(packed);
  const prev = overlay.geometry;
  overlay.geometry = geom;
  overlay.computeLineDistances();
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
export function syncEdgeOverlays(partsMap, enabled, opts = {}) {
  const planes = opts.clippingPlanes ?? [];
  const res = opts.resolution || null;
  const edgeMode = opts.edgeMode ?? EDGE_MODE_TRANSPARENT;

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

      if (!overlay) {
        const mat = createEdgeMaterial(planes, res, faceOpacity);
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
        if (!mat || typeof mat.customProgramCacheKey !== "function") {
          disposeOverlay(overlay);
          const mat2 = createEdgeMaterial(planes, res, faceOpacity);
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
      rebuildOverlayGeometry(mesh, /** @type {any} */ (overlay), planes);
    }
  }
}

/** Shared depth-only material for the edge overlay depth prepass. */
let edgeDepthPrepassMat = null;

/**
 * @returns {THREE.MeshDepthMaterial}
 */
function getEdgeDepthPrepassMaterial() {
  if (!edgeDepthPrepassMat) {
    edgeDepthPrepassMat = new THREE.MeshDepthMaterial({
      depthTest: true,
      depthWrite: true,
      colorWrite: false,
      side: THREE.DoubleSide,
    });
  }
  return edgeDepthPrepassMat;
}

/**
 * Collect clipping planes from the first CAD mesh (section cuts).
 * @param {THREE.Object3D} root
 * @returns {THREE.Plane[]}
 */
function collectMeshClippingPlanes(root) {
  /** @type {THREE.Plane[]} */
  let planes = [];
  root.traverse((obj) => {
    if (
      planes.length ||
      isEdgeOverlay(obj) ||
      obj.userData?.isSectionCap ||
      !obj.isMesh ||
      !obj.material
    ) {
      return;
    }
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const mat of mats) {
      if (mat?.clippingPlanes?.length) {
        planes = mat.clippingPlanes;
        return;
      }
    }
  });
  return planes;
}

/**
 * Faces first, then fat lines. Opaque frames reuse the colour-pass depth
 * (`reuseDepth`). Peeled frames refill depth, because the composite quad is
 * not the CAD depth and faded materials did not write one.
 *
 * @param {THREE.WebGLRenderer} renderer
 * @param {THREE.Scene} scene
 * @param {THREE.Camera} camera
 * @param {THREE.Object3D} root
 * @param {{ reuseDepth?: boolean }} [opts]
 *   `reuseDepth` draws only the fat lines against the depth the colour pass
 *   just wrote. Used for fully opaque frames. Faded / peeled frames refill
 *   depth first — transparent materials did not write a usable buffer, and a
 *   peel composite quad is not the CAD depth.
 */
export function renderEdgeOverlayPass(renderer, scene, camera, root, opts = {}) {
  if (!root) return;

  const reuseDepth = Boolean(opts.reuseDepth);
  let anyEdge = false;
  root.traverse((obj) => {
    if (isEdgeOverlay(obj)) anyEdge = true;
  });
  if (!anyEdge) return;

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
    return;
  }

  // 1) Depth prepass via MeshDepthMaterial (reliable depth writes; respects cuts).
  //    Camera stays on layer 0, so EDGE_LAYER strokes are not in this pass.
  setEdgeOverlaysVisible(root, false);
  const depthMat = getEdgeDepthPrepassMaterial();
  depthMat.clippingPlanes = collectMeshClippingPlanes(root);
  depthMat.clipIntersection = false;
  scene.overrideMaterial = depthMat;
  renderer.clearDepth();
  renderer.render(scene, camera);
  scene.overrideMaterial = null;

  // 2) Edge colour only. Faces stay on layer 0; the depth prepass already
  //    filled the buffer, so redrawing them (and flipping their transparent
  //    flag) only burns a second full traversal.
  setEdgeOverlaysVisible(root, true);
  camera.layers.set(EDGE_LAYER);
  renderer.render(scene, camera);
  camera.layers.mask = prevLayers;

  scene.background = prevBg;
  scene.overrideMaterial = prevOverride;
  renderer.autoClear = prevAutoClear;
}
