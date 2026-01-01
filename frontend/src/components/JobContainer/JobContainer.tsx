import React from 'react';
import styles from './JobContainer.module.css';
import { jobs } from "../../data";
import JobBlock from "./JobBlock/JobBlock";

const JobContainer: React.FC = () => (
    <div className={styles.container}>
      {jobs.map((job, index) => (
        <JobBlock
          key={`${job.company}-${index}`}
          title={job.title}
          company={job.company}
          timePeriod={job.timePeriod}
          description={job.description}
        />
      ))}
    </div>
  );

export default JobContainer;
