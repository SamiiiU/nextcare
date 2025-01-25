import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../GlobalProvider/BASE_URL';
import LogoPng from '../../Assets/Images/LogoPng.png';
import { ContextAPI } from '../../GlobalProvider/ContextAPI';
import bgImg from '../../Assets/Images/HomeImages/bgHero.jpg'
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const LoginSignUp = () => {
    const [switche , setSwitch] = useState(false);
    

    const {screenWidth} = useContext(ContextAPI)


    const handleSwitch = (selection) => {
        setSwitch(selection === true ? false : true);
    };





    return (
        <div className='flex transition-all flex-col items-center justify-center w-full min-h-screen py-8 text-center bg-darkBG px-8 ' style={{backgroundImage : `url(${bgImg})` , backgroundSize : 'cover' , backgroundPosition : 'center' }}>

            {/* gradient effect  */}
            <span className='w-full h-full absolute top-0 z-0 left-0 bg-gradient-to-b from-transparent 
                to-darkBG' />
            <span className='w-full h-full absolute top-0 z-0 left-0  bg-gradient-to-b from-darkBG 
      to-transparent' />
            {/* //Logo here  */}
            <span className='md:h-32 md:w-60 w-40 h-24 z-10' style={{backgroundImage: `url(${LogoPng})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></span>

            <div className='z-10 relative flex items-center justify-center mb-10 text-white transition-all border-2 rounded-full  cursor-pointer w-60 border-orangeBG bg-orangeBG'>
                <span className={`w-1/2 h-full absolute rounded-full duration-300 transition-all ${switche ? 'translate-x-1/2' : '-translate-x-1/2'} bg-darkBG`} />
                <span onClick={() => handleSwitch(true)} className='z-20 flex-1 px-5 py-3 font-semibold rounded-full'>Login</span>
                <span onClick={() => handleSwitch(false)} className='z-20 flex-1 px-5 py-3 font-semibold rounded-full'>SignUp</span>
            </div>

            <div className='md:w-[500px]  relative w-full overflow-hidden'>
                <div >
                    {screenWidth > 700 ? (
                        <div className={`w-fit  transition-all duration-700 ${switche ? '-translate-x-1/2' : 'translate-x-0'} flex`}>

                            {/* Login  */}
                            <Login classname={'flex flex-col gap-4 md:w-[500px] screen bg-white/10 p-4 rounded-md'}/>
                            {/* SignUp  */}
                            <Signup className={'flex flex-col gap-4 md:w-[500px] screen bg-white/10 p-4 rounded-md'}/>
                        </div>
                    ) : (
                        <>
                        {switche ? (
                            // small device SignUp
                            <Signup className={"flex flex-col gap-4 md:w-[500px] screen bg-white/10 p-4 rounded-xl"}/>
                        ) : (
                            // small device Login
                           <Login classname={"flex flex-col gap-4 md:w-[500px] screen bg-white/10 p-4 rounded-md"}/>
                        ) }
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginSignUp;
