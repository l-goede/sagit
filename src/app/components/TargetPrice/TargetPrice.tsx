import React from 'react';
import styles from './TargetPrice.module.css';

type TargetPriceProps = {
  description: string;
  targetPrice: string;
};

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
