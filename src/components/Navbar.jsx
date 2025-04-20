import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="lTitle">iTask</h1>
      </div>
      <ul className="itemList">
      <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
        <li className="item">Home</li>
      </Link>
      <Link to="/about" style={{textDecoration:"none", color:"inherit"}}>
        <li className="item">About</li>
      </Link>
      </ul>
    </div>
  );
};

export default Navbar;
