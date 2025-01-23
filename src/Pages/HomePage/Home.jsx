import React, { useEffect, useState } from 'react'
import Navbar from '../../CommonComps/NavBar/Navbar'
import Hero from './HomeComps/Hero'
import HowTo from './HomeComps/HowTo'
import OurPartners from './HomeComps/OurPartners'
import GiveEarn from './HomeComps/GiveEarn'
import Footer from '../../CommonComps/Footer/Footer'
import Loading from '../../CommonComps/Loading'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top whenever the component mounts
    window.scrollTo(0, 0);

    // Simulate a loader (e.g., API call)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loader after 3 seconds
    }, 1000);

    // Cleanup function to clear timer
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
