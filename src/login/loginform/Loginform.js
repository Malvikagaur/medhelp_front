import axios from 'axios';
import React,{useState} from 'react';
import {BsEyeFill,BsEyeSlashFill } from 'react-icons/bs';
import "./Loginform.css";


export default function Loginform() {
  const [useremail,setEmail] = useState();
  const [passwordtype,setPasswordType] = useState("password");
  const [leye, setEye] = useState(<BsEyeSlashFill/>)
  const [password,setPass] = useState();
  
  async function handleSignin() 
  { 
    const user = {
      useremail,
      password,
    };
    await axios.post("http://localhost:8000/api/signin",user).then(function(response){
      if(response.data.token)
      {
          localStorage.setItem("token", response.data.token);

          localStorage.setItem("userid",response.data.userid)
          window.location.href="/Doctors";

      }
    }).catch(function(error)
    {
      console.log(error);
      alert("This field is required");
    })  
  }
  const loginPassshow = () =>
    {
        if(passwordtype === "password")
        {
            setPasswordType("text");
            setEye(<BsEyeFill/>);
        }
        else
        {
            setPasswordType("password");
            setEye(<BsEyeSlashFill/>);
        }
    }
  return (
    <>
      <div className="formContainer">
        {/* <h1>Login</h1> */}
        <div className="form">
          <label htmlFor="name">Useremail</label>
          <input type="email" id="name" placeholder='Type your Email' onChange={(e) => {
            setEmail(e.target.value);
          }}/>
          <label htmlFor="password">Password</label>
          <div className="passwordContainer">
          <input type={passwordtype} id="password" placeholder='Type your Password ' onChange={(e)=>
          {
              setPass(e.target.value);
          }}/><button onClick={() =>{
            loginPassshow();
            }}>{leye}</button>
            </div>
          <a className = "forgetP" href=""><p>Forgot Password?</p></a>
          <button className = " loginButton" onClick={() =>
          {
            handleSignin();
          }}>Login</button>
          <a className="createA" href="/Blog"><p>Create Account</p></a>
        </div>
      </div>
    </>
)
}