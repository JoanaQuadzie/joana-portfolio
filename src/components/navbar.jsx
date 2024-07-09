import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-zinc-800 text-amber-400 py-4 font-bold fixed top-0 w-full">
      <ul className="flex space-x-3 pl-10">
        <a href="#about">ABOUT</a>
        <li>
          <a href="#achievements">ACHIEVEMENTS</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}
