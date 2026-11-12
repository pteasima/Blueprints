/**
 * Popover buttons for element types the registry knows how to drive.
 * A wall has no entry. Doors stay on the door handler (open / close);
 * this file covers lights, switches, windows, and (live Home only) blinds.
 *
 * A kind may set `actions` to replace its single popover button with a list
 * (a live rocker offers up and down per rocker). Returning null or an empty
 * list keeps the single button. A kind with `liveOnly` claims nothing unless
 * `api.isLive(el)` is true, so offline taps pass through it as before.
 */

const KINDS = [
  {
    type: "IfcLightFixture",
    id: "light",
    priority: 60,
    labelKey: (el, api) => (api.isOn?.(el) ? "ui.turnOff" : "ui.turnOn"),
    run: (el, hit, ctx, api) => api.onLight?.(el, hit, ctx),
  },
  {
    type: "IfcSwitchingDevice",
    id: "switch",
    priority: 70,
    labelKey: () => "ui.press",
    run: (el, hit, ctx, api) => api.onSwitch?.(el, hit, ctx),
    actions: (el, hit, ctx, api) => api.switchActions?.(el, hit, ctx),
  },
  {
    type: "IfcActuator",
    id: "cover",
    priority: 55,
    liveOnly: true,
    labelKey: (el, api) => (api.isOpen?.(el) ? "ui.close" : "ui.open"),
    run: (el, hit, ctx, api) => api.onCover?.(el, hit, ctx),
    actions: (el, hit, ctx, api) => api.coverActions?.(el, hit, ctx),
  },
  {
    type: "IfcWindow",
    id: "window",
    priority: 50,
    labelKey: (el, api) => (api.isOpen?.(el) ? "ui.close" : "ui.open"),
    run: (el, hit, ctx, api) => api.onWindow?.(el, hit, ctx),
    // Fixed glazing is not interactive: only a pane that opens claims.
    accepts: (el, hit, api) => (api.windowAccepts ? api.windowAccepts(el, hit) : true),
  },
];

/**
 * @param {{ register: Function }} registry
 * @param {{
 *   elementOf: (obj: object) => object | null,
 *   isOn?: (el: object) => boolean,
 *   isOpen?: (el: object) => boolean,
 *   onLight?: Function,
 *   onSwitch?: Function,
 *   onWindow?: Function,
 *   windowAccepts?: (el: object, hit: object) => boolean,
 *   onCover?: Function,
 *   switchActions?: Function,
 *   coverActions?: Function,
 *   isLive?: (el: object) => boolean,
 *   targetsFor?: (type: string, ctx: object) => { element: object, center: object, hit: object, owns: Function, group?: string }[],
 * }} api
 */
export function registerElementActions(registry, api) {
  for (const kind of KINDS) {
    registry.register({
      id: kind.id,
      priority: kind.priority,
      claim(hit, ctx) {
        const element = api.elementOf?.(hit.object);
        if (!element || element.type !== kind.type) return null;
        if (kind.liveOnly && !api.isLive?.(element)) return null;
        if (kind.accepts && !kind.accepts(element, hit, api)) return null;
        const run = () => kind.run(element, hit, ctx, api);
        const custom = kind.actions?.(element, hit, ctx, api);
        return {
          onTap: run,
          actions:
            Array.isArray(custom) && custom.length
              ? custom
              : [{ id: kind.id, labelKey: kind.labelKey(element, api), run }],
        };
      },
      // Extended tap targets (tapTargets.js): one centre per element, one
      // per rocker half for a switch. `api.targetsFor` owns the geometry.
      targets(ctx) {
        const list = api.targetsFor?.(kind.type, ctx);
        if (!Array.isArray(list)) return [];
        return kind.liveOnly ? list.filter((t) => api.isLive?.(t.element)) : list;
      },
    });
  }
}
