import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* Project Image */}
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="tech-stack">
          {project.tech &&
            project.tech.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
        </div>

        {/* Buttons */}
        <div className="project-buttons">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-github"
            >
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-live"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;