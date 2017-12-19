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
          <p>
            Hello! I&apos;m a software developer and maker of cool stuff. I love
            crafting user interface and creating beautiful, rich experiences.
            From design to deployment, I&apos;m interested in all aspects of the
            software development process. In addition to coding I&apos;m a
            family man, music enthusiast and home improvement project expert.
          </p>
          <p>
            You want to chat? I would love to hear from you! Please feel free to{' '}
            <a href="mailto:wyattsweet@gmail.com">email me</a>. If you&apos;re
            looking for my resume, you can find that{' '}
            <a href="/assets/wsweet_resume.pdf">right here.</a>{' '}
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
