import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/About.css";

export default class About extends Component {
  constructor(props) {
    super(props);

    // For effect on hover
    this.state = {
      hovering: false,
    };
  }

  onHover = (e) => {
    e.preventDefault();

    this.setState({
      hovering: !this.state.hovering,
    });
  };

  render() {
    return (
      <div className='about-container'>
        <Navbar />

        <div className='text-box'>
          {/* <div className="reactive" onMouseOver={ this.onHover }> */}
          <p className='title'>archived.js</p>
          {/* </div> */}
          <p className='sub'>
            archived.js is my writing project that I have envisioned with the
            intent to document my thinking process and evolution as a writer.
            "archived" in this case refers to my vast collection of writing. The
            "js" in the second part refers to the initials of my first name
            (진성 or Jin Sung) while also referencing the framework this entire
            project (frontend and backend) was created in (Javascript). You can
            see how it was designed and created{" "}
            <a href='https://github.com/jinsung-kim/archived-js'>here</a>.
            <br></br>
            <br></br>
            <i>Why does it need to exist?</i> This is the first question I
            always think of when I bring something to light. I have a page
            dedicated to writing about books that I have read{" "}
            <a href='https://jinkim.io/blog'>here</a> - but I found it rather
            one dimensional, and have been wanting to expand into other realms
            of interests that I have. I also go through many cycles of thoughts
            - but find myself often too distracted to dig deeper without forcing
            myself to sit and write.
            <br></br>
            <br></br>
            My goal is to expand my map of knowledge and see how much I change
            throughout the years. I treat my brain like a map from a video game.
            It begins in a foggy grey mess, and slowly tunes itself to clarity
            as I expose myself outward to new things. If my thinking process,
            cognitive heuristics, and ideas have not changed every couple years,
            it means I have not exposed myself to enough.
            <br></br>
            <br></br>
            <i>
              I consider it a life goal of mine to continue this documentation
              and to be able to look back and see how this knowledge map becomes
              clearer. I believe that anything I don't write down will
              eventually be forgotten.
            </i>
          </p>

          <p className='title'>contact</p>
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

        {/* <img src="https://i.pinimg.com/originals/c5/16/d4/c516d4c3492422666be07065ab28e98d.png" alt="Martin Margiela" height="300" /> */}
      </div>
    );
  }
}
