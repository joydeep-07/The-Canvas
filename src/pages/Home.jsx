import React, { useEffect, useState, useRef } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Qualification from "../components/Qualification";
import Experience from "../components/Experience";
import { ArrowUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import LandingPage from "../components/LandingPage";
import WhyMe from "../components/WhyMe";
import Gallery from "../components/Gallery";

gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);
  const circleRef = useRef(null);

  // Show button after scrolling 1000px & update progress
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;

      const circumference = 2 * Math.PI * 20;
      const offset = circumference - progress * circumference;
      gsap.to(circleRef.current, {
        strokeDashoffset: offset,
        duration: 0.25,
        ease: "linear",
      });

      setIsVisible(scrollTop > 850);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Animate button show/hide
  useEffect(() => {
    if (isVisible) {
      gsap.to(buttonRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(buttonRef.current, {
        autoAlpha: 0,
        scale: 0.6,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isVisible]);

  // Scroll to top function
  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <div>
      <Hero />
      {/* <LandingPage/> */}
      <Qualification />
      {/* <WhyMe /> */}
      <Projects />
      <Experience />
      <Gallery/>

      {/* Scroll to Top Button with Progress Ring */}
      <div
        ref={buttonRef}
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-sky-600 shadow-lg cursor-pointer"
        style={{ opacity: 0, visibility: "hidden", transform: "scale(0.6)" }}
        onClick={scrollToTop}
      >
        {/* Progress Circle (border) */}
        <svg
          className="absolute -rotate-90"
          width="56"
          height="56"
          viewBox="0 0 56 56"
        >
          <circle
            cx="28"
            cy="28"
            r="20"
            stroke="#38bdf8" // sky-400
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 20}
            strokeDashoffset={2 * Math.PI * 20}
            ref={circleRef}
          />
        </svg>

        {/* Button Icon */}
        <ArrowUp size={18} className="text-white relative z-10" />
      </div>
    </div>
  );
};

export default Home;
