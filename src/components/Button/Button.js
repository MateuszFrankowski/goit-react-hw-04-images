import css from './Button.module.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
export class Button extends PureComponent {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" className={css.Button} onClick={onClick}>
        Load More
      </button>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
