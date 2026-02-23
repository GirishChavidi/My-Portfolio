import React from "react";
import "../styles/hero.css";
import { portfolioData } from "../data/portfolioData";
import profileImg from "../assets/images/profile.jpeg";

/* 🔥 Real Tech Icons */
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from "react-icons/fa";
import { SiJavascript, SiNginx } from "react-icons/si";
import { MdApi } from "react-icons/md";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>{portfolioData.name}</h1>
          <h2>{portfolioData.title}</h2>
          <p>{portfolioData.subtitle}</p>

          <div className="hero-buttons">
            <a href={portfolioData.github} target="_blank" rel="noreferrer">
              <button className="btn-primary">💻 GitHub</button>
            </a>

            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">
              <button className="btn-outline">🔗 LinkedIn</button>
            </a>
          </div>
        </div>

        {/* RIGHT ORBIT SECTION */}
        <div className="hero-right">
          <div className="orbit-wrapper">
            {/* Neon Ring */}
            <div className="neon-ring"></div>

            {/* Profile Image Center */}
            <img src={profileImg} alt="Profile" className="profile-img" />

            {/* 🔥 REAL ICON ORBIT */}
            <div className="orbit orbit-1"><FaReact /></div>
            <div className="orbit orbit-2"><SiJavascript /></div>
            <div className="orbit orbit-3"><FaHtml5 /></div>
            <div className="orbit orbit-4"><FaCss3Alt /></div>
            <div className="orbit orbit-5"><FaGitAlt /></div>
            <div className="orbit orbit-6"><MdApi /></div>
            <div className="orbit orbit-7"><SiNginx /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;