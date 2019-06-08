import React from 'react';
import styles from './Projects.module.css';
import { ProjectContainer } from '../../components';

function Projects() {
  return (
    <div id="projects" className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.projectsContainer}>
        <ProjectContainer />
      </div>
    </div>
  );
}

export default Projects;
