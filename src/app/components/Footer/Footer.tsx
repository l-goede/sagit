import React from 'react';
import SearchIcon from '../Icons/SearchIcon';
import NotificationIcon from '../Icons/NotificationIcon';
import WatchListIcon from '../Icons/WatchListIcon';
import NavBarLink from '../NavBarLink/NavBarLink';
import styles from './Footer.module.css';

function Footer(): JSX.Element {
  return (
    <div className={styles.navBar}>
      <NavBarLink icon={<SearchIcon />} link="/" />
      <NavBarLink icon={<NotificationIcon />} link="#" />
      <NavBarLink icon={<WatchListIcon />} link="#" />
    </div>
  );
}

export default Footer;
