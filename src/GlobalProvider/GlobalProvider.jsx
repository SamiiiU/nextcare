import React, { useEffect, useState } from 'react'
import { ContextAPI } from './ContextAPI'

const GlobalProvider = ({children}) => {

    const [isAuthenticated , setIsAuthenticated] = useState(localStorage.getItem("isLogin"))
    const [currentUser , SetcurrentUser] = useState(localStorage.getItem("username"))
    const [isLoading , setIsLoading] = useState(false)


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
        const [states, setState] = useState('false');

    {   // State to store screen width

      
        // Function to measure screen width dynamically
        const updateScreenWidth = () => {
          setScreenWidth(window.innerWidth);
        };
      
        // Add event listener to monitor screen resize
        useEffect(() => {
          window.addEventListener('resize', updateScreenWidth);
      
          // Cleanup the event listener
          return () => {
            window.removeEventListener('resize', updateScreenWidth);
          };
        }, []);
    }

    function sanitizeEmail(email) {
      // Find the index of '@' and take substring before it
      const atIndex = email.indexOf('@');
      if (atIndex !== -1) {
        return email.substring(0, atIndex);
      }
      return email; // Return as is if '@' is not found
    }
  
  return (
    <ContextAPI.Provider value={{
        states,
        isAuthenticated , setIsAuthenticated,
        screenWidth,
        currentUser , SetcurrentUser,
        isLoading , setIsLoading,
        sanitizeEmail,

 
    }}>
        {children}
    </ContextAPI.Provider>
  )
}

export default GlobalProvider