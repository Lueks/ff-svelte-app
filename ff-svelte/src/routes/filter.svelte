<script>
	import { expression } from '../stores/expressionStore';
	import { attributeStore } from '../stores/attributeStore';

	let comparison;
	let comparisonValue;
	let attribute;
	let name;
	let category;
	let categorys;

	let comparisonParser = function (value) {
		if (value == 'weniger als') {
			return '<';
		} else {
			return '>';
		}
	};

	const handleClick = () => {
		$expression = [
			...$expression,
			{
				name: name.value,
				category: category,
				attribute: attribute.value,
				comparison: comparisonParser(comparison.value),
				comparisonValue: comparisonValue.value
			}
		];
		// name.value = '';
		// category.value = '';
		// attribute.value = '';
		// comparison.value = '';
		// comparisonValue.value = '';
		//exportToDB();
	};

	const handleClick2 = () => {
		return;
	};
</script>

<div class="ml-3">
	<h1 class="text-lg py-5 underline decoration-4 decoration-sky-500">Ausdruck erstellen</h1>
	<div>
		<label class="block mb-1" for="expressionName">Name:</label>
		<input
			id="expressionName"
			bind:this={name}
			type="text"
			placeholder="Bitte Namen eingeben..."
			class="w-full border-2 border-slate-500 p-1 rounded-lg"
		/>
	</div>

	<div class="my-4">
		<label for="categoryRadios">Kategorie:</label>
		<div class="flex mt-2" id="categoryRadios">
			<label class="bg-gray-400 p-1 m-2 rounded-lg">
				<input bind:group={category} type="radio" name="Kategorie" value="Tabu" />
				Tabu
			</label>

			<label class="bg-red-400 p-1 m-2 rounded-lg">
				<input bind:group={category} type="radio" name="Kategorie" value="Restriktion" />
				Restriktion
			</label>

			<label class="bg-green-400 p-1 m-2 rounded-lg">
				<input bind:group={category} type="radio" name="Kategorie" value="Gunstfaktor" />
				Gunstfaktor
			</label>
		</div>
	</div>

	<div class="mb-2">
		<label for="expressionContainer">Merkmal:</label>
		<div id="expressionContainer">
			<select bind:this={attribute} class="border-2 p-1 rounded-lg bg-slate-500">
				{#each $attributeStore as att}
					<option>{att}</option>
				{/each}
			</select>

			<select bind:this={comparison} class="border-2 p-1 rounded-lg bg-slate-500">
				<option>weiter als</option>
				<option>weniger als</option>
			</select>

			<input
				bind:this={comparisonValue}
				class="border-2 border-slate-500 p-1 rounded-lg"
				placeholder="Bitte Entfernung eingeben..."
			/>
			Meter
		</div>
	</div>
	<button
		on:click|preventDefault={handleClick}
		class="bg-sky-600 my-2 py-1 text-white border-2 rounded-md w-full">Filter hinzufügen</button
	>
</div>
