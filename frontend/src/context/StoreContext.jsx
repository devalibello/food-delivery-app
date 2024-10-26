import { createContext, useState } from "react";
import { foodList } from "../assets/assets";



export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        console.log(cartItems)
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

    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => ({
            ...prev, [itemId]: prev[itemId]-1
        }))
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

    const contextValue = {
        foodList,
        addToCart,
        removeFromCart,
        setCartItems,
        cartItems,
        getTotalAmount
    }
    
    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider