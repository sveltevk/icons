<script>
  import Search from "./Search.svelte";
  import Icon from "./Icon.svelte";
  import Copied from "./Copied.svelte";
  import icons from "../icons.js"; // Need build icons!

  let hash = location.hash;
  let copyOnlyName = false;
  let search = "";

  let visableCopied;
  const clickIcon = () => {
    visableCopied = true;
    setTimeout(() => (visableCopied = false), 1250);
  };
</script>

<style>
  .icons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: -3px;
  }
</style>

<svelte:window on:hashchange={() => (hash = location.hash)} />

<h2>
  <Search bind:value={search} />
</h2>

<label>
  <input type="checkbox" bind:checked={copyOnlyName} /> Copy component name only
</label>

{#each icons as group}
  <div class="size">
    <h3>{group.size}</h3>
    <div class="icons">
      {#each group.icons as icon}
        <Icon
          id={icon.id}
          size={group.size}
          component={icon.component}
          {copyOnlyName}
          visable={icon.id.toLowerCase().indexOf(search.toLowerCase()) > -1}
          {hash}
          on:click={clickIcon} />
      {/each}
    </div>
  </div>
{/each}
<Copied bind:visable={visableCopied} />
