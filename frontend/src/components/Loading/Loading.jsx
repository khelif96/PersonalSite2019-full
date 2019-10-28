import React from 'react';
import classnames from 'classnames';
import styles from './Loading.module.css';

const LoadingAnimation = () => (
  <div className={styles.foldingCube}>
    <div className={classnames(styles.cube1, styles.cube)} />
    <div className={classnames(styles.cube2, styles.cube)} />
    <div className={classnames(styles.cube3, styles.cube)} />
    <div className={classnames(styles.cube4, styles.cube)} />
  </div>

);

export default LoadingAnimation;
