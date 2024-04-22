import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useWindowDimensions } from '../helpers/screen';
import ImageList from '../images.txt';

import '../styles/Capsules.css';

const tags = [
  'all',
  'nature',
  'san-francisco',
  'south-korea',
  'new-york',
  'clothes',
  'material',
];

export default function Capsules() {
  const { width } = useWindowDimensions();
  const [imageDict, setImageDict] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [currentKey, setCurrentKey] = useState('all');

  useEffect(() => {
    fetch(ImageList)
      .then(r => r.text())
      .then(text => {
        const images = text.split('\n');
        const categories = {};
        var currentTag = 'all';

        tags.forEach(tag => {
          categories[tag] = [];
        });

        images.forEach(image => {
          if (tags.includes(image)) {
            currentTag = image;
          } else if (image.length > 0) {
            categories[currentTag].push(image);
          }
        });

        setImageDict(categories);
        setLoaded(true);
      });
  }, []);

  const renderImagesForTag = () => {
    if (!loaded) {
      return undefined;
    }
    return imageDict[currentKey].map(imageUrl => {
      return (
        <div style={{ padding: 10, margin: 10 }} key={imageUrl}>
          <img
            style={{
              width: width / 1.25,
              maxWidth: 250,
              margin: 'auto',
              display: 'block',
            }}
            src={imageUrl}
            alt="---"
          />
        </div>
      );
    });
  };

  const generateTags = () => {
    if (!loaded) {
      return undefined;
    }
    return tags.map(tag => {
      return (
        <p
          key={tag}
          onClick={() => setCurrentKey(tag)}
          className={`tag-label${currentKey === tag ? '-selected' : ''}`}
        >
          {formatTag(tag)}
        </p>
      );
    });
  };

  const formatTag = tag => {
    return tag.toUpperCase().replace('-', ' ');
  };

  return (
    <div className="capsule-container">
      <Navbar />
      <div className={`tags-view${width < 400 ? '-small' : '-large'}`}>
        {generateTags()}
      </div>
      <div className={`grid-view${width < 400 ? '-small' : '-large'}`}>
        {renderImagesForTag()}
      </div>
      <Footer />
    </div>
  );
}
