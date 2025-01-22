import React from 'react'
import { FiLogIn } from 'react-icons/fi'

const GiveEarn = () => {

    const earn = [
        {icon : <FiLogIn /> , heading : "Create an Account" , para : "Start by signing up or logging in to your NextWear account to access all features. It's quick and easy!" , }
    ]
     
  return (
    <div className='  w-full -translate-y-16 py-20  px-4 sm:px-16 md:px-28 2xl:px-80 
     flex flex-col justify-center relative z-0' >
        <h1 className='text-4xl font-bold text-darkBG mb-6'>Earn as You Give</h1>
            <p>NextWear values your generosity and believes in rewarding you for making a difference. 
            Every time you donate, you earn reward points that can be redeemed for exciting discounts, 
            exclusive coupons, or thoughtful gifts. To encourage even more impactful giving, we’ve 
            introduced a special incentive: the top three donors each month will receive exclusive 
            surprise gifts as a token of appreciation. Join us in spreading kindness and enjoy the 
            rewards of giving back!</p>      

            <div className='w-full flex justify-center gap-8 flex-wrap '>
            {earn.map((earn , index) => (
            <div key={index} className='max-w-[300px]  shadow-lg rounded-2xl bg-white p-4 flex flex-col justify-center items-center gap-4'>
                <span className='text-orangeBG text-4xl'>{earn.icon}</span>
                <h1 className='text-black font-bold'>{earn.heading}</h1>
                <p className='text-center'>{earn.para}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default GiveEarn
