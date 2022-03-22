<script>
	import { LightPaginationNav } from 'svelte-paginate';

	import entries from '$lib/SB-Entries-2022.json';
	import EntryCard from '../components/entryCard.svelte';

	let currentPage = 1;
	let pageSize = 6;

	let searchTerm = '';
	$: filteredEntries = searchTerm
		? entries.filter((x) => {
				const searchText = x.EntryNumber + x.ArtistName + x.Title;
				currentPage = 1;
				pageSize = 6;
				return searchText.toLocaleLowerCase().includes(searchTerm.toLowerCase());
		  })
		: entries;

	$: paginatedItems = filteredEntries.slice(
		(currentPage - 1) * pageSize,
		(currentPage - 1) * pageSize + pageSize
	);
</script>

<div class="m-3 w-96">
	<div class="w-full rounded">
		<input
			bind:value={searchTerm}
			type="search"
			class="w-full rounded border border-solid border-gray-300 bg-white px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
			placeholder="Search Entries"
			aria-label="Search"
		/>
	</div>
</div>

<LightPaginationNav
	totalItems={filteredEntries.length}
	{pageSize}
	{currentPage}
	limit={1}
	showStepOptions={true}
	on:setPage={(e) => (currentPage = e.detail.page)}
/>

<div class="p-8 text-gray-700">
	<div
		class="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
	>
		{#each paginatedItems as entry (entry.EntryNumber)}
			<EntryCard {...entry} />
		{/each}
	</div>
</div>
