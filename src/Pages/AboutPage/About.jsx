import React from 'react'
import Navbar from '../../CommonComps/NavBar/Navbar'
import Hero from './AboutComps/Hero'
import Story from './AboutComps/Story'
import Role from './AboutComps/Role'
import Footer from '../../CommonComps/Footer/Footer'

const About = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <Hero/>
      <Story/>
      <Role/>
      <Footer/>

    </div>
  )
}

export default About
