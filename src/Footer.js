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
    </div>
  );
};

export default Footer;
