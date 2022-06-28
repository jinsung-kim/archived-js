import React from "react";
import { useParams } from "react-router-dom";

export default function Post() {

    const { id } = useParams();

    //  Fetch from API

    return (
        <div className="post-container">
            <p>This is a post with the id: { id }</p>
        </div>
    );
}