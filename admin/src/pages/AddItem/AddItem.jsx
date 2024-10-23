import React from 'react'
import './AddItem.css'

const AddItem = () => {
  return (
    <div className='add-item'>
        <img src="" alt="" className="add-image" />
        <form className="add-item-form">
            <div className="product-info">
                <p>Product Name</p>
                <input type="text" placeholder='Type Here' />
            </div>
            <div className="product-info">
                <p>Product Description</p>
                <input type='longtext' placeholder='Write Here' />
            </div>
            <div className="product-category-price">
                <div className="side-product">
                    <p>Product Category</p>
                    <input type='dropdown' placeholder='Write Here' />
                </div>
                <div className="side-product">
                    <p>Product Price</p>
                    <input type='longtext' placeholder='Type Here' />
                </div>            
            </div>
        </form>
    </div>
  )
}

export default AddItem
