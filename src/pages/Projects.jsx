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
          title="Sudoku Solver"
          image="sudokuIcon.jpg" 
          projectLink="/project1" 
          githubLink="https://github.com/vivekPatel21/SodukuSolver"
        />
        <ProjectBox
          title="This Website"
          image="profPic.jpg" 
          projectLink="/project2" 
          githubLink="https://github.com/vivekPatel21/vivekPatel21.github.io"
        />
      </div>
      <FooterBar />
    </div>
  );
};

export default Projects;