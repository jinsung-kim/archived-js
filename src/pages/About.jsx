import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      <Navbar />

      <div className="text-box">
        <p className="title">archived.js</p>
        <p className="sub">
          archived.js is a project that I have envisioned with the intent to
          document my interests/life. "archived" in this case refers to this
          written form. The "js" in the second part refers to the initials of my
          first name (진성 or Jin Sung) while also referencing the framework
          this entire project (frontend and backend) was created in
          (Javascript). You can see how it was designed and created{' '}
          <a
            href="https://github.com/jinsung-kim/archived-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .<br></br>
        </p>

        <p className="title">contact</p>
        <ul>
          <li>
            email: <i>jinsungkim1210@gmail.com</i>
          </li>
          <li>
            insta (quite inactive): <i>codejin_</i>
          </li>
          <li>
            book blog:{' '}
            <i className="sub">
              <a
                href="https://jinkim.io/blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                jinkim.io/blog
              </a>
            </i>
          </li>
          <li>
            main website:{' '}
            <i className="sub">
              <a
                href="https://jinkim.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                jinkim.io
              </a>
            </i>
          </li>
        </ul>

        <Footer />
      </div>
    </div>
  );
}
