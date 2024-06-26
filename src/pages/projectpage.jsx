import React from "react";
import { useParams } from "react-router-dom";
import Juice2 from "../assets/juice2.jpg";
import { getProject } from "../data";

export default function Projectpage() {
  const params = useParams();
  const id = params.id;
  const project = getProject(id);

  return (
    <div>
      <h2 className="text-4xl font-bold my-6">{project.title}</h2>
      <p className="text-xl font-semibold">Stack:</p>
      <p>HTML, CSS</p>
      <button>LIVE PREVIEW</button>
      <div className="h-80 w-80">
        <img src={project.image} alt="juicebar" />
      </div>
      <div>
        {project.screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot} />
        ))}
      </div>
      <h3>{project.description}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ad debitis
        labore voluptates itaque amet inventore, rem maiores
      </p>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
