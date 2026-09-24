/**
 * Solid fills for section cuts.
 *
 * WebGL clipping discards fragments; it never builds the face where a plane
 * slices a solid. A box cut on one end still shows its real end cap. Cut on
 * both ends, the same box is an open tube and the room shows through.
 * These meshes are the missing faces, in the part's own colour, clipped by
 * every plane except the one they lie on.
 *
 * A part is usually one face per mesh (OCCT writes each shell face on its
 * own). One face cannot close a cut, so segments are stitched across every
 * mesh of the part before the polygon is filled.
 */
import * as THREE from "three";
import {
  cutPlaneSegments,
  triangulateCutSegments,
  worldPlanesToLocal,
} from "./clipGeometry.js";
import { applyLayerDepthBias } from "./materials.js";

/** Extra push per layer bias so coplanar neighbours don't z-fight (metres). */
const BIAS_PUSH_M = 5e-5;

/**
 * @param {THREE.Object3D | null | undefined} obj
 * @returns {boolean}
 */
export function isSectionCap(obj) {
  return Boolean(obj && obj.userData && obj.userData.isSectionCap);
}

/**
 * @param {THREE.Material | THREE.Material[] | null | undefined} material
 * @returns {THREE.Material | null}
 */
function firstMaterial(material) {
  if (!material) return null;
  return Array.isArray(material) ? material[0] || null : material;
}

/**
 * Fresh material so a depth-peel patch on the parent is not shared.
 * @param {THREE.Material} src
 * @param {THREE.Plane[]} planes
 */
function capMaterial(src, planes) {
  /** @type {THREE.Material} */
  let mat;
  if (src.isMeshPhysicalMaterial) {
    mat = new THREE.MeshPhysicalMaterial();
  } else if (src.isMeshStandardMaterial) {
    mat = new THREE.MeshStandardMaterial();
  } else {
    mat = new THREE.MeshBasicMaterial();
  }
  if (src.color && mat.color) mat.color.copy(src.color);
  if (src.map && "map" in mat) mat.map = src.map;
  if (typeof src.roughness === "number" && "roughness" in mat) {
    mat.roughness = src.roughness;
  }
  if (typeof src.metalness === "number" && "metalness" in mat) {
    mat.metalness = src.metalness;
  }
  if (typeof src.clearcoat === "number" && "clearcoat" in mat) {
    mat.clearcoat = src.clearcoat;
    mat.clearcoatRoughness = src.clearcoatRoughness ?? 0.3;
  }
  if (typeof src.envMapIntensity === "number" && "envMapIntensity" in mat) {
    mat.envMapIntensity = src.envMapIntensity;
  }
  mat.opacity = typeof src.opacity === "number" ? src.opacity : 1;
  mat.transparent = Boolean(src.transparent);
  mat.depthWrite = src.depthWrite !== false;
  mat.depthTest = src.depthTest !== false;
  mat.side = THREE.DoubleSide;
  mat.forceSinglePass = Boolean(src.forceSinglePass);
  mat.toneMapped = src.toneMapped !== false;
  mat.polygonOffset = Boolean(src.polygonOffset);
  mat.polygonOffsetFactor = src.polygonOffsetFactor || 0;
  mat.polygonOffsetUnits = src.polygonOffsetUnits || 0;
  // Every plane except the one this face lies on. Including its own plane
  // discards the fill (the face is the plane).
  mat.clippingPlanes = planes;
  mat.clipIntersection = false;
  // Fresh material: the parent's onBeforeCompile does not come along.
  // Logarithmic depth discards polygonOffset, so the cap needs the same
  // FragDepth pull or it flickers against the shell it closes.
  applyLayerDepthBias(mat, src.userData?.layerDepthBias || 0);
  mat.needsUpdate = true;
  return mat;
}

/**
 * @param {THREE.Object3D} child
 */
