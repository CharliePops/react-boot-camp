import React from "react";

const Component = ({ greet = "World" }) => (
  <h1 className="greeting">Hello, {greet}!</h1>
);

export default Component;
