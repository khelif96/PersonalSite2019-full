import React from 'react';
import propTypes from 'prop-types';
import styles from './ProjectModule.module.css';

function ProjectModule(props) {
  const {
    title,
    description,
    github,
    link,
  } = props;
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.links}>
        {github && <a href={github}>Git</a>}
        {link && <a href={link}>Link</a>}
      </div>
    </div>
  );
}

ProjectModule.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  link: propTypes.string,
  github: propTypes.string,
};

ProjectModule.defaultProps = {
  link: undefined,
  github: undefined,
};
export default ProjectModule;
