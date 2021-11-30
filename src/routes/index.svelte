<svelte:head>
	  <title>Lunn</title>
</svelte:head>

<script>
    import home_product_2 from '../assets/images/home-product-2.jpeg';
    import andoid_pos_2 from '../assets/images/andoid_pos_2.png';
    import desktop_pos from '../assets/images/desktop_pos.png';
    import android_pos_mini from '../assets/images/android_pos_mini.png';
    import payment from '../assets/images/payments.png';

    import Slider from '../components/Slider.svelte';
</script>

<style>
.middle_section {
    background-image: url("../assets/images/payments_2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

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

<Slider />

<div class="container-fluid">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
            <h2 class="text-xl lg:text-2xl 2xl:text-4xl font-bold uppercase">Our Solutions</h2>
            <div class="w-16 bg-orange-400 h-1 mt-1.5"></div>

            <p class="mt-3 text-sm md:text-base lg:text-lg xl:text-xl">
                Over the years, Financial Institution and Payment Processing Companies across Africa have trusted Lunn-Tech to provide them with excellent Payment solutions and many other consultancy Services as listed;
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-josefin">

            <div class="card border border-gray-100 shadow-lg">
                <div class="card-body">
                    <div class="card-title">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                        <h2 class="font-semibold text-lg lg:text-2xl mb-1">ESB Gateway</h2>
                        <a href="/" class="text-orange-400 text-sm 2xl:text-base">View Details</a>
                    </div>
                </div>
            </div>

            <div class="card border border-gray-100 shadow-lg">
                <div class="card-body">
                    <div class="card-title">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-orange-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="7" y="4" width="10" height="16" rx="1"></rect>
                            <line x1="11" y1="5" x2="13" y2="5"></line>
                            <line x1="12" y1="17" x2="12" y2="17.01"></line>
                        </svg>
                    </div>
                    <div>
                        <h2 class="font-semibold text-lg lg:text-2xl mb-1">Mobile Banking</h2>
                        <a href="/" class="text-orange-400 text-sm 2xl:text-base">View Details</a>
                    </div>
                </div>
            </div>

            <div class="card border border-gray-100 shadow-lg">
                <div class="card-body">
                    <div class="card-title">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h2 class="font-semibold text-lg lg:text-2xl mb-1">Internet Banking</h2>
                        <a href="/" class="text-orange-400 text-sm 2xl:text-base">View Details</a>
                    </div>
                </div>
            </div>

            <div class="card border border-gray-100 shadow-lg">
                <div class="card-body">
                    <div class="card-title">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-orange-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="3" y1="21" x2="21" y2="21"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                            <polyline points="5 6 12 3 19 6"></polyline>
                            <line x1="4" y1="10" x2="4" y2="21"></line>
                            <line x1="20" y1="10" x2="20" y2="21"></line>
                            <line x1="8" y1="14" x2="8" y2="17"></line>
                            <line x1="12" y1="14" x2="12" y2="17"></line>
                            <line x1="16" y1="14" x2="16" y2="17"></line>
                        </svg>
                    </div>
                    <div>
                        <h2 class="font-semibold text-lg lg:text-2xl mb-1">Agency Banking</h2>
                        <a href="/" class="text-orange-400 text-sm 2xl:text-base">View Details</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<div class="middle_section text-white">
    <div class="bg-blue-900 bg-opacity-70">
        <div class="container mx-auto px-6 md:px-12 xl:px-24 py-12 lg:py-24">
            <div class="flex justify-start items-center space-x-10">

                <div class="">
                    <p class="font-medium text-3xl lg:text-4xl 2xl:text-5xl mb-1">Over</p>
                    <p class="font-bold text-7xl lg:text-9xl xl:large-text">115<small>+</small></p>
                </div>

                <div class="w-auto md:w-1/4">
                    <p class="font-medium text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl">Projects was completely successfully</p>
                </div>
            </div>
        </div>
    </div>    
</div>

<div class="container-fluid">
    <div>
        <h2 class="text-xl lg:text-2xl 2xl:text-4xl font-bold uppercase">Our Services</h2>
        <div class="w-16 bg-orange-400 h-1 mt-1.5"></div>

        <h4 class="text-lg lg:text-xl font-medium capitalize mt-6">
            We provide the best consultancy services for your business
        </h4>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

        <div class="card border border-gray-100 shadow-lg">
            <div class="card-body">
                <div class="card-title">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-orange-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 12l2 2l4 -4"></path>
                        <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
                    </svg>
                </div>
                <div>
                    <h2 class="font-medium text-lg lg:text-2xl mb-1">System <br/> Audits</h2>
                </div>
            </div>
        </div>

        <div class="card border border-gray-100 shadow-lg">
            <div class="card-body">
                <div class="card-title">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-orange-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="5" y="3" width="14" height="18" rx="1"></rect>
                        <circle cx="12" cy="17" r="1"></circle>
                     </svg>
                </div>
                <div>
                    <h2 class="font-medium text-lg lg:text-2xl mb-1">Infrastructure Design and Implementation</h2>
                </div>
            </div>
        </div>

        <div class="card border border-gray-100 shadow-lg">
            <div class="card-body">
                <div class="card-title">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-orange-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="3" y="15" width="6" height="6" rx="2"></rect>
                        <rect x="15" y="15" width="6" height="6" rx="2"></rect>
                        <rect x="9" y="3" width="6" height="6" rx="2"></rect>
                        <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"></path>
                        <line x1="12" y1="9" x2="12" y2="12"></line>
                    </svg>
                </div>
                <div>
                    <h2 class="font-medium text-lg lg:text-2xl mb-1">Project <br/> Management</h2>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div>
        <h2 class="text-xl lg:text-2xl 2xl:text-4xl font-bold uppercase">Products</h2>
        <div class="w-16 bg-orange-400 h-1 mt-1.5"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-center">
        <div class="space-y-6">
            <h2 class="text-lg md:text-xl xl:text-3xl font-semibold uppercas">Non Payment POS</h2>

            <p class="text-sm md:text-base lg:text-lg xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <button class="btn px-6 rounded-sm capitalize bg-orange-400 border-orange-400">Find out more</button>
        </div>

        <div class="">
            <img src={home_product_2} class="object-cover rounded-md h-auto w-full" alt="placeholder">
        </div>
    </div>
</div>

<div class="container-fluid">

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-24">
         <div class="space-y-4">
            <h2 class="text-lg lg:text-2xl 2xl:text-4xl font-semibold capitalize">MPOS Card <br> Reader</h2>
 
            <img src={andoid_pos_2} alt="placeholder" class="w-full rounded">

            <div class="text-sm xl:text-base leading-6 space-y-4">
                <p>
                    MPOS Card Reader features a high light mirror, beautiful shape, non-slip design, to enhance the user experience with a 2.0-inch color LCD display screen, clear and bright display color.
                </p>
                <p>
                    It works a very Flexible Platform, Bluetooth 4.0, IOS / Android compatible Inbuilt contactless module, supports Union pay, Apple Pay and Android Pay.
                </p>

                <ul class="list-inside list-disc">
                    <li>PCI PTS 5.X and CUP security standards certified</li>
                    <li>High-level security chip and Multiple tampering and disassemble self-destruction mechanism</li>
                    <li>Supports DES, 3DES algorithm, effectively secure the cardholder</li>
                </ul>
            </div>
            
 
            <button class="btn px-6 rounded-sm capitalize border-orange-400 bg-orange-400 mt-3">Find out more</button>
         </div>
 
         <div class="space-y-4">
            <h2 class="text-lg lg:text-2xl 2xl:text-4xl font-semibold capitalize">Android Desktop <br> Terminal</h2>
  
            <img src={desktop_pos} alt="placeholder" class="w-full rounded">

            <div class="text-sm xl:text-base leading-6 space-y-4">
                <p>
                    Smart Android Desktop POS provides more space and more possibilities. With 10.1 HD IPS Enhancement technology on touch, D3 makes touch smoother. 2-inch built-in printer with auto-cut in Android desktop POS print swiftly and smoothly. Lithium Polymer battery 2600mAh@ 7.4V provides a full 2 Hour battery work without power supply.
                </p>
                <p>
                    With remote control function on Android mobile POS, technician can control user's device remotely just like operating a local device. The problem can be easily found and solved with user's help.
                </p>
            </div>
  
            <button class="btn px-6 rounded-sm capitalize border-orange-400 bg-orange-400 mt-3">Find out more</button>
         </div>
 
         <div class="space-y-4">
            <h2 class="text-lg lg:text-2xl 2xl:text-4xl font-semibold capitalize">Android Mini<br> POS</h2>

            <img src={android_pos_mini} alt="placeholder" class="w-full rounded">

            <div class="text-sm xl:text-base leading-6 space-y-4">
                <p>Light and thin, easy to operate with one hand, P5 Liberate the other hand of the waiter. It delivers strong performance through the operation system powered by Android 10.0 and MT6739 ARM quad core cortex-A53high-speed processor.</p>
                <p>
                    The P3 enables all payment methods, from EMV Contactless or chip & PIN/chip & sign to traditional swipe methods. It also supports new methods such as NFC couponing or mobile wallets. Providing full-spectrum wireless connectivity with embedded 4G/3G/2G and Wi-Fi, the Toast Go2 enables payment acceptance anywhere while optimizingcommunication costs.
                </p>
            </div>

            <button class="btn px-6 rounded-sm capitalize border-orange-400 bg-orange-400 mt-3">Find out more</button>
         </div>
    </div> 
</div>

<div class="bg-red-800 relative py-24 md:py-12 2xl:py-24">

    <div class="bg-black w-full py-64">
        <div class="absolute inset-0 z-10 container mx-auto flex w-full">
        
            <div class="bg-white border border-gray-100 shadow-lg rounded-md w-full lg:w-3/4 xl:w-7/12 2xl:w-1/2 py-12 px-6">
                <h1 class="text-xl lg:text-2xl 2xl:text-4xl font-bold text-center capitalize mb-6">Get in touch</h1>
    
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-12 mb-4 2xl:mb-8">
                    <div class="flex flex-col">
                        <label for="" class="font-semibold">First Name</label>
                        <input 
                            type="text"
                            class="border-b border-gray-100 py-4 placeholder-gray-500 placeholder-opacity-70 focus:border-gray-200 focus:outline-none" 
                            placeholder="Your First Name">
                    </div>
    
                    <div class="flex flex-col">
                        <label for="" class="font-semibold">Last Name</label>
                        <input 
                            type="text"
                            class="border-b border-gray-100 py-4 placeholder-gray-500 placeholder-opacity-70 focus:border-gray-200 focus:outline-none" 
                            placeholder="Your Last Name">
                    </div>
                </div>
    
                <div class="flex flex-col mb-4 2xl:mb-8">
                    <label for="" class="font-semibold">Your Email Address</label>
                    <input 
                        type="email"
                        class="border-b border-gray-100 py-4 placeholder-gray-500 placeholder-opacity-70 focus:border-gray-200 focus:outline-none" 
                        placeholder="Your Email Address">
                </div>
    
                <div class="flex flex-col mb-4 2xl:mb-8">
                    <label for="" class="font-semibold">Your Reason of Contact</label>
                    <input 
                        type="text"
                        class="border-b border-gray-100 py-4 placeholder-gray-500 placeholder-opacity-70 focus:border-gray-200 focus:outline-none" 
                        placeholder="Business">
                </div>
    
                <div class="flex flex-col mb-4 2xl:mb-8">
                    <label for="" class="font-semibold">Start Writing From Here</label>
    
                    <textarea 
                        class="border-b border-gray-100 py-4 placeholder-gray-500 placeholder-opacity-70 focus:border-gray-200 focus:outline-none" placeholder="Lorem Ipsum is simply dummy text of the printing and .."
                        rows="2"></textarea>
                </div>
    
                <button class="btn px-6 rounded-sm capitalize border-orange-400 bg-orange-400">Submit</button>
            </div>
    
        </div>
    </div>
</div>

