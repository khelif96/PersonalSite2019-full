import React, { Component } from 'react';
import { Header, TextBox, ProjectsContainer } from '../../components';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <div className="content">
          <div className="bio">
            <TextBox className="bio_intro">
            my name is
              {' '}
              <span className="intro_name">mohamed khelif.</span>
            </TextBox>
            <TextBox>
          i am a senior at the
              {' '}
              <i>city college of new york</i>
              {' '}
studying computer science.
                      i am currently a lead websecurity tpm with
              {' '}
              <a href="https://codepath.org/classes">codepath/facebook</a>
, previously at
              {' '}
              <a href="https://work.co/">work & co</a>
.
                    if you want to learn more about me checkout my
              {' '}
              <a href="https://linkedin.com/in/mohamedkhelif">linkedin</a>
                    or my
              {' '}
              <a href="https://github.com/khelif96"> github</a>
. if you want to connect shoot me an
              {' '}
              <a href="mailto:khelif96@gmail.com?subject=LetsConnect">email</a>
            </TextBox>
          </div>
          <ProjectsContainer />
        </div>
      </div>
    );
  }
}

export default Home;
