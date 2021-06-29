import React, { useState } from 'react';
import SearchField from '../../components/SearchField/SearchField';
import ResultProducts from '../../components/ResultProducts/ResultProducts';
import Footer from '../../components/Footer/Footer';
import styles from './SearchProduct.module.css';
import useFetch from '../../components/hooks/useFetch';
import type { Product } from '../../../types';

function SearchProduct(): JSX.Element {
  const [showPriceInput, setShowPriceInput] = useState<Product | null>(null);
  const [productName, setProductName] = useState<string>('');
  const products: Product[] = useFetch(`/api/search?product=${productName}`);
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

      <div className={styles.modal}>
        {showPriceInput && (
          <div>
            {showPriceInput.title}{' '}
            <button onClick={() => setShowPriceInput(null)}>Close</button>
          </div>
        )}
      </div>
      <main className={styles.main}>
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
