import React from "react";
import "./Navbar.css";
import { FaHospitalUser } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
        <div className="nav-links">
             <h1><FaHospitalUser/> Med-hElp</h1>
             <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/About">ABOUT</a></li> 
                <li><a href="/Blog">BLOG</a></li>
                <li><a href="/Login">LOGIN</a></li>
                <li><a href="/Doctors">DOCTORS</a></li>
                <li><a href="/Contact">SUPPORT</a></li>  
            </ul>
        </div>
        </div>
    )
}

export default Navbar