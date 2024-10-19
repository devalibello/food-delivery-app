import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'
import { foodList } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, removeFromCart, getTotalAmount } = useContext(StoreContext)

  const navigate = useNavigate()

  const goToCheckout = () => {
    navigate('/order')
  } 

  return (
    <div className='cart'>
      {foodList.map((food) => {
        // If food item ID exists in CartItems and It is greater than zero.
        // The greater than zero is important because an item can be removed and
        // its quantity will go back to zero
        if(cartItems[food._id] > 0) {
          return (
            <>
              <hr />
                  <ul className='cart-header'>
                    <li><img className='cart-food-image' src={food.image} alt="" /></li>
                    <li>Name: {food.name}</li>
                    <li>Price: ${food.price}</li>
                    <li>Quantity: {cartItems[food._id]}</li>
                    <li>Total: ${food.price * cartItems[food._id]}</li>
                    <li onClick={() => removeFromCart(food._id)}>Remove</li>
                  </ul>
            </>
          )
        }
      })}
      <hr />
      <div className="cart-buttom">
        <h2>Cart Total</h2>
        <div className="cart-total-section">
          <div className="cart-total-cal">
            <p>Subtotal:</p>
            <p className='grand-total'>${getTotalAmount()}</p>
          </div>        
          <hr />
          <div className="cart-total-cal">
            <p>Delivery Fee:</p>
            <p className='grand-total'>${getTotalAmount() ? 50 : 0}</p>
          </div> 
          <hr />
          <div className="cart-total-cal">
            <p>Grand Total:</p>
            <p className='grand-total'>${getTotalAmount() ? getTotalAmount() + 50 : 0}</p>
          </div> 
        </div>
        <button onClick={() => goToCheckout()} className='checkout-btn'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cart
