import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faCode, faFileText } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <button className="nav-button">
                <FontAwesomeIcon icon={faHome} className="nav-icon" />
                Home
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              <button className="nav-button">
                <FontAwesomeIcon icon={faCogs} className="nav-icon" />
                Projects
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className="nav-link">
              <button className="nav-button">
                <FontAwesomeIcon icon={faCode} className="nav-icon" />
                Work
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <a href="/Vivek_Patel_resume.pdf" className="nav-link" target="_blank" rel="noopener noreferrer">
              <button className="nav-button">
                <FontAwesomeIcon icon={faFileText} className="nav-icon" />
                Resume
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
