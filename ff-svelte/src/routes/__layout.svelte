<script>
	import '../app.css';
</script>

<div class="flex mx-2 my-10">
	<div class="min-h-full">
		<nav class="min-h-full flex flex-col mt-5 mx-5 py-2 px-2 border-2">
			<a href="/" class="text-sm p-2 bg-slate-500 border-2 rounded-md ">Home</a>
			<a href="/filter" class="text-sm p-2 bg-slate-500 border-2 rounded-md ">Ausdrücke</a>
			<a href="/map" class="text-sm p-2 bg-slate-500 border-2 rounded-md ">Map</a>
		</nav>
	</div>
	<div class="flex flex-col mt-5">
		<slot />
	</div>
</div>
