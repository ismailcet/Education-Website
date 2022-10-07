import React from "react";
import "./AboutCard.css";
import aboutImg from "../../images/about.webp";
import AboutWrapper from "./AboutWrapper";
import { homeAbout } from "../../Constant/dummydata";
const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src={aboutImg} alt="About Img" />
          </div>
          <div className="right row">
            <div className="about_heading">
              <h3>learn Anything</h3>
              <h1>Benefits About Online Learning Expertise</h1>
            </div>
            <div className="items">
              {homeAbout.map((item) => (
                <div className="item flexSB" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="About Item Images" />
                  </div>
                  <div className="text">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AboutWrapper />
    </>
  );
};

export default AboutCard;
