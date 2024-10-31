import React, { useContext } from 'react'
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
                    <li><img className='cart-food-image' src={`${url}/images/${food.image}`} alt="" /></li>
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
      <CartTotal payment="CHECKOUT" goToPayment={goToCheckout} />
    </div>
  )
}

export default Cart
