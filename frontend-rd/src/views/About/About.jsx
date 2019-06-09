import React from 'react';
import styles from './About.module.css';
import { TextBox } from '../../components';

function About() {
  const introText = `
  I am a senior at the *city college of new york*
studying computer science.
  I am currently a software engineering intern at [mongodb](https://mongodb.com)
  and a lead websecurity tpm with
      [codepath/facebook](https://codepath.org/classes)
            If you want to learn more about me checkout my
      [linkedin](https://linkedin.com/in/mohamedkhelif)
            or my
      [github](https://github.com/khelif96)
. if you want to connect shoot me an
      [email](mailto:khelif96@gmail.com?subject=LetsConnect).
    `;
  return (
    <div id="about" className={styles.container}>
      <div className={styles.content}>
        <h2>About Me</h2>
        <TextBox className={styles.text}>{introText}</TextBox>
      </div>

    </div>
  );
}
export default About;
