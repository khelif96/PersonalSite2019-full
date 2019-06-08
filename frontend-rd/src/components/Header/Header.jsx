import React from 'react';
import styles from './Header.module.css';
import Menu from './Menu/Menu';

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.right}>
        <Menu />
      </div>
    </div>
  );
}
export default Header;
