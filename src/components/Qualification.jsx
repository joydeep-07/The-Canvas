import React, { useEffect } from "react";
import img1 from "../assets/full.jpg";
import img2 from "../assets/zudio.jpg";
import qualifications from "../Data/qualification.js";
import AboutMe from "./AboutMe.jsx";
import "aos/dist/aos.css";
import Aos from "aos";
import "../index.css";
import ScratchCard from "./ScratchCard.jsx"; // ✅ import ScratchCard

const Qualification = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col items-center py-16 px-4 md:px-15"
    >
      {/* Section Title */}
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-center md:text-left text-2xl md:text-4xl font-bold text-gray-800 mb-4"
      >
        About Me & My Qualifications
      </h1>

      {/* Subtitle */}
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-center md:text-center lg:text-left text-sm md:text-lg text-gray-600 italic mb-12 md:mb-16 px-2"
      >
        "Education is the passport to the future, for tomorrow belongs to those
        who prepare for it today."
      </p>

      {/* Image for Mobile Screen */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex justify-center w-full mb-8 md:hidden"
      >
        <div className="relative">
          {/* Spinning Gradient Border */}
          <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] spin-slow"></div>

          {/* Inner White Circle to mask spinning */}
          <div className="relative rounded-full p-[4px]">
            <img
              src={img1}
              loading="lazy"
              alt="Qualification"
              className="rounded-full shadow-xl h-36 w-36 sm:h-44 sm:w-44 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-2 w-full max-w-8xl gap-8 md:gap-10">
        {/* Cards Section */}
        <div className="flex flex-col w-full md:w-2/3">
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="max-w-4xl mx-auto bg-gray-100"
          >
            <AboutMe />
          </div>

          {qualifications.map((qual, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 + index * 10} // stagger effect
              className="px-2 py-6 flex flex-col gap-2 md:flex-row md:items-center justify-between transition-transform "
            >
              <div className="md:w-full">
                <h2 className="text-xl md:text-2xl font-semibold text-sky-600">
                  {qual.title}
                </h2>
                <p className="text-gray-700 mt-1 text-sm md:text-base">
                  {qual.institution}{" "}
                  <span className="text-xs md:text-sm text-gray-600">
                    {qual.year}
                  </span>
                </p>
                <p className="text-gray-700 mt-3 text-sm md:text-base md:text-justify text-justify leading-relaxed">
                  {qual.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Image for Desktop */}
        <div className="hidden md:block md:w-1/3">
          <div className="sticky top-20">
            <div className="rounded-xl h-[89vh]  overflow-hidden flex justify-center items-center">
              <ScratchCard image1={img1} image2={img2} brushSize={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
