import React, { useContext, useState, useEffect } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginPopup = ({setShowLogin}) => {

    // useEffect(() => {
    //     if (localStorage.getItem('showToastAfterReload') === 'true') {
    //         toast.success('Login Successfull')
    //         localStorage.removeItem('showToastAfterReload');
    //     }
    // }, []);

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

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        document.body.style.overflow = 'auto';
        if (currentState === "Sign Up") {
            const response = await axios.post(`${url}/api/user/signup`, data)
            if (response.status == 200) {
                setToken(response.data.token)
                localStorage.setItem('token', response.data.token)
                setShowLogin(false)
                toast.success(response.data.mssg)
            }

            if (response.status == 400) {
                setShowLogin(false)
                toast.error(response.data.error)
            }

        } else {
            const response = await axios.post(`${url}/api/user/login`, data)
            if (response.status == 200) {
                setToken(response.data.token)
                localStorage.setItem('token', response.data.token)
                setShowLogin(false)
                loadCartData(response.data.token)
                toast.success(response.data.mssg)
            }
            if (response.status == 400) {
                setShowLogin(false)
                toast.error(response.data.error)
            }
        }
    }    

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
