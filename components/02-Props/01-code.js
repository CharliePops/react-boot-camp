// Greeting.jsx

const Greeting = (props) => {
  return <h1 className="greeting">Hello, {props.greet}!</h1>;
};

// App.jsx

const App = () => {
  return <Greeting greet="Riot" />;
};
