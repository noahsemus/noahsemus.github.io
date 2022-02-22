<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/api');
		const result = await response.json();
		console.log(result);
		return {
			props: { result }
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { darkMode } from '../stores';
	export let result;

	onMount(() => {
		if ($darkMode) {
			document.documentElement.style.setProperty('--background', 'rgb(14, 14, 14)');
			document.documentElement.style.setProperty('--textColor', 'white');
		} else {
			document.documentElement.style.setProperty('--background', 'rgb(240, 240, 240)');
			document.documentElement.style.setProperty('--textColor', 'black');
		}
	});
</script>

<marquee>
	Noah is currently listening to <span>{result.name}</span> off the album
	<span>{result.album.name}</span>
	from the artist <span>{result.artists[0].name}</span>
</marquee>

<h1>
	Noah Semus is a designer<br /> who designs things<img
		src="../img/face/face03.png"
		alt="Noah's face"
	/>
</h1>

<slot />

<style global>
	@import '../global.css';

	marquee {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		background: var(--blurple);
		color: black;
		z-index: 999999;
		font-size: 12px;
		padding: 4px;
	}

	marquee span {
		font-style: italic;
		font-size: 16px;
		margin: 0 8px;
	}

	h1 {
		position: absolute;
		top: 0px;
		left: 0px;
		padding: 60px;
		background: linear-gradient(180deg, var(--background) 60.42%, rgba(0, 0, 0, 0) 100%);
	}

	img {
		margin-left: 8px;
		height: 28px;
	}

	@media (max-width: 1000px) {
		h1 {
			position: relative;
			padding: 30px;
			padding-top: 50px;
		}
	}
</style>
