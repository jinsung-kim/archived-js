import { useWindowDimensions } from '../helpers/ScreenSize';
import React from 'react';

export function formatMd(post) {
  if (!post) {
    return [];
  }
  const { width } = useWindowDimensions();

  return post.map(section => {
    if (section['mode'] === 'text') {
      return (
        <p className="text" key={section['content']}>
          {section['content']}
        </p>
      );
    } else if (section['mode'] === 'quote') {
      return (
        <p className="quote" key={section['content']}>
          {section['content']}
        </p>
      );
    } else if (section['mode'] === 'bold') {
      return (
        <p className="text-bolded" key={section['content']}>
          {section['content']}
        </p>
      );
    } else if (section['mode'] === 'image') {
      if (width > 500) {
        return (
          <div className="image-link" key={section['content']}>
            <img src={section['content']} width="400px" alt="---" />
            <p className="caption">{section['caption']}</p>
          </div>
        );
      } else {
        return (
          <div className="image-link" key={section['content']}>
            <img src={section['content']} width="70%" alt="---" />
            <p className="caption">{section['caption']}</p>
          </div>
        );
      }
    } else if (section['mode'] === 'youtube') {
      return (
        <div className="youtube-link" key={section['content']}>
          <iframe
            max-width="560px"
            width="80%"
            height="500"
            src={section['content']}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
          <p className="caption">{section['caption']}</p>
        </div>
      );
    }
  });
}
