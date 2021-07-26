// Counter.jsx

import { useState } from "react";

const Counter = () => {
  // initialize with a value of 0
  const [count, setCount] = useState(0);

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
