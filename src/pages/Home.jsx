import React, { Component } from "react";

import PostGrid from "../components/PostGrid";
import Navbar from "../components/Navbar";

export default class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <Navbar />
                <PostGrid />
            </div>
        );
    }
}