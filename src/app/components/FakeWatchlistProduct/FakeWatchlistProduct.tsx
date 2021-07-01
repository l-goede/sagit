import React from 'react';
import { Product } from '../../../types';
import SavedIcon from '../Icons/SavedIcon';
import styles from './FakeWatchlistProduct.module.css';

function FakeWatchlistProduct({ ...product }: Product): JSX.Element {
  return (
    <div className={styles.FakeWatchlistProduct}>
      <img className={styles.FakeWatchlistProduct__img} src={product.image} />
      <div className={styles.FakeWatchlistProduct__card}>
        <div className={styles.FakeWatchlistProduct__titleWrapper}>
          <p className={styles.FakeWatchlistProduct__title}>{product.title}</p>
          <button className={styles.FakeWatchlistProduct__icon}>
            <SavedIcon />
          </button>
        </div>
        <p className={styles.FakeWatchlistProduct__description}>
          {product.description}
        </p>
        <p className={styles.FakeWatchlistProduct__price}>
          Aktueller Preis: {product.price}
        </p>
        {product.targetPrice && (
          <p className={styles.FakeWatchlistProduct__targetPrice}>
            Wunschpreis: {product.targetPrice} €
          </p>
        )}
      </div>
    </div>
  );
}
export default FakeWatchlistProduct;
