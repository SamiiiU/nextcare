import React, { useEffect, useState } from 'react'
import { ContextAPI } from './ContextAPI'

const GlobalProvider = ({children}) => {

    const [isAuthenticated , setIsAuthenticated] = useState(false)
    const [currentUser , SetcurrentUser] = useState("User")


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
  
  return (
    <ContextAPI.Provider value={{
        states,
        isAuthenticated , setIsAuthenticated,
        screenWidth,
        currentUser , SetcurrentUser

 
    }}>
        {children}
    </ContextAPI.Provider>
  )
}

export default GlobalProvider