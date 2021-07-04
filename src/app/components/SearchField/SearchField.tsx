import React from 'react';
import styles from './SearchField.module.css';
import { LabeledInput } from '../../../types';

function SearchField({
  label,
  value,
  placeholder,
  onChange,
}: LabeledInput): JSX.Element {
  return (
    <div className={styles.container}>
      <label>
        <div className={styles.container__label}>{label}</div>
        <input
          className={styles.container__input}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    </div>
  );
}

export default SearchField;
