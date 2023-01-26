import React from "react";
import Events from "../Companents/Events/Events";
import HeroSlider from "../Companents/HeroSlider/HeroSlider";
import PopularCourses from "../Companents/PopularCourses/PopularCourses";
import Register from "../Companents/Register/Register";
import Services from "../Companents/Services/Services";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <PopularCourses />
      <Register />
      <Services />
      <Events />
    </div>
  );
};

export default Home;
