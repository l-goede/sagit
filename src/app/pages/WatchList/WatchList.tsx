import React from 'react';
import { Product } from '../../../types';
import Footer from '../../components/Footer/Footer';
import useFetch from '../../components/hooks/useFetch';
import WatchListHeader from '../../components/WatchList/WatchListHeader';
import styles from '../../components/ResultProducts/ResultProducts.module.css';
import StaticWatchlistProduct from '../../components/StaticWatchlistProducts/StaticWatchlistProduct';
import DroppedPriceProduct from '../../components/StaticWatchlistProducts/DroppedPriceProduct';
import WatchlistProduct from '../../components/WatchlistProduct/WatchlistProduct';

function WatchList(): JSX.Element {
  const products: Product[] = useFetch('/api/products');
  console.log(products);

  return (
    <div className={styles.container}>
      <WatchListHeader headline="Deine Merkliste" />
      <main className={styles.main}>
        <DroppedPriceProduct />
        <StaticWatchlistProduct />
        <div className={styles.cards}>
          {products &&
            products.map((product: Product) => (
              <WatchlistProduct key={product.id} product={product} />
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
