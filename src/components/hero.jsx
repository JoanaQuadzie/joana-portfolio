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
          <p>Hello, my name is</p>
          <p>Joana</p>
          <p>I am a Web Developer</p>
          <img className="h-48 border rounded-full" src={Bgport} />
          <p className="w-1/6">
            Meeting people,exchanging pleasantries and assisting them meet their
            needs was one thing I loved doing the most. One can attribute this
            to being a secretary or an administrative assistant where I become
            the voice of the organization to interact with customers, perform
            clerical duties and build solid work relationships.{" "}
          </p>
          <div>
            <FaTwitter />
            <FaGithub />
            <FaLinkedin />
            <FaStackOverflow />
          </div>
          <button>Download CV</button>
        </section>
      </div>
    </div>
  );
}
