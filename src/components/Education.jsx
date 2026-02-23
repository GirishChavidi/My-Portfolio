import React from "react";
import { portfolioData } from "../data/portfolioData";

const Education = () => {
  const edu = portfolioData?.education;

  if (!edu) return null;

  return (
    <section id="education">
      <h2 className="section-title">Education</h2>

      <div className="container">
        <h3>{edu.degree}</h3>
        <h4>{edu.college}</h4>
        <p>{edu.university}</p>
        <p>{edu.year}</p>
        <p>CGPA: {edu.cgpa}</p>
      </div>
    </section>
  );
};

export default Education;