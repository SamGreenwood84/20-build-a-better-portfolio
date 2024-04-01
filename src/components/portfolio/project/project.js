import React from 'react';
import './project.css'; // Import CSS file for project styles

const Project = ({ title, image, description, demoLink, githubLink }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={demoLink} className="btn btn-primary mr-2">Demo</a>
        <a href={githubLink} className="btn btn-secondary">GitHub</a>
      </div>
    </div>
  );
};

export default Project;
