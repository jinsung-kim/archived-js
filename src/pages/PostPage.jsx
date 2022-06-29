import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
// import ErrorMessage from "../components/ErrorMessage";

import { useParams } from "react-router-dom";

import "../styles/PostPage.css";

export default function PostPage() {

    const { id } = useParams();
    const [ content, updateContent ] = useState();

    // Fetch from API
    useEffect(() => {
        fetch("https://www.jinkim.io/post?id=" + id)
        .then((res) => res.json())
        .then(function(postResults) {
            updateContent(postResults["post_info"]);
        });
    }, []);
    
    // if (errorMessage) {
    //     return (
    //         <div>
    //             <Navbar />
    //             <ErrorMessage />
    //         </div>
    //     );
    // }
    return (
        <div>
            <Navbar />
            <Post content={content}/>
        </div>
    );
}