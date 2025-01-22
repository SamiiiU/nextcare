import React, { useState } from 'react'
import logo from '../../Assets/Images/LogoPng.png'

const Navbar = () => {
    
    const [isNavbarVisible , setIsNavbarVisible] = useState(true)

  return (
    <div className={`z-50 fixed w-full px-10 transition-all ${isNavbarVisible ? 'translate-y-0' : '-translate-y-20'} flex  items-center shadow-sm text-white bg-darkBG`}>
        <div className='w-full  py-1 flex justify-between items-center'>
            <span className='w-32 h-14' style={{backgroundImage : `url(${logo})` , backgroundSize : 'cover' , backgroundPosition : 'center' }}></span>

            <span className=' flex justify-evenly items-center gap-x-8 '>
                <h1 className='flex flex-col text-lg font-bold items-center'>
                    Home 
                    <span className='w-full py-[2px] bg-orangeBG rounded-full'/>
                </h1>

                <h1 className='flex flex-col text-lg font-bold items-center'>
                    About 
                    <span className='w-full py-[2px] bg-orangeBG rounded-full'/>
                </h1>

            </span>
            <span className=' flex justify-evenly items-center gap-x-8 '>
                <h1 className='rounded-lg bg-orangeBG px-4 py-2 font-bold text-lg'>Donate</h1>
                <h1 className='rounded-lg bg-orangeBG px-4 py-2 font-bold text-lg'>Login</h1>

            </span>
        </div>
    </div>
  )
}

export default Navbar
