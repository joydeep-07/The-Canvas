import React, { useEffect } from "react";
import { Briefcase } from "lucide-react";
import Lottie from "lottie-react";
import emptyAnimation from "../assets/Coding.json";
import experience from "../Data/experience.js";
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const ExperienceCard = ({ company, role, duration, details, index }) => (
    <div
      data-aos="fade-up"
      data-aos-delay={100}
      className="relative group overflow-hidden transition"
    >
      <div className="">
        <div className="flex items-center gap-3 mb-3">
          <Briefcase className="text-sky-600" size={20} />
          <h4 className="text-lg md:text-xl font-semibold text-sky-600">
            {company}
          </h4>
        </div>
        <p className="text-gray-800 font-medium text-sm md:text-base">{role}</p>
        {/* <p className="text-gray-500 text-xs md:text-sm mb-4">{duration}</p> */}

        <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-gray-700">
          {details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const isFresher = experience.length === 0;

  return (
    <div
      id="experience"
      className="min-h-[500px] bg-white relative font-sans flex flex-col justify-center items-center tracking-wide pt-20 px-4 sm:px-6 md:px-8"
    >
      {/* Section Title */}
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-center md:text-left text-2xl md:text-4xl font-bold text-gray-800 mb-4"
      >
        Worked with Libraries in Projects
      </h1>

      {/* Subtitle */}
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-center md:text-center lg:text-left text-sm md:text-lg text-gray-600 italic mb-12 md:mb-16 px-2"
      >
        "Currently a fresher with no prior professional work experience."
      </p>

      <div className="w-full max-w-8xl mb-16 relative z-10">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
          {isFresher ? (
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="flex flex-col justify-center items-center min-h-[300px]"
            >
              <Lottie
                animationData={emptyAnimation}
                loop={true}
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
              />
            </div>
          ) : (
            <div className="grid p-6 grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {experience.map((job, index) => (
                <ExperienceCard key={index} index={index} {...job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
