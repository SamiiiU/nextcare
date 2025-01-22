import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../GlobalProvider/BASE_URL';
import LogoPng from '../../Assets/Images/LogoPng.png';

const LoginSignUp = () => {
    const [switche , setSwitche] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSwitche = (selection) => {
        setSwitche(selection === true ? false : true);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/signin`, {
                email,
                password,
            });
            const { token, role } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            console.log('Login successful:', response.data);
            // Handle successful login
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error
        }
    };

    const handleSignUp = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/signup`, {
                email,
                password,
                confirmPassword,
            });
            const { token, role } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            console.log('Signup successful:', response.data);
            // Handle successful signup
        } catch (error) {
            console.error('Signup error:', error);
            // Handle signup error
        }
    };

    useEffect(() => {
        handleSwitche();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center w-full min-h-screen py-8 text-center text-fontColor bg-darkBG'>
            <span className='h-32 w-60' style={{backgroundImage: `url(${LogoPng})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></span>

            <div className='relative flex items-center justify-center mb-10 text-white transition-all border-2 rounded-full cursor-pointer w-60 border-orangeBG bg-orangeBG'>
                <span className={`w-1/2 h-full absolute rounded-full duration-300 transition-all ${switche ? 'right-0' : 'left-0'} bg-darkBG`} />
                <span onClick={() => handleSwitche(true)} className='z-20 flex-1 px-5 py-3 font-semibold rounded-full'>Login</span>
                <span onClick={() => handleSwitche(false)} className='z-20 flex-1 px-5 py-3 font-semibold rounded-full'>SignUp</span>
            </div>

            <div className='md:w-[500px] relative w-full overflow-hidden'>
                <div className={`w-fit transition-all duration-700 ${switche ? '-translate-x-1/2' : 'translate-x-0'} flex`}>
                    <div className='flex flex-col gap-4 md:w-[500px] bg-white/10 p-4 rounded-md'>
                        <span className='flex flex-col mb-4 text-left gap-y-2'>
                            <h1 className="text-lg font-semibold text-white">Email</h1>
                            <input
                                type="text"
                                placeholder="Enter Your Title"
                                className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </span>

                        <span className='flex flex-col text-left gap-y-2'>
                            <h1 className="text-lg font-semibold text-white">Password</h1>
                            <input
                                type="password"
                                placeholder="Enter Your Title"
                                className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </span>

                        <span className='w-full'>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <span className="text-base font-medium text-white underline">Forget Password?</span>
                            </label>
                        </span>

                        <div className='flex items-center justify-center w-full mt-8 curs'>
                            <h1 onClick={handleLogin} className='w-full py-2 font-semibold text-center text-white rounded-md cursor-pointer bg-orangeBG md:px-40 md:w-auto'>Login</h1>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 md:w-[500px] bg-white/10 p-4 rounded-xl'>
                        <span className='flex flex-col text-left gap-y-2'>
                            <h1 className="text-lg font-semibold text-white">Email</h1>
                            <input
                                type="text"
                                placeholder="Enter Your Title"
                                className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </span>

                        <span className='flex flex-col text-left gap-y-2'>
                            <h1 className="text-lg font-semibold text-white">Password</h1>
                            <input
                                type="password"
                                placeholder="Enter Your Title"
                                className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </span>

                        <span className='flex flex-col text-left gap-y-2'>
                            <h1 className="text-lg font-semibold text-white">Confirm Password</h1>
                            <input
                                type="password"
                                placeholder="Enter Your Title"
                                className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </span>

                        <div className='flex items-center justify-center w-full mt-8 curs'>
                            <h1 onClick={handleSignUp} className='w-full py-2 font-semibold text-center text-white rounded-md cursor-pointer bg-orangeBG md:px-40 md:w-auto'>Sign Up</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignUp;
