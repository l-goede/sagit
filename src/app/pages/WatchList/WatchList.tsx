import React from 'react';
import { WatchlistItem } from '../../../types';
import Footer from '../../components/Footer/Footer';
import useFetch from '../../components/hooks/useFetch';
import WatchListHeader from '../../components/WatchList/WatchListHeader';
import styles from '../../components/ResultProducts/ResultProducts.module.css';
import StaticWatchlistProduct from '../../components/StaticWatchlistProducts/StaticWatchlistProduct';
import DroppedPriceProduct from '../../components/StaticWatchlistProducts/DroppedPriceProduct';
import WatchlistProduct from '../../components/WatchlistProduct/WatchlistProduct';

function WatchList(): JSX.Element {
  const watchlistItems: WatchlistItem[] = useFetch('/api/products');
  console.log(watchlistItems);

  return (
    <div className={styles.container}>
      <WatchListHeader headline="Deine Merkliste" />
      <main className={styles.main}>
        <DroppedPriceProduct />
        <StaticWatchlistProduct />
        <div className={styles.cards}>
          {watchlistItems &&
            watchlistItems.map((watchlistItem: WatchlistItem) => (
              <WatchlistProduct
                key={watchlistItem.product.id}
                product={watchlistItem.product}
                targetPrice={watchlistItem.targetPrice}
              />
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
