import React, { useContext, useState, useEffect } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginPopup = ({setShowLogin}) => {

    const {url, setToken, loadCartData} = useContext(StoreContext)

    const [currentState, setCurrentState] = useState("Sign in")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        setData((prevData) => ({...prevData, [name]: event.target.value }))
    }

    // const onSubmitHandler = async (event) => {
    //     event.preventDefault()
    //     document.body.style.overflow = 'auto';
    //     if (currentState === "Sign Up") {
    //         const response = await axios.post(`${url}/api/user/signup`, data)
    //         if (response.status == 200) {
    //             setToken(response.data.token)
    //             localStorage.setItem('token', response.data.token)
    //             setShowLogin(false)
    //             toast.success(response.data.mssg)
    //         }

    //         if (response.status == 400) {
    //             setShowLogin(false)
    //             toast.error(response.data.mssg)
    //         }

    //     } else {
    //         delete data.name
    //         console.log(data)
    //         const response = await axios.post(`${url}/api/user/login`, data)
    //         console.log("Hello")
    //         if (response.status == 200) {
    //             setToken(response.data.token)
    //             localStorage.setItem('token', response.data.token)
    //             setShowLogin(false)
    //             loadCartData(response.data.token)
    //             toast.success(response.data.mssg)
    //         }
    //         if (response.status == 400) {
    //             setShowLogin(false)
    //             toast.error(response.data.mssg)
    //         }
    //     }
    // }   
    
    const onSubmitHandler = async (event) => {
        event.preventDefault();    
        try {
            if (currentState === "Sign Up") {
                const response = await axios.post(`${url}/api/user/signup`, data);
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                document.body.style.overflow = 'auto';
                setShowLogin(false);
                toast.success(response.data.mssg);
            } else {
                delete data.name;
                const response = await axios.post(`${url}/api/user/login`, data);
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                document.body.style.overflow = 'auto';
                setShowLogin(false);
                loadCartData(response.data.token);
                toast.success(response.data.mssg);
            }
        } catch (error) {
            if (error.response) {
                document.body.style.overflow = 'auto';
                // The server responded with a status code out of 2xx range
                setShowLogin(false);
                toast.error(error.response.data.mssg || "Something went wrong!");
            } else if (error.request) {
                document.body.style.overflow = 'auto';
                // The request was made but no response was received
                setShowLogin(false);
                toast.error("No response from server. Please try again.");
            } else {
                document.body.style.overflow = 'auto';
                // Something happened in setting up the request
                setShowLogin(false);
                toast.error("An error occurred. Please try again.");
            }
        }
    };
    

  return (
    <div className='login-popup'>
        <form onSubmit={onSubmitHandler} className='login-popup-form'>
            <div className="login-header">
                <h2>{currentState}</h2>
                <img onClick={() => {
                    setShowLogin(false);
                    document.body.style.overflow = 'auto';
                }} src={assets.crossIcon} alt="" className="close-login" />
            </div>
            <div className="form-inputs">
            {
                currentState === "Sign Up"
                ? <input onChange={onChangeHandler} name='name' value={data.name} type="text" placeholder='Name' required />
                : <></>
            }                
                <input onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='Email' required />
                <input onChange={onChangeHandler} name='password' value={data.password} type="password" placeholder='Password' required />
            </div>
            <button className='submit-btn' type='submit'>
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
