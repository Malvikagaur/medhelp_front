import React from "react";
import "./Doctors.css"
import Navbar from '../nav-bar/Navbar';
import Footer from '../footer/Footer';

const Doctors= () => {
    return(
        <div>
        <div className="subheader4">
            <Navbar/>
            <h2>Book Appointment </h2>
        </div>
        <Footer/>
        </div>
    )
}

export default Doctors