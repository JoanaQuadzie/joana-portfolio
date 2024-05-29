import React from "react";
import Rightarrow from "../assets/rightarrow.png";
import Juice2 from "../assets/juice2.jpg";
import { FaArrowRight } from "react-icons/fa6";

export default function ProjectCard() {
  return (
    <article className="bg-white rounded-2xl">
      <a class="p-8 max-w-lg flex flex-col items-center" href="#">
        <img
          src={Juice2}
          class="shadow rounded-lg overflow-hidden border"
          alt="Juice"
        />
        <div class="mt-8">
          <h4 class="font-bold text-xl">DineRich JuiceBar</h4>
          <p class="mt-2 text-gray-600">
            A locally made drink hub with a unique taste which happens to be the
            preferrence of everyone upon having a sip
          </p>
          <div class="mt-5 flex space-x-4 items-center">
            <h5 className="font-bold ">See project</h5>
            <FaArrowRight className="text-[#59A587]" />
          </div>
        </div>
      </a>
    </article>
  );
}
