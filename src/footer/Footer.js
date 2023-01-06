import React from "react";
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return(
        <div>
             <section class="footer">
            <h3>More Of Us</h3>
            <p>You can find us on various platform through which we can get to know about each other better.<br></br>We promise you better health, best treatment and economical medicines.
               <br></br>  
               <br></br>          
               By Med-hElp 
               <br></br>
               <FaInstagram/> <FaFacebookSquare/> <FaYoutube/> <FaTwitter/>
            </p>

        </section>
        </div>
    )
}

export default Footer;