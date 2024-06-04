import React, { act, useState } from "react";
import './signup.css';

import email from "../../components/Assets/email.png";
import password from "../../components/Assets/password.png";
import person from "../../components/Assets/person.png";

function Login(){
const[action , setaction] = useState(" sign up ")

    return(
        <>
      <div className="container">
        <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        </div>

        <div className="inputs ">
            {action==="login" ? <div></div> : 
            <div className="input">
                <img src={email} alt="emailimg" />
                <input placeholder="Enter Your Name" type="name" />
            </div> }
            <div className="input">
                <img src={password} alt="emailmg" />
                <input placeholder="Enter  Password" type="email" />
            </div>
            <div className="input">
                <img src={person} alt="inputimg"/>
                <input placeholder="Enter Your Password" type="password" />
            </div>
        </div> 
        {action==="Sign Up" ? <div></div>:
         <div className="Forgot-password">Lost Password? <span>click here</span></div>}
       <div className="submit-container">
        <div className={action==="login"? "submit Gray" : "submit"} onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"? "submit Gray" : "submit"} onClick={()=>{setaction("login")}}>Login</div>


       </div>   

      </div>
        </>
    )
}
export default Login