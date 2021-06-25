import React from 'react';
import { Product } from '../../../types';
import NotificationIcon from '../Icons/NotificationIcon';
import styles from './SavedProducts.module.css';

type ProductProps = {
  icon: JSX.Element;
  product: Product;
};

function savedProducts({ icon, product }: ProductProps): JSX.Element {
  return (
    <div className={styles.savedProduct}>
      <img className={styles.savedProduct__img} src={product.image} />
      <div className={styles.savedProduct__card}>
        <p className={styles.savedProduct__title}>{product.title}</p>
        <button className={styles.savedProduct__button}>
          {icon}={<NotificationIcon />}
        </button>
        <p className={styles.savedProduct__vendor}>{product.offers}</p>
        <p className={styles.savedProduct__price}>{product.price}</p>
        <p className={styles.savedProduct__targetPrice}>
          {product.targetPrice}
        </p>
      </div>
    </div>
  );
}

export default savedProducts;
