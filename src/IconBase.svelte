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

  const size = Math.max(width, height);
  const className = $$props.class || "";
</script>

<div
  {...$$restProps}
  class={`Icon Icon--${size} Icon--w-${width} Icon--h-${height} Icon--${id} ${className}`}>
  <svg {viewBox} {width} {height} style="display:block">
    <use
      xlink:href={`#${id}`}
      style={`fill: currentColor;${fill ? `color: ${fill}` : ''}`} />
  </svg>
</div>
