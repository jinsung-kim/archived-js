import React, { useState, useEffect } from "react";
import PostThumbnail from "./PostThumbnail";

import "../styles/PostGrid.css";

export default function PostGrid() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://us-central1-jinkim-backend.cloudfunctions.net/app/posts")
      .then((res) => res.json())
      .then(function(postsLoaded) {
        return postsLoaded;
      })
      .then(function(res) {
        // Create component
        const thumbnails = [];
        for (var i = 0; i < res.length; i += 1) {
          const curr = res[i];
          thumbnails.push(
            <li key={curr["id"] + i}>
              <PostThumbnail
                id={curr["id"]}
                title={curr["title"]}
                url={curr["thumbnail"]}
              />
            </li>
          );
        }

        setPosts(thumbnails);
      });
  }, []);

  return <div className='grid'>{posts}</div>;
}
