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

import ClassStateComponent01 from  '../components/08-ClassState/01-component'
import ClassStateComponent02 from  '../components/08-ClassState/02-component'
import ClassStateComponent03 from  '../components/08-ClassState/03-component'

const topic = [
  "JSX",
  "JSx is JavaScript",
  "Component Properties",
  "Component State",
  "Lifecycle (Effects)",
  "Lifecycle (Effects)",
  "Hooks",
  "Classes With State: the problem",
  "Classes With State: the hacky solution",
  "Classes With State: why is not ideal",
];



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
    
    // 08-ClassState
    {
      code: require("!!raw-loader!../components/08-ClassState/01-code.js").default,
      file: "Component.jsx",
      lang: "javascript",
    },
    {
      code: require("!!raw-loader!../components/08-ClassState/02-code.js").default,
      file: "Component.jsx",
      lang: "javascript",
    },
    {
      code: require("!!raw-loader!../components/08-ClassState/03-code.js").default,
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
    // 08-ClassState
    {
      children: (
        <div className={styles.browser_container}>
          <ClassStateComponent01 />
        </div>
      ),
    },
    {
      children: (
        <div className={styles.browser_container}>
          <ClassStateComponent02 />
        </div>
      ),
    },
    {
      children: (
        <div className={styles.browser_container}>
          <ClassStateComponent03 />
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
      <h1 className={styles.title}>{topic[stepIndex]}</h1>
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
