import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
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
