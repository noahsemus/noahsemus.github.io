<script>
	import { fly, slide } from 'svelte/transition';
	export let name = 'Nicholas Lucaccioni';
	export let title = 'Graphic Designer & Brand Mastermind';
	export let description = 'lorem ipsum';
	export let pretzel = false;
	let showDesc = false;
</script>

<div class="container">
	<div class="topContain">
		<div class="topText">
			<h1>{name}</h1>
			<p>{title}</p>
		</div>
		<div class="buttonContain">
			{#if showDesc}
				<h1
					class="expandButton"
					transition:fly={{ y: 20, duration: 400 }}
					on:click={() => {
						showDesc = !showDesc;
					}}
				>
					–
				</h1>
			{:else}
				<h1
					class="expandButton"
					transition:fly={{ y: 20, duration: 400 }}
					on:click={() => {
						showDesc = !showDesc;
					}}
				>
					+
				</h1>
			{/if}
		</div>
	</div>
	{#if showDesc}
		<div class="description" transition:slide={{ duration: 400 }}>
			{#if pretzel}
				<img src="/img/pretzel.jpg" alt="Pretzel the Dog!" />
			{/if}
			<p>
				{@html description}
			</p>
		</div>
	{/if}
</div>

<style>
	h1 {
		margin-bottom: 8px;
	}

	img {
		max-height: 40vh;
		margin-bottom: 16px;
	}

	.container {
		border-bottom: 1px solid var(--textColor);
		margin-bottom: 32px;
	}

	.topContain {
		margin-bottom: 32px;
	}

	.buttonContain {
		position: relative;
		width: 40px;
		height: 40px;
	}

	.expandButton {
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		text-align: center;
		font-variation-settings: 'wght' 10;
		font-weight: 100;
		cursor: pointer;
		user-select: none;
	}

	.topContain {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.description {
		margin-top: -16px;
		padding-bottom: 32px;
		max-width: 550px;
		font-weight: 100;
		font-variation-settings: 'wght' 200;
	}
</style>
