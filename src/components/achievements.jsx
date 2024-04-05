import React from 'react';
import Ach from "../assets/ach.png";
import Cert from "../assets/cert.png";

export default function achievements() {
    return (
        <section id="achievements" className=" p-8 ">

            <h2 className="text-3xl font-bold text-center p-4 text-lime-700 py-6">ACHIEVEMENTS</h2>
            <div className=" flex justify-center">


                <div class="mr-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="#">
                        <img class="rounded-t-lg" src={Ach} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">1ST RUNNER UP OF GROW CODING COMPETITION</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">My group came up as the first Runner-up for a compettion that tested our ability to design a fully functional Agro E-commerce app</p>
                    </div>
                </div>

                <div class="ml-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="#">
                        <img class="rounded-t-lg" src={Cert} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-lime-700 dark:text-white">MORETON BAY REGIONAL COUNCIL CERTIFICATE</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Participated and completed a job simulation virtual internship focused on website planning and development with the Moreton Bay Regional Council</p>
                    </div>
                </div>

            </div>

        </section>
    )
}
