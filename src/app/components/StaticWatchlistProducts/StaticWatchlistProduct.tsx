import React from 'react';
import SavedIcon from '../Icons/SavedIcon';
import ShopLink from '../ShopLink/ShopLink';
import styles from './StaticWatchlistProduct.module.css';

function StaticWatchlistProduct(): JSX.Element {
  return (
    <article className={styles.staticWatchlistProduct}>
      <img
        className={styles.staticWatchlistProduct__img}
        src="https://cdn.idealo.com/folder/Product/6503/2/6503294/s1_produktbild_max/bang-olufsen-beoplay-e8-2-0-black.jpg"
      />
      <div className={styles.staticWatchlistProduct__text}>
        <p className={styles.staticWatchlistProduct__title}>
          Bang & Olufsen BeoPlay E8
        </p>
        <p className={styles.staticWatchlistProduct__description}>
          Bluetooth-Kopfhörer im Ohr sitzend kabellos
        </p>
        <p className={styles.staticWatchlistProduct__price}>ab 81,95 €</p>
        <p className={styles.staticWatchlistProduct__targetPrice}>
          Wunschpreis: 70 €
        </p>
        <button className={styles.staticWatchlistProduct__icon}>
          <SavedIcon />
        </button>
        <button className={styles.staticwatchlistProduct__shoplink}>
          <ShopLink />
        </button>
      </div>
    </article>
  );
}
export default StaticWatchlistProduct;
