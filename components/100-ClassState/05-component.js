import { createContext, useContext, useEffect, useState } from "react"

const noop = () => ({})
const CounterValueContext = createContext(0)
const CounterSetValueContext = createContext(noop)

const CounterProvider = ({ initial = 0, children }) => {
  const [value, setValue] = useState(initial)
  
  useEffect(() => {
    document.title = `Current count ${value}`
  }, [value])

  return (
    <CounterSetValueContext.Provider value={setValue}>
      <CounterValueContext.Provider value={value}>
        {children}
      </CounterValueContext.Provider>
    </CounterSetValueContext.Provider>
  )
}

const Reader = () => {
  const value = useContext(CounterValueContext)
  return <h1>Current count {value}</h1>
}

const Clicker = () => {
  const setValue = useContext(CounterSetValueContext)
  const decrement = () => setValue(x => x - 1)
  const increment = () => setValue(x => x + 1)
  return (
    <p>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
    </p>
  )
}

const App = () => (
  <CounterProvider initial={10}>
    <div>
      <Reader/>
      <Clicker/>
    </div>
  </CounterProvider>
)

export default App
