/**
 * Tap a hinged door leaf to swing it 90° about its hinge.
 *
 * Records come from the model (`docs/models/<id>.doors.json`): each hinged
 * leaf has a centre (to match the mesh), a hinge point, and a sign. The sign
 * is a right-handed 90° turn about glTF +Y (CAD +Z). Width, hinge side, and
 * swing direction are resolved in the model; this file only plays them.
 *
 * An open leaf leaves its closed rectangle empty. That rectangle is a hit
 * proxy kept out of the scene: a tap through it closes the door, unless the
 * same ray hits any registered interactive (the leaf, or a later switch).
 * Walls and other non-interactive geometry never block that close.
 *
 * Pocket and sliding leaves are not records with kind "hinged".
 * TODO: slide those (obývák gable pockets, garage D5/D6) instead of ignoring them.
 */
import * as THREE from "three";
import { createTapRegistry, isHitProxy } from "./interactions.js";

/** Movement past this is a camera drag, not a tap. */
export const TAP_PX = 12;
/** Swing duration. */
export const DOOR_SWING_MS = 500;
/** Open angle. */
export const DOOR_SWING_RAD = Math.PI / 2;
/** Match a leaf centre to a record, metres. */
export const DOOR_MATCH_M = 0.03;
/**
 * Swing fraction above which the closed-leaf proxy can close the door.
 * A settled shut leaf stays on the mesh raycast and toggles open instead.
 */
export const OPENING_LIVE = 1e-3;

/**
 * @param {number} t 0–1
 * @returns {number}
 */
export function easeInOutCubic(t) {
  const x = Math.min(1, Math.max(0, t));
  return x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2;
}

/**
 * @param {{
 *   dx: number,
 *   dy: number,
 *   pointers?: number,
 *   button?: number,
 *   blocked?: boolean,
 *   modifiers?: boolean,
 * }} g
 * @returns {"tap" | "drag" | "ignore"}
 */
export function classifyPointerGesture(g) {
  if (g.blocked || g.modifiers) return "ignore";
  if (g.button !== undefined && g.button !== 0) return "ignore";
  if ((g.pointers ?? 1) > 1) return "ignore";
  if (Math.hypot(g.dx, g.dy) > TAP_PX) return "drag";
  return "tap";
}

/**
 * @param {number} amount 0 closed … 1 open
 * @param {number} sign +1 or −1
 */
export function swingAngle(amount, sign) {
  return (sign >= 0 ? 1 : -1) * amount * DOOR_SWING_RAD;
}

/**
 * Union-find over triangles. Without `position`, vertices join only when they
 * share an index. With `position` (a position attribute), corners that land
 * on the same point join too, so the six faces of one panel are one leaf
 * even when the exporter did not weld them.
 * @param {ArrayLike<number>} index
 * @param {{ getX: (i: number) => number, getY: (i: number) => number, getZ: (i: number) => number } | null} [position]
 * @returns {number[][]} groups of triangle-start offsets into `index`
 */
export function triangleComponents(index, position = null) {
  const n = index.length;
  /** @type {Map<number, number>} */
  const parent = new Map();
  const find = (v) => {
    let p = parent.has(v) ? parent.get(v) : v;
    if (p !== v) {
      p = find(p);
      parent.set(v, p);
    } else if (!parent.has(v)) {
      parent.set(v, v);
    }
    return p;
  };
  const union = (a, b) => {
    const pa = find(a);
    const pb = find(b);
    if (pa !== pb) parent.set(pa, pb);
  };
  if (position) {
    /** @type {Map<string, number>} */
    const canon = new Map();
    const quant = 1e4; // 0.1 mm in metres
    const count = position.count ?? index.reduce((m, v) => Math.max(m, v), 0) + 1;
    for (let v = 0; v < count; v++) {
      const key = `${Math.round(position.getX(v) * quant)},${Math.round(position.getY(v) * quant)},${Math.round(position.getZ(v) * quant)}`;
      const prior = canon.get(key);
      if (prior === undefined) canon.set(key, v);
      else union(v, prior);
    }
  }
  for (let i = 0; i + 2 < n; i += 3) {
    union(index[i], index[i + 1]);
    union(index[i + 1], index[i + 2]);
  }
  /** @type {Map<number, number[]>} */
  const groups = new Map();
  for (let i = 0; i + 2 < n; i += 3) {
    const root = find(index[i]);
    let list = groups.get(root);
    if (!list) {
      list = [];
      groups.set(root, list);
    }
    list.push(i);
  }
  return [...groups.values()];
}

