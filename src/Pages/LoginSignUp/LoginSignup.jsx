import React, { useEffect, useState } from 'react'
import LogoPng from '../../Assets/Images/LogoPng.png'

const LoginSignUp = () => {
    const [switche , setSwitche] = useState(false)

    const handleSwitche = (selection) => {
        console.log(switche , "clg")
            setSwitche(selection === true ? false : true)
    }

    useEffect(() => {
        handleSwitche()
    } , [])
  return (
    <div className='w-full flex min-h-screen py-8 justify-center items-center flex-col text-fontColor bg-darkBG text-center'>
        <span className='w-60  h-32' style={{backgroundImage : `url(${LogoPng})` , backgroundSize : 'cover' , backgroundRepeat : 'no-repeat' , backgroundPosition : 'center'}}></span>

        {/* //bullet to switch */}

        <div  className=' relative flex justify-center w-60 mb-10 rounded-full transition-all border-2 border-orangeBG  bg-orangeBG items-center cursor-pointer text-white'>
            <span className={`w-1/2 h-full absolute rounded-full duration-300 transition-all ${switche ? 'right-0' : 'left-0'} bg-darkBG `}/>
            <span  onClick={() => handleSwitche(true)} className='rounded-full flex-1 px-5 py-3  font-semibold z-20'>Login</span>
            <span onClick={() => handleSwitche(false)} className='rounded-full flex-1 px-5 py-3 font-semibold z-20'>SignUp</span>

        </div>

        <div className='md:w-[500px] relative w-full overflow-hidden  '>
            <div className={`w-fit transition-all duration-700 ${switche ? '-translate-x-1/2' : 'translate-x-0'} flex`}>
                {/* Login items  */}
             <div className='flex flex-col gap-4 md:w-[500px] bg-white/10 p-4 rounded-md'>
            <span className='flex flex-col gap-y-2 text-left mb-4'>
                <h1 className="font-semibold text-lg text-white">Email</h1>
                <input
                type="text"
                placeholder="Enter Your Title"
                className="bg-iconBG w-full p-2 outline-none border-none rounded-md"
                />    
            </span>

            <span className='flex flex-col gap-y-2 text-left'>
                <h1 className="font-semibold text-lg text-white">Password</h1>
                <input
                type="password"
                placeholder="Enter Your Title"
                className="bg-iconBG w-full p-2 outline-none border-none rounded-md"
                />    
            </span> 

            <span className='w-full '>
                <label className="flex items-center gap-2 cursor-pointer">
                {/* <input type="checkbox" className="accent-orangeBG" /> */}
                <span className="text-base font-medium underline text-white">Forget Password?</span>
                </label>  
            </span>

            <div className='w-full curs mt-8 flex justify-center items-center'>
            <h1 className='bg-orangeBG text-white cursor-pointer font-semibold md:px-40 py-2 md:w-auto w-full text-center rounded-md '> Login </h1>
            </div>
            
            </div>

            {/* SignUp Items  */}
            <div className='flex  transition-all flex-col gap-4 md:w-[500px]  bg-white/10 p-4 rounded-xl'>
                <span className='flex flex-col gap-y-2 text-left '>
                    <h1 className="font-semibold text-lg text-white">Email</h1>
                    <input
                    type="text"
                    placeholder="Enter Your Title"
                    className="bg-iconBG w-full p-2 outline-none border-none rounded-md"
                    />    
                </span>

                <span className='flex flex-col gap-y-2 text-left'>
                    <h1 className="font-semibold text-lg text-white">Password</h1>
                    <input
                    type="password"
                    placeholder="Enter Your Title"
                    className="bg-iconBG w-full p-2 outline-none border-none rounded-md"
                    />    
                </span> 

                <span className='flex flex-col gap-y-2 text-left'>
                    <h1 className="font-semibold text-lg text-white">Confirm Password</h1>
                    <input
                    type="password"
                    placeholder="Enter Your Title"
                    className="bg-iconBG w-full p-2 outline-none border-none rounded-md"
                    />    
                </span> 



                <div className='w-full curs mt-8 flex justify-center items-center'>
                <h1 className='bg-orangeBG text-white cursor-pointer  font-semibold md:px-40 py-2 md:w-auto w-full text-center rounded-md '> Sign Up </h1>
                </div>
                
            </div>
            </div>
        </div>



    </div>
  )
}

export default LoginSignUp
