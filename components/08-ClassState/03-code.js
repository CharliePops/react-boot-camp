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

const Reader = () => <h1>Current count {instance.state}</h1>
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

export default App