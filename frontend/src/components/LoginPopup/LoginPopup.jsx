import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Sign Up")
  return (
    <div className='login-popup'>
        <form className='login-popup-form'>
            <div className="login-header">
                <h2>{currentState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.crossIcon} alt="" className="close-login" />
            </div>
            <div className="form-inputs">
            {
                currentState === "Sign Up"
                ? <input type="text" placeholder='Name' required />
                : <></>
            }                
                <input type="email" placeholder='Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>
                {
                    currentState === "Sign Up"
                    ? "Create Account" : "Login"
                }
            </button>
            <div className="login-condition">
                <input type="checkbox" required />
                <p>By continueing, I agree to the terms of use and policies</p>
            </div>
            <div className="login-footer">
                {currentState === "Sign Up"
                ? <p>Already have an account? <span onClick={() => setCurrentState('Login')} className='click-signup'>Login</span></p>
                : <p>Create account? Click<span onClick={() => setCurrentState('Sign Up')} className='click-signup'> HERE</span></p>
                }  
            </div>                      
        </form>
    </div>
  )
}

export default LoginPopup
