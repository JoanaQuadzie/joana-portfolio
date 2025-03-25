import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/button";
import { getProject } from "../Utils/util";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function Projectpage() {
  const params = useParams();
  const id = params.id;
  const project = getProject(id);

  return (
    <div className="px-8">
      <a
        href="/projects"
        className="flex items-center space-x-3 text-lg relative top-14 hover:cursor-pointer"
      >
        <MdOutlineArrowBackIos size={20} />
        <p>Projects</p>
      </a>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-4xl font-bold mb-10 mt-24">{project.title}</h2>
        <Button>LIVE PREVIEW</Button>
      </div>

      <div>
        <img className="md:h-[700px] " src={project.image} alt="juicebar" />
      </div>

      <div className="my-14">
        <p className="font-bold text-4xl mb-10">Stack:</p>
        <p className="text-xl">{project.stack}</p>
      </div>

      <div className="my-14">
        <h2 className="font-bold text-4xl mb-10">Description</h2>
        <h3>{project.description}</h3>
      </div>
      {project.challenges && (
        <div>
          <h2 className="font-bold text-4xl mb-10">Challenges</h2>
          <div>{project.challenges}</div>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-5 mt-14">
        {project.screenshots.map((screenshot, index) => (
          <img className="md:h-[350px]" key={index} src={screenshot} />
        ))}
      </div>
      {project.thoughtprocess && (
        <div>
          <h2 className="font-bold text-4xl mt-14 mb-10">Thought Process</h2>
          <div>{project.thoughtprocess}</div>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-5 mt-14 mb-8">
        {project.screenshots.map((screenshot, index) => (
          <img className="md:h-[350px]" key={index} src={screenshot} />
        ))}
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div className="my-14">
        <h2 className="font-bold text-4xl mb-10">Lessons</h2>
        <h3>{project.lessons}</h3>
      </div>
    </div>
  );
}