/**
 * If one mesh holds several disconnected leaves, replace it with one mesh
 * per leaf (same transform and material). A single panel is returned as-is.
 * @param {THREE.Mesh} mesh
 * @returns {THREE.Mesh[]}
 */
export function splitDisconnectedMesh(mesh) {
  const geom = mesh.geometry;
  const indexAttr = geom?.getIndex?.();
  const pos = geom?.getAttribute?.("position");
  if (!indexAttr || !pos || !mesh.parent) return [mesh];
  const groups = triangleComponents(indexAttr.array, pos);
  if (groups.length < 2) return [mesh];

  const norm = geom.getAttribute("normal");
  /** @type {THREE.Mesh[]} */
  const created = [];
  for (const tris of groups) {
    /** @type {Map<number, number>} */
    const remap = new Map();
    const positions = [];
    const normals = [];
    const indices = [];
    const take = (vi) => {
      let next = remap.get(vi);
      if (next !== undefined) return next;
      next = positions.length / 3;
      remap.set(vi, next);
      positions.push(pos.getX(vi), pos.getY(vi), pos.getZ(vi));
      if (norm) normals.push(norm.getX(vi), norm.getY(vi), norm.getZ(vi));
      return next;
    };
    for (const start of tris) {
      indices.push(
        take(indexAttr.getX(start)),
        take(indexAttr.getX(start + 1)),
        take(indexAttr.getX(start + 2)),
      );
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    if (normals.length) {
      g.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
    }
    g.setIndex(indices);
    const child = new THREE.Mesh(g, mesh.material);
    child.name = mesh.name;
    child.position.copy(mesh.position);
    child.quaternion.copy(mesh.quaternion);
    child.scale.copy(mesh.scale);
    child.visible = mesh.visible;
    mesh.parent.add(child);
    created.push(child);
  }
  mesh.parent.remove(mesh);
  geom.dispose?.();
  return created;
}

/**
 * @param {THREE.Object3D} root
 * @returns {THREE.Object3D[]}
 */
export function collectDoorHosts(root) {
  /** @type {THREE.Object3D[]} */
  const named = [];
  root.traverse((obj) => {
    const raw = obj.name || "";
    if (raw.replace(/_\d+$/, "") !== "door") return;
    const parentName = obj.parent?.name || "";
    if (parentName.replace(/_\d+$/, "") === "door") return;
    named.push(obj);
  });
  /** @type {THREE.Object3D[]} */
  const hosts = [];
  for (const host of named) {
    if (host.isMesh) {
      hosts.push(...splitDisconnectedMesh(host));
      continue;
    }
    /** @type {THREE.Mesh[]} */
    const meshes = [];
    host.traverse((obj) => {
      if (obj.isMesh) meshes.push(obj);
    });
    if (meshes.length === 1) {
      const parts = splitDisconnectedMesh(meshes[0]);
      if (parts.length > 1) {
        hosts.push(...parts);
        continue;
      }
    }
    hosts.push(host);
  }
  return hosts;
}

/**
 * @param {{ center: THREE.Vector3 }[]} entries
 * @param {object[]} records
 * @param {number} [tolerance]
 */
export function matchDoorHosts(entries, records, tolerance = DOOR_MATCH_M) {
  /** @type {{ distance: number, entry: { center: THREE.Vector3 }, record: object }[]} */
  const candidates = [];
  for (const entry of entries) {
    for (const record of records) {
      if (!record || record.kind !== "hinged" || !record.hinge) continue;
      const c = record.center;
      if (!Array.isArray(c) || c.length < 3) continue;
      const dx = entry.center.x - Number(c[0]);
      const dy = entry.center.y - Number(c[1]);
      const dz = entry.center.z - Number(c[2]);
      const distance = Math.hypot(dx, dy, dz);
      if (distance <= tolerance) candidates.push({ distance, entry, record });
    }
  }
  candidates.sort((a, b) => a.distance - b.distance);
  const usedHosts = new Set();
  const usedIds = new Set();
  /** @type {{ entry: { center: THREE.Vector3, host?: THREE.Object3D }, record: object }[]} */
  const pairs = [];
  for (const cand of candidates) {
    if (usedHosts.has(cand.entry) || usedIds.has(cand.record.id)) continue;
    usedHosts.add(cand.entry);
    usedIds.add(cand.record.id);
    pairs.push({ entry: cand.entry, record: cand.record });
  }
  return pairs;
}

/**
 * @param {THREE.Object3D} host
 * @returns {THREE.Vector3}
 */
function worldCenter(host) {
  host.updateWorldMatrix(true, true);
  const box = new THREE.Box3().setFromObject(host);
  return box.getCenter(new THREE.Vector3());
}

/**
 * @param {THREE.Object3D} host
 * @param {object} record
 */
export function bindHinge(host, record) {
  const parent = host.parent;
  if (!parent) return null;
  const pivot = new THREE.Group();
  pivot.name = `hinge:${record.id}`;
  parent.add(pivot);
  parent.updateWorldMatrix(true, false);
  const hinge = new THREE.Vector3(
    Number(record.hinge[0]),
    Number(record.hinge[1]),
    Number(record.hinge[2]),
  );
  pivot.position.copy(parent.worldToLocal(hinge));
  pivot.updateWorldMatrix(true, false);
  pivot.attach(host);
  const binding = {
    id: record.id,
    pivot,
    host,
    sign: Number(record.sign) >= 0 ? 1 : -1,
    goal: 0,
    anim: null,
  };
  const tag = (obj) => {
    obj.userData.bpDoor = binding;
  };
  tag(pivot);
  host.traverse(tag);
  return binding;
}

/**
 * @param {{ goal: number, anim: { from: number, to: number, t0: number } | null }} binding
 * @param {number} now
 */
export function sampleDoor(binding, now) {
  const anim = binding.anim;
  if (!anim) return binding.goal;
  const t = (now - anim.t0) / DOOR_SWING_MS;
  if (t >= 1) {
    binding.anim = null;
    binding.goal = anim.to;
    return anim.to;
  }
  return anim.from + (anim.to - anim.from) * easeInOutCubic(t);
}

const _parentQuat = new THREE.Quaternion();
const _localAxis = new THREE.Vector3();

/**
 * 90° about world +Y, even when an ancestor (the glTF Z-up root) is rotated.
 * The pivot's closed pose is the identity quaternion.
 * @param {THREE.Object3D} pivot
 * @param {number} angle
 */
export function setPivotSwing(pivot, angle) {
  pivot.quaternion.identity();
  if (Math.abs(angle) <= 1e-8) return;
  const parent = pivot.parent;
  _localAxis.set(0, 1, 0);
  if (parent) {
    parent.updateWorldMatrix(true, false);
    parent.getWorldQuaternion(_parentQuat).invert();
    _localAxis.applyQuaternion(_parentQuat);
  }
  if (_localAxis.lengthSq() < 1e-12) return;
  _localAxis.normalize();
  pivot.rotateOnAxis(_localAxis, angle);
}

/**
 * @param {{ pivot: THREE.Object3D, sign: number, goal: number, anim: object | null }} binding
 * @param {number} now
 */
export function applyDoorSwing(binding, now) {
  const amount = sampleDoor(binding, now);
  setPivotSwing(binding.pivot, swingAngle(amount, binding.sign));
  return amount;
}

/**
 * @param {{ goal: number, anim: { from: number, to: number, t0: number } | null }} binding
 * @param {number} now
 */
export function toggleDoor(binding, now) {
  const current = sampleDoor(binding, now);
  const target = binding.goal > 0.5 ? 0 : 1;
  binding.goal = target;
  binding.anim = { from: current, to: target, t0: now };
}

/**
 * Swing shut. A door that is already closing stays on that animation.
 * @param {{ goal: number, anim: { from: number, to: number, t0: number } | null }} binding
 * @param {number} now
 * @returns {boolean}
 */
export function closeDoor(binding, now) {
  const current = sampleDoor(binding, now);
  if (current <= 1e-3) return false;
  if (binding.goal > 0.5) {
    binding.goal = 0;
    binding.anim = { from: current, to: 0, t0: now };
  }
  return true;
}

const _corner = new THREE.Vector3();
const proxyMaterial = new THREE.MeshBasicMaterial({
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0,
  depthWrite: false,
});

/**
 * Closed-leaf box in world space. Captured while the leaf is shut; the proxy
 * stays there after the leaf swings.
 * @param {THREE.Object3D} host
 * @returns {{ center: THREE.Vector3, axes: THREE.Vector3[], half: number[] } | null}
 */
export function hostClosedObb(host) {
  /** @type {THREE.Mesh[]} */
  const meshes = [];
  host.updateWorldMatrix(true, true);
  host.traverse((obj) => {
    if (obj.isMesh && obj.geometry?.getAttribute?.("position")) meshes.push(obj);
  });
  if (!meshes.length) return null;
  const x = new THREE.Vector3();
  const y = new THREE.Vector3();
  const z = new THREE.Vector3();
  meshes[0].updateWorldMatrix(true, false);
  meshes[0].matrixWorld.extractBasis(x, y, z);
  if (x.lengthSq() < 1e-12 || y.lengthSq() < 1e-12 || z.lengthSq() < 1e-12) return null;
  x.normalize();
  y.normalize();
  z.normalize();
  let minX = Infinity;
  let minY = Infinity;
  let minZ = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let maxZ = -Infinity;
  for (const mesh of meshes) {
    const geom = mesh.geometry;
    if (!geom.boundingBox) geom.computeBoundingBox();
    const bb = geom.boundingBox;
    const xs = [bb.min.x, bb.max.x];
    const ys = [bb.min.y, bb.max.y];
    const zs = [bb.min.z, bb.max.z];
    for (const cx of xs) {
      for (const cy of ys) {
        for (const cz of zs) {
          _corner.set(cx, cy, cz).applyMatrix4(mesh.matrixWorld);
          const lx = _corner.dot(x);
          const ly = _corner.dot(y);
          const lz = _corner.dot(z);
          if (lx < minX) minX = lx;
          if (ly < minY) minY = ly;
          if (lz < minZ) minZ = lz;
          if (lx > maxX) maxX = lx;
          if (ly > maxY) maxY = ly;
          if (lz > maxZ) maxZ = lz;
        }
      }
    }
  }
  const half = [(maxX - minX) / 2, (maxY - minY) / 2, (maxZ - minZ) / 2];
  if (half.some((h) => !(h > 1e-6))) return null;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const cz = (minZ + maxZ) / 2;
  const center = new THREE.Vector3(
    x.x * cx + y.x * cy + z.x * cz,
    x.y * cx + y.y * cy + z.y * cz,
    x.z * cx + y.z * cy + z.z * cz,
  );
  return { center, axes: [x, y, z], half };
}

/**
 * Invisible box for the closed leaf. Not parented. `raycast` is a no-op so a
 * scene raycast (orbit pivot, Measure) cannot hit it; the tap path uses
 * {@link rayObb} on the stored box instead.
 * @param {{ center: THREE.Vector3, axes: THREE.Vector3[], half: number[] }} obb
 * @param {string} [name]
 */
export function proxyMeshFromObb(obb, name) {
  const geom = new THREE.BoxGeometry(obb.half[0] * 2, obb.half[1] * 2, obb.half[2] * 2);
  const mesh = new THREE.Mesh(geom, proxyMaterial);
  mesh.name = name || "opening";
  mesh.matrix.makeBasis(obb.axes[0], obb.axes[1], obb.axes[2]);
  mesh.matrix.setPosition(obb.center);
  mesh.matrixAutoUpdate = false;
  mesh.matrixWorld.copy(mesh.matrix);
  mesh.matrixWorldNeedsUpdate = false;
  mesh.visible = false;
  mesh.frustumCulled = false;
  mesh.userData.bpHitProxy = true;
  mesh.raycast = () => {};
  return mesh;
}

/**
 * Slab test. `tEnter` may be negative when the ray starts inside the box.
 * @param {THREE.Ray} ray
 * @param {{ center: THREE.Vector3, axes: THREE.Vector3[], half: number[] }} obb
 * @returns {{ tEnter: number, tExit: number } | null}
 */
export function rayObb(ray, obb) {
  const origin = ray.origin;
  const dir = ray.direction;
  let tMin = 0;
  let tMax = Infinity;
  for (let i = 0; i < 3; i++) {
    const axis = obb.axes[i];
    const e =
      axis.x * (obb.center.x - origin.x) +
      axis.y * (obb.center.y - origin.y) +
      axis.z * (obb.center.z - origin.z);
    const f = axis.x * dir.x + axis.y * dir.y + axis.z * dir.z;
    const h = obb.half[i];
    if (Math.abs(f) > 1e-8) {
      let t1 = (e + h) / f;
      let t2 = (e - h) / f;
      if (t1 > t2) {
        const swap = t1;
        t1 = t2;
        t2 = swap;
      }
      if (t1 > tMin) tMin = t1;
      if (t2 < tMax) tMax = t2;
      if (tMin > tMax) return null;
    } else if (-e - h > 0 || -e + h < 0) {
      return null;
    }
  }
  if (tMax < 0) return null;
  return { tEnter: tMin, tExit: tMax };
}

/**
 * Nearest open doorway the ray already crossed.
 * @param {{ binding: object, tEnter: number }[]} crossed
 */
export function chooseOpeningAction(crossed) {
  if (!crossed.length) return null;
  let best = crossed[0];
  for (const item of crossed) {
    if (item.tEnter < best.tEnter) best = item;
  }
  return best.binding;
}

/**
 * @param {THREE.Object3D | null | undefined} obj
 */
function bindingOf(obj) {
  let node = obj;
  while (node) {
    if (node.userData?.bpDoor && !isHitProxy(node)) return node.userData.bpDoor;
    node = node.parent;
  }
  return null;
}

/**
 * @param {{ object?: THREE.Object3D }} hit
 */
function isDoorPickSolid(hit) {
  const obj = hit.object;
  if (!obj || !obj.visible || isHitProxy(obj)) return false;
  const ud = obj.userData;
  if (ud && (ud.isEdgeOverlay || ud.isSectionCap)) return false;
  return true;
}

/**
 * @param {object} binding
 */
function releaseProxy(binding) {
  binding.proxy?.geometry?.dispose?.();
  binding.proxy = null;
  binding.obb = null;
}

/**
 * Pointer handling plus hinge pivots. Call `bind` after the GLB is in the scene.
 * @param {{
 *   canvas: HTMLCanvasElement,
 *   getCamera: () => THREE.Camera,
 *   records?: object[],
 *   isBlocked?: () => boolean,
 * }} opts
 */
export function createDoorController(opts) {
  const records = Array.isArray(opts.records) ? opts.records : [];
  const canvas = opts.canvas;
  const isBlocked = opts.isBlocked || (() => false);
  /** @type {ReturnType<typeof bindHinge>[]} */
  const bindings = [];
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  /** @type {{ id: number, x: number, y: number, moved: number, pointers: number } | null} */
  let gesture = null;
  let pointersDown = 0;
  const taps = createTapRegistry();
  // Leaf claims beat the opening fallback. A later switch registers a claim
  // of its own; the nearest claimed solid wins, wherever it sits on the ray.
  taps.register({
    id: "door",
    priority: 100,
    claim(hit, ctx) {
      const binding = bindingOf(hit.object);
      if (!binding) return null;
      return {
        onTap() {
          toggleDoor(binding, ctx.now);
        },
      };
    },
  });
  taps.register({
    id: "opening",
    priority: 10,
    fallback(_solids, ctx) {
      /** @type {{ binding: object, tEnter: number }[]} */
      const crossed = [];
      for (const door of bindings) {
        if (!door.obb || sampleDoor(door, ctx.now) <= OPENING_LIVE) continue;
        const span = rayObb(ctx.raycaster.ray, door.obb);
        if (!span) continue;
        crossed.push({ binding: door, tEnter: span.tEnter });
      }
      const binding = chooseOpeningAction(crossed);
      if (!binding) return false;
      return closeDoor(binding, ctx.now);
    },
  });

  function bind(root) {
    for (const binding of bindings) releaseProxy(binding);
    bindings.length = 0;
    if (!root || !records.length) return 0;
    root.updateWorldMatrix(true, true);
    const hosts = collectDoorHosts(root);
    const entries = hosts.map((host) => ({ host, center: worldCenter(host) }));
    for (const pair of matchDoorHosts(entries, records)) {
      const binding = bindHinge(pair.entry.host, pair.record);
      if (!binding) continue;
      const obb = hostClosedObb(binding.host);
      binding.obb = obb;
      binding.proxy = obb ? proxyMeshFromObb(obb, `opening:${binding.id}`) : null;
      bindings.push(binding);
    }
    return bindings.length;
  }

  /**
   * @param {number} now
   * @returns {boolean} true while a leaf is moving
   */
  function step(now) {
    let moving = false;
    for (const binding of bindings) {
      const wasMoving = Boolean(binding.anim);
      if (!wasMoving && binding.shown === binding.goal) continue;
      applyDoorSwing(binding, now);
      binding.shown = binding.anim ? null : binding.goal;
      if (wasMoving) moving = true;
    }
    return moving;
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerDown(ev) {
    if (ev.button !== undefined && ev.button !== 0) return;
    pointersDown += 1;
    if (pointersDown > 1) {
      gesture = null;
      return;
    }
    gesture = {
      id: ev.pointerId,
      x: ev.clientX,
      y: ev.clientY,
      moved: 0,
      pointers: 1,
    };
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerMove(ev) {
    if (!gesture || ev.pointerId !== gesture.id) return;
    const dist = Math.hypot(ev.clientX - gesture.x, ev.clientY - gesture.y);
    if (dist > gesture.moved) gesture.moved = dist;
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerUp(ev) {
    pointersDown = Math.max(0, pointersDown - 1);
    if (!gesture || ev.pointerId !== gesture.id) return;
    const g = gesture;
    gesture = null;
    const dist = Math.max(g.moved, Math.hypot(ev.clientX - g.x, ev.clientY - g.y));
    const kind = classifyPointerGesture({
      dx: dist,
      dy: 0,
      pointers: pointersDown > 0 ? 2 : 1,
      button: ev.button,
      blocked: isBlocked(),
      modifiers: ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey,
    });
    if (kind !== "tap") return;
    pick(ev);
  }

  function onPointerCancel() {
    pointersDown = Math.max(0, pointersDown - 1);
    gesture = null;
  }

  /**
   * @param {PointerEvent} ev
   */
  function pick(ev) {
    const camera = opts.getCamera();
    if (!camera || !bindings.length) return;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || canvas.clientWidth || 1;
    const h = rect.height || canvas.clientHeight || 1;
    pointer.x = ((ev.clientX - rect.left) / w) * 2 - 1;
    pointer.y = -((ev.clientY - rect.top) / h) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const sceneRoot = bindings[0]?.pivot?.parent;
    // Raycast the whole loaded model, not only the pivot parent (a door may
    // sit behind another part). The pivot's parent is the glTF root.
    // Opening proxies are not in this graph.
    let top = sceneRoot;
    while (top?.parent) top = top.parent;
    if (!top) return;
    const hits = raycaster.intersectObject(top, true);
    taps.dispatch(hits, { raycaster, now: performance.now() }, isDoorPickSolid);
  }

  canvas.addEventListener("pointerdown", onPointerDown, true);
  canvas.addEventListener("pointermove", onPointerMove, true);
  canvas.addEventListener("pointerup", onPointerUp, true);
  canvas.addEventListener("pointercancel", onPointerCancel, true);

  return { bind, step, bindings, taps };
}
