import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const searchInputId = nanoid();
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
  };
  const handleChange = evt => {
    const { value, name } = evt.target;
    console.log(query);
    if (name === 'query') {
      setQuery(value);
    }
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css['button-label']}>Search</span>
        </button>
        <input
          onChange={handleChange}
          key={searchInputId}
          className={css.input}
          value={query}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
