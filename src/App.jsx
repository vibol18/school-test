import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MobileNavbar from './component/MobileNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MobileNavbar/>
    </>
  )
}

export default App
