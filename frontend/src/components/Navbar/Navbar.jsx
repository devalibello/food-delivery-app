import React, { useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const Navbar = ({setShowLogin}) => {

  const { token } = useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <div className="right-nav">
          <div className="nav-menu">
            <Link to='/cart'><img src={assets.bagIcon} alt="" className="cart-icon" /></Link>
            {
              !token ? <img src={assets.profile_icon} alt="" className="profile-icon" />            
              : <button onClick={() => {
                  setShowLogin(true);
                  document.body.style.overflow = 'hidden';
                  }} className='btn signin'>Sign in        
                </button> 
            }
          </div>
          <div className="profile-section">
              <div className="order-logout">
                <div className="order">
                  <img src={assets.bagIcon} alt="" className="order-image" />
                  <p>Orders</p>
                </div>
                <p>|</p>
                <div className="logout">
                  <img src={assets.logout_icon} alt="" className="logout-image" />
                  <p>Logout</p>
                </div>
              </div>
          </div>  
      </div>                  
    </div>
  )
}

export default Navbar
