import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Intro from './component/Intro'
import About from './component/About'
import Journey from './component/Journey'
import Skills from './component/Skills'
import Project from './component/Project'
import Education from './component/Education'
import Contact from './component/Contact'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Fotter from './component/Fotter'
import Scrool from './component/Scrool'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Scrool />
        <Navbar />
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/about' element={<About />} />
          <Route path='/journey' element={<Journey />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/project' element={<Project />} />
          <Route path='/education' element={<Education />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Fotter />

      </BrowserRouter>



    </>
  )
}

export default App
