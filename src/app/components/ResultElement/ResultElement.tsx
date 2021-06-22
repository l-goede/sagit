import React from 'react';
import styles from './ResultElement.module.css';

type ResultProps = {
  imgSrc: string;
  title: string;
  vendor: string;
  price: string;
};

function ResultElement({
  imgSrc,
  title,
  vendor,
  price,
}: ResultProps): JSX.Element {
  return (
    <div className={styles.resultElement}>
      <img className={styles.resultElement__img} src={imgSrc} />
      <h3 className={styles.resultElement__title}>{title}</h3>
      <span className={styles.resultElement__vendor}>{vendor}</span>
      <span className={styles.resultElement__price}>{price}</span>
    </div>
  );
}

export default ResultElement;
