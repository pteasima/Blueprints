/**
 * AutoCAD-mobile-style measure tool: snap cursor + explicit confirm.
 *
 * Trackpad / fine pointer: crosshair appears on enable; move updates snap;
 * click confirms the current cursor point.
 *
 * Touch: tap alone does nothing; drag places a cursor slightly above the
 * finger; lift keeps it; a later tap anywhere confirms without re-picking.
 *
 * Second-point placement stays on mesh snaps (line always connects endpoints).
 * Across a rectangular face, parallel-edge width snap drops a perpendicular
 * foot onto the opposite edge and shows a right-angle mark.
 */
import * as THREE from "three";

const DRAG_PX = 8;
const TOUCH_OFFSET_PX = 56;
const VERTEX_PX = 14;
const EDGE_PX = 11;
const AXIS_MIN_MM = 0.5;
const CLIP_EPS = 1e-4;
const LABEL_PX = 128;
const LABEL_HEIGHT_WORLD_FRAC = 0.028;
const MARKER_PX = 5;
const PARALLEL_DOT = 0.995;
const COPLANAR_DOT = 0.999;
const PERP_ACCEPT_PX = 18;
const RIGHT_ANGLE_PX = 22;
const EDGE_ON_TOL_PX = 14;

const _ndc = new THREE.Vector2();
const _raycaster = new THREE.Raycaster();
const _v0 = new THREE.Vector3();
const _v1 = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _tmp = new THREE.Vector3();
const _tmp2 = new THREE.Vector3();
const _screenA = new THREE.Vector3();
const _screenB = new THREE.Vector3();
const _proj = new THREE.Vector3();
const _delta = new THREE.Vector3();
const _look = new THREE.Vector3();
const _n = new THREE.Vector3();
const _plane = new THREE.Plane();

/**
 * @param {number} metres
 * @returns {string}
 */
export function formatMm(metres) {
  const mm = Math.abs(metres) * 1000;
  if (!Number.isFinite(mm)) return "— mm";
  if (Math.abs(mm - Math.round(mm)) < 0.05) return `${Math.round(mm)} mm`;
  if (mm >= 100) return `${mm.toFixed(1)} mm`;
  return `${mm.toFixed(2)} mm`;
}

/**
 * @param {PointerEvent | { pointerType?: string }} ev
 */
function isTouchPointer(ev) {
  return ev.pointerType === "touch";
}

/**
 * @param {PointerEvent | { pointerType?: string }} ev
 */
function isFinePointer(ev) {
  return ev.pointerType === "mouse" || ev.pointerType === "pen";
}

function deviceHasFinePointer() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(hover: hover) and (pointer: fine)").matches
  );
}

/**
 * @param {{
 *   scene: THREE.Scene,
 *   canvas: HTMLCanvasElement,
 *   camera: THREE.PerspectiveCamera,
 *   controls: { enabled: boolean },
 *   getRoot: () => THREE.Object3D | null,
 *   getClipPlanes: () => THREE.Plane[],
 *   onLiveLength?: (label: string | null) => void,
 *   onActiveChange?: (active: boolean) => void,
 * }} opts
 */
