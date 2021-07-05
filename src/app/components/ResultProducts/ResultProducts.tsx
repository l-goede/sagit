import React from 'react';
import { ResultProduct } from '../../types';
import SaveIcon from '../Icons/SaveIcon';
import styles from './ResultProducts.module.css';

function ResultProducts({ product, onClick }: ResultProduct): JSX.Element {
  return (
    <article className={styles.resultProduct} onClick={onClick}>
      <div className={styles.resultProduct__wrapper}>
        <img className={styles.resultProduct__img} src={product.image} />
        <div className={styles.resultProduct__text}>
          <p className={styles.resultProduct__title}>{product.title}</p>
          <p className={styles.resultProduct__description}>
            {product.description}
          </p>
          <p className={styles.resultProduct__price}>{product.price}</p>

          <button className={styles.resultProduct__icon}>
            <SaveIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ResultProducts;
