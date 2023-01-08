import React from 'react'
import Navbar from '../nav-bar/Navbar';
import { useParams } from 'react-router-dom';
import "./Medcart.css"
function Medcart() {
  const {MedName,Medqty} = useParams()
  return (
    <div className="medicart">
      <Navbar />
      <div className="textboxcart">
        <h1>Your Medicine {MedName} of Quantity {Medqty} Has Been Ordered</h1>
        <p>Drop the feedback at support page</p>
        <a href="/Contact" class="bttncart">Feedback</a>
      </div>
    </div>
  )
}

export default Medcart
