<script>
	import { onMount } from 'svelte';
	import StrategyTable from '../components/strategyTable.svelte';

	import { expression } from '../stores/expressionStore';

	let selectedExpressions;
	let gs = {
		name: 'Gunstfaktoren',
		values: '',
		toSave: ''
	};
	let rs = {
		name: 'Restriktionen',
		values: '',
		toSave: ''
	};
	let ts = {
		name: 'Tabus',
		values: '',
		toSave: ''
	};

	function sortExpressions() {
		gs.values = $expression.filter((item) => item.category == 'Gunstfaktor');
		rs.values = $expression.filter((item) => item.category == 'Restriktion');
		ts.values = $expression.filter((item) => item.category == 'Tabu');
	}

	function extractValuesFromList(target) {
		return Array.from(target.toSave.getElementsByTagName('input'))
			.filter((x) => x.checked == true)
			.map((x) => x.value);
	}

	function handleClick() {
		let gsArray = extractValuesFromList(gs);
		let rsArray = extractValuesFromList(rs);
		let tsArray = extractValuesFromList(ts);
		console.log(gsArray, rsArray, tsArray);
	}

	onMount(() => {
		sortExpressions();
		// console.log(rs.values);
		// console.log(ts.values);
	});
</script>

<button on:click={handleClick}>TestBtn</button>
<div class="flex flex-row space-x-10 w-full ">
	<StrategyTable bind:listValues={gs.toSave} values={gs.values} name={gs.name} />
	<StrategyTable bind:listValues={rs.toSave} values={rs.values} name={rs.name} />
	<StrategyTable bind:listValues={ts.toSave} values={ts.values} name={ts.name} />
</div>
<button class="w-1/2 p-2 rounded-lg mt-5 bg-slate-400">Suchstrategie speichern</button>
