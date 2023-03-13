import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="../" style={{ textDecoration: 'none' }}>
        <p className="nav-item">THOUGHTS</p>
      </Link>
      <Link to="../capsules" style={{ textDecoration: 'none' }}>
        <p className="nav-item">CAPSULES</p>
      </Link>
      <Link to="../about" style={{ textDecoration: 'none' }}>
        <p className="nav-item">ABOUT</p>
      </Link>
    </div>
  );
}
