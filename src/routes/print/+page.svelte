<script lang="ts">
	import fallback from '$lib/Assets/error-image.png'

	export let data

	// get the year and all the exhibits from the layout load data
	const { year, exhibits } = data
	const handleError = (e: Event) => {
		;(e.target as HTMLImageElement).src = fallback
		console.log('Not Found')
	}
</script>

{#each exhibits as exhibit (exhibit.exhibitNumber)}
	<div class="card flex max-w-3xl flex-col items-center justify-between gap-2 text-lg">
		<div class="flex w-full items-center gap-2">
			<p
				class="flex h-20 w-20 items-center justify-center gap-2 rounded-full bg-blue-500 font-bold text-white"
			>
				{exhibit.exhibitNumber}
			</p>
			<div class="">
				<span class="text-2xl font-bold">{exhibit.title} - {exhibit.artistName}</span>
			</div>
		</div>
		<img
			class="h-[400px] rounded-2xl px-2"
			src={exhibit.imageURL}
			on:error={handleError}
			alt={exhibit.title}
		/>
		<div class="mt-4 w-full px-20">
			<p class="text-center text-2xl">{exhibit.description}</p>
			<p class="mt-2 text-center text-lg">{exhibit.material}</p>
			<div class="mt-1 flex flex-row justify-between text-lg">
				<p class="">{exhibit.size} cm</p>
				<p class="font-semibold">{exhibit.price}</p>
			</div>
		</div>
		<p class="print">-----------------------------------------------</p>
		<div class="mt-1 grid grid-cols-3 items-center">
			<img
				class="h-[120px]"
				src="https://sculpturebermagui.org.au/wp-content/uploads/2022/07/sponsor-bermagui-beach-hotel.jpg"
				alt="Bermagui Beach Hotel"
			/>
			<p class="font-semibold">Vote for this artwork in the People's Choice Award</p>

			<p>width=120, textcolor=#FFFFFF, backgroundcolor=#0094D9</p>
			<!-- https://sculpturebermagui.org.au/peoples-choice-award/?wpf1050_3=001 -->
		</div>
	</div>
{/each}

<style>
	/* @media print { */
	* {
		-webkit-print-color-adjust: exact;
		color-adjust: exact;
	}

	@page {
		size: a4 portrait;
		margin: 1cm;
	}

	img {
		display: block;
		max-width: 100%;
	}

	.card {
		color: #000;
		background-color: #fff;
		break-before: page;
	}

	.print {
		display: block;
	}
	/* } */
</style>
