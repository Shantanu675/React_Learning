import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)


  const generatePassword = useCallback( () => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(symbolAllowed) str += "!@#$%^&*()_+-={}[]|~`\:;'<>?,./"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char) 
    }

    setPassword(password) // For optimizatiom

  }, [length, numberAllowed, symbolAllowed, setPassword])

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, symbolAllowed, generatePassword])

  return (
    <>
      <div className='w-full max-w-screen-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8
      text-orange-500 bg-gray-600'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-4 px-3 bg-slate-300'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button 
            onClick={copyPasswordToClipboard} 
            type="button"
            className="px-5 py-2.5 rounded-bl-none rounded-tl-none text-white text-sm tracking-wider font-medium outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700"
            >Copy</button>

        </div>

        <div className='flex text-sm justify-between'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label className='font-semibold'>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label className='font-semibold'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={symbolAllowed}
              id="symbolInput"
              onChange={() => {
                setSymbolAllowed((prev) => !prev)
              }}
            />
            <label className='font-semibold'>Symbols</label>
          </div>
        </div>
      </div>   
    </>
  )
}

export default App
