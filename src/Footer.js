import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'

import GithubSvg from './svg/GithubSvg'
import Linkedin from './svg/Linkedin'
import Twitter from './svg/Twitter'

import './Footer.css'

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
        <FontAwesomeIcon size="lg" color="red" icon={faHeart} /> and{' '}
        <FontAwesomeIcon size="lg" color="#bc9d9d" icon={faCoffee} /> in
        Oakland, CA.
      </p>
    </div>
  )
}

export default Footer
