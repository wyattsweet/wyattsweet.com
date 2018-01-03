import React from 'react';

import LinkIcon from './svg/LinkIcon';

import './ProjectBlock.css';

const renderHighlights = () => <h3>Highlights</h3>;

const ProjectBlock = ({ name, img_src, description, links, highlights }) => {
  return (
    <div className="projectBlock">
      <h2>{name}</h2>
      <p>{description}</p>
      {highlights.length ? renderHighlights() : null}
      {highlights.map(highlight => {
        const imgSrc = highlight.img_src
          ? highlight.img_src
          : '/assets/portfolio/code.png';
        return (
          <div className="highlightBlock">
            <img src={imgSrc} alt="" />
            <h4 className="highlightTitle">{highlight.title}</h4>
            <p>{highlight.text}</p>
          </div>
        );
      })}
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
