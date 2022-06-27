import React, { Component } from "react";

import Navbar from "../components/Navbar";

export default class About extends Component {

    render() {
        return (
            <div className="about-container">
                <Navbar />
                <p>This is about me.</p>
            </div>
        );
    }
}