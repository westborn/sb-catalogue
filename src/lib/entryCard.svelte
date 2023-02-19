<script>
	export let websiteURL;
	export let exhibitNumber;
	export let title;
	export let artistName;
	export let imageFileName;
	export let imageId;
	export let imageExtension;
	export let description;
	export let size;
	export let price;
	export let inOrOut;
	export let material;

	let fallback = 'images/error-image.png';
	const handleError = (ev) => (ev.target.src = fallback);
</script>

<!-- card -->
<div class="relative flex flex-col items-center justify-between rounded-xl border-2 bg-blue-50">
	<div class="flex w-full items-center py-3 px-2">
		<div class="flex items-center justify-center rounded-full bg-blue-500 p-4 font-bold text-white">
			<p>{exhibitNumber}</p>
		</div>
		<span class="ml-2 pt-1 text-sm font-bold">{title} - {artistName}</span>
	</div>
	<img
		class="max-h-96 rounded-2xl px-2"
		src={`${websiteURL}/${imageId}.${imageExtension}`}
		on:error={handleError}
		alt={imageFileName}
	/>
	<div class="w-full px-3 pb-2">
		<p class="text-base">{description}</p>
		<p class="mt-1 text-center text-xs">{material}</p>
		<div class="flex flex-row justify-between">
			<p class="text-xs">{size}</p>
			<p class="text-xs">{inOrOut}</p>
		</div>
		<p class="w-full text-center text-base font-medium text-gray-700">{price}</p>
	</div>
</div>
<!-- card -->
