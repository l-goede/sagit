import React from 'react';
import { Product } from '../../../types';
import TargetPrice from '../TargetPrice/TargetPrice';
import styles from './SavedProducts.module.css';

type ProductProps = {
  icon: JSX.Element;
  product: Product;
  targetPrice: string;
};

function savedProducts({ icon, product }: ProductProps): JSX.Element {
  return (
    <div className={styles.savedProduct}>
      <img className={styles.savedProduct__img} src={product.image} />
      <div className={styles.savedProduct__card}>
        <p className={styles.savedProduct__title}>{product.title}</p>
        <button className={styles.savedProduct__button}>{icon}</button>
        <p className={styles.savedProduct__offers}>{product.offers}</p>
        <p className={styles.savedProduct__price}>{product.price}</p>
        <TargetPrice description="Dein Wunschpreis: " targetPrice="120 €" />
      </div>
    </div>
  );
}

export default savedProducts;
