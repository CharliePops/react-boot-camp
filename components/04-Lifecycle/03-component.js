import React, { useState, useEffect } from "react";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // componentMount/Unmount
  useEffect(() => {
    const onMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div>
      <p>
        Mouse position, X: {mousePosition.x} Y: {mousePosition.y}
      </p>
    </div>
  );
};

export default MouseTracker;
