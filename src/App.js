import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
// import Nav from "./Components/Nav/Nav"
import Contact from "./Components/Contact/Contact";
import Faq from "./Components/Faq/Faq";
// import TotalBudget from "./Components/Home/TotalBudget";

function App() {
  // console.log("app");
  return (
    <div>
      {/* <Nav />*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes> 

     

    </div>
  );
}

export default App;
