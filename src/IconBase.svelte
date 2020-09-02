<script context="module">
  import { bubble, listen } from "svelte/internal";
  export function getEventsAction(component) {
    return (node) => {
      const events = Object.keys(component.$$.callbacks);
      const listeners = [];

      events.forEach((event) =>
        listeners.push(listen(node, event, (e) => bubble(component, e)))
      );

      return {
        destroy: () => {
          listeners.forEach((listener) => listener());
        },
      };
    };
  }
</script>

<script>
  /** @type number */
  export let width;

  /** @type number */
  export let height;

  /** @type string */
  export let viewBox;

  /** @type string */
  export let id;

  /** @type string */
  export let fill = "";

  export let curComponent = undefined;

  const events = getEventsAction(curComponent);

  const size = Math.max(width, height);
  const className = $$props.class || "";
</script>

<div
  {...$$restProps}
  class={`Icon Icon--${size} Icon--w-${width} Icon--h-${height} Icon--${id} ${className}`}
  use:events>
  <svg {viewBox} {width} {height} style="display:block">
    <use
      xlink:href={`#${id}`}
      style={`fill: currentColor;${fill ? `color: ${fill}` : ''}`} />
  </svg>
</div>
