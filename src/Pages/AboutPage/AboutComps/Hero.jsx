import React from 'react'
import bgImg from '../../../Assets/Images/HomeImages/bgHero.jpg'
import CustomButton from '../../../CommonComps/CustomButton/CustomButton'

const Hero = () => {
  return (
    <div className='w-full text-white 2xl:min-h-[80vh] min-h-screen   px-4 sm:px-16 md:px-28 2xl:px-80 
    sm:pt-40 pt-28 pb-28 flex flex-col justify-center relative z-0' style={{backgroundImage : `url(${bgImg})` , backgroundSize : 'cover' , backgroundPosition : 'center' }}>
      <span className='w-full h-full absolute top-0 z-10 left-0 bg-gradient-to-b from-transparent 
      to-darkBG' />
      <span className='w-full h-full absolute top-0 z-10 left-0  bg-gradient-to-b from-darkBG 
      to-transparent' />

      <div className='w-full  flex justify-center gap-6 items-center  flex-col  z-20'>
            <CustomButton text={"About NextCare"} className={"text-2xl"} />

            <h1 className='font-bold text-5xl text-center'>Caring For Communities</h1>

            <h1 className='font-bold text-3xl text-center'>"Our mission is to connect donors and NGOs to create a positive,
            lasting impact through acts of care and kindness."</h1>


      </div>

    </div>
  )
}

export default Hero
