import React from 'react';
import SearchIcon from '../Icons/SearchIcon';
import NotificationIcon from '../Icons/NotificationIcon';
import WatchListIcon from '../Icons/WatchListIcon';
import NavBarLink from '../NavBarLink/NavBarLink';
import styles from './Footer.module.css';

function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <NavBarLink icon={<SearchIcon />} link="/search" />
      <NavBarLink icon={<NotificationIcon />} link="#" />
      <NavBarLink icon={<WatchListIcon />} link="/watchlist" />
    </div>
  );
}

export default Footer;
