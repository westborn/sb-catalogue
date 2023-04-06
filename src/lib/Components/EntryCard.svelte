<script lang="ts">
	import fallback from '$lib/Assets/error-image.png'
	import type { Exhibit } from '$lib/Components/index.d'
	export let exhibit: Exhibit
	$: ({ artistName, description, exhibitNumber, imageURL, inOrOut, material, price, size, title } =
		exhibit)

	const handleError = (e: Event) => {
		;(e.target as HTMLImageElement).src = fallback
		console.log('Not Found')
	}
</script>

<!-- card -->
<div class="flex flex-col items-center justify-between rounded-xl border-2 bg-blue-50">
	<div class="flex w-full items-center px-2 py-3">
		<div class="flex items-center justify-center rounded-full bg-blue-500 p-4 font-bold text-white">
			<p>{exhibitNumber}</p>
		</div>
		<span class="ml-2 pt-1 text-sm font-bold">{title} - {artistName}</span>
	</div>
	<img class="max-h-[30vh] rounded-2xl px-2" src={imageURL} on:error={handleError} alt={title} />
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
