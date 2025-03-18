import React, { useState } from "react";
import Bgport from "../assets/bgport.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import Button from "../components/button";
import JoanaCV from "../assets/JoanaCV.pdf";

export default function Hero() {
  return (
    <div>
      <div>
        <section>
          <div className="text-center mt-28">
            <p className="text-lg">
              Hello, <span className="text-black">my name is</span>
            </p>
            <p className="text-yellow-900 text-3xl font-bold mt-4 uppercase">
              Joana
            </p>
          </div>
          <div className="flex w-full justify-center">
            <img className=" w-48 border rounded-full my-12" src={Bgport} />
          </div>
          <p className="px-24 text-center text-lg">
            I'm a people-oriented person, thus, I have a natural inclination
            towards roles that involve interacting with and assisting people.
            Despite not pursing my dream careers, I challenged myself, diving
            into a field of zero prior knowledge and now thriving amazingly
          </p>
          <div className="flex justify-center my-6 space-x-5">
            <div className="relative group">
              <a
                href="https://twitter.com/JQuadzi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl" />
              </a>
              <span className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                Twitter
              </span>
            </div>

            <div className="relative group">
              <a
                href="https://github.com/JoanaQuadzie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-gray-700 hover:text-gray-900" />
              </a>
              <span className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                GitHub
              </span>
            </div>

            <div className="relative group">
              <a
                href="https://www.linkedin.com/in/joana-nornor-quadzie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <span className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                LinkedIn
              </span>
            </div>

            <div className="relative group">
              <FaStackOverflow className="text-xl" />
              <span className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-700 ">
                Stack Overflow
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
