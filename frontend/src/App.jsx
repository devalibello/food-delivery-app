import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Home from './pages/Home/Home.jsx'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
