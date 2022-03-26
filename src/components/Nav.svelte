<script>
	const menuText = [
		{
			text: 'Home',
			href: '/home'
		},
		{
			text: 'About',
			href: '/aboutus'
		},
		{
			text: 'Support',
			href: '/support-us'
		},
		{
			text: '2022',
			href: '/program-2'
		},
		{
			text: 'Gallery',
			href: '/gallery-2'
		},
		{
			text: 'For the Artist',
			href: '/artists-information'
		},
		{
			text: 'For the Buyer',
			href: '/buyer-information'
		},
		{
			text: 'Contact',
			href: '/contact-1'
		}
	];
</script>

<!--Nav-->
<nav class="bg-primary p-0 mt-0 w-full">
	<div class="h-16 flex justify-between ">
		<div class="flex">
			<a href="https://sculpturebermagui.org.au/home">
				<img
					class="rounded-2xl"
					alt="Sculpture Bermagui"
					src="https://sculpturebermagui.org.au/wp-content/uploads/2021/02/sculpture-bermagui-logo-2021.png"
					srcset="https://sculpturebermagui.org.au/wp-content/uploads/2021/02/sculpture-bermagui-logo-2021.png 1x, https://sculpturebermagui.org.au/wp-content/uploads/2021/02/sculpture-bermagui-logo-2021-2x.png 2x"
				/>
			</a>
		</div>
		<div class="flex w-full pt-2  md:w-1/2 md:justify-end">
			<ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
				{#each menuText as item}
					<li class="mr-3">
						<a
							class="inline-block px-2 text-sm text-white font- font-bold uppercase hover:text-accent no-underline"
							href={`https://sculpturebermagui.org.au${item.href}`}>{item.text}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
