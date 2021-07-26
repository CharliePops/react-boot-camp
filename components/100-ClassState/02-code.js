import { useState } from "react"

const App = () => {
  const [_, setState] = useState(0);
  const refresh = () => setState(x => x ? 0 : 1)
  const decrement = () => {
    instance.decrement()
    refresh()
  }
  const increment = () => {
    instance.increment()
    refresh()
  }
  return (
    <div>
      <h1>Current count {instance.state}</h1>
      <p>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
      </p>
    </div>
  )
}

export default App