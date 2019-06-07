import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import styles from './Experience.module.css';
import { JobBlock } from '../../components';

class Experience extends PureComponent {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="experience" className={styles.container}>
        <h2>Experience</h2>
        <JobBlock
          title="Work & Co"
          timePeriod="June 2018 - August 2018"
          description="Worked on a large scale multi platform digital product distribution system for Epic Games
•	Collaborated with design/ development teams to rapidly prototype and build features
•	Developed with React JS, Redux, Redux Sagas, GraphQL,NodeJS,
• Wrote unit tests for components and features.
•	Debugged several bugs across several browsers and environments.
•	Participated in daily stand up meetings with clients
•	Participated in PR review process "
        />
      </div>
    );
  }
}
export default Experience;
