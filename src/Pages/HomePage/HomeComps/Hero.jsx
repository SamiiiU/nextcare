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

      <div className='w-full flex justify-center gap-6 items-start lg:flex-row flex-col  z-20'>
        <span className='flex-1 flex-col gap-y-4'>
            <h1 className='font-extrabold text-5xl leading-relaxed mb-4'>“Together, We Bring Compassion and Care to Every Community”</h1>
            <CustomButton text={"Learn More"} />
        </span>

        <span className='flex-1 flex flex-col  gap-y-8 px-4 py-2 bg-white/20 rounded-2xl '>
            <h1 className='text-2xl font-bold'>NextCare - Empowering Generosity</h1>
            <p>Make a meaningful difference with NextWear, 
            a platform connecting donors and NGOs to facilitate 
            clothing donations. Join us in spreading warmth and 
            smiles by donating today. Together, we can create a 
            community where no one is left behind.</p>
            <CustomButton text={"Donate Now"} />
        </span>

      </div>

      <div className='w-full flex pt-8  justify-center items-center '><CustomButton text={"How It Works ?"} className={"z-20"}/></div>
    </div>
  )
}

export default Hero
