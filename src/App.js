import React, { useEffect, useState, useRef } from "react";
import Home from './home/Home';
import About from './about/About';
import Blog from './blog/Blog';
import Doctors from './doctors/Doctors';
import Contact from './contact/Contact';
import Login from './login/Login';
import Appointment from "./doctors/Appointment";
import Thanks from "./contact/Thanks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorsSinglepage from "./doctors/DoctorsSinglepage";
import Medicine from "./medicine/Medicine";
import Slider from "./Slider/Slider";
import Medcart from "./medicine/Medcart";
import Admin from "./Admin/Admin";
import axios from "axios";


function App() {

  const [check, setCheck] = useState("");
  let userid = useRef(localStorage.getItem("userid"))


  useEffect(() => {
    const checkuser = async () => {
      try {
        const data = (await axios.post("http://localhost:8000/api/checkuser", {
          data: {
            _id: userid.current
          }
        })).data
        setCheck(data)
      } catch (error) {
        console.log(error);
      }
    }
    checkuser()
  }, [])


  console.log(check);
  if (check === "admin") {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Blog" element={<Blog />}></Route>
            <Route exact path="/Doctors" element={<Doctors />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
            <Route exact path="/Login" element={<Login />}></Route>
            <Route exact path="/Appointment" element={<Appointment />}></Route>
            <Route exact path="/Thanks" element={<Thanks />}></Route>
            <Route exact path="/SinglePage/:id" element={<DoctorsSinglepage />}></Route>
            <Route exact path="/Medicine" element={<Medicine />}></Route>
            <Route exact path="/Medcart/:MedName/:Medqty" element={<Medcart />}></Route>
            <Route exact path="/Slider" element={<Slider />}></Route>
            <Route exact path="/Admin" element={<Admin />}></Route>
          </Routes>
        </Router>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Blog" element={<Blog />}></Route>
            <Route exact path="/Doctors" element={<Doctors />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
            <Route exact path="/Login" element={<Login />}></Route>
            <Route exact path="/Appointment" element={<Appointment />}></Route>
            <Route exact path="/Thanks" element={<Thanks />}></Route>
            <Route exact path="/SinglePage/:id" element={<DoctorsSinglepage />}></Route>
            <Route exact path="/Medicine" element={<Medicine />}></Route>
            <Route exact path="/Medcart/:MedName/:Medqty" element={<Medcart />}></Route>
            <Route exact path="/Slider" element={<Slider />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
