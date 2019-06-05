import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import styles from './Experience.module.css';

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
      </div>
    );
  }
}
export default Experience;
