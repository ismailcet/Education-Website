import React from "react";
import { blog } from "../../Constant/dummydata";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="Blog">
      <div className="container">
        <div className="blog-heading">
          <h3>Our Blog</h3>
          <h1>Recent From Blog</h1>
        </div>
        <div className="grid2">
          {blog.slice(0, 3).map((item) => (
            <div className="items shadow" key={item.id}>
              <div className="img">
                <img src={item.cover} alt="Blog People" />
              </div>
              <div className="text">
                <div className="admin flexSB">
                  <span>
                    <i className="fa fa-user"></i>
                    <label>{item.type}</label>
                  </span>
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label>{item.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-comments"></i>
                    <label>{item.com}</label>
                  </span>
                </div>
                <h1 className="blog-title">{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
