/**
 * CAD edge overlay (hard edges on top of faces) for the WebGL viewer.
 * SOLID_LINE_COLORS must stay in sync with SECTION_LAYERS line RGB in export_utils.py.
 */
import * as THREE from "three";

export const EDGE_OVERLAY_KEY = "blueprints.edgesEnabled";

/** Dihedral threshold (°): hide coplanar triangulation edges, keep CAD creases. */
export const EDGE_THRESHOLD_DEG = 20;

/** @type {Record<string, [number, number, number]>} 0–255 RGB — diagrammatic line colours */
export const SOLID_LINE_COLORS = {
  podlaha: [120, 50, 0],
  eps: [25, 120, 10],
  zdivo: [130, 30, 15],
  omitka: [170, 140, 50],
  nabytek: [160, 80, 0],
  pozednice: [110, 40, 0],
  koruna: [110, 40, 0],
  predstena: [0, 100, 150],
  pouzdro: [140, 100, 30],
  sdk: [120, 120, 130],
  krov: [110, 40, 0],
  vata: [0, 110, 75],
  soffit: [15, 90, 5],
  podhled: [15, 85, 245],
  krytina: [235, 15, 15],
  sklo: [40, 120, 180],
};

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
 * @param {string} label
 * @param {boolean} isDark
 * @returns {THREE.Color}
 */
function lineColorForLabel(label, isDark) {
  const rgb = SOLID_LINE_COLORS[label];
  if (rgb) {
    return new THREE.Color(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);
  }
  return new THREE.Color(isDark ? 0xe8e8ed : 0x2c2c2e);
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
 * Apply clipping planes to edge line materials (and mesh materials are separate).
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
 * Ensure each mesh has a matching EdgesGeometry child when enabled.
 * @param {Map<string, THREE.Object3D[]>} partsMap
 * @param {boolean} enabled
 * @param {{
 *   isDark?: boolean,
 *   clippingPlanes?: THREE.Plane[] | null,
 * }} [opts]
 */
export function syncEdgeOverlays(partsMap, enabled, opts = {}) {
  const isDark = Boolean(opts.isDark);
  const planes = opts.clippingPlanes ?? [];

  for (const [label, meshes] of partsMap) {
    for (const mesh of meshes) {
      if (!mesh || !mesh.isMesh || !mesh.geometry) continue;

      /** @type {THREE.LineSegments | null} */
      let overlay = null;
      for (const child of mesh.children) {
        if (isEdgeOverlay(child) && child.isLineSegments) {
          overlay = /** @type {THREE.LineSegments} */ (child);
          break;
        }
      }

      if (!enabled) {
        if (overlay) disposeOverlay(overlay);
        continue;
      }

      const color = lineColorForLabel(label, isDark);
      if (!overlay) {
        const geom = new THREE.EdgesGeometry(mesh.geometry, EDGE_THRESHOLD_DEG);
        const mat = new THREE.LineBasicMaterial({
          color,
          toneMapped: false,
          depthTest: true,
          depthWrite: false,
          transparent: false,
          clippingPlanes: planes,
          clipIntersection: false,
        });
        // Prefer edges slightly in front of coplanar faces.
        mat.polygonOffset = true;
        mat.polygonOffsetFactor = -1;
        mat.polygonOffsetUnits = -2;
        overlay = new THREE.LineSegments(geom, mat);
        overlay.name = `${label}__edges`;
        overlay.userData.isEdgeOverlay = true;
        overlay.userData.edgeLabel = label;
        // Measure / picking must ignore overlay lines.
        overlay.raycast = () => {};
        overlay.renderOrder = 1000;
        mesh.add(overlay);
      } else {
        const mat = overlay.material;
        if (mat && mat.color) mat.color.copy(color);
        if (mat) {
          mat.clippingPlanes = planes;
          mat.clipIntersection = false;
          mat.needsUpdate = true;
        }
      }
    }
  }
}
