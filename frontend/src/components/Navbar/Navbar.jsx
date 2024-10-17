import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="" />
    </div>
  )
}

export default Navbar
