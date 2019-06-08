import React, { PureComponent } from 'react';
import ProjectSelector from './ProjectSelector/ProjectSelector';
import ProjectModule from './ProjectModule/ProjectModule';
import styles from './ProjectContainer.module.css';

class ProjectContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: 0,
    };
    this.selectProject = this.selectProject.bind(this);
  }

  selectProject = (id) => {
    this.setState({ selectedProject: id });
  }

  render() {
    const {
      selectedProject,
    } = this.state;
    const projects = [{
      title: 'Rails',
      description: `“Rails” is a platform for teachers and students. Rails will help organize all events in a class. From helping set due dates and reminders to providing a discussion forum for events in a class.
  Rails is being built as a Progressive Web App in which it is usable offline.

  Technologies
  Firebase - our noSQL Backend as a Service and authentication service
  Ant Design - our UI library
  Google Cloud - our API/Backend hosting
  ReactJS - our front-end framework
  Node.js - our back-end runtime and API
  React Big Calendar - our calendar view UI
  React Router - our routing manager
  Jest - our testing tool
  Enzyme - our testing tool

  I was responsible for several aspects of the application including system design, Continuation integration and deployment.
  I built out several core UI elements, as well as enabled Progressive web app functionality.
  I also developed the caching mechanisms and developed our client side routing authentication method.
  `,
      github: ' https://github.com/CSC59939/Rails',
      link: 'https://rails-students.firebaseapp.com/',
    },
    {
      title: 'Railroad Management System',
      description: `
      * Created Full-stack web application to manage Train Schedules and Reserve tickets.
  * Deployed MariaDB database on AWS RDS and created several tables to create a Normalized Database.
  * Developed NodeJS API to communicate with the database and manipulate tables as well as communicate with the front end and handle logic
  * Developed Front-end using ReactJS to cleanly and efficiently display data obtained from API Routes. And allow easy use by customers
  * Deployed on AWS EC2 Instance for front end server and Backend Server and AWS RDS for the database.`,
    },
    ];
    return (
      <div className={styles.container}>
        <ProjectSelector selectProject={this.selectProject} projects={projects} />
        <ProjectModule
          title={projects[selectedProject].title}
          description={projects[selectedProject].description}
          github={projects[selectedProject].github}
          link={projects[selectedProject].link}
        />
      </div>
    );
  }
}

export default ProjectContainer;
