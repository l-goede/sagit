import React from 'react';
import styles from './SearchField.module.css';

type LabeledInputProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

function SearchField({
  label,
  value,
  placeholder,
  onChange,
}: LabeledInputProps): JSX.Element {
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
