import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";

const Home = () => {
    const [category, setCategory] = useState('All')
  return (
    <div>
      <Banner />
      <Categories category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
