import React from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import ApolloClient from 'apollo-boost';

import './App.css';
import {
  Home, About, Experience, Projects, Contact,
} from './views';

import { Footer } from './components';


function App() {
  const client = new ApolloClient({ uri: 'http://localhost:4000/' });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
