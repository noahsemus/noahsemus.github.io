<script>
	import projects from '../routes/projects.json';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { outroEnded, indexOutroEnded, firstLoad } from '../stores.js';

	let outroValue;
	outroEnded.subscribe((value) => {
		outroValue = value;
	});

	let ready = false;
	onMount(() => {
		ready = true;
		firstLoad.set(false);
	});

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
	{#if ready && outroValue}
		<div class="leftPanel">
			<p class="description" transition:fly={{ y: 20, duration: 1000, delay: 200 }}>
				Noah currently works at the <strong>Google Creative Lab</strong> in New York City. He enjoys
				it!
			</p>
			<div class="section" transition:fly={{ y: 20, duration: 1000, delay: 400 }}>
				<p class="sectionTitle">Previously worked for ↓</p>
				<ul>
					{#each workplace as item}
						<li>{item.name}</li>
					{/each}
				</ul>
			</div>
			<div class="section" transition:fly={{ y: 20, duration: 1000, delay: 600 }}>
				<p class="sectionTitle">Previously attended ↓</p>
				<ul>
					<li>Pratt Institute (it was okay)</li>
				</ul>
			</div>
			<nav
				transition:fly={{ y: 20, duration: 1000, delay: 800 }}
				on:outroend={() => {
					indexOutroEnded.set(true);
				}}
			>
				<a href="mailto:noahsemus@gmail.com" target="_blank">email</a>
				<a href="https://www.github.com/noahsemus" target="_blank">github</a>
				<a href="https://www.medium.com/@noahsemus" target="_blank">medium</a>
				<a href="https://www.youtube.com/c/NoahSemus/videos" target="_blank">youtube</a>
			</nav>
		</div>
		<div class="rightPanel">
			<h1 transition:fly={{ x: -20, duration: 1000, delay: 200 }}>Things →</h1>
			<div class="projectsContainer">
				{#each projects as project, i}
					<a
						class="project"
						href="/{project.slug}"
						transition:fly={{ x: 200, duration: 1000, delay: i * 200 }}
					>
						<p class="projectTitle">
							{project.name}
						</p>
						<video autoplay muted loop>
							<source src="../img/projectImages/{project.poster}.webm" type="video/webm" />
							<source src="../img/projectImages/{project.poster}.mp4" type="video/mp4" />
						</video>
					</a>
				{/each}
			</div>
		</div>
	{/if}
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
