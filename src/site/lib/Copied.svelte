<script>
	export let visable = false;
</script>

{#if visable}
	<div class="copied">copied</div>
{/if}

<style>
	.copied {
		position: fixed;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 0;
		top: 0;
		color: #fff;
		font-size: 200px;
		background-color: rgba(0, 0, 0, 0.1);
		animation-name: copied;
		animation-duration: 1.25s;
		animation-timing-function: ease-in-out;
		user-select: none;
	}
	@keyframes copied {
		0% {
			opacity: 0;
		}
		25% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
