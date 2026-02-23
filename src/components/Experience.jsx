import React from "react";
import { portfolioData } from "../data/portfolioData";
import "../styles/experience.css";

const Experience = () => {
  const exp = portfolioData?.experience;

  if (!exp) return null; // prevents crash

  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">
        <div className="experience-card">
          <h3 className="exp-role">{exp.role}</h3>
          <h4 className="exp-org">{exp.organization}</h4>
          <p className="exp-duration">{exp.duration}</p>

          <ul className="exp-points">
            {exp.points &&
              exp.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;