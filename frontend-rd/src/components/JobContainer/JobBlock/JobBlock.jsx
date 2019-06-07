import React from 'react';
import propTypes from 'prop-types';
import styles from './JobBlock.module.css';

function JobBlock(props) {
  const {
    title,
    company,
    timePeriod,
    description,
  } = props;
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <h4>
        {company}
        {' '}
-
        {' '}
        {timePeriod}
      </h4>
      <p>{description}</p>

    </div>
  );
}

JobBlock.propTypes = {
  title: propTypes.string.isRequired,
  company: propTypes.string.isRequired,
  timePeriod: propTypes.string.isRequired,
  description: propTypes.string.isRequired,

};
export default JobBlock;
