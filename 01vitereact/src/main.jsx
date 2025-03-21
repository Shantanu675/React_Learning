import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blanks'
//     },
//     children: 'Click me to visit'
// }

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherUser //evaluated expression not use if-else statement inside objects
)// babble inject it 

createRoot(document.getElementById('root')).render(   //maintain self DOM
  
    reactElement
  
)
