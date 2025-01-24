import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../CommonComps/NavBar/Navbar'
import Hero from './HomeComps/Hero'
import HowTo from './HomeComps/HowTo'
import OurPartners from './HomeComps/OurPartners'
import GiveEarn from './HomeComps/GiveEarn'
import Footer from '../../CommonComps/Footer/Footer'
import Loading from '../../CommonComps/Loading'
import { ContextAPI } from '../../GlobalProvider/ContextAPI'

const Home = () => {
  const { isAuthenticated, setIsAuthenticated, screenWidth , isLoading , setIsLoading } = useContext(ContextAPI)


  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='w-full font-mulish'>
      {isLoading ? (
        <>
        <Loading/> 
        </>        
      ) : (
        <>
        <Navbar/>
        <Hero/>
        <HowTo/>
        <OurPartners/>
        <GiveEarn/>
        <Footer/>
      
        </>
      )}
    </div>
  )
}

export default Home
