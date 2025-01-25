import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../CommonComps/NavBar/Navbar'
import Hero from './DonationComps/Hero'
import Footer from '../../CommonComps/Footer/Footer'
import Form from './DonationComps/Form'
import Loading from '../../CommonComps/Loading'
import { ContextAPI } from '../../GlobalProvider/ContextAPI'

const Donate = () => {
  const {  isLoading , setIsLoading } = useContext(ContextAPI)


    useEffect(() => {
      setIsLoading(true)

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
        <Form/>
        <Footer/>
        </>
      )}
    </div>
  )
}

export default Donate
