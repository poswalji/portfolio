import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import MyWork from './components/MyWork'
import Contect from './components/Contect'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contect/>
      <Footer/>
     </div>
     
    </>
  )
}

export default App
