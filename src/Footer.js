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
        &copy; Wyatt Sweet 2018. Made with &hearts; and &#x2615; &nbsp;&nbsp;in
        Oakland, CA. View the source code.
      </p>
    </div>
  );
};

export default Footer;
