import React, { useState } from "react";
import Bgport from "../assets/bgport.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import Jira from "../assets/jira.png";
import Mongodb from "../assets/mongodb.png";
import Nodejs from "../assets/nodejs.png";
import Rightarrow from "../assets/rightarrow.png";

export default function Hero() {
  return (
    <div>
      <div>
        <p>Hello, my name is</p>
        <p>Joana</p>
        <p>I am a Web Developer</p>
        <img className="h-48 border rounded-full" src={Bgport} />
        <p className="w-1/6">
          Meeting people,exchanging pleasantries and assisting them meet their
          needs was one thing I loved doing the most. One can attribute this to
          being a secretary or an administrative assistant where I become the
          voice of the organization to interact with customers, perform clerical
          duties and build solid work relationships.{" "}
        </p>
        <div>
          <FaTwitter />
          <FaGithub />
          <FaLinkedin />
          <FaStackOverflow />
        </div>
        <button>Download CV</button>
        <h2 className="text-xl font-bold font-serif my-8">About Me</h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, odio
        cupiditate! Laudantium officiis quo enim blanditiis aliquam, quidem,
        quasi, vel est deleniti laborum inventore molestiae eaque provident
        architecto voluptas eveniet!
        <h2 className="text-xl font-bold font-serif my-8">
          Professional Skills
        </h2>
        <img src={Html} />
        <img src={Css} />
        <img src={Js} />
        <img src={Nodejs} />
        <img src={Jira} />
        <img src={Mongodb} />
        
        <h2 className="text-xl font-bold font-serif my-8">Projects</h2>
        <a class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
    <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border" />
    <div class="mt-8">
        <h4 class="font-bold text-xl">DineRich JuiceBar</h4>
        <p class="mt-2 text-gray-600">A locally made drink hub with a unique taste which happens to be the preferrence of everyone upon having a sip
        </p>
        <div class="mt-5">
            <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">See Project</button>
            <img src={Rightarrow} />
        </div>
    </div>
</a>
      </div>
      <div className=" md:grid grid-cols-2 ">
        <div
          className="bg-cover bg-center bg-gradient-to-l md:bg-gradient-to-r w-full h-screen"
          style={{ backgroundImage: `url(${Bgport})` }}
        ></div>
        <div className="content-center bg-zinc-300">
          <p className="text-5xl mb-12 font-bold text-lime-700 ml-10">
            {" "}
            Hello! My name is Joana
          </p>
          <p className="white ml-10 text-2xl">
            I'm a cheerful and approachable young lady eager to immerse myself
            in the dynamic world of technology, motivated by personal growth and
            the desire to embrace new challenges
          </p>

          <div className="btn">
            <a
              href="/Joana Quadzie - TECH CV.pdf"
              id="download-cv"
              download="Joana Quadzie - TECH CV.pdf"
            >
              {" "}
              <button
                type="submit"
                class="bg-lime-700 text-white px-4 py-2 text-sm font-semibold rounded cursor-pointer ml-10 mt-5 hover:bg-zinc-400"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
