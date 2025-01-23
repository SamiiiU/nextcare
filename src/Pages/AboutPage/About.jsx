import React, { useEffect, useState } from 'react'
import Navbar from '../../CommonComps/NavBar/Navbar'
import Hero from './AboutComps/Hero'
import Story from './AboutComps/Story'
import Role from './AboutComps/Role'
import Footer from '../../CommonComps/Footer/Footer'
import Loading from '../../CommonComps/Loading'

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='w-full'>
      {isLoading ? (
        <>
        <Loading/>
        </>
      ) : (
        <>
          <Navbar/>
          <Hero/>
          <Story/>
          <Role/>
          <Footer/>
        </>
      )}


    </div>
  )
}

export default About
