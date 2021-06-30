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
              <div className={styles.modal__text}>
                <p>Zu teuer? </p>
                <p>
                  Dann trage hier deinen Wunschpreis ein und du wirst
                  benachrichtigt, sobald das Produkt zu diesem Preis verfügbar
                  ist!
                </p>
              </div>

              <PriceInputField
                value=""
                label="Dein Wunschpreis"
                placeholder="Preis in €"
              />
              <div className={styles.modal__wrapperButton}>
                <button
                  className={styles.modal__saveButton}
                  onClick={() => {
                    alert('Dein Wunschpreis wurde erfolgreich gespeichert!');
                    setShowPriceInput(null);
                  }}
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
