import React from 'react';
import styles from './SearchField.module.css';

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

function SearchField({
  value,
  placeholder,
  onChange,
}: InputProps): JSX.Element {
  return (
    <label className={styles.label}>
      <input
        className={styles.label__input}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default SearchField;
