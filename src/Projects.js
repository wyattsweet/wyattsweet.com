import React from 'react';

import Footer from './Footer';
import Header from './Header';
import ProjectBlock from './ProjectBlock';

import projectData from './projects.json';

const Projects = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <h1>Projects</h1>
        <p className="comingSoon">more coming soon</p>
        {projectData.projects.map(project => (
          <ProjectBlock {...project} key={project.name} />
        ))}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Projects;
