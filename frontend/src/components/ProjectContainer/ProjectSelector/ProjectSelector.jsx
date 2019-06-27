import React from 'react';
import propTypes from 'prop-types';
import styles from './ProjectSelector.module.css';

function button(name, id, selectProject) {
  return (
    <div onClick={() => selectProject(id)} className={styles.button} key={id}>
      <h4>{name}</h4>
    </div>
  );
}
function ProjectSelector(props) {
  const {
    projects,
    selectProject,
  } = props;
  return (
    <div className={styles.container}>
      {projects && projects.map((project, index) => button(project.title, index, selectProject))}
    </div>
  );
}

ProjectSelector.propTypes = {
  projects: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    link: propTypes.string,
    github: propTypes.string,
  })).isRequired,
  selectProject: propTypes.func.isRequired,
};
export default ProjectSelector;
