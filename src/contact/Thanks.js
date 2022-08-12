import React from "react";
import './Thanks.css';
import Navbar from '../nav-bar/Navbar';

const Thanks = () => {

    return (
        <div>
            <div className="header1">
        <Navbar/>
        <div className="reply">
        <h1>Thanks For Your Feedback</h1>
        <p>Our team is working on resolving the issue.</p>
            <a href="/" class="bttn1">Back To Home</a>
            
        </div>
            </div> 
        </div>
    )
}

export default Thanks