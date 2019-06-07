import React, { Fragment } from 'react';
import classnames from 'classnames';
import BurgerIcon from './BurgerIcon/BurgerIcon';
import styles from './Menu.module.css';

function Menu() {
  return (
    <Fragment>
      <BurgerIcon className={styles.hideLarge} />
      <div className={classnames(styles.container, styles.hideSmall)}>
        <ol className={styles.menuList}>
          <li><a href="#about">about</a></li>
          <li><a href="#experience">experience</a></li>
          <li><a href="#projects">projects</a></li>
          <li>contact</li>
        </ol>
      </div>
    </Fragment>
  );
}

export default Menu;
