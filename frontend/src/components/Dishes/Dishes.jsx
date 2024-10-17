import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Dishes.css";

const Dishes = () => {
  const { foodList } = useContext(StoreContext);
  console.log(foodList)
  return (
    <div className="dishes">
      <h2>Your Favorite Dishes</h2>
      <div className="dish-container">
        <img src={foodList[0].image} alt="" />
        <h3>{foodList[0].name}</h3>
        <p>{foodList[0].description}</p>
        <h3>${foodList[0].price}</h3>
      </div>
    </div>
  );
};

export default Dishes;







