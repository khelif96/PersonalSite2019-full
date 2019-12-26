import React, { Fragment } from 'react';
import classnames from 'classnames';
import BurgerIcon from './BurgerIcon/BurgerIcon';
import styles from './Menu.module.css';

const Menu = ({ onClick, active }) => (
  <Fragment>
    <BurgerIcon onClick={onClick} className={styles.hideLarge} active={active} />
    <div className={classnames(styles.container, styles.hideSmall)}>
      <ol className={styles.menuList}>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#contact">contact</a></li>
      </ol>
    </div>
  </Fragment>
);

export default Menu;
