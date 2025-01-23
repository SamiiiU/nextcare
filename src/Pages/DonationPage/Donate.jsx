import React from 'react'
import Navbar from '../../CommonComps/NavBar/Navbar'
import Hero from './DonationComps/Hero'
import Footer from '../../CommonComps/Footer/Footer'
import Form from './DonationComps/Form'

const Donate = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <Hero/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Donate
