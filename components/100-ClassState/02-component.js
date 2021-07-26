import { useState } from "react"

class ClassWithState {
  constructor(initial = 0) {
    this.internalState = initial
  }
  increment = () => {
    this.internalState++
    return this.internalState
  }
  decrement = () => {
    this.internalState--
    return this.internalState
  }
  get state() {
    return this.internalState
  }
  set state(value) {
    this.internalState = value
    return this.internalState
  }
}

const instance = new ClassWithState(10)

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