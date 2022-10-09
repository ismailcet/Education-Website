import React from "react";
import "./CoursesList.css";
import { online } from "../../Constant/dummydata";

const CoursesList = () => {
  return (
    <div className="coursesList">
      <div className="container">
        <div className="coursesList-header">
          <h3>Courses</h3>
          <h1>Browse Our online Courses</h1>
        </div>
        <div className="content grid3">
          {online.map((item) => (
            <div className="box" key={item.id}>
              <div className="img">
                <img src={item.cover} alt="" />
                <img src={item.hoverCover} alt="" className="show" />
              </div>
              <h1>{item.courseName}</h1>
              <span>{item.course}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
