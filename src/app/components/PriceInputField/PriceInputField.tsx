import React from 'react';
import styles from './PriceInputField.module.css';

type PriceInputProps = {
  label: string;
  value: string;
  placeholder: string;
};

function PriceInputField({
  label,
  value,
  placeholder,
}: PriceInputProps): JSX.Element {
  return (
    <div className={styles.container}>
      <label>
        <div className={styles.container__label}>{label}</div>
        <input
          className={styles.container__input}
          value={value}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}

export default PriceInputField;
