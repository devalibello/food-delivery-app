import React, { useContext, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { toast } from 'react-toastify'


const Navbar = ({setShowLogin}) => {

  const { setToken, token } = useContext(StoreContext)

  const navigate = useNavigate()
  const userToken = localStorage.getItem('token')

  useEffect(() => {
    if (localStorage.getItem('showToastAfterReload') === 'true') {
        toast.success('Logout Successful');
        localStorage.removeItem('showToastAfterReload'); // Clear the flag
    }
}, []);

  const logout = () => {
      setToken('')
      localStorage.removeItem('token')
      navigate('/')
      localStorage.setItem('showToastAfterReload', 'true'); // Set flag
      window.location.reload()
      // toast.success('Logout Successful')
    }

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <div className="right-nav">
          <div className="nav-menu">
            <Link to='/cart'><img src={assets.bagIcon} alt="" className="cart-icon" /></Link>
            {
              userToken ? 
              <div className="profile-container">
                <img src={assets.profile_icon} alt="" className="profile-icon" /> 
                <div className="profile-section">
                  <div className="order-logout">
                    <div className="order">
                      <img src={assets.bagIcon} alt="" className="order-image" />
                      <p>Orders</p>
                    </div>
                    <p>|</p>
                    <div className="logout">
                      <img src={assets.logout_icon} alt="" className="logout-image" />
                      <p onClick={logout}>Logout</p>
                    </div>
                  </div>
                </div>   
              </div>     
              : <button onClick={() => {
                  setShowLogin(true);
                  document.body.style.overflow = 'hidden';
                  }} className='btn signin'>Sign in        
                </button> 
            }
          </div> 
      </div>                  
    </div>
  )
}

export default Navbar
