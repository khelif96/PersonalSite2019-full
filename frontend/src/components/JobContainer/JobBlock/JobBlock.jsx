import React from 'react';
import propTypes from 'prop-types';
import { TextBox } from '../..';
import styles from './JobBlock.module.css';

const JobBlock = (props) => {
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
      <TextBox>{description}</TextBox>

    </div>
  );
};

JobBlock.propTypes = {
  title: propTypes.string.isRequired,
  company: propTypes.string.isRequired,
  timePeriod: propTypes.string.isRequired,
  description: propTypes.string.isRequired,

};
export default JobBlock;
