import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
  FaCode,
  FaRocket,
  FaLightbulb,
  FaGraduationCap,
  FaStar,
  FaFire,
} from "react-icons/fa";

const WhyMe = () => {
  const containerRef = useRef(null);
  const smallBoxesRef = useRef([]);
  const largeBoxesRef = useRef([]);

  // Initialize animations
  useEffect(() => {
    gsap.from(containerRef.current, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out",
    });
  }, []);

  const handleSmallBoxEnter = (index) => {
    const tl = gsap.timeline();

    // Animate all small boxes
    smallBoxesRef.current.forEach((box, i) => {
      if (i === index) {
        // Expand the hovered box
        tl.to(
          box,
          {
            duration: 0.3,
            scale: 1.1,
            width: "65%", // Expanded size
            zIndex: 10,
            opacity: 1, // Full opacity
            ease: "power2.out",
          },
          0
        );
      } else {
        // Maintain the non-hovered box at its default state (50% width)
        tl.to(
          box,
          {
            duration: 0.3,
            scale: 1, // Default scale
            width: "50%", // Default size - PREVENTS COLLAPSE
            opacity: 1, // Default opacity
            zIndex: 1, // Default zIndex
            ease: "power2.out",
          },
          0
        );
      }
    });
  };

  const handleSmallBoxLeave = () => {
    const tl = gsap.timeline();

    // Reset all small boxes to original state
    smallBoxesRef.current.forEach((box) => {
      tl.to(
        box,
        {
          duration: 0.3,
          scale: 1,
          width: "50%",
          opacity: 1,
          zIndex: 1,
          ease: "power2.out",
        },
        0
      );
    });
  };

  const handleLargeBoxEnter = (index) => {
    gsap.to(largeBoxesRef.current[index], {
      duration: 0.3,
      scale: 1.02,
      y: -5,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      ease: "power2.out",
    });
  };

  const handleLargeBoxLeave = (index) => {
    gsap.to(largeBoxesRef.current[index], {
      duration: 0.3,
      scale: 1,
      y: 0,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      ease: "power2.out",
    });
  };

  // Add boxes to ref arrays
  const addToSmallRefs = (el, index) => {
    if (el && !smallBoxesRef.current.includes(el)) {
      smallBoxesRef.current[index] = el;
    }
  };

  const addToLargeRefs = (el, index) => {
    if (el && !largeBoxesRef.current.includes(el)) {
      largeBoxesRef.current[index] = el;
    }
  };

  return (
    <div
      ref={containerRef}
      className="py-12 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Why Choose Me?
        </h1>

        {/* Subtitle */}
        <p className="text-center text-lg md:text-xl text-gray-600 italic mb-16 max-w-3xl mx-auto leading-relaxed">
          "As a passionate fresher, I bring fresh perspectives, rapid learning
          capabilities, and dedicated commitment to delivering exceptional
          full-stack solutions."
        </p>

        <div className="flex flex-col md:flex-row mb-16 gap-8">
          {/* Left Column */}
          <div className="p-6 flex flex-col gap-8 w-full md:w-1/2">
            {/* Top Small Boxes */}
            <div className="flex gap-6 h-[220px]">
              <div
                ref={(el) => addToSmallRefs(el, 0)}
                className="border-2 border-blue-500 w-1/2 h-full p-6 flex flex-col justify-center items-center text-center bg-white rounded-xl shadow-lg cursor-pointer transition-all duration-300"
                onMouseEnter={() => handleSmallBoxEnter(0)}
                onMouseLeave={handleSmallBoxLeave}
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-white">
                  <FaCode size={24} />
                </div>
                <h2 className="font-bold text-xl mb-3 text-gray-800">
                  Expert in MERN Stack
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Proficient in MongoDB, Express, React, Node.js, capable of
                  building robust full-stack applications with modern
                  architecture and best practices.
                </p>
                <div className="mt-3 text-xs text-blue-600 font-semibold">
                  Additional: REST APIs • JWT Authentication • State Management
                </div>
              </div>

              <div
                ref={(el) => addToSmallRefs(el, 1)}
                className="border-2 border-blue-500 w-1/2 h-full p-6 flex flex-col justify-center items-center text-center bg-white rounded-xl shadow-lg cursor-pointer transition-all duration-300"
                onMouseEnter={() => handleSmallBoxEnter(1)}
                onMouseLeave={handleSmallBoxLeave}
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-white">
                  <FaRocket size={24} />
                </div>
                <h2 className="font-bold text-xl mb-3 text-gray-800">
                  Proven Projects
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Developed a Medical Appointment Booking Website with real-time
                  slot updates, email confirmations using Nodemailer, and secure
                  patient-doctor interactions.
                </p>
                <div className="mt-3 text-xs text-blue-600 font-semibold">
                  Features: Real-time Updates • Email Automation • Secure
                  Booking
                </div>
              </div>
            </div>

            {/* Large Bottom Box */}
            <div
              ref={(el) => addToLargeRefs(el, 0)}
              className="border-2 border-blue-500 h-[500px] p-8 flex flex-col justify-center text-center bg-white rounded-xl shadow-lg cursor-pointer"
              onMouseEnter={() => handleLargeBoxEnter(0)}
              onMouseLeave={() => handleLargeBoxLeave(0)}
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6 text-white mx-auto">
                <FaLightbulb size={32} />
              </div>
              <h2 className="font-bold text-2xl mb-6 text-gray-800">
                Problem Solver & Innovator
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                I specialize in identifying and solving complex real-world
                problems through innovative technical solutions. My approach
                combines analytical thinking with creative problem-solving to
                optimize workflows and enhance user experience.
              </p>
              <div className="text-blue-600 font-semibold text-sm mt-4">
                Key Strengths: Analytical Thinking • User-Centric Design •
                Process Optimization • Creative Solutions
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-6 flex flex-col gap-8 w-full md:w-1/2">
            {/* Large Top Box */}
            <div
              ref={(el) => addToLargeRefs(el, 1)}
              className="border-2 border-blue-500 h-[500px] p-8 flex flex-col justify-center text-center bg-white rounded-xl shadow-lg cursor-pointer"
              onMouseEnter={() => handleLargeBoxEnter(1)}
              onMouseLeave={() => handleLargeBoxLeave(1)}
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6 text-white mx-auto">
                <FaGraduationCap size={32} />
              </div>
              <h2 className="font-bold text-2xl mb-6 text-gray-800">
                Adaptable & Fast Learner
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                With a passion for continuous learning, I quickly adapt to new
                technologies and frameworks. My academic background and
                self-learning capabilities enable me to rapidly contribute to
                projects and stay updated with industry trends.
              </p>
              <div className="text-blue-600 font-semibold text-sm mt-4">
                Learning Stack: Next.js • TypeScript • GraphQL • AWS • Docker
              </div>
            </div>

            {/* Bottom Small Boxes */}
            <div className="flex gap-6 h-[220px]">
              <div
                ref={(el) => addToSmallRefs(el, 2)}
                className="border-2 border-blue-500 w-1/2 h-full p-6 flex flex-col justify-center items-center text-center bg-white rounded-xl shadow-lg cursor-pointer transition-all duration-300"
                onMouseEnter={() => handleSmallBoxEnter(2)}
                onMouseLeave={handleSmallBoxLeave}
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-white">
                  <FaStar size={24} />
                </div>
                <h2 className="font-bold text-xl mb-3 text-gray-800">
                  Quality & Efficiency
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Committed to writing clean, maintainable, and scalable code
                  while ensuring projects are delivered efficiently and on time
                  with thorough testing.
                </p>
                <div className="mt-3 text-xs text-blue-600 font-semibold">
                  Focus: Code Quality • Performance • Testing • Documentation
                </div>
              </div>

              <div
                ref={(el) => addToSmallRefs(el, 3)}
                className="border-2 border-blue-500 w-1/2 h-full p-6 flex flex-col justify-center items-center text-center bg-white rounded-xl shadow-lg cursor-pointer transition-all duration-300"
                onMouseEnter={() => handleSmallBoxEnter(3)}
                onMouseLeave={handleSmallBoxLeave}
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-white">
                  <FaFire size={24} />
                </div>
                <h2 className="font-bold text-xl mb-3 text-gray-800">
                  Passion & Drive
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Driven by passion to transform innovative ideas into
                  functional, scalable applications that create meaningful
                  impact and solve real user problems.
                </p>
                <div className="mt-3 text-xs text-blue-600 font-semibold">
                  Motivation: Innovation • Impact • User Experience •
                  Scalability
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
