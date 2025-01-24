import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../GlobalProvider/BASE_URL';
import LogoPng from '../../Assets/Images/LogoPng.png';
import { ContextAPI } from '../../GlobalProvider/ContextAPI';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
    const [switche , setSwitche] = useState(false);
    
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');


    const [emailSignUp, setEmailSignup] = useState('');
    const [passwordSignUp, setPasswordSignup] = useState('');
    const [confirmPasswordSignup, setConfirmPasswordSignUp] = useState('');

    const {screenWidth ,  setIsAuthenticated , currentUser , SetcurrentUser} = useContext(ContextAPI)

    function sanitizeEmail(email) {
        // Find the index of '@' and take substring before it
        const atIndex = email.indexOf('@');
        if (atIndex !== -1) {
          return email.substring(0, atIndex);
        }
        return email; // Return as is if '@' is not found
    }
      

    const handleSwitche = (selection) => {
        setSwitche(selection === true ? false : true);
    };

    const navigate = useNavigate();

    const handleLogin = async () => {
        if(emailLogin !== "" , passwordLogin !== "" ){
            try {
                const response = await axios.post(`${BASE_URL}/auth/signin`, {
                    emailLogin,
                    passwordLogin,
                });
                const { jwt, role } = response.data;

                localStorage.setItem('token', jwt);
                localStorage.setItem('role', role);
                localStorage.setItem('username' , sanitizeEmail(emailLogin))
                
                localStorage.setItem('isLogin' , true)

                
                console.log('Login successful:', response.data);
                setIsAuthenticated(true)
                navigate("/")
                SetcurrentUser(sanitizeEmail(emailLogin))
                console.log(localStorage.getItem('username') , "my"  )
                // Handle successful login
            } catch (error) {
                console.error('Login error:', error);
                alert("Login Error Failed" , error)
                // Handle login error
            }
        }else{
            alert("Please Fill Input Fields Correctly")
        }
    };

    const handleSignUp = async () => {
        if(emailSignUp !== "" , passwordSignUp !== "" , confirmPasswordSignup !== ""){
            try {
                const response = await axios.post(`${BASE_URL}/auth/signup`, {
                    emailSignUp,
                    passwordSignUp,
                    confirmPasswordSignup,
                });
                const { jwt, role } = response.data;
                localStorage.setItem('token', jwt);
                localStorage.setItem('role', role);
                localStorage.setItem('username' , sanitizeEmail(emailSignUp))
                localStorage.setItem('isLogin' , true)
                
                console.log('Signup successful:', response.data);
                setIsAuthenticated(true)
                navigate("/")
                SetcurrentUser(sanitizeEmail(emailSignUp))
                console.log(localStorage.getItem('username') , "my"  )
                // Handle successful signup
            } catch (error) {
                console.error('Signup error:', error)
                alert("SignUp Error Failed")

                // Handle signup error
            }
        }else {
            alert("Please Enter Correct Fields")
        }
    };

    useEffect(() => {
        handleSwitche();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center w-full min-h-screen py-8 text-center text-fontColor bg-darkBG px-8 '>
            <span className='h-32 w-60' style={{backgroundImage: `url(${LogoPng})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></span>

            <div className='relative flex items-center justify-center mb-10 text-white transition-all border-2 rounded-full  cursor-pointer w-60 border-orangeBG bg-orangeBG'>
                <span className={`w-1/2 h-full absolute rounded-full duration-300 transition-all ${switche ? 'translate-x-1/2' : '-translate-x-1/2'} bg-darkBG`} />
                <span onClick={() => handleSwitche(true)} className='z-20 flex-1 px-5 py-3 font-semibold rounded-full'>Login</span>
                <span onClick={() => handleSwitche(false)} className='z-20 flex-1 px-5 py-3 font-semibold rounded-full'>SignUp</span>
            </div>

            <div className='md:w-[500px]  relative w-full overflow-hidden'>
                <div >
                    {screenWidth > 700 ? (
                        <div className={`w-fit  transition-all duration-700 ${switche ? '-translate-x-1/2' : 'translate-x-0'} flex`}>

                            {/* Login  */}
                         <div className='flex flex-col gap-4 md:w-[500px] screen bg-white/10 p-4 rounded-md'>
                        <span className='flex flex-col mb-4 text-left gap-y-2'>
                            <h1 className="text-lg font-semibold text-white">Email</h1>
                            <input
                                type="text"
                                placeholder="Enter Your Title"
                                className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                value={emailLogin}
                                onChange={(e) => setEmailLogin(e.target.value)}
                            />
                        </span>

                        <span className='flex flex-col text-left gap-y-2'>
                            <h1 className="text-lg font-semibold text-white">Password</h1>
                            <input
                                type="password"
                                placeholder="Enter Your Title"
                                className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                value={passwordLogin}
                                onChange={(e) => setPasswordLogin(e.target.value)}
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
                            {/* SignUp  */}
                        <div className='flex flex-col gap-4 md:w-[500px] screen bg-white/10 p-4 rounded-xl'>
                            <span className='flex flex-col text-left gap-y-2'>
                                <h1 className="text-lg font-semibold text-white">Email</h1>
                                <input
                                    type="text"
                                    placeholder="Enter Your Title"
                                    className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                    value={emailSignUp}
                                    onChange={(e) => setEmailSignup(e.target.value)}
                                />
                            </span>

                            <span className='flex flex-col text-left gap-y-2'>
                                <h1 className="text-lg font-semibold text-white">Password</h1>
                                <input
                                    type="password"
                                    placeholder="Enter Your Title"
                                    className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                    value={passwordSignUp}
                                    onChange={(e) => setPasswordSignup(e.target.value)}
                                />
                            </span>

                            <span className='flex flex-col text-left gap-y-2'>
                                <h1 className="text-lg font-semibold text-white">Confirm Password</h1>
                                <input
                                    type="password"
                                    placeholder="Enter Your Title"
                                    className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                    value={confirmPasswordSignup}
                                    onChange={(e) => setConfirmPasswordSignUp(e.target.value)}
                                />
                            </span>

                            <div className='flex items-center justify-center w-full mt-8 curs'>
                                <h1 onClick={handleSignUp} className='w-full py-2 font-semibold text-center text-white rounded-md cursor-pointer bg-orangeBG md:px-40 md:w-auto'>Sign Up</h1>
                            </div>
                        </div>
                        </div>
                    ) : (
                        <>
                        {switche ? (
                            // small device SignUp
                            <div className='flex flex-col gap-4 md:w-[500px] screen bg-white/10 p-4 rounded-xl'>
                            <span className='flex flex-col text-left gap-y-2'>
                                <h1 className="text-lg font-semibold text-white">Email</h1>
                                <input
                                    type="text"
                                    placeholder="Enter Your Title"
                                    className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                    value={emailSignUp}
                                    onChange={(e) => setEmailSignup(e.target.value)}
                                />
                            </span>
    
                            <span className='flex flex-col text-left gap-y-2'>
                                <h1 className="text-lg font-semibold text-white">Password</h1>
                                <input
                                    type="password"
                                    placeholder="Enter Your Title"
                                    className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                    value={passwordSignUp}
                                    onChange={(e) => setPasswordSignup(e.target.value)}
                                />
                            </span>
    
                            <span className='flex flex-col text-left gap-y-2'>
                                <h1 className="text-lg font-semibold text-white">Confirm Password</h1>
                                <input
                                    type="password"
                                    placeholder="Enter Your Title"
                                    className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                    value={confirmPasswordSignup}
                                    onChange={(e) => setConfirmPasswordSignUp(e.target.value)}
                                />
                            </span>
    
                            <div className='flex items-center justify-center w-full mt-8 curs'>
                                <h1 onClick={handleSignUp} className='w-full py-2 font-semibold text-center text-white rounded-md cursor-pointer bg-orangeBG md:px-40 md:w-auto'>Sign Up</h1>
                            </div>
                            </div>
                        ) : (
                            // small device Login
                            <div className='flex flex-col gap-4 md:w-[500px] screen bg-white/10 p-4 rounded-md'>
                            <span className='flex flex-col mb-4 text-left gap-y-2'>
                                <h1 className="text-lg font-semibold text-white">Email</h1>
                                <input
                                    type="text"
                                    placeholder="Enter Your Title"
                                    className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                    value={emailLogin}
                                    onChange={(e) => setEmailLogin(e.target.value)}
                                />
                            </span>
    
                            <span className='flex flex-col text-left gap-y-2'>
                                <h1 className="text-lg font-semibold text-white">Password</h1>
                                <input
                                    type="password"
                                    placeholder="Enter Your Title"
                                    className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                                    value={passwordLogin}
                                    onChange={(e) => setPasswordLogin(e.target.value)}
                                />
                            </span>
    

    
                            <div className='flex items-center justify-center w-full mt-8 curs'>
                                <h1 onClick={handleLogin} className='w-full py-2 font-semibold text-center text-white rounded-md cursor-pointer bg-orangeBG md:px-40 md:w-auto'>Login</h1>
                            </div>
                        </div>
                        ) }
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginSignUp;
