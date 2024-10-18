import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({id, name, description, price, image}) => {

    const [itemCount, setItemCount] = useState(0)

  return (
    <div>
        <div key={id} className="dish-container">
            <img src={image} alt="" />
            {
                !itemCount
                ? <img src={assets.addIconWhite} alt="" />
                : <div className="food-counter">
                    <img src={assets.removeIconRed} alt="" className='remove-food' />
                    <p>{itemCount}</p>
                    <img src={assets.addIconGreen} alt="" className="add-food" />
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
