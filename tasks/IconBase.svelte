<script context="module" lang="ts">
	import { bubble, listen } from 'svelte/internal';
	export function getEventsAction(component: any) {
		return (node: EventTarget) => {
			const events = Object.keys(component.$$.callbacks);
			const listeners: Array<() => void> = [];

			events.forEach((event) => listeners.push(listen(node, event, (e) => bubble(component, e))));

			return {
				destroy: () => {
					listeners.forEach((listener) => listener());
				}
			};
		};
	}
</script>

<script lang="ts">
	/** @type number */
	export let width: number;

	/** @type number */
	export let height: number;

	/** @type string */
	export let viewBox: string;

	/** @type string */
	export let id: string;

	/** @type string */
	export let fill: string = '';

	export let curComponent = undefined;

	const events = getEventsAction(curComponent);

	const size = Math.max(width, height);
	const className = $$props.class || '';
</script>

<div
	role="presentation"
	{...$$restProps}
	class={`Icon Icon--${size} Icon--w-${width} Icon--h-${height} Icon--${id} ${className}`}
	use:events
>
	<svg {viewBox} {width} {height} style="display:block">
		<use xlink:href={`#${id}`} style={`fill: currentColor;${fill ? `color: ${fill}` : ''}`} />
	</svg>
</div>
