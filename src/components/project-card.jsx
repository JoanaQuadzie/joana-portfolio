import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  const { title, description, id, image } = props;
  return (
    <article className="bg-white rounded-2xl">
      <div className="p-8 max-w-lg flex flex-col items-center">
        <Link to={`/projects/${id}`}>
          <img
            src={image}
            className="shadow rounded-lg overflow-hidden border h-36 w-full"
            alt="Juice"
          />
        </Link>
        <div className="mt-8">
          <Link to={`/projects/${id}`}>
            <h4 className="font-bold text-xl">{title}</h4>
          </Link>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-5 flex space-x-4 items-center">
            <Link to={"/projects/" + id}>
              <h5 className="font-bold ">See project</h5>
            </Link>
            <FaArrowRight className="text-[#59A587]" />
          </div>
        </div>
      </div>
    </article>
  );
}
