<script context="module" lang="ts">
	const toPascalCase = (s: string) => {
		return s
			.match(/[a-z0-9]+/gi)
			.map(function (word) {
				return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
			})
			.join('');
	};
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let size: number;
	export let id: string;
	export let component: any;
	export let hash: string;
	export let copyOnlyName = false;
	export let visable = true;

	const href = `#${size}/${id}`;
	const name = `Icon${size}${toPascalCase(id)}`;

	const copy = () => {
		let text = '';
		if (copyOnlyName) {
			text = name;
		} else {
			text = `import ${name} from '@sveltevk/icons/dist/${size}/${id}';`;
		}

		navigator.clipboard.writeText(text).then(() => {
			dispatch('click');
		});
	};
</script>

<a
	class="icon"
	class:anchor={hash === href}
	class:visable
	{href}
	on:click={copy}
	style={`width: ${size}px; height: ${size}px;`}
>
	<svelte:component this={component} />
	<div class="icon-name">{id}</div>
</a>

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
	.icon:not(.visable) {
		display: none;
	}
</style>
