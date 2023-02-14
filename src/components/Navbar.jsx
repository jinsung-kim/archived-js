import React from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <Link to='../' style={{ textDecoration: "none" }}>
        <p className='nav-item'>Home</p>
      </Link>
      <Link to='../about' style={{ textDecoration: "none" }}>
        <p className='nav-item'>About</p>
      </Link>
    </div>
  );
}
