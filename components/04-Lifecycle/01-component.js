import React, { useState, useEffect } from "react";

const Component = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Current count: ${count}`;
  });

  const increment = () => {
    setCount(count + 1);
  };

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
