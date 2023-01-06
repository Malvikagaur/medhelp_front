import React from "react";
import Home from './home/Home';
import About from './about/About';
import Blog from './blog/Blog';
import Doctors from './doctors/Doctors';
import Contact from './contact/Contact';
import Login from './login/Login';
import Appointment from "./doctors/Appointment";
import Thanks from "./contact/Thanks";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import DoctorsSinglepage from "./doctors/DoctorsSinglepage";
import Slider from "./Slider/Slider";


function App() {
  return (

    <div className="App">
       <Router>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/About" element={<About/>}></Route>
              <Route exact path="/Blog" element={<Blog/>}></Route>
              <Route exact path="/Doctors" element={<Doctors/>}></Route>
              <Route exact path="/Contact" element={<Contact/>}></Route>
              <Route exact path="/Login" element={<Login/>}></Route>
              <Route exact path="/Appointment" element={<Appointment/>}></Route>
              <Route exact path="/Thanks" element={<Thanks/>}></Route>
              <Route exact path="/SinglePage/:id" element={<DoctorsSinglepage/>}></Route>
            </Routes>
          </Router>
         
          </div>
  );
}

export default App;
