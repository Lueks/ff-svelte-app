<script>
	import { exportToDB, expression, expressionLoading } from '../stores/expressionStore';
	import { attributeStore } from '../stores/attributeStore';

	let comparison;
	let comparisonValue;
	let attribute;
	let name;
	let category;
	let categorys;

	const handleClick = () => {
		$expression = [
			...$expression,
			{
				name: name.value,
				category: category.value,
				attribute: attribute.value,
				comparison: comparison.value,
				comparisonValue: comparisonValue.value,
				id: $expression.length
			}
		];
		exportToDB();
	};

	const handleClick2 = () => {
		console.log($attributeStore);
		console.log($expression);
	};
</script>

<h1 class="text-lg">Ausdruck erstellen</h1>
{#if expressionLoading == true}
	<p>Ausdruck wird gespeichert</p>
{:else}
	null
{/if}

<div>
	<div>
		<input bind:this={name} type="text" class="border-2" />
	</div>

	<div>
		<label>
			<input bind:this={category} group={categorys} type="radio" name="Kategorie" value="Tabu" />
			Tabu
		</label>

		<label>
			<input
				bind:this={category}
				group={categorys}
				type="radio"
				name="Kategorie"
				value="Restriktion"
			/>
			Restriktion
		</label>

		<label>
			<input
				bind:this={category}
				group={categorys}
				type="radio"
				name="Kategorie"
				value="Gunstfaktor"
			/>
			Gunstfaktor
		</label>
	</div>

	<div>
		<select bind:this={attribute} class="border-2 bg-slate-400">
			{#each $attributeStore as att}
				<option>{att}</option>
			{/each}
		</select>

		<select bind:this={comparison} class="border-2 bg-slate-400">
			<option>weiter als</option>
			<option>weniger als</option>
		</select>

		<input bind:this={comparisonValue} class="border-2" />
	</div>
</div>
<button
	on:click|preventDefault={handleClick}
	class="bg-slate-600 my-2 py-1 text-white border-2 rounded-md">Filter hinzufügen</button
>
