import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  const d = new Date();
  return (
    <div className='footer-container'>
      <p>
        archived.js <span className='year'>{d.getFullYear()}</span>
      </p>
    </div>
  );
}
