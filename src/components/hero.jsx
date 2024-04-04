import React from 'react';
import Bgport from "../assets/bgport.jpg";



export default function Hero() {
    return (
        <div className="flex grid-cols-2 pb-10">

            <div className="bg-cover bg-center w-full h-screen" style={{ backgroundImage: `url(${Bgport})`}}>
            </div>
            <div className="content-center bg-zinc-300">
                <h2 className="text-4xl mb-10 font-bold text-lime-700 ml-10">Hi! I'm Joana</h2>
                <p className="white ml-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni dolor unde similique suscipit nemo ipsam maiores omnis eius, iste sequi, doloremque doloribus perspiciatis dolorem consectetur. Facilis doloremque dolores dolorem?</p>
            </div>
            

        </div>




    )
}
