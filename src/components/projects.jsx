import React from "react";
import ProjectCard from "./project-card";

export default function Projects(props) {
  return (
    <section id="projects">
      <h2 className="text-2xl font-bold mt-24 mb-4 uppercase tracking-wider text-center">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 gap-12 px-8 md:grid-cols-3 ">
        {props.projectList.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            analysis={project.thoughtprocess}
            image={project.image}
            id={project.id}
          />
        ))}
      </div>
    </section>
  );
}
