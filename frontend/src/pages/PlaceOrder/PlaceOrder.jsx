import React from 'react'
import './PlaceOrder.css'
import CartTotal from '../../components/CartTotal/CartTotal'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const navigate = useNavigate()

  const goToPayment = () => {
    navigate('/payment')
  }
  return (
    <div className='place-order'>
    <h2>Delivery Information</h2>
      <form className="checkout-form">
        <input type="text" placeholder='First name'/>
        <input type="text" placeholder='Last name'/>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Street'/>
        <div className="horizontal-fields">
          <input className='dual-input' type="text" placeholder='City'/>
          <input className='dual-input' type="text" placeholder='State'/>
        </div>
        <div className="horizontal-fields">          
          <input className='dual-input' type="text" placeholder='zipcode'/>
          <input className='dual-input' type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </form>
      <div className="cart-totals">
        <CartTotal payment="PAYMENT" goToPayment={goToPayment} />
      </div>
    </div>
  )
}

export default PlaceOrder
