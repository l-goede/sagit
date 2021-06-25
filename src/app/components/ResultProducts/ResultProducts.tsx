import React from 'react';
import { Product } from '../../../types';
import styles from './ResultProducts.module.css';

type ProductProps = {
  product: Product;
};

function ResultProducts({ product }: ProductProps): JSX.Element {
  return (
    <div className={styles.resultProduct}>
      <img className={styles.resultProduct__img} src={product.image} />
      <div className={styles.resultProduct__card}>
        <p className={styles.resultProduct__title}>{product.title}</p>
        <p className={styles.resultProduct__vendor}>{product.vendor}</p>
        <p className={styles.resultProduct__price}>{product.price}</p>
      </div>
    </div>
  );
}

export default ResultProducts;
