import React from "react";
import "./About.css"
import Navbar from '../nav-bar/Navbar';
import Image1 from './doc.jpg';
import Footer from "../footer/Footer";
const About = () => {
    return (
        <div>
        <div className="subheader1">
              <Navbar/> 
            <h2>About Us</h2>
        </div>
        <section className="about-us">
        <div className="row2">
                <div className="aboutcol">
                    <h1>Doctors In Single Click</h1>
                    <p>Med-hElp was established in 2013 to provide easy healthcare to people. With changing time and increasing pollution, people are more prone to diseases.
                        Every year many people die due to lack of awareness about their health conditions, not proper treatment and late treatment. We make sure that every person gets good healthcare in nearby locality and there is no harm to life.
                        Med-hElp provides every patient best treatment, easy appointment booking, medicines on doorstep and advices from our health experts.</p>
                        <a href="/Blog" class="butt_on">EXPLORE NOW</a>
                </div>
               <div className="image">
                <img src={Image1}/>
               </div>
            </div>
            </section>
            <Footer/>
        </div>
    )
}

export default About