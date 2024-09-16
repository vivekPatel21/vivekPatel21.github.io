import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './FooterBar.css'; // CSS file for styling

const FooterBar = () => {
  return (
    <div className="footer-bar">
      <div className="footer-icons">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
        <a
          href="https://github.com/vivekPatel21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default FooterBar;
