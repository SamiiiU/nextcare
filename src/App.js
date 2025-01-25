import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignUp from "./Pages/LoginSignUp/LoginSignup";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";
import Donate from "./Pages/DonationPage/Donate";
import GlobalProvider from "./GlobalProvider/GlobalProvider";
import Admin from "./Pages/Admin/Admin";


function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="overflow-x-hidden">
        <Routes>
          <Route path="/LoginSignup" element={<LoginSignUp/>}/>

          <Route path="/" element ={<Home/>}/>

          <Route path="/About" element ={<About/>}/>

          <Route path="/Donate" element ={<Donate/>}/>

          <Route path="/Admin" element ={<Admin/>}/>


        </Routes>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
