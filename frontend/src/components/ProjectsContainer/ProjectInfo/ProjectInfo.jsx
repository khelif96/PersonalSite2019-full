import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextBox } from '../..';
import styles from './ProjectInfo.module.css';

class ProjectInfo extends PureComponent {
  static propTypes = {
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      project,
    } = this.props;
    const {
      title,
      description,
    } = project;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <TextBox className={styles.title}>{title}</TextBox>
          <TextBox className={styles.description}>{description}</TextBox>
        </div>


      </div>
    );
  }
}
export default ProjectInfo;
