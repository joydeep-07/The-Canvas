import React, { useEffect } from "react";
import { Star } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

const WhyMe = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const reasons = [
    {
      title: "Full-Stack Expertise",
      desc: "Proficient in the MERN stack — MongoDB, Express.js, React, and Node.js for full-cycle web development.",
    },
    {
      title: "Project Experience",
      desc: "Developed a Medical Appointment Booking Website with real-time updates, authentication, and email notifications.",
    },
    {
      title: "Clean & Responsive Design",
      desc: "Crafts modern, mobile-friendly interfaces with strong focus on usability and performance.",
    },
    {
      title: "Secure Development",
      desc: "Implements authentication, input validation, and safe coding practices for reliable web apps.",
    },
    {
      title: "Strong Foundation",
      desc: "Completed BCA and pursuing MCA — blending academic knowledge with practical experience.",
    },
    {
      title: "Fast Learner",
      desc: "Adapts quickly to new technologies, frameworks, and development challenges.",
    },
    {
      title: "Team-Oriented",
      desc: "Collaborates effectively, communicates clearly, and delivers quality results consistently.",
    },
  ];

  const ReasonCard = ({ title, desc, index }) => (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="relative group overflow-hidden transition w-full max-w-[400px]"
    >
      <div className="bg-white shadow-md border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          <Star className="text-sky-600" size={20} />
          <h4 className="text-lg md:text-xl font-semibold text-sky-600">
            {title}
          </h4>
        </div>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );

  return (
    <div
      id="why-me"
      className="min-h-[500px] bg-white relative font-sans flex flex-col justify-center items-center tracking-wide pt-20 px-4 sm:px-6 md:px-8"
    >
      {/* Section Title */}
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-center md:text-left text-2xl md:text-4xl font-bold text-gray-800 mb-4"
      >
        Why You Should Hire Me
      </h1>

      {/* Subtitle */}
      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="text-center md:text-center lg:text-left text-sm md:text-lg text-gray-600 italic mb-12 md:mb-16 px-2"
      >
        "Combining technical skill, creativity, and passion to deliver impactful
        digital experiences."
      </p>

      {/* Cards Grid */}
      <div className="w-full max-w-8xl mx-auto mb-16 relative z-10">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10">
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
            {reasons.map((item, index) => (
              <ReasonCard key={index} index={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
