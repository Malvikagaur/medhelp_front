import React,{useState} from "react";
import "./Home.css";
import Navbar from '../nav-bar/Navbar';
import Footer from "../footer/Footer";


const Home = () => {
  const [username, setName] = useState("");
  const [useremail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = () => {
      if(username && useremail && password)
      {
          window.location.href="/Login";
      }
      else
      {
          window.location.href="/";
      }
    }
    return (
    <div>
      <div className="header">
        <Navbar/>
        <div className="text-box">
        <h1>Find A Doctor Near Easily</h1>
        <p>Now there is no need of wandering for appropriate <br></br>
            treatment. By Med-hElp you can easily find all the doctors near <br></br>
            you according to your disease, book their appoinment directly and also order medicines.</p>
            <a href="/About" class="bttn">Visit Us To Know More</a>
        </div>
      </div>  
        <div className="sign">
        <h2>Sign Up To Avail Services</h2>
        <div className="commentbox">
                
                <div className="commentform">
                <input type="text" name="username" placeholder="Enter Username"  required onChange={(e)=> 
                 {
                  setName(e.target.value)
                 }}></input>

                <input type="email" name="useremail" placeholder="Enter Useremail"  required onChange={(e)=> 
                 {
                  setEmail(e.target.value)
                 }}></input>

                <input type="password" name="password" placeholder="Enter password" required onChange={(e)=> 
                 {
                  setPassword(e.target.value)
                 }}></input>

                <button type="submit" class="butt_on" onClick={handleChange}>SIGN UP</button>
                </div>
          </div>
          </div>
          <section className="courses">
            <div className="facility">
            <h1>Facilties We Offer</h1>
            <p>With changing time and increasing pollution, people are more prone to diseases. <br></br>
              We make sure that every person gets good healthcare in nearby locality and there is no harm to life. <br></br>
              Med-hElp provides every patient best treatment, easy appointment booking, medicines on doorstep and advices from our health experts.</p>  
           </div>

           <div class="rows">
                    <div class="facility-col">
                        <h3>Book Appoinment</h3>
                        <p>You can easily book appoinment for doctors in your locality.</p>
                    </div>
                    <div class="facility-col">
                        <h3>Order medicines</h3>
                        <p>We provide economical medicines with delivery in just one day.</p>
                    </div>
                    <div class="facility-col">
                        <h3>Health Experts</h3>
                        <p>You can directly chat with our health experts.</p>
                    </div>
                </div>
          </section>     

          <section class="testimonials">
            <h1>What Our Users Say</h1>
            <p>Med-hElp is the best for healthcare</p>

            <div class="row">
                <div class="testimonials-col">
                    {/* <img src="yep.jpg"> */}
                    <div>
                    <p>I had severe skin infection back in 2019. After visiting almost 5 doctors my condition was still the same. 
                        Then I got to know about Med-hElp, found a doctor through it and my health improved within a week.</p>
                        <h3>Bean</h3>
                    </div>
                </div>
                <div class="testimonials-col">
                    {/* <img src="yes.jpg"> */}
                    <div>
                    <p>Now I don't buy medicines by going on medical stores or any other 
                        website because medicines available on Med-hElp are very low price.  </p>
                        <h3>Spongebob</h3>
                    </div>
                </div>
            </div>
        </section>

        <section class="calltoaction">
            <h1>Sign up now to avail unlimited benefits. <br></br>We are always here to help you.</h1>
            <a href="/Contact" class="bttn_01">CONTACT US</a>
        </section>
          <Footer/>
    </div>
    )
    
  }

  
  
  export default Home