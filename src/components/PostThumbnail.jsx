import React, { Component } from "react";
import "../styles/PostThumbnail.css";

import { Link } from "react-router-dom";

export default class PostThumbnail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            thumbnail: props.url,
            width: window.innerWidth,
            maxHeight: window.innerHeight,
            id: props.id
        };
    }

    // Window resizing methods
    handleResize = (e) => {
        this.setState({ width: window.innerWidth });
    }
      
    componentDidMount = () => {
        window.addEventListener("resize", this.handleResize);
    }
    
    componentWillUnmount = () => {
        window.addEventListener("resize", this.handleResize);
    }

    // Determines how to size the images
    imageSize = () =>  {
        var resWidth = 0;
        if (this.state.width < 600) {
            resWidth = this.state.width / 1.25;
        } else if (this.state.width < 1000) {
            resWidth = this.state.width / 3;
        } else {
            resWidth = this.state.width / 4;
        }
        return resWidth;
    }

    render() {
        return (
            <Link to={`post/${this.state.id}`}>
                <div className="post-box">
                    <img src={ this.state.thumbnail } alt="---" 
                    style={{ width: this.imageSize() }}
                    />
                    <h3 className="post-title">{ this.state.title }</h3>
                </div>
            </Link>
        );
    }
}