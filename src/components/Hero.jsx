import React, { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import LiquidEther from "../../Reactbits/LiquidEther/LiquidEther";

const Hero = () => {
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
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen overflow-hidden relative">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-sky-600/40 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl text-center flex flex-col justify-center items-center space-y-6 sm:space-y-8 md:space-y-10">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-medium tracking-tighter"
          >
            <span
              style={{ fontFamily: "CormorantGaramond" }}
              className="bg-gradient-to-r from-gray-700 via-gray-900 to-gray-800 bg-clip-text text-transparent"
            >
              The Art of Code a Digital Symphony of Ideas & Innovation
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-3xl leading-relaxed text-gray-700 text-sm sm:text-base md:text-lg"
          >
            Driven MERN Stack Developer turning ideas into functional, beautiful
            web apps. Constantly exploring new technologies to deliver
            meaningful user experiences and impactful digital solutions that
            inspire and connect.
          </p>

          <div data-aos="zoom-in" data-aos-delay="600">
            <button
              className="px-10 sm:px-14 py-4 sm:py-6 bg-transparent border border-gray-900/20 text-gray-100 font-medium tracking-widest rounded-md hover:border-gray-700 transition-all duration-700 group relative overflow-hidden"
              onClick={scrollToSection}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative w-36 sm:w-40 flex items-center justify-center">
                <span className="opacity-100 group-hover:opacity-0 text-gray-700 translate-y-0 group-hover:-translate-y-2 transition-all duration-500 flex items-center space-x-3">
                  <span>ABOUT ME &</span>
                </span>
                <span className="absolute inset-0 text-gray-700 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center space-x-3">
                  <span>MY WORKS</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-in"
        data-aos-delay="500"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-softBounce"
      >
        <FiChevronDown className="h-6 w-6 animate-bounce text-gray-800 opacity-80" />
      </div>
    </div>
  );
};

export default Hero;
