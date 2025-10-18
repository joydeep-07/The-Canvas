import React from "react";

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  return (
    <div
      className={`bg-clip-text text-transparent inline-block ${className}`}
      style={{
        backgroundColor: "#1f2937",
        backgroundImage:
          "linear-gradient(120deg, #1f2937 40%, rgba(255,255,255,0.6) 50%, #1f2937 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animation: disabled ? "none" : `shine ${speed}s linear infinite`,
      }}
    >
      {text}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ShinyText;
