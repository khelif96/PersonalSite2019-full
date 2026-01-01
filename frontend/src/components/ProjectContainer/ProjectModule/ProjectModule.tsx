import React from 'react';
import classnames from 'classnames';
import { TextBox } from '../..';
import styles from './ProjectModule.module.css';

interface ProjectModuleProps {
  title: string;
  description: string;
  link?: string;
  github?: string;
  className?: string;
}

const ProjectModule: React.FC<ProjectModuleProps> = (props) => {
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
};

export default ProjectModule;
