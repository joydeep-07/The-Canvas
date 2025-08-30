import React, { useEffect } from "react";
import projects from "../Data/projects.js";
import me from "../assets/project.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 700, 
      easing: "ease-in-out",
      once: true, 
      offset: 100,
    });
  }, []);

  const ProjectCard = ({ name, description, technologies, link, index }) => (
    <div
      data-aos="fade-up"
      data-aos-delay={80 + index * 10} 
      className="relative group bg-white border border-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition"
    >
      {/* Overlay Visit Button */}
      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1.5px] opacity-0 group-hover:opacity-100 transition duration-500 z-10">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-full shadow-lg font-semibold text-sm transition-all duration-300"
        >
          Visit <i className="fa-solid fa-arrow-up rotate-[45deg]"></i>
        </a>
      </div>

      {/* Card Content */}
      <div className="p-6 relative z-0">
        <h4 className="text-xl font-semibold text-sky-600 mb-2">{name}</h4>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-sky-100 text-sky-700 text-xs rounded-full border border-sky-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="projects"
      className="min-h-screen bg-white relative font-sans flex flex-col items-center tracking-wide py-20 px-5 md:px-10"
    >
      {/* Section Title and Subtitle */}
      <div className="w-full max-w-4xl px-4">
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          My Projects & Works
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-base md:text-lg text-gray-600 italic mb-10"
        >
          “The best way to predict the future is not to wait for it to happen,
          but to create it with vision, determination, and action.”
        </p>
      </div>

      {/* Main Content Container */}
      {/* Main Content Container */}
      <div className="w-full max-w-8xl mx-auto">
        <div className="p-4 md:p-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left side: paragraph + project cards */}
            <div className="flex-1 order-2 lg:order-1">
              {/* Paragraph above cards */}
              {/* Intro Section (before cards) */}
              <div data-aos="fade-up" data-aos-delay="100" className="mb-10">
                {/* Heading */}
                <h3 className="text-xl sm:text-2xl text-black font-bold text-left">
                  PROJECTS OVERVIEW
                </h3>

                <p className="text-sky-600 font-mono text-xs sm:text-sm mb-4 text-left md:text-left">
                  FULLSTACK DEVELOPER
                </p>

                {/* Subtitle / Skill-like batches */}
                <div className="flex flex-wrap gap-2 mt-2 mb-6">
                  <span className="px-3 sm:px-4 py-2 bg-sky-100 text-sky-700 border border-sky-400 rounded-full text-xs sm:text-sm font-mono">
                    MERN STACK
                  </span>
                  <span className="px-3 sm:px-4 py-2 bg-green-100 text-green-700 border border-green-400 rounded-full text-xs sm:text-sm font-mono">
                    FULL STACK
                  </span>
                  <span className="px-3 sm:px-4 py-2 bg-purple-100 text-purple-700 border border-purple-400 rounded-full text-xs sm:text-sm font-mono">
                    RESPONSIVE DESIGN
                  </span>
                  <span className="px-3 sm:px-4 py-2 bg-orange-100 text-orange-700 border border-orange-400 rounded-full text-xs sm:text-sm font-mono">
                    DEPLOYMENT
                  </span>
                </div>

                {/* Paragraph */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="text-black/80 text-sm sm:text-base leading-relaxed text-justify"
                >
                  Every project I’ve built reflects not only my passion for
                  technology and problem-solving, but also my dedication to
                  learning, experimenting, and improving with each step. From
                  designing clean and responsive interfaces that enhance user
                  experience, to implementing secure and optimized backend
                  systems, I strive to create solutions that are practical,
                  scalable, and reliable in real-world use cases. I believe that
                  technology should not only function, but also inspire
                  confidence and simplicity for the people using it.
                  <br /> <br />
                  Below, you’ll find a collection of projects that illustrate my
                  journey in web development and software engineering. They
                  highlight my growing expertise with modern tools and
                  frameworks such as React, Node.js, Express, and MongoDB, while
                  also demonstrating my adaptability to new challenges. Each
                  project has been a learning experience teaching me valuable
                  lessons in clean code practices, debugging, teamwork, version
                  control, and deployment pipelines.
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl text-black font-bold text-left">
                TOP PROJECTS
              </h3>

              <p className="text-sky-600 font-mono text-xs sm:text-sm mb-4 text-left md:text-left">
                REACT DEVELOPER
              </p>

              {/* Project cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} index={index} {...project} />
                ))}
              </div>
            </div>

            {/* Right side: Sticky image (visible only in large screens) */}
            <div className="hidden lg:block lg:w-1/3 order-1 lg:order-2">
              <div className="sticky top-26">
                <img
                  src={me}
                  loading="lazy"
                  alt="Projects"
                  className="rounded-xl max-h-[80vh] w-full object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
