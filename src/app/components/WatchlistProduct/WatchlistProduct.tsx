import React from 'react';
import { Product } from '../../../types';
import SavedIcon from '../Icons/SaveIcon';
import styles from './ResultProducts.module.css';

function WatchlistProduct({ ...product }: Product): JSX.Element {
  return (
    <div className={styles.watchlistProduct}>
      <img className={styles.watchlistProduct__img} src={product.image} />
      <div className={styles.watchlistProduct__card}>
        <div className={styles.watchlistProduct__titleWrapper}>
          <p className={styles.watchlistProduct__title}>{product.title}</p>
          <button className={styles.watchlistProduct__icon}>
            <SavedIcon />
          </button>
        </div>
        <p className={styles.watchlistProduct__description}>
          {product.description}
        </p>
        <p className={styles.watchlistProduct__price}>
          Aktueller Preis: {product.price}
        </p>
        {product.targetPrice && (
          <p className={styles.watchlistProduct__price}>
            Wunschpreis: {product.targetPrice} €
          </p>
        )}
      </div>
    </div>
  );
}
export default WatchlistProduct;
