import React, { PureComponent } from 'react';
import './App.css';
import { Home } from './views';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
