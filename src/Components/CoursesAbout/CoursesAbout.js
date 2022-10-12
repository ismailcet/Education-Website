import React from "react";
import "./CoursesAbout.css";
import { coursesCard } from "../../Constant/dummydata";
import CoursesList from "../CoursesList/CoursesList";
const CoursesAbout = () => {
  return (
    <>
      <div className="CoursesAbout">
        <div className="container">
          <div className="courses-heading">
            <h3>Our COurses</h3>
            <h1>explore our popular online courses</h1>
          </div>
          <div className="coursesCard">
            <div className="grid2">
              {coursesCard.slice(0, 3).map((item) => (
                <div className="items" key={item.id}>
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        <img src={item.cover} alt="Item Cover" />
                      </div>
                    </div>
                    <div className="text">
                      <h1>{item.coursesName}</h1>
                      <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <label htmlFor="">(5.0)</label>
                      </div>
                      <div className="details">
                        {item.courTeacher.map((teacher, i) => (
                          <div key={i}>
                            <div className="box">
                              <div className="dimg">
                                <img src={teacher.dcover} alt="Teacher Cover" />
                              </div>
                              <div className="para">
                                <h4>{teacher.name}</h4>
                              </div>
                            </div>
                            <span>{teacher.totalTime}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <h3>
                      {item.priceAll} / {item.pricePer}
                    </h3>
                  </div>
                  <button className="outline-btn">Enroll Row</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CoursesList />
    </>
  );
};

export default CoursesAbout;
