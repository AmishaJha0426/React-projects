import { useState } from "react"

function App() {
  let  [counter, setCounter] = useState(15)

  const add= () => {
    if(counter<20){
      setCounter(counter + 1);
    }
    
  }
  const subtract = () => {
    if(counter>0){
      setCounter(counter - 1);
    }
  }

  return (
    
    <>
      <h1>Counter {counter}</h1>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </>
  )
}

export default App
