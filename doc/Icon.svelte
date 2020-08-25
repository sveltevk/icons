<script>
  import { createEventDispatcher } from "svelte";

  export let size;
  export let id;
  export let component;
  export let hash;

  const href = `#${size}/${id}`;

  const toPascalCase = (s) => {
    return s
      .match(/[a-z0-9]+/gi)
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      })
      .join("");
  };

  const dispatch = createEventDispatcher();
  const copy = () => {
    const text = `import Icon${size}${toPascalCase(
      id
    )} from '@sveltevk/icons/dist/${size}/${id}';`;
    navigator.clipboard.writeText(text).then(() => {
      dispatch("click");
    });
  };
</script>

<style>
  .icon {
    padding: 10px;
    text-align: center;
    position: relative;
    color: rgb(0, 140, 255);
    background-color: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
  }
  .icon:hover {
    background-color: rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.24);
  }

  .icon:active {
    background-color: rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  .anchor {
    background-color: rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(0, 0, 0, 0.36);
  }

  .icon-name {
    position: absolute;
    top: calc(100% + 8px);
    background-color: #000;
    border-radius: 3px;
    color: #fff;
    font-size: 14px;
    padding: 4px 6px;
    z-index: 2;
    visibility: hidden;
  }
  .icon:hover .icon-name {
    visibility: visible;
  }
</style>

<a
  class="icon"
  class:anchor={hash === href}
  {href}
  on:click={copy}
  style={`width: ${size}px; height: ${size}px`}>
  <svelte:component this={component} />
  <div class="icon-name">{id}</div>
</a>
