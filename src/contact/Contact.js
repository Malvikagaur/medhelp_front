import React, {useState} from "react";
import "./Contact.css"
import Navbar from '../nav-bar/Navbar';
import { FaHome } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import Footer from '../footer/Footer';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    async function handleChange()  {
        try {
            const support = {
                name,
                email,
                subject,
                message,
            };
            
            if(name && email && subject && message === " "){
                console.log("false");
                alert("Please fill the complete details")
            }else{
                const data = (await axios.post("https://medhelp-server.vercel.app/api/message",{support})).data
                navigate('/Thanks')
            }
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
    <div>
        <div className="subheader3">
            <Navbar/>
            <h2>Always Here To Help You</h2>
        </div>
        <div style={{padding :"0px 20px"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10701.134823756971!2d77.27287049373656!3d28.701464928430354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc139c6f8aab%3A0x409d254e45870ea3!2sYamuna%20Vihar%2C%20Shahdara%2C%20Delhi%2C%20110053!5e0!3m2!1sen!2sin!4v1662191511209!5m2!1sen!2sin" width="100%" height="450" style= {{border:0,padding : "20px 0px"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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