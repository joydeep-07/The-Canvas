import React from "react";
import * as Icons from "lucide-react";
import skills from "../Data/skills.js";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div id="about" className="px-2 bg-white sm:px-6 md:px-0">
      <div className="pb-10 lg:col-span-2">
        {/* Name */}
        <h3 className="text-xl sm:text-2xl text-black font-bold text-center  md:text-left">
          JOYDEEP PAUL
        </h3>

        <p className="text-sky-600 font-mono text-xs sm:text-sm mb-4 text-center md:text-left">
          MCA STUDENT & MERN DEVELOPER
        </p>

        {/* Bio */}
        <p className="text-black/80 mb-4 text-sm sm:text-base leading-relaxed text-justify">
          Myself Joydeep, a motivated and dedicated learner with a strong
          academic foundation in computer applications. I successfully completed
          my Bachelor of Computer Applications (BCA) from BB College, Asansol,
          which helped me build a solid base in programming, logic, and software
          concepts. Currently, I am pursuing my Master of Computer Applications
          (MCA) at Asansol Engineering College, where I am further enhancing my
          technical skills and diving deeper into advanced concepts of software
          development.
          <br /> <br />
          I have always been deeply interested in programming, software
          development, and emerging technologies, which drives me to constantly
          explore new tools, frameworks, and methodologies. My curiosity pushes
          me to go beyond textbooks, experiment with real-world projects, and
          stay updated with the latest trends in technology.
          <br /> <br />I see technology as not just a career path but also a
          medium for problem-solving, innovation, and continuous learning. I
          strongly believe in growing step by step, improving with every
          challenge, and building solutions that can make a difference. For me,
          the ever-evolving field of technology is both exciting and inspiring,
          and I am determined to keep learning, improving, and contributing
          meaningfully to it.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-start pt-3 gap-2 sm:gap-3">
          {/* Email */}
          <span className="flex items-center gap-2 cursor-pointer px-3 sm:px-4 py-2 bg-sky-100 text-sky-700 border border-sky-400 rounded-full text-xs sm:text-sm font-mono">
            <Mail size={16} />
            joydeeprnp8821@gmail.com
          </span>

          {/* Phone */}
          <span className="flex items-center gap-2 cursor-pointer px-3 sm:px-4 py-2 bg-sky-100 text-sky-700 border border-sky-400 rounded-full text-xs sm:text-sm font-mono">
            <Phone size={16} />
            9635172639
          </span>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/joydeep-paul-06b37926a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-sky-100 text-sky-700 border border-sky-400 rounded-full text-xs sm:text-sm font-mono transition"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/joydeep-07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-sky-100 text-sky-700 border border-sky-400 rounded-full text-xs sm:text-sm font-mono transition"
          >
            <FaGithub size={16} />
            GitHub
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/Paul__here?t=2fFjvZ-b0vCsuhrg2oOpEQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-sky-100 text-sky-700 border border-sky-400 rounded-full text-xs sm:text-sm font-mono transition"
          >
            <FaTwitter size={16} />
            Twitter
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mr.paul_16?igsh=dWhrOW1oYzdzZmlj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-sky-100 text-sky-700 border border-sky-400 rounded-full text-xs sm:text-sm font-mono transition"
          >
            <FaInstagram size={16} />
            Instagram
          </a>
        </div>

        {/* Skills */}
        <div className="mt-8">
          <h3 className="text-xl sm:text-2xl text-black font-bold text-left">
            TOP SKILLS
          </h3>

          <p className="text-sky-600 font-mono text-xs sm:text-sm mb-4 text-left">
            MCA STUDENT & MERN DEVELOPER
          </p>

          <div className="flex flex-wrap justify-start gap-2 sm:gap-3">
            {skills.map((skill) => {
              const IconComponent = Icons[skill.icon];
              return (
                <span
                  key={skill.id}
                  className="flex items-center gap-2 cursor-pointer px-3 sm:px-4 py-2 bg-sky-100 text-sky-700 border border-sky-400 rounded-full text-xs sm:text-sm font-mono transition"
                >
                  {IconComponent && <IconComponent size={14} />}
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
