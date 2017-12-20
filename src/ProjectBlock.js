import React from 'react';

import './ProjectBlock.css';

const ProjectBlock = ({ name, img_src, description }) => {
  return (
    <div className="projectBlock">
      <h1>{name}</h1>
      <img src={img_src} alt={name} />
      <p>{description}</p>
    </div>
  );
};

export default ProjectBlock;
