import React from 'react'
import Navbar from '../nav-bar/Navbar';
function Medcart() {
  return (
    <div className="medicart">
            <Navbar/>
             <div className="textboxcart">
        <h1>Your Medicine Has Been Ordered</h1>
        <p>Drop the feedback at support page</p>
            <a href="/Contact" class="bttncart">Feedback</a>
            </div>
    </div>
  )
}

export default Medcart
