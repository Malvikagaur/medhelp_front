import React, {useState} from "react";
import "./Contact.css"
import Navbar from '../nav-bar/Navbar';
import { FaHome } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import Footer from '../footer/Footer';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const handleChange = () => {
        if(name && email && subject && message)
        {
            window.location.href="/Thanks";
        }
        else
        {
            window.location.href="/Contact";
        }
    }
    return (
    <div>
        <div className="subheader3">
            <Navbar/>
            <h2>Always Here To Help You</h2>
        </div>
        <section className="contact-us">
            <div className="row3">
                <div className="contact-col">
                    <div className="contact-detail">
                       <span>
                          <h5><FaHome/> XYZ Road, ABC Building</h5>
                          <p>Delhi, India</p>
                          <br></br>
                          <br></br>
                          <h5><FaPhoneVolume/> +91 1234567890</h5>
                          <p>Monday to Saturday, 10AM to 6PM</p>
                          <br></br>
                          <br></br>
                          <h5><FaMailBulk/>  medhelp22@gmail.com</h5>
                          <p>Email us your query</p>
                      </span>
                    </div>
                </div>
                <div class="contact-col">
                    
                    <div className="contact-feedback">
                      <input type="text" name="name" placeholder="Enter your name" required onChange={(e)=> 
                       {
                        setName(e.target.value)
                       }}></input>

                      <input type="email" name="email" placeholder="Enter your email address" required onChange={(e)=> 
                       {
                        setEmail(e.target.value)
                       }}></input>

                      <input type="text" name="subject" placeholder="Enter your subject" required onChange={(e)=> 
                       {
                        setSubject(e.target.value)
                       }}></input>

                      <textarea rows="8" name="message" placeholder="Message" required onChange={(e)=> 
                       {
                        setMessage(e.target.value)
                       }}></textarea>

                      <button type="submit" class="butt_on" onClick={handleChange}>Send Message</button>

                </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
    )
}

export default Contact