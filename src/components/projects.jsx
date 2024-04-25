import React from "react";
import { excitingProjects } from "../Utils/util";
import { Link } from "react-router-dom";

export default function projects() {
  return (
    <div>
      <div id="projects" className="bg-zinc-300 text-lime-700 py-5">
        <h2 className="text-center py-4 font-bold text-3xl">
          Find My Exciting Projects
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-4">
          {excitingProjects.map((project) => {
            return (
              <article key={project.id}>
                <figure className="flex flex-col items-center justify-center">
                  <img className="object-cover h-32 w-60"  src={project.image} alt={project.projectName} />
                  <figcaption className="text-2xl text-lime-900 font-semibold p-y-2">{project.projectName}</figcaption>
                </figure>
                <p className="text-lg text-black text-center">{project.desc}</p>
                <div className="flex items-center justify-center flex-wrap gap-4 my-6">
                  <a
                    className="bg-black text-amber-400 rounded-lg duration-300 hover:-translate-y-4 py-2 px-4 font-semibold"
                    href={project.githubLink}
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    className="bg-black text-amber-400 rounded-lg duration-300 hover:-translate-y-4 py-2 px-4 font-semibold"
                    href={project.website}
                    target="_blank"
                  >
                    Demo
                  </a>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
