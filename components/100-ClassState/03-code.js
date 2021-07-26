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