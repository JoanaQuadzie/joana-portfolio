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
            <p className="text-sm font-semibold uppercase">
              Hello, <span className="text-green-500">my name is</span>
            </p>
            <p className="text-green-500 text-3xl font-bold mt-4 uppercase">
              Joana
            </p>
            <p className="mt-4">
              I AM A
              <span className="font-bold capitalized ">Web Developer</span>
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
            <a href="@JQuadzi">
              <FaTwitter />
            </a>

            <a href="https://github.com/JoanaQuadzie">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/joana-nornor-quadzie">
              <FaLinkedin />
            </a>

            <FaStackOverflow />
          </div>
          <div className="flex justify-center mt-10">
            <a href={JoanaCV} download="Joana Quadzie CV">
              <Button>DOWNLOAD CV</Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
