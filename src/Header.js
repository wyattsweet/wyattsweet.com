import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link className="nameHeader" to="/">
        <h1 className="name">Wyatt</h1>
        <h1 className="last name">Sweet</h1>
        <p className="title">Software Engineer</p>
      </Link>
      <ul className="menuList">
        <li>
          <Link className="menuItem" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="menuItem" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="menuItem" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
