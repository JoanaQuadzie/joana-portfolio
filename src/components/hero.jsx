import React from 'react';
import Bgport from "../assets/bgport.jpg";



export default function Hero() {
    return (
        <div className="flex grid-cols-2">

            <div className="bg-cover bg-center w-full h-screen" style={{ backgroundImage: `url(${Bgport})`}}>
            </div>
            <div className="content-center ml-10">
                <h2 className="text-5xl mb-10 font-bold">Hi! I'm Joana</h2>
                <p className="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni dolor unde similique suscipit nemo ipsam maiores omnis eius, iste sequi, doloremque doloribus perspiciatis dolorem consectetur. Facilis doloremque dolores dolorem?</p>
            </div>
        </div>




    )
}
