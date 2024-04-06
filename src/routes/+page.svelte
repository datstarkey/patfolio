<script lang="ts">
	import Masonry from 'svelte-bricks';

	import type { PageData } from './$types';
	import { browser } from '$app/environment';

	export let data: PageData;

	$: images = data.images.sort((a, b) => (a.title > b.title ? 1 : -1));

	$: page = data.blub[0];

	let [minColWidth, maxColWidth, gap] = [200, 800, 20];
</script>

<div class="mx-auto my-32 flex h-auto max-w-4xl flex-wrap items-center transition-all">
	<!--Main Col-->
	<div
		id="profile"
		class="mx-6 w-full rounded-lg bg-white shadow-2xl lg:mx-0 lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none"
	>
		<div class="p-4 text-center md:p-12 lg:text-left">
			<!-- Image for mobile view-->
			<img
				class="mx-auto -mt-16 block h-48 w-48 rounded-full object-cover shadow-xl lg:hidden"
				src="/pat2.png"
				alt="Patrick Walsh"
			/>

			<h1 class="pt-8 text-3xl font-bold lg:pt-0">Patrick Walsh</h1>
			<div class="mx-auto w-4/5 border-b-2 border-red-500 pt-3 opacity-25 lg:mx-0"></div>
			<p class="flex items-center justify-center pt-4 text-base font-bold lg:justify-start">
				<iconify-icon icon="bx:bxs-user-circle" class="mr-4 text-xl text-red-500"></iconify-icon>
				Aspiring Artist
			</p>
			<a
				href="https://maps.app.goo.gl/qSCpVuuGmzfTNhVc8"
				class="flex items-center justify-center pt-4 text-base font-bold hover:text-red-900 hover:underline lg:justify-start"
				target="_blank"
			>
				<iconify-icon icon="bx:map" class="mr-5 text-xl text-red-500"></iconify-icon>
				Ferryside, South Wales
			</a>
			<p class="pt-8 text-sm">
				{page.blub}
			</p>

			<div class="flex flex-wrap items-center justify-center pb-8 pt-12">
				<a href="mailto:patty.walsh@hotmail.com" target="_blank">
					<button class="rounded-full bg-red-700 px-4 py-2 font-bold text-white hover:bg-red-900">
						Get In Touch
					</button>
				</a>

				<a href="https://facebook.com/patty.walsh.9" target="_blank">
					<iconify-icon icon="mdi:facebook" class="ml-4 text-5xl text-red-700 hover:text-red-900"
					></iconify-icon>
				</a>

				<a href="https://instagram.com/patwalshart" target="_blank">
					<iconify-icon icon="mdi:instagram" class="ml-4 text-5xl text-red-700 hover:text-red-900"
					></iconify-icon>
				</a>
			</div>
		</div>
	</div>

	<!--Img Col-->
	<div class="w-full lg:w-2/5">
		<!-- Big profile image for side bar (desktop) -->
		<img
			src="/patwalsh.png"
			class="hidden rounded-none shadow-2xl lg:block lg:rounded-lg"
			alt="Patrick Walsh"
		/>
		<!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
	</div>

	{#if browser}
		<!-- content here -->

		<div id="work" class="mx-6 mt-10 w-full rounded-lg bg-white shadow-2xl lg:mx-auto">
			<div class="p-4 text-center md:p-12 lg:text-left">
				<h1 class="pt-8 text-3xl font-bold lg:pt-0">Work</h1>
				<div class="mx-auto mb-5 w-4/5 border-b-2 border-red-500 pt-3 opacity-25 lg:mx-0"></div>

				<Masonry items={images} {minColWidth} {maxColWidth} {gap} let:item>
					<div class="tooltip" data-tip={item.title}>
						<img
							src={`https://cms.patfolio.art/assets/${item.id}`}
							alt={item.title}
							loading="lazy"
							class="tooltip rounded-lg object-cover object-center shadow-md"
						/>
					</div>
				</Masonry>

				<!-- <div class="mt-5 columns-3 gap-8">
				{#each data.images as image}
					<div class="tooltip" data-tip={image.title}>
						<img
							src={`https://cms.patfolio.art/assets/${image.id}`}
							alt={image.title}
							class="tooltip my-4 w-full rounded-lg object-cover object-center shadow-md"
						/>
					</div>
				{/each}
			</div> -->
			</div>
		</div>
	{/if}
</div>
