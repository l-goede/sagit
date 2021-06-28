import React from 'react';
import SavePriceIcon from '../../components/Icons/SavePriceIcon';
import { Product } from '../../../types';
import styles from './Modal.module.css';
import PriceInputField from '../../components/PriceInputField/PriceInputField';

type PriceInputProps = {
  product: Product;
};

function PriceInput({ product }: PriceInputProps): JSX.Element {
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
    <div className={styles.container}>
      <div className={styles.container__input}>
        <PriceInputField
          label="Dein Wunschpreis"
          value=""
          placeholder="Preis €..."
        />
      </div>
      <button onClick={() => postProduct()}>
        <SavePriceIcon />
      </button>
    </div>
  );
}

export default PriceInput;
