import React from 'react';

import GithubSvg from './svg/GithubSvg';
import Linkedin from './svg/Linkedin';
import Twitter from './svg/Twitter';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialIconsList">
        <GithubSvg />
        <Linkedin />
        <Twitter />
      </div>
      <p>
        <span role="img">&copy;</span> Wyatt Sweet 2018. Made with{' '}
        <span role="img">&hearts;</span> and{' '}
        <span aria-label="coffee" role="img">
          &#x2615;
        </span>{' '}
        in Oakland, CA.
      </p>
    </div>
  );
};

export default Footer;
