import React from 'react';
import SavedIcon from '../Icons/SavedIcon';
import styles from './StaticWatchlistProduct.module.css';

function FakeWatchlistProduct(): JSX.Element {
  return (
    <div className={styles.fakeWatchlistProduct}>
      <img
        className={styles.fakeWatchlistProduct__img}
        src="https://cdn.idealo.com/folder/Product/6837/6/6837655/s1_produktbild_max/apple-airpods-pro.jpg"
      />
      <div className={styles.fakeWatchlistProduct__card}>
        <div className={styles.fakeWatchlistProduct__titleWrapper}>
          <p className={styles.fakeWatchlistProduct__title}>
            Apple AirPods Pro
          </p>
          <button className={styles.fakeWatchlistProduct__icon}>
            <SavedIcon />
          </button>
        </div>
        <p className={styles.fakeWatchlistProduct__description}>
          Noise-Cancelling-Kopfhörer im Ohr sitzend kabellos Apple Siri
          Bluetooth 5.0 5 h Betriebszeit
        </p>
        <p className={styles.fakeWatchlistProduct__price}>
          Aktueller Preis: ab 120 €
        </p>
        <p className={styles.fakeWatchlistProduct__targetPrice}>
          Wunschpreis: 127 €
        </p>
      </div>
    </div>
  );
}
export default FakeWatchlistProduct;
