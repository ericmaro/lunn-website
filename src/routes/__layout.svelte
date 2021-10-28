<script>
	import '../app.postcss';
</script>

<nav class="bg-gray-200">
	<div class="max-w-7xl mx-auto px-4">
		<div class="navbar">
			<div class="flex-1 px-2 mx-2">
				<p>Mon - Fri 9:00 - 18:00</p>
			</div>
			<div>
				<p>Now Hiring: Backend developer, Android Developer, Payment Systems Specialist</p>
			</div>
			<div class="flex-none hidden px-2 mx-2 lg:flex">
				<div class="align-center">
					<a class="btn btn-ghost btn-sm rounded-btn"> F </a>
					<a class="btn btn-ghost btn-sm rounded-btn"> T </a>
					<a class="btn btn-ghost btn-sm rounded-btn"> I </a>
					
				</div>
			</div>
		</div>
	</div>
</nav>
<nav class="bg-white">
	<div class="max-w-7xl mx-auto px-4">
		
		<div class="navbar">
			<div class="flex-1 px-2 mx-2">
				<span class="text-lg font-bold"> daisyUI </span>
			</div>
			<div class="flex-none hidden px-2 mx-2 lg:flex">
				<div class="align-center">
					<a class="btn btn-ghost btn-sm rounded-btn"> Likes </a>
					<a class="btn btn-ghost btn-sm rounded-btn"> Notifications </a>
					<a class="btn btn-ghost btn-sm rounded-btn"> Files </a>
					<a class="btn btn-ghost btn-sm rounded-btn"> Config </a>
					<button class="btn w-40 btn-square"> Contact us </button>
				</div>
			</div>
		</div>
	</div>
</nav>
<slot />
