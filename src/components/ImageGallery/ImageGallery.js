import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { useEffect } from 'react';
export const ImageGallery = ({ images, onClick }) => {
  const scrollToBottom = () => {
    window.scrollBy({
      top: 600,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [images]);

  return (
    <div>
      <ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
