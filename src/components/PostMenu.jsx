import React, { useState, useEffect } from 'react';
import PostThumbnail from './PostThumbnail';

import '../styles/PostMenu.css';

export default function PostMenu({ postType }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `https://us-central1-jinkim-backend.cloudfunctions.net/app/posts?postType=${postType}`,
    )
      .then(res => res.json())
      .then(function(postsLoaded) {
        return postsLoaded;
      })
      .then(function(res) {
        const thumbnails = res.map((post, i) => (
          <li key={post['id'] + i}>
            <PostThumbnail
              id={post['id']}
              title={post['title']}
              url={post['thumbnail']}
            />
          </li>
        ));

        setPosts(thumbnails);
      });
  }, [postType]);

  return (
    <div className="grid">
      {posts.length === 0 ? <p className="loading">Loading...</p> : posts}
    </div>
  );
}
