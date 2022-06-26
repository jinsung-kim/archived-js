import React, { Component } from "react";
import PostThumbnail from "./PostThumbnail";

import "../styles/PostGrid.css";

export default class PostGrid extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            width: window.innerWidth
        }
    }

    // Window resizing methods
    handleResize = (e) => {
        this.setState({ width: window.innerWidth });
    }
      
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
      
    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {
        return (
            <div className="grid">
                <PostThumbnail maxWidth={ this.state.width / 4 } 
                    title={"Virgil's SS 2022 Show"} url={ "https://swaggerareus.com/wp-content/uploads/2021/06/virgil-abloh-louis-vuitton-spring-summer-2022-23.jpeg" }/>

                <PostThumbnail maxWidth={ this.state.width / 4 } 
                    title={"Virgil's SS 2021 Show"} url={ "https://swaggerareus.com/wp-content/uploads/2021/06/virgil-abloh-louis-vuitton-spring-summer-2022-23.jpeg" }/>

                <PostThumbnail maxWidth={ this.state.width / 4 } 
                    title={"Virgil's SS 2020 Show"} url={ "https://swaggerareus.com/wp-content/uploads/2021/06/virgil-abloh-louis-vuitton-spring-summer-2022-23.jpeg" }/>
            </div>
        );
    }
}