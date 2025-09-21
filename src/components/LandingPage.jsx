import React from "react";
import "../style/Landing.css";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Intro text */}
      <p className="intro-text">Hi, myself Paul and I am a freelancer !</p>

      {/* Main heading */}
      <div>
        <h1 className="main-heading">
          <span className="heading-black">Web  Developer</span>
          <span className="heading-outline">& Programmer</span>
        </h1>

        {/* Location & Tech Stack */}
        <p className="location">
          <span>Based in Kolkata, India.</span>
          <span>
            <ul className="tech-stack">
              <li className="tech text-[#47A248] ">
                <SiMongodb color="#47A248" size={18} /> MongoDB
              </li>
              <li className="tech text-[#000000]">
                <SiExpress color="#000000" size={18} /> Express.js
              </li>
              <li className="tech text-[#61DAFB]">
                <SiReact color="#61DAFB" size={18} /> React.js
              </li>
              <li className="tech text-[#339933]">
                <SiNodedotjs color="#339933" size={18} /> Node.js
              </li>
            </ul>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
