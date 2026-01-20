import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/card.jsx'



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Card1 />
    </>
  )
}

export default App
