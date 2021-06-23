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
    <div className={styles.resultProduct}>
      <img className={styles.resultProduct__img} src={imgSrc} />
      <div className={styles.resultProduct__card}>
        <h3 className={styles.resultProduct__title}>{title}</h3>
        <p className={styles.resultProduct__vendor}>{vendor}</p>
        <p className={styles.resultProduct__price}>{price}</p>
      </div>
    </div>
  );
}

export default ResultProducts;
