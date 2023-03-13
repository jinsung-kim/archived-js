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
          archived.js is my moodboard project that I have envisioned with the
          intent to document my thinking/writing process. "archived" in this
          case refers to my vast collection of media. The "js" in the second
          part refers to the initials of my first name (진성 or Jin Sung) while
          also referencing the framework this entire project (frontend and
          backend) was created in (Javascript). You can see how it was designed
          and created{' '}
          <a href="https://github.com/jinsung-kim/archived-js">here</a>.
          <br></br>
          <br></br>
          <b>
            <i>Why does it need to exist?</i>
          </b>
          <br></br> This is the first question I always think of when I bring
          something to light. I have a page dedicated to writing about books
          that I have read <a href="https://jinkim.io/blog">here</a> - but I
          found it rather one dimensional, and have been wanting to expand into
          other realms of interests that I have. I also go through many cycles
          of thoughts - but find myself often too distracted to dig deeper
          without forcing myself to sit and write.
          <br></br>
          <br></br>I treat my brain like a map from a video game. While it
          begins in a foggy grey mess, it slowly tunes itself to clarity as I
          expose myself to new things. If my thinking process, cognitive
          heuristics, and ideas have not changed every couple years, it
          signifies my lack of growth and exposure.
          <br></br>
          <br></br>
          <i>
            I consider it a goal of mine to continue this project and to be able
            to look back and see my interests through the years. I believe that
            anything I don't write down will eventually be forgotten.
          </i>
        </p>

        <p className="title">contact</p>
        <p>
          Not sure how this would be helpful to others, but feel free to say hi:
        </p>
        <ul>
          <li>
            email: <i>jinsungkim1210@gmail.com</i>
          </li>
          <li>
            Instagram: <i>codejin_</i>
          </li>
        </ul>

        <Footer />
      </div>
    </div>
  );
}
