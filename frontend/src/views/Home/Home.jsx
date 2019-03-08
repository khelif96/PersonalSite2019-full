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
      <div className="Home">
        <Header />
        <div className="content">
          <div className="bio">
            <TextBox escapeHtml={false} className="bio_intro">
              {"my name is <span className='intro_name'>mohamed khelif.</span>"}
            </TextBox>
            <TextBox>
              {introText}
            </TextBox>
          </div>
          <ProjectsContainer />
        </div>
      </div>
    );
  }
}

export default Home;
