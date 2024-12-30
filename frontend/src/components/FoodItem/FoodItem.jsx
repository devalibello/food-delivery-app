import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, description, price, image}) => {

const { cartItems, addToCart, removeFromCart, url, token } = useContext(StoreContext)

const whiteAddToCart = () => {
  console.log(token);
  
};

  return (
        <div key={id} className="dish-container">
            <img className='food-item-image' src={`${url}/images/${image}`} alt="" />
            {
                !cartItems[id]
                ? <img onClick={() => whiteAddToCart()} src={assets.addIconWhite} alt="" className='add-food-white'/>
                : <div className="food-counter">
                    <img onClick={() => removeFromCart(id)} src={assets.removeIconRed} alt="" className='remove-food' />
                    <p className="cart-counter-display">{cartItems[id]}</p>
                    <img onClick={() => addToCart(id)} src={assets.addIconGreen} alt="" className="add-food" />
                  </div>
            }
            <p className='dish-container-food-name'>{name}</p>
            <h3 className='dish-container-food-price'>${price}</h3>
      </div>
  )
}

export default FoodItem
