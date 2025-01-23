import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignUp from "./Pages/LoginSignUp/LoginSignup";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";
import Donate from "./Pages/DonationPage/Donate";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginSignup" element={<LoginSignUp/>}/>

        <Route path="/" element ={<Home/>}/>

        <Route path="/About" element ={<About/>}/>

        <Route path="/Donate" element ={<Donate/>}/>
      </Routes>
    </Router>
  );
}

export default App;
