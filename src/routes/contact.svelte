<style>
.form-background {
    background-image: url("https://images.pexels.com/photos/5239877/pexels-photo-5239877.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.form-background::after {
    content: "";
    background: cornflowerblue;
}
</style>


<div class="bg-gray-50">
    <div class="container mx-auto px-4 font-josefin">

        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div>
                map
            </div>

            <div class="form-background w-full">
                <div class="bg-blue-900 bg-opacity-80 text-white px-6 py-12 lg:py-24">
                    <h1 class="text-xl lg:text-2xl 2xl:text-4xl font-bold text-center capitalize mb-10">Get in touch</h1>
            
                    <div class="space-y-4 lg:space-y-10">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-12">
                            <div class="flex flex-col">
                                <label for="" class="font-semibold">First Name</label>
                                <input 
                                    type="text"
                                    class="border-b border-gray-100 bg-transparent py-2 placeholder-white focus:border-orange-400 focus:outline-none" 
                                    placeholder="first name">
                            </div>
            
                            <div class="flex flex-col">
                                <label for="" class="font-semibold">Last Name</label>
                                <input 
                                    type="text"
                                    class="border-b border-gray-100 bg-transparent py-2 placeholder-white focus:border-orange-400 focus:outline-none" 
                                    placeholder="last name">
                            </div>
                        </div>
            
                        <div class="flex flex-col">
                            <label for="" class="font-semibold">Your Email Address</label>
                            <input 
                                type="email"
                                class="border-b border-gray-100 bg-transparent py-2 placeholder-white focus:border-orange-400 focus:outline-none" 
                                placeholder="example@mail.com">
                        </div>
            
                        <div class="flex flex-col">
                            <label for="" class="font-semibold">Your Reason of Contact</label>
                            <input 
                                type="text"
                                class="border-b border-gray-100 bg-transparent py-2 placeholder-white focus:border-orange-400 focus:outline-none" 
                                placeholder="business">
                        </div>
            
                        <div class="flex flex-col">
                            <label for="" class="font-semibold">Start Writing From Here</label>
            
                            <textarea 
                                class="border-b border-gray-100 bg-transparent py-2 placeholder-white focus:border-orange-400 focus:outline-none" 
                                placeholder="Lorem Ipsum is simply dummy text of the printing and .."
                                rows="2"></textarea>
                        </div>
            
                        <button class="btn px-10 rounded-sm capitalize border-orange-400 bg-orange-400 hover:border-blue-900 hover:bg-blue-900">Submit</button>
                    </div> 
                </div>    
            </div> 

        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12 lg:py-24">
    
            <div class="bg-white rounded-lg shadow-md text-center space-y-4 py-6 px-4">
                <span class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 xl:h-20 xl:w-20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1E3A8A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="3 9 12 15 21 9 12 3 3 9" stroke="#FB923C"  />
                        <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                        <line x1="3" y1="19" x2="9" y2="13" stroke="#FB923C" />
                        <line x1="15" y1="13" x2="21" y2="19" stroke="#FB923C" />
                    </svg>
                </span>

                <h2 class="text-lg lg:text-2xl 2xl:text-4xl font-bold">Contact With Mail</h2>
                <p class="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl">
                    helpDesk@lunn-tech.com
                </p>
            </div>

            <div class="bg-white rounded-lg shadow-md text-center space-y-4 py-6 px-4">
                <span class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 xl:h-20 xl:w-20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" fill="#FB923C" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" stroke="#1E3A8A" />
                        <path d="M15 7a2 2 0 0 1 2 2" stroke="#1E3A8A" />
                        <path d="M15 3a6 6 0 0 1 6 6" stroke="#1E3A8A" />
                    </svg>
                </span>

                <h2 class="text-lg lg:text-2xl 2xl:text-4xl font-bold">Phone Support</h2>
                <p class="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl">
                    +1 917 810 4480
                </p>
            </div>

            <div class="bg-white rounded-lg shadow-md text-center space-y-4 py-6 px-4">
                <span class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg"  class="h-16 w-16 xl:h-20 xl:w-20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1E3A8A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="11" r="3" stroke="#FB923C" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                </span>

                <h2 class="text-lg lg:text-2xl 2xl:text-4xl font-bold">Address</h2>
                <p class="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl">
                    21 Salamander Close, Comm. 18. Tema. Ghana
                </p>
            </div>
    
        </div>
    </div>
</div>