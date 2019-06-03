import React, { Component } from 'react';
import { Header, TextBox, ProjectsContainer } from '../../components';

import styles from './Home.module.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const introText = `
  i am a senior at the *city college of new york*
studying computer science.
  i am currently a lead websecurity tpm with
      [codepath/facebook](https://codepath.org/classes)
, previously at [work & co](https://work.co/).
            if you want to learn more about me checkout my
      [linkedin](https://linkedin.com/in/mohamedkhelif)
            or my
      [github](https://github.com/khelif96)
. if you want to connect shoot me an
      [email](mailto:khelif96@gmail.com?subject=LetsConnect).
    `;
    return (
      <div className={styles.Home}>
        <div className={styles.slantLeft} />
        <div className={styles.slantRight} />
        <div className={styles.content}>
          <Header />

          <div className={styles.introContainer}>
            <div className={styles.introTitle}>
              <h3>Hi My name is </h3>
              <h1>Mohamed Khelif</h1>
              <h1>I build things for the web</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
