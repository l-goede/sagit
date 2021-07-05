import React from 'react';
import { TargetPriceProps } from '../../types';
import styles from './TargetPrice.module.css';

function TargetPrice({
  description,
  targetPrice,
}: TargetPriceProps): JSX.Element {
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
