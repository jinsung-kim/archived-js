import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import ErrorMessage from "../components/ErrorMessage";

import { useParams } from "react-router-dom";

import "../styles/PostPage.css";

export default function PostPage() {

    const { id } = useParams();
    const [ content, updateContent ] = useState();

    // Fetch from API
    useEffect(() => {
        fetch("https://us-central1-jinkim-backend.cloudfunctions.net/app/post?id=" + id)
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
            <Footer />
        </div>
    );
}