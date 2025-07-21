import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor : color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
            <button onClick={() => setColor("blue")} type="button"
              className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Blue</button>

            <button onClick={() => setColor("purple")} type="button"
              className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-purple-700 hover:bg-purple-800 active:bg-purple-700">Purple</button>

            <button onClick={() => setColor("red")} type="button"
              className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-red-700 hover:bg-red-800 active:bg-red-700">Red</button>

            <button onClick={() => setColor("orange")} type="button"
              className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-orange-700 hover:bg-orange-800 active:bg-orange-700">Orange</button>

            <button onClick={() => setColor("green")} type="button"
              className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-green-800 active:bg-green-700">Green</button>

            <button onClick={() => setColor("#334")} type="button"
              className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#333] hover:bg-[#222] active:bg-[#333]">Dark</button>
            
            <button onClick={() => setColor("yellow")} type="button"
              className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-yellow-700 hover:bg-yellow-800 active:bg-yellow-700">Yellow</button>

            <button onClick={() => setColor("#bd228c")} type="button"
              className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#d60a73] hover:bg-[#bd228c] active:bg-[#f02bd9]">Pink</button>
          </div>
        </div>
          
    </div>
  )
}

export default App
