import React from "react";
import ProjectCard from "./project-card";
import Button from "./button";

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mt-24 mb-4 uppercase tracking-wider text-center">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 gap-12 px-8 md:grid-cols-3 ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="flex justify-center mt-10">
        <Button>VIEW MORE</Button>
      </div>
    </section>
  );
}
