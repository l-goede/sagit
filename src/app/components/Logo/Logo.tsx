import React from 'react';
import LogoIcon from '../Icons/LogoIcon';
import styles from './Logo.module.css';
import LogoLink from '../LogoLink/LogoLink';

function Logo(): JSX.Element {
  return (
    <div className={styles.logo}>
      <LogoLink icon={<LogoIcon />} link="/search" />
    </div>
  );
}

export default Logo;
