<script>
	export let EntryNumber;
	export let Title;
	export let ArtistName;
	export let entryURL;
	export let ImageFileName;
	export let Description;
	export let Size;
	export let Price;

	let fallback = 'images/error-image.png';
	const handleError = (ev) => (ev.target.src = fallback);
</script>

<!-- card -->
<div class="flex flex-col items-center justify-between rounded-xl border-2 bg-blue-50">
	<div class="flex w-full items-center p-3">
		<div
			class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white"
		>
			<p>{EntryNumber}</p>
		</div>
		<span class="ml-2 pt-1 text-sm font-bold" loading="lazy" decoding="async"
			>{Title} - {ArtistName}</span
		>
	</div>
	<img class="max-h-96 rounded-2xl p-2" src={entryURL} on:error={handleError} alt={ImageFileName} />
	<!-- <ImageLoad url={entryURL} altText={ImageFileName} /> -->
	<div class="w-full px-3 pb-2">
		<p class="text-base">{Description}</p>
		<p class="text-xs">{Size}</p>
		<p class="text-base font-medium text-gray-700">{Price}</p>
	</div>
</div>
<!-- card -->
