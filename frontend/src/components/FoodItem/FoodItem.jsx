import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, description, price, image}) => {

const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

  return (
    <div>
        <div key={id} className="dish-container">
            <img src={image} alt="" />
            {
                !cartItems[id]
                ? <img onClick={addToCart(id)} src={assets.addIconWhite} alt="" />
                : <div className="food-counter">
                    <img onClick={() => addToCart(id)} src={assets.removeIconRed} alt="" className='remove-food' />
                    <p>{cartItems[id]}</p>
                    <img onClick={removeFromCart} src={assets.addIconGreen} alt="" className="add-food" />
                </div>
            }
            <h3>{name}</h3>
            <p>{description}</p>
            <h3>${price}</h3>
      </div>
    </div>
  )
}

export default FoodItem
