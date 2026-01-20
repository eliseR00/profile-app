import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Card1.jsx'
import Card1 from './components/Card1.jsx'
import Card2 from './components/card2.jsx'

import Card1 from './components/Card1.jsx'
import Card2 from './components/card2.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Navbar />
    <About />
    <Card1 />
    <Card2 />
    </>
  )
}

export default App
