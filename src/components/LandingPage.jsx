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
    <div className="h-screen overflow-hidden relative">
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
        {/* Keep your original gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white to-sky-600/40" />
      </div>

      {/* Text Section */}
      <div className="relative pt-10 z-20 flex flex-col mt-20 mb-10 justify-center items-center px-6 text-center md:text-left">
        <div className="wrapper max-w-8xl w-full flex flex-col md:flex-row items-center justify-between py-10">
          {/* Left Text Section */}
          <div className="text md:pl-20" data-aos="fade-up">
            <h1 className="uppercase text-lg font-medium text-amber-500 tracking-widest mb-2">
              MERN Stack Developer, Building Ideas into Reality
            </h1>
            <h1 className="text-5xl md:text-6xl font-serif text-gray-800 drop-shadow-md">
              The Art of Code a Digital <br /> Symphony of Ideas & Innovation
            </h1>
            <p className="max-w-lg pt-5 text-gray-700 leading-relaxed">
              We strive towards a simple but ambitious mission: to reform the
              education system by offering world-class learning rooted in
              experience and real-life application at a fraction of the cost of
              traditional academic institutions.
            </p>

            {/* Buttons */}
            <div className="pt-6 flex gap-4">
              <button className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 transition-all">
                Join Now
              </button>
              <button className="px-6 py-2 rounded-full border-2 border-gray-400 hover:border-blue-500 hover:text-blue-500 font-medium transition-all">
                Explore
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer animate-softBounce"
      >
        <FiChevronDown className="h-6 w-6 animate-bounce text-gray-700 opacity-80" />
      </div>
    </div>
  );
};

export default LandingPage;
