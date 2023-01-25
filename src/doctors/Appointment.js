import React from "react";
import './Appointment.css';
import Navbar from '../nav-bar/Navbar';

const Appointment = () => {
    return (
        <>
            <div className="header2">
                <Navbar />
                <div className="textbox">
                    <h1>Your Appointment Has Been Booked</h1>
                    <p>Drop the feedback at support page</p>
                    <a href="/Contact" class="bttn">Feedback</a>
                </div>
            </div>
        </>
    )
}
export default Appointment