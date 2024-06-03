import React from "react";
import './signup.css';

import email from "../../components/Assets/email.png";
import password from "../../components/Assets/password.png";
import person from "../../components/Assets/person.png";

function Login(){
    return(
        <>
      <div className="container">
        <div className="header">
        <div className="text">sign Up</div>
        <div className="underline"></div>
        </div>

        <div className="inputs">
            <div className="input">
                <img src={email} alt="emailimg" />
                <input type="name" />
            </div>
            <div className="input">
                <img src={password} alt="emailmg" />
                <input type="email" />
            </div>
            <div className="input">
                <img src={person} alt="inputimg" />
                <input type="password" />
            </div>
        </div>
         <div className="Forgot-password">Lost Password? <span>click here</span></div>
       <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>


       </div>

      </div>
        </>
    )
}
export default Login