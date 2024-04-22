import React from 'react';

export function formatMd(post, width) {
  if (!post) {
    return [];
  }

  return post.map((section, ind) => {
    const mode = section['mode'];
    const content = section['content'];
    if (mode === 'text') {
      return (
        <p className="text" key={`text-${ind}`}>
          {content}
        </p>
      );
    } else if (mode === 'quote') {
      return (
        <p className="quote" key={`quote-${ind}`}>
          {content}
        </p>
      );
    } else if (mode === 'bold') {
      return (
        <p className="text-bolded" key={`text-bolded-${ind}`}>
          {content}
        </p>
      );
    } else if (mode === 'image') {
      if (width > 500) {
        return (
          <div className="image-link" key={`image-link-${ind}`}>
            <img src={content} width="400px" alt="---" />
            <p className="caption">{section['caption']}</p>
          </div>
        );
      } else {
        return (
          <div className="image-link" key={`image-link-${ind}`}>
            <img src={content} width="70%" alt="---" />
            <p className="caption">{section['caption']}</p>
          </div>
        );
      }
    } else if (mode === 'youtube') {
      return (
        <div className="youtube-link" key={`youtube-${ind}`}>
          <iframe
            max-width="560px"
            width="80%"
            height="500"
            src={content}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
          <p className="caption">{section['caption']}</p>
        </div>
      );
    } else if (mode === 'link') {
      return (
        <a className="external-link" href={content} target="_blank">
          {section['caption']}
        </a>
      );
    } else if (mode === 'divider') {
      return <div className="divider" key={`divider-${ind}`}></div>;
    }
  });
}
