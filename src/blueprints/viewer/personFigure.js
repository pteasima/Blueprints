/**
 * The person figure left standing where the walker was (walk mode, Petr
 * 2026-11-13: "When I switch back to free camera, I see a person figure").
 *
 * Modelled 1 m tall with its feet at the origin, facing −Z (the way a
 * three.js camera looks at yaw 0). walkMode.js scales it to the body height
 * and turns it to the walker's yaw. To swap in a real person later, pass any
 * Object3D of the same convention (1 m tall, feet at origin, facing −Z) to
 * `setModel`, e.g. a glTF scene from GLTFLoader.
 *
 * Nothing in it raycasts, so it never takes a tap, an orbit pivot, a Measure
 * snap, or a place in the walk collider.
 */
import * as THREE from "three";

/** Neutral warm grey that reads in Solid, Shaded and Realistic, dark or light. */
export const FIGURE_COLOR = 0x9aa1aa;
const ACCENT_COLOR = 0x5c6670;

/** Proportions of the 1 m figure (head top at exactly 1 m, so the scale is the height). */
export const FIGURE_SHAPE = {
  headRadius: 0.062,
  headY: 0.938,
  bodyRadius: 0.125,
  bodyBottom: 0.0,
  bodyTop: 0.85,
};

/** Capsule body plus a head, with a small nose so its facing reads. */
export function createDefaultFigure() {
  const s = FIGURE_SHAPE;
  const group = new THREE.Group();
  group.name = "WalkFigureDefault";
  const skin = new THREE.MeshStandardMaterial({ color: FIGURE_COLOR, roughness: 0.75, metalness: 0 });
  const accent = new THREE.MeshStandardMaterial({ color: ACCENT_COLOR, roughness: 0.8, metalness: 0 });
  const bodyLen = s.bodyTop - s.bodyBottom - 2 * s.bodyRadius;
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(s.bodyRadius, bodyLen, 6, 16), skin);
  body.position.y = s.bodyBottom + s.bodyRadius + bodyLen / 2;
  // Slightly flattened front-to-back, like a torso.
  body.scale.set(1, 1, 0.72);
  const head = new THREE.Mesh(new THREE.SphereGeometry(s.headRadius, 20, 14), skin);
  head.position.y = s.headY;
  const nose = new THREE.Mesh(new THREE.SphereGeometry(s.headRadius * 0.28, 10, 8), accent);
  nose.position.set(0, s.headY, -s.headRadius * 0.95);
  group.add(body, head, nose);
  return group;
}

/**
 * Turn off raycasting and enable shadows on every mesh under `obj`.
 * @param {THREE.Object3D} obj
 */
function inertify(obj) {
  obj.traverse((o) => {
    o.userData.bpWalkFigure = true;
    if (o.isMesh) {
      o.raycast = () => {};
      o.castShadow = true;
      o.receiveShadow = false;
    }
  });
}

/**
 * The figure's root. Add it to the scene (not the model root, so material
 * modes, parts and the collider never see it).
 */
export function createPersonFigure() {
  const root = new THREE.Group();
  root.name = "WalkFigure";
  root.visible = false;
  root.userData.bpWalkFigure = true;
  // Ordinary opaque geometry: depth-peel.js must not redraw it in the
  // overlay pass (after clearDepth), where it would show through walls.
  root.userData.bpSceneContent = true;
  let model = createDefaultFigure();
  inertify(model);
  root.add(model);
  return {
    object: root,
    /**
     * @param {{ position: THREE.Vector3, yaw: number, scale: number }} placement
     *   from walkPhysics `figurePlacement`
     */
    place(placement) {
      root.position.copy(placement.position);
      root.rotation.set(0, placement.yaw, 0);
      root.scale.setScalar(placement.scale);
      root.updateMatrixWorld(true);
    },
    show(on) {
      root.visible = Boolean(on);
    },
    get visible() {
      return root.visible;
    },
    /** Replace the default figure (same 1 m, feet-at-origin, −Z convention). */
    setModel(next) {
      if (!next) return;
      root.remove(model);
      model = next;
      inertify(model);
      root.add(model);
    },
  };
}
