import { useState } from 'react'

import './App.css'

function App() {
  //let counter = 10

  const [counter,setCounter] = useState(10)

  const addvalue = () => {
    // counter = counter+1
    // console.log(counter)
    setCounter(counter+1)
    setCounter((prevCounter) => prevCounter +1)
    setCounter((prevCounter) => prevCounter +1)
    setCounter((prevCounter) => prevCounter +1)
    setCounter((prevCounter) => prevCounter +1)
  }

  const removevalue = ()=>
  {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course vite 02 {counter}</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>add value</button>{" "}
      <button onClick={removevalue}>remove value</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
