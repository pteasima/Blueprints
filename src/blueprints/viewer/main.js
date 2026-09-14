/**
 * Custom WebGL viewer for Blueprints GLB exports.
 * Owns UI and animation; Three.js is only the renderer/loader toolkit.
 */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

/**
 * @param {HTMLCanvasElement} canvas
 * @param {ArrayBuffer} glbBuffer
 * @param {{ usdzBase64?: string }} [options]
 */
export function mountViewer(canvas, glbBuffer, options = {}) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 1e6);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.screenSpacePanning = true;

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const key = new THREE.DirectionalLight(0xffffff, 1.05);
  key.position.set(0.6, 1.0, 0.4);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.35);
  fill.position.set(-0.5, 0.2, -0.6);
  scene.add(fill);

  /** @type {Map<string, THREE.Object3D[]>} */
  const parts = new Map();
  /** @type {THREE.Object3D | null} */
  let root = null;
  const box = new THREE.Box3();
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();

  const loader = new GLTFLoader();
  loader.parse(
    glbBuffer,
    "",
    (gltf) => {
      root = gltf.scene;
      scene.add(root);
      root.traverse((obj) => {
        if (!obj.isMesh) return;
        const raw = obj.name || obj.parent?.name || "part";
        // OCCT/Three may uniquify duplicate labels (krov, krov_1, …); group for toggles.
        const name = raw.replace(/_\d+$/, "") || raw;
        if (!parts.has(name)) parts.set(name, []);
        parts.get(name).push(obj);
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          for (const m of mats) {
            if ("side" in m) m.side = THREE.DoubleSide;
          }
        }
      });
      frameIso();
      buildPartToggles();
      buildCameraButtons();
    },
    (err) => {
      fail(String(err?.message || err));
    },
  );

  function fail(msg) {
    const el = document.getElementById("err");
    if (!el) return;
    el.style.display = "block";
    el.textContent = msg;
  }

  function updateBox() {
    if (!root) return;
    box.setFromObject(root);
    box.getSize(size);
    box.getCenter(center);
    controls.target.copy(center);
  }

  function frameIso() {
    if (!root) return;
    updateBox();
    const span = Math.max(size.x, size.y, size.z, 1);
    const dist = span * 1.85;
    camera.near = Math.max(span / 1000, 0.01);
    camera.far = Math.max(span * 100, 1000);
    camera.position.set(
      center.x + dist * 0.75,
      center.y + dist * 0.55,
      center.z + dist * 0.75,
    );
    camera.updateProjectionMatrix();
    controls.update();
  }

  function setCameraPreset(name) {
    if (!root) return;
    updateBox();
    const span = Math.max(size.x, size.y, size.z, 1);
    const dist = span * 1.85;
    const c = center;
    if (name === "front") {
      camera.position.set(c.x, c.y + span * 0.15, c.z + dist);
    } else if (name === "top") {
      camera.position.set(c.x, c.y + dist, c.z + span * 0.01);
    } else if (name === "side") {
      camera.position.set(c.x + dist, c.y + span * 0.15, c.z);
    } else {
      frameIso();
      return;
    }
    controls.target.copy(c);
    camera.updateProjectionMatrix();
    controls.update();
  }

  function setPartVisible(name, visible) {
    const list = parts.get(name) || [];
    for (const obj of list) obj.visible = visible;
  }

  function buildPartToggles() {
    const host = document.getElementById("parts");
    if (!host) return;
    host.replaceChildren();
    const names = [...parts.keys()].sort((a, b) => a.localeCompare(b));
    for (const name of names) {
      const id = `part-${name}`;
      const label = document.createElement("label");
      label.className = "part";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = true;
      input.id = id;
      input.addEventListener("change", () => setPartVisible(name, input.checked));
      label.append(input, document.createTextNode(name));
      host.append(label);
    }
  }

  function buildCameraButtons() {
    const host = document.getElementById("cams");
    if (!host) return;
    host.replaceChildren();
    for (const [id, label] of [
      ["iso", "Iso"],
      ["front", "Front"],
      ["side", "Side"],
      ["top", "Top"],
    ]) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = label;
      btn.addEventListener("click", () => setCameraPreset(id));
      host.append(btn);
    }
  }

  function resize() {
    const w = Math.max(1, canvas.clientWidth);
    const h = Math.max(1, canvas.clientHeight);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  const ql = document.getElementById("ql");
  if (ql && options.usdzBase64) {
    ql.hidden = false;
    ql.addEventListener("click", () => {
      const bin = atob(options.usdzBase64);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      const blob = new Blob([bytes], { type: "model/vnd.usdz+zip" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.rel = "ar";
      a.href = url;
      a.download = "model.usdz";
      const img = document.createElement("img");
      img.alt = "AR";
      a.appendChild(img);
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }

  // Public hook for future agent-driven features (flyover, blink, …).
  const api = {
    scene,
    camera,
    controls,
    parts,
    setPartVisible,
    setCameraPreset,
    frameIso,
  };
  window.BlueprintsViewer = api;

  function tick() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  tick();
  return api;
}
