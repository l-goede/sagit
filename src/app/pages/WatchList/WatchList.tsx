import React from 'react';
import Footer from '../../components/Footer/Footer';
// import SavedProducts from '../../components/SavedProducts/SavedProducts';
import WatchListHeader from '../../components/WatchList/WatchList';
import styles from './WatchList.module.css';

function WatchList(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <WatchListHeader headline="Deine Merkliste" />
      </header>
      {/* //       <main className={styles.main}>
//         <div className={styles.cards}>
//           <SavedProducts key={product.id} product={product} />
//         </div>
//       </main> */}
      //{' '}
      <footer>
        // <Footer />
        //{' '}
      </footer>
      //{' '}
    </div>
  );
}

export default WatchList;
