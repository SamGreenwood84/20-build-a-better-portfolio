import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <h2 className="resume-heading">Resume</h2>
      <div className="resume-content">
        <p className="resume-description">
          {/* Your resume content goes here */}
          Your resume content goes here. You can include your skills, experiences, education, etc.
        </p>
        <a href="link/to/downloadable/resume" className="resume-download-link">Download Resume</a>
      </div>
    </section>
  );
};

export default Resume;
