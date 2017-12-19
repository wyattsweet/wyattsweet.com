import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <p>
            Hello! I&apos;m a software developer and maker of cool stuff. I love
            crafting user interface and creating beautiful, rich user
            experiences. From design to deployment, I&apos;m interested in all
            aspects of the software development process. In addition to coding
            I&apos;m a family man, music enthusiast and home improvement project
            expert.
          </p>
          <p>
            You want to chat? I would love to hear from you! Please feel free to{' '}
            <a href="mailto:wyattsweet@gmail.com">email me</a>. If you&apos;re
            looking for my resume, you can find that{' '}
            <a href="/wsweet_resume.pdf">right here.</a>{' '}
          </p>
          <div className="techIconBlock">
            <h1>Toolbox</h1>
            <img
              alt="html5 icon"
              width="32"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg"
            />
            <img
              alt="css3 icon"
              width="32"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg"
            />
            <img
              alt="js icon"
              width="32"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg"
            />
            <img
              alt="react icon"
              width="32"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg"
            />
            <img
              alt="redux icon"
              width="32"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/redux.svg"
            />
            <img
              alt="node icon"
              width="32"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodejs.svg"
            />
            <img
              alt="vim icon"
              width="32"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vim.svg"
            />
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
