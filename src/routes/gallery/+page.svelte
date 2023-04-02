<script lang="ts">
	import { page } from '$app/stores'

	import Image from '$lib/Components/Image.svelte'
	import Modal from '@lib/Components/Modal.svelte'
	import EntryCard from '$lib/Components/EntryCard.svelte'

	import type { Exhibit } from '@lib/Components'
	import { entries } from '$lib/Utils/entries'

	let paramYear = $page.url.searchParams.get('year')
	let year = paramYear ? paramYear : new Date().getFullYear().toString()

	const exhibits = entries.filter((x) => {
		if (x.exhibitionYear !== year) {
			return false
		} else {
			return true
		}
	})

	let baseHeight: number = 200
	let gutter: number = 8
	let exhibitClass: string | undefined = undefined

	let showModal = false
	let currentExhibit: Exhibit
	const handleToggleModal = (selectedExhibit: Exhibit) => {
		currentExhibit = selectedExhibit
		showModal = !showModal
	}
</script>

<Modal modalOpen={showModal} on:close={() => handleToggleModal(currentExhibit)}>
	<svelte:fragment slot="body"><EntryCard exhibit={currentExhibit} /></svelte:fragment>
</Modal>

<div class="gallery">
	<div class="section" style="--gutter: {gutter}px;">
		{#each exhibits as exhibit}
			<button
				class={`image ${exhibitClass ?? ''}`}
				on:click={() => handleToggleModal(exhibit)}
				style="
					--ratio: {(exhibit.imageHeight * 100.0) / exhibit.imageWidth}%;
					--width: {(baseHeight * exhibit.imageWidth) / exhibit.imageHeight}px;
					--flex-grow: {(baseHeight * exhibit.imageWidth) / exhibit.imageHeight};
				"
			>
				<div class="spacer" />
				<Image src={exhibit.imageURL} title={exhibit.title} class="img lazyload" />
			</button>
		{/each}
		{#each new Array(10) as item}
			<div class="dummy" />
		{/each}
	</div>
</div>

<style>
	.section {
		display: flex;
		flex-wrap: wrap;
	}
	.gallery::after {
		content: '';
		flex-grow: 999999999;
		min-width: 200px;
		height: 0;
	}
	.image {
		flex-grow: var(--flex-grow);
		width: var(--width);
		margin: calc(var(--gutter) / 2);
		align-self: flex-start;
		position: relative;
		border: none;
	}
	.spacer {
		content: '';
		display: block;
		padding-bottom: var(--ratio);
	}
	.image :global(.img) {
		object-fit: cover;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		vertical-align: bottom;
		border: 0;
	}
	.dummy {
		height: 0;
		width: 100px;
		flex-grow: 100;
	}
</style>
