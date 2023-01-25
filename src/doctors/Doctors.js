import React, { useEffect, useState } from "react";
import "./Doctors.css"
import Navbar from '../nav-bar/Navbar';
import Footer from '../footer/Footer';
import axios from "axios";
import { AiFillLike} from 'react-icons/ai';


const Doctors= () => {

    const [doctorsdetail , setDoctorsDetail] =useState([])

    useEffect(() =>
    {
        axios.defaults.headers = {
            auth : localStorage.getItem("token"),
        }

        async function fetchdata()
        {
            try{
                const data  = (await axios.get("https://medhelp-server.vercel.app/api/FindallDoctors",{})).data;
                setDoctorsDetail(data);
            }catch(error)
            {
                console.log(error);
            }

        }   
        fetchdata();

    } , []);
    

    return(
        <>
        <div className="subheader4">
            <Navbar/>
            <h2>Book Appointment </h2>
        </div>
        <div className="doctorscards">
        {
            doctorsdetail.map((data)=>
            {
                return(
                <div className="doctordetailContainer">
                    <div className="doctorimg">
                        <img src={data.DoctorImg} alt="" />
                    </div>
                    <div className="doctordetail">
                        <h3>{data.Doctorname}</h3>
                        <p style={{color : "#787887"}}>{data.Specielity}</p>
                        <p style={{color : "#787887"}}>{data.Experience}</p>
                        <p><b>{data.Address}</b></p>
                        <p style={{color : "#787887"}}><b>{data.Fees}</b> Consultation fee at clinic</p>
                        <div className="doctorrating"><p><AiFillLike/>  {data.rating}%</p></div>
                    </div>
                    <div className="doctormoreinfo">
                        <button onClick={() =>
                        {
                            window.location.href = "/SinglePage/" + data._id;
                        }}>More Info</button>
                    </div>
                </div>
            )})
        }
        </div>
        <Footer/>
        </>
    )
}

export default Doctors