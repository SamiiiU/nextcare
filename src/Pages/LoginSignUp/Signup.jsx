import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextAPI } from '../../GlobalProvider/ContextAPI';
import axios from 'axios';
import BASE_URL from '../../GlobalProvider/BASE_URL';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmailSignup] = useState('');
    const [password, setPasswordSignup] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const { setIsAuthenticated, SetcurrentUser, sanitizeEmail } = useContext(ContextAPI);

    const handleSignUp = async (e) => {
        setMessage("Signing Up...........")
        e.preventDefault(); // Prevent the default form submission behavior
        if (email !== "" && password !== "" && confirmPassword === password) {
            setMessage("Signing Up...");
            try {
                const response = await axios.post(`${BASE_URL}/auth/signup`, {
                    email,
                    password,
                });
                const { jwt, role } = response.data;
                localStorage.setItem('token', jwt);
                localStorage.setItem('role', role);
                localStorage.setItem('username', sanitizeEmail(email));
                localStorage.setItem('isLogin', true);

                console.log('Signup successful:', response.data);
                setIsAuthenticated(true);
                navigate("/");
                SetcurrentUser(sanitizeEmail(email));
            } catch (error) {
                console.error('Signup error:', error);
                setMessage("Sign Up Failed");
            }
        } else {
            setMessage("Please Enter Correct Fields ");
        }
    };

    const handleKeyDown = (e, field) => {
        if (e.key === "Tab") {
            e.preventDefault(); // Stop default tab behavior

            if (field === "email") {
                document.getElementById("passwordSignUp").focus(); // Move focus to password
            } else if (field === "password") {
                document.getElementById("confirmPassword").focus(); // Move focus to button
            } else if (field === "confirmpassword") {
                document.getElementById("SignUpButton").focus(); // Move focus to button
            } else if (field === "button") {
                document.getElementById("emailSignUp").focus(); // Move focus back to email
            }
        }
    };

    
    return (
        <form
            className='flex flex-col gap-4 md:w-[500px] screen bg-white/10 p-4 rounded-md'
            onSubmit={handleSignUp}
        >
            <span className='flex flex-col text-left gap-y-2'>
                <h1 className="text-lg font-semibold text-white">Email</h1>
                <input
                    type="email"
                    id="emailSignUp"
                    placeholder="Enter Your Email"
                    className="w-full p-2 border-none rounded-md outline-none bg-iconBG focus:ring-2 focus:ring-orangeBG focus:bg-white focus:text-black"
                    value={email}
                    onChange={(e) => setEmailSignup(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e , "email")}
                    required
                />
            </span>

            <span className='flex flex-col text-left gap-y-2'>
                <h1 className="text-lg font-semibold text-white">Password</h1>
                <input
                    type="password"
                    id="passwordSignUp"
                    placeholder="Enter Your Password"
                    className="w-full p-2 border-none rounded-md outline-none bg-iconBG focus:ring-2 focus:ring-orangeBG focus:bg-white focus:text-black"
                    value={password}
                    onChange={(e) => setPasswordSignup(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e , "password")}
                    required
                />
            </span>

            <span className='flex flex-col text-left gap-y-2'>
                <h1 className="text-lg font-semibold text-white">Confirm Password</h1>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Your Password"
                    className="w-full p-2 border-none rounded-md outline-none bg-iconBG focus:ring-2 focus:ring-orangeBG focus:bg-white focus:text-black"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e , "confirmpassword")}
                    required
                />
            </span>

            {message && (
                <p className="text-md text-white  text-left">{message}</p>
            )}

            <div className=' w-full mt-8 bg-orangeBG  rounded-md  cursor-pointer'>
                <button
                    type="submit"
                    id="SignUpButton"
                    className='w-full inline  py-2 font-semibold text-center text-white   md:w-auto  focus:tracking-[20px] transition-all focus:outline-none ease-in-out outline-none'
                    onKeyDown={(e) => handleKeyDown(e , "button")}
                >
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default Signup;
