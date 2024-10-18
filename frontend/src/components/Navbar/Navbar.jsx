import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({setShowLogin}) => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      <button onClick={() => setShowLogin(true)} className='btn signin'>Sign in</button>
    </div>
  )
}

export default Navbar
