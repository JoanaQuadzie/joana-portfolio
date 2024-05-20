import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

export default function footer() {
  return (
    <footer>
      <div>
        <FaTwitter />
        <FaGithub />
        <FaLinkedin />
        <FaStackOverflow />
      </div>
      <p>Copyright ©2024 Joana Nornor-Quadzie | All Rights Reserved</p>
    </footer>
  );
}
