import React from "react";

import "../styles/Post.css";

// Helper to format the data
function formatter(post) {

    var res = [];
    if (post === undefined || post === null) { return res; }

    post.forEach((section) => {
        if (section["mode"] === "text") {
            res.push(
                <p className="text">
                    {section["content"]}
                </p>
            );
        } else if (section["mode"] === "quote") {
            res.push(
                <p className="quote">
                    {section["content"]}
                </p>
            );
        } else if (section["mode"] === "bold") {
            res.push(
                <p className="text-bolded">
                    {section["content"]}
                </p>
            );
        } else if (section["mode"] === "image") {
            res.push(
                <div className="image-link">
                    <img src={section["content"]} width="80%" alt="---" />
                </div>
            );
        } else if (section["mode"] === "youtube") {
            res.push(
                <div className="youtube-link">
                    <iframe max-width="560" width="80%" height="315"
                    src={section["content"]} 
                    title="YouTube video player" frameBorder="0" 
                    allowFullScreen></iframe>
                </div>
            );
        }
    });

    return res;
}

export default function Post(props) {

    if (props.content !== undefined) {
        return (
            <div className="post-container">
                {formatter(props.content)}
            </div>
        );
    } else {
        return (
            <div className="post-container">
                <p>Loading...</p>
            </div>
        );
    }
}