function disposeCap(child) {
  child.parent?.remove(child);
  child.geometry?.dispose?.();
  const mat = child.material;
  const mats = Array.isArray(mat) ? mat : [mat];
  for (const m of mats) {
    // Map is shared with the parent material.
    if (m) m.map = null;
    m?.dispose?.();
  }
}

/**
 * @param {THREE.Plane[]} planes
 */
function planeSignature(planes) {
  let s = "";
  for (const p of planes) {
    s += `${p.normal.x.toFixed(5)},${p.normal.y.toFixed(5)},${p.normal.z.toFixed(5)},${p.constant.toFixed(5)};`;
  }
  return s;
}

/**
 * @param {THREE.Object3D | null | undefined} parent
 * @param {string} label
 * @returns {THREE.Group | null}
 */
function findCapGroup(parent, label) {
  if (!parent) return null;
  for (const child of parent.children) {
    if (child.userData?.isSectionCap && child.userData.capLabel === label) {
      return /** @type {THREE.Group} */ (child);
    }
  }
  return null;
}

/**
 * @param {THREE.Object3D[]} meshes
 * @param {string} label
 */
function findExistingGroup(meshes, label) {
  const seen = new Set();
  for (const mesh of meshes) {
    const parent = mesh.parent;
    if (!parent || seen.has(parent)) continue;
    seen.add(parent);
    const group = findCapGroup(parent, label);
    if (group) return group;
  }
  return null;
}

/**
 * @param {THREE.Group} group
 * @param {THREE.Material} src
 */
function syncGroupLook(group, src, renderOrder) {
  group.visible = true;
  for (const child of group.children) {
    if (!child.isMesh) continue;
    const mat = firstMaterial(child.material);
    if (!mat) continue;
    if (src.color && mat.color) mat.color.copy(src.color);
    mat.opacity = typeof src.opacity === "number" ? src.opacity : 1;
    mat.transparent = Boolean(src.transparent);
    mat.depthWrite = src.depthWrite !== false;
    mat.depthTest = src.depthTest !== false;
    mat.forceSinglePass = Boolean(src.forceSinglePass);
    mat.side = THREE.DoubleSide;
    mat.needsUpdate = true;
    child.visible = true;
    child.renderOrder = renderOrder;
  }
}

/**
 * @param {string} label
 * @param {THREE.Object3D[]} meshes
 * @param {THREE.Plane[]} worldPlanes
 * @param {string} sig
 */
