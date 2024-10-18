import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'
import { foodList } from '../../assets/assets'

const Cart = () => {

  const { cartItems, removeFromCart } = useContext(StoreContext)

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
                    <li>Remove</li>
                  </ul>
              <hr />    
            </>
          )
        }
      })}
    </div>
  )
}

export default Cart
