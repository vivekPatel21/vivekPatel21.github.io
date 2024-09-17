import React from 'react';
import './Project1.css';
import FooterBar from '../components/FooterBar'; // Adjust the import path as necessary

const Project1 = () => {
  return (
    <div className="project-page">
      <h1 className="project-title">Project 1: Sudoku Solver</h1>
      
      <div className="project-content">
        <div className="project-details">
          <p>
            This project is a Sudoku Solver built in Java. It utilizes a backtracking algorithm and Postorder Traversal,
            to solve any valid Sudoku puzzle, providing an optimized solution for each input.
            If you would like to set this up and try it for yourself, please visit my github repository. 
            
          </p>
          <p>
            <b>Tags:</b> Java,Recursion,Backtracking Algorithm,Data Structures
          </p>
          
          <div className="project-links">
            <a href="https://github.com/vivekPatel21/SodukuSolver" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>

        <div className="project-image-container">
          <img
            src="Sudoku.jpg"
            alt="Sudoku Solver Screenshot"
            className="project-image"
          />
        </div>
        
        <div className="project-image-container">
          <img
            src="public/Postorder-traversal.gif"
            alt="Postorder Traversal Animation"
            className="project-image"
          />
        </div>
      </div>
      
      <FooterBar /> {/* Include the footer bar */}
    </div>
  );
};

export default Project1;
