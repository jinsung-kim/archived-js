import React, { useState, useEffect } from "react";
import "../styles/PostThumbnail.css";

import { Link } from "react-router-dom";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function PostThumbnail({ title, url, id }) {
  const { width } = useWindowDimensions();

  // Determines how to size the images
  const imageSize = () => {
    var resWidth = 0;
    if (width < 600) {
      resWidth = width / 1.25;
    } else if (width < 1000) {
      resWidth = width / 4;
    } else {
      resWidth = width / 5;
    }
    return resWidth;
  };

  return (
    <Link to={`post/${id}`} style={{ textDecoration: "none" }}>
      <div className='post-box'>
        <img
          src={url}
          alt='---'
          style={{
            width: imageSize(),
            height: imageSize() * 1.3,
            objectFit: "cover",
          }}
        />
        <h4 className='post-title' style={{ width: imageSize() }}>
          {title}
        </h4>
      </div>
    </Link>
  );
}
