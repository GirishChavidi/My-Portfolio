import React, { useState, useEffect } from "react";
import "../styles/About.css";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const [showResume, setShowResume] = useState(false);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showResume]);

  return (
    <section id="about" className="about-section">

      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <p className="about-text">
          {portfolioData.about}
        </p>

        <button
          className="resume-btn"
          onClick={() => setShowResume(true)}
        >
          Preview Resume
        </button>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div
          className="resume-overlay"
          onClick={() => setShowResume(false)}
        >
          <div
            className="resume-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowResume(false)}
            >
              ✕
            </button>

            <iframe
              src="/resume.pdf"
              title="Resume Preview"
              className="resume-frame"
            ></iframe>

            <a
              href="/resume.pdf"
              download
              className="download-btn"
            >
              Download
            </a>
          </div>
        </div>
      )}

    </section>
  );
};

export default About;