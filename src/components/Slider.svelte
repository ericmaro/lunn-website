<script>
    import Slider_1 from '../assets/images/slider/slider_1.jpg';
    import Slider_2 from '../assets/images/slider/slider_2.jpg';
    import Slider_3 from '../assets/images/slider/slider_3.jpg';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let activeSlider = 0;
    let sliders = [
        { imgSource: Slider_1, title: "Creative Payment Solutions", labels: ["Merchant & Retail Acquiring", "Mobile & Agency Banking"] },
        { imgSource: Slider_2, title: "Next Generation Smart POS Terminals", labels: ["Robust", "Artistic Design"] },
        { imgSource: Slider_3, title: "Next Generation Smart POS Terminals", labels: ["Web based Platform"] },
    ]

    onMount(() => {
		const interval = setInterval(() => {
            activeSlider < sliders.length - 1 ? activeSlider += 1 : activeSlider = 0;
		}, 4000);

		return;
	});
</script>

<style>
.bg-animated-button-2 {
	background: linear-gradient(to right, white 50%, #FB923C 50%);
	background-size: 200% 100%;
	background-position: right bottom;
	transition: all .5s ease-out;
}

.bg-animated-button-2:hover {
	background-position: left bottom;
    color: #FB923C;
}
</style>

<div class="overflow-hidden">
    <section class="relative">
    {#each sliders as slider, index}
        <figure class="h-44 md:h-52 2xl:h-64" transition:fade>
            {#if index == activeSlider}
                <img src={slider.imgSource} alt="slider" class="absolute left-0 inset-y-0 h-full w-full md:w-3/5 lg:w-4/6 2xl:w-9/12 object-cover">
                <figcaption class="absolute z-10 right-0 top-24 2xl:top-40 space-y-8 bg-blue-900 text-white w-2/3 lg:w-1/2 2x:lw-1/3 px-10 py-16">
                    <div class="space-y-1.5">
                        <p class="text-5xl text-orange-400">Creative Payment</p>
                        <p class="text-6xl font-bold">SOLUTIONS</p>
                    </div>
                    <button 
                        class="btn 2xl:btn-lg rounded capitalize text-sm md:text-lg px-6 bg-animated-button-2 flex items-center space-x-1.5 mt-4">
                        <span>Getting Started</span>

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)"></path>
                        </svg>
                    </button>
                </figcaption>
                
                <div class="absolute right-0 inset-y-0 flex flex-col justify-end space-y-3 bg-blue-900 text-white bg-opacity-90 md:w-2/5 lg:w-2/6 2xl:w-3/12 px-6 2xl:px-12 py-20 h-full">
                    {#each slider.labels as label}
                        <p class="flex items-baseline space-x-2 uppercase text-base lg:text-lg 2xl:text-2xl">
                            <span class="h-4 w-4 bg-orange-400"></span>
                            <span>{label}</span>
                        </p>
                    {/each}
                </div>
            {/if}
        </figure>
    {/each}
    </section>
</div>