import React, { Component } from "react";
import PostThumbnail from "./PostThumbnail";

import "../styles/PostGrid.css";

export default class PostGrid extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {id: "virgils-impact", title: "Virgil Abloh 2022 SS", url: "https://swaggerareus.com/wp-content/uploads/2021/06/virgil-abloh-louis-vuitton-spring-summer-2022-23.jpeg"},
                {id: "virgils-impact", title: "Virgil Abloh 2021 AW", url: "https://swaggerareus.com/wp-content/uploads/2021/06/virgil-abloh-louis-vuitton-spring-summer-2022-23.jpeg"},
                {id: "virgils-impact", title: "Virgil Abloh 2021 SS", url: "https://swaggerareus.com/wp-content/uploads/2021/06/virgil-abloh-louis-vuitton-spring-summer-2022-23.jpeg"}
            ],
        }
    }

    render() {
        return (
            <div className="grid">
                {this.state.posts.map(({ id, title, url }) => (
                    <li key={ id }>
                        <PostThumbnail id={ id } title={ title } url={ url }/>
                    </li>
                ))}
            </div>
        );
    }
}