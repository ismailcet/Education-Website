import React from "react";
import Hero from "../Components/Hero/Hero";
import AboutCard from "../Components/AboutCard/AboutCard";
import CoursesAbout from "../Components/CoursesAbout/CoursesAbout";
const Home = () => {
  return (
    <div className="home_page">
      <Hero />
      <AboutCard />
      <CoursesAbout />
    </div>
  );
};

export default Home;
