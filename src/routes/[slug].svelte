<script context="module">
	export async function load({ params }) {
		const slug = params.slug;

		return {
			props: { slug }
		};
	}
</script>

<script>
	import { fly, fade } from 'svelte/transition';
	import projects from '../routes/projects.json';
	export let slug;
	import { indexOutroEnded, outroEnded } from '../stores.js';

	let currentProject = projects.filter((project) => {
		return project.slug === slug;
	});

	let projectImages = currentProject[0]['images'];
	let projectVideos = currentProject[0]['videos'];
	let projectThings = currentProject[0]['things'];

	let indexOutroValue;

	indexOutroEnded.subscribe((value) => {
		indexOutroValue = value;
	});
</script>

<main>
	{#if indexOutroValue}
		<div class="leftPanel">
			<h1
				transition:fly={{ y: 20, duration: 1000 }}
				on:introend={() => {
					outroEnded.set(false);
				}}
			>
				{currentProject[0]['name']}
			</h1>
			<div class="section" transition:fly={{ y: 20, duration: 1000, delay: 200 }}>
				<p class="sectionTitle">Things I did on this project ↓</p>
				<ul>
					{#each projectThings as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
			<div class="section" transition:fly={{ y: 20, duration: 1000, delay: 400 }}>
				<p class="sectionTitle">What the heck is this about ↓</p>
				<p>
					{currentProject[0]['desc']}
				</p>
			</div>
			<nav
				transition:fly={{ y: 20, duration: 1000, delay: 600 }}
				on:outroend={() => {
					outroEnded.set(true);
					indexOutroEnded.set(false);
				}}
			>
				<a href="/">← <span>Back to things</span></a>
			</nav>
		</div>
		<div class="rightPanel">
			<div class="projectsContainer">
				{#each projectVideos as item, i}
					<div
						in:fly={{ y: 200, duration: 1000, delay: i * 200 }}
						out:fade={{ duration: 400, delay: i * 200 }}
					>
						<video autoplay muted loop>
							<source src="../img/projectImages/{slug}/videos/{item}.webm" type="video/webm" />
							<source src="../img/projectImages/{slug}/videos/{item}.mp4" type="video/mp4" />
						</video>
					</div>
				{/each}
				{#each projectImages as item}
					<picture>
						<source srcset="../img/projectImages/{slug}/{item}.webp" type="image/webp" />
						<source srcset="../img/projectImages/{slug}/{item}.jpg" type="image/jpg" />
						<img src="../img/projectImages/{slug}/{item}" alt="lorem" />
					</picture>
				{/each}
			</div>
		</div>
	{/if}
</main>

<style>
	.rightPanel {
		overflow-y: auto;
		padding-bottom: 60px;
	}

	.projectsContainer {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	img,
	video {
		width: 100%;
		max-height: 70vh;
		object-fit: contain;
	}

	a {
		text-decoration: none !important;
	}

	a span {
		text-decoration: underline;
	}

	h1 {
		color: var(--blurple);
		font-style: italic;
	}
</style>
