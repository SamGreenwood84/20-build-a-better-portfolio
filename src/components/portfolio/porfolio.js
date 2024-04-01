import React from 'react';
import Project from './Project'; // Import the Project component

const Portfolio = ({ projects }) => {
  return (
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <Project {...project} />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
