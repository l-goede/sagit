import React from 'react';
import styles from './ResultProducts.module.css';

type ResultProps = {
  imgSrc: string;
  title: string;
  vendor: string;
  price: string;
};

function ResultProducts({
  imgSrc,
  title,
  vendor,
  price,
}: ResultProps): JSX.Element {
  return (
    <div className={styles.resultElement}>
      <img className={styles.resultElement__img} src={imgSrc} />
      <div className={styles.resultElement__card}>
        <h3 className={styles.resultElement__title}>{title}</h3>
        <p className={styles.resultElement__vendor}>{vendor}</p>
        <p className={styles.resultElement__price}>{price}</p>
      </div>
    </div>
  );
}

export default ResultProducts;
