import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './BurgerIcon.module.css';

const BurgerIcon = ({ onClick, className, active }) => {
  return (
    <div className={classnames(styles.container, className, !active ? styles.change : null)} onClick={() => onClick()}>
      <div className={styles.bar1} />
      <div className={styles.bar2} />
      <div className={styles.bar3} />
    </div>
  );
}

BurgerIcon.defaultProps = {
  className: null
}
BurgerIcon.propTypes = {
  onClick: propTypes.func.isRequired,
  className: propTypes.string,
  active: propTypes.bool.isRequired
}
export default BurgerIcon;
