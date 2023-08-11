import React from "react";
import { Route,Router,Routes} from "react-router-dom";
import './App.css';
import NavigationBar from "./NavigationBar.js"
import Home from "./pages/Home.js";
import About from "./pages/About.js";
/*import Technologies from "./pages/Technologies.js";*/
import Contact from "./pages/Contact.js";


const App=()=> {
  return (
    <Router>
    <NavigationBar/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/About" element={<About />} />
        <Route  path="/Contact" element={<Contact />} />
        {/* <Route  path="/Technologies" element={<Technologies />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
