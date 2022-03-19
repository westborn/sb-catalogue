<script>
	import entries from '$lib/SB-Entries-2022.json';

	let searchTerm = '';
	$: filteredEntries = searchTerm
		? entries.filter((x) => {
				const searchText = x.EntryNumber + x.ArtistName + x.Title;
				return searchText.toLocaleLowerCase().includes(searchTerm.toLowerCase());
		  })
		: entries;
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

<div class="p-8 text-gray-700">
	<div
		class="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
	>
		{#each filteredEntries as { EntryNumber, ArtistName, Title, Material, Size, Price, Description, ImageFileName, InOrOut, SitedAt, Surname, OtherNames, entryURL }}
			<!-- card -->
			<div class="flex flex-col items-center justify-between rounded-xl border-2 bg-blue-50 ">
				<div class="flex items-center w-full p-3">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white"
					>
						<p>{EntryNumber}</p>
					</div>
					<span class="ml-2 pt-1 text-sm font-bold">{Title} - {ArtistName}</span>
				</div>
				<img class="max-h-96 p-2 rounded-2xl" src={entryURL} alt={ImageFileName} />
				<div class="px-3 pb-2 w-full">
					<p class="text-base">{Description}</p>
					<p class="text-xs">{Size}</p>
					<p class="text-base font-medium text-gray-700">{Price}</p>
				</div>
			</div>
			<!-- card -->
		{/each}
	</div>
</div>