export function createMeasureTool(opts) {
  const {
    scene,
    canvas,
    camera,
    controls,
    getRoot,
    getClipPlanes,
    onLiveLength,
    onActiveChange,
  } = opts;

  /** @type {'idle' | 'placeFirst' | 'placeSecond'} */
  let phase = "idle";
  let active = false;

  /** Cursor has been shown / positioned for the current point. */
  let cursorPlaced = false;
  /** Canvas-local aim position (after touch offset). */
  let aimX = 0;
  let aimY = 0;
  /** @type {THREE.Vector3 | null} */
  let cursorWorld = null;
  /** @type {'vertex' | 'edge' | 'face' | 'perp' | null} */
  let snapKind = null;
  /** @type {THREE.Vector3 | null} */
  let snapEdgeDir = null;
  /** Edge direction for the active perpendicular width snap (right-angle mark). */
  /** @type {THREE.Vector3 | null} */
  let perpEdgeDir = null;

  /** Confirmed first endpoint. */
  /** @type {THREE.Vector3 | null} */
  let pointA = null;
  /** @type {THREE.Vector3 | null} */
  let axisHintA = null;

  let pointerId = null;
  /** @type {string} */
  let pointerType = "mouse";
  let downX = 0;
  let downY = 0;
  let gestureMoved = false;
  /** True while a drag is actively driving the cursor (touch). */
  let dragDriving = false;

  const overlay = new THREE.Group();
  overlay.name = "MeasureOverlay";
  overlay.renderOrder = 10;
  scene.add(overlay);

  const dims = new THREE.Group();
  dims.name = "MeasureDimensions";
  scene.add(dims);

  const snapMarker = makeMarker(0xffd60a);
  const lockedMarker = makeMarker(0x34c759);
  const draftLine = makeLine(0xffd60a, 0.75);
  const rightAngle = makeRightAngleLine(0xffd60a);
  overlay.add(snapMarker, lockedMarker, draftLine, rightAngle);
  snapMarker.visible = false;
  lockedMarker.visible = false;
  draftLine.visible = false;
  rightAngle.visible = false;

  const crosshair = ensureCrosshairEl(canvas);

  /** @type {Array<{ group: THREE.Group, sprite: THREE.Sprite, mid: THREE.Vector3, span: number }>} */
  const committed = [];

  function isActive() {
    return active;
  }

  /**
   * @param {boolean} on
   */
  function setActive(on) {
    const next = !!on;
    if (next === active) {
      if (next) syncChrome();
      return;
    }
    active = next;
    if (active) {
      controls.enabled = false;
      phase = "placeFirst";
      resetCursor();
      pointA = null;
      axisHintA = null;
      if (deviceHasFinePointer()) {
        const w = Math.max(1, canvas.clientWidth);
        const h = Math.max(1, canvas.clientHeight);
        placeCursorAt(w * 0.5, h * 0.5, true);
      } else {
        hideCursorUi();
      }
    } else {
      controls.enabled = true;
      phase = "idle";
      resetCursor();
      pointA = null;
      axisHintA = null;
      pointerId = null;
      dragDriving = false;
      hideCursorUi();
      onLiveLength?.(null);
    }
    onActiveChange?.(active);
    syncChrome();
    updateDraftVisuals();
  }

  function resetCursor() {
    cursorPlaced = false;
    cursorWorld = null;
    snapKind = null;
    snapEdgeDir = null;
    perpEdgeDir = null;
  }

  function syncChrome() {
    if (phase === "placeSecond" && pointA && cursorWorld) {
      onLiveLength?.(formatMm(pointA.distanceTo(cursorWorld)));
    } else if (active) {
      onLiveLength?.(null);
    }
  }

  function hideCursorUi() {
    crosshair.hidden = true;
    snapMarker.visible = false;
    rightAngle.visible = false;
  }

  /**
   * @param {number} sx canvas-local x (aim)
   * @param {number} sy canvas-local y (aim)
   * @param {boolean} [forcePlace]
   */
  function placeCursorAt(sx, sy, forcePlace = false) {
    aimX = sx;
    aimY = sy;
    cursorPlaced = true;
    const snap = pickSnap(sx, sy);
    if (snap) {
      let world = snap.point.clone();
      let kind = snap.kind;
      let edgeDir = snap.edgeDir;
      perpEdgeDir = null;

      if (phase === "placeSecond" && pointA) {
        const perp = tryPerpendicularSnap(pointA, axisHintA, snap);
        if (perp) {
          world = perp.foot;
          kind = "perp";
          edgeDir = perp.edgeDir;
          perpEdgeDir = perp.edgeDir.clone();
        }
      }

      cursorWorld = world;
      snapKind = kind;
      snapEdgeDir = edgeDir;
    } else if (forcePlace) {
      if (!cursorWorld) {
        snapKind = null;
        snapEdgeDir = null;
        perpEdgeDir = null;
      }
    } else {
      cursorWorld = null;
      snapKind = null;
      snapEdgeDir = null;
      perpEdgeDir = null;
    }
    updateDraftVisuals();
    syncChrome();
  }

  /**
   * @param {THREE.Mesh} marker
   * @param {THREE.Vector3} world
   */
  function scaleMarker(marker, world) {
    const r = worldPerPixel(world) * MARKER_PX;
    marker.scale.setScalar(Math.max(r, 1e-6));
  }

  function updateDraftVisuals() {
    if (!active) {
      hideCursorUi();
      lockedMarker.visible = false;
      draftLine.visible = false;
      rightAngle.visible = false;
      return;
    }

    if (pointA) {
      lockedMarker.visible = true;
      lockedMarker.position.copy(pointA);
      scaleMarker(lockedMarker, pointA);
    } else {
      lockedMarker.visible = false;
    }

    if (cursorPlaced) {
      crosshair.hidden = false;
      positionCrosshair(crosshair, canvas, aimX, aimY, snapKind);
      if (cursorWorld) {
        snapMarker.visible = true;
        snapMarker.position.copy(cursorWorld);
        scaleMarker(snapMarker, cursorWorld);
        colorMarker(snapMarker, snapKind);
      } else {
        snapMarker.visible = false;
      }
    } else {
      hideCursorUi();
    }

    if (phase === "placeSecond" && pointA && cursorWorld) {
      setLineEndpoints(draftLine, pointA, cursorWorld);
      draftLine.visible = true;
    } else {
      draftLine.visible = false;
    }

    if (
      phase === "placeSecond" &&
      snapKind === "perp" &&
      pointA &&
      cursorWorld &&
      perpEdgeDir
    ) {
      updateRightAngle(rightAngle, pointA, cursorWorld, perpEdgeDir, worldPerPixel);
      rightAngle.visible = true;
    } else {
      rightAngle.visible = false;
    }
  }

  /**
   * @param {PointerEvent} ev
   * @returns {{ x: number, y: number }}
   */
  function canvasPos(ev) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: ev.clientX - rect.left,
      y: ev.clientY - rect.top,
    };
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {string} type
   */
  function aimFromPointer(x, y, type) {
    if (type === "touch") return { x, y: y - TOUCH_OFFSET_PX };
    return { x, y };
  }

  /**
   * @param {THREE.Vector3} world
   */
  function passesClip(world) {
    const planes = getClipPlanes() || [];
    for (const p of planes) {
      if (p.distanceToPoint(world) < -CLIP_EPS) return false;
    }
    return true;
  }

  /**
   * @param {THREE.Vector3} world
   */
  function worldPerPixel(world) {
    const dist = camera.position.distanceTo(world);
    const vFov = (camera.fov * Math.PI) / 180;
    const h = Math.max(1, canvas.clientHeight);
    return (2 * Math.tan(vFov / 2) * dist) / h / Math.max(camera.zoom, 1e-6);
  }

  /**
   * @param {THREE.Vector3} world
   * @param {THREE.Vector3} out
   */
  function projectToScreen(world, out) {
    out.copy(world).project(camera);
    const w = Math.max(1, canvas.clientWidth);
    const h = Math.max(1, canvas.clientHeight);
    out.x = (out.x * 0.5 + 0.5) * w;
    out.y = (-out.y * 0.5 + 0.5) * h;
    return out;
  }

  /**
   * @param {number} sx
   * @param {number} sy
   * @returns {{
   *   point: THREE.Vector3,
   *   kind: 'vertex' | 'edge' | 'face',
   *   edgeDir: THREE.Vector3 | null,
   *   mesh: THREE.Mesh | null,
   *   triVerts: THREE.Vector3[] | null,
   *   faceNormal: THREE.Vector3 | null,
   * } | null}
   */
  function pickSnap(sx, sy) {
    const root = getRoot();
    if (!root) return null;

    const rect = canvas.getBoundingClientRect();
    _ndc.x = (sx / Math.max(1, rect.width)) * 2 - 1;
    _ndc.y = -(sy / Math.max(1, rect.height)) * 2 + 1;

    _raycaster.setFromCamera(_ndc, camera);
    const hits = _raycaster.intersectObject(root, true);
    /** @type {THREE.Intersection | null} */
    let hit = null;
    for (const h of hits) {
      if (!h.object.visible) continue;
      if (!passesClip(h.point)) continue;
      hit = h;
      break;
    }
    if (!hit) return null;

    const mesh = /** @type {THREE.Mesh} */ (hit.object);
    const geom = mesh.geometry;
    if (!geom?.getAttribute("position")) {
      return {
        point: hit.point.clone(),
        kind: "face",
        edgeDir: null,
        mesh,
        triVerts: null,
        faceNormal: null,
      };
    }

    mesh.updateWorldMatrix(true, false);
    const wpp = worldPerPixel(hit.point);
    const vertR = wpp * VERTEX_PX;
    const edgeR = wpp * EDGE_PX;
    const pos = geom.getAttribute("position");
    const index = geom.getIndex();
    const faceIdx = hit.faceIndex;

    /** @type {THREE.Vector3[]} */
    const triVerts = [];
    if (hit.face) {
      _v0.fromBufferAttribute(pos, hit.face.a).applyMatrix4(mesh.matrixWorld);
      _v1.fromBufferAttribute(pos, hit.face.b).applyMatrix4(mesh.matrixWorld);
      _v2.fromBufferAttribute(pos, hit.face.c).applyMatrix4(mesh.matrixWorld);
      triVerts.push(_v0.clone(), _v1.clone(), _v2.clone());
    } else if (typeof faceIdx === "number") {
      let i0;
      let i1;
      let i2;
      if (index) {
        i0 = index.getX(faceIdx * 3);
        i1 = index.getX(faceIdx * 3 + 1);
        i2 = index.getX(faceIdx * 3 + 2);
      } else {
        i0 = faceIdx * 3;
        i1 = faceIdx * 3 + 1;
        i2 = faceIdx * 3 + 2;
      }
      _v0.fromBufferAttribute(pos, i0).applyMatrix4(mesh.matrixWorld);
      _v1.fromBufferAttribute(pos, i1).applyMatrix4(mesh.matrixWorld);
      _v2.fromBufferAttribute(pos, i2).applyMatrix4(mesh.matrixWorld);
      triVerts.push(_v0.clone(), _v1.clone(), _v2.clone());
    }

    /** @type {THREE.Vector3 | null} */
    let faceNormal = null;
    if (triVerts.length === 3) {
      faceNormal = new THREE.Vector3()
        .subVectors(triVerts[1], triVerts[0])
        .cross(_tmp.subVectors(triVerts[2], triVerts[0]))
        .normalize();
      if (faceNormal.lengthSq() < 1e-12) faceNormal = null;
    }

    const cx = sx;
    const cy = sy;
    /** @type {{ point: THREE.Vector3, distPx: number } | null} */
    let bestVert = null;

    /**
     * @param {THREE.Vector3} world
     */
    function considerVert(world) {
      if (!passesClip(world)) return;
      if (world.distanceToSquared(hit.point) > vertR * vertR * 4) return;
      projectToScreen(world, _proj);
      const dpx = Math.hypot(_proj.x - cx, _proj.y - cy);
      if (dpx > VERTEX_PX) return;
      if (!bestVert || dpx < bestVert.distPx) {
        bestVert = { point: world.clone(), distPx: dpx };
      }
    }

    for (const v of triVerts) considerVert(v);
    const ballR2 = vertR * vertR * 4;
    const count = pos.count;
    const step = count > 8000 ? 2 : 1;
    for (let i = 0; i < count; i += step) {
      _tmp.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld);
      if (_tmp.distanceToSquared(hit.point) > ballR2) continue;
      considerVert(_tmp);
    }

    if (bestVert) {
      return {
        point: bestVert.point,
        kind: "vertex",
        edgeDir: null,
        mesh,
        triVerts: triVerts.length ? triVerts : null,
        faceNormal,
      };
    }

    /** @type {{ point: THREE.Vector3, distPx: number, dir: THREE.Vector3 } | null} */
    let bestEdge = null;

    /**
     * @param {THREE.Vector3} a
     * @param {THREE.Vector3} b
     */
    function considerEdge(a, b) {
      _delta.copy(b).sub(a);
      const len2 = _delta.lengthSq();
      if (len2 < 1e-18) return;
      let t = _tmp.copy(hit.point).sub(a).dot(_delta) / len2;
      t = Math.min(1, Math.max(0, t));
      _tmp2.copy(a).addScaledVector(_delta, t);
      if (!passesClip(_tmp2)) return;
      if (_tmp2.distanceToSquared(hit.point) > edgeR * edgeR * 4) return;
      projectToScreen(_tmp2, _proj);
      const dpx = Math.hypot(_proj.x - cx, _proj.y - cy);
      if (dpx > EDGE_PX) return;
      projectToScreen(a, _screenA);
      projectToScreen(b, _screenB);
      const ex = _screenB.x - _screenA.x;
      const ey = _screenB.y - _screenA.y;
      const el2 = ex * ex + ey * ey;
      if (el2 > 1e-6) {
        let te = ((cx - _screenA.x) * ex + (cy - _screenA.y) * ey) / el2;
        te = Math.min(1, Math.max(0, te));
        const px = _screenA.x + ex * te;
        const py = _screenA.y + ey * te;
        if (Math.hypot(cx - px, cy - py) > EDGE_PX) return;
      }
      if (!bestEdge || dpx < bestEdge.distPx) {
        bestEdge = {
          point: _tmp2.clone(),
          distPx: dpx,
          dir: _delta.clone().normalize(),
        };
      }
    }

    if (triVerts.length === 3) {
      considerEdge(triVerts[0], triVerts[1]);
      considerEdge(triVerts[1], triVerts[2]);
      considerEdge(triVerts[2], triVerts[0]);
    }

    if (bestEdge) {
      return {
        point: bestEdge.point,
        kind: "edge",
        edgeDir: bestEdge.dir,
        mesh,
        triVerts: triVerts.length ? triVerts : null,
        faceNormal,
      };
    }

    return {
      point: hit.point.clone(),
      kind: "face",
      edgeDir: null,
      mesh,
      triVerts: triVerts.length ? triVerts : null,
      faceNormal,
    };
  }

  /**
   * If A lies on an edge of a rectangular face and the free snap is near the
   * perpendicular foot on a parallel opposite edge, snap to that foot.
   *
   * @param {THREE.Vector3} a
   * @param {THREE.Vector3 | null} hintDir
   * @param {{
   *   point: THREE.Vector3,
   *   mesh: THREE.Mesh | null,
   *   triVerts: THREE.Vector3[] | null,
   *   faceNormal: THREE.Vector3 | null,
   * }} snap
   * @returns {{ foot: THREE.Vector3, edgeDir: THREE.Vector3 } | null}
   */
  function tryPerpendicularSnap(a, hintDir, snap) {
    if (!snap.mesh || !snap.triVerts || snap.triVerts.length !== 3) return null;
    if (!snap.faceNormal || snap.faceNormal.lengthSq() < 1e-12) return null;

    const wpp = worldPerPixel(a);
    const onEdgeTol = wpp * EDGE_ON_TOL_PX;
    const planeTol = Math.max(wpp * 2, 1e-5);
    if (Math.abs(signedPlaneDist(a, snap.triVerts[0], snap.faceNormal)) > planeTol) {
      return null;
    }

    const edges = collectCoplanarEdges(
      snap.mesh,
      snap.triVerts[0],
      snap.faceNormal,
      planeTol,
    );
    if (!edges.length) return null;

    /** @type {THREE.Vector3[]} */
    const dirsAtA = [];
    for (const e of edges) {
      const d = distPointToSegment(a, e.a, e.b);
      if (d <= onEdgeTol) dirsAtA.push(e.dir.clone());
    }
    if (hintDir && hintDir.lengthSq() > 1e-12) {
      dirsAtA.push(hintDir.clone().normalize());
    }
    if (!dirsAtA.length) return null;

    const acceptWorld = wpp * PERP_ACCEPT_PX;
    /** @type {{ foot: THREE.Vector3, edgeDir: THREE.Vector3, score: number } | null} */
    let best = null;

    for (const D of dirsAtA) {
      if (D.lengthSq() < 1e-12) continue;
      D.normalize();
      for (const e of edges) {
        if (Math.abs(e.dir.dot(D)) < PARALLEL_DOT) continue;
        // Skip the edge A sits on.
        if (distPointToSegment(a, e.a, e.b) <= onEdgeTol) continue;

        const foot = closestPointOnSegment(a, e.a, e.b);
        if (!passesClip(foot)) continue;

        // Require a real width (not a zero / collinear miss).
        const width = a.distanceTo(foot);
        if (width * 1000 < AXIS_MIN_MM) continue;

        // Measure direction must be nearly perpendicular to D.
        _delta.copy(foot).sub(a);
        if (_delta.lengthSq() < 1e-16) continue;
        _delta.normalize();
        if (Math.abs(_delta.dot(D)) > 0.08) continue;

        const freeDist = snap.point.distanceTo(foot);
        projectToScreen(snap.point, _screenA);
        projectToScreen(foot, _screenB);
        const freePx = Math.hypot(_screenA.x - _screenB.x, _screenA.y - _screenB.y);
        if (freeDist > acceptWorld * 1.35 && freePx > PERP_ACCEPT_PX) continue;

        const score = freePx + freeDist / Math.max(wpp, 1e-9);
        if (!best || score < best.score) {
          best = { foot: foot.clone(), edgeDir: D.clone(), score };
        }
      }
    }

    return best ? { foot: best.foot, edgeDir: best.edgeDir } : null;
  }

  /**
   * @param {THREE.Mesh} mesh
   * @param {THREE.Vector3} planePoint
   * @param {THREE.Vector3} planeNormal
   * @param {number} planeTol
   * @returns {Array<{ a: THREE.Vector3, b: THREE.Vector3, dir: THREE.Vector3 }>}
   */
  function collectCoplanarEdges(mesh, planePoint, planeNormal, planeTol) {
    const geom = mesh.geometry;
    const pos = geom?.getAttribute("position");
    if (!pos) return [];
    mesh.updateWorldMatrix(true, false);
    const index = geom.getIndex();
    /** @type {Map<string, { a: THREE.Vector3, b: THREE.Vector3, dir: THREE.Vector3 }>} */
    const map = new Map();
    const quant = Math.max(planeTol * 0.25, 1e-5);

    /**
     * @param {THREE.Vector3} p0
     * @param {THREE.Vector3} p1
     * @param {THREE.Vector3} p2
     */
    function considerTri(p0, p1, p2) {
      _n.subVectors(p1, p0).cross(_tmp.subVectors(p2, p0));
      if (_n.lengthSq() < 1e-16) return;
      _n.normalize();
      if (Math.abs(_n.dot(planeNormal)) < COPLANAR_DOT) return;
      if (Math.abs(signedPlaneDist(p0, planePoint, planeNormal)) > planeTol) return;
      if (Math.abs(signedPlaneDist(p1, planePoint, planeNormal)) > planeTol) return;
      if (Math.abs(signedPlaneDist(p2, planePoint, planeNormal)) > planeTol) return;
      addEdge(p0, p1);
      addEdge(p1, p2);
      addEdge(p2, p0);
    }

    /**
     * @param {THREE.Vector3} a
     * @param {THREE.Vector3} b
     */
    function addEdge(a, b) {
      _delta.copy(b).sub(a);
      if (_delta.lengthSq() < 1e-16) return;
      const key = edgeKey(a, b, quant);
      if (map.has(key)) return;
      map.set(key, {
        a: a.clone(),
        b: b.clone(),
        dir: _delta.clone().normalize(),
      });
    }

    const triCount = index ? index.count / 3 : pos.count / 3;
    const maxTris = 12000;
    const step = triCount > maxTris ? Math.ceil(triCount / maxTris) : 1;
    for (let t = 0; t < triCount; t += step) {
      let i0;
      let i1;
      let i2;
      if (index) {
        const base = t * 3;
        i0 = index.getX(base);
        i1 = index.getX(base + 1);
        i2 = index.getX(base + 2);
      } else {
        i0 = t * 3;
        i1 = t * 3 + 1;
        i2 = t * 3 + 2;
      }
      _v0.fromBufferAttribute(pos, i0).applyMatrix4(mesh.matrixWorld);
      _v1.fromBufferAttribute(pos, i1).applyMatrix4(mesh.matrixWorld);
      _v2.fromBufferAttribute(pos, i2).applyMatrix4(mesh.matrixWorld);
      considerTri(_v0, _v1, _v2);
    }

    return [...map.values()];
  }

  function confirmCurrent() {
    if (!cursorWorld) return;

    if (phase === "placeFirst") {
      pointA = cursorWorld.clone();
      axisHintA = snapEdgeDir ? snapEdgeDir.clone() : null;
      phase = "placeSecond";
      perpEdgeDir = null;
      if (isTouchPointer({ pointerType }) || !deviceHasFinePointer()) {
        cursorPlaced = false;
        cursorWorld = null;
        snapKind = null;
        snapEdgeDir = null;
        hideCursorUi();
      }
      updateDraftVisuals();
      syncChrome();
      return;
    }

    if (phase === "placeSecond" && pointA) {
      if (pointA.distanceTo(cursorWorld) * 1000 < AXIS_MIN_MM) return;
      commitDimension(pointA, cursorWorld);
      setActive(false);
    }
  }

  /**
   * @param {THREE.Vector3} a
   * @param {THREE.Vector3} b
   */
  function commitDimension(a, b) {
    const group = new THREE.Group();
    group.name = "Dimension";
    const line = makeLine(0xff9f0a, 1);
    setLineEndpoints(line, a, b);
    line.visible = true;
    const mid = a.clone().lerp(b, 0.5);
    const span = a.distanceTo(b);
    const sprite = makeLabelSprite(formatMm(span));
    sprite.position.copy(mid);
    group.add(line, sprite);
    dims.add(group);
    committed.push({ group, sprite, mid: mid.clone(), span });
    placeLabel(sprite, a, b, mid, span);
  }

  /**
   * @param {THREE.Sprite} sprite
   * @param {THREE.Vector3} a
   * @param {THREE.Vector3} b
   * @param {THREE.Vector3} mid
   * @param {number} span
   */
  function placeLabel(sprite, a, b, mid, span) {
    camera.getWorldDirection(_look);
    _delta.copy(b).sub(a);
    if (_delta.lengthSq() < 1e-16) {
      sprite.position.copy(mid);
      return;
    }
    _delta.normalize();
    _tmp.crossVectors(_delta, _look);
    if (_tmp.lengthSq() < 1e-10) _tmp.copy(camera.up);
    _tmp.normalize();
    const lift = Math.max(span * LABEL_HEIGHT_WORLD_FRAC, worldPerPixel(mid) * 18);
    sprite.position.copy(mid).addScaledVector(_tmp, lift);
    const s = worldPerPixel(sprite.position) * 56;
    sprite.scale.set(s * 2.2, s, 1);
  }

  function update() {
    if (lockedMarker.visible && pointA) scaleMarker(lockedMarker, pointA);
    if (snapMarker.visible && cursorWorld) scaleMarker(snapMarker, cursorWorld);
    if (cursorPlaced) {
      positionCrosshair(crosshair, canvas, aimX, aimY, snapKind);
    }
    if (
      rightAngle.visible &&
      pointA &&
      cursorWorld &&
      perpEdgeDir &&
      snapKind === "perp"
    ) {
      updateRightAngle(rightAngle, pointA, cursorWorld, perpEdgeDir, worldPerPixel);
    }
    for (const dim of committed) {
      const line = /** @type {THREE.Line} */ (dim.group.children[0]);
      const pos = line.geometry.getAttribute("position");
      _v0.fromBufferAttribute(pos, 0);
      _v1.fromBufferAttribute(pos, 1);
      placeLabel(dim.sprite, _v0, _v1, dim.mid, dim.span);
    }
  }

  /**
   * @param {PointerEvent} ev
   */
  function onHoverMove(ev) {
    if (!active || phase === "idle") return;
    if (!isFinePointer(ev)) return;
    if (pointerId !== null) return;
    const { x, y } = canvasPos(ev);
    const aim = aimFromPointer(x, y, ev.pointerType);
    placeCursorAt(aim.x, aim.y, true);
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerDown(ev) {
    if (!active || phase === "idle") return;
    if (ev.button !== undefined && ev.button !== 0) return;
    if (pointerId !== null) return;
    pointerId = ev.pointerId;
    pointerType = ev.pointerType || "mouse";
    const { x, y } = canvasPos(ev);
    downX = x;
    downY = y;
    gestureMoved = false;
    dragDriving = false;
    try {
      canvas.setPointerCapture(ev.pointerId);
    } catch {
      /* ignore */
    }

    if (isFinePointer(ev)) {
      const aim = aimFromPointer(x, y, pointerType);
      placeCursorAt(aim.x, aim.y, true);
    }
    ev.preventDefault();
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerMove(ev) {
    if (!active) return;

    if (pointerId === null) {
      onHoverMove(ev);
      return;
    }
    if (pointerId !== ev.pointerId) return;

    const { x, y } = canvasPos(ev);
    const dist = Math.hypot(x - downX, y - downY);
    if (dist >= DRAG_PX) {
      gestureMoved = true;
      dragDriving = true;
    }

    if (isTouchPointer(ev)) {
      if (!dragDriving) return;
      const aim = aimFromPointer(x, y, "touch");
      placeCursorAt(aim.x, aim.y, true);
    } else if (isFinePointer(ev)) {
      const aim = aimFromPointer(x, y, pointerType);
      placeCursorAt(aim.x, aim.y, true);
    }
    ev.preventDefault();
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerUp(ev) {
    if (!active || pointerId !== ev.pointerId) return;
    const { x, y } = canvasPos(ev);
    if (Math.hypot(x - downX, y - downY) >= DRAG_PX) {
      gestureMoved = true;
      dragDriving = true;
    }

    pointerId = null;
    try {
      canvas.releasePointerCapture(ev.pointerId);
    } catch {
      /* ignore */
    }

    if (isTouchPointer(ev)) {
      if (gestureMoved) {
        dragDriving = false;
      } else {
        dragDriving = false;
        if (cursorPlaced && cursorWorld) confirmCurrent();
      }
      ev.preventDefault();
      return;
    }

    if (!gestureMoved && cursorWorld) {
      confirmCurrent();
    }
    dragDriving = false;
    ev.preventDefault();
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerCancel(ev) {
    if (pointerId !== ev.pointerId) return;
    pointerId = null;
    dragDriving = false;
  }

  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerup", onPointerUp);
  canvas.addEventListener("pointercancel", onPointerCancel);

  return {
    isActive,
    setActive,
    update,
    formatMm,
  };
}

/**
 * @param {THREE.Vector3} p
 * @param {THREE.Vector3} planePoint
 * @param {THREE.Vector3} planeNormal
 */
function signedPlaneDist(p, planePoint, planeNormal) {
  return _plane.setFromNormalAndCoplanarPoint(planeNormal, planePoint).distanceToPoint(p);
}

/**
 * @param {THREE.Vector3} p
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 */
function distPointToSegment(p, a, b) {
  _delta.copy(b).sub(a);
  const len2 = _delta.lengthSq();
  if (len2 < 1e-18) return p.distanceTo(a);
  let t = _tmp.copy(p).sub(a).dot(_delta) / len2;
  t = Math.min(1, Math.max(0, t));
  return _tmp2.copy(a).addScaledVector(_delta, t).distanceTo(p);
}

/**
 * @param {THREE.Vector3} p
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 */
function closestPointOnSegment(p, a, b) {
  _delta.copy(b).sub(a);
  const len2 = _delta.lengthSq();
  if (len2 < 1e-18) return a.clone();
  let t = _tmp.copy(p).sub(a).dot(_delta) / len2;
  t = Math.min(1, Math.max(0, t));
  return a.clone().addScaledVector(_delta, t);
}

/**
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @param {number} quant
 */
function edgeKey(a, b, quant) {
  const ax = Math.round(a.x / quant);
  const ay = Math.round(a.y / quant);
  const az = Math.round(a.z / quant);
  const bx = Math.round(b.x / quant);
  const by = Math.round(b.y / quant);
  const bz = Math.round(b.z / quant);
  if (
    ax < bx ||
    (ax === bx && ay < by) ||
    (ax === bx && ay === by && az <= bz)
  ) {
    return `${ax},${ay},${az}|${bx},${by},${bz}`;
  }
  return `${bx},${by},${bz}|${ax},${ay},${az}`;
}

/**
 * @param {HTMLCanvasElement} canvas
 */
function ensureCrosshairEl(canvas) {
  let el = document.getElementById("measure-crosshair");
  if (el) return /** @type {HTMLDivElement} */ (el);
  el = document.createElement("div");
  el.id = "measure-crosshair";
  el.className = "measure-crosshair";
  el.hidden = true;
  el.setAttribute("aria-hidden", "true");
  el.innerHTML =
    '<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>';
  const parent = canvas.parentElement || document.body;
  parent.appendChild(el);
  return /** @type {HTMLDivElement} */ (el);
}

/**
 * @param {HTMLDivElement} el
 * @param {HTMLCanvasElement} canvas
 * @param {number} sx
 * @param {number} sy
 * @param {'vertex' | 'edge' | 'face' | 'perp' | null} kind
 */
function positionCrosshair(el, canvas, sx, sy, kind) {
  const rect = canvas.getBoundingClientRect();
  el.style.left = `${rect.left + sx}px`;
  el.style.top = `${rect.top + sy}px`;
  el.dataset.snap = kind || "none";
}

/**
 * @param {number} color
 */
function makeMarker(color) {
  const geo = new THREE.SphereGeometry(1, 16, 12);
  const mat = new THREE.MeshBasicMaterial({
    color,
    depthTest: false,
    depthWrite: false,
    transparent: true,
    opacity: 0.95,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 20;
  mesh.visible = false;
  return mesh;
}

/**
 * @param {THREE.Mesh} marker
 * @param {'vertex' | 'edge' | 'face' | 'perp' | null} kind
 */
function colorMarker(marker, kind) {
  const mat = /** @type {THREE.MeshBasicMaterial} */ (marker.material);
  if (kind === "vertex") mat.color.setHex(0xff453a);
  else if (kind === "edge" || kind === "perp") mat.color.setHex(0xffd60a);
  else mat.color.setHex(0x64d2ff);
}

/**
 * @param {number} color
 * @param {number} opacity
 */
function makeLine(color, opacity) {
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(6);
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.LineBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    depthTest: false,
    depthWrite: false,
  });
  const line = new THREE.Line(geo, mat);
  line.renderOrder = 19;
  line.frustumCulled = false;
  line.visible = false;
  return line;
}

/**
 * L-shaped polyline: 3 points (leg along edge, corner at B, leg toward A).
 * @param {number} color
 */
function makeRightAngleLine(color) {
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(9);
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.LineBasicMaterial({
    color,
    depthTest: false,
    depthWrite: false,
    transparent: true,
    opacity: 0.95,
  });
  const line = new THREE.Line(geo, mat);
  line.renderOrder = 22;
  line.frustumCulled = false;
  line.visible = false;
  return line;
}

/**
 * @param {THREE.Line} line
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @param {THREE.Vector3} edgeDir
 * @param {(w: THREE.Vector3) => number} worldPerPixelFn
 */
function updateRightAngle(line, a, b, edgeDir, worldPerPixelFn) {
  const s = worldPerPixelFn(b) * RIGHT_ANGLE_PX;
  _delta.copy(a).sub(b);
  if (_delta.lengthSq() < 1e-16) {
    line.visible = false;
    return;
  }
  _delta.normalize();
  _tmp.copy(edgeDir).normalize();
  // Orient the edge leg so the L opens into the measured angle.
  _n.crossVectors(_tmp, _delta);
  if (_n.lengthSq() < 1e-12) {
    line.visible = false;
    return;
  }
  _v0.copy(b).addScaledVector(_tmp, s);
  _v1.copy(b);
  _v2.copy(b).addScaledVector(_delta, s);
  const pos = line.geometry.getAttribute("position");
  pos.setXYZ(0, _v0.x, _v0.y, _v0.z);
  pos.setXYZ(1, _v1.x, _v1.y, _v1.z);
  pos.setXYZ(2, _v2.x, _v2.y, _v2.z);
  pos.needsUpdate = true;
  line.geometry.computeBoundingSphere();
}

/**
 * @param {THREE.Line} line
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 */
function setLineEndpoints(line, a, b) {
  const pos = line.geometry.getAttribute("position");
  pos.setXYZ(0, a.x, a.y, a.z);
  pos.setXYZ(1, b.x, b.y, b.z);
  pos.needsUpdate = true;
  line.geometry.computeBoundingSphere();
}

/**
 * @param {string} text
 */
function makeLabelSprite(text) {
  const canvas = document.createElement("canvas");
  canvas.width = LABEL_PX * 2;
  canvas.height = LABEL_PX;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const padX = 18;
    const padY = 14;
    ctx.font = `600 ${Math.round(LABEL_PX * 0.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
    const metrics = ctx.measureText(text);
    const tw = Math.ceil(metrics.width);
    const th = Math.round(LABEL_PX * 0.42);
    const bw = tw + padX * 2;
    const bh = th + padY * 2;
    const x = (canvas.width - bw) / 2;
    const y = (canvas.height - bh) / 2;
    const r = 18;
    ctx.fillStyle = "rgba(28, 28, 30, 0.78)";
    roundRect(ctx, x, y, bw, bh, r);
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
    ctx.lineWidth = 2;
    roundRect(ctx, x, y, bw, bh, r);
    ctx.stroke();
    ctx.fillStyle = "#f5f5f7";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 1);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  const mat = new THREE.SpriteMaterial({
    map: tex,
    depthTest: false,
    depthWrite: false,
    transparent: true,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.renderOrder = 21;
  sprite.center.set(0.5, 0.5);
  return sprite;
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {number} r
 */
function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}
