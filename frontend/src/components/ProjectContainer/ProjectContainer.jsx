import React, { useState } from 'react';
import ProjectSelector from './ProjectSelector/ProjectSelector';
import ProjectModule from './ProjectModule/ProjectModule';
import styles from './ProjectContainer.module.css';
import { projects } from "../../data";

const ProjectContainer = () => {
  const [selectedProject, selectProject] = useState(0);

  return (
    <div className={styles.container}>
      <ProjectSelector selectProject={selectProject} projects={projects} />
      <ProjectModule
        title={projects[selectedProject].title}
        description={projects[selectedProject].description}
        github={projects[selectedProject].github}
        link={projects[selectedProject].link}
        className={styles.hideSmall}
      />
      <div className={styles.smallScroll}>
        {projects.map(project => (
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
};

export default ProjectContainer;
