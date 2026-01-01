import React from 'react';
import styles from './Experience.module.css';
import { JobContainer } from '../../components';

const Experience: React.FC = () => {
  return (
    <div id="experience" className={styles.container}>
      <h2>Experience</h2>
      <JobContainer />
    </div>
  );
}

export default Experience;
