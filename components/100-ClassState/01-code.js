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