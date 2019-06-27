import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import { TextBox } from '../..';
import styles from './ProjectModule.module.css';

function ProjectModule(props) {
  const {
    title,
    description,
    github,
    link,
    className,
  } = props;
  return (
    <div className={classnames(styles.container, className)}>
      <h2>{title}</h2>
      <div className={styles.content}>
        <TextBox className={styles.textbox}>{description}</TextBox>
      </div>

      <div className={styles.links}>
        {github && <a href={github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>}
        {link && <a href={link} target="_blank" rel="noopener noreferrer"><i className="fas fa-link" /></a>}
      </div>
    </div>
  );
}

ProjectModule.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  link: propTypes.string,
  github: propTypes.string,
  className: propTypes.string,
};

ProjectModule.defaultProps = {
  link: undefined,
  github: undefined,
  className: undefined,
};
export default ProjectModule;
