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
      <img className={styles.resultProduct__img} src={product.image} />
      <div className={styles.resultProduct__text}>
        <p className={styles.resultProduct__title}>{product.title}</p>
        <p className={styles.resultProduct__description}>
          {product.description}
        </p>
        <p className={styles.resultProduct__price}>{product.price}</p>

        <button className={styles.resultProduct__icon}>
          <SaveIcon />
        </button>
      </div>
    </article>
  );
}

export default ResultProducts;
