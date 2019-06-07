import React, { PureComponent } from 'react';
import './App.css';
import { Home, About, Experience } from './views';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Experience />
      </div>
    );
  }
}

export default App;
