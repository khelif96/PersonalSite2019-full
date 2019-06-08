import React from 'react';
import './App.css';
import {
  Home, About, Experience, Projects,
} from './views';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
