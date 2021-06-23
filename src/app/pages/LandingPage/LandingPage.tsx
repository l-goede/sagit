import React from 'react';
import LogoIcon from '../../components/Icons/LogoIcon';
import styles from './LandingPage.module.css';

function LandingPage(): JSX.Element {
  return (
    <div className={styles.landingPage}>
      <LogoIcon />
    </div>
  );
}

export default LandingPage;
