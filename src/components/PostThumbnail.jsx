import React, { Component } from "react";
import "../styles/PostThumbnail.css";

export default class PostThumbnail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            thumbnail: props.url,
            maxWidth: props.maxWidth,
            maxHeight: props.maxHeight
        };
    }

    render() {
        return (
            <div className="post-box">
                <img src={ this.state.thumbnail } alt="" 
                style={{maxWidth: this.state.maxWidth, maxHeight: this.state.maxHeight}}
                />
                <h3>{ this.state.title }</h3>
            </div>
        );
    }
}