import React from 'react';
import styles from './PriceInputField.module.css';
import { PriceInputField } from '../../../types';

function PriceInputField({
  label,
  value,
  placeholder,
  onChange,
}: PriceInputField): JSX.Element {
  return (
    <div className={styles.container}>
      <label>
        <div className={styles.container__label}>{label}</div>
        <input
          className={styles.container__input}
          value={value}
          type="number"
          placeholder={placeholder}
          onChange={(event) => onChange(+event.target.value)}
        />
      </label>
    </div>
  );
}

export default PriceInputField;
