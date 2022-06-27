import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

export default class Navbar extends Component {

    render() {
        return (
            <div className="navbar-container">
                <Link to="../">
                    <p className="nav-item">Home</p>
                </Link>
                <Link to="../about">
                    <p className="nav-item">About</p>
                </Link>
            </div>
        );
    }
}