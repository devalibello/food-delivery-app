import { createContext } from "react";
import { foodList } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const contextValue = {
        foodList
    }
    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider