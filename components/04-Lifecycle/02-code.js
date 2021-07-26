// Counter.jsx

import { useState, useEffect } from "react";

const Counter = () => {
  // every time any state or props chage, this componet will re-render
  const [count, setCount] = useState(0);

  // componentDidMount/componentDidUpdate
  // 4. runs effect
  useEffect(() => {
    document.title = `Current count: ${count}`;
    // no dependencies, runs every render
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
