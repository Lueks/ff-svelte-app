<script>
	import { expression } from '../stores/expressionStore';

	const getL = () => {
		let l = $expression.filter((exp) => exp.category == 'Restriktion');
		if (l.length == 0) {
			return true;
		} else {
			return false;
		}
	};
</script>

<div class="container flex  min-w-fit justify-center mx-auto my-8">
	<div class="flex flex-col">
		<div class="border-b border-gray-200 shadow">
			<caption
				class="w-full text-left mb-2 p-2 text-lg underline decoration-4 decoration-red-400 bg-red-200"
				>Restriktionen</caption
			>
			<table>
				<thead class="bg-red-200">
					<th class="px-6 py-2 test-xs text-gray-500"> Name </th>
					<th class="px-6 py-2 test-xs text-gray-500"> Attribute </th>
					<th class="px-6 py-2 test-xs text-gray-500"> Vorzeichen </th>
					<th class="px-6 py-2 test-xs text-gray-500"> Entfernung </th>
				</thead>

				<tbody class="bg-white">
					{#if ($expression, getL())}
						<td colspan="4" class="px-6 py-4 text-sm text-gray-500"
							>Keine Restriktionen gespeichert</td
						>
					{:else}
						{#each $expression as exp (exp.id)}
							{#if exp.category == 'Restriktion'}
								<tr class=" whitespace-nowrap">
									<td class="px-6 py-4 font-bold  text-red-500">{exp.name}</td>
									<td class="px-6 py-4 text-sm text-gray-500">{exp.attribute}</td>
									<td class="px-6 py-4 text-sm text-gray-500">{exp.comparison}</td>
									<td class="px-6 py-4 text-sm text-gray-500">{exp.comparisonValue}</td>
								</tr>
							{/if}
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	</div>
</div>
