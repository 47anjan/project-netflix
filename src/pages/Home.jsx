import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import useScrollTop from "../hooks/useScrollTop";

const Home = () => {
  useScrollTop();

  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
