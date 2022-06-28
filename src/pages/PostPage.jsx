import React, { Component } from "react";
import Post from "../components/Post";
import Navbar from "../components/Navbar";

import "../styles/PostPage.css";

export default class PostPage extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Post />
            </div>
        );
    }
}