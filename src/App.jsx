import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Separator from './components/Separator'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Header/>
        <Home/>
        <Separator/>
        <Skills/>
        <Projects/>
        <Separator/>
        <Contact/>
      </div>
       
    </>
  )
}

export default App
