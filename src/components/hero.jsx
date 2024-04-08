import React, { useState } from 'react';
import Bgport from "../assets/bgport.jpg";


export default function Hero() {

    return (
        <div className="flex grid-cols-2 md:grid-cols-2 pb-10">

            <div className="bg-cover bg-center bg-gradient-to-l md:bg-gradient-to-r w-full h-screen" style={{ backgroundImage: `url(${Bgport})` }}>
            </div>
            <div className="content-center bg-zinc-300">
                <h2 className="text-4xl mb-10 font-bold text-lime-700 ml-10">Hi! I'm Joana</h2>
                <p className="white ml-10">I'm a cheerful and approachable young lady eager to immerse myself in the dynamic world of technology, motivated by personal growth and the desire to embrace new challenges</p>

                <div className="btn">
                <a href="/Joana Quadzie - TECH CV.pdf" id='download-cv' download="Joana Quadzie - TECH CV.pdf"> <button type="submit" class="bg-lime-700 text-amber-500 px-4 py-2 text-sm font-semibold rounded cursor-pointer ml-10 mt-5 hover:bg-zinc-400">Download CV</button></a>

                </div>
            </div>




        </div>




    )
}
