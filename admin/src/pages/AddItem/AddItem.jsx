import React, { useEffect } from 'react'
import './AddItem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddItem = ({url}) => {
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name : '',
        description: '',
        category: '',
        price: ''
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({...data, [name]: value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('category', data.category)
        formData.append('price', Number(data.price))
        formData.append('image', image)

        const response = await axios.post(`${url}/api/foods/`, formData)
        if (response.status == 200) {
            setData({
                name : '',
                description: '',
                category: `${data.category}`,
                price: ''
            })
            setImage(false)
            toast.success("Food Added")
        } else {
            toast.error("Error Adding Food")
        }
        
    }

  return (
    <div className='add-item'>
        <form className="add-item-form" onSubmit={onSubmitHandler}>
        <div className="product-info">
            <p className='add-item-form-label'>Product Image</p>
            <label htmlFor="image">
                <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="product" className="add-image" />
            </label>
            <input onChange={(e) => (setImage(e.target.files[0]))} type="file" id='image' hidden required />
        </div>
        <div className="product-info">
            <p className='add-item-form-label'>Product Name</p>
            <input onChange={onChangeHandler} name='name' value={data.name} type="text" placeholder='Type Here' required/>
        </div>
        <div className="product-info">
            <p className='add-item-form-label'>Product Description</p>
            <textarea onChange={onChangeHandler} name='description' value={data.description} rows='5' type='longtext' placeholder='Type Here' required />
        </div>
        <div className="product-category-price">
            <div className="side-product">
                <p className='add-item-form-label'>Product Category</p>
                <select onChange={onChangeHandler} name='category' required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Salad">Salad</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Paratha">Paratha Rolls</option>
                    <option value="Soup">Soup</option>
                </select>
            </div>
            <div className="side-product">
                <p className='add-item-form-label'>Product Price</p>
                <input onChange={onChangeHandler} name='price' value={data.price} type='Number' placeholder='Enter Price' />
            </div> 
        </div>
        <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddItem
