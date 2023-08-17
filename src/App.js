import React from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css';
import NavigationBar from "./NavigationBar.js"
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Technologies from "./pages/Technologies.js";
import Contact from "./pages/Contact.js";


const App=()=> {
  return (
    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Technologies" element={<Technologies />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
