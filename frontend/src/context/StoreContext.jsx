import { createContext, useEffect, useState } from "react";
import axios from 'axios'



export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    const [foodList, setFoodList] = useState([])
    const url = 'http://localhost:4000'
    const [token, setToken] = useState('')

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems(prev => ({
                ...prev, [itemId]: 1
            }))
        }
        else {
            setCartItems(prev => ({
                ...prev, [itemId]: prev[itemId]+1
            }))
        }

        if (token) {
            await axios.post(
                `${url}/api/cart/add`,
                { itemId },
                { headers: { Authorization: `Bearer ${token}` } })
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems(prev => ({
            ...prev, [itemId]: prev[itemId]-1
        }))

        if (token) {
            await axios.post(
                `${url}/api/cart/remove`,
                { itemId },
                { headers: { Authorization: `Bearer ${token}` } })
        }
    }

    const loadCartData = async (token) => {
        const response = await axios.post(
            `${url}/api/cart/get`,
            {},
            { headers: { Authorization: `Bearer ${token}` } }
        )
        setCartItems(response.data.cartData)
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for ( const foodId in cartItems ) {
            if (cartItems[foodId] > 0) {
                let item = foodList.find((product) => product._id === foodId)
                totalAmount += cartItems[foodId] * item.price;
            }
        }
        return totalAmount;
    }

    const getFoodList = async () => {
        const response = await axios.get(`${url}/api/foods/`)
        setFoodList(response.data)
    }

    useEffect(() => {
        const loadData = async () => {
            await getFoodList()
            let userToken = localStorage.getItem('token')
            if (userToken) {
                setToken(userToken)
                await loadCartData(userToken)
            }
        }
        loadData();
    }, [])



    const contextValue = {
        foodList,
        addToCart,
        removeFromCart,
        setCartItems,
        cartItems,
        getTotalAmount,
        url,
        setToken,
        token,
        loadCartData
    }
    
    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider