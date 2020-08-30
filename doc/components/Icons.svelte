<script>
  import Search from "./Search.svelte";
  import Icon from "./Icon.svelte";
  import Copied from "./Copied.svelte";
  import icons from "../icons.js"; // Need build icons!

  let hash = location.hash;
  let search = "";

  let visableCopied;
  const clickIcon = ()=>{
    visableCopied = true
    setTimeout(()=>visableCopied = false, 1250);
  }
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

{#each icons as group}
  <div class="size">
    <h3>{group.size}</h3>
    <div class="icons">
      {#each group.icons as icon}
        {#if icon.id.toLowerCase().indexOf(search) > -1}
          <Icon
            id={icon.id}
            size={group.size}
            component={icon.component}
            {hash} 
            on:click={clickIcon}/>
        {/if}
      {/each}
    </div>
  </div>
{/each}
<Copied bind:visable={visableCopied}/>
