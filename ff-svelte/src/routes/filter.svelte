<script>
	import { expression } from '../stores/expressionStore';
	import { attributeStore } from '../stores/attributeStore';
	import GTable from '../components/GTable.svelte';
	import RTable from '../components/RTable.svelte';
	import TTable from '../components/TTable.svelte';
	import { onDestroy, onMount } from 'svelte';

	let comparison;
	let comparisonValue;
	let attribute;
	let name;
	let category;
	let loading;

	onMount(() => {
		function loadExpressions() {
			loading = true;
			fetch('http://localhost:8081/sendattributes')
				.then((res) => res.json())
				.then((data) => {
					expression.set(data);
					return (loading = false);
				});
		}
		loadExpressions();
	});

	onDestroy(() => {
		function saveExpressions() {
			let payload = $expression;
			console.log(payload);
			fetch('http://localhost:8081/receiveattributes', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload)
			})
				.then((res) => res.json())
				.then((data) => console.log(data));
		}
		saveExpressions();
		console.log('destry');
	});

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
				comparisonValue: comparisonValue.value,
				id: Math.floor(Math.random() * 100000),
				isForced: false
			}
		];
		// name.value = '';
		// category.value = '';
		// attribute.value = '';
		// comparison.value = '';
		// comparisonValue.value = '';
	};
</script>

<div id="wrapper" class="flex flex-row bg-gray-300">
	<div id="Filter" class="w-2/4">
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
				class="bg-gray-600 my-2 py-1 text-white border-2 rounded-md w-full"
				>Filter hinzufügen</button
			>
		</div>
	</div>
	<div class="overflow-y-auto h-screen w-2/4 ml-4 mt-5 pl-4">
		{#if loading == true}
			<h1>Lädt...</h1>
		{:else}
			<RTable />
			<GTable />
			<TTable />
		{/if}
	</div>
</div>
