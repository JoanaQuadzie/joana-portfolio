import React from 'react';

export default function Navbar() {
    return (
        <div>
            <div className="bg-zinc-800 text-amber-400 py-4 font-bold fixed top-0 w-full">
                <ul className="flex space-x-3 place-content-end mr-10">
                    <li>
                        <a>ABOUT</a>
                    </li>
                    <li>
                        <a>ACHIEVEMENTS</a>
                    </li>
                    <li>
                        <a>PROJECTS</a>
                    </li>
                    <li>
                        <a>CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
