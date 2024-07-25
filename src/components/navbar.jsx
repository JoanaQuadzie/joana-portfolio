import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-green-600 text-gray-900 py-4 font-bold fixed top-0 w-full items-center">
      <ul className="flex space-x-3 pl-10">
        <a href="#about">ABOUT</a>
        <li>
          <a href="#skills">SKILLS</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          <a href="#testimonials">TESTIMONIALS</a>
        </li>
        <li>
          <a href="#blog">BLOG</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}
