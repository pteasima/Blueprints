/**
 * Merge the per-face primitives of each glTF mesh into one draw per element
 * and material. Rationale and numbers: docs/viewer/Performance.md.
 *
 * The exporter (build123d / OCCT) writes one glTF primitive per CAD face, and
 * GLTFLoader turns each primitive into its own THREE.Mesh under the element's
 * node. `ground_floor.glb` had 8,850 of them for 1,229 elements, so the GPU
 * saw ~9k draws a pass and the browser held ~35k WebGL buffers. Every viewer
 * feature (picking, hiding, opacity, doors, edit mode, edges, Realistic)
 * works per element node, never per face, so merging the sibling meshes of
 * one node changes nothing they can see: the node, its name, its material
 * and its parent stay, it just has one child mesh instead of many.
 */
import * as THREE from "three";

/**
 * A mesh that came from one glTF primitive: plain, childless, unnamed by an
 * element of its own, no morphs or skin, one material.
 * @param {THREE.Object3D} obj
 * @param {(obj: THREE.Object3D) => boolean} [isPrimitive]
 */
function mergeable(obj, isPrimitive) {
  if (!obj.isMesh || obj.isInstancedMesh || obj.isSkinnedMesh || obj.isBatchedMesh) return false;
  if (obj.children.length) return false;
  if (Array.isArray(obj.material) || !obj.material) return false;
  const geo = obj.geometry;
  if (!geo || !geo.isBufferGeometry || !geo.getAttribute("position")) return false;
  if (Object.keys(geo.morphAttributes).length) return false;
  if (geo.groups.length) return false;
  if (isPrimitive && !isPrimitive(obj)) return false;
  return true;
}

/** @param {THREE.BufferGeometry} geo */
function signature(geo) {
  const parts = [geo.index ? "i" : "n"];
  for (const name of Object.keys(geo.attributes).sort()) {
    const a = geo.attributes[name];
    const ctor = (a.isInterleavedBufferAttribute ? a.data.array : a.array).constructor.name;
    parts.push(`${name}:${a.itemSize}:${a.normalized ? 1 : 0}:${ctor}`);
  }
  return parts.join("|");
}

/**
 * @param {THREE.BufferAttribute | THREE.InterleavedBufferAttribute} attr
 * @param {Float32Array | Uint16Array | Uint8Array | Int16Array | Int8Array | Uint32Array} out
 * @param {number} offset  in components
 */
function copyAttribute(attr, out, offset) {
  if (!attr.isInterleavedBufferAttribute && attr.array.length === attr.count * attr.itemSize) {
    out.set(attr.array, offset);
    return;
  }
  const n = attr.itemSize;
  for (let i = 0; i < attr.count; i++) {
    for (let c = 0; c < n; c++) out[offset + i * n + c] = attr.getComponent(i, c);
  }
}

/**
 * Concatenate geometries that share a `signature`. Local transforms are
 * baked in (relative to the shared parent). Returns a fresh indexed geometry.
 * @param {THREE.Mesh[]} meshes
 */
export function mergeMeshGeometries(meshes) {
  const first = meshes[0].geometry;
  const names = Object.keys(first.attributes);
  let vertexCount = 0;
  let indexCount = 0;
  for (const m of meshes) {
    const g = m.geometry;
    vertexCount += g.getAttribute("position").count;
    indexCount += g.index ? g.index.count : g.getAttribute("position").count;
  }
  const merged = new THREE.BufferGeometry();
  /** @type {Record<string, any>} */
  const outs = {};
  for (const name of names) {
    const a = first.attributes[name];
    const Ctor = (a.isInterleavedBufferAttribute ? a.data.array : a.array).constructor;
    outs[name] = new Ctor(vertexCount * a.itemSize);
  }
  const IndexCtor = vertexCount > 65535 ? Uint32Array : Uint16Array;
  const index = new IndexCtor(indexCount);
  let vBase = 0;
  let iBase = 0;
  // [vertexStart, vertexCount, indexStart, indexCount] per source primitive,
  // so code that reasons about one CAD face (edges.js: tile caps, grout
  // centrelines, hard edges) still sees the faces it saw before the merge.
  const ranges = new Uint32Array(meshes.length * 4);
  const tmp = new THREE.Vector3();
  const nm = new THREE.Matrix3();
  for (const m of meshes) {
    const g = m.geometry;
    const count = g.getAttribute("position").count;
    m.updateMatrix();
    const identity = isIdentity(m.matrix);
    for (const name of names) {
      const a = g.attributes[name];
      copyAttribute(a, outs[name], vBase * a.itemSize);
      if (!identity && (name === "position" || name === "normal") && a.itemSize === 3) {
        const arr = outs[name];
        if (name === "normal") nm.getNormalMatrix(m.matrix);
        for (let i = 0; i < count; i++) {
          const o = (vBase + i) * 3;
          tmp.set(arr[o], arr[o + 1], arr[o + 2]);
          if (name === "position") tmp.applyMatrix4(m.matrix);
          else tmp.applyMatrix3(nm).normalize();
          arr[o] = tmp.x;
          arr[o + 1] = tmp.y;
          arr[o + 2] = tmp.z;
        }
      }
    }
    const k = meshes.indexOf(m) * 4;
    ranges[k] = vBase;
    ranges[k + 1] = count;
    ranges[k + 2] = iBase;
    ranges[k + 3] = g.index ? g.index.count : count;
    if (g.index) {
      const src = g.index;
      for (let i = 0; i < src.count; i++) index[iBase + i] = src.getX(i) + vBase;
      iBase += src.count;
    } else {
      for (let i = 0; i < count; i++) index[iBase + i] = vBase + i;
      iBase += count;
    }
    vBase += count;
  }
  for (const name of names) {
    const a = first.attributes[name];
    merged.setAttribute(name, new THREE.BufferAttribute(outs[name], a.itemSize, a.normalized));
  }
  merged.setIndex(new THREE.BufferAttribute(index, 1));
  merged.computeBoundingBox();
  merged.computeBoundingSphere();
  Object.assign(merged.userData, first.userData);
  merged.userData.bpPrimitiveRanges = ranges;
  return merged;
}

