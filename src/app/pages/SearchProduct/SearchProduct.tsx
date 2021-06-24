import React, { useState } from 'react';
import SearchField from '../../components/SearchField/SearchField';
import ResultProducts from '../../components/ResultProducts/ResultProducts';
import Footer from '../../components/Footer/Footer';
import styles from './SearchProduct.module.css';
import useFetch from '../../components/hooks/useFetch';

function SearchProduct(): JSX.Element {
  const [products, setProducts] = useState('');
  const product = useFetch('/api/product/airpods');
  console.log(product);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SearchField
          label="Dein Wunschprodukt"
          value={products}
          placeholder="Ich suche..."
          onChange={setProducts}
        />
      </header>
      <main className={styles.main}>
        <ResultProducts
          imgSrc="https://appletoolbox.com/wp-content/uploads/2019/10/Airpods-pro-3.jpg"
          title="Apple Airpods 2. Generation"
          vendor="ebay"
          price="ab 148 €"
        />
        <div className={styles.cards}>
          <ResultProducts
            imgSrc="https://www.investireoggi.it/tech/wp-content/uploads/sites/14/2014/02/iphone4s.jpg"
            title="Apple iPhone 4"
            vendor="Amazon"
            price="ab 327 €"
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default SearchProduct;
