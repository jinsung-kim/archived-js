import React, { Component } from "react";
import Navbar from "../components/Navbar";

import "../styles/About.css";

export default class About extends Component {

    constructor(props) {
        super(props);

        // For effect on hover
        this.state = {

        };
    }

    render() {
        return (
            <div className="about-container">
                <Navbar />
                
                <div className="text-box">
                    <p className="title">archived.js</p>
                    <p className="sub">
                        archived.js is a creative project that I have envisioned with the intent to document my thinking process and
                        interaction with art. "archived" in this case refers to my vast collection of writing.
                        The "js" in the second part refers to the initials of my name (진성 or Jin Sung) while also referencing the framework 
                        this entire project (frontend and backend) was created in.
                        You can see how it was designed and created <a href="https://github.com/jinsung-kim/archived-js">here</a>. 
                        
                        <br></br>
                        <br></br>

                        <i>Why does it need to exist?</i> This is the first question I always think of after I initiate a project.
                        I have a page dedicated to writing about books that I have read <a href="https://jinkim.io/blog">here</a> - but I 
                        found it rather one dimensional, and have been wanting to expand into other realms of interests that I have. I hope to
                        create clothes one day - and this page will serve as a great reference point if that day ever comes.

                        <br></br>
                        <br></br>

                        <i>The overarching goal of this is to leave my digital footprint behind - 
                            and to articulate my ideas in a way that exists forever.</i>
                    </p>

                    <p className="title">contact</p>
                    <ul>
                        <li>email: jinsungkim1210@gmail.com</li>
                        <li>Instagram: codejin_</li>
                    </ul>
                </div>

                {/* <img src="https://i.pinimg.com/originals/c5/16/d4/c516d4c3492422666be07065ab28e98d.png" alt="Martin Margiela" height="300" /> */}
            </div>
        );
    }
}