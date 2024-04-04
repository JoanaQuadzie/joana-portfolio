import React from 'react';
import Ach from "../assets/ach.png";
import Cert from "../assets/cert.png";

export default function achievements() {
    return (
        <div className="text-center bg-zinc-800 text-amber-400 py-10 mb-10 flex grid-cols-2 gap-16">
            <h2 className="text-3xl font-bold text-center">ACHIEVEMENTS</h2>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-20">
                <a href="#">
                    <img class="rounded-t-lg" src={Ach} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1ST RUNNER UP OF GROW CODING COMPETITION</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">My group came up as the first Runner-up for a compettion that tested our ability to design a fully functional Agro E-commerce app</p>
                </div>
            </div>

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-20">
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
    )
}
