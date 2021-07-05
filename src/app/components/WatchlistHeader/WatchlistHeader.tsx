import React from 'react';
import { WatchlistHeaderProps } from '../../types';
import BackButton from '../BackButton/BackButton';
import styles from './WatchlistHeader.module.css';

function WatchlistHeader({ headline }: WatchlistHeaderProps): JSX.Element {
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
