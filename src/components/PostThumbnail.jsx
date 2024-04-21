import React from 'react';
import '../styles/PostThumbnail.css';

import { Link } from 'react-router-dom';

export default function PostThumbnail({ title, id }) {
  return (
    <Link to={`post/${id}`} style={{ textDecoration: 'none' }}>
      <div className="post-box">
        <h4 className="post-title" style={{ width: '100%' }}>
          {title}
        </h4>
      </div>
    </Link>
  );
}
