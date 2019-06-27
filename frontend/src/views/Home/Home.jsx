import React from 'react';
import { Header } from '../../components';

import styles from './Home.module.css';

function Home() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.slants}>
        <div className={styles.slantLeft} />
        <div className={styles.slantRight} />
      </div>
      <div className={styles.content}>
        <Header />

        <div className={styles.introContainer}>
          <div className={styles.introTitle}>
            <h3>Hi My name is </h3>
            <h1>Mohamed Khelif</h1>
            <h1>I build things for the web</h1>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
