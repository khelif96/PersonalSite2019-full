import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SelectorChoice from '../SelectorChoice/SelectorChoice';
import styles from './ProjectSelector.module.css';

class ProjectSelector extends PureComponent {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })).isRequired,
    projectSelect: PropTypes.func.isRequired,
  };

static defaultProps = {
};

constructor(props) {
  super(props);
  this.state = {
  };
}

render() {
  const {
    projects,
    projectSelect,
  } = this.props;
  return (
    <div className={styles.container}>
      {projects.map(project => (
        <SelectorChoice
          projectSelect={projectSelect}
          selection={project}
        />
      ))}
    </div>
  );
}
}
export default ProjectSelector;
