import React from 'react'
import './FoodItem.css'

const FoodItem = ({id, name, description, price, image}) => {
  return (
    <div>
        <div key={id} className="dish-container">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h3>${price}</h3>
      </div>
    </div>
  )
}

export default FoodItem
