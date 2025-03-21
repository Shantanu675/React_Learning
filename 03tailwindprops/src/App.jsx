import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    branch : "IT",
    type : "Regular"
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-violet-700 text-black rounded-xl p-4'>Tailwind test</h1>
      <Card name="Ajay" btnText="I'm Dad"/> 
      <Card name= "Shantanu" someObj={newArr}/> 
      <Card name= "Shruti"/> 
    </>
  )
}

export default App
