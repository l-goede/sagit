import React from 'react';
import SavedIcon from '../Icons/SavedIcon';
import styles from './StaticWatchlistProduct.module.css';

function StaticWatchlistProduct(): JSX.Element {
  return (
    <div className={styles.staticWatchlistProduct}>
      <img
        className={styles.staticWatchlistProduct__img}
        src="https://cdn.idealo.com/folder/Product/6837/6/6837655/s1_produktbild_max/apple-airpods-pro.jpg"
      />
      <div className={styles.staticWatchlistProduct__card}>
        <div className={styles.staticWatchlistProduct__titleWrapper}>
          <p className={styles.staticWatchlistProduct__title}>
            Apple AirPods Pro
          </p>
          <button className={styles.staticWatchlistProduct__icon}>
            <SavedIcon />
          </button>
        </div>
        <p className={styles.staticWatchlistProduct__description}>
          Noise-Cancelling-Kopfhörer im Ohr sitzend kabellos Apple Siri
          Bluetooth 5.0 5 h Betriebszeit
        </p>
        <p className={styles.staticWatchlistProduct__price}>
          Aktueller Preis: ab 120 €
        </p>
        <p className={styles.staticWatchlistProduct__targetPrice}>
          Wunschpreis: 127 €
        </p>
      </div>
    </div>
  );
}
export default StaticWatchlistProduct;
