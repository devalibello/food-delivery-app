import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <div className="right-nav">
        <Link to='/cart'><img src={assets.bagIcon} alt="" className="cart-icon" /></Link>
        <button onClick={() => {
            setShowLogin(true);
            document.body.style.overflow = 'hidden';
          }} className='btn signin'>Sign in        
        </button>
      </div>
    </div>
  )
}

export default Navbar
