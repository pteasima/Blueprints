/**
 * CAD-style confirm + SketchUp-ish snap measure tool for the WebGL viewer.
 */
import * as THREE from "three";

const DRAG_PX = 8;
const VERTEX_PX = 14;
const EDGE_PX = 11;
const AXIS_ALIGN_DOT = 0.82;
const AXIS_MIN_MM = 0.5;
const CLIP_EPS = 1e-4;
const LABEL_PX = 128;
const LABEL_HEIGHT_WORLD_FRAC = 0.028;
const MARKER_PX = 7;

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
const _axis = new THREE.Vector3();
const _look = new THREE.Vector3();
const _normA = new THREE.Vector3();

const WORLD_AXES = [
  new THREE.Vector3(1, 0, 0),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(0, 0, 1),
];

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

  /** @type {'idle' | 'pickFirst' | 'pickSecond'} */
  let phase = "idle";
  let active = false;
  /** @type {THREE.Vector3 | null} */
  let pointA = null;
  /** @type {THREE.Vector3 | null} */
  let pointB = null;
  /** @type {THREE.Vector3 | null} */
  let faceAxisA = null;
  /** @type {THREE.Vector3 | null} */
  let faceAxisB = null;

  let pointerId = null;
  let downX = 0;
  let downY = 0;
  let gestureMoved = false;
  let hadCandidateAtDown = false;

  const overlay = new THREE.Group();
  overlay.name = "MeasureOverlay";
  overlay.renderOrder = 10;
  scene.add(overlay);

  const dims = new THREE.Group();
  dims.name = "MeasureDimensions";
  scene.add(dims);

  const draftA = makeMarker(0x34c759);
  const draftB = makeMarker(0x007aff);
  const draftLine = makeLine(0xffd60a, 0.65);
  overlay.add(draftA, draftB, draftLine);
  hideDraft();

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
      phase = "pickFirst";
      pointA = null;
      pointB = null;
      faceAxisA = null;
      faceAxisB = null;
      hideDraft();
    } else {
      controls.enabled = true;
      phase = "idle";
      pointA = null;
      pointB = null;
      faceAxisA = null;
      faceAxisB = null;
      hideDraft();
      pointerId = null;
      onLiveLength?.(null);
    }
    onActiveChange?.(active);
    syncChrome();
  }

  function syncChrome() {
    if (phase === "pickSecond" && pointA && pointB) {
      onLiveLength?.(formatMm(pointA.distanceTo(pointB)));
    } else if (active) {
      onLiveLength?.(null);
    }
  }

  function hideDraft() {
    draftA.visible = false;
    draftB.visible = false;
    draftLine.visible = false;
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
    if (phase === "pickFirst" && pointA) {
      draftA.visible = true;
      draftA.position.copy(pointA);
      scaleMarker(draftA, pointA);
      draftB.visible = false;
      draftLine.visible = false;
    } else if (phase === "pickSecond" && pointA) {
      draftA.visible = true;
      draftA.position.copy(pointA);
      scaleMarker(draftA, pointA);
      if (pointB) {
        draftB.visible = true;
        draftB.position.copy(pointB);
        scaleMarker(draftB, pointB);
        setLineEndpoints(draftLine, pointA, pointB);
        draftLine.visible = true;
      } else {
        draftB.visible = false;
        draftLine.visible = false;
      }
    } else {
      hideDraft();
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
   * @param {THREE.Vector3} world
   * @returns {boolean}
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
   * @param {THREE.Intersection} hit
   * @returns {THREE.Vector3 | null}
   */
  function faceNormalFromHit(hit) {
    const mesh = /** @type {THREE.Mesh} */ (hit.object);
    if (!hit.face) return null;
    return hit.face.normal.clone().transformDirection(mesh.matrixWorld).normalize();
  }

  /**
   * @param {number} sx canvas-local x
   * @param {number} sy canvas-local y
   * @returns {{
   *   point: THREE.Vector3,
   *   kind: 'vertex' | 'edge' | 'face',
   *   edgeDir: THREE.Vector3 | null,
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
    const faceN = faceNormalFromHit(hit);
    if (!geom?.getAttribute("position")) {
      return { point: hit.point.clone(), kind: "face", edgeDir: null, faceNormal: faceN };
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
        faceNormal: faceN,
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
        faceNormal: faceN,
      };
    }

    return {
      point: hit.point.clone(),
      kind: "face",
      edgeDir: null,
      faceNormal: faceN,
    };
  }

  /**
   * @param {THREE.Vector3} a
   * @param {THREE.Vector3} freeB
   * @param {THREE.Vector3 | null} edgeDir
   * @returns {THREE.Vector3}
   */
  function inferAxisPoint(a, freeB, edgeDir) {
    _delta.copy(freeB).sub(a);
    const freeLen = _delta.length();
    if (freeLen * 1000 < AXIS_MIN_MM) return freeB.clone();

    camera.getWorldDirection(_look);
    _camRight.crossVectors(camera.up, _look).normalize();
    if (_camRight.lengthSq() < 1e-8) _camRight.set(1, 0, 0);

    /** @type {THREE.Vector3[]} */
    const axes = [...WORLD_AXES];
    if (edgeDir && edgeDir.lengthSq() > 1e-8) axes.push(edgeDir.clone().normalize());
    if (faceAxisA && faceAxisA.lengthSq() > 1e-8) axes.push(faceAxisA.clone().normalize());
    if (faceAxisB && faceAxisB.lengthSq() > 1e-8) axes.push(faceAxisB.clone().normalize());

    projectToScreen(a, _screenA);
    projectToScreen(freeB, _screenB);
    const sdx = _screenB.x - _screenA.x;
    const sdy = _screenB.y - _screenA.y;
    const sLen = Math.hypot(sdx, sdy);
    if (sLen < 4) return freeB.clone();

    let bestScore = AXIS_ALIGN_DOT;
    /** @type {THREE.Vector3 | null} */
    let bestAxis = null;
    let bestT = 0;

    for (const axis of axes) {
      for (const sign of [1, -1]) {
        _axis.copy(axis).multiplyScalar(sign);
        _tmp.copy(a).addScaledVector(_axis, Math.max(freeLen, worldPerPixel(a) * 40));
        projectToScreen(_tmp, _proj);
        const ax = _proj.x - _screenA.x;
        const ay = _proj.y - _screenA.y;
        const aLen = Math.hypot(ax, ay);
        if (aLen < 1e-3) continue;
        const align = (sdx * ax + sdy * ay) / (sLen * aLen);
        const screenWeight = Math.min(1, aLen / 40);
        const score = align * (0.75 + 0.25 * screenWeight);
        if (score > bestScore) {
          bestScore = score;
          bestAxis = _axis.clone();
          bestT = _delta.dot(_axis);
        }
      }
    }

    if (!bestAxis || Math.abs(bestT) * 1000 < AXIS_MIN_MM) return freeB.clone();
    return a.clone().addScaledVector(bestAxis, bestT);
  }

  /**
   * @param {number} sx
   * @param {number} sy
   */
  function updateCandidateFromPointer(sx, sy) {
    const snap = pickSnap(sx, sy);
    if (!snap) {
      updateDraftVisuals();
      syncChrome();
      return;
    }

    if (phase === "pickFirst") {
      pointA = snap.point;
      faceAxisA = snap.edgeDir;
      updateDraftVisuals();
      syncChrome();
      return;
    }

    if (phase === "pickSecond" && pointA) {
      faceAxisB = snap.edgeDir;
      const inferred = inferAxisPoint(pointA, snap.point, snap.edgeDir);
      if (snap.kind === "vertex" || snap.kind === "edge") {
        _delta.copy(snap.point).sub(pointA);
        const freeLen = _delta.length();
        if (freeLen > 1e-9) {
          _normA.copy(_delta).normalize();
          _tmp.copy(inferred).sub(pointA);
          if (_tmp.lengthSq() > 1e-16) {
            const along = Math.abs(_tmp.normalize().dot(_normA));
            pointB = along > 0.985 ? snap.point.clone() : inferred;
          } else {
            pointB = snap.point.clone();
          }
        } else {
          pointB = snap.point.clone();
        }
      } else {
        pointB = inferred;
      }
      updateDraftVisuals();
      syncChrome();
    }
  }

  function confirmCurrent() {
    if (phase === "pickFirst") {
      if (!pointA) return;
      phase = "pickSecond";
      pointB = null;
      updateDraftVisuals();
      syncChrome();
      return;
    }
    if (phase === "pickSecond") {
      if (!pointA || !pointB) return;
      commitDimension(pointA, pointB);
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
    if (_tmp.lengthSq() < 1e-10) {
      _tmp.copy(camera.up);
    }
    _tmp.normalize();
    const lift = Math.max(span * LABEL_HEIGHT_WORLD_FRAC, worldPerPixel(mid) * 18);
    sprite.position.copy(mid).addScaledVector(_tmp, lift);
    const s = worldPerPixel(sprite.position) * 56;
    sprite.scale.set(s * 2.2, s, 1);
  }

  function update() {
    if (draftA.visible) scaleMarker(draftA, draftA.position);
    if (draftB.visible) scaleMarker(draftB, draftB.position);
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
  function onPointerDown(ev) {
    if (!active || phase === "idle") return;
    if (ev.button !== undefined && ev.button !== 0) return;
    if (pointerId !== null) return;
    pointerId = ev.pointerId;
    const { x, y } = canvasPos(ev);
    downX = x;
    downY = y;
    gestureMoved = false;
    hadCandidateAtDown =
      (phase === "pickFirst" && !!pointA) || (phase === "pickSecond" && !!pointB);
    try {
      canvas.setPointerCapture(ev.pointerId);
    } catch {
      /* ignore */
    }
    updateCandidateFromPointer(x, y);
    ev.preventDefault();
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerMove(ev) {
    if (!active || pointerId !== ev.pointerId) return;
    const { x, y } = canvasPos(ev);
    if (Math.hypot(x - downX, y - downY) >= DRAG_PX) gestureMoved = true;
    updateCandidateFromPointer(x, y);
    ev.preventDefault();
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerUp(ev) {
    if (!active || pointerId !== ev.pointerId) return;
    const { x, y } = canvasPos(ev);
    if (Math.hypot(x - downX, y - downY) >= DRAG_PX) gestureMoved = true;
    updateCandidateFromPointer(x, y);
    pointerId = null;
    try {
      canvas.releasePointerCapture(ev.pointerId);
    } catch {
      /* ignore */
    }
    if (!gestureMoved && hadCandidateAtDown) {
      confirmCurrent();
    }
    ev.preventDefault();
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerCancel(ev) {
    if (pointerId !== ev.pointerId) return;
    pointerId = null;
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
