import React from 'react';
import { WatchlistItem } from '../../../types';
import Footer from '../../components/Footer/Footer';
import useFetch from '../../components/hooks/useFetch';
import WatchlistHeader from '../../components/WatchlistHeader/WatchlistHeader';
import styles from './Watchlist.module.css';
import DroppedPriceProduct from '../../components/StaticWatchlistProducts/DroppedPriceProduct';
import WatchlistProduct from '../../components/WatchlistProduct/WatchlistProduct';
import StaticWatchlistProduct from '../../components/StaticWatchlistProducts/StaticWatchlistProduct';
import Logo from '../../components/Icons/Logo';

function Watchlist(): JSX.Element {
  const watchlistItems: WatchlistItem[] = useFetch('/api/products');
  console.log(watchlistItems);

  return (
    <div className={styles.container}>
      <div className={styles.watchlistProduct__logo}>
        <Logo />
      </div>
      <div className={styles.watchlistProduct__header}>
        <WatchlistHeader headline="Deine Merkliste" />
      </div>
      <main className={styles.main}>
        <div className={styles.staticProducts}>
          <DroppedPriceProduct />
          <StaticWatchlistProduct />
        </div>

        <div className={styles.dynamicProducts}>
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
