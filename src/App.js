import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import About from './About';
import Projects from './Projects';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainWrapper">
        <Route exact path='/' component={About} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
      </div>
    );
  }
}

export default App;
