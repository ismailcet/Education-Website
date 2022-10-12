import React from "react";
import "./NewLetter.css";

const NewLetter = () => {
  return (
    <div className="newLetter">
      <div className="container flexSB">
        <div className="left row">
          <h1>Newsletter - Stay tune and get the latest update</h1>
          <span>Far far away, behind the word mountains</span>
        </div>
        <div className="right row">
          <input type="text" placeholder="Enter email address" />
          <i className="fa fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
