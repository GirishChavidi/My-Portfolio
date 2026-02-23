import React from "react";
import { portfolioData } from "../data/portfolioData";
import "../styles/contact.css";

const Contact = () => {
  const contacts = [
    {
      label: portfolioData.email,
      link: `mailto:${portfolioData.email}`,
      icon: "📧",
    },
    {
      label: "GitHub Profile",
      link: portfolioData.github,
      icon: "💻",
    },
    {
      label: "LinkedIn Profile",
      link: portfolioData.linkedin,
      icon: "🔗",
    },
  ];

  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">
        <p className="contact-description">
          I’m currently open to Frontend / Full Stack opportunities and internships.
          If you have an opportunity or want to collaborate, feel free to reach out.
        </p>

        <div className="contact-cards">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">{item.icon}</span>
              <span className="contact-text">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;