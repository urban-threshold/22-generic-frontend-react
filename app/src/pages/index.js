export default function IndexPage() {
    return (
        <div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 h-screen">
            <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div class="rounded-xl bg-white shadow-xl">
                        <div class="p-6 sm:p-16">
                            <div class="space-y-4">
                                <img src="imgs/logo.png" width='100' height='100' className="mx-auto" alt="CleanRoute logo" />
                                <h2 class="mb-8 text-2xl text-cyan-900 font-bold">
                                    CleanRoute
                                </h2>
                                <div class="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                                    <p class="text-sm">
                                        Here you can find more information about our GovHack project, CleanRoute.
                                    </p>
                                    <p className="text-xs">
                                        CleanRoute is a purpose-built application allowing citizens to plan their travel with sustainability in mind. 
                                        Citizens can enter their destination and they are presented with a list of sustainable travel options ranging from renting a bike to catching public transport, each with a corresponding star rating on how carbon efficient the route is. 
                                        These ratings are calculated in real time based on all available data sources (more info in hackerspace).
                                    </p>
                                </div>
                            </div>
                            <div class="mt-4 grid space-y-4">
                                <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-emerald-400 focus:bg-emerald-50 active:bg-emerald-100">
                                    <div class="relative flex items-center space-x-4 justify-center">
                                        <a href="/app">
                                            <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-emerald-600 sm:text-base">Open PoC application</span>
                                        </a>
                                    </div>
                                </button>
                                <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-emerald-400 focus:bg-emerald-50 active:bg-emerald-100">
                                    <div class="relative flex items-center space-x-4 justify-center">
                                        <a href="https://hackerspace.govhack.org/projects/crtravel" target="_blank" rel="noreferrer">
                                            <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-emerald-600 sm:text-base">Project on GovHack Hackerspace</span>
                                        </a>
                                    </div>
                                </button>
                                <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-emerald-400 focus:bg-emerald-50 active:bg-emerald-100">
                                    <div class="relative flex items-center space-x-4 justify-center">
                                        <a href="https://xd.adobe.com/view/2de5b393-3664-4e82-9aa5-06266ca7060c-78b6/?fullscreen" target="_blank" rel="noreferrer">
                                            <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-emerald-600 sm:text-base">User Interface Mocks</span>
                                        </a>
                                    </div>
                                </button>
                                <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-emerald-400 focus:bg-emerald-50 active:bg-emerald-100">
                                    <div class="relative flex items-center space-x-4 justify-center">

                                        <a href="https://xd.adobe.com/view/81a5f7f0-cdb7-4b10-b2ce-06dc33720cab-d4f6/?fullscreen" target="_blank" rel="noreferrer">
                                            <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-emerald-600 sm:text-base">Government Portal Mocks</span>
                                        </a></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}