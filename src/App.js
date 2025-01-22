import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignUp from "./Pages/LoginSignUp/LoginSignup";
import Home from "./Pages/HomePage/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginSignup" element={<LoginSignUp/>}/>

        <Route path="/" element ={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
