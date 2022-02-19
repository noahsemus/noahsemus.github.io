<script>
	import projects from '../routes/projects.json';

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
		<p class="description">
			Noah currently works at the <strong>Google Creative Lab</strong> in New York City. He enjoys it!
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
			<a href="https://www.github.com/noahsemus" target="_blank">github</a>
			<a href="https://www.medium.com/@noahsemus" target="_blank">medium</a>
			<a href="https://www.youtube.com/c/NoahSemus/videos" target="_blank">youtube</a>
		</nav>
	</div>
	<div class="rightPanel">
		<h1>Things →</h1>
		<div class="projectsContainer">
			{#each projects as project}
				<a class="project" href={project.route}>
					<p class="projectTitle">
						{project.name}
					</p>
					<video autoplay muted loop>
						<source src="../img/projectImages/{project.src01}" type="video/webm" />
						<source src="../img/projectImages/{project.src02}" type="video/mp4" />
					</video>
				</a>
			{/each}
		</div>
	</div>
</main>

<style>
	.description {
		max-width: 400px;
	}

	.rightPanel {
		overflow-y: auto;
		padding-bottom: 60px;
	}

	.projectsContainer {
		width: calc(100% - 250px);
		margin-left: 250px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.project {
		width: 100%;
		position: relative;
	}

	video {
		width: 100%;
	}

	.projectTitle {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 3vw;
		font-variation-settings: 'wght' 400;
		transition: all 0.4s ease-in-out;
		opacity: 0;
		background: rgba(0, 0, 0, 0.5);
		color: white;
	}

	.project:hover .projectTitle {
		opacity: 1;
		font-variation-settings: 'wght' 700;
	}

	.rightPanel h1 {
		width: 250px;
		position: absolute;
	}
</style>
