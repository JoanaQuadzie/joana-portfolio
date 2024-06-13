import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

export default function footer() {
  return (
    <footer className="">
      <div className="flex justify-center my-6 space-x-5">
        <FaTwitter />
        <FaGithub />
        <FaLinkedin />
        <FaStackOverflow />
      </div>
      <p className="text-center px-14 py-2 font-bold uppercase  leading-8">
        Copyright ©2024{" "}
        <span className="text-green-500 font-bold">Joana Nornor-Quadzie</span> |
        All Rights Reserved
      </p>
      <p className="text-center px-14 pb-8 font-bold uppercase">
        Developed by Alfred Doh-Nani
      </p>
    </footer>
  );
}
