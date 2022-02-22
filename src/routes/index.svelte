<script>
	import projects from '../routes/projects.json';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { outroEnded, indexOutroEnded, firstLoad, darkMode } from '../stores.js';
	import ListItemHover from '../components/listItemHover.svelte';

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

	const toLightMode = () => {
		$darkMode = false;
		document.documentElement.style.setProperty('--background', 'rgb(240, 240, 240)');
		document.documentElement.style.setProperty('--textColor', 'black');
	};

	const toDarkMode = () => {
		$darkMode = true;
		document.documentElement.style.setProperty('--background', 'rgb(14, 14, 14)');
		document.documentElement.style.setProperty('--textColor', 'white');
	};
</script>

<svelte:head>
	<title>Noah is really cool (!!!)</title>
</svelte:head>

<main>
	{#if ready && outroValue}
		<div class="leftPanel">
			<div class="description" transition:fly={{ y: 20, duration: 1000, delay: 200 }}>
				Noah currently works at the
				<ListItemHover
					mainText="<strong>Google Creative Lab</strong>"
					hoverText="It's a dream come true ☘"
					backgroundColor="blueviolet"
				/>
				<br class="mobileHide" />in New York City. He enjoys it!
			</div>
			<div class="section" transition:fly={{ y: 20, duration: 1000, delay: 400 }}>
				<p class="sectionTitle">Previously worked for ↓</p>
				<ul>
					{#each workplace as item}
						<ListItemHover
							hoverText={item.hover}
							mainText={item.name}
							backgroundColor={item.color}
						/>
					{/each}
				</ul>
			</div>
			<div class="section" transition:fly={{ y: 20, duration: 1000, delay: 600 }}>
				<p class="sectionTitle">Previously attended ↓</p>
				<ul>
					<ListItemHover backgroundColor="moccasin" color="black" />
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
				{#if $darkMode}
					<div class="colorChanger" on:click={toLightMode}>light mode</div>
				{:else}
					<div class="colorChanger" on:click={toDarkMode}>dark mode</div>
				{/if}
			</nav>
		</div>
		<div class="rightPanel">
			<h1 transition:fly={{ x: -20, duration: 1000, delay: 200 }} class="mobileHide">Things →</h1>
			<h1 transition:fly={{ x: 20, duration: 1000, delay: 200 }} class="mobileShow">Things ↓</h1>
			<div class="projectsContainer">
				{#each projects as project, i}
					<a
						class="project"
						href="/{project.slug}"
						transition:fly={{ x: 200, duration: 1000, delay: i * 200 }}
					>
						<p class="projectTitle mobileHide">
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
		height: 60vh;
		object-fit: cover;
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
		line-height: 3.2vw;
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
		cursor: url('/img/face/face01.png'), pointer;
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

	.colorChanger {
		text-decoration: underline;
	}

	@media (max-width: 1350px) {
		.rightPanel h1.mobileHide {
			display: none;
		}

		.rightPanel h1.mobileShow {
			display: block;
			position: relative;
		}

		.rightPanel {
			padding-left: 60px;
		}

		.projectsContainer {
			width: 100%;
			margin: 0;
			margin-top: 24px;
		}

		main {
			gap: 0px;
		}
	}

	@media (max-width: 1000px) {
		.rightPanel {
			padding-left: 30px;
		}

		.rightPanel h1 {
			display: block;
			position: relative;
		}

		.description {
			font-style: normal;
			font-variation-settings: 'wght' 200;
			font-size: 16px;
			line-height: 26px;
		}

		.projectsContainer {
			width: 100%;
			margin: 0;
			margin-top: 24px;
			padding-left: 0px;
		}

		.project:hover {
			transform: scale(0.98);
		}

		video {
			height: auto;
		}
	}
</style>
