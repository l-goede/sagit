import React, { useState } from 'react';
import SearchField from '../../components/SearchField/SearchField';
import ResultProducts from '../../components/ResultProducts/ResultProducts';
import Footer from '../../components/Footer/Footer';
import styles from './SearchProduct.module.css';
import useFetch from '../../components/hooks/useFetch';
import type { Product } from '../../../types';
import PriceInputField from '../../components/PriceInputField/PriceInputField';
import CloseModalIcon from '../../components/Icons/CloseModalIcon';
import Logo from '../../components/Icons/Logo';

async function postTargetPrice(product: Product, targetPrice: number | '') {
  const response = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...product,
      targetPrice,
    }),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
}

function SearchProduct(): JSX.Element {
  const [productName, setProductName] = useState<string>('');
  const products: Product[] = useFetch(`/api/search?product=${productName}`);
  const [targetPrice, setTargetPrice] = useState<number | ''>('');
  const [targetProduct, setTargetProduct] = useState<Product | null>(null);

  async function handleSaveTargetPrice() {
    if (targetProduct) {
      await postTargetPrice(targetProduct, targetPrice);
      setTargetProduct(null);
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <Logo />
        </div>
        <SearchField
          label="Dein Wunschprodukt"
          value={productName}
          placeholder="Ich suche..."
          onChange={setProductName}
        />
      </header>

      <main className={styles.main}>
        {targetProduct && (
          <div className={styles.modal}>
            <div className={styles.modal__body}>
              <button
                className={styles.modal__closeModal}
                onClick={() => setTargetProduct(null)}
              >
                <CloseModalIcon />
              </button>
              <div className={styles.modal__text}>
                <p>ZU TEUER ?</p>
                <p>
                  Trage hier deinen Wunschpreis ein und du wirst benachrichtigt,
                  sobald das Produkt zu diesem Preis verfügbar ist!
                </p>
              </div>

              <PriceInputField
                label="Dein Wunschpreis"
                value={targetPrice}
                onChange={setTargetPrice}
                placeholder="Preis in €"
              />
              <div className={styles.modal__wrapperButton}>
                <button
                  className={styles.modal__saveButton}
                  onClick={handleSaveTargetPrice}
                >
                  Speichern
                </button>
              </div>
            </div>
          </div>
        )}
        <div className={styles.cards}>
          {products?.map((product: Product) => (
            <ResultProducts
              key={product.id}
              product={product}
              onClick={() => setTargetProduct(product)}
            />
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default SearchProduct;
