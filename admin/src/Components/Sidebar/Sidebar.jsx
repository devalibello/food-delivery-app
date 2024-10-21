import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <hr />
        <div className="sidebar-menu">
            <img src={assets.add_icon} alt="" />
            <p>Add Food</p>
        </div>
        <div className="sidebar-menu">
            <img src={assets.order_icon} alt="" />
            <p>Add Food</p>
        </div>
        <hr />
    </div>
  )
}

export default Sidebar
