import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className="logo-section">
            <img src={assets.logo} alt="" className="logo" />
            <p>Admin Panel</p>
          </div>
          <img src={assets.profile_image} alt="" className="profile-picture" />
      </div>
  )
}

export default Navbar
