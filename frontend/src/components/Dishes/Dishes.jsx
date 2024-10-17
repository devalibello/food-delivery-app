import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Dishes.css";

const Dishes = () => {
  const { foodList } = useContext(StoreContext);
  console.log(foodList)
  return (
    <div className="dishes">
      <h2>Your Favorite Dishes</h2>
      <div className="dish-section">
      {foodList.map((food) => 
        <div className="dish-container">
            <img src={food.image} alt="" />
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <h3>${food.price}</h3>
      </div>
      )}
      </div>
    </div>
  );
};

export default Dishes;







