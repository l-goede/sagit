import React from 'react';
import styles from './WatchList.module.css';

type WatchListHeaderProps = {
  headline: string;
};

function WatchListHeader({ headline }: WatchListHeaderProps): JSX.Element {
  return (
    <div className={styles.container}>
      <button></button>
      <h2 className={styles.headline}>{headline}</h2>
    </div>
  );
}

export default WatchListHeader;
