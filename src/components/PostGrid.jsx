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

    render() {
        return (
            <div className="grid">
                <PostThumbnail 
                    title={"Virgil's SS 2022 Show"} url={ "https://swaggerareus.com/wp-content/uploads/2021/06/virgil-abloh-louis-vuitton-spring-summer-2022-23.jpeg" }/>

                <PostThumbnail
                    title={"Virgil's SS 2021 Show"} url={ "https://swaggerareus.com/wp-content/uploads/2021/06/virgil-abloh-louis-vuitton-spring-summer-2022-23.jpeg" }/>

                <PostThumbnail
                    title={"Virgil's SS 2020 Show"} url={ "https://swaggerareus.com/wp-content/uploads/2021/06/virgil-abloh-louis-vuitton-spring-summer-2022-23.jpeg" }/>
            </div>
        );
    }
}