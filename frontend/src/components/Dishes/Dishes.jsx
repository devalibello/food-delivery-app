import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Dishes.css";
import FoodItem from "../FoodItem/FoodItem";

const Dishes = () => {
  const { foodList } = useContext(StoreContext);
  return (
    <div className="dishes">
      <h2>Your Favorite Dishes</h2>
      <div className="dish-section">
      {foodList.map((food) => {
        <FoodItem 
            id={food._id}
            name={food.name}
            description={food.description}
            image={food.image}
            price={food.price}
        />
      })}
      </div>
    </div>
  );
};

export default Dishes;







