import React from 'react';
import ProjectBox from '../components/ProjectBox';
import './Projects.css';
import FooterBar from '../components/FooterBar';

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="project-container">
        <ProjectBox
          title="Project 1"
          image="/images/project1.jpg" // Update path as needed
          projectLink="/project1" // Update with actual project page link
          githubLink="https://github.com/yourusername/project1"
        />
        <ProjectBox
          title="Project 2"
          image="/images/project2.jpg" // Update path as needed
          projectLink="/project2" // Update with actual project page link
          githubLink="https://github.com/yourusername/project2"
        />
        {/* Add more ProjectBox components as needed */}
      </div>
      <FooterBar />
    </div>
  );
};

export default Projects;
