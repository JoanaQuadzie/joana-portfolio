import React, { useState } from "react";
import Bgport from "../assets/bgport.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

import Rightarrow from "../assets/rightarrow.png";

export default function Hero() {
  return (
    <div>
      <div>
        <section>
          <div className="text-center mt-16">
            <p className="text-sm font-semibold uppercase">
              Hello, <span className="text-green-500">my name is</span>
            </p>
            <p className="text-green-500 text-3xl font-bold mt-4 uppercase">
              Joana
            </p>
            <p className="mt-4">
              I AM A{" "}
              <span className="font-bold capitalized ">Web Developer</span>
            </p>
          </div>
          <div className="flex w-full justify-center">
            <img className=" w-48 border rounded-full my-12" src={Bgport} />
          </div>
          <p className="px-24 text-center">
            Meeting people,exchanging pleasantries and assisting them meet their
            needs was one thing I loved doing the most. One can attribute this
            to being a secretary or an administrative assistant where I become
            the voice of the organization to interact with customers, perform
            clerical duties and build solid work relationships.{" "}
          </p>
          <div className="flex justify-center my-6 space-x-5">
            <FaTwitter />
            <FaGithub />
            <FaLinkedin />
            <FaStackOverflow />
          </div>
          <div className="text-center mt-2 border rounded-full border-black p-4 ">
            <button className="font-bold ">DOWNLOAD CV</button>
          </div>
        </section>
      </div>
    </div>
  );
}
