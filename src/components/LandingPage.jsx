import React, { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import video from "../assets/bg_video2.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-sky-600/40 pointer-events-none" />
      </div>

      {/* Text + Button Section */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 sm:px-12 md:px-16 lg:px-24 text-left items-start">
        <div
          className="max-w-7xl w-full flex flex-col py-10"
          data-aos="fade-up"
        >
          {/* Left Text */}
          <div className="flex flex-col">
            <h2 className="uppercase text-amber-500 tracking-widest text-sm sm:text-base md:text-lg font-medium mb-3">
              MERN Developer
            </h2>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 drop-shadow-md leading-tight mb-6">
              The Art of Code &
              <br />
              Symphony of Ideas & Innovation
            </h1>

            <p className="max-w-2xl text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
              Driven MERN Stack Developer turning ideas into functional,
              beautiful web apps. Constantly exploring new technologies to
              deliver meaningful user experiences and impactful digital
              solutions that inspire and connect.
            </p>

            {/* Button */}
            <div
              className="pt-4 sm:pt-6"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <button
                onClick={scrollToSection}
                className="relative overflow-hidden px-8 sm:px-12 md:px-14 py-3 sm:py-4 md:py-5 border border-gray-800/40 text-gray-800 font-medium tracking-widest rounded-md bg-transparent group text-xs sm:text-sm md:text-base transition-all duration-700"
              >
                {/* Hover overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></span>

                <span className="relative flex items-center justify-start space-x-2">
                  <span className="opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-2 transition-all duration-500 flex items-center space-x-2">
                    <span>ABOUT ME &</span>
                  </span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-start space-x-2">
                    <span>MY WORKS</span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-in"
        data-aos-delay="500"
        onClick={scrollToSection}
        className="absolute bottom-6 sm:bottom-8 left-6 z-20 cursor-pointer"
      >
        <FiChevronDown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce text-gray-700 opacity-80" />
      </div>
    </div>
  );
};

export default LandingPage;
