import React from 'react';
import propTypes from 'prop-types';
import styles from './JobContainer.module.css';
import JobBlock from './JobBlock/JobBlock';

function JobContainer(props) {
  const { jobs } = props;
  return (
    <div className={styles.container}>
      {jobs.map(job => (
        <JobBlock
          title={job.title}
          company={job.company}
          timePeriod={job.timePeriod}
          description={job.description}
        />
      ))}
    </div>
  );
}

JobContainer.propTypes = {
  jobs: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    company: propTypes.string.isRequired,
    timePeriod: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  })).isRequired,
};

export default JobContainer;
