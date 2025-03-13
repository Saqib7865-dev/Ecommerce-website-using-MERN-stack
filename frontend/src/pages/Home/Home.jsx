import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import TrendingProducts from "../Shop/TrendingProducts";
import DealSection from "./DealSection";
import PromoBanner from "./PromoBanner";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <HeroSection />
      <TrendingProducts />
      <DealSection />
      <PromoBanner />
      <Blogs />
    </div>
  );
};

export default Home;
