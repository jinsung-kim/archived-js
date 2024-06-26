import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { useParams } from 'react-router-dom';

export default function PostPage() {
  const { id } = useParams();
  const [content, updateContent] = useState();

  useEffect(() => {
    fetch(
      `https://us-central1-jinkim-backend.cloudfunctions.net/app/post?id=${id}&postType=thoughts`,
    )
      .then(res => res.json())
      .then(function(postResults) {
        updateContent(postResults['post_info']);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Post content={content} />
      <Footer />
    </div>
  );
}
