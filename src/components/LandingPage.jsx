import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      {/* Intro text */}
      <p className="text-gray-700 mb-2 uppercase">
        Hi, myself Paul and I am a freelancer !
      </p>

      {/* Main heading */}
      <div>
        <h1 className="text-5xl sm:text-9xl p-5 font-bold leading-tight">
          <span className="block text-black text-center">Webdesigner</span>
          <span className="block text-transparent stroke-text">
            & Photographer
          </span>
        </h1>

        {/* Location */}
        <p className="text-gray-600 justify-between flex px-5 mt-2">
          <span>Based in Kolkata, India.</span>
          <span>
            <ul className="flex gap-5">
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
