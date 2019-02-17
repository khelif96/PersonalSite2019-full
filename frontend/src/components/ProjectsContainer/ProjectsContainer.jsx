import React, { Component } from 'react';
import styles from './ProjectsContainer.css';
import ProjectInfo from './ProjectInfo/ProjectInfo';
import ProjectSelector from './ProjectSelector/ProjectSelector';

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    let projects: [
      {
      title: 'Rails',
      technologies: ['Javascript', 'React', 'Firebase', 'travis', 'Google Cloud Platform'],
      description: 'A Full stack progressive web app meant to help students keep up with their course load',
      link: 'https://rails-students.firebaseapp.com/',
      github: 'https://github.com/CSC59939/Rails'
    },
    {
    title: 'Other',
    technologies: ['Javascript', 'React', 'Firebase', 'travis', 'Google Cloud Platform'],
    description: 'A Full stack progressive web app meant to help students keep up with their course load',
    link: 'https://rails-students.firebaseapp.com/',
    }
    ];
    return (
      <div className={styles.container}>
        <ProjectSelector projects={projects} />
      </div>
    );
  }
}
export default ProjectsContainer;
