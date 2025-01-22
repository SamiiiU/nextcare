import React from 'react'
import Navbar from '../../CommonComps/NavBar/Navbar'
import Hero from './HomeComps/Hero'
import HowTo from './HomeComps/HowTo'
import OurPartners from './HomeComps/OurPartners'
import GiveEarn from './HomeComps/GiveEarn'
import Footer from '../../CommonComps/Footer/Footer'

const Home = () => {
  return (
    <div className='w-full font-mulish'>
      <Navbar/>
      <Hero/>
      <HowTo/>
      <OurPartners/>
      <GiveEarn/>
      <Footer/>
      
    </div>
  )
}

export default Home
