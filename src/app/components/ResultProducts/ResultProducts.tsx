import React from 'react';
import { Product } from '../../../types';
import SaveIcon from '../Icons/SaveIcon';
import styles from './ResultProducts.module.css';

type ProductProps = {
  product: Product;
  onClick?: () => void;
};

function ResultProducts({ product, onClick }: ProductProps): JSX.Element {
  async function postProduct() {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...product,
        targetPrice: '200 €',
      }),
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw errorMessage;
    }
  }
  return (
    <div className={styles.resultProduct} onClick={onClick}>
      <img className={styles.resultProduct__img} src={product.image} />

      <div className={styles.resultProduct__card}>
        <div className={styles.resultProduct__titleWrapper}>
          <p className={styles.resultProduct__title}>{product.title}</p>
          <button
            className={styles.resultProduct__icon}
            onClick={() => postProduct()}
          >
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
