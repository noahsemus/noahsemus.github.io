<script>
	const workplace = [
		{ name: 'WarnerMedia', hover: 'It was a lot of fun' },
		{ name: 'Sony Music Entertainment', hover: 'It was an unpaid internship.' },
		{ name: 'Baron & Baron', hover: 'The people are amazing!' },
		{ name: 'Zero Studios', hover: "I'm grateful for everything they gave me" },
		{ name: 'Crane AI', hover: 'They catered on Tuesdays!' },
		{ name: "Noah's Mom (she's awesome)", hover: 'I love her a lot!' }
	];
</script>

<main>
	<div class="leftPanel">
		<h1>Noah Semus is a designer<br /> who designs things</h1>
		<p class="description">
			Noah currently works at the <strong>Google Creative Lab</strong> in NYC. He enjoys it!
		</p>
		<div class="section">
			<p class="sectionTitle">Previously worked for ↓</p>
			<ul>
				{#each workplace as item}
					<li>{item.name}</li>
				{/each}
			</ul>
		</div>
		<div class="section">
			<p class="sectionTitle">Previously attended ↓</p>
			<ul>
				<li>Pratt Institute (it was okay)</li>
			</ul>
		</div>
		<nav>
			<a href="mailto:noahsemus@gmail.com" target="_blank">email</a>
			<a href="github.com/noahsemus" target="_blank">github</a>
			<a href="medium.com/@noahsemus" target="_blank">medium</a>
			<a href="https://www.youtube.com/c/NoahSemus/videos" target="_blank">youtube</a>
		</nav>
	</div>
</main>

<style>
	.description {
		max-width: 400px;
	}
</style>
