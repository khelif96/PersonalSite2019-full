import React, { PureComponent } from 'react';
import styles from './ProjectSelector.module.css';

class ProjectSelector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      projects,
    } = this.props;

    return (
      <div className={styles.container}>
        Test
        Dog
      </div>
    );
  }
}
export default ProjectSelector;
