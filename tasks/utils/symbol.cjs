const Compiler = require('svg-baker');

const compiler = new Compiler();

const reactify = (symbol) => {
	const width = symbol.viewBox.split(' ')[2];
	const height = symbol.viewBox.split(' ')[3];

	return `<script context="module" lang="ts">
  import {addSpriteSymbol} from '$lib/sprite';
 
  let isMounted = false;
  export function mountIcon() {
    if (!isMounted) {
      addSpriteSymbol({
        id: '${symbol.id}',
        viewBox: '${symbol.viewBox}',
        content: '${symbol.render()}'
      });

      isMounted = true;
    }
  }
</script>

<script lang="ts">
  import IconBase from "$lib/IconBase.svelte";
  import { onMount } from 'svelte';
  import { current_component } from "svelte/internal";

  export let width:number = ${width};
  export let height:number = ${height};
  export let fill:string = '';

  onMount(mountIcon)
</script>

<IconBase curComponent={current_component} {...$$restProps} id="${symbol.id}" viewBox="${
		symbol.viewBox
	}" {width} {height} {fill}/>
`;
};

function symbol({ content, id }) {
	return compiler.addSymbol({ content, id, path: '' }).then((symbol) => reactify(symbol));
}

module.exports = symbol;
