/**
 * CAD edge overlay (hard edges on top of faces) for the WebGL viewer.
 * Uses Three.js fat lines (LineSegments2) — native GL linewidth is ignored on
 * most platforms, so LineBasicMaterial edges were effectively invisible.
 */
import * as THREE from "three";
import { LineSegments2 } from "three/addons/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";

export const EDGE_OVERLAY_KEY = "blueprints.edgesEnabled";

/** Dihedral threshold (°): hide coplanar triangulation edges, keep CAD creases. */
export const EDGE_THRESHOLD_DEG = 20;

/** Screen-space stroke width (px). Native GL lines cannot do this. */
export const EDGE_LINEWIDTH_PX = 3.5;

/** Always black for contrast on Solid / Realistic faces. */
export const EDGE_COLOR = 0x000000;

/**
 * @returns {boolean}
 */
export function loadEdgesEnabled() {
  try {
    const v = localStorage.getItem(EDGE_OVERLAY_KEY);
    if (v === "1" || v === "true") return true;
    if (v === "0" || v === "false") return false;
  } catch {
    /* ignore */
  }
  return false;
}

/**
 * @param {boolean} on
 */
export function saveEdgesEnabled(on) {
  try {
    localStorage.setItem(EDGE_OVERLAY_KEY, on ? "1" : "0");
  } catch {
    /* ignore */
  }
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
 * @returns {LineSegmentsGeometry}
 */
function fatGeometryFromMesh(meshGeometry) {
  const edges = new THREE.EdgesGeometry(meshGeometry, EDGE_THRESHOLD_DEG);
  const pos = edges.getAttribute("position");
  const arr =
    pos && pos.array
      ? pos.array instanceof Float32Array
        ? pos.array
        : new Float32Array(pos.array)
      : new Float32Array(0);
  edges.dispose();
  const geom = new LineSegmentsGeometry();
  if (arr.length >= 6) geom.setPositions(arr);
  return geom;
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
 * Ensure each mesh has a matching fat-line edge child when enabled.
 * @param {Map<string, THREE.Object3D[]>} partsMap
 * @param {boolean} enabled
 * @param {{
 *   clippingPlanes?: THREE.Plane[] | null,
 *   resolution?: { x: number, y: number } | null,
 * }} [opts]
 */
export function syncEdgeOverlays(partsMap, enabled, opts = {}) {
  const planes = opts.clippingPlanes ?? [];
  const res = opts.resolution || null;

  for (const [label, meshes] of partsMap) {
    for (const mesh of meshes) {
      if (!mesh || !mesh.isMesh || !mesh.geometry) continue;
      // Fat overlays are Mesh subclasses — never nest edges under an overlay.
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

      // Upgrade thin GL lines / stale overlays to fat LineSegments2.
      if (overlay && !overlay.isLineSegments2) {
        disposeOverlay(overlay);
        overlay = null;
      }

      if (!overlay) {
        const geom = fatGeometryFromMesh(mesh.geometry);
        const mat = new LineMaterial({
          color: EDGE_COLOR,
          linewidth: EDGE_LINEWIDTH_PX,
          worldUnits: false,
          toneMapped: false,
          depthTest: true,
          depthWrite: false,
          transparent: false,
          clippingPlanes: planes,
          clipIntersection: false,
        });
        mat.polygonOffset = true;
        mat.polygonOffsetFactor = -1;
        mat.polygonOffsetUnits = -2;
        if (res) mat.resolution.set(res.x, res.y);
        overlay = new LineSegments2(geom, mat);
        overlay.computeLineDistances();
        overlay.name = `${label}__edges`;
        overlay.userData.isEdgeOverlay = true;
        overlay.userData.edgeLabel = label;
        // Measure / picking must ignore overlay lines.
        overlay.raycast = () => {};
        overlay.renderOrder = 1000;
        mesh.add(overlay);
      } else {
        const mat = overlay.material;
        if (mat) {
          if (mat.color) mat.color.setHex(EDGE_COLOR);
          if (typeof mat.linewidth === "number") {
            mat.linewidth = EDGE_LINEWIDTH_PX;
          }
          mat.clippingPlanes = planes;
          mat.clipIntersection = false;
          if (res && mat.resolution) mat.resolution.set(res.x, res.y);
          mat.needsUpdate = true;
        }
      }
    }
  }
}
