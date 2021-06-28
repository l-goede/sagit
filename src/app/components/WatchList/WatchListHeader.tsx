import React from 'react';
import BackButton from '../BackButton/BackButton';
import styles from './WatchListHeader.module.css';

type WatchListHeaderProps = {
  headline: string;
};

function WatchListHeader({ headline }: WatchListHeaderProps): JSX.Element {
  return (
    <div className={styles.container}>
      <button className={styles.backButton}>
        <BackButton />
      </button>
      <p className={styles.headline}>{headline}</p>
    </div>
  );
}

export default WatchListHeader;
