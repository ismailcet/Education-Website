import React, { useState } from "react";
import Head from "./Head";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header className="header">
        <nav className="flexSB">
          <ul className="flexSB">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/journal">journal</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <div className="toggle">
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"> </i>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
