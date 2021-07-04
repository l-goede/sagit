import React from 'react';
import { WatchlistHeader } from '../../../types';
import BackButton from '../BackButton/BackButton';
import styles from './WatchlistHeader.module.css';

function WatchlistHeader({ headline }: WatchlistHeader): JSX.Element {
  return (
    <div className={styles.container}>
      <button className={styles.backButton}>
        <BackButton />
      </button>
      <p className={styles.headline}>{headline}</p>
    </div>
  );
}
export default WatchlistHeader;
