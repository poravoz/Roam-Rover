import './SignUp.css'; 

import person from '../Assets/person.png';
import email from '../Assets/email.png';
import password from '../Assets/password.png';

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
                    <img src={person} />
                    <input type="text" placeholder="Name" />
                </div>
                    
                <div className="input">
                    <img src={email} />
                    <input type="email" placeholder="Email" />
                </div>
                
                <div className="input">
                    <img src={password} />
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