import React, { useEffect, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { toast } from 'react-toastify'

const FoodItem = ({id, name, description, price, image}) => {

const { cartItems, addToCart, removeFromCart, url, token } = useContext(StoreContext)

const whiteAddToCart = (id) => {
  if (token) {
    addToCart(id)
  } else {
    toast.error("You must sign in to add items to cart")
  }
};

  return (
        <div key={id} className="dish-container">
            <img className='food-item-image' src={`${url}/images/${image}`} alt="" />
            {
                !cartItems[id]
                ?  <button onClick={() => whiteAddToCart(id)} className="add-white-food-circle white-plus">
                      +
                    </button>
                : <div className="food-counter">
                    <button onClick={() => removeFromCart(id)} className="remove-food-circle minus">
                      -
                    </button>
                    <p className="cart-counter-display">{cartItems[id]}</p>
                    <button onClick={() => addToCart(id)} className="add-food-circle plus">
                      +
                    </button>
                  </div>
            }
            <p className='dish-container-food-name'>{name}</p>
            <h3 className='dish-container-food-price'>${price}</h3>
      </div>
  )
}

export default FoodItem
