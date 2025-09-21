import React from "react";
import "../style/Landing.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Intro text */}
      <p className="intro-text">Hi, myself Paul and I am a freelancer !</p>

      {/* Main heading */}
      <div>
        <h1 className="main-heading">
          <span className="heading-black">Web Designer</span>
          <span className="heading-outline">& Web Developer</span>
        </h1>

        {/* Location */}
        <p className="location">
          <span>Based in Kolkata, India.</span>
          <span>
            <ul className="tech-stack">
              <li>Mongo Db</li>
              <li>Express Js</li>
              <li>React Js</li>
              <li>Node Js</li>
            </ul>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
