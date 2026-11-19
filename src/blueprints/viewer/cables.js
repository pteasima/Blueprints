/**
 * Cable routes in the viewer: thin tubes over the model, one colour per kind
 * (data blue, 24 V light cable yellow, 230 V red; tails thinner), plus the
 * distribution boards as purple boxes. Drawn in an overlay pass after the
 * model, so cables show through walls and ceilings ("x-ray"); they still
 * hide each other correctly. Records: `docs/models/<id>.cables.json`
 * (python -m blueprints.cable_routes). Editing lives in editMode.js; this
 * file only draws and picks. docs/electrical/CableRoutes.md.
 */
import * as THREE from "three";
import { KIND_COLORS, nearestSegment } from "./cableEdits.js";

const RADIUS = { main: 0.018, tail: 0.011, selected: 0.024 };
const HANDLE_RADIUS = 0.028;
const BOARD_COLOR = 0x8e44ff;
const SELECT_COLOR = 0xffb020;
const LOCKED_COLOR = 0x9a9aa0;
const UP = new THREE.Vector3(0, 1, 0);

/**
 * @param {{
 *   routes: object[],
 *   boards?: object[],
 *   getRoot: () => THREE.Object3D | null,
 * }} ctx
 */
export function createCableLayer(ctx) {
  const scene = new THREE.Scene();
  scene.name = "CableOverlay";
  // House frame (metres, Z up) → world: the glTF root's single child.
  const house = new THREE.Group();
  house.name = "CableHouse";
  house.matrixAutoUpdate = false;
  scene.add(house);
  const cylinder = new THREE.CylinderGeometry(1, 1, 1, 10, 1, false);
  const sphere = new THREE.SphereGeometry(1, 14, 10);
  const box = new THREE.BoxGeometry(1, 1, 1);
  const materials = new Map();
  function material(color, opacity) {
    const key = `${color}:${opacity}`;
    if (!materials.has(key)) {
      materials.set(
        key,
        new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, depthTest: true, depthWrite: opacity >= 1 }),
      );
    }
    return materials.get(key);
  }

  const lineMaterials = new Map();
  function lineMaterial(color, opacity) {
    const key = `${color}:${opacity}`;
    if (!lineMaterials.has(key)) {
      lineMaterials.set(key, new THREE.LineBasicMaterial({ color, transparent: opacity < 1, opacity, depthTest: true }));
    }
    return lineMaterials.get(key);
  }

  /** route id → { group, points, route } */
  const drawn = new Map();
  const handles = new THREE.Group();
  handles.name = "CableHandles";
  house.add(handles);
  let visible = false;
  /** @type {{ routeId: string | null, vertex: number | null, segment: number | null, related: Set<string> }} */
  let sel = { routeId: null, vertex: null, segment: null, related: new Set() };

  for (const board of ctx.boards || []) {
    const [ox, oy] = board.Origin || [0, 0];
    const [rx, ry] = board.RefDirection || [1, 0];
    const w = Number(board.Width) || 0.5;
    const d = Number(board.Depth) || 0.12;
    const h = Number(board.Height) || 0.9;
    const z0 = Number(board.Elevation) || 0;
    const fx = -ry;
    const fy = rx;
    const mesh = new THREE.Mesh(box, material(BOARD_COLOR, 0.55));
    mesh.position.set(ox + (rx * w) / 2 + (fx * d) / 2, oy + (ry * w) / 2 + (fy * d) / 2, z0 + h / 2);
    mesh.rotation.z = Math.atan2(ry, rx);
    mesh.scale.set(w, d, h);
    mesh.name = `board:${board.id}`;
    house.add(mesh);
  }

  function syncFrame() {
    const root = ctx.getRoot();
    if (!root) return false;
    const frame = root.children.length === 1 ? root.children[0] : root;
    frame.updateWorldMatrix(true, false);
    house.matrix.copy(frame.matrixWorld);
    house.matrixWorldNeedsUpdate = true;
    house.updateMatrixWorld(true);
    return true;
  }

  function segmentMesh(a, b, radius, mat) {
    const va = new THREE.Vector3(...a);
    const vb = new THREE.Vector3(...b);
    const dir = vb.clone().sub(va);
    const len = dir.length();
    const mesh = new THREE.Mesh(cylinder, mat);
    if (len < 1e-6) {
      mesh.visible = false;
      return mesh;
    }
    mesh.position.copy(va).add(vb).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(UP, dir.normalize());
    mesh.scale.set(radius, len, radius);
    return mesh;
  }

  function styleOf(route) {
    const selected = sel.routeId === route.id;
    const related = sel.related.has(route.id);
    const dim = (sel.routeId || sel.related.size) && !selected && !related;
    const color = KIND_COLORS[route.kind] ?? KIND_COLORS.data;
    const opacity = dim ? 0.28 : selected || related ? 1 : 0.92;
    const radius = selected ? RADIUS.selected : route.tail ? RADIUS.tail : RADIUS.main;
    return { color, opacity, radius, selected };
  }

  function build(route, points) {
    const old = drawn.get(route.id);
    if (old) {
      house.remove(old.group);
      for (const child of old.group.children) if (child.isLine) child.geometry.dispose();
    }
    const group = new THREE.Group();
    group.name = `cable:${route.id}`;
    const style = styleOf(route);
    for (let i = 1; i < points.length; i += 1) {
      const isSel = style.selected && sel.segment === i - 1;
      const mat = material(isSel ? SELECT_COLOR : style.color, style.opacity);
      const mesh = segmentMesh(points[i - 1], points[i], isSel ? style.radius * 1.4 : style.radius, mat);
      mesh.userData.bpCableSegment = i - 1;
      group.add(mesh);
    }
    // A 1 px line along the tubes keeps far-off cables visible.
    const lineMats = lineMaterial(style.color, style.opacity);
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points.map((p) => new THREE.Vector3(...p))), lineMats);
    group.add(line);
    // Round joints so bends read as one cable.
    for (let i = 1; i < points.length - 1; i += 1) {
      const joint = new THREE.Mesh(sphere, material(style.color, style.opacity));
      joint.position.set(...points[i]);
      joint.scale.setScalar(style.radius);
      group.add(joint);
    }
    house.add(group);
    drawn.set(route.id, { group, points: points.map((p) => p.slice()), route });
  }

  function buildHandles() {
    handles.clear();
    const entry = sel.routeId ? drawn.get(sel.routeId) : null;
    if (!entry) return;
    const pts = entry.points;
    for (let i = 0; i < pts.length; i += 1) {
      const locked = i === 0 || i === pts.length - 1;
      const on = sel.vertex === i;
      const mesh = new THREE.Mesh(sphere, material(on ? SELECT_COLOR : locked ? LOCKED_COLOR : 0xffffff, 1));
      mesh.position.set(...pts[i]);
      mesh.scale.setScalar(on ? HANDLE_RADIUS * 1.35 : locked ? HANDLE_RADIUS * 0.8 : HANDLE_RADIUS);
      handles.add(mesh);
    }
  }

  return {
    get visible() {
      return visible;
    },
    setVisible(on) {
      visible = Boolean(on);
    },
    /** Redraw one route at these house-metre points. */
    update(route, points) {
      build(route, points);
      if (sel.routeId === route.id) buildHandles();
    },
    points(routeId) {
      return drawn.get(routeId)?.points.map((p) => p.slice()) || null;
    },
    setSelection(next) {
      sel = {
        routeId: next?.routeId ?? null,
        vertex: next?.vertex ?? null,
        segment: next?.segment ?? null,
        related: next?.related instanceof Set ? next.related : new Set(),
      };
      // Restyle every route: the dimming depends on the selection.
      for (const { route, points } of [...drawn.values()]) build(route, points);
      buildHandles();
    },
    /** World position of a house point (for the gizmo anchor). */
    toWorld(p) {
      syncFrame();
      return new THREE.Vector3(...p).applyMatrix4(house.matrixWorld);
    },
    /** House direction of a world vector. */
    worldDirToHouse(v) {
      syncFrame();
      const m = new THREE.Matrix3().setFromMatrix4(house.matrixWorld).invert();
      const out = v.clone().applyMatrix3(m);
      return [out.x, out.y, out.z];
    },
    houseDirToWorld(d) {
      syncFrame();
      return new THREE.Vector3(...d).applyMatrix3(new THREE.Matrix3().setFromMatrix4(house.matrixWorld));
    },
    /** Screen points (CSS px, canvas-relative) of a route's vertices. */
    screenPoints(routeId, camera, w, h) {
      const entry = drawn.get(routeId);
      if (!entry) return [];
      syncFrame();
      return entry.points.map((p) => {
        const v = new THREE.Vector3(...p).applyMatrix4(house.matrixWorld).project(camera);
        if (v.z < -1 || v.z > 1) return null;
        return { x: ((v.x + 1) / 2) * w, y: ((1 - v.y) / 2) * h };
      });
    },
    /**
     * The route (and its segment) under a tap, within `maxPx`.
     * @returns {{ routeId: string, segment: number, t: number, distance: number } | null}
     */
    pick(camera, at, w, h, maxPx = 14) {
      if (!visible) return null;
      let best = null;
      for (const id of drawn.keys()) {
        const hit = nearestSegment(this.screenPoints(id, camera, w, h), at);
        if (!hit || hit.distance > maxPx) continue;
        // The selected route wins ties, so its segments stay easy to tap.
        const score = hit.distance - (id === sel.routeId ? 4 : 0);
        if (!best || score < best.score) best = { routeId: id, segment: hit.segment, t: hit.t, distance: hit.distance, score };
      }
      return best;
    },
    /** World-space box of a route, for framing. */
    worldBox(routeId) {
      const entry = drawn.get(routeId);
      const out = new THREE.Box3();
      if (!entry) return out;
      syncFrame();
      for (const p of entry.points) out.expandByPoint(new THREE.Vector3(...p).applyMatrix4(house.matrixWorld));
      return out;
    },
    render(renderer, camera) {
      if (!visible || !syncFrame()) return;
      const autoClear = renderer.autoClear;
      renderer.autoClear = false;
      renderer.setRenderTarget(null);
      renderer.clearDepth();
      renderer.render(scene, camera);
      renderer.autoClear = autoClear;
    },
  };
}
