import React, { useState } from 'react';
import styles from './Header.module.css';
import Menu from './Menu/Menu';
import MobileMenu from './Menu/MobileMenu/MobileMenu';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(true);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };
  return (

    <div className={styles.Header}>
      <div className={styles.right}>
        <MobileMenu menuOpened={menuOpened} toggleMenu={toggleMenu} className={styles.hideLarge} />
        <Menu onClick={toggleMenu} active={menuOpened} />

      </div>
    </div>
  );
};
export default Header;
