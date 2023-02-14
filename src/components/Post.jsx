import React, { useState, useEffect } from "react";

import "../styles/Post.css";

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

// Helper to format the data
function formatter(post) {
  var res = [];
  if (post === undefined || post === null) {
    return res;
  }
  const { width } = useWindowDimensions();

  post.forEach((section) => {
    if (section["mode"] === "text") {
      res.push(
        <p className='text' key={section["content"]}>
          {section["content"]}
        </p>
      );
    } else if (section["mode"] === "quote") {
      res.push(
        <p className='quote' key={section["content"]}>
          {section["content"]}
        </p>
      );
    } else if (section["mode"] === "bold") {
      res.push(
        <p className='text-bolded' key={section["content"]}>
          {section["content"]}
        </p>
      );
    } else if (section["mode"] === "image") {
      if (width > 500) {
        res.push(
          <div className='image-link' key={section["content"]}>
            <img src={section["content"]} width='400px' alt='---' />
            <p className='caption'>{section["caption"]}</p>
          </div>
        );
      } else {
        res.push(
          <div className='image-link' key={section["content"]}>
            <img src={section["content"]} width='70%' alt='---' />
            <p className='caption'>{section["caption"]}</p>
          </div>
        );
      }
    } else if (section["mode"] === "youtube") {
      res.push(
        <div className='youtube-link' key={section["content"]}>
          <iframe
            max-width='560px'
            width='80%'
            height='500'
            src={section["content"]}
            title='YouTube video player'
            allowFullScreen
          ></iframe>
          <p className='caption'>{section["caption"]}</p>
        </div>
      );
    }
  });

  return res;
}

export default function Post(props) {
  if (props.content !== undefined) {
    return (
      <div className='post-container'>
        <div className='header'>
          <h3 className='title-text'>{props.content[0]["title"]}</h3>
          <p className='date-text'>Created on: {props.content[0]["date"]}</p>
          {/* <div className="tags-container">
                        { props.content[0]["tags"] }
                    </div> */}
        </div>
        {formatter(props.content)}
      </div>
    );
  } else {
    return (
      <div className='post-container'>
        <p>Loading...</p>
      </div>
    );
  }
}
