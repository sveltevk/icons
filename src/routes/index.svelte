<script lang="ts">
	import './global.css';
	import './prism.css';
	import Icons from '$site/lib/Icons.svelte';
	// @ts-ignore
	import Doc from '../../README.md';
</script>

<svelte:head>
	<title>Svelte VK Icons</title>
</svelte:head>

<main>
	<article>
		<Doc />
	</article>
	<Icons />
</main>

<style>
	main {
		padding: 0 40px 50px;
		max-width: 1080px;
		margin: auto;
	}
</style>
