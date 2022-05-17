<script>
	export let name;
	export let values;
	export let listValues;
</script>

<div class="w-1/3 mt-4 p-2 scroll-auto border-2 bg-gray-400">
	<h1 class="mb-5">{name}</h1>
	<ul bind:this={listValues}>
		{#each values as ep}
			<li>
				<p>{ep.name}</p>
				{#if ep.isForced}
					<input
						type="checkbox"
						value={ep.attribute + ep.comparison + ep.comparisonValue}
						checked="true"
						disabled="true"
					/>
				{:else}
					<input type="checkbox" value={ep.attribute + ep.comparison + ep.comparisonValue} />
				{/if}
			</li>{/each}
	</ul>
</div>
