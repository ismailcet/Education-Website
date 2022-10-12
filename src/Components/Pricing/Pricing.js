import React from "react";
import "./Pricing.css";
import { price } from "../../Constant/dummydata";
const Pricing = () => {
  return (
    <div className="Pricing padding">
      <div className="pricing-heading">
        <h3>our pricing</h3>
        <h1>pricing & packages</h1>
      </div>
      <div className="price container grid">
        {price.map((item, i) => (
          <div className="items shadow" key={i}>
            <h4 className="price-info">{item.name}</h4>
            <h1>
              <span>$</span>
              {item.price}
            </h1>
            <p>{item.desc}</p>
            <button className="outline-btn">GET STARTED</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
