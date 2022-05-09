<script>
	import '../app.css';
	import GTable from '../components/GTable.svelte';
	import RTable from '../components/RTable.svelte';
	import TTable from '../components/TTable.svelte';
</script>

<div class="flex h-full mx-2 my-10">
	<div class="min-h-full w-1/6">
		<nav class="flex flex-col w-50 min-h-full mt-5 mx-5 py-2 px-2">
			<a href="/" class="text-sm text-white my-2 p-2 bg-slate-500 border-2 rounded-md ">Home</a>
			<a href="/filter" class="text-sm text-white my-2  p-2 bg-slate-500 border-2 rounded-md"
				>Ausdruck erstellen</a
			>
			<a href="/map" class="text-sm text-white my-2 p-2 bg-slate-500 border-2 rounded-md "
				>Karte anzeigen</a
			>
		</nav>
	</div>
	<div class="flex flex-col w-5/6 mt-5">
		<slot />
	</div>
</div>
