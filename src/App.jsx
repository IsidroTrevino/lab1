import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HolaMundo from './holaMundo'
import Variables from './variables'
import ImportJSON from './importJson'

function App() {

  return (
    <div>
      <HolaMundo />
      <Variables />
      <ImportJSON />
    </div>
  )
}

export default App
