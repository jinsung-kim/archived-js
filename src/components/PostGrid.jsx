import React, { Component } from "react";
import PostThumbnail from "./PostThumbnail";

import "../styles/PostGrid.css";

export default class PostGrid extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        const that = this;
        fetch("https://www.jinkim.io/posts")
        .then((res) => res.json())
        .then(function(postsloaded) {
            return postsloaded;
        })
        .then(function(res) {

            // Create component
            var thumbnails = [];
            for (var i = 0; i < res.length; i += 1) {
                var curr = res[i];
                thumbnails.push(<li key={ curr["id"] + i }>
                    <PostThumbnail id={ curr["id"] } title={ curr["title"] } url={ curr["thumbnail"] }/>
                </li>);
            }

            that.setState({
                posts: thumbnails
            });
        });
    }

    render() {
        return (
            <div className="grid">
                { this.state.posts }
            </div>
        );
    }
}