import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <h1>Contact</h1>
        <p>
          Please feel free to <a href="mailto:wyattsweet@gmail.com">email me</a>{' '}
          or reach out to me on social media via the links below. I look forward
          to chatting!
        </p>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
