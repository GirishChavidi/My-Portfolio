import React from "react";
import { portfolioData } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";
import "../styles/project.css";

const Projects = () => {
  const projects = portfolioData?.projects || [];

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;