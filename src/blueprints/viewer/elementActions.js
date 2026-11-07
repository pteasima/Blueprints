/**
 * Popover buttons for element types the registry knows how to drive.
 * A wall has no entry. Doors stay on the door handler (open / close);
 * this file covers lights, switches, and windows.
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
  },
  {
    type: "IfcWindow",
    id: "window",
    priority: 50,
    labelKey: (el, api) => (api.isOpen?.(el) ? "ui.close" : "ui.open"),
    run: (el, hit, ctx, api) => api.onWindow?.(el, hit, ctx),
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
        const run = () => kind.run(element, hit, ctx, api);
        return {
          onTap: run,
          actions: [{ id: kind.id, labelKey: kind.labelKey(element, api), run }],
        };
      },
    });
  }
}
