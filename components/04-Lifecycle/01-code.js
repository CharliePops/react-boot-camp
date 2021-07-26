// Counter.jsx
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // componentDidMount/componentDidUpdate:
  useEffect(() => {
    document.title = `Current count: ${count}`;
  });

  const increment = () => {
    setCount(count + 1);
  };

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
  return <Counter />;
};
