import React, { useState, useEffect, useRef } from "react";

const CustomCursor = ({ icon: Icon, targetId }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

     
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const isHovering =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        setIsActive(isHovering);
      }

      // Calculate velocity
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      setVelocity({ x: dx, y: dy });
      setIsDragging(Math.abs(dx) > 2 || Math.abs(dy) > 2);
      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [targetId]);

  // Smooth follow for cursor
  useEffect(() => {
    let animationFrame;
    const smoothFollow = () => {
      setCursorPos((prev) => {
        const ease = 0.12;
        return {
          x: prev.x + (mousePos.x - prev.x) * ease,
          y: prev.y + (mousePos.y - prev.y) * ease,
        };
      });
      animationFrame = requestAnimationFrame(smoothFollow);
    };
    smoothFollow();
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos]);

  if (!isActive) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 flex items-center justify-center bg-white/50 backdrop-blur-xs shadow-lg"
      style={{
        top: cursorPos.y - 45,
        left: cursorPos.x - 45,
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        transform: isDragging
          ? `scaleX(${1 + Math.abs(velocity.x) * 0.04}) scaleY(${
              1 + Math.abs(velocity.y) * 0.04
            })`
          : "scale(1)",
        transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <Icon
        size={22}
        className="text-black"
        style={{
          transform: `translate(${velocity.x * 0.2}px, ${velocity.y * 0.2}px)`,
          transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
};

export default CustomCursor;

// use like this
//  <CustomCursor icon={CiPlay1} targetId="video" />