function rebuildPartCaps(label, meshes, worldPlanes, sig) {
  const visible = meshes.filter(
    (mesh) => mesh?.isMesh && mesh.visible && !isSectionCap(mesh) && mesh.geometry,
  );
  const existing = findExistingGroup(meshes, label);
  if (!visible.length || !worldPlanes.length) {
    if (existing) disposeCap(existing);
    return;
  }
  const host = visible[0];
  const parent = host.parent;
  if (!parent) return;
  if (existing && existing.parent !== parent) disposeCap(existing);
  const group = existing && existing.parent === parent ? existing : new THREE.Group();
  // Drop previous faces; keep the group so the signature lives in one place.
  for (const child of [...group.children]) disposeCap(child);
  if (!group.parent) {
    group.name = `${label}__caps`;
    group.userData.isSectionCap = true;
    group.userData.capLabel = label;
    parent.add(group);
  }

  const src = firstMaterial(host.material);
  if (!src) return;
  parent.updateWorldMatrix(true, true);
  const invParent = new THREE.Matrix4().copy(parent.matrixWorld).invert();
  const bias =
    typeof host.userData.opaqueRenderOrder === "number"
      ? host.userData.opaqueRenderOrder
      : host.renderOrder || 0;
  /** @type {THREE.Vector3[][][]} */
  const worldSegs = worldPlanes.map(() => []);
  for (const mesh of visible) {
    mesh.updateWorldMatrix(true, false);
    const localPlanes = worldPlanesToLocal(worldPlanes, mesh.matrixWorld);
    const perPlane = cutPlaneSegments(mesh.geometry, localPlanes);
    for (let pi = 0; pi < worldPlanes.length; pi++) {
      const segs = perPlane[pi] || [];
      for (const [a, b] of segs) {
        worldSegs[pi].push([
          a.clone().applyMatrix4(mesh.matrixWorld),
          b.clone().applyMatrix4(mesh.matrixWorld),
        ]);
      }
    }
  }

  for (let pi = 0; pi < worldPlanes.length; pi++) {
    const positions = triangulateCutSegments(
      worldSegs[pi],
      worldPlanes[pi],
      bias * BIAS_PUSH_M,
    );
    if (positions.length < 9) continue;
    for (let i = 0; i < positions.length; i += 3) {
      const v = new THREE.Vector3(
        positions[i],
        positions[i + 1],
        positions[i + 2],
      ).applyMatrix4(invParent);
      positions[i] = v.x;
      positions[i + 1] = v.y;
      positions[i + 2] = v.z;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.computeVertexNormals();
    const others = worldPlanes.filter((_, j) => j !== pi);
    const child = new THREE.Mesh(geom, capMaterial(src, others));
    child.name = `${label}__cap${pi}`;
    child.userData.isSectionCap = true;
    child.userData.capPlaneIndex = pi;
    child.userData.capLabel = label;
    child.renderOrder = host.renderOrder;
    child.raycast = () => {};
    group.add(child);
  }
  group.userData.bpCapSig = sig;
  group.userData.bpCapMatUuid = src.uuid;
  group.visible = group.children.length > 0;
}

/**
 * Create or refresh solid cut caps for every part.
 * Segments are gathered across the part's face meshes, then filled once.
 * Cheap when the planes and the material are unchanged (opacity scrub).
 *
 * @param {Map<string, THREE.Object3D[]>} partsMap
 * @param {THREE.Plane[] | null | undefined} worldPlanes
 */
export function syncSectionCaps(partsMap, worldPlanes) {
  const planes = worldPlanes || [];
  const sig = planeSignature(planes);
  for (const [label, meshes] of partsMap) {
    const list = (meshes || []).filter((mesh) => mesh && !isSectionCap(mesh));
    if (!list.length) continue;
    const visible = list.filter((mesh) => mesh.visible);
    const group = findExistingGroup(list, label);
    if (!planes.length || !visible.length) {
      if (group) disposeCap(group);
      continue;
    }
    const src = firstMaterial(visible[0].material);
    if (
      group &&
      group.userData.bpCapSig === sig &&
      src &&
      group.userData.bpCapMatUuid === src.uuid &&
      group.children.length
    ) {
      syncGroupLook(group, src, visible[0].renderOrder || 0);
      continue;
    }
    if (
      group &&
      group.userData.bpCapSig === sig &&
      src &&
      group.children.length
    ) {
      for (const child of group.children) {
        if (!child.isMesh) continue;
        const prev = child.material;
        const idx = child.userData.capPlaneIndex;
        const others =
          typeof idx === "number" ? planes.filter((_, j) => j !== idx) : planes;
        child.material = capMaterial(src, others);
        const olds = Array.isArray(prev) ? prev : [prev];
        for (const m of olds) {
          if (m) m.map = null;
          m?.dispose?.();
        }
      }
      group.userData.bpCapMatUuid = src.uuid;
      syncGroupLook(group, src, visible[0].renderOrder || 0);
      continue;
    }
    rebuildPartCaps(label, list, planes, sig);
  }
}

/**
 * Drop every cap under a root (model swap).
 * @param {THREE.Object3D | null | undefined} root
 */
export function clearSectionCaps(root) {
  if (!root) return;
  /** @type {THREE.Object3D[]} */
  const doomed = [];
  root.traverse((obj) => {
    if (isSectionCap(obj)) doomed.push(obj);
  });
  for (const obj of doomed) disposeCap(obj);
}
