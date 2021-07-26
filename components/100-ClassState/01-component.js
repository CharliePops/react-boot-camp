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
  return (
    <div>
      <h1>Current count {instance.state}</h1>
      <p>
        <button onClick={instance.decrement}>decrement</button>
        <button onClick={instance.increment}>increment</button>
      </p>
    </div>
  )
}

export default App