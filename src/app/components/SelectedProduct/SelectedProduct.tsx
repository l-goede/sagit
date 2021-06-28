import React from 'react';
import styles from './SelectedProduct.module.css';
import type { Product } from '../../../types';

type SelectedProductProps = {
  product: Product;
};

function SelectedProduct({ product }: SelectedProductProps): JSX.Element {
  return (
    <div className={styles.selectedProduct}>
      <img className={styles.selectedProduct__img} src={product.image} />
      <div className={styles.selectedProduct__card}>
        <p className={styles.selectedProduct__title}>{product.title}</p>
        <p className={styles.resultProduct__price}>{product.price}</p>
      </div>
    </div>
  );
}

export default SelectedProduct;
