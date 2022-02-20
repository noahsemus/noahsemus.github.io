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
		{ name: 'WarnerMedia', hover: 'Hi Miguel!', color: 'blue' },
		{ name: 'Sony Music Entertainment', hover: 'It was an unpaid internship ☣', color: 'green' },
		{ name: 'Baron & Baron', hover: 'Working on [NDA] was really fun!', color: 'deeppink' },
		{ name: 'Zero Studios', hover: 'My first interaction design job <3', color: 'purple' },
		{ name: 'Crane AI', hover: 'They catered on Tuesdays!', color: 'orange' },
		{ name: "Noah's Mom (she's awesome)", hover: 'I love her a lot!', color: 'red' }
	];

	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	let itemHover = false;
</script>

<main on:mousemove={handleMousemove}>
	{#if ready && outroValue}
		<div class="leftPanel">
			<div class="description" transition:fly={{ y: 20, duration: 1000, delay: 200 }}>
				Noah currently works at the <div
					class="listItem"
					on:mouseenter={() => {
						itemHover = true;
					}}
					on:mouseleave={() => {
						itemHover = false;
					}}
				>
					Google Creative Lab
					{#key itemHover}
						<div
							class="listItemHover"
							style="top: {m.y - 20}px; left: {m.x + 20}px; background: blueviolet;"
						>
							It's a dream come true!
						</div>
					{/key}
				</div>
				<br />in New York City. He enjoys it!
			</div>
			<div class="section" transition:fly={{ y: 20, duration: 1000, delay: 400 }}>
				<p class="sectionTitle">Previously worked for ↓</p>
				<ul>
					{#each workplace as item}
						<div
							class="listItem"
							on:mouseenter={() => {
								itemHover = true;
							}}
							on:mouseleave={() => {
								itemHover = false;
							}}
						>
							{item.name}
							{#key itemHover}
								<div
									class="listItemHover"
									style="top: {m.y - 20}px; left: {m.x + 20}px; background: {item.color}"
								>
									{item.hover}
								</div>
							{/key}
						</div>
					{/each}
				</ul>
			</div>
			<div class="section" transition:fly={{ y: 20, duration: 1000, delay: 600 }}>
				<p class="sectionTitle">Previously attended ↓</p>
				<ul>
					<div
						class="listItem"
						on:mouseenter={() => {
							itemHover = true;
						}}
						on:mouseleave={() => {
							itemHover = false;
						}}
					>
						Pratt Institute (it was okay)
						{#key itemHover}
							<div
								class="listItemHover"
								style="top: {m.y - 20}px; left: {m.x + 20}px; background: moccasin; color: black"
							>
								It really was just okay.
							</div>
						{/key}
					</div>
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
		font-style: normal;
		font-variation-settings: 'wght' 200;
		font-size: 18px;
		line-height: 26px;
	}

	.description .listItem {
		font-variation-settings: 'wght' 600;
	}

	.description .listItemHover {
		font-variation-settings: 'wght' 200;
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
		transition: all 0.25s ease-in-out;
		opacity: 0;
		background: rgba(0, 0, 0, 0.5);
		color: white;
	}

	.project:hover .projectTitle {
		opacity: 1;
		font-variation-settings: 'wght' 700;
	}

	.project {
		transition: all 0.25s ease-in-out;
	}

	.project:hover {
		transform: translateX(-20px);
	}

	.rightPanel h1 {
		width: 250px;
		position: absolute;
	}

	ul {
		display: flex;
		flex-direction: column;
	}

	.listItem {
		cursor: pointer;
		display: inline;
		width: fit-content;
	}

	.listItemHover {
		position: fixed;
		z-index: 99;
		display: none;
		background: black;
		padding: 0 8px;
		-webkit-animation: wobble-ver-left 2s infinite both;
		animation: wobble-ver-left 2s infinite both;
	}

	.listItem:hover .listItemHover {
		display: block;
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
