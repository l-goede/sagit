import React from 'react';
import StartLogoIcon from '../../components/Icons/StartLogoIcon';
import styles from './LandingPage.module.css';

function LandingPage(): JSX.Element {
  return (
    <div className={styles.landingPage}>
      <StartLogoIcon />
    </div>
  );
}

export default LandingPage;
