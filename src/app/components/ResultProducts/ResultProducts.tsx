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
    <article className={styles.resultProduct} onClick={onClick}>
      <div className={styles.resultProduct__imgWrapper}>
        <img className={styles.resultProduct__img} src={product.image} />
      </div>
      <div className={styles.resultProduct__text}>
        <p className={styles.resultProduct__title}>{product.title}</p>

        <span className={styles.resultProduct__description}>
          {product.description}
        </span>
        <p className={styles.resultProduct__price}>{product.price}</p>
        {product.targetPrice && (
          <p className={styles.resultProduct__price}>
            Wunschpreis: {product.targetPrice} €
          </p>
        )}
      </div>
      <button className={styles.resultProduct__icon}>
        <SaveIcon />
      </button>
    </article>
  );
}

export default ResultProducts;
