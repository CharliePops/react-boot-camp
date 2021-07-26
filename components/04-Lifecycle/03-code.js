// MouseTracker.jsx
import { useState, useEffect } from "react";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // componentDidMount/Unmount
  useEffect(() => {
    const onMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
    // no dependencies
  }, []);

  return (
    <div>
      <h1>Current count {count}</h1>;
      <p>
        <button onClick={increment}>Increment</button>
      </p>
    </div>
  );
};

// App.jsx
const App = () => {
  return <MouseTracker />;
};
