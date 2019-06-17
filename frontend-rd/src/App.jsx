import React, { PureComponent } from 'react';
import './App.css';
import {
  Home, About, Experience, Projects,
} from './views';
import {
  scroll,
} from './utils';

class App extends PureComponent {
  componentDidMount() {
    const app = document.getElementById('App');
    // console.log(scroll);
    scroll(app);
  }

  render() {
    return (
      <div id="App" className="App">
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
    );
  }
}

export default App;
