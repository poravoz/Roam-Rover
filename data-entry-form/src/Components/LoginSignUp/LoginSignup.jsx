import React, { useState } from "react";
import './LoginSignUp.css'; 

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignUp = () => {
    return (
    
    <form>
        <div className="container">
            <div className="header">
                <div className="text"> Sign-Up </div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={user_icon} />
                        <input type="text" placeholder="Name" />
                </div>
                    
                <div className="input">
                    <img src={email_icon} />
                    <input type="email" placeholder="Email" />
                </div>
                
                <div className="input">
                    <img src={password_icon} />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
                
            <div className="submit-container">
                <button className="submit"> Sign Up</button>
            </div>
        </div>
    </form>
        
    )
}

export default LoginSignUp;