import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

import Css from './svg/Css';
import Html from './svg/Html';
import Javascript from './svg/Javascript';
import Node from './svg/Node';
import Redux from './svg/Redux';
import ReactIcon from './svg/React';
import Vim from './svg/Vim';

import './About.css';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <h1>About</h1>
          <h2>
            Creative, product-focused software engineer striving to build
            innovative, world-class applications on the web.
          </h2>
          <p>
            Hello! I&apos;m a software engineer in Oakland, CA. I&apos;m
            passionate about JavaScript, React and all things related to
            software development on the web. I like writing code that is well
            tested, performant and maintainable. I&apos;m passionate about
            delivering beautiful, rich user experiences and building awesome
            stuff.
          </p>
          <p>
            In addition to coding I&apos;m a family man, music enthusiast and a
            home improvement expert. If you would like to see me resume, you can
            find it <a href="/assets/wsweet_resume.pdf">right here</a>.
          </p>
          <div className="techIconBlock">
            <Html />
            <Css />
            <Javascript />
            <ReactIcon />
            <Redux />
            <Node />
            <Vim />
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
