import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Dishes from "../../components/Dishes/Dishes";

const Home = () => {
    const [category, setCategory] = useState('All')
  return (
    <div>
      <Banner />
      <Categories category={category} setCategory={setCategory} />
      <Dishes />
    </div>
  );
};

export default Home;
