<script>
	let itemHover = false;
	export let mainText = 'Pratt Institute';
	export let hoverText = 'It was okay!';
	export let backgroundColor = 'black';
	export let color = 'white';

	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div
	class="listItem"
	on:mouseenter={() => {
		itemHover = true;
	}}
	on:mouseleave={() => {
		itemHover = false;
	}}
	on:mousemove={handleMousemove}
>
	{@html mainText}
</div>
{#if itemHover}
	<div
		class="listItemHover"
		style="top: {m.y - 20}px; left: {m.x + 20}px; background: {backgroundColor}; color: {color}"
	>
		{hoverText}
	</div>
{/if}

<style>
	.listItem {
		cursor: url('/img/face/face04.png'), pointer;
		display: inline;
		width: fit-content;
	}

	.listItemHover {
		position: fixed;
		z-index: 9999999;
		background: black;
		color: white;
		padding: 0 8px;
		-webkit-animation: wobble-ver-left 2s infinite both;
		animation: wobble-ver-left 2s infinite both;
	}

	@-webkit-keyframes wobble-ver-left {
		0%,
		100% {
			-webkit-transform: translateY(0) rotate(0);
			transform: translateY(0) rotate(0);
			-webkit-transform-origin: 50% 50%;
			transform-origin: 50% 50%;
		}
		15% {
			-webkit-transform: translateY(-30px) rotate(-6deg);
			transform: translateY(-30px) rotate(-6deg);
		}
		30% {
			-webkit-transform: translateY(15px) rotate(6deg);
			transform: translateY(15px) rotate(6deg);
		}
		45% {
			-webkit-transform: translateY(-15px) rotate(-3.6deg);
			transform: translateY(-15px) rotate(-3.6deg);
		}
		60% {
			-webkit-transform: translateY(9px) rotate(2.4deg);
			transform: translateY(9px) rotate(2.4deg);
		}
		75% {
			-webkit-transform: translateY(-6px) rotate(-1.2deg);
			transform: translateY(-6px) rotate(-1.2deg);
		}
	}
	@keyframes wobble-ver-left {
		0%,
		100% {
			-webkit-transform: translateY(0) rotate(0);
			transform: translateY(0) rotate(0);
			-webkit-transform-origin: 50% 50%;
			transform-origin: 50% 50%;
		}
		15% {
			-webkit-transform: translateY(-30px) rotate(-6deg);
			transform: translateY(-30px) rotate(-6deg);
		}
		30% {
			-webkit-transform: translateY(15px) rotate(6deg);
			transform: translateY(15px) rotate(6deg);
		}
		45% {
			-webkit-transform: translateY(-15px) rotate(-3.6deg);
			transform: translateY(-15px) rotate(-3.6deg);
		}
		60% {
			-webkit-transform: translateY(9px) rotate(2.4deg);
			transform: translateY(9px) rotate(2.4deg);
		}
		75% {
			-webkit-transform: translateY(-6px) rotate(-1.2deg);
			transform: translateY(-6px) rotate(-1.2deg);
		}
	}
</style>
