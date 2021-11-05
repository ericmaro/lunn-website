<script>
    import { onMount } from "svelte";

    export let tabs = [];
    export let activeTab;

    onMount(() => {
        if (Array.isArray(tabs) && tabs.length && tabs[0].value) {
            activeTab = tabs[0].value;
        }
    })

    const onTabClick = tabValue => () => (activeTab = tabValue);
</script>

<ul class="flex justify-start items-center space-x-3 md:space-x-6 w-full">
    {#if Array.isArray(tabs)}
        {#each tabs as item}
            <li 
                class="border py-2 px-3 md:px-4 rounded-md cursor-pointer
                {activeTab === item.value ? 'border-orange-200 bg-orange-100' : 'border-gray-200 bg-gray-50'}">

                <span class="text-sm md:text-base xl:text-lg font-medium" on:click={onTabClick(item.value)}>{item.label}</span>
            </li>
        {/each}
    {/if}
</ul>