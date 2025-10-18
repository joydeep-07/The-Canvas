import React from "react";
import CircularGallery from "../../Reactbits/CircularGallery/CircularGallery.jsx";

const WhyMe = () => {
  const myGalleryItems = [
    {
      image: "https://picsum.photos/id/1011/800/600",
      text: "Medical Appointment System",
    },
    {
      image: "https://picsum.photos/id/1012/800/600",
      text: "Portfolio Website",
    },
    {
      image: "https://picsum.photos/id/1013/800/600",
      text: "E-Commerce Platform",
    },
    { image: "https://picsum.photos/id/1015/800/600", text: "Chat App" },
    { image: "https://picsum.photos/id/1016/800/600", text: "Admin Dashboard" },
  ];

  return (
    <section className="relative py-16 text-gray-700 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-10 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-aos="fade-up">
          Why Hire <span className="text-[#00E5FF]">Me?</span>
        </h2>
        <p
          className="text-gray-300 max-w-2xl mx-auto text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          I bring creative problem-solving, full-stack development expertise,
          and real-world project experience to every challenge I take on.
        </p>
      </div>

      <div
        className="relative h-[600px] w-full"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <CircularGallery
          items={myGalleryItems}
          bend={3}
          textColor="#A7F3D0" // soft mint green for text
          borderRadius={0.06}
          font="bold 28px Figtree"
          scrollEase={0.025}
          scrollSpeed={2.5}
        />
      </div>
    </section>
  );
};

export default WhyMe;
