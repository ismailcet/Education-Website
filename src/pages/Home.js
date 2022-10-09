import React from "react";
import Hero from "../Components/Hero/Hero";
import AboutCard from "../Components/AboutCard/AboutCard";
import CoursesAbout from "../Components/CoursesAbout/CoursesAbout";
import Testimonial from "../Components/Testimonial/Testimonial";
import Blog from "../Components/Blog/Blog";
const Home = () => {
  return (
    <div className="home_page">
      <Hero />
      <AboutCard />
      <CoursesAbout />
      <Testimonial />
      <Blog />
    </div>
  );
};

export default Home;
