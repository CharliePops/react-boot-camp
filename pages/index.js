import React from "react";
import { MiniEditor } from "@code-hike/mini-editor";
import { MiniBrowser } from "@code-hike/mini-browser";
import { useSpring } from "use-spring";
import useKeypress from "react-use-keypress";
import styles from "../styles/Home.module.css";
import Greet from "../components/01-JSX/01-component";
import GreetProps from "../components/02-Props/01-component";
import CounterState from "../components/03-State/01-component";
import CounterEffect from "../components/04-Lifecycle/01-component";
import CounterHook from "../components/05-Hooks/01-component";

const topic = "Topic";

export default function Home() {
  const [stepIndex, setIndex] = React.useState(0);

  const [progress] = useSpring(stepIndex, {
    decimals: 3,
    stiffness: 80,
    damping: 48,
    mass: 8,
  });

  useKeypress(["ArrowLeft", "ArrowRight"], (event) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else {
      nextSlide();
    }
  });

  const backward = stepIndex < progress;

  const editorSteps = [
    {
      code: require("!!raw-loader!../components/01-JSX/01-code.js").default,
      file: "Component.jsx",
      lang: "javascript",
    },
    {
      code: require("!!raw-loader!../components/01-JSX/01-code.js").default,
      file: "Component.jsx",
      lang: "javascript",
    },
    {
      code: require("!!raw-loader!../components/02-Props/01-code.js").default,
      file: "Component.jsx",
      lang: "javascript",
    },
    {
      code: require("!!raw-loader!../components/03-State/01-code.js").default,
      file: "Component.jsx",
      lang: "javascript",
    },
    {
      code: require("!!raw-loader!../components/04-Lifecycle/01-code.js")
        .default,
      file: "Component.jsx",
      lang: "javascript",
    },
    {
      code: require("!!raw-loader!../components/04-Lifecycle/02-code.js")
        .default,
      file: "Component.jsx",
      lang: "javascript",
    },
    {
      code: require("!!raw-loader!../components/05-Hooks/01-code.js").default,
      file: "Component.jsx",
      lang: "javascript",
    },
  ];

  const editorStyle = { padding: "0 10px", width: "100%", height: "800px" };
  const browserStyle = { height: "800px", width: "100%" };

  const browserSteps = [
    {
      children: (
        <div className={styles.browser_container}>
          <Greet />
        </div>
      ),
    },
    {
      children: (
        <div className={styles.browser_container}>
          <pre>{`
            const Greeting = React.createElement(
              "h1",
              { className: "greeting" },
              "Hello, Riot!"
            );
          `}</pre>
        </div>
      ),
    },
    {
      children: (
        <div className={styles.browser_container}>
          <GreetProps greet="Riot" />
        </div>
      ),
    },
    {
      children: (
        <div className={styles.browser_container}>
          <CounterState />
        </div>
      ),
    },
    {
      children: (
        <div className={styles.browser_container}>
          <CounterEffect />
        </div>
      ),
    },
    {
      children: (
        <div className={styles.browser_container}>
          <CounterEffect />
        </div>
      ),
    },
    {
      children: (
        <div className={styles.browser_container}>
          <CounterHook />
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    const nextIndex = stepIndex + 1;
    if (nextIndex < editorSteps.length) {
      setIndex(nextIndex);
    }
  };

  const prevSlide = () => {
    if (stepIndex > 0) {
      setIndex(stepIndex - 1);
    }
  };

  return (
    <div>
      <h1 className={styles.title}>{topic}</h1>
      <div className={styles.container}>
        <MiniEditor
          steps={editorSteps}
          style={editorStyle}
          progress={progress}
          backward={backward}
        />
        <MiniBrowser
          style={browserStyle}
          steps={browserSteps}
          progress={stepIndex}
          backward={backward}
          prependOrigin={true}
        />
      </div>
    </div>
  );
}
