import React from 'react';
import { Product } from '../../../types';
import SavedIcon from '../Icons/SavedIcon';
import styles from './WatchlistProduct.module.css';

type ProductProps = {
  product: Product;
  targetPrice: number;
  onClick?: () => void;
};

function WatchlistProduct({
  product,
  onClick,
  targetPrice,
}: ProductProps): JSX.Element {
  return (
    <div className={styles.watchlistProduct} onClick={onClick}>
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
        {targetPrice && (
          <p className={styles.watchlistProduct__targetPrice}>
            Wunschpreis: {targetPrice} €
          </p>
        )}
      </div>
    </div>
  );
}
export default WatchlistProduct;
