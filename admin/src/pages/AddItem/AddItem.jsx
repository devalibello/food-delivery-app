import React from 'react'
import './AddItem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const AddItem = () => {
    const [image, setImage] = useState(false)

  return (
    <div className='add-item'>
        <form className="add-item-form">
            <div className="product-info">
                <p>Product Image</p>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="product" className="add-image" />
                </label>
                <input onChange={(e) => (setImage(e.target.files[0]))} type="file" id='image' hidden required />
            </div>
            <div className="product-info">
                <p>Product Name</p>
                <input type="text" placeholder='Type Here' required/>
            </div>
            <div className="product-info">
                <p>Product Description</p>
                <textarea rows='5' type='longtext' placeholder='Type Here' required />
            </div>
            <div className="product-category-price">
                <div className="side-product">
                    <p>Product Category</p>
                    <select>
                        <option value="Pizza">Pizza</option>
                        <option value="Cake">Cake</option>
                        <option value="Salad">Salad</option>
                    </select>
                </div>
                <div className="side-product">
                    <p>Product Price</p>
                    <input type='Number' placeholder='Enter Price' />
                </div>            
            </div>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddItem
