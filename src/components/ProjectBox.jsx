import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './ProjectBox.css';

const ProjectBox = ({ title, image, projectLink, githubLink }) => {
  return (
    <div className="project-box">
      {/* Clickable box to navigate to the project page */}
      <Link to={projectLink} className="project-link">
        <div className="project-title">{title}</div>
        <div className="project-content">
          <img src={image} alt={title} className="project-image" />
        </div>
      </Link>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
        <FontAwesomeIcon icon={faGithub} className="github-icon" />
      </a>
    </div>
  );
};

export default ProjectBox;
