// Counter.jsx

import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // componentDidMount/componentDidUpdate:
  // 4. runs effect
  useEffect(() => {
    document.title = `Current count: ${count}`;
  });

  const increment = () => {
    // 3. uptates state
    setCount(count + 1);
  };

  // 1. render
  return (
    <div>
      <h1>Current count {count}</h1>;
      <p>
        {/* 2. use clicks */}
        <button onClick={increment}>Increment</button>
      </p>
    </div>
  );
};

// App.jsx

const App = () => {
  return <Counter />;
};
