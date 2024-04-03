import React from 'react';

export default function Navbar() {
    return (
        <div className="bg-black text-white py-4 text-left">
            <div className="place-content-center">
                <ul className="flex space-x-3">
                    <li>
                        <a>ABOUT</a>
                    </li>
                    <li>
                        <a>EDUCATION</a>
                    </li>
                    <li>
                        <a>SKILLS</a>
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
