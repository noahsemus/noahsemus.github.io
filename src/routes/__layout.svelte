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
	export let result;
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
		/* font-variation-settings: 'wght' 800; */
		font-style: italic;
		font-size: 16px;
		margin: 0 8px;
	}

	h1 {
		position: absolute;
		top: 0px;
		left: 0px;
		padding: 60px;
		background: linear-gradient(180deg, #000000 60.42%, rgba(0, 0, 0, 0) 100%);
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
