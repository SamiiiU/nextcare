import React, { useContext, useEffect, useState } from 'react';
import logo from '../../Assets/Images/LogoPng.png';
import { Link } from 'react-router-dom';
import { ContextAPI } from '../../GlobalProvider/ContextAPI';
import { FaUser } from "react-icons/fa6";
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { LuMenu } from 'react-icons/lu';
import CustomButton from '../CustomButton/CustomButton';

const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication
    const { screenWidth, setIsLoading } = useContext(ContextAPI);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // On Component Mount: Check Local Storage
    useEffect(() => {
        const loginStatus = localStorage.getItem('isLogin') === "true"; // Convert to boolean
        setIsAuthenticated(loginStatus);
        console.log("isLogin is:", loginStatus);
    }, []); // Empty dependency array ensures this runs once on mount

    // Logout Function
    const logout = () => {
        setIsLoading(true);
        localStorage.setItem('username', "User");
        localStorage.setItem('role', "ROLE_USER");
        localStorage.removeItem('token');

        setTimeout(() => {
            localStorage.setItem('isLogin', "false"); // Update localStorage
            setIsAuthenticated(false); // Update state immediately
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }, 100);
    };

    return (
        <div className={`z-50 fixed w-full px-10 transition-all ${isNavbarVisible ? 'translate-y-0' : '-translate-y-20'} flex items-center shadow-sm text-white bg-darkBG`}>
            {screenWidth > 1000 ? (
                // Large screen navbar
                <div className='w-full py-1 flex justify-between items-center'>
                    <span className='w-32 h-14' style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></span>

                    <span className='flex justify-evenly items-center gap-x-8'>
                        <div className='flex flex-col group items-center'>
                            <Link to={"/"} className='text-lg font-bold z-10 bg-darkBG'>Home</Link>
                            <span className='w-full transition-all group-hover:translate-y-0 -translate-y-4 z-0 py-[2px] bg-orangeBG rounded-full' />
                        </div>

                        <div className='flex flex-col group items-center'>
                            <Link to={"/About"} className='text-lg font-bold z-10 bg-darkBG'>About</Link>
                            <span className='w-full transition-all group-hover:translate-y-0 -translate-y-4 z-0 py-[2px] bg-orangeBG rounded-full' />
                        </div>
                    </span>

                    <span className='flex justify-evenly items-center gap-x-8'>
                        <Link to={"/Donate"} className='rounded-lg bg-orangeBG px-4 py-2 font-bold text-lg'>Donate</Link>

                        {isAuthenticated ? (
                            <span className='p-3 w-10 group flex flex-col justify-center items-center relative cursor-pointer h-10 rounded-full z-0 bg-orangeBG text-white'>
                                <FaUser />
                                <h1
                                    onClick={logout}
                                    className='z-0 rounded-lg group-hover:block translate-y-10 hidden bg-white text-black px-4 py-2'
                                >
                                    Logout
                                </h1>
                            </span>
                        ) : (
                            <Link to={"/LoginSignup"} className='rounded-lg bg-orangeBG px-4 py-2 font-bold text-lg'>Login</Link>
                        )}
                    </span>
                </div>
            ) : (
                <>
                    {/* Small screen navbar */}
                    <div className='w-full py-1 flex justify-between items-center'>
                        <div className='w-36 h-[4rem] px-4 py-4' style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> </div>

                        <span onClick={handleMenu} className='text-4xl text-right'>{menuOpen ? <RxCross2 /> : <LuMenu />}</span>
                    </div>

                    {/* Small device navigation */}
                    <div className={`fixed px-10 py-10 w-full h-screen top-0 z-50 bg-darkBG left-0 ${menuOpen ? 'translate-y-0' : 'translate-y-full'} transition-all duration-300`}>
                        <div className='w-full flex justify-between items-center'>
                            <div className='w-36 h-[4rem] px-4 py-4' style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> </div>

                            <span onClick={handleMenu} className='text-4xl text-right'>{menuOpen ? <RxCross2 /> : <LuMenu />}</span>
                        </div>

                        <div className='w-full px-5 mt-6 flex flex-col'>
                            <Link to={"/Home"} className='sm:text-5xl text-3xl text-white py-6 border-b-2 border-white'>Home</Link>
                            <Link to={"/About"} className='sm:text-5xl text-3xl text-white py-6 border-b-2 border-white'>About</Link>
                            <Link to={"/Donate"} className='sm:text-5xl text-3xl text-white py-6 border-b-2 border-white'>Donate</Link>
                            <Link to={"/LoginSignUp"} className='sm:text-5xl text-3xl text-white py-6 border-b-2 border-white'>Login</Link>
                        </div>

                        <Link to={"/Admin"}><CustomButton className={'absolute bottom-10 left-1/2 -translate-x-1/2'} text={"Go To Admin"} /></Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
