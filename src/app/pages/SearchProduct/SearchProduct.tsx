import React from 'react';
import Logo from '../../components/Icons/Logo';
import SearchField from '../../components/SearchField/SearchField';
import ResultProducts from '../../components/ResultProducts/ResultProducts';
import Footer from '../../components/Footer/Footer';
import styles from './Searchproduct.module.css';

function SearchProduct(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo />
        <SearchField
          label="Dein Wunschprodukt"
          value=""
          placeholder="Ich suche..."
          onChange={console.log}
        />
      </header>
      <main className={styles.main}>
        <ResultProducts
          imgSrc="https://appletoolbox.com/wp-content/uploads/2019/10/Airpods-pro-3.jpg"
          title="Apple Airpods 2. Generation"
          vendor="ebay"
          price="ab 148 €"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SearchProduct;
