import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Projects from './Projects';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainWrapper">
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
