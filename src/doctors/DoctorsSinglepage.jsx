import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../nav-bar/Navbar';
import "./DoctorsSinglepage.css"
import { AiFillLike } from 'react-icons/ai';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaClinicMedical } from 'react-icons/fa';



export default function DoctorsSinglepage() {

    const [doctorD, setDoctorD] = useState({});
    const {id} = useParams();

    useEffect(() =>        
    {
        axios.defaults.headers = {
             auth : localStorage.getItem("token")
        }

        async function fetchdata()
        {
            try {
                const data = (await axios.get(`http://localhost:8000/api/SingleDoctor/${id}`,{})).data
                setDoctorD(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchdata();
    },[])

    async function handleBooking()
    {
    const userId = {id : localStorage.getItem("userid")}
    console.log(userId)
      await axios.post(`http://localhost:8000/api/DoctorBooked/${id}`,userId).then(function (response)
      {
        if(response.data)
        {
            window.location.href = "/Appointment"
          console.log("Doctor Booked");
        }
      }).catch(function (error)
      {
        console.log(error);
      })
  }

  return (
    <>
    <div className="navbarbackgroundcolor">
        <Navbar/>
    </div>
        <div className="singleDoctorContainer">
            <div className="DoctorDeatail">
                <div className="Doctorimg">
                    <img src={doctorD.DoctorImg} alt="" />
                </div>
                <div className="DDetail">
                    <h1>{doctorD.Doctorname}</h1>
                    <p>{doctorD.Degree}</p>
                    <p>{doctorD.Specielity}</p>
                    <p>{doctorD.Experience}</p>
                    <p> <BsCheckCircleFill style={{color : "green"}}/> Medical Registration Verified</p>
                    <p style={{color : "green", fontSize : "18px" }}><span><AiFillLike/></span>{doctorD.rating}%</p>
                    <p>{doctorD.About}</p>
                </div>
            </div>
            <div className="doctoerBooked">
                <div className="feebar">
                    <p><FaClinicMedical style={{color : "#0098EC"}}/></p>
                    <p>Clinic Appointment</p>
                    <p><b>₹{doctorD.Fees} fee</b></p>
                </div>
                <button onClick={() =>
                {
                    handleBooking();
                }}>Book Doctor</button>
            </div>
        </div>
        <Footer/>
    </>
  )
}
