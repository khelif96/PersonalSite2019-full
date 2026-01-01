import React from 'react';
import classnames from 'classnames';
import styles from './BurgerIcon.module.css';

interface BurgerIconProps {
  onClick: () => void;
  className?: string | null;
  active: boolean;
}

const BurgerIcon: React.FC<BurgerIconProps> = ({ onClick, className, active }) => {
  return (
    <div className={classnames(styles.container, className, !active ? styles.change : null)} onClick={() => onClick()}>
      <div className={styles.bar1} />
      <div className={styles.bar2} />
      <div className={styles.bar3} />
    </div>
  );
}

export default BurgerIcon;
