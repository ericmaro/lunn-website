<script>
    import Tabs from "../components/Tabs.svelte";
    import companyPageImg from "../assets/images/company-page-img.png"

    let tabItems = [
        { label: "About Us", value: "about" },
        { label: "Our Mission", value: "mission" },
        { label: "Our Vision", value: "vision" }
    ];

    let currentTab;
</script>

<style>
    .bg-animated-button-1 {
        background: linear-gradient(to right, #1E3A8A 50%, #FB923C 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all .5s ease-out;
        background-size: 200% 100%;
    }
    
    .bg-animated-button-1:hover {
        background-position: left bottom;
    }
</style>

<div class="bg-gray-50">
    <div class="container mx-auto px-6 py-12 lg:py-24 font-josefin">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    
            <div class="space-y-10">
                <Tabs bind:activeTab={currentTab} tabs={tabItems} />
    
                {#if "about" === currentTab}
                    <section class="space-y-8">
                        <h2 class="text-xl lg:text-2xl 2xl:text-4xl font-bold">Who We Are</h2>
        
                        <p class="text-gray-500 text-base lg:text-lg xl:text-xl">
                            We are a technology company transforming Africa through the innovative, 
                            state of the art tailor-made software solutions for the banking and financial sector. 
                            We operate on a sustainable commercial footing and are convinced that economic IMPACT is 
                            best achieved through developing a vibrant and resilient SME sector. Lunn-Tech has been a market 
                            leader in the provision of affordable innovative solutions within the continent by being the 
                            center bolt upon which multiple transactions are anchored through our solutions. We boast of;
                        </p>
    
                        <ul class="grid grid-cols-1 gap-6 text-base 2xl:text-lg">
                            <li class="flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Certified Professional Team of Experts</span>
                            </li>
    
                            <li class="flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Exhaustive Market Research Analysis</span>
                            </li>
                        </ul>
    
                        <button class="btn btn-lg rounded capitalize text-lg px-8 border-none bg-animated-button-1 flex items-center space-x-1.5">
                            <span>View Details</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)"></path>
                            </svg>
                        </button>
    
                    </section>
                {/if}
    
                {#if "mission" === currentTab}
                    <section class="space-y-8">
                        <h2 class="text-xl lg:text-2xl 2xl:text-4xl font-bold">Mission Statement</h2>
        
                        <p class="text-gray-500 text-base lg:text-lg xl:text-xl">
                            Our Mission is to enable People and Business accross the African Continent to 
                            realise their full Potential.
                        </p>
    
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 text-base 2xl:text-lg">
                            <li class="flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Enrich Lifestyle of People</span>
                            </li>
    
                            <li class="flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Evolve With New Trends</span>
                            </li>
    
                            <li class="flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Adapt New Technology</span>
                            </li>
    
                            <li class="flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Enable Collaborative Efforts</span>
                            </li>
                        </ul>
    
                        <button class="btn btn-lg rounded capitalize text-lg px-8 border-none bg-animated-button-1 flex items-center space-x-1.5">
                            <span>View Details</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)"></path>
                            </svg>
                        </button>
    
                    </section>
                {/if}
    
                {#if "vision" === currentTab}
                    <section class="space-y-8">
                        <h2 class="text-xl lg:text-2xl 2xl:text-4xl font-bold">Our Long Term Vision</h2>
        
                        <p class="text-gray-500 text-base lg:text-lg xl:text-xl">
                            Our Vision is create a convinient  everyday life for people.
                        </p>
    
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 text-base 2xl:text-lg">
                            <li class="flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Excellence In Payment Solutions</span>
                            </li>
    
                            <li class="flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Economic Prosperity For All</span>
                            </li>
    
                            <li class="flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Full Potential of Technology</span>
                            </li>
    
                            <li class="flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Attain Business Success</span>
                            </li>
                        </ul>
    
                        <button class="btn btn-lg rounded capitalize text-lg px-8 border-none bg-animated-button-1 flex items-center space-x-1.5">
                            <span>View Details</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)"></path>
                            </svg>
                        </button>
    
                    </section>
                {/if}
            </div>
    
            <div class="relative flex justify-center">
                <img src={companyPageImg} alt="5343" class="object-center">
                <div class="absolute insert-0 w-full h-full">
                    <div class="flex justify-center items-center w-full h-full">
                        <div class="flex justify-center items-center animate-pulse bg-orange-400 h-16 w-16 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
</div>