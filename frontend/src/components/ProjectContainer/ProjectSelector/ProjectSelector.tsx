import React from 'react';
import styles from './ProjectSelector.module.css';
import { Project } from '../../../data';

interface ProjectSelectorProps {
  projects: Project[];
  selectProject: (id: number) => void;
}

const ProjectButton = (name: string, id: number, selectProject: (id: number) => void) => (
  <div onClick={() => selectProject(id)} className={styles.button} key={id}>
    <h4>{name}</h4>
  </div>
);

const ProjectSelector: React.FC<ProjectSelectorProps> = (props) => {
  const {
    projects,
    selectProject,
  } = props;
  return (
    <div className={styles.container}>
      {projects && projects.map((project, index) => ProjectButton(project.title, index, selectProject))}
    </div>
  );
};

export default ProjectSelector;
