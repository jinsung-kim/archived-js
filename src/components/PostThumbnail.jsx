import React from 'react';
import '../styles/PostThumbnail.css';
import { useWindowDimensions } from '../helpers/ScreenSize';

import { Link } from 'react-router-dom';

export default function PostThumbnail({ title, url, id }) {
  const { width } = useWindowDimensions();

  // Determines how to size the images
  const imageSize = () => {
    var resWidth = 0;
    if (width < 600) {
      resWidth = width / 1.25;
    } else if (width < 1000) {
      resWidth = width / 3.25;
    } else {
      resWidth = width / 4.25;
    }
    return resWidth;
  };

  return (
    <Link to={`post/${id}`} style={{ textDecoration: 'none' }}>
      <div className="post-box">
        <img
          src={url}
          alt="---"
          style={{
            width: imageSize(),
            height: imageSize() * 1.3,
            objectFit: 'cover',
          }}
        />
        <h4 className="post-title" style={{ width: imageSize() }}>
          {title}
        </h4>
      </div>
    </Link>
  );
}
