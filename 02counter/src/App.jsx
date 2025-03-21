import { useState } from 'react'
import './App.css'

  function App() {

    const [counter, setCounter] = useState(15);

    const addVal = () =>{
      if(counter < 31){
        setCounter(counter+1);
      }
    }

    const removeVal = () =>{
      if(counter > 1){
        setCounter(counter-1);
      }
    }

    return (
      <>
        <h1>Shantanu Danej | Set Date</h1>
        <h2>Date : {counter}</h2>

        <button onClick={addVal}>Add Value</button>
        <br />
        <button onClick={removeVal}>Remove Value</button>
      </>
    )
  }

export default App
