import React, { useState } from 'react';
import SearchField from '../../components/SearchField/SearchField';
import ResultProducts from '../../components/ResultProducts/ResultProducts';
import Footer from '../../components/Footer/Footer';
import styles from './SearchProduct.module.css';
import useFetch from '../../components/hooks/useFetch';
import type { Product } from '../../../types';
import PriceInputField from '../../components/PriceInputField/PriceInputField';

function SearchProduct(): JSX.Element {
  const [productName, setProductName] = useState<string>('');
  const products: Product[] = useFetch(`/api/search?product=${productName}`);
  const [showPriceInput, setShowPriceInput] = useState<Product | null>(null);

  console.log(products);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SearchField
          label="Dein Wunschprodukt"
          value={productName}
          placeholder="Ich suche..."
          onChange={setProductName}
        />
      </header>

      <main className={styles.main}>
        {showPriceInput && (
          <div className={styles.modal}>
            <div className={styles.modal__body}>
              <div className={styles.modal__productInfo}>
                {showPriceInput.image}

                {showPriceInput.title}
                {showPriceInput.price}
              </div>
              <p className={styles.modal__text}>
                Zu teuer? Dann trage hier deinen Wunschpreis ein
              </p>
              <PriceInputField
                value=""
                label="Dein Wunschpreis"
                placeholder="Preis in €"
              />
              <button
                className={styles.modal__saveButton}
                onClick={() => {
                  alert('Gespeichert');
                  setShowPriceInput(null);
                }}
              ></button>
            </div>
          </div>
        )}
        <div className={styles.cards}>
          {products?.map((product: Product) => (
            <ResultProducts
              key={product.id}
              product={product}
              onClick={() => setShowPriceInput(product)}
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
