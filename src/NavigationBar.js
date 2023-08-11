import React from "react"; 
import {FaLinkedin} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import "./NavigationBar.css";
const NavBar=()=>{
return(
<nav className="nav">
<div className="logo">
    <h2>
       <span>Vaishnavi</span> 
    </h2>
</div>
<div className="menu">
    <ul>
        <li>
            <a href=" ">Home</a>
        </li>
        <li>
            <a href=" ">About</a>
        </li>
        <li>
            <a href=" ">Technologies</a>
        </li>
        <li>
            <a href=" ">Contact</a>
        </li>
    </ul>
</div>
<div className="socialmedia">
    <ul className="socialmedia-urls">
        <li>
            <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin className="linkedin"/></a>
        </li>
        <li>
            <a href="https://www.github.com/" target="_blank"><FaGithubSquare className="github"/></a>
        </li>
        <li>
            <a href="https://www.facebook.com/" target="_blank"><FaFacebookSquare className="facebook"/></a>
        </li>
        <li>
            <a href="https://www.twitter.com/" target="_blank"><FaTwitterSquare className="twitter"/></a>
        </li>
    </ul>
</div>

</nav>
);
}
export default NavBar