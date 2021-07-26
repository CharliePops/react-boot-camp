class ClassWithState {
  constructor(initial = 0) {
    this.internalState = initial
  }
  increment = () => {
    this.state = this.internalState + 1
    return this.internalState
  }
  decrement = () => {
    this.state = this.internalState - 1
    return this.internalState
  }
  get state() {
    return this.internalState
  }
  set state(value) {
    this.internalState = value
    document.title = `Current count ${this.internalState}`
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