// Counter.jsx

import { useState } from "react";

const initialState = 0;

const Counter = () => {
  const [count, setCount] = useState(initialState);

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
