<script>
	import { fly } from 'svelte/transition';
	import { indexOutroEnded, outroEnded, firstLoad } from '../stores.js';
	import { onMount } from 'svelte';
	import Friend from '../components/friend.svelte';

	const friends = [
		{
			name: 'Nicholas Lucaccioni',
			title: 'Graphic Designer & Brand Mastermind',
			description:
				'Nick is currently my roommate! We graduated together from Pratt in 2020 with a BFA in Art Direction/Branding. He currently does freelance work for many different brands, including HBO, GrubHub, DocuSign, LinkedIn, and more. Check out <a href="https://lucadsgn.com" target="_blank">his website!</a>'
		},
		{
			name: 'Maria Useche',
			title: 'Art Director & Conceptual Genius',
			description:
				'Maria is one of my clostest friends! We graduated together from Pratt in 2020 with a BFA in Art Direction/Branding. She is currently working at McCann doing branding and art direction for various clients. She is an incredible thinker. Check out <a href="https://mariauseche.com" target="_blank">her website!</a>'
		},
		{
			name: 'Emma Dunegan',
			title: 'Graphic Designer & Illustrator Extraordinaire',
			description:
				"I've known Emma since high school, she is an awesome person! She graduated from Kutztown University with a BFA in Communication Design with concentrations in Graphic Design and Illustration. She is currently working at McCann doing design work for MasterCard. She is detail-oriented, super talented, and a quick learner. Check out <a href='https://emmadunegan.com' target='_blank'>her website!</a>"
		},
		{
			name: 'Rob Bolz',
			title: 'Filmmaker & Audio Mixing Wizard',
			description:
				'Rob is extremely creative & multitalented. Not only is he amazing at video production, he also does fantastic music production, photography, and motion graphics. If you have some sort of media need, he can fulfull it. Check out <a href="https://robfbolz.github.io/" target="_blank">his website!</a>'
		},
		{
			name: 'Dylan Gross',
			title: 'Developer & Backend Maven',
			description:
				"What to say about Dylan? He's super smart, a very good collaborator, and a good friend. It also helps that he's really good at coding too. He currently does DevOps at Cerner. He doesn't have much of an online prescence, so <a href='mailto:demonto123@gmail.com?subject=Noah sent me!' target='_blank'>here's his email!</a>"
		},

		{
			name: 'Jack Trego',
			title: 'Writer, Editor & Probably the Smartest Guy I Know',
			description:
				"When I think of Jack, I think of a pensive, considered, incredibly intelligent person. He's a fantastic writer and poet, and has a background in Francophone studies, international relations, and philosophy. Check out <a href='https://jacktrego.com/' target='_blank'>his website!</a>"
		}
	];

	let ready = false;
	onMount(() => {
		ready = true;
	});

	let firstLoadValue;
	firstLoad.subscribe((value) => {
		firstLoadValue = value;
	});

	let indexOutroValue;
	indexOutroEnded.subscribe((value) => {
		indexOutroValue = value;
	});
</script>

<svelte:head>
	<title>My wonderful friends!</title>
</svelte:head>

<main>
	{#if (ready && firstLoadValue) || indexOutroValue}
		<div class="leftPanel">
			<div
				class="section"
				transition:fly={{ y: 20, duration: 1000, delay: 200 }}
				on:introend={() => {
					outroEnded.set(false);
				}}
			>
				<p class="sectionTitle">My friends are awesome ↓</p>
				<p class="description">
					I am currently not actively looking for work, but I have some amazing friends that you
					could contact instead!
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
			{#each friends as friend, i}
				<div transition:fly={{ y: 20, duration: 800, delay: i * 80 }} class="friendContainer">
					<Friend {...friend} />
				</div>
			{/each}
		</div>
	{/if}
</main>

<style>
	.rightPanel {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		padding-bottom: 60px;
		align-items: flex-end;
	}

	a {
		text-decoration: none !important;
	}

	a span {
		text-decoration: underline;
	}

	.friendContainer {
		width: 100%;
		max-width: 800px;
	}
</style>
