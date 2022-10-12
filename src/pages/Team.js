import React from "react";
import Hero from "../Components/Hero/Hero";
import Testimonial from "../Components/Testimonial/Testimonial";
import Blog from "../Components/Blog/Blog";
const Team = () => {
  return (
    <div className="home_page">
      <Hero />
      <Testimonial />
      <Blog />
    </div>
  );
};

export default Team;
