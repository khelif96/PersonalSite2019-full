import React from 'react';
import propTypes from 'prop-types';

import classnames from 'classnames';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ menuOpened, toggleMenu }) => (

  <div className={classnames(styles.container, styles.hideSmall, menuOpened && styles.hideMenu)}>
    <ol className={styles.menuList}>
      <li><a onClick={() => toggleMenu()} href="#about">about</a></li>
      <li><a onClick={() => toggleMenu()} href="#experience">experience</a></li>
      <li><a onClick={() => toggleMenu()} href="#projects">projects</a></li>
      <li><a onClick={() => toggleMenu()} href="#contact">contact</a></li>
    </ol>
  </div>
);

MobileMenu.propTypes = {
  menuOpened: propTypes.bool.isRequired,
  toggleMenu: propTypes.func.isRequired
}

export default MobileMenu;
