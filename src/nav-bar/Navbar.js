import React from "react";
import "./Navbar.css";
import { FaHospitalUser } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";
import {GiMedicines} from 'react-icons/gi'
import {BiSupport} from 'react-icons/bi';
import {RiLoginBoxFill} from 'react-icons/ri'
import {RiHomeHeartFill} from 'react-icons/ri'
import {BsFillInfoSquareFill} from 'react-icons/bs'
import {SiHandshake} from 'react-icons/si'
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
                <li><Link to="/"><RiHomeHeartFill/></Link></li>
                <li><Link to="/About"><BsFillInfoSquareFill/></Link></li> 
                <li><Link to="/Blog"><SiHandshake/></Link></li>
                <li><Link to="/Login"><RiLoginBoxFill/></Link></li>
                <li><Link to="/Medicine"><GiMedicines/></Link></li> 
                {/* <li><Link to="/Doctors">DOCTORS</Link></li> */}
                <li><Link to="/Contact"><BiSupport/></Link></li> 
            </ul>
            <div className="menu">
                <AiOutlineMenu onClick={ChangeValue} className ="menu_hamburger"/>
            </div>
        </div>
        </div>
    )
}

export default Navbar