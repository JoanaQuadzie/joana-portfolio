import React from "react";
import Rightarrow from "../assets/rightarrow.png";
import Juice2 from "../assets/juice2.jpg";
import { FaArrowRight } from "react-icons/fa6";

export default function ProjectCard(props) {
  const { title, description, link, image } = props;
  return (
    <article className="bg-white rounded-2xl">
      <a className="p-8 max-w-lg flex flex-col items-center" href="#">
        <img
          src={image}
          className="shadow rounded-lg overflow-hidden border h-36 w-full"
          alt="Juice"
        />
        <div className="mt-8">
          <h4 className="font-bold text-xl">{title}</h4>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-5 flex space-x-4 items-center">
            <h5 className="font-bold ">See project</h5>
            <FaArrowRight className="text-[#59A587]" />
          </div>
        </div>
      </a>
    </article>
  );
}
