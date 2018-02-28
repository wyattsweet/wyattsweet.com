import React, {Component} from 'react'

import Header from './Header'
import Footer from './Footer'

import Css from './svg/Css'
import Html from './svg/Html'
import Javascript from './svg/Javascript'
import Linux from './svg/Linux'
import Node from './svg/Node'
import Redux from './svg/Redux'
import ReactIcon from './svg/React'
import Vim from './svg/Vim'

import './About.css'

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
            Hello! I&apos;m a software engineer living in Oakland, CA. More than
            anything, I'm inspired by well crafted, creative products which
            leverage technology to help people be more efficient, make their
            work more enjoyable or enhance their life in some way.
          </p>
          <p>
            I&apos;m passionate about writing high quality code for the web. To
            me, that means code that is maintainable, declarative, reusable,
            well tested, performant and secure. I love learning new tools,
            technologies and coding languages. Then when it comes time to build
            something, I can use the right tool for the job. I&apos;m passionate
            about delivering beautiful, rich user experiences, and building
            awesome stuff.
          </p>
          <p>
            In addition to coding, I love spending time with my family. I'm also
            a{' '}
            <a href="https://www.discogs.com/user/wyattsweet/collection">
              music enthusiast
            </a>,{' '}
            <a href="https://www.goodreads.com/user/show/40339940-wyatt-sweet">
              active reader
            </a>, and a home improvement expert. If you would like to see me
            resume, you can find it{' '}
            <a href="https://github.com/wyattsweet/wyattsweet.com/blob/master/public/assets/wsweet_resume.pdf">
              right here
            </a>.
          </p>
          <div className="techIconBlock">
            <Html />
            <Css />
            <Javascript />
            <ReactIcon />
            <Redux />
            <Node />
            <Vim />
            <Linux />
          </div>
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default About
