import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import CartTotal from '../../components/CartTotal/CartTotal'

const Cart = () => {


  const { cartItems, removeFromCart, foodList, url} = useContext(StoreContext)

  const navigate = useNavigate()

  const goToCheckout = () => {
    navigate('/order')
  } 

  const userToken = localStorage.getItem('token')

  return (
    <div className='cart'>
      {!userToken && <h3 className='conditional-signin'>Sign in to view items in cart!</h3>}
      <div className='cart-flex'>
      {foodList.map((food) => {
        // If food item ID exists in CartItems and It is greater than zero.
        // The greater than zero is important because an item can be removed and
        // its quantity will go back to zero
        if(cartItems[food._id] > 0) {
          return (
            <>
              <ul className='cart-header'>
                <li className='cart-image-container'><img className='cart-food-image' src={`${url}/images/${food.image}`} alt="" /></li>
                <li>Name: {food.name}</li>
                <li>Price: ${food.price}</li>
                <li>Quantity: {cartItems[food._id]}</li>
                <li>Total: ${food.price * cartItems[food._id]}</li>
                <li className='remove-from-cart' onClick={() => removeFromCart(food._id)}>Remove</li>
              </ul>
            </>
          )
        } 
      })}
      </div>
      <hr />
      <CartTotal payment="CHECKOUT" goToPayment={goToCheckout} />
    </div>
  )
}

export default Cart
