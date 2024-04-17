import React from 'react';
import Foodcart from "../assets/foodcart.png";
import Movies from "../assets/movies.png";
import Juice3 from "../assets/juice3.jpg";
import Port2 from "../assets/port2.jpg";

export default function projects() {
    return (
        <div>
        <div id="projects" className="bg-zinc-300 text-lime-700 py-10">
            <h2 className="text-center py-8 font-bold text-3xl">Find My Exciting Projects</h2>
            <section className="grid grid-cols-1 md:grid-cols-4">
                
                
            <a href="#" class="flex flex-col items-center bg-zinc-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ml-5 mt-8" src={Foodcart} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-lime-900 dark:text-white">Opal Foodcart</h5>
        <a href="https://github.com/Opal-Organic-Market/Opal-Foodcart.git" class="inline-flex items-center px-3 py-2 mb-3 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-amber-900 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                            Github
                        </a>
                        <a href="https://opal-foodcart.vercel.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-amber-900 dark:bg-blue-600 dark:hover:bg-blue-700">
                            Live demo
                        </a>   
     </div>
     </a>

      
     <a href="#" class="flex flex-col items-center bg-zinc-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ml-5 mt-8" src={Movies} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-lime-900 dark:text-white">TMDB Search APP</h5>
        <a href="https://github.com/Opal-Organic-Market/movieSearchApp" class="inline-flex items-center px-3 py-2 mb-3 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-amber-900 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                            Github
                        </a>
                        <a href="https://movie-search-app-phi-topaz.vercel.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-amber-900 dark:bg-blue-600 dark:hover:bg-blue-700">
                            Live demo
                        </a>   
     </div>
     </a>

    <a href="#" class="flex flex-col items-center bg-zinc-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ml-5 mt-8" src={Juice3} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-lime-900 dark:text-white">DineRich JuiceBar</h5>
        <a href="https://github.com/JoanaQuadzie/Landing.git" class="inline-flex items-center px-3 py-2 mb-3 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-amber-900 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                            Github
                        </a>
                        <a href="https://landing-92bx.vercel.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-amber-900 dark:bg-blue-600 dark:hover:bg-blue-700">
                            Live demo
                        </a>   
     </div>
     </a>


     <a href="#" class="flex flex-col items-center bg-zinc-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ml-5 mt-8" src={Port2} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-lime-900 dark:text-white">Portfolio</h5>
        <a href="https://github.com/Opal-Organic-Market/Portfolio-" class="inline-flex items-center px-3 py-2 mb-3 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-amber-900 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                            Github
                        </a>
                        <a href="https://portfolio-mu-two-59.vercel.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-amber-900 dark:bg-blue-600 dark:hover:bg-blue-700">
                            Live demo
                        </a>   
     </div>
     </a>



     </section>
    </div>
    </div>
    )

}