/** @param {THREE.Matrix4} m */
function isIdentity(m) {
  const e = m.elements;
  const id = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  for (let i = 0; i < 16; i++) if (Math.abs(e[i] - id[i]) > 1e-9) return false;
  return true;
}

/**
 * Merge, under every node of `root`, the sibling primitive meshes that share
 * a material, vertex layout, shadow flags and render order. The merged mesh
 * takes the first sibling's place, name and flags. Returns counts for logs.
 * @param {THREE.Object3D} root
 * @param {{ isPrimitive?: (obj: THREE.Object3D) => boolean, keepSeparate?: (parent: THREE.Object3D) => boolean }} [opts]
 *   `keepSeparate(node)` true → leave that node's meshes as they are (a
 *   window whose panes are told apart by each face's centre, windows.js).
 *   `isPrimitive(mesh)` true → the mesh is one primitive of a multi-primitive
 *   glTF mesh (see `gltfPrimitiveTest`). Anything else, notably a glTF node
 *   that is itself a mesh (two `glazing__WIN-OP35__` panes), stays separate.
 */
export function mergeSiblingPrimitives(root, opts = {}) {
  let before = 0;
  let after = 0;
  /** @type {THREE.Object3D[]} */
  const parents = [];
  root.traverse((obj) => {
    if (obj.isMesh) before += 1;
    if (obj.children.length > 1) parents.push(obj);
  });
  /** @type {Set<THREE.BufferGeometry>} */
  const dropped = new Set();
  for (const parent of parents) {
    if (opts.keepSeparate && opts.keepSeparate(parent)) continue;
    /** @type {Map<string, THREE.Mesh[]>} */
    const buckets = new Map();
    for (const child of parent.children) {
      if (!mergeable(child, opts.isPrimitive)) continue;
      const key = [
        child.material.uuid,
        signature(child.geometry),
        child.castShadow ? 1 : 0,
        child.receiveShadow ? 1 : 0,
        child.renderOrder,
        child.visible ? 1 : 0,
        child.layers.mask,
      ].join("#");
      let list = buckets.get(key);
      if (!list) buckets.set(key, (list = []));
      list.push(child);
    }
    for (const list of buckets.values()) {
      if (list.length < 2) continue;
      const lead = list[0];
      const geo = mergeMeshGeometries(list);
      const mesh = new THREE.Mesh(geo, lead.material);
      mesh.name = lead.name;
      mesh.castShadow = lead.castShadow;
      mesh.receiveShadow = lead.receiveShadow;
      mesh.renderOrder = lead.renderOrder;
      mesh.visible = lead.visible;
      mesh.frustumCulled = lead.frustumCulled;
      mesh.layers.mask = lead.layers.mask;
      Object.assign(mesh.userData, lead.userData);
      mesh.userData.bpMergedPrimitives = list.length;
      const at = parent.children.indexOf(lead);
      for (const m of list) {
        dropped.add(m.geometry);
        m.removeFromParent();
      }
      parent.children.splice(Math.min(at, parent.children.length), 0, mesh);
      mesh.parent = parent;
      mesh.dispatchEvent({ type: "added" });
    }
  }
  for (const g of dropped) g.dispose();
  root.traverse((obj) => {
    if (obj.isMesh) after += 1;
  });
  return { before, after };
}

/**
 * `isPrimitive` for a GLTFLoader result: GLTFLoader records `{ meshes,
 * primitives }` for each primitive mesh it puts in a group, and adds `nodes`
 * when the mesh is a node itself (a single-primitive mesh). Names don't tell
 * them apart: primitive meshes carry the node's name (`masonry__W-001__`,
 * `masonry__W-001___1`).
 * @param {{ parser?: { associations?: Map<object, any> } }} gltf
 */
export function gltfPrimitiveTest(gltf) {
  const assoc = gltf?.parser?.associations;
  if (!assoc) return () => false;
  return (obj) => {
    const a = assoc.get(obj);
    return Boolean(a) && a.primitives !== undefined && a.nodes === undefined;
  };
}

/**
 * The source primitives (CAD faces) of a merged geometry as small standalone
 * geometries (position + index only), or `[geometry]` when it was not merged.
 * For one-off analysis (edges.js), not for drawing.
 * @param {THREE.BufferGeometry} geometry
 * @returns {THREE.BufferGeometry[]}
 */
export function primitiveGeometries(geometry) {
  const ranges = geometry?.userData?.bpPrimitiveRanges;
  const pos = geometry?.getAttribute?.("position");
  if (!ranges || !pos || ranges.length < 8 || pos.isInterleavedBufferAttribute) return [geometry];
  const index = geometry.index;
  /** @type {THREE.BufferGeometry[]} */
  const out = [];
  for (let k = 0; k + 3 < ranges.length; k += 4) {
    const v0 = ranges[k];
    const vn = ranges[k + 1];
    const i0 = ranges[k + 2];
    const inCount = ranges[k + 3];
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos.array.subarray(v0 * 3, (v0 + vn) * 3), 3));
    if (index) {
      const idx = new Uint32Array(inCount);
      for (let i = 0; i < inCount; i++) idx[i] = index.getX(i0 + i) - v0;
      g.setIndex(new THREE.BufferAttribute(idx, 1));
    }
    out.push(g);
  }
  return out;
}
