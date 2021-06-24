import React from 'react';
import LogoIcon from '../Icons/LogoIcon';
import styles from './Logo.module.css';

function Logo(): JSX.Element {
  return (
    <div className={styles.logo}>
      <LogoIcon />
    </div>
  );
}

export default Logo;
