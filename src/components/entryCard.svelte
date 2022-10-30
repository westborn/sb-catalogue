<script>
	export let EntryNumber;
	export let Title;
	export let ArtistName;
	export let entryURL;
	export let ImageFileName;
	export let Description;
	export let Size;
	export let Price;
	export let Sold;

	let fallback = 'images/error-image.png';
	const handleError = (ev) => (ev.target.src = fallback);
</script>

<!-- card -->
<div class="relative flex flex-col items-center justify-between rounded-xl border-2 bg-blue-50">
	{#if Sold}
		<div
			class="absolute top-6 right-0 z-10 w-24 rotate-45 rounded-full bg-red-500/70 p-2 text-center text-white"
		>
			Sold
		</div>
	{/if}
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

<!-- .ribbon-tag { text-align: center; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); position: relative; padding: 6px 0; left: -4px; top: 15px; width: 120px; color: #ffffff; -webkit-box-shadow: 0px 0px 3px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 3px rgba(0,0,0,0.3); box-shadow: 0px 0px 3px rgba(0,0,0,0.3); text-shadow: rgba(255,255,255,0.5) 0px 1px 0px; background: #343434; } -->
