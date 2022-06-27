import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function Post() {

    const { id } = useParams();

    return (
            <div className="post-container">
                <Navbar />
                <p>This is a post with the id: { id }</p>
            </div>
        );
}