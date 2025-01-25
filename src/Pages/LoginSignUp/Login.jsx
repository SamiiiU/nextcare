import React, { useContext, useState } from 'react';
import { ContextAPI } from '../../GlobalProvider/ContextAPI';
import BASE_URL from '../../GlobalProvider/BASE_URL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ classname }) => {
    const navigate = useNavigate();
    const [email, setEmailSignup] = useState('');
    const [password, setPasswordSignup] = useState('');
    const [message, setMessage] = useState('');
    const { setIsAuthenticated, SetcurrentUser, sanitizeEmail } = useContext(ContextAPI);

    const handleLogin = async (e) => {
        setMessage("Fetching User......")
        e.preventDefault(); // Prevents the form from reloading the page

        if (email !== "" && password !== "") {
            console.log("data for signup", email, password);

            try {
                const response = await axios.post(`${BASE_URL}/auth/signin`, {
                    email,
                    password,
                });
                const { jwt, role } = response.data;

                localStorage.setItem('token', jwt);
                localStorage.setItem('role', role);
                localStorage.setItem('username', sanitizeEmail(email));
                localStorage.setItem('isLogin', true);

                console.log('Login successful:', response.data);

                setIsAuthenticated(true);
                
                SetcurrentUser(sanitizeEmail(email));
                console.log(localStorage.getItem('username'), "my");
                navigate("/");
            } catch (error) {
                console.error('Login error:', error);
                setMessage("Wrong email or password");
            }
        } else {
            setMessage("Please fill input fields correctly");
        }
    };


    const handleKeyDown = (e, field) => {
        if (e.key === "Tab") {
            e.preventDefault(); // Stop default tab behavior

            if (field === "email") {
                document.getElementById("passwordInput").focus(); // Move focus to password
            } else if (field === "password") {
                document.getElementById("loginButton").focus(); // Move focus to button
            } else if (field === "button") {
                document.getElementById("emailInput").focus(); // Move focus back to email
            }
        }
    };

    return (
        <form className={classname} onSubmit={handleLogin}>
            <span className='flex flex-col mb-4 text-left gap-y-2'>
                <h1 className="text-lg font-semibold text-white">Email</h1>
                <input
                    type="email"
                    id="emailInput"
                    placeholder="Enter Your Email"
                    className="w-full p-2 border-none rounded-md outline-none"
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
                    id="passwordInput"
                    placeholder="Enter Your Password"
                    className="w-full p-2 border-none rounded-md outline-none bg-iconBG"
                    value={password}
                    onChange={(e) => setPasswordSignup(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e , "password")}
                    required
                />
            </span>

            <span className='text-md   text-left text-white'>
                {message}
            </span>

            <div className='flex items-center justify-center w-full mt-8 curs'>
                <button
                    type="submit"
                    id="loginButton"
                    className='w-full py-2 font-semibold text-center text-white rounded-md cursor-pointer bg-orangeBG md:px-40 md:w-auto focus:bg-orange-700 focus:tracking-[20px] transition-all focus:outline-none ease-in-out outline-none'
                    onKeyDown={(e) => handleKeyDown(e , "button")}

                >
                    Login
                </button>
            </div>
        </form>
    );
};

export default Login;
