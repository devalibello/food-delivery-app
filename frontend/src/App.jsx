import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Home from './pages/Home/Home.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

const [showlogin, setShowLogin] = useState(false)

  return (
    <>
      {showlogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <ToastContainer />
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </>
  )
}

export default App
