<script lang="ts">
	import { LightPaginationNav } from 'svelte-paginate'
	import EntryCard from '@lib/Components/EntryCard.svelte'
	import { determinePlacement } from '../lib/Utils/Utilities.js'

	export let data

	// get the year and all the exhibits from the layout load data
	const { year, exhibits } = data

	let currentPage = 1
	let pageSize = 5
	let searchTerm = ''

	// Setup the filter for searching / join a few fields to search on
	// if no search term entered - return them all
	$: filteredEntries = exhibits.filter((x) => {
		if (searchTerm === '') return true
		const location = determinePlacement(x.exhibitNumber, x.exhibitionYear, x.inOrOut)
		const searchText = x.exhibitNumber + x.artistName + x.title + location
		currentPage = 1
		return searchText.toLocaleLowerCase().includes(searchTerm.toLowerCase())
	})

	// Setup just the page of entries (based on pageSize)
	$: paginatedItems = filteredEntries.slice(
		(currentPage - 1) * pageSize,
		(currentPage - 1) * pageSize + pageSize,
	)
</script>

<!-- Search Box -->
<div>
	<p class="p-4 text-2xl font-bold text-gray-700">Catalogue - {year}</p>
	<div class="w-80 rounded p-4">
		<input
			bind:value={searchTerm}
			type="search"
			class="w-full rounded border border-solid border-gray-300 bg-white px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
			placeholder="Number, title, artist or location"
			aria-label="Search"
		/>
	</div>
</div>

<!-- Pagination page numbers and left/right -->
<LightPaginationNav
	totalItems={filteredEntries.length}
	{pageSize}
	{currentPage}
	limit={1}
	showStepOptions={true}
	on:setPage={(e) => (currentPage = e.detail.page)}
/>

<!-- The items from the JSON Array (Filtered and Paginated) -->
<div class="p-8 text-gray-700">
	<div
		class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
	>
		{#each paginatedItems as exhibit (exhibit.exhibitNumber)}
			<EntryCard {exhibit} />
		{/each}
	</div>
</div>

<!-- Pagination page numbers and left/right -->
<LightPaginationNav
	totalItems={filteredEntries.length}
	{pageSize}
	{currentPage}
	limit={1}
	showStepOptions={true}
	on:setPage={(e) => (currentPage = e.detail.page)}
/>
