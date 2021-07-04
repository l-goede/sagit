import React from 'react';
import { TargetPrice } from '../../../types';
import styles from './TargetPrice.module.css';

function TargetPrice({ description, targetPrice }: TargetPrice): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        {description}
        {targetPrice}
      </p>
    </div>
  );
}

export default TargetPrice;
