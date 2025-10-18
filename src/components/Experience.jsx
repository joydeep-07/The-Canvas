import React, { useEffect } from "react";
import { Briefcase } from "lucide-react";
import Lottie from "lottie-react";
import emptyAnimation from "../assets/Coding.json";
import experience from "../Data/experience.js";
import Aos from "aos";
import "aos/dist/aos.css";
import ShinyText from "../../Reactbits/ShinyText/ShinyText.jsx";
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
        Worked with these during Projects
      </h1>

      {/* Subtitle */}
      {/* <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-center md:text-center lg:text-left text-sm md:text-lg text-gray-600 italic mb-12 md:mb-16 px-2"
      >
        "Currently a fresher with no prior professional work experience."
      </p> */}

      <ShinyText
        text="Currently a fresher with no prior professional work experience."
        disabled={false}
        speed={7}
        className="text-center md:text-center lg:text-left text-sm md:text-lg text-gray-600 italic mb-12 md:mb-16 px-2"
      />

      <div className="w-full max-w-8xl mx-auto mb-16 relative z-10">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10">
          {isFresher ? (
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="flex flex-col justify-center items-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
            >
              <Lottie
                animationData={emptyAnimation}
                loop={true}
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
              />
            </div>
          ) : (
            <div
              className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          sm:gap-8 
          lg:gap-10 
          xl:gap-12
          place-items-center
        "
            >
              {experience.map((job, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="w-full max-w-[400px]"
                  key={index}
                >
                  <ExperienceCard index={index} {...job} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
