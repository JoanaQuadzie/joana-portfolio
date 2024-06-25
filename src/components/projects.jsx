import React from "react";
import ProjectCard from "./project-card";
import Button from "./button";
import Juice2 from "../assets/juice2.jpg";
import foodcart from "../assets/foodcart.png";
import Diash from "../assets/diash.png";
import { Link } from "react-router-dom";

const projectList = [
  {
    title: "DineRich JuiceBar",
    description:
      "A locally made drink hub with a unique taste which happens to be the preferrence of everyone upon having a sip",
    image: Juice2,
    id: 1,
  },
  {
    title: "Opal Foodcart",
    description:
      "A Food Market agricultural community which takes pride in connecting consumers with fresh, wholesome goods while supporting local growers digitally",
    image: foodcart,
    id: 2,
  },
  {
    title: "Diashi-Nam",
    description:
      "An online market place where you get to shop from the comfort of your homes and have items delivered to you in a few minutes",
    image: Diash,
    id: 3,
  },
];
export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mt-24 mb-4 uppercase tracking-wider text-center">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 gap-12 px-8 md:grid-cols-3 ">
        {projectList.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            id={project.id}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/projects">
          <Button>VIEW MORE</Button>
        </Link>
      </div>
    </section>
  );
}
