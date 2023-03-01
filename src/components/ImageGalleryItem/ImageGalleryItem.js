import css from './ImageGalleryItem.module.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
export class ImageGalleryItem extends PureComponent {
  render() {
    const { id, webformatURL, largeImageURL, onClick } = this.props;
    return (
      <li key={id} className={css['ImageGalleryItem']} onClick={onClick}>
        <img
          className={css['ImageGalleryItem-image']}
          src={webformatURL}
          alt={largeImageURL}
          id={id}
        />
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
