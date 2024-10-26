import React, { useEffect, useState } from 'react'
import './ListItem.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const ListItem = () => {

const [foodList, setFoodList] = useState([])
const url = 'http://localhost:4000'

const fetchFood = async () => {
  const response = await axios.get(`${url}/api/foods/`)
  if (response.status == 200) {
    setFoodList(response.data)
  }
  else {
    toast.error("Error Fetching Foods")
  }
  // console.log(response.data)

}

useEffect(() => {
fetchFood()
},[])

  return (
    <div className='list-items'>
      {
        foodList.map((food) => 
        <>
          <ul className='cart-header'>
            <li><img className='cart-food-image' src={`${url}/images/` + food.image} alt="" /></li>
            <li>Name: {food.name}</li>
            <li>Description: {food.description}</li>
            <li>Price: ${food.price}</li>
            <li>Category: {food.category}</li>
            <li>Remove</li>
          </ul>
          <hr />
        </>
        )
      }
    </div>
  )
}

export default ListItem
