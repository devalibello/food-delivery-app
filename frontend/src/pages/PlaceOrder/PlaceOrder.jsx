import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import CartTotal from '../../components/CartTotal/CartTotal'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalAmount, token, foodList, cartItems } = useContext(StoreContext)

  const [ data, setData ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData((data) => ({
      ...data,
      [name]: value
    })
    )
  }

  const navigate = useNavigate()

  const goToPayment = async () => {
    let orderItems = []
    foodList.map((food) => {
      if (cartItems[food._id] > 0) {
        let foodQuantity = food

        //Add quantity property to ordered food items
        foodQuantity["quantity"] = cartItems[food._id]
        orderItems.push(foodQuantity)
      }
    })

    console.log(orderItems);
    


    // navigate('/payment')
  }
  return (
    <div className='place-order'>
    <h2>Delivery Information</h2>
      <form className="checkout-form">
        <input onChange={onChangeHandler} name='firstName' value={data.firstName} type="text" placeholder='First name'/>
        <input onChange={onChangeHandler} name='lastName' value={data.lastName} type="text" placeholder='Last name'/>
        <input onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='Email'/>
        <input onChange={onChangeHandler} name='street' value={data.street} type="text" placeholder='Street'/>
        <div className="horizontal-fields">
          <input onChange={onChangeHandler} name='city' value={data.city} className='dual-input' type="text" placeholder='City'/>
          <input onChange={onChangeHandler} name='state' value={data.state} className='dual-input' type="text" placeholder='State'/>
        </div>
        <div className="horizontal-fields">          
          <input onChange={onChangeHandler} name='zipcode' value={data.zipcode} className='dual-input' type="text" placeholder='zipcode'/>
          <input onChange={onChangeHandler} name='country' value={data.country} className='dual-input' type="text" placeholder='Country'/>
        </div>
        <input onChange={onChangeHandler} name='phone' value={data.phone} type="text" placeholder='Phone'/>
      </form>
      <div className="cart-totals">
        <CartTotal payment="PAYMENT" goToPayment={goToPayment} />
      </div>
    </div>
  )
}

export default PlaceOrder
