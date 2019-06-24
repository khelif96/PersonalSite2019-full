import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      Made with
      {'  '}
      <i className="fas fa-heart" />
      {' '}
in Brooklyn
    </div>
  );
}


export default Footer;
