import React from "react";
import "./Testimonial.css";
import { testimonal } from "../../Constant/dummydata";
const Testimonial = () => {
  return (
    <section className="testimonial padding">
      <div className="container">
        <div className="testimonial-heading">
          <h3>Testimonial</h3>
          <h1>Our Success Students</h1>
        </div>

        <div className="content grid2">
          {testimonal.map((item) => (
            <div className="items shadow" key={item.id}>
              <div className="box flex">
                <div className="img">
                  <img src={item.cover} alt="People Img" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>{item.name}</h2>
                  <span>{item.post}</span>
                </div>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
