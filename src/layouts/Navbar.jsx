import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import name from "../assets/name.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Qualification", "Projects", "Experience"];

  useEffect(() => {
    Aos.init({
      duration: 400, 
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  const scrollToSection = (section) => {
    if (section === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const idMap = {
      Projects: "projects",
      Experience: "experience",
      Qualification: "about",
    };

    const element = document.getElementById(idMap[section]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-[3px] ">
      <div className="max-w-8xl mx-auto flex justify-between items-center h-[70px] px-6 md:px-20">
        {/* Logo */}
        <div 
        onClick={scrolltoTop}
        className="flex items-center">
          <img className="h-12 contrast-200" src={name} alt="Logo" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-12 text-black font-semibold tracking-wide">
          {navItems.map((item, i) => (
            <li
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              onClick={() => scrollToSection(item)}
              className="relative group h-7 leading-7 overflow-hidden cursor-pointer select-none"
            >
              {/* original text */}
              <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full group-hover:text-gray-800">
                {item}
              </span>
              {/* clone text */}
              <span
                className="block absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 text-gray-800"
                aria-hidden="true"
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 z-600 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Fullscreen Side Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-full bg-gradient-to-t from-gray-100 via-sky-100 to-sky-200 backdrop-blur-3xl shadow-lg md:hidden"
          >
            <div className="h-full flex flex-col">
              {/* Header with Close */}
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <img src={name} alt="Logo" className="h-10 contrast-600" />
              </div>

              {/* Nav Items */}
              <div className="flex flex-col items-start px-8 mt-10 space-y-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="text-xl font-semibold text-gray-900 cursor-pointer"
                    onClick={() => {
                      scrollToSection(item);
                      setIsOpen(false); // close menu after clicking
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* Footer / Socials */}
              <div className="mt-auto px-8 py-6 border-t text-gray-500 text-sm">
                © 2025 Joydeep Paul
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
