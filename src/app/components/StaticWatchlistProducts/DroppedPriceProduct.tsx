import React from 'react';
import SavedIcon from '../Icons/SavedIcon';
import ShopLink from '../ShopLink/ShopLink';
import styles from './DroppedPriceProduct.module.css';

function DroppedPriceProduct(): JSX.Element {
  return (
    <article className={styles.droppedPriceProduct}>
      <img
        className={styles.droppedPriceProduct__img}
        src="https://cdn.idealo.com/folder/Product/6837/6/6837655/s1_produktbild_max/apple-airpods-pro.jpg"
      />
      <div className={styles.droppedPriceProduct__text}>
        <p className={styles.droppedPriceProduct__title}>Apple AirPods Pro</p>
        <p className={styles.droppedPriceProduct__description}>
          Noise-Cancelling-Kopfhörer im Ohr sitzend kabellos Apple Siri
          Bluetooth 5.0 5 h Betriebszeit
        </p>
        <p className={styles.droppedPriceProduct__price}>ab 154,99 €</p>
        <p className={styles.droppedPriceProduct__targetPrice}>
          Wunschpreis: 160 €
        </p>
        <button className={styles.droppedPriceProduct__icon}>
          <SavedIcon />
        </button>
        <button className={styles.droppedPriceProduct__shoplink}>
          <ShopLink />
        </button>
      </div>
    </article>
  );
}
export default DroppedPriceProduct;
