import React from "react";
import "./Login.css"
import Navbar from '../nav-bar/Navbar';
import Footer from "../footer/Footer";
import Loginform from "../login/loginform/Loginform";
import Slider from "../Slider/Slider";

const Login = () => {
    return (
        <div>
        <div className="subheader5">
            <Navbar/>
            <h2>Login</h2>
        </div>
        <Loginform/>
        <Slider/>
        <Footer/>
        </div>
    )
}

export default Login