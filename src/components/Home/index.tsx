import React from "react";
import Hero from "./Hero";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";

const Home = () => {
  return (
    <main>
      {/* Hero Slider - Indian food court images */}
      <Hero />
      
      {/* Featured Offer - Melbourne lunch combo */}
      <PromoBanner />
      
      {/* Popular Menu Items - Manual scroll, 3/4vw cards */}
      <BestSeller />
    </main>
  );
};

export default Home;
