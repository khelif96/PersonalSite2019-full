import React from 'react';
import styles from './SelectorChoice.module.css';

const SelectorChoice = props => (
  <div
    className={styles.selection}
    onClick={() => props.projectSelect(props.selection.key)}
  >
    {props.selection.title}
  </div>
);

export default SelectorChoice;
