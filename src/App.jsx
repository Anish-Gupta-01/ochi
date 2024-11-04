import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/marquee'
import About from './components/About'
import Eyebar from './components/Eyebar'
import Featured from './components/Featured'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (

    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      < LandingPage />
      < Marquee/>
      < About/>
      <Eyebar/>
      <Featured/>
      <Footer/>
    </div>
    
  )
}

export default App