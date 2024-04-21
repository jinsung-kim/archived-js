import React from 'react';
import { formatMd } from '../helpers/formatter';

import '../styles/Post.css';

export default function Post(props) {
  if (props.content !== undefined) {
    return (
      <div className="post-container">
        <div className="header">
          <h3 className="title-text">{props.content[0]['title']}</h3>
          <p className="date-text">Created on: {props.content[0]['date']}</p>
        </div>
        {formatMd(props.content)}
      </div>
    );
  } else {
    return (
      <div className="post-container">
        <p className="loading">Loading...</p>
      </div>
    );
  }
}
