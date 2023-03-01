import css from './Modal.module.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Modal extends PureComponent {
  render() {
    const { webformatURL, largeImageURL, onClick } = this.props;
    return (
      <div className={css.Overlay} onClick={onClick}>
        <div className={css.Modal}>
          <img src={webformatURL} alt={largeImageURL} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
