import React from "react";
import { portfolioData } from "../data/portfolioData";
import "../styles/skills.css";

const Skills = () => {
  const skills = portfolioData?.skills || [];

  return (
    <section id="skills">
      <h2 className="section-title">Skills & Technologies</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-name">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;