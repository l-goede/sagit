import React from 'react';
import { WatchlistItem } from '../../../types';
import Footer from '../../components/Footer/Footer';
import useFetch from '../../components/hooks/useFetch';
import WatchlistHeader from '../../components/WatchlistHeader/WatchlistHeader';
import styles from './Watchlist.module.css';
import DroppedPriceProduct from '../../components/StaticWatchlistProducts/DroppedPriceProduct';
import WatchlistProduct from '../../components/WatchlistProduct/WatchlistProduct';

function Watchlist(): JSX.Element {
  const watchlistItems: WatchlistItem[] = useFetch('/api/products');
  console.log(watchlistItems);

  return (
    <div className={styles.container}>
      <WatchlistHeader headline="Deine Merkliste" />
      <main className={styles.main}>
        <DroppedPriceProduct />
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

export default Watchlist;
