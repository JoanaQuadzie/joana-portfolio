import React, { useState } from 'react';
import Bgport from "../assets/bgport.jpg";


export default function Hero() {

    const [showOptions, setShowOptions] = useState(false);
    const toggleOptions = () => {
        setShowOptions(!showOptions)
    }; 

    return (
        <div className="flex grid-cols-2 pb-10">

            <div className="bg-cover bg-center w-full h-screen" style={{ backgroundImage: `url(${Bgport})` }}>
            </div>
            <div className="content-center bg-zinc-300">
                <h2 className="text-4xl mb-10 font-bold text-lime-700 ml-10">Hi! I'm Joana</h2>
                <p className="white ml-10">I'm a cheerful and approachable young lady eager to immerse myself in the dynamic world of technology, motivated by personal growth and the desire to embrace new challenges</p>

                <div className="btn">
                <div className="dropdown">
                <button class="bg-lime-700 text-amber-500 px-4 py-2 text-sm font-semibold rounded cursor-pointer ml-10 mt-5 hover:bg-zinc-400">Download CV</button>

                    {showOptions && (
                        <div className="dropdown-content">
                            <a href="https://drive.google.com/file/d/1qgNIbfHlh5mFA7hzgY3sMRVNpDYBx2wa/view?usp=sharing">View CV</a>
                            <a href="/Jennifer Agbeli's Resume - Tech.docx.pdf" download="Jennifer Agbeli's Resume - Tech.docx.pdf">Download PDF</a>
                        </div>
                    )}
                </div>
            </div>
            </div>
            
            


        </div>




    )
}
