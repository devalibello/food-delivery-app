import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Dishes from "../../components/Dishes/Dishes";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const [category, setCategory] = useState('All')
  return (
    <div>
      <Banner />
      <Categories category={category} setCategory={setCategory} />
      <Dishes category={category}/>
      <Footer />
    </div>
  );
};

export default Home;
