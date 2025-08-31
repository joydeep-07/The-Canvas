import React, { useEffect, useRef, useState } from "react";

const ScratchCard = ({ image1, image2, brushSize = 30 }) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isDrawing, setIsDrawing] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const img1 = new Image();
    img1.src = image1;
    img1.onload = () => {

      const targetHeight = window.innerHeight * 0.89;
      const aspectRatio = img1.width / img1.height;
      const scaledWidth = targetHeight * aspectRatio;

      setDimensions({ width: scaledWidth, height: targetHeight });
      canvas.width = scaledWidth;
      canvas.height = targetHeight;
      ctx.drawImage(img1, 0, 0, scaledWidth, targetHeight);
    };
  }, [image1]);

  const getMousePos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    lastPos.current = getMousePos(e);
    scratch(e);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    ctxRef.current.closePath();
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    scratch(e);
  };

  const scratch = (e) => {
    const ctx = ctxRef.current;
    const { x, y } = getMousePos(e);
    const { x: lastX, y: lastY } = lastPos.current;

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // smooth line
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    // extra circle
    ctx.beginPath();
    ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2, false);
    ctx.fill();

    lastPos.current = { x, y };
  };

  return (
    <div
      className="relative inline-block w-full h-full"
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      {/* Bottom Image */}
      <img
        src={image2}
        alt="hidden"
        width={dimensions.width}
        height={dimensions.height}
        className="block w-full h-full object-cover rounded-xl"
      />

      {/* Scratch Canvas */}
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          cursor: "pointer",
          borderRadius: "0.75rem",
        }}
      />
    </div>
  );
};

export default ScratchCard;
