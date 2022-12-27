<script>
	import { LightPaginationNav } from 'svelte-paginate';

	import entries from '$lib/SB-Entries-2023.json';
	import EntryCard from '../components/entryCard.svelte';

	let currentPage = 1;
	let pageSize = 3;
	let year = '2022';

	let searchTerm = '';

	// Setup the filter for searching / join a few fields to search on
	// must be this year
	// if no search term entered - return them all
	$: filteredEntries = entries.filter((x) => {
		if (x.exhibitionYear !== year) return false;
		if (searchTerm === '') return true;
		const searchText = x.entryNumber + x.artistName + x.title;
		currentPage = 1;
		return searchText.toLocaleLowerCase().includes(searchTerm.toLowerCase());
	});

	// Setup just the page of entries (based on pageSize)
	$: paginatedItems = filteredEntries.slice(
		(currentPage - 1) * pageSize,
		(currentPage - 1) * pageSize + pageSize
	);
</script>

<!-- Search Box -->
<div class="mt-8">
	<p class="ml-28 -mt-8 text-2xl font-bold text-gray-700">Catalogue - {year}</p>
	<div class="ml-28 mt-3 w-80 rounded">
		<input
			bind:value={searchTerm}
			type="search"
			class="w-full rounded border border-solid border-gray-300 bg-white px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
			placeholder="Search Entries (number, title or artist)"
			aria-label="Search"
		/>
	</div>
</div>

<!-- Pagination page numbers and left/right -->
<LightPaginationNav
	totalItems={filteredEntries.length}
	{pageSize}
	{currentPage}
	limit={2}
	showStepOptions={true}
	on:setPage={(e) => (currentPage = e.detail.page)}
/>

<!-- The items from the JSON Array (Filtered and Paginated) -->
<div class="p-8 text-gray-700">
	<div
		class="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
	>
		{#each paginatedItems as entry (entry.entryNumber)}
			<EntryCard
				entryNumber={entry.entryNumber}
				title={entry.title}
				artistName={entry.artistName}
				entryImageId={entry.entryImageId}
				imageFileName={entry.imageFileName}
				description={entry.description}
				size={entry.size}
				price={entry.price}
			/>
		{/each}
	</div>
</div>
