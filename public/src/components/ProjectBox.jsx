import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './ProjectBox.css';

const ProjectBox = ({ title, image, projectLink, githubLink }) => {
  return (
    <div className="project-box">
      <Link to={projectLink} className="project-link">
        <div className="project-title">{title}</div>
        <div className="project-content">
          <img src={image} alt={title} className="project-image" />
        </div>
      </Link>
      <div className="project-footer">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
