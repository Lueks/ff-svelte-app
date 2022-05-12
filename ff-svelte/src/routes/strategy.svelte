<script>
	import { expression } from '../stores/expressionStore';
	let testVar = $expression[0];
</script>

<div class="scroll-auto">
	<ul>
		{#each $expression as ep}
			<li>
				<p>{ep.name}</p>
				{#if ep.category == 'Tabu'}
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
