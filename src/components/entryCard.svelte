<script>
	export let entryNumber;
	export let title;
	export let artistName;
	export let entryImageId;
	export let imageFileName;
	export let description;
	export let size;
	export let price;

	let fallback = 'images/error-image.png';
	const handleError = (ev) => (ev.target.src = fallback);
</script>

<!-- card -->
<div class="relative flex flex-col items-center justify-between rounded-xl border-2 bg-blue-50">
	<div class="flex w-full items-center p-3">
		<div
			class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white"
		>
			<p>{entryNumber}</p>
		</div>
		<span class="ml-2 pt-1 text-sm font-bold" loading="lazy" decoding="async"
			>{title} - {artistName}</span
		>
	</div>
	<img
		class="max-h-96 rounded-2xl p-2"
		src={`https://drive.google.com/uc?export=view&id=${entryImageId}`}
		on:error={handleError}
		alt={imageFileName}
	/>
	<!-- <ImageLoad url={entryURL} altText={ImageFileName} /> -->
	<div class="w-full px-3 pb-2">
		<p class="text-base">{description}</p>
		<p class="text-xs">{size}</p>
		<p class="text-base font-medium text-gray-700">{price}</p>
	</div>
</div>
<!-- card -->

<!-- .ribbon-tag { text-align: center; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); position: relative; padding: 6px 0; left: -4px; top: 15px; width: 120px; color: #ffffff; -webkit-box-shadow: 0px 0px 3px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 3px rgba(0,0,0,0.3); box-shadow: 0px 0px 3px rgba(0,0,0,0.3); text-shadow: rgba(255,255,255,0.5) 0px 1px 0px; background: #343434; } -->
