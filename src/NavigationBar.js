import React from "react"; 
import {Link} from "react-router-dom";
import {FaLinkedin} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";





const NavBar=()=>{
return(
<nav className=" w-full h-40 grid  grid-cols-3 gap-x-20   shadow-2xl  ">
<div className=" grid text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 justify-start items-center">
    <h2 className="pl-6  text-2xl  italic font-semibold items-center text-transparent   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  bg- -webkit-linear-gradient(#eee, rgb(69, 57, 248)) -webkit-background-clip: text -webkit-text-fill-color: transparent">
       <span className="font-semibold ">Vaishnavi</span> 
    </h2>
</div>
<div className=" flex items-center justify-center">
    <ul className="h-40 flex items-center justify-center ">
        <li className="text-xl font-black hover:origin-left hover:text-black hover:underline">
            <Link to="/" className="capitalize text-black px-7 ">Home</Link>
        </li>
        <li className="text-xl font-black hover:origin-left hover:text-black hover:underline" >
        <Link to="/About" className="capitalize text-black px-7">About</Link>
        </li>
        <li className="text-xl font-black hover:origin-left hover:text-black hover:underline">
            <Link to="/Technologies" className="capitalize text-black px-7">Skills</Link>
        </li>
        <li className="text-xl font-black hover:origin-left hover:text-black hover:underline">
        <Link to="/Contact" className="capitalize text-black px-7 ">Contact</Link>
        </li>
    </ul>
</div>

<div className="flex justify-end ms-auto  ">
    <ul className=" h-40 grid grid-cols-4 gap-x-14  items-center ">
        <li className="text-right text-3xl">
            <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin className="fill-blue-800"/></a>
        </li>
        <li className="text-right text-3xl">
            <a href="https://www.github.com/" target="_blank"><FaGithubSquare className="github"/></a>
        </li>
        <li className="text-right text-3xl">
            <a href="https://www.facebook.com/" target="_blank"><FaFacebookSquare className="fill-blue-500"/></a>
        </li>
        <li className="text-right text-3xl">
            <a href="https://www.twitter.com/" target="_blank"><FaTwitterSquare className="fill-sky-400"/></a>
        </li>
    </ul>
    
</div>

</nav>

);
}
export default NavBar
{/* <div className="hidden">
        <a href="#"><GiHamburgerMenu/></a>
    </div> */}