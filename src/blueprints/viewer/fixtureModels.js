/**
 * Real fixture models (docs/electrical/FixtureModels.md): a Kama Lights D100
 * ceiling light, a Jung LS 990 / LS 995 push-button and a UniFi G6 Turret
 * drawn instead of the generated boxes, in Shaded and Realistic. Solid keeps
 * the colour-coded boxes.
 *
 * The generated box stays the element: taps, rocker halves, highlighting,
 * edit-mode moves and the Parts list all still use it, it is only drawn
 * invisibly (`bpAssetHidden`, so it still hides what is behind it). The model
 * hangs under the box mesh, so an edit-mode move carries it. Model meshes do
 * not raycast.
 *
 * Asset convention (scripts/build_fixture_models.py): metres, real size, +Z
 * out of the mounting surface, +Y up on a wall, origin at the centre of the
 * back face. Node `diffuser` glows when the light is on; `rocker`,
 * `rocker-1`, `rocker-2` tilt when pressed.
 */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

/**
 * Which elements get which model. `description` narrows by plan symbol or
 * product note (yaml `Description`).
 * @type {{ model: string, mount: "wall" | "ceiling", objectType: string, description?: RegExp }[]}
 */
export const FIXTURE_MODEL_RULES = [
  { model: "kama-d100", mount: "ceiling", objectType: "Downlight", description: /\bD100\b/ },
  { model: "jung-ls990", mount: "wall", objectType: "PushButton" },
  { model: "jung-ls995", mount: "wall", objectType: "DoublePushButton" },
  { model: "unifi-g6-turret", mount: "wall", objectType: "Camera", description: /G6 Turret/i },
];

/**
 * Edge lines on the models, tuned on the decimated meshes: a dihedral
 * threshold (degrees), as the viewer's boxes use (20), plus for flat wall
 * devices a front outline: the edge where the surface turns past 45 degrees
 * from facing the room. The Jung frame and rocker have soft fillets; after
 * decimation each fillet is two or three facets meeting at 20-40 degrees,
 * so any plain threshold draws either a hatched band or nothing. The
 * outline draws each fillet once. The D100 (revolved, exact) and the G6
 * (smooth ball and shell) only need the threshold. Open borders (where two
 * parts meet, the cut-off back) always draw.
 * @type {Record<string, { threshold: number, frontOutline?: boolean, borders?: boolean }>}
 */
export const MODEL_EDGES = {
  "kama-d100": { threshold: 30 },
  "jung-ls990": { threshold: 50, frontOutline: true },
  "jung-ls995": { threshold: 50, frontOutline: true },
  "unifi-g6-turret": { threshold: 45 },
};

/**
 * Feature edges of one geometry, like THREE.EdgesGeometry (creases over
 * the threshold and open borders), plus optionally the front outline: edges
 * whose two faces sit on either side of 45 degrees from +Z in `toModel`
 * space (the model's out-of-wall axis).
 * @param {THREE.BufferGeometry} geometry
 * @param {THREE.Matrix4} toModel geometry space -> model frame
 * @param {{ threshold: number, frontOutline?: boolean, borders?: boolean }} spec
 * @returns {Float32Array} segments in the model frame
 */
export function featureEdges(geometry, toModel, spec) {
  const pos = geometry.getAttribute("position");
  if (!pos || !pos.count) return new Float32Array(0);
  const index = geometry.getIndex();
  const tris = index ? index.count / 3 : pos.count / 3;
  const cosCrease = Math.cos((spec.threshold * Math.PI) / 180);
  const cosFront = Math.cos(Math.PI / 4);
  const p = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
  const tri = new THREE.Triangle();
  const n = new THREE.Vector3();
  /** @type {Map<string, { a: THREE.Vector3, b: THREE.Vector3, n: THREE.Vector3 }>} */
  const open = new Map();
  const out = [];
  const key = (v) => `${Math.round(v.x * 2e4)},${Math.round(v.y * 2e4)},${Math.round(v.z * 2e4)}`;
  const push = (a, b) => out.push(a.x, a.y, a.z, b.x, b.y, b.z);
  for (let t = 0; t < tris; t++) {
    for (let k = 0; k < 3; k++) {
      const i = index ? index.getX(t * 3 + k) : t * 3 + k;
      p[k].fromBufferAttribute(pos, i).applyMatrix4(toModel);
    }
    tri.set(p[0], p[1], p[2]);
    if (tri.getArea() < 1e-12) continue;
    tri.getNormal(n);
    const keys = [key(p[0]), key(p[1]), key(p[2])];
    for (let k = 0; k < 3; k++) {
      const ka = keys[k];
      const kb = keys[(k + 1) % 3];
      if (ka === kb) continue;
      const twin = open.get(`${kb}_${ka}`);
      if (twin) {
        open.delete(`${kb}_${ka}`);
        const crease = n.dot(twin.n) <= cosCrease;
        const outline = spec.frontOutline && (n.z >= cosFront) !== (twin.n.z >= cosFront);
        if (crease || outline) push(twin.a, twin.b);
      } else {
        open.set(`${ka}_${kb}`, { a: p[k].clone(), b: p[(k + 1) % 3].clone(), n: n.clone() });
      }
    }
  }
  if (spec.borders !== false) for (const e of open.values()) push(e.a, e.b);
  return new Float32Array(out);
}

/**
 * Hard-edge segments of a loaded model, in the model root's frame. Computed
 * once per model and shared by every instance.
 * @param {THREE.Object3D} root
 * @param {{ threshold: number, frontOutline?: boolean, borders?: boolean }} spec
 * @returns {Float32Array}
 */
export function modelEdgePositions(root, spec) {
  root.updateMatrixWorld(true);
  const inv = root.matrixWorld.clone().invert();
  const chunks = [];
  let total = 0;
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry?.getAttribute?.("position")) return;
    const seg = featureEdges(o.geometry, inv.clone().multiply(o.matrixWorld), spec);
    chunks.push(seg);
    total += seg.length;
  });
  const all = new Float32Array(total);
  let at = 0;
  for (const c of chunks) {
    all.set(c, at);
    at += c.length;
  }
  return all;
}

/**
 * Segments moved by a matrix (model frame -> host mesh frame).
 * @param {Float32Array} positions
 * @param {THREE.Matrix4} matrix
 */
export function transformPositions(positions, matrix) {
  const out = new Float32Array(positions.length);
  const v = new THREE.Vector3();
  for (let i = 0; i < positions.length; i += 3) {
    v.set(positions[i], positions[i + 1], positions[i + 2]).applyMatrix4(matrix);
    out[i] = v.x;
    out[i + 1] = v.y;
    out[i + 2] = v.z;
  }
  return out;
}

/** Rocker press: how far the rocker tips, and for how long. */
export const ROCKER_TILT_RAD = (2.5 * Math.PI) / 180;
export const ROCKER_PRESS_MS = 220;

/**
 * @param {{ objectType?: string, description?: string } | null | undefined} element
 */
export function ruleFor(element) {
  if (!element) return null;
  for (const rule of FIXTURE_MODEL_RULES) {
    if (element.objectType !== rule.objectType) continue;
    if (rule.description && !rule.description.test(String(element.description || ""))) continue;
    return rule;
  }
  return null;
}

/**
 * yaml-ifc RefDirection (CAD, x east / y north) of an ifc.json element.
 * @param {any} element
 * @returns {[number, number]}
 */
export function refDirectionOf(element) {
  for (const pset of element?.propertySets || []) {
    const p = pset?.properties || {};
    if ("RefDirectionX" in p || "RefDirectionY" in p) {
      const x = Number(p.RefDirectionX) || 0;
      const y = Number(p.RefDirectionY) || 0;
      const len = Math.hypot(x, y);
      if (len > 1e-9) return [x / len, y / len];
    }
  }
  return [1, 0];
}

/**
 * World pose of the model's origin and axes, from the element's world box.
 * A wall device's box grows from the wall along local +Y of its placement,
 * which is RefDirection turned +90 degrees (yaml-ifc), so that is the room
 * side. glTF world: x east, y up, z south (CAD y north is -z).
 * @param {"wall" | "ceiling"} mount
 * @param {[number, number]} ref CAD RefDirection
 * @param {THREE.Box3} box world box of the generated mesh
 * @returns {{ position: THREE.Vector3, quaternion: THREE.Quaternion, normal: THREE.Vector3 }}
 */
