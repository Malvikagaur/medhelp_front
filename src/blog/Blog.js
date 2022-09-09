import React,{useState} from "react";
import "./Blog.css";
import Navbar from '../nav-bar/Navbar';
import axios from "axios";
import Image2 from "./pic.jpg";
import Footer from "../footer/Footer";



const Blog = () => {
    const [username, setName] = useState(" ");
    const [useremail, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
   async function  handleChange () {
        const user = {
            username,
            useremail,
            password,
            
        };
       if(username && useremail && password === " " ){
            console.log("false");
            alert("Please fill the complete details")
        }
        await axios.post("https://medhelp-server.vercel.app/api/signup",user).then(function(response){
            if(response)
            {
                window.location.href = '/Login';  
            }
        }).catch((err) =>{
            console.log(err);
        })
        
        

    }
    return (
        <div>
            <div className="subheader2">
               <Navbar/>
               <h2>Sign Up To Join Us </h2>
            </div>

            <section className="blogcontent">
    
                <div className="left">

                <div className="picture">
                    <img src={Image2}/>
                </div>
                
            <div className="blogleft">
                    <h2>Our Insight To Make Healthcare Easy</h2>
                    <p>Healthcare is the improvement of health via the prevention, diagnosis, 
                        treatment, or cure of disease and other physical and mental impairments in people. 
                        Medicine, dentistry, pharmacy, psychology, athletic training, and other health professions are 
                        all part of health care. 
                        It includes work done in providing primary care, secondary care, and tertiary care, as well as 
                        in public health.
                        <br></br>
                        <br></br>
                        An efficient health care system can contribute to a significant part of a country's economy, development, and industrialization. 
                        Health care is conventionally regarded as an important determinant in promoting the general physical and mental health and well-being of people around the world.
                        An example of this was the worldwide eradication of smallpox in 1980, declared by the WHO as the first disease in human history to be eliminated by deliberate health care interventions.
                        <br></br>
                        <br></br>
                        Med-hElp is established to provide easy healthcare to people. With changing time and increasing pollution, people are more prone to diseases.
                        Every year many people die due to lack of awareness about their health conditions, not proper treatment and late treatment. We make sure that every person gets good healthcare in nearby locality and there is no harm to life.
                        Med-hElp provides every patient best treatment, easy appointment booking, medicines on doorstep and advices from our health experts.
                    </p>    
            </div>

            <div className="commentbox1">
                <h3>Sign Up To Avail Services</h3>
                <div className="commentform1">
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

            <div className="blogright">
                <h3>Med-hElp Record</h3>
                    <div>
                        <span>Monthly Users</span>
                        <span>50000</span>
                    </div>
                    <div>
                        <span>Treatment Provided</span>
                        <span>25000</span>
                    </div>
                    <div>
                        <span>Monthly Visitors</span>
                        <span>60000</span>
                    </div>
                    <div>
                        <span>Cured Patients</span>
                        <span>2 Lakhs +</span>
                    </div>
                    

            </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Blog