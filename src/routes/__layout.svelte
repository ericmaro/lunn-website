<script>
	import '../app.postcss';
	import '../assets/css/tailwind.css';

	import logo from '../assets/images/logo-black.png';
</script>

<nav class="bg-gray-100 text-gray-800 font-poppins">
	<div class="max-w-7xl mx-auto px-4 py-3">
		<div class="flex flex-wrap lg:flex-nowrap justify-between items-center space-x-4 text-sm font-normal">

			<div class="flex space-x-2">
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<circle cx="12" cy="12" r="9"></circle>
						<polyline points="12 7 12 12 15 15"></polyline>
					 </svg>
				</span>
				<span>Mon - Fri 9:00 - 18:00</span>
			</div>

			<p>Now Hiring: Backend developer, Android Developer, Payment Systems Specialist</p>

			<div class="flex items-center space-x-3">
				<p>Social:</p>

				<div class="align-center space-x-3">
					<!-- facebook -->
					<a href="/" class="btn btn-circle btn-xs bg-transparent border-0 text-yellow-400">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
						 </svg>
					</a>

					<!-- twitter -->
					<a href="/" class="btn btn-circle btn-xs bg-transparent border-0 text-yellow-400">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
						 </svg>
					</a>

					<!-- instagram -->
					<a href="/" class="btn btn-circle btn-xs bg-transparent border-0 text-yellow-400">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<rect x="4" y="4" width="16" height="16" rx="4"></rect>
							<circle cx="12" cy="12" r="3"></circle>
							<line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
						 </svg>
					</a>
				</div>
			</div>

		</div>
	</div>
</nav>

<nav class="bg-white text-gray-800">
	<div class="max-w-7xl mx-auto">
		
		<div class="navbar">
			<div class="flex-1 px-2 mx-2">
				<img src={logo} alt="lunn-logo" class="h-20 w-auto">
			</div>

			<div class="flex-none hidden px-2 mx-2 lg:flex space-x-6">
				<div class="items-stretch hidden lg:flex text-base xl:text-lg">
					<a href="/" class="flex items-center px-3 py-2 font-medium hover:text-yellow-500">Home</a>

					<a href="/" class="flex items-center px-3 py-2 font-medium hover:text-yellow-500">Company</a>

					<a href="/" class="flex items-center space-x-2 px-3 py-2 font-medium hover:text-yellow-500">
						<span>Smart POS</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
						</svg>
					</a> 

					<a href="/" class="flex items-center space-x-2 px-3 py-2 font-medium hover:text-yellow-500">
						<span>Solutions</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
						</svg>
					</a>

					<a href="/" class="flex items-baseline space-x-2 px-3 py-2 font-medium hover:text-yellow-500">
						<span>Consultancy</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>

				<button 
					class="btn rounded-sm capitalize text-lg px-6 bg-yellow-500 border-yellow-500 flex items-center space-x-1.5 transition-all duration-500 ease-in-out">
					<span>Contact Us</span>

					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)"></path>
					</svg>
				</button>
			</div>
		</div>
	</div>
</nav>
<slot />
