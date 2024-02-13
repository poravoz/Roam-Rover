import React from 'react';
import './LoginSignUp.css'; 

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
                    <img src= "" />
                        <input type="text" placeholder="Name" />
                </div>
                    
                <div className="input">
                    <img src="" />
                    <input type="email" placeholder="Email" />
                </div>
                
                <div className="input">
                    <img src="" />
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