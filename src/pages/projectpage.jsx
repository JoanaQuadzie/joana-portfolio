import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/button";
import { getProject } from "../data";

export default function Projectpage() {
  const params = useParams();
  const id = params.id;
  const project = getProject(id);

  return (
    <div>
      <h2 className="text-4xl font-bold my-10">{project.title}</h2>
      <p className="text-3xl font-semibold">Stack:</p>
      <div className="flex justify-between">
        <p className="text-xl">HTML, CSS</p>
        <Button>LIVE PREVIEW</Button>
      </div>
      <div className="">
        <img className="h-[700px]" src={project.image} alt="juicebar" />
      </div>
      <div className="my-14">
        <h2 className="font-bold text-4xl mb-10">Description</h2>
        <h3>{project.description}</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {project.screenshots.map((screenshot, index) => (
          <img className="h-[350px]" key={index} src={screenshot} />
        ))}
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
