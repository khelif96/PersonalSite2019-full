import React from 'react';
import styles from './JobContainer.module.css';
import { jobs } from "../../data";
import JobBlock from "./JobBlock/JobBlock";

const JobContainer = () => (
    <div className={styles.container}>
      {jobs.map(job => (
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

export default JobContainer;
