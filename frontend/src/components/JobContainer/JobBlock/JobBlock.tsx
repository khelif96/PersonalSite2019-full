import React from 'react';
import { TextBox } from '../..';
import styles from './JobBlock.module.css';

interface JobBlockProps {
  title: string;
  company: string;
  timePeriod: string;
  description: string;
}

const JobBlock: React.FC<JobBlockProps> = (props) => {
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

export default JobBlock;
