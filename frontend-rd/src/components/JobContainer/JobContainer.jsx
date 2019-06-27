import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import styles from './JobContainer.module.css';
import JobBlock from './JobBlock/JobBlock';
import { LoadingAnimation } from '..';

function JobContainer() {
  const GET_PROJECTS = gql`{
  jobs {
    title
    company
    timePeriod
    description
  }
}`;
  const { data, error, loading } = useQuery(GET_PROJECTS);
  if (loading) {
    return <div className={styles.loadingContainer}><LoadingAnimation /></div>;
  }
  if (error) {
    return (
      <div>
ERROR!
        {error.message}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {data.jobs.map(job => (
        <JobBlock
          key={job.title}
          title={job.title}
          company={job.company}
          timePeriod={job.timePeriod}
          description={job.description}
        />
      ))}
    </div>
  );
}

export default JobContainer;
