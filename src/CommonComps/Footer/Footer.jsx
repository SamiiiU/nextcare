import React from 'react'
import logo from '../../Assets/Images/LogoPng.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='w-full flex flex-col px-4 sm:px-16 md:px-28 2xl:px-80 
    pt-20 text-white  bg-darkBG'>
        <div className='w-full      flex xl:flex-row flex-col justify-center relative z-0 '>
        <div className='2xl:flex-1 w-full flex flex-col gap-y-4 p-6'>
            <span className='w-32 h-14 ' style={{backgroundImage : `url(${logo})` , backgroundSize : 'cover' , backgroundPosition : 'center' }}></span>

            <p>NextWear is a platform connecting 
                donors and NGOs to make clothing 
                donations simple, impactful, and 
                rewarding. Together, we’re making a 
                difference—one donation at a time.
                
            </p>
        </div>

        <div className='2xl:flex-1 w-full flex flex-col gap-y-4 p-6'>
            <h1 className='text-xl font-bold'>Quick Links</h1>
            <span className='flex w-full gap-x-10 flex-wrap'>
                <Link to={'/'}  className='hover:font-bold transition-all'>Home</Link >
                <Link to={'/About'}  className='hover:font-bold transition-all'>DOnate</Link >
                <Link to={'/Donate'}  className='hover:font-bold transition-all'>Donate</Link >

            </span>
        </div>

        <div className='2xl:flex-1 w-full flex flex-col gap-y-4 p-6'>
            <h1 className='text-xl font-bold'>Contact Us</h1>
            <span className='flex flex-col w-full p-6 flex-wrap bg-white/20 rounded-2xl'>
                <h1 className='font-bold'>123 Giving Lane, Your City, 
                Country</h1>
                <h1 className='font-bold'>+123 456 7890
                </h1>

                <h1  className='font-bold'>support@nextcare.com</h1>

            </span>
        </div>
      
        </div>

        <div className='w-full  border-t-2 border-white py-4 text-center'>
            <h1>© 2025 NextCare. All rights reserved.</h1>
        </div>
    </div>
  )
}

export default Footer
