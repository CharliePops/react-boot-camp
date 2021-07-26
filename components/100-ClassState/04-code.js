import { useState } from "react"
import useInterval from "use-interval"

const Reader = () => {
  const [_, setState] = useState(0)
  useInterval(() => setState(x => x ? 0 : 1), 30)
  return <h1>Current count {instance.state}</h1>
}

const Clicker = () => (
  <p>
    <button onClick={instance.decrement}>decrement</button>
    <button onClick={instance.increment}>increment</button>
  </p>
)

const App = () => (
  <div>
    <Reader/>
    <Clicker/>
  </div>
)
