<script>
	import { empty } from 'svelte/internal';
	import { expression } from '../stores/expressionStore';
</script>

<div class="container flex  min-w-fit justify-center mx-auto">
	<div class="flex flex-col">
		<div class="border-b border-gray-200 shadow">
			{#each $expression as exp}
				<table>
					<thead class="bg-green-400">
						<th class="px-6 py-2 test-xs text-gray-500"> Name </th>
						<th class="px-6 py-2 test-xs text-gray-500"> Attribute </th>
						<th class="px-6 py-2 test-xs text-gray-500"> Vorzeichen </th>
						<th class="px-6 py-2 test-xs text-gray-500"> Entfernung </th>
					</thead>
					<tbody class="bg-white">
						<tr class="whitespace-nowrap">
							<td class="px-6 py-4 text-sm text-gray-500">{exp.name}</td>
							<td class="px-6 py-4 text-sm text-gray-500">{exp.attribute}</td>
							<td class="px-6 py-4 text-sm text-gray-500">{exp.comparison}</td>
							<td class="px-6 py-4 text-sm text-gray-500">{exp.comparisonValue}</td>
						</tr>
					</tbody>
				</table>

				<table>
					<thead class="bg-red-400">
						<th class="px-6 py-2 test-xs text-gray-500"> Name </th>
						<th class="px-6 py-2 test-xs text-gray-500"> Attribute </th>
						<th class="px-6 py-2 test-xs text-gray-500"> Vorzeichen </th>
						<th class="px-6 py-2 test-xs text-gray-500"> Entfernung </th>
					</thead>
					<tbody class="bg-white">
						<tr class="whitespace-nowrap">
							<td class="px-6 py-4 text-sm text-gray-500">{exp.name}</td>
							<td class="px-6 py-4 text-sm text-gray-500">{exp.attribute}</td>
							<td class="px-6 py-4 text-sm text-gray-500">{exp.comparison}</td>
							<td class="px-6 py-4 text-sm text-gray-500">{exp.comparisonValue}</td>
						</tr>
					</tbody>
				</table>

				<table>
					<thead class="bg-gray-400">
						<th class="px-6 py-2 test-xs text-gray-500"> Name </th>
						<th class="px-6 py-2 test-xs text-gray-500"> Attribute </th>
						<th class="px-6 py-2 test-xs text-gray-500"> Vorzeichen </th>
						<th class="px-6 py-2 test-xs text-gray-500"> Entfernung </th>
					</thead>
					<tbody class="bg-white">
						<tr class="whitespace-nowrap">
							<td class="px-6 py-4 text-sm text-gray-500">{exp.name}</td>
							<td class="px-6 py-4 text-sm text-gray-500">{exp.attribute}</td>
							<td class="px-6 py-4 text-sm text-gray-500">{exp.comparison}</td>
							<td class="px-6 py-4 text-sm text-gray-500">{exp.comparisonValue}</td>
						</tr>
					</tbody>
				</table>
			{/each}
		</div>
	</div>
</div>
