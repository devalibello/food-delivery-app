import { createContext, useEffect, useState } from "react";
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

    const contextValue = {
        foodList,
        addToCart,
        removeFromCart,
        setCartItems,
        cartItems
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])
    
    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider