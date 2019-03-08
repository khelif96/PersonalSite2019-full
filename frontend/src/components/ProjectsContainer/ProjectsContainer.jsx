import React, { Component } from 'react';
import styles from './ProjectsContainer.module.css';
import ProjectInfo from './ProjectInfo/ProjectInfo';
import ProjectSelector from './ProjectSelector/ProjectSelector';


class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: 0,
    };

    this.projectSelect = this.projectSelect.bind(this);
  }

  projectSelect = (key) => {
    this.setState({
      selectedProject: key,
    });
  }

  render() {
    const {
      selectedProject,
    } = this.state;
    const projects = [
      {
        title: 'Rails',
        technologies: ['Javascript', 'React', 'Firebase', 'travis', 'Google Cloud Platform'],
        description: 'A Full stack progressive web app meant to help students keep up with their course load',
        link: 'https://rails-students.firebaseapp.com/',
        github: 'https://github.com/CSC59939/Rails',
        key: 0,
      },
      {
        title: 'Other',
        technologies: ['Javascript', 'React', 'Firebase', 'travis', 'Google Cloud Platform'],
        description: 'A Full stack progressive web app meant to help students keep up with their course load',
        link: 'https://rails-students.firebaseapp.com/',
        key: 1,
      },
      {
        title: 'Other2',
        technologies: ['Javascript', 'React', 'Firebase', 'travis', 'Google Cloud Platform'],
        description: 'A Full stack progressive web app meant to help students keep up with their course load',
        link: 'https://rails-students.firebaseapp.com/',
        github: 'https://github.com/CSC59939/Rails',
        key: 3,
      },
      {
        title: 'Other3',
        technologies: ['Javascript', 'React', 'Firebase', 'travis', 'Google Cloud Platform'],
        description: 'A Full stack progressive web app meant to help students keep up with their course load',
        link: 'https://rails-students.firebaseapp.com/',
        key: 4,
      },
      {
        title: 'Rails',
        technologies: ['Javascript', 'React', 'Firebase', 'travis', 'Google Cloud Platform'],
        description: 'A Full stack progressive web app meant to help students keep up with their course load',
        link: 'https://rails-students.firebaseapp.com/',
        github: 'https://github.com/CSC59939/Rails',
        key: 5,
      },
      {
        title: 'Other',
        technologies: ['Javascript', 'React', 'Firebase', 'travis', 'Google Cloud Platform'],
        description: 'A Full stack progressive web app meant to help students keep up with their course load',
        link: 'https://rails-students.firebaseapp.com/',
        key: 6,
      },
      {
        title: 'Other2',
        technologies: ['Javascript', 'React', 'Firebase', 'travis', 'Google Cloud Platform'],
        description: 'A Full stack progressive web app meant to help students keep up with their course load',
        link: 'https://rails-students.firebaseapp.com/',
        github: 'https://github.com/CSC59939/Rails',
        key: 7,
      },
      {
        title: 'Other3',
        technologies: ['Javascript', 'React', 'Firebase', 'travis', 'Google Cloud Platform'],
        description: 'A Full stack progressive web app meant to help students keep up with their course load',
        link: 'https://rails-students.firebaseapp.com/',
        key: 8,
      },
    ];

    return (
      <div className={styles.container}>
        <ProjectSelector projectSelect={this.projectSelect} projects={projects} />
        <ProjectInfo project={projects[selectedProject]} />
      </div>
    );
  }
}
export default ProjectsContainer;
