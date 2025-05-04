import React, { useEffect, useState } from 'react'
import './ListItem.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

const ListItem = ({url}) => {

const [foodList, setFoodList] = useState([])

const fetchFood = async () => {
  const response = await axios.get(`${url}/api/foods/`)
  if (response.status == 200) {
    setFoodList(response.data)
  }
  else {
    toast.error("Error Fetching Foods")
  }

}

const deleteFood = async (id) => {
  const response = await axios.delete(`${url}/api/foods/${id}`)
  if (response.status == 200) {
    toast.success(response.data.mssg)
    fetchFood()
  } else {
    toast.error("Error Deleting Food")
  }
}

useEffect(() => {
fetchFood()
},[])

  return (
    <div className='list-items'>
      {
        foodList.map((food) => 
        <>
          <ul className='list-items-container'>
            <li className='remove-minus-container'>
              <img className='list-items-image' src={`${url}/images/` + food.image} alt="" />
              <div onClick={() => deleteFood(food._id)} className='list-item-cross'>
                <p className="minus">-</p>
              </div>
            </li>
            <li>Name: {food.name}</li>
            <li>Price: ${food.price}</li>
            <li>Category: {food.category}</li>
          </ul>
        </>
        )
      }
    </div>
  )
}

export default ListItem
