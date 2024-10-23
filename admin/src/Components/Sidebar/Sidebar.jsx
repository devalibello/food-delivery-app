import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <hr className='hr-1'/>
        <NavLink to='/add' className="sidebar-menu one">
            <img src={assets.add_icon} alt="" />
            <h3>Add Food</h3>
        </NavLink>
        <NavLink to='/list' className="sidebar-menu">
            <img src={assets.order_icon} alt="" />
            <h3>List Food</h3>
        </NavLink>
        <hr className='hr-2'/>
    </div>
  )
}

export default Sidebar
