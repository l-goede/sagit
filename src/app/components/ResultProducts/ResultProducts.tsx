import React from 'react';
import { Product } from '../../../types';
import SaveIcon from '../Icons/SaveIcon';
import styles from './ResultProducts.module.css';

type ProductProps = {
  product: Product;
  onClick?: () => void;
};

function ResultProducts({ product, onClick }: ProductProps): JSX.Element {
  return (
    <div className={styles.resultProduct} onClick={onClick}>
      <img className={styles.resultProduct__img} src={product.image} />
      <div className={styles.resultProduct__card}>
        <div className={styles.resultProduct__titleWrapper}>
          <p className={styles.resultProduct__title}>{product.title}</p>
          <button className={styles.resultProduct__icon}>
            <SaveIcon />
          </button>
        </div>
        <p className={styles.resultProduct__description}>
          {product.description}
        </p>
        <p className={styles.resultProduct__price}>{product.price}</p>
        {product.targetPrice && (
          <p className={styles.resultProduct__price}>
            Wunschpreis: {product.targetPrice}
          </p>
        )}
      </div>
    </div>
  );
}

export default ResultProducts;
