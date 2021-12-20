<script>
    import { onMount } from "svelte";

    let container;
	let map;
	let zoom = 8;
    let center = { lat: -0.018153, lng: 5.556034 };

    onMount(async () => {
        const options = {
            zoom,
            center,
            styles: []
        };
        
		map = new google.maps.Map(container, options);
	});
</script>

<div class="w-full max-h-full" bind:this={container}></div>