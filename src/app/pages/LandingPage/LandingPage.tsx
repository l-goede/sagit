import React from 'react';
import { useHistory } from 'react-router-dom';
import StartLogoIcon from '../../components/Icons/StartLogoIcon';
import styles from './LandingPage.module.css';

function LandingPage(): JSX.Element {
  const history = useHistory();
  history.push('/search');
  return (
    <div className={styles.landingPage}>
      <StartLogoIcon />
    </div>
  );
}

export default LandingPage;
