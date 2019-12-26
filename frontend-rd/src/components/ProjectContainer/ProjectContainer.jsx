import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import ProjectSelector from './ProjectSelector/ProjectSelector';
import ProjectModule from './ProjectModule/ProjectModule';
import { LoadingAnimation } from '..';
import styles from './ProjectContainer.module.css';

function ProjectContainer() {
  const [selectedProject, selectProject] = useState(0);

  const GET_PROJECTS = gql`{

  projects {
    title
    technologies
    description
    link
    github
  }
}`;

  const { data, error, loading } = useQuery(GET_PROJECTS);
  if (loading) {
    return <div className={styles.loadingContainer}><LoadingAnimation /></div>;
  }
  if (error) {
    return (
      <div className={styles.loadingContainer}>
        <h1>505</h1>
      </div>
    );
  }
  return (

    <div className={styles.container}>
      <ProjectSelector selectProject={selectProject} projects={data.projects} />
      <ProjectModule
        title={data.projects[selectedProject].title}
        description={data.projects[selectedProject].description}
        github={data.projects[selectedProject].github}
        link={data.projects[selectedProject].link}
        className={styles.hideSmall}
      />
      <div className={styles.smallScroll}>
        {data.projects.map(project => (
          <ProjectModule
            title={project.title}
            description={project.description}
            github={project.github}
            link={project.link}
            className={styles.scrollModule}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectContainer;
