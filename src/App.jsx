import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MobileNavbar from './component/MobileNavbar'
import HeroSection from './component/HeroSection'
import Developer from './component/Developer'
import Container from './component/Container'
import Contact from './component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MobileNavbar/>
     <HeroSection/>
     <Container/>
     <Developer/>
     <Contact/>
    </>
  )
}

export default App
