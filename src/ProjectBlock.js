import React from 'react';

import LinkIcon from './svg/LinkIcon';

import './ProjectBlock.css';

const ProjectBlock = ({ name, img_src, description, links }) => {
  return (
    <div className="projectBlock">
      <h2>{name}</h2>
      {img_src ? <img src={img_src} alt={name} /> : null}
      <p>{description}</p>
      <ul className="linkSection">
        {links.map(link => (
          <li key={link.text}>
            <LinkIcon />{' '}
            <a href={link.href} target="blank">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectBlock;
