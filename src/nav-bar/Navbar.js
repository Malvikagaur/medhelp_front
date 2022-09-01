import React from "react";
import "./Navbar.css";
import { FaHospitalUser } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [menuclick, setMenuClick] = useState(false);

    const ChangeValue = () =>
    {
        if(!menuclick){
            setMenuClick(true);
        }else{
            setMenuClick(false);
        }
    }

    return (
        <div>
        <div className = "nav-links" >
             <h1><FaHospitalUser/> Med-hElp</h1>
             <ul className={menuclick ? "Menu-nav-links" : "nav-links-ul" }>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/About">ABOUT</Link></li> 
                <li><Link to="/Blog">BLOG</Link></li>
                <li><Link to="/Login">LOGIN</Link></li>
                {/* <li><Link to="/Doctors">DOCTORS</Link></li> */}
                <li><Link to="/Contact">SUPPORT</Link></li>  
            </ul>
            <div className="menu">
                <p onClick={ChangeValue}><AiOutlineMenu/></p>
            </div>
        </div>
        </div>
    )
}

export default Navbar