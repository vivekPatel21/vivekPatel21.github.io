import React from 'react';
import './Project2.css';
import FooterBar from '../components/FooterBar'; // Adjust the import path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const Project2 = () => {
  return (
    <div className="project-page">
      <h1 className="project-title">Project 2: Website Overview</h1>
      
      <div className="project-details">
        <p>
          This website is built using a modern tech stack including React, HTML, and CSS. 
          React is utilized for building dynamic and interactive user interfaces. HTML provides 
          the structure of the web pages, while CSS is used to style and layout the content. 
          Together, these technologies create a responsive and user-friendly experience.
        </p>

        <p>This website version is actually an overhaul that I have been working on to replace my last website. So there were a few things discarded,
          such as the contact form through the FormSpree api that had been a form to contact me. I have came at this with a more minimalistic design approach,
          if you see anything off I apologize, As I work on this site I will do my best to fix any bugs and problems.</p>
        <p>
          <b>Technologies featured:</b> React, HTML, CSS
        </p>
      </div>

      <div className="tech-icons">
        <div className="icon-row">
          <FontAwesomeIcon icon={faReact} className="tech-icon" />
          <span>React</span>
        </div>
        <div className="icon-row">
          <FontAwesomeIcon icon={faHtml5} className="tech-icon" />
          <span>HTML</span>
        </div>
        <div className="icon-row">
          <FontAwesomeIcon icon={faCss3Alt} className="tech-icon" />
          <span>CSS</span>
        </div>
      </div>

      <FooterBar /> {/* Include the footer bar */}
    </div>
  );
};

export default Project2;
