import React, { useContext, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { toast } from 'react-toastify'


const Navbar = ({setShowLogin}) => {

  const { setToken, setCartItems, cartItems, token } = useContext(StoreContext)

  const userToken = localStorage.getItem('token')

  const logout = () => {
      setToken('')
      localStorage.removeItem('token')
      setCartItems({})
      toast.success('Logout Successful')
    }

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <div className="right-nav">
          <div className="nav-menu">
            <Link to='/cart'>
              <img src={assets.bagIcon} alt="" className="cart-icon" />
              {token && <p className='cart-counter' >{Object.values(cartItems).reduce((sum, quantity) =>  sum + quantity, 0 )}</p>}
            </Link>
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
