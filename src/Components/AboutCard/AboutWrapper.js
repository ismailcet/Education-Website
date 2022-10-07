import React from "react";
import { awrapper } from "../../Constant/dummydata";
const AboutWrapper = () => {
  return (
    <section className="about-wrapper">
      <div className="container grid">
        {awrapper.map((item, i) => (
          <div className="box flex" key={i}>
            <div className="img">
              <img src={item.cover} alt="" />
            </div>
            <div className="text">
              <h1>{item.data}</h1>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutWrapper;
