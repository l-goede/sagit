import React from 'react';
import styles from './SavePricButton.module.css';
import { Product } from '../../../types';

type SavePriceButtonProps = {
  product: Product;
  onClick?: () => void;
};

// function SavePriceButton({
//   children,
//   onClick,
// }: SavePriceButtonProps): JSX.Element {
//   return <button className={styles.saveButton} onClick>{children}</button>;
// }

export default SavePriceButton;

function SavePriceButton({
  product,
  onClick,
}: SavePriceButtonProps): JSX.Element {
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
    <div className={styles.container} onClick={onClick}>
      <button
        className={styles.saveButton}
        onClick={() => postProduct()}
      ></button>
    </div>
  );
}
