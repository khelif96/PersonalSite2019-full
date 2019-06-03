import React from 'react';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div className={styles.container}>
      <ol className={styles.menuList}>
        <li>about</li>
        <li>experience</li>
        <li>projects</li>
        <li>contact</li>
      </ol>
    </div>
  );
}

export default Menu;
