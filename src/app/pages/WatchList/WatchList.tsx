import React from 'react';
import { Product } from '../../../types';
import Footer from '../../components/Footer/Footer';
import useFetch from '../../components/hooks/useFetch';
import ResultProducts from '../../components/ResultProducts/ResultProducts';
import WatchListHeader from '../../components/WatchList/WatchListHeader';
import styles from './WatchList.module.css';

function WatchList(): JSX.Element {
  const products: Product[] = useFetch('/api/products');
  return (
    <div className={styles.container}>
      <WatchListHeader headline="Deine Merkliste" />
      <main className={styles.main}>
        <div className={styles.cards}>
          {products &&
            products.map((product: Product) => (
              <ResultProducts key={product.id} product={product} />
            ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default WatchList;
