import React from 'react';
import styles from './SearchField.module.css';

type InputProps = {
  placeholder: string;
  headline: string;
};

function SearchField({ placeholder, headline }: InputProps): JSX.Element {
  return (
    <div>
      <p className={styles.headline}>{headline}</p>
      <label className={styles.label}>
        <input
          className={styles.label__input}
          placeholder={placeholder}
        ></input>
      </label>
    </div>
  );
}

export default SearchField;
