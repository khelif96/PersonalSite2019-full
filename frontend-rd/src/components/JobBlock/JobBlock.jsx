import React from 'react';
import styles from './JobBlock.module.css';

function JobBlock(props) {
  const {
    title,
    timePeriod,
    description,
  } = props;
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <h4>{timePeriod}</h4>
      <p>{description}</p>

    </div>
  );
}

export default JobBlock;
