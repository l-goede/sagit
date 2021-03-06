import React from 'react';
import { ResultProduct } from '../../types';
import SavedIcon from '../Icons/SavedIcon';
import ShopLink from '../ShopLink/ShopLink';
import styles from './WatchlistProduct.module.css';

function WatchlistProduct({
  product,
  targetPrice,
}: ResultProduct): JSX.Element {
  return (
    <article className={styles.watchlistProduct}>
      <div className={styles.watchlistProduct__wrapper}>
        <img className={styles.watchlistProduct__img} src={product.image} />
        <div className={styles.watchlistProduct__text}>
          <p className={styles.watchlistProduct__title}>{product.title}</p>
          <p className={styles.watchlistProduct__description}>
            {product.description}
          </p>
          <p className={styles.watchlistProduct__price}>{product.price}</p>
          {targetPrice && (
            <p className={styles.watchlistProduct__targetPrice}>
              Wunschpreis: {targetPrice} €
            </p>
          )}
          <button className={styles.watchlistProduct__icon}>
            <SavedIcon />
          </button>
          <button className={styles.watchlistProduct__shoplink}>
            <ShopLink />
          </button>
        </div>
      </div>
    </article>
  );
}
export default WatchlistProduct;
