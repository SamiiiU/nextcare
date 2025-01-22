import React, { useState } from 'react'
import { FiLogIn } from "react-icons/fi";
import { SiKnowledgebase } from "react-icons/si";
import { BiSolidAward, BiSolidDonateBlood, BiSolidHappyHeartEyes } from "react-icons/bi";





const HowTo = () => {

    const how = [
        {icon : <FiLogIn /> , heading : "Create an Account" , para : "Start by signing up or logging in to your NextWear account to access all features. It's quick and easy!" , },
        {icon : <SiKnowledgebase /> , heading : "Learn About Us" , para : "Explore different donation drives or create a campaign of your own to support a cause you're passionate about." , },
        {icon : <BiSolidDonateBlood />, heading : "Donate Items" , para : "Select the items you want to donate and schedule a pickup or find a nearby drop-off location. Every item counts!" , },
        {icon : <BiSolidAward />, heading : "Earn Rewards" , para : "Start by signing up or logging in to your NextWear account to access all features. It's quick and easy!" , },
        {icon: <BiSolidHappyHeartEyes  />, heading: "Be Happy, Make Happy", para: "Join the NextWear family today and spread happiness! Sign up or log in to unlock exciting features and make your journey joyful and effortless.",}
    ]

    const [activeIndex , setActiveIndex] = useState(null)
  return (
    <div className='  w-full -translate-y-16   px-4 sm:px-16 md:px-28 2xl:px-80 
     flex flex-col justify-center relative z-0'>
        <div className='w-full flex justify-center gap-8 flex-wrap '>
        {how.map((isHow , index) => (
            <div key={index} className='max-w-[300px]  shadow-lg rounded-2xl bg-white p-4 flex flex-col justify-center items-center gap-4'>
                <span className='text-orangeBG text-4xl'>{isHow.icon}</span>
                <h1 className='text-black font-bold'>{isHow.heading}</h1>
                <p className='text-center'>{isHow.para}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default HowTo