export function mountPose(mount, ref, box) {
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  let normal;
  let up;
  const position = center.clone();
  if (mount === "ceiling") {
    normal = new THREE.Vector3(0, -1, 0);
    up = new THREE.Vector3(0, 0, -1);
    position.y = box.max.y;
  } else {
    // CAD (-ry, rx) -> world (x, z) = (-ry, -rx).
    normal = new THREE.Vector3(-ref[1], 0, -ref[0]).normalize();
    up = new THREE.Vector3(0, 1, 0);
    const half = Math.abs(normal.x) * size.x * 0.5 + Math.abs(normal.z) * size.z * 0.5;
    position.addScaledVector(normal, -half);
  }
  const x = new THREE.Vector3().crossVectors(up, normal).normalize();
  const y = new THREE.Vector3().crossVectors(normal, x).normalize();
  const basis = new THREE.Matrix4().makeBasis(x, y, normal);
  const quaternion = new THREE.Quaternion().setFromRotationMatrix(basis);
  return { position, quaternion, normal };
}

/**
 * @param {{
 *   baseUrl: string,
 *   elements: () => object[],
 *   meshesForElement: (element: object) => THREE.Mesh[],
 *   onChange: () => void,
 * }} opts
 */
export function createFixtureModels(opts) {
  const base = String(opts.baseUrl || "").replace(/\/?$/, "/");
  /** @type {Map<string, Promise<THREE.Object3D | null>>} */
  const assets = new Map();
  /** globalId → { holder, meshes, diffusers, rockers } */
  const placed = new Map();
  /** globalId → last light look, re-applied once the model has loaded. */
  const looks = new Map();
  /** @type {{ pivot: THREE.Object3D, sign: number, t0: number }[]} */
  const presses = [];
  /** model → edge segments in the model frame (computed once). */
  const edgeCache = new Map();
  let mode = "solid";
  /** @type {THREE.Plane[] | null} */
  let planes = null;
  let enabled = Boolean(opts.baseUrl);
  let installing = null;
  const stats = { matched: 0, placed: 0, failed: [] };

  function load(model) {
    if (!assets.has(model)) {
      assets.set(
        model,
        new GLTFLoader()
          .loadAsync(`${base}${model}.glb`)
          .then((g) => g.scene)
          .catch((err) => {
            console.warn(`Fixture model ${model} did not load; keeping the box`, err);
            stats.failed.push(model);
            return null;
          }),
      );
    }
    return assets.get(model);
  }

  function hiddenMaterial() {
    const m = new THREE.MeshBasicMaterial({ visible: false });
    m.userData.bpAssetHidden = true;
    m.clippingPlanes = planes && planes.length ? planes : null;
    return m;
  }

  /**
   * @param {any} element
   * @param {any} rule
   * @param {THREE.Object3D} scene
   */
  function place(element, rule, scene) {
    const meshes = opts.meshesForElement(element).filter((m) => m.isMesh && !m.userData.bpEditAddedId);
    if (!meshes.length) return;
    const host = meshes[0];
    const box = new THREE.Box3();
    for (const m of meshes) {
      m.updateWorldMatrix(true, false);
      if (!m.geometry.boundingBox) m.geometry.computeBoundingBox();
      box.union(m.geometry.boundingBox.clone().applyMatrix4(m.matrixWorld));
    }
    if (box.isEmpty()) return;
    const pose = mountPose(rule.mount, refDirectionOf(element), box);
    const model = scene.clone(true);
    const holder = new THREE.Group();
    holder.name = `bpFixtureModel__${rule.model}`;
    holder.userData.bpFixtureModel = rule.model;
    holder.add(model);
    // World pose -> the host mesh's frame (it may sit under the vertical
    // exaggeration group; the model keeps its real size and shape).
    const world = new THREE.Matrix4().compose(pose.position, pose.quaternion, new THREE.Vector3(1, 1, 1));
    const local = host.matrixWorld.clone().invert().multiply(world);
    local.decompose(holder.position, holder.quaternion, holder.scale);
    // Edge lines: the host's own edge overlay (edges.js) draws these instead
    // of the box outline, so they follow edge mode, clipping and resolution
    // like every other part. One overlay per fixture, built at refresh time.
    if (!edgeCache.has(rule.model)) {
      edgeCache.set(rule.model, modelEdgePositions(scene, MODEL_EDGES[rule.model] || { threshold: 30 }));
    }
    host.userData.bpModelEdgePositions = transformPositions(edgeCache.get(rule.model), local);
    const diffusers = [];
    const rockers = new Map();
    model.traverse((o) => {
      if (o.isMesh) {
        o.raycast = () => {};
        o.userData.bpHitProxy = true;
        o.castShadow = true;
        o.receiveShadow = true;
        o.material = o.material.clone();
        o.material.userData.bpFixtureBase = {
          color: o.material.color?.getHex(),
          emissive: o.material.emissive?.getHex(),
          emissiveIntensity: o.material.emissiveIntensity,
        };
      }
      const name = String(o.name || "");
      if (name === "diffuser" && o.isMesh) diffusers.push(o);
    });
    for (const key of ["rocker", "rocker-1", "rocker-2"]) {
      const node = model.getObjectByName(key);
      if (!node) continue;
      // Tip about the rocker's own centre, not the model origin.
      const parent = node.parent;
      holder.updateMatrixWorld(true);
      const bb = new THREE.Box3().setFromObject(node);
      const c = parent.worldToLocal(bb.getCenter(new THREE.Vector3()));
      const pivot = new THREE.Group();
      pivot.name = `${key}__pivot`;
      pivot.position.copy(c);
      parent.add(pivot);
      node.position.sub(c);
      pivot.add(node);
      rockers.set(key, pivot);
    }
    host.add(holder);
    placed.set(element.globalId, { holder, meshes, diffusers, rockers, rule });
    stats.placed += 1;
  }

  /** Load every needed model and hang it under its box. */
  function install() {
    if (!enabled) return Promise.resolve(stats);
    if (installing) return installing;
    const todo = [];
    for (const element of opts.elements()) {
      const rule = ruleFor(element);
      if (!rule || placed.has(element.globalId)) continue;
      todo.push({ element, rule });
    }
    stats.matched = todo.length;
    const models = [...new Set(todo.map((t) => t.rule.model))];
    installing = Promise.all(models.map((m) => load(m).then((scene) => [m, scene]))).then((pairs) => {
      const scenes = new Map(pairs);
      for (const { element, rule } of todo) {
        const scene = scenes.get(rule.model);
        if (scene) place(element, rule, scene);
      }
      for (const [gid, look] of looks) applyLook(gid, look);
      sync(mode, planes);
      opts.onChange();
      return stats;
    });
    return installing;
  }

  /**
   * Show models (Shaded, Realistic) or boxes (Solid). Call after every
   * material refresh: it re-hides the boxes the refresh repainted.
   * @param {string} nextMode
   * @param {THREE.Plane[] | null} nextPlanes
   */
  function sync(nextMode, nextPlanes) {
    mode = nextMode;
    planes = nextPlanes;
    const show = enabled && mode !== "solid";
    for (const { holder, meshes } of placed.values()) {
      holder.visible = show;
      holder.traverse((o) => {
        if (!o.isMesh) return;
        o.material.clippingPlanes = planes && planes.length ? planes : null;
        o.material.clipShadows = true;
        o.material.needsUpdate = true;
      });
      for (const mesh of meshes) {
        mesh.userData.bpModelReplaced = show;
        if (show) {
          const prev = mesh.material;
          mesh.material = hiddenMaterial();
          if (prev && !Array.isArray(prev) && prev.userData?.bpAssetHidden) prev.dispose();
        }
        // Box edges become the model's edges (edges.js, bpModelEdgePositions).
        for (const child of mesh.children) {
          if (child.userData?.isSectionCap) child.visible = !show;
        }
      }
    }
  }

  /**
   * @param {string} gid
   * @param {{ on: boolean, color: THREE.Color, level: number } | null} look null restores
   */
  function applyLook(gid, look) {
    const p = placed.get(gid);
    if (!p) return;
    for (const d of p.diffusers) {
      const mat = /** @type {THREE.MeshStandardMaterial} */ (d.material);
      const baseLook = mat.userData.bpFixtureBase || {};
      if (look && look.on) {
        // Kept under 1, as main.js does for boxes: ACES bleaches a stronger
        // glow to cream, which reads as off.
        mat.color.copy(look.color).lerp(new THREE.Color(0xffffff), 0.35);
        mat.emissive.copy(look.color);
        mat.emissiveIntensity = 0.55 + 0.4 * look.level;
      } else {
        if (baseLook.color != null) mat.color.setHex(baseLook.color);
        mat.emissive.setHex(baseLook.emissive ?? 0);
        mat.emissiveIntensity = baseLook.emissiveIntensity ?? 1;
      }
    }
  }

  /**
   * Light state from main.js setLightLook. Only the diffuser glows.
   * @param {any} element
   * @param {{ on: boolean, color: THREE.Color, level: number } | null} look
   */
  function setLightLook(element, look) {
    if (!element) return;
    if (look) looks.set(element.globalId, look);
    else looks.delete(element.globalId);
    applyLook(element.globalId, look);
  }

  /**
   * Tip the pressed rocker half in and let it spring back.
   * @param {any} element
   * @param {{ rocker: string, position: "up" | "down" }} target
   */
  function press(element, target) {
    const p = element && placed.get(element.globalId);
    if (!p || !p.holder.visible) return false;
    const pivot = p.rockers.get(target.rocker) || p.rockers.get("rocker");
    if (!pivot) return false;
    // Rotating about +X moves +Y toward +Z (out); pressing the top pushes it in.
    presses.push({ pivot, sign: target.position === "down" ? 1 : -1, t0: performance.now() });
    return true;
  }

  /** Animation step; true while a rocker is moving. */
  function step(now) {
    if (!presses.length) return false;
    for (let i = presses.length - 1; i >= 0; i--) {
      const pr = presses[i];
      const u = (now - pr.t0) / ROCKER_PRESS_MS;
      if (u >= 1) {
        pr.pivot.rotation.x = 0;
        presses.splice(i, 1);
        continue;
      }
      // Quick in, slower out.
      const k = u < 0.3 ? u / 0.3 : 1 - (u - 0.3) / 0.7;
      pr.pivot.rotation.x = pr.sign * ROCKER_TILT_RAD * k;
    }
    return true;
  }

  /** Meshes drawn for an element (for the selection pulse). */
  function displayMeshesFor(element) {
    const p = element && placed.get(element.globalId);
    if (!p || !p.holder.visible) return [];
    const out = [];
    p.holder.traverse((o) => {
      if (o.isMesh) out.push(o);
    });
    return out;
  }

  /** Meshes drawn instead of these generated meshes (selection pulse). */
  function displayMeshesForMeshes(meshes) {
    const out = [];
    for (const mesh of meshes) {
      for (const child of mesh.children || []) {
        if (!child.userData?.bpFixtureModel || !child.visible) continue;
        child.traverse((o) => {
          if (o.isMesh) out.push(o);
        });
      }
    }
    return out;
  }

  return {
    install,
    sync,
    setLightLook,
    press,
    step,
    displayMeshesFor,
    displayMeshesForMeshes,
    get stats() {
      return { ...stats, placedIds: [...placed.values()].map((p) => p.meshes[0]?.userData?.bpElementKey) };
    },
    get enabled() {
      return enabled;
    },
    setEnabled(on) {
      enabled = Boolean(on) && Boolean(opts.baseUrl);
      sync(mode, planes);
      opts.onChange();
    },
    placedFor: (element) => placed.get(element?.globalId) || null,
    /**
     * World origin and facing of the model on a yaml id (headless checks).
     * @param {string} id
     */
    poseOf(id) {
      for (const p of placed.values()) {
        if (p.meshes[0]?.userData?.bpElementKey !== id) continue;
        p.holder.updateWorldMatrix(true, false);
        const pos = new THREE.Vector3().setFromMatrixPosition(p.holder.matrixWorld);
        const normal = new THREE.Vector3(0, 0, 1).transformDirection(p.holder.matrixWorld);
        return { model: p.rule.model, position: pos.toArray(), normal: normal.toArray(), visible: p.holder.visible };
      }
      return null;
    },
  };
}
