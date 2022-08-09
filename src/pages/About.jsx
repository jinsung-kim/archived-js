import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/About.css";

export default class About extends Component {

    constructor(props) {
        super(props);

        // For effect on hover
        this.state = {
            hovering: false
        };
    }

    onHover = (e) => {
        e.preventDefault();

        this.setState({
            hovering: !this.state.hovering
        });
    }

    render() {
        return (
            <div className="about-container">
                <Navbar />

                <div className="text-box">
                    {/* <div className="reactive" onMouseOver={ this.onHover }> */}
                    <p className="title">archived.js</p>
                    {/* </div> */}
                    <p className="sub">
                        archived.js is a creative writing project that I have envisioned with the intent to document my thinking process and
                        interaction with art. "archived" in this case refers to my vast collection of writing.
                        The "js" in the second part refers to the initials of my first name (진성 or Jin Sung) while also referencing the framework
                        this entire project (frontend and backend) was created in (Javascript).
                        You can see how it was designed and created <a href="https://github.com/jinsung-kim/archived-js">here</a>.

                        <br></br>
                        <br></br>

                        <i>Why does it need to exist?</i> This is the first question I always think of when I bring something to light.
                        I have a page dedicated to writing about books that I have read <a href="https://jinkim.io/blog">here</a> - but I
                        found it rather one dimensional, and have been wanting to expand into other realms of interests that I have. I also
                        go through many cycles of thoughts - but find myself often too distracted to dig deeper.
                        With this project, I hope to be able to deliver more thought provoking ideas with clear cut examples so that I can reference
                        them in my future works, and see my progression as a writer.

                        <br></br>
                        <br></br>

                        I am interested in many old fashion houses and more so the creatives that led them to great success. I am deeply
                        interested in exploring the likes of Martin Margiela and the underlying
                        principles that guide their work to where it is. I wish to look further into how they set their place in history while redefining
                        everything else to come. I intend to focus on the storytelling elements of collections,
                        the artfulness of which garments are presented, and the unique cuts of clothes alongside the culture impact that fashion has.

                        <br></br>
                        <br></br>

                        <i>I believe that anything I don't write down will eventually be forgotten.</i>
                    </p>

                    <p className="title">contact</p>
                    <ul>
                        <li>email: jinsungkim1210@gmail.com</li>
                        <li>Instagram: codejin_</li>
                    </ul>

                    <Footer />
                </div>

                {/* <img src="https://i.pinimg.com/originals/c5/16/d4/c516d4c3492422666be07065ab28e98d.png" alt="Martin Margiela" height="300" /> */}
            </div>
        );
    }
}