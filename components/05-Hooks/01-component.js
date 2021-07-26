import React, { useState, useEffect } from "react";

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  // componentDidMount/componentDidUpdate:
  useEffect(() => {
    document.title = `Current count: ${count}`;
  });

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
};

const Component = () => {
  const { count, increment } = useCounter(5);

  return (
    <div>
      <h1>Current count {count}</h1>
      <p>
        <button onClick={increment}>Increment</button>
      </p>
    </div>
  );
};

export default Component;
