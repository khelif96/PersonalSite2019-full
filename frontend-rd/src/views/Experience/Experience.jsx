import React from 'react';
import styles from './Experience.module.css';
import { JobContainer } from '../../components';

function Experience() {
  const jobs = [{
    title: 'Software Developer Internship',
    company: 'Work & Co',
    timePeriod: 'June 2018 - August 2018',
    description: `Worked on a large scale multi platform digital product distribution system for Epic Games
•	Collaborated with design/ development teams to rapidly prototype and build features
•	Developed with React JS, Redux, Redux Sagas, GraphQL,NodeJS,
• Wrote unit tests for components and features.
•	Debugged several bugs across several browsers and environments.
•	Participated in daily stand up meetings with clients
•	Participated in PR review process `,
  },
  {
    title: 'Software Developer Internship',
    company: 'Work & Co',
    timePeriod: 'June 2018 - August 2018',
    description: `Worked on a large scale multi platform digital product distribution system for Epic Games
•	Collaborated with design/ development teams to rapidly prototype and build features
•	Developed with React JS, Redux, Redux Sagas, GraphQL,NodeJS,
• Wrote unit tests for components and features.
•	Debugged several bugs across several browsers and environments.
•	Participated in daily stand up meetings with clients
•	Participated in PR review process `,
  },
  {
    title: 'Software Developer Internship',
    company: 'Work & Co',
    timePeriod: 'June 2018 - August 2018',
    description: `Worked on a large scale multi platform digital product distribution system for Epic Games
•	Collaborated with design/ development teams to rapidly prototype and build features
•	Developed with React JS, Redux, Redux Sagas, GraphQL,NodeJS,
• Wrote unit tests for components and features.
•	Debugged several bugs across several browsers and environments.
•	Participated in daily stand up meetings with clients
•	Participated in PR review process `,
  },
  {
    title: 'Software Developer Internship',
    company: 'Work & Co',
    timePeriod: 'June 2018 - August 2018',
    description: `Worked on a large scale multi platform digital product distribution system for Epic Games
•	Collaborated with design/ development teams to rapidly prototype and build features
•	Developed with React JS, Redux, Redux Sagas, GraphQL,NodeJS,
• Wrote unit tests for components and features.
•	Debugged several bugs across several browsers and environments.
•	Participated in daily stand up meetings with clients
•	Participated in PR review process `,
  }];
  return (
    <div id="experience" className={styles.container}>
      <h2>Experience</h2>
      <JobContainer jobs={jobs} />
    </div>
  );
}

export default Experience;
