import React from 'react';
import './App.css';
import {
  Home, About, Experience, Projects, Contact,
} from './views';

import { Footer } from './components';


function App() {

  return (
      <div className="App">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
