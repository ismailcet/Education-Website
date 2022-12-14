import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <section className="Hero">
        <div className="container">
          <div className="row">
            <div className="hero_heading">
              <h3>WELCOME TO ACADEMIA</h3>
              <h1>Best Online Education Expertise</h1>
            </div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